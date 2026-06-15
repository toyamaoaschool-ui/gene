import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import firebaseConfig from "./firebase-config.js";
import { CATEGORIES, QUESTIONS, getQuestionsByCategory, getAllQuestions } from "./questions.js";

// ── Firebase init ─────────────────────────────────────────────────
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// ── App state ──────────────────────────────────────────────────────
let state = {
  page: "loading",   // loading | auth | dashboard | quiz | result | mockexam | mockresult
  user: null,
  history: [],
  quiz: {
    questions: [], current: 0, answers: [], answered: false,
    multiSelected: [], categoryId: null, categoryName: null,
  },
  result: null,
  mock: {
    questions: [],   // 60問
    current: 0,
    answers: {},     // { [questionId]: selectedIdx or [indices] }
    timeLeft: 3600,  // 60分
  },
  mockResult: null,
};

// タイマー用（re-render をまたいで保持）
let mockTimerId = null;

function setState(patch) {
  Object.assign(state, patch);
  render();
}

// ── Router ─────────────────────────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
  if (user) {
    state.user = user;
    await loadHistory();
    setState({ page: "dashboard" });
  } else {
    setState({ page: "auth" });
  }
});

// ── Firestore helpers ──────────────────────────────────────────────
async function loadHistory() {
  try {
    const ref = collection(db, "users", state.user.uid, "sessions");
    const q = query(ref, orderBy("completedAt", "desc"), limit(30));
    const snap = await getDocs(q);
    state.history = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.error("履歴の読み込みに失敗しました", e);
    state.history = [];
  }
}

async function saveSession(sessionData) {
  try {
    const ref = collection(db, "users", state.user.uid, "sessions");
    await addDoc(ref, { ...sessionData, completedAt: serverTimestamp() });
    await loadHistory();
  } catch (e) {
    console.error("セッションの保存に失敗しました", e);
  }
}

// ── Stats helpers ──────────────────────────────────────────────────
function computeStats() {
  const total = state.history.length;
  const avgScore = total === 0 ? 0 :
    Math.round(state.history.reduce((s, h) => s + (h.score / h.total * 100), 0) / total);
  const byCategory = {};
  CATEGORIES.forEach(c => { byCategory[c.id] = { correct: 0, total: 0 }; });
  state.history.forEach(h => {
    if (byCategory[h.categoryId]) {
      byCategory[h.categoryId].correct += h.score;
      byCategory[h.categoryId].total   += h.total;
    }
  });
  return { total, avgScore, byCategory };
}

// ── Auth actions ───────────────────────────────────────────────────
async function handleLogin(email, password) {
  try { await signInWithEmailAndPassword(auth, email, password); }
  catch (e) { showAuthError(e.code); }
}

async function handleSignup(email, password, displayName) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName });
  } catch (e) { showAuthError(e.code); }
}

function showAuthError(code) {
  const msgs = {
    "auth/invalid-email": "メールアドレスの形式が正しくありません",
    "auth/user-not-found": "アカウントが見つかりません",
    "auth/wrong-password": "パスワードが正しくありません",
    "auth/email-already-in-use": "このメールアドレスは既に使用されています",
    "auth/weak-password": "パスワードは6文字以上にしてください",
    "auth/invalid-credential": "メールアドレスまたはパスワードが正しくありません",
  };
  const el = document.getElementById("auth-error");
  if (el) { el.textContent = msgs[code] || "エラーが発生しました: " + code; el.hidden = false; }
}

// ── Quiz actions ───────────────────────────────────────────────────
function startQuiz(categoryId, count) {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  const questions = categoryId === "all"
    ? getAllQuestions(count)
    : getQuestionsByCategory(categoryId, count);
  state.quiz = { questions, current: 0, answers: [], answered: false,
    multiSelected: [], categoryId, categoryName: cat ? cat.name : "総合" };
  setState({ page: "quiz" });
}

function selectAnswer(idx) {
  if (state.quiz.answered) return;
  const q = state.quiz.questions[state.quiz.current];
  if (q.type === "multiple") {
    const s = state.quiz.multiSelected;
    const pos = s.indexOf(idx);
    if (pos === -1) s.push(idx); else s.splice(pos, 1);
    render();
  } else {
    state.quiz.answers.push({ selected: idx, correct: q.answer, questionId: q.id });
    state.quiz.answered = true;
    render();
  }
}

function submitMultiAnswer() {
  if (state.quiz.answered) return;
  const q = state.quiz.questions[state.quiz.current];
  const selected = [...state.quiz.multiSelected].sort();
  const correct  = [...q.answer].sort();
  state.quiz.answers.push({ selected, correct, questionId: q.id, isMultiple: true });
  state.quiz.answered = true;
  render();
}

function nextQuestion() {
  const { questions, current } = state.quiz;
  if (current + 1 >= questions.length) {
    finishQuiz();
  } else {
    state.quiz.current += 1;
    state.quiz.answered = false;
    state.quiz.multiSelected = [];
    render();
  }
}

async function finishQuiz() {
  const { questions, answers, categoryId, categoryName } = state.quiz;
  const score = answers.filter(a => {
    if (a.isMultiple) return JSON.stringify(a.selected) === JSON.stringify(a.correct);
    return a.selected === a.correct;
  }).length;
  const wrongQuestions = answers
    .filter(a => a.isMultiple
      ? JSON.stringify(a.selected) !== JSON.stringify(a.correct)
      : a.selected !== a.correct)
    .map(a => {
      const q = questions.find(q => q.id === a.questionId);
      return { ...q, selectedIdx: a.selected, isMultiple: a.isMultiple };
    });
  const result = { score, total: questions.length, wrongQuestions, categoryId, categoryName };
  await saveSession({ categoryId, categoryName, score, total: questions.length,
    wrongIds: wrongQuestions.map(q => q.id) });
  state.result = result;
  setState({ page: "result" });
}

// ── Mock exam actions ──────────────────────────────────────────────
const MOCK_QUESTION_COUNT = 60;
const MOCK_TIME_SECONDS   = 3600; // 60分
const MOCK_PASS_PCT       = 70;   // 合格ライン 70%

function startMockExam() {
  clearMockTimer();
  state.mock = {
    questions: getAllQuestions(MOCK_QUESTION_COUNT),
    current: 0,
    answers: {},
    timeLeft: MOCK_TIME_SECONDS,
  };
  setState({ page: "mockexam" });
  startMockTimer();
}

function startMockTimer() {
  mockTimerId = setInterval(() => {
    state.mock.timeLeft--;
    // タイマー表示だけ直接更新（全体 re-render しない）
    const el = document.getElementById("mock-timer");
    if (el) {
      el.textContent = formatTime(state.mock.timeLeft);
      if (state.mock.timeLeft <= 300) el.classList.add("warning");
    }
    if (state.mock.timeLeft <= 0) {
      clearMockTimer();
      finishMockExam(true);
    }
  }, 1000);
}

function clearMockTimer() {
  if (mockTimerId) { clearInterval(mockTimerId); mockTimerId = null; }
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function mockSelectAnswer(idx) {
  const q = state.mock.questions[state.mock.current];
  if (q.type === "multiple") {
    const cur = state.mock.answers[q.id] || [];
    const pos = cur.indexOf(idx);
    if (pos === -1) state.mock.answers[q.id] = [...cur, idx];
    else            state.mock.answers[q.id] = cur.filter(i => i !== idx);
  } else {
    state.mock.answers[q.id] = idx;
  }
  // 選択肢のハイライトだけ更新
  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    const sel = state.mock.answers[q.id];
    const isSelected = q.type === "multiple" ? (sel || []).includes(i) : sel === i;
    btn.style.borderColor = isSelected ? "var(--blue)" : "";
    btn.style.background  = isSelected ? "var(--blue-light)" : "";
  });
  // 問題ナビのドットを回答済みに更新
  const dot = document.querySelector(`.mock-dot[data-q="${state.mock.current}"]`);
  if (dot) dot.classList.add("answered");
}

function mockNavigate(idx) {
  state.mock.current = idx;
  render();
}

async function finishMockExam(timeUp = false) {
  clearMockTimer();
  const { questions, answers } = state.mock;
  const usedTime = MOCK_TIME_SECONDS - state.mock.timeLeft;

  let score = 0;
  const wrongQuestions = [];

  questions.forEach(q => {
    const sel = answers[q.id];
    let correct = false;
    if (q.type === "multiple") {
      const selSorted = Array.isArray(sel) ? [...sel].sort() : [];
      const ansSorted = [...q.answer].sort();
      correct = JSON.stringify(selSorted) === JSON.stringify(ansSorted);
    } else {
      correct = sel === q.answer;
    }
    if (correct) {
      score++;
    } else {
      wrongQuestions.push({ ...q, selectedIdx: sel ?? null, isMultiple: q.type === "multiple" });
    }
  });

  const pct = Math.round(score / questions.length * 100);
  const passed = pct >= MOCK_PASS_PCT;

  // カテゴリー別集計
  const catBreakdown = {};
  CATEGORIES.forEach(c => { catBreakdown[c.id] = { name: c.name, icon: c.icon, correct: 0, total: 0 }; });
  questions.forEach(q => {
    const sel = answers[q.id];
    if (!catBreakdown[q.category]) return;
    catBreakdown[q.category].total++;
    let correct = false;
    if (q.type === "multiple") {
      const selSorted = Array.isArray(sel) ? [...sel].sort() : [];
      correct = JSON.stringify(selSorted) === JSON.stringify([...q.answer].sort());
    } else {
      correct = sel === q.answer;
    }
    if (correct) catBreakdown[q.category].correct++;
  });

  state.mockResult = { score, total: questions.length, pct, passed, wrongQuestions,
    catBreakdown, usedTime, timeUp };

  await saveSession({
    categoryId: "mock", categoryName: "模擬試験",
    score, total: questions.length,
    wrongIds: wrongQuestions.map(q => q.id),
  });

  setState({ page: "mockresult" });
}

// ── Render ─────────────────────────────────────────────────────────
function render() {
  const root = document.getElementById("app");
  switch (state.page) {
    case "loading":    root.innerHTML = renderLoading();    break;
    case "auth":       root.innerHTML = renderAuth();       bindAuth();       break;
    case "dashboard":  root.innerHTML = renderDashboard();  bindDashboard();  break;
    case "quiz":       root.innerHTML = renderQuiz();       bindQuiz();       break;
    case "result":     root.innerHTML = renderResult();     bindResult();     break;
    case "mockexam":   root.innerHTML = renderMockExam();   bindMockExam();   break;
    case "mockresult": root.innerHTML = renderMockResult(); bindMockResult(); break;
  }
}

// ── Loading ────────────────────────────────────────────────────────
function renderLoading() {
  return `<div class="loading-screen"><div class="spinner"></div><p>読み込み中...</p></div>`;
}

// ── Auth ───────────────────────────────────────────────────────────
function renderAuth() {
  return `
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-logo">
        <h1>🎓 生成AIパスポート</h1>
        <p>自習プログラム</p>
      </div>
      <div class="auth-tabs">
        <button class="auth-tab active" id="tab-login" onclick="switchTab('login')">ログイン</button>
        <button class="auth-tab" id="tab-signup" onclick="switchTab('signup')">新規登録</button>
      </div>
      <div id="auth-error" class="auth-error" hidden></div>
      <div id="auth-form-login">
        <div class="form-group"><label>メールアドレス</label><input type="email" id="login-email" placeholder="example@email.com"></div>
        <div class="form-group"><label>パスワード</label><input type="password" id="login-pass" placeholder="6文字以上"></div>
        <button class="btn btn-primary" id="btn-login">ログイン</button>
      </div>
      <div id="auth-form-signup" hidden>
        <div class="form-group"><label>お名前</label><input type="text" id="signup-name" placeholder="山田 太郎"></div>
        <div class="form-group"><label>メールアドレス</label><input type="email" id="signup-email" placeholder="example@email.com"></div>
        <div class="form-group"><label>パスワード</label><input type="password" id="signup-pass" placeholder="6文字以上"></div>
        <button class="btn btn-primary" id="btn-signup">アカウントを作成</button>
      </div>
    </div>
  </div>`;
}

function bindAuth() {
  window.switchTab = (tab) => {
    document.getElementById("auth-form-login").hidden  = tab !== "login";
    document.getElementById("auth-form-signup").hidden = tab !== "signup";
    document.getElementById("tab-login").classList.toggle("active",  tab === "login");
    document.getElementById("tab-signup").classList.toggle("active", tab === "signup");
    const err = document.getElementById("auth-error"); if (err) err.hidden = true;
  };
  document.getElementById("btn-login")?.addEventListener("click", () =>
    handleLogin(document.getElementById("login-email").value, document.getElementById("login-pass").value));
  document.getElementById("btn-signup")?.addEventListener("click", () =>
    handleSignup(document.getElementById("signup-email").value, document.getElementById("signup-pass").value,
      document.getElementById("signup-name").value));
  ["login-email","login-pass","signup-email","signup-pass","signup-name"].forEach(id => {
    document.getElementById(id)?.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const isLogin = !document.getElementById("auth-form-login").hidden;
      isLogin ? document.getElementById("btn-login").click() : document.getElementById("btn-signup").click();
    });
  });
}

// ── Dashboard ──────────────────────────────────────────────────────
function renderDashboard() {
  const stats = computeStats();
  const name  = state.user.displayName || state.user.email;

  const mockHistory = state.history.filter(h => h.categoryId === "mock");
  const bestMock    = mockHistory.length > 0
    ? Math.max(...mockHistory.map(h => Math.round(h.score / h.total * 100))) : null;

  const categoryCards = CATEGORIES.map(cat => {
    const s = stats.byCategory[cat.id];
    const pct   = s.total === 0 ? 0 : Math.round(s.correct / s.total * 100);
    const totalQ = QUESTIONS.filter(q => q.category === cat.id).length;
    return `
    <div class="category-card" data-cat="${cat.id}">
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
      <div class="category-count">${totalQ}問</div>
      <div class="category-progress-bar">
        <div class="category-progress-fill" style="width:${pct}%;background:${cat.color}"></div>
      </div>
      <div style="font-size:11px;color:var(--text-muted);margin-top:4px">
        ${s.total > 0 ? `正解率 ${pct}%` : "未挑戦"}
      </div>
    </div>`;
  }).join("");

  const allCard = `
  <div class="category-card" data-cat="all">
    <div class="category-icon">📚</div>
    <div class="category-name">総合練習</div>
    <div class="category-count">${QUESTIONS.length}問（全カテゴリー）</div>
    <div class="category-progress-bar">
      <div class="category-progress-fill" style="width:${stats.avgScore}%;background:var(--blue)"></div>
    </div>
    <div style="font-size:11px;color:var(--text-muted);margin-top:4px">
      ${stats.total > 0 ? `平均正解率 ${stats.avgScore}%` : "未挑戦"}
    </div>
  </div>`;

  const historyRows = state.history.slice(0, 10).map(h => {
    const pct = Math.round(h.score / h.total * 100);
    const cls = pct >= 80 ? "score-high" : pct >= 60 ? "score-mid" : "score-low";
    const date = h.completedAt ? new Date(h.completedAt.seconds * 1000).toLocaleDateString("ja-JP") : "—";
    return `<tr>
      <td>${date}</td>
      <td>${h.categoryName}</td>
      <td><span class="score-badge ${cls}">${h.score}/${h.total}（${pct}%）</span></td>
    </tr>`;
  }).join("") || `<tr><td colspan="3" style="text-align:center;color:var(--text-muted);padding:20px">まだ学習履歴がありません</td></tr>`;

  const configHtml = `
  <div class="quiz-config" id="quiz-config" hidden>
    <h3>問題数を選択してください</h3>
    <div class="count-options">
      <button class="count-btn active" data-count="10">10問</button>
      <button class="count-btn" data-count="20">20問</button>
      <button class="count-btn" data-count="30">30問</button>
      <button class="count-btn" data-count="all">全問</button>
    </div>
    <button class="btn btn-primary" id="btn-start-quiz" style="width:auto">学習を始める →</button>
  </div>`;

  return `
  <div class="layout">
    <header>
      <div class="header-logo">🎓 生成AIパスポート自習</div>
      <div class="header-user">
        <span>${name}</span>
        <button class="btn btn-ghost" id="btn-logout" style="font-size:13px;padding:6px 12px">ログアウト</button>
      </div>
    </header>
    <main class="main">
      <div class="dashboard-greeting">
        <h2>ようこそ、${name.split("@")[0]} さん</h2>
        <p>今日も生成AIパスポートの合格を目指して学習しましょう</p>
      </div>
      <div class="stats-row">
        <div class="stat-card"><div class="stat-value">${stats.total}</div><div class="stat-label">学習セッション数</div></div>
        <div class="stat-card"><div class="stat-value">${stats.avgScore}<small style="font-size:16px">%</small></div><div class="stat-label">平均正解率</div></div>
        <div class="stat-card"><div class="stat-value">${QUESTIONS.length}</div><div class="stat-label">総問題数</div></div>
        <div class="stat-card"><div class="stat-value">${CATEGORIES.length}</div><div class="stat-label">カテゴリー数</div></div>
      </div>

      <div class="mock-exam-banner">
        <div class="mock-banner-info">
          <div class="mock-banner-title">📝 模擬試験</div>
          <div class="mock-banner-desc">本番形式・${MOCK_QUESTION_COUNT}問・60分・合格ライン${MOCK_PASS_PCT}%　※回答中は正誤が表示されません</div>
          ${bestMock !== null ? `<div class="mock-banner-best">自己ベスト：<strong>${bestMock}%</strong>${bestMock >= MOCK_PASS_PCT ? ' ✅ 合格圏' : ''}</div>` : ""}
        </div>
        <button class="btn btn-mock" id="btn-start-mock">模擬試験を始める →</button>
      </div>

      <p class="section-title">カテゴリーを選んで練習する</p>
      <div class="category-grid">${categoryCards}${allCard}</div>
      ${configHtml}

      <div class="history-section">
        <p class="section-title">学習履歴（直近10件）</p>
        <table class="history-table">
          <thead><tr><th>日付</th><th>カテゴリー</th><th>スコア</th></tr></thead>
          <tbody>${historyRows}</tbody>
        </table>
      </div>
    </main>
  </div>`;
}

function bindDashboard() {
  document.getElementById("btn-logout")?.addEventListener("click", () => signOut(auth));
  document.getElementById("btn-start-mock")?.addEventListener("click", startMockExam);

  let selectedCat = null, selectedCount = 10;
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".category-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedCat = card.dataset.cat;
      document.getElementById("quiz-config").hidden = false;
    });
  });
  document.querySelectorAll(".count-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".count-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCount = btn.dataset.count === "all" ? null : parseInt(btn.dataset.count);
    });
  });
  document.getElementById("btn-start-quiz")?.addEventListener("click", () => {
    if (selectedCat) startQuiz(selectedCat, selectedCount);
  });
}

// ── Quiz ───────────────────────────────────────────────────────────
function renderQuiz() {
  const { questions, current, answered } = state.quiz;
  const q   = questions[current];
  const pct = Math.round((current / questions.length) * 100);
  const ans = answered ? state.quiz.answers[state.quiz.answers.length - 1] : null;

  const isMultiple = q.type === "multiple";
  const options = q.options.map((opt, i) => {
    let style = "";
    if (answered) {
      const correctArr  = isMultiple ? ans.correct   : [q.answer];
      const selectedArr = isMultiple ? ans.selected  : [ans.selected];
      if (correctArr.includes(i))       style = "border-color:#16a34a;background:#f0fdf4;";
      else if (selectedArr.includes(i)) style = "border-color:#dc2626;background:#fef2f2;";
    } else if (isMultiple && state.quiz.multiSelected.includes(i)) {
      style = "border-color:var(--blue);background:var(--blue-light);";
    }
    const cb = isMultiple ? `<span style="display:inline-block;width:16px;height:16px;border:2px solid currentColor;border-radius:3px;margin-right:8px;vertical-align:middle;${state.quiz.multiSelected.includes(i)||(answered&&(isMultiple?ans.correct.includes(i):q.answer===i))?'background:currentColor;':''}"></span>` : "";
    return `<button class="option-btn" data-idx="${i}" ${answered?"disabled":""} style="${style}">${cb}${opt}</button>`;
  }).join("");

  const isCorrect = answered && (isMultiple
    ? JSON.stringify((ans.selected||[]).sort()) === JSON.stringify((ans.correct||[]).sort())
    : ans.selected === q.answer);

  return `
  <div class="layout">
    <header>
      <div class="header-logo">🎓 生成AIパスポート自習</div>
      <button class="btn btn-ghost" id="btn-quit" style="font-size:13px;padding:6px 12px">中断してトップへ</button>
    </header>
    <main class="main">
      <div class="quiz-page">
        <div class="quiz-header">
          <span class="quiz-progress-text">${current + 1} / ${questions.length}</span>
          <div class="quiz-progress-wrap"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
          <span style="font-size:12px;color:var(--text-muted)">${state.quiz.categoryName}</span>
        </div>
        <div class="question-card">
          <div class="question-num">問題 ${current + 1}${isMultiple?` <span style="font-size:11px;background:#eff6ff;color:#2563eb;padding:2px 8px;border-radius:99px;font-weight:600;">複数選択</span>`:""}
          </div>
          <div class="question-text">${q.question}</div>
        </div>
        <div class="options-list">${options}</div>
        ${!answered && isMultiple ? `<div class="quiz-nav"><button class="btn btn-primary" id="btn-submit-multi" style="width:auto" ${state.quiz.multiSelected.length===0?"disabled":""}>回答する</button></div>` : ""}
        ${answered ? `<div class="explanation-box"><strong>${isCorrect?"✅ 正解！":"❌ 不正解"}</strong>${q.explanation}</div>` : ""}
        ${answered ? `<div class="quiz-nav"><button class="btn btn-primary" id="btn-next" style="width:auto">${current+1>=questions.length?"結果を見る":"次の問題 →"}</button></div>` : ""}
      </div>
    </main>
  </div>`;
}

function bindQuiz() {
  document.getElementById("btn-quit")?.addEventListener("click", () => setState({ page: "dashboard" }));
  document.querySelectorAll(".option-btn:not([disabled])").forEach(btn =>
    btn.addEventListener("click", () => selectAnswer(parseInt(btn.dataset.idx))));
  document.getElementById("btn-submit-multi")?.addEventListener("click", submitMultiAnswer);
  document.getElementById("btn-next")?.addEventListener("click", nextQuestion);
}

// ── Result ─────────────────────────────────────────────────────────
function renderResult() {
  const { score, total, wrongQuestions, categoryName } = state.result;
  const pct  = Math.round(score / total * 100);
  const emoji = pct >= 80 ? "🎉" : pct >= 60 ? "😊" : "💪";
  const msg   = pct >= 80 ? "素晴らしい成績です！" : pct >= 60 ? "もう一息です！" : "繰り返し学習しましょう";

  const wrongHtml = wrongQuestions.length === 0
    ? `<p style="text-align:center;color:var(--text-muted);padding:20px">全問正解です！🎉</p>`
    : wrongQuestions.map(q => {
        const yourAns    = q.isMultiple ? q.selectedIdx.map(i => q.options[i]).join("、") : q.options[q.selectedIdx];
        const correctAns = q.isMultiple ? q.answer.map(i => q.options[i]).join("、") : q.options[q.answer];
        return `<div class="wrong-item">
          <div class="q-text">${q.question}${q.isMultiple?` <span style="font-size:11px;background:#eff6ff;color:#2563eb;padding:2px 6px;border-radius:99px;">複数選択</span>`:""}</div>
          <div class="answer-row"><span class="label">あなたの回答：</span><span class="wrong-ans">${yourAns||"（未選択）"}</span></div>
          <div class="answer-row"><span class="label">正解：</span><span class="correct-ans">${correctAns}</span></div>
          <div class="wrong-explanation">${q.explanation}</div>
        </div>`;
      }).join("");

  return `
  <div class="layout">
    <header>
      <div class="header-logo">🎓 生成AIパスポート自習</div>
      <button class="btn btn-ghost" id="btn-home" style="font-size:13px;padding:6px 12px">ダッシュボードへ</button>
    </header>
    <main class="main">
      <div class="result-page">
        <div class="result-card">
          <div class="result-score-circle">
            <div class="result-score-num">${score}</div>
            <div class="result-score-den">/ ${total}</div>
          </div>
          <div class="result-title">${emoji} ${msg}</div>
          <div class="result-sub">${categoryName}　正解率 ${pct}%</div>
        </div>
        ${wrongQuestions.length > 0 ? `<p class="section-title" style="margin-bottom:12px">間違えた問題の解説</p>` : ""}
        <div class="wrong-list">${wrongHtml}</div>
        <div class="result-actions" style="margin-top:24px">
          <button class="btn btn-primary" id="btn-retry" style="width:auto">同じカテゴリーを再挑戦</button>
          <button class="btn btn-secondary" id="btn-home2">ダッシュボードへ</button>
        </div>
      </div>
    </main>
  </div>`;
}

function bindResult() {
  document.getElementById("btn-home")?.addEventListener("click",  () => setState({ page: "dashboard" }));
  document.getElementById("btn-home2")?.addEventListener("click", () => setState({ page: "dashboard" }));
  document.getElementById("btn-retry")?.addEventListener("click", () =>
    startQuiz(state.result.categoryId, state.result.total));
}

// ── Mock Exam ──────────────────────────────────────────────────────
function renderMockExam() {
  const { questions, current, answers, timeLeft } = state.mock;
  const q   = questions[current];
  const sel = answers[q.id];

  const dots = questions.map((_, i) => {
    const isDone = answers[questions[i].id] !== undefined;
    return `<button class="mock-dot ${isDone?"answered":""} ${i===current?"current":""}" data-q="${i}">${i+1}</button>`;
  }).join("");

  const isMultiple = q.type === "multiple";
  const options = q.options.map((opt, i) => {
    const isSelected = isMultiple ? (Array.isArray(sel) && sel.includes(i)) : sel === i;
    const style = isSelected ? "border-color:var(--blue);background:var(--blue-light);" : "";
    const cb = isMultiple ? `<span style="display:inline-block;width:16px;height:16px;border:2px solid currentColor;border-radius:3px;margin-right:8px;vertical-align:middle;${isSelected?"background:currentColor;":""}"></span>` : "";
    return `<button class="option-btn" data-idx="${i}" style="${style}">${cb}${opt}</button>`;
  }).join("");

  const answered = Object.keys(answers).length;
  const isLast   = current + 1 >= questions.length;

  return `
  <div class="layout">
    <header>
      <div class="header-logo">📝 模擬試験</div>
      <div style="display:flex;align-items:center;gap:16px">
        <div id="mock-timer" class="mock-timer${timeLeft<=300?" warning":""}">${formatTime(timeLeft)}</div>
        <button class="btn btn-secondary" id="btn-mock-finish" style="font-size:13px;padding:6px 14px">試験を終了する</button>
      </div>
    </header>
    <div class="mock-nav-bar">
      <div class="mock-nav-inner">
        <span style="font-size:12px;color:var(--text-muted);white-space:nowrap">回答済 ${answered}/${questions.length}</span>
        <div class="mock-nav-dots">${dots}</div>
      </div>
    </div>
    <main class="main">
      <div class="quiz-page">
        <div class="question-card">
          <div class="question-num">問題 ${current + 1} / ${questions.length}${isMultiple?` <span style="font-size:11px;background:#eff6ff;color:#2563eb;padding:2px 8px;border-radius:99px;font-weight:600;">複数選択</span>`:""}</div>
          <div class="question-text">${q.question}</div>
        </div>
        <div class="options-list">${options}</div>
        <div class="quiz-nav" style="justify-content:space-between">
          <button class="btn btn-secondary" id="btn-mock-prev" ${current===0?"disabled":""}>← 前の問題</button>
          <button class="btn btn-primary"   id="btn-mock-next">${isLast?"確認して終了":"次の問題 →"}</button>
        </div>
      </div>
    </main>
  </div>`;
}

function bindMockExam() {
  document.querySelectorAll(".option-btn").forEach(btn =>
    btn.addEventListener("click", () => mockSelectAnswer(parseInt(btn.dataset.idx))));
  document.querySelectorAll(".mock-dot").forEach(dot =>
    dot.addEventListener("click", () => mockNavigate(parseInt(dot.dataset.q))));
  document.getElementById("btn-mock-prev")?.addEventListener("click", () =>
    mockNavigate(state.mock.current - 1));
  document.getElementById("btn-mock-next")?.addEventListener("click", () => {
    if (state.mock.current + 1 >= state.mock.questions.length) {
      confirmFinishMock();
    } else {
      mockNavigate(state.mock.current + 1);
    }
  });
  document.getElementById("btn-mock-finish")?.addEventListener("click", confirmFinishMock);
}

function confirmFinishMock() {
  const answered  = Object.keys(state.mock.answers).length;
  const remaining = state.mock.questions.length - answered;
  if (remaining > 0) {
    if (!confirm(`未回答の問題が ${remaining} 問あります。このまま終了しますか？`)) return;
  }
  finishMockExam(false);
}

// ── Mock Result ────────────────────────────────────────────────────
function renderMockResult() {
  const { score, total, pct, passed, wrongQuestions, catBreakdown, usedTime, timeUp } = state.mockResult;
  const passScore = Math.ceil(total * MOCK_PASS_PCT / 100);

  const catRows = Object.values(catBreakdown)
    .filter(c => c.total > 0)
    .map(c => {
      const p   = Math.round(c.correct / c.total * 100);
      const cls = p >= 80 ? "score-high" : p >= 60 ? "score-mid" : "score-low";
      return `<tr>
        <td>${c.icon} ${c.name}</td>
        <td>${c.correct}/${c.total}</td>
        <td><span class="score-badge ${cls}">${p}%</span></td>
      </tr>`;
    }).join("");

  const wrongHtml = wrongQuestions.length === 0
    ? `<p style="text-align:center;color:var(--text-muted);padding:20px">全問正解です！🎉</p>`
    : wrongQuestions.map(q => {
        const sel        = q.selectedIdx;
        const yourAns    = q.isMultiple
          ? (Array.isArray(sel) ? sel.map(i => q.options[i]).join("、") : "（未回答）")
          : (sel !== null && sel !== undefined ? q.options[sel] : "（未回答）");
        const correctAns = q.isMultiple
          ? q.answer.map(i => q.options[i]).join("、")
          : q.options[q.answer];
        return `<div class="wrong-item">
          <div class="q-text">${q.question}${q.isMultiple?` <span style="font-size:11px;background:#eff6ff;color:#2563eb;padding:2px 6px;border-radius:99px;">複数選択</span>`:""}</div>
          <div class="answer-row"><span class="label">あなたの回答：</span><span class="wrong-ans">${yourAns}</span></div>
          <div class="answer-row"><span class="label">正解：</span><span class="correct-ans">${correctAns}</span></div>
          <div class="wrong-explanation">${q.explanation}</div>
        </div>`;
      }).join("");

  const mm = String(Math.floor(usedTime / 60)).padStart(2, "0");
  const ss = String(usedTime % 60).padStart(2, "0");

  return `
  <div class="layout">
    <header>
      <div class="header-logo">🎓 生成AIパスポート自習</div>
      <button class="btn btn-ghost" id="btn-home" style="font-size:13px;padding:6px 12px">ダッシュボードへ</button>
    </header>
    <main class="main">
      <div class="result-page">
        ${timeUp ? `<div style="background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;padding:10px 16px;border-radius:8px;margin-bottom:16px;font-size:14px;">⏰ 時間切れで試験が終了しました</div>` : ""}
        <div class="result-card">
          <div class="result-score-circle" style="border-color:${passed?"#16a34a":"#ef4444"}">
            <div class="result-score-num" style="color:${passed?"#16a34a":"#ef4444"}">${score}</div>
            <div class="result-score-den">/ ${total}</div>
          </div>
          <div class="result-title">${passed?"🎉 合格！":"💪 不合格"}</div>
          <div class="result-sub">正解率 ${pct}%　合格ライン ${MOCK_PASS_PCT}%（${passScore}問以上）</div>
          <div style="font-size:13px;color:var(--text-muted);margin-top:8px">所要時間 ${mm}分${ss}秒</div>
        </div>

        <div class="history-section" style="margin-bottom:24px">
          <p class="section-title">カテゴリー別成績</p>
          <table class="history-table">
            <thead><tr><th>カテゴリー</th><th>正解数</th><th>正解率</th></tr></thead>
            <tbody>${catRows}</tbody>
          </table>
        </div>

        ${wrongQuestions.length > 0 ? `<p class="section-title" style="margin-bottom:12px">間違えた問題の解説（${wrongQuestions.length}問）</p>` : ""}
        <div class="wrong-list">${wrongHtml}</div>
        <div class="result-actions" style="margin-top:24px">
          <button class="btn btn-primary" id="btn-retry-mock" style="width:auto">もう一度模擬試験を受ける</button>
          <button class="btn btn-secondary" id="btn-home2">ダッシュボードへ</button>
        </div>
      </div>
    </main>
  </div>`;
}

function bindMockResult() {
  document.getElementById("btn-home")?.addEventListener("click",       () => setState({ page: "dashboard" }));
  document.getElementById("btn-home2")?.addEventListener("click",      () => setState({ page: "dashboard" }));
  document.getElementById("btn-retry-mock")?.addEventListener("click", startMockExam);
}

// ── Bootstrap ──────────────────────────────────────────────────────
render();
