# 生成AIパスポート 自習プログラム

## セットアップ手順

### 1. Firebase プロジェクトを作成する

1. [Firebase Console](https://console.firebase.google.com/) を開く
2. 「プロジェクトを追加」→ プロジェクト名を入力して作成
3. **Authentication** を有効化
   - 左メニュー「Authentication」→「始める」
   - 「Sign-in method」タブ → 「メール/パスワード」を有効にする
4. **Firestore Database** を有効化
   - 左メニュー「Firestore Database」→「データベースの作成」
   - 本番モード or テストモードで開始（後でルールを設定）
5. **Webアプリを登録**
   - 左メニュー「プロジェクトの概要（⚙歯車）」→「プロジェクトの設定」
   - 「マイアプリ」→「</>（Web）」アイコンをクリック
   - アプリのニックネームを入力して登録
   - 表示される `firebaseConfig` をコピー

### 2. `firebase-config.js` を編集する

`firebase-config.js` を開き、コピーした設定値を貼り付ける：

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### 3. Firestore セキュリティルールを設定する

Firebase Console → Firestore Database → 「ルール」タブ：

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. アプリを起動する

`index.html` を HTTP サーバーで配信する（`file://` では ES Modules が動作しません）。

**簡単な方法：VS Code の Live Server 拡張機能**
1. VS Code で `index.html` を右クリック →「Open with Live Server」

**または Python で簡易サーバーを起動：**
```bash
python -m http.server 8080
```
ブラウザで `http://localhost:8080` を開く

---

## 問題構成

| カテゴリー | 問題数 |
|---|---|
| 生成AIの基礎 | 12問 |
| 主要サービス・ツール | 12問 |
| プロンプトエンジニアリング | 12問 |
| リスク・倫理 | 12問 |
| 法律・ガイドライン | 12問 |
| **合計** | **60問** |

## Firebase Hosting へのデプロイ（任意）

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```
