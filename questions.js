export const CATEGORIES = [
  { id: "basics",    name: "生成AIの基礎",              icon: "🧠", color: "#3b82f6" },
  { id: "services",  name: "主要サービス・ツール",        icon: "🛠️", color: "#8b5cf6" },
  { id: "prompting", name: "プロンプトエンジニアリング",   icon: "✏️", color: "#10b981" },
  { id: "risks",     name: "リスク・倫理",               icon: "⚠️", color: "#f59e0b" },
  { id: "laws",      name: "法律・ガイドライン",          icon: "⚖️", color: "#ef4444" },
  { id: "business",  name: "業務活用",                   icon: "💼", color: "#0ea5e9" },
  { id: "security",  name: "セキュリティ",               icon: "🔒", color: "#dc2626" },
  { id: "trends",    name: "最新動向",                   icon: "📡", color: "#059669" },
];

export const QUESTIONS = [
  // ── 生成AIの基礎 ──────────────────────────────────────────────
  {
    id: "b01", category: "basics",
    question: "LLM の正式名称として正しいものはどれですか？",
    options: ["Large Learning Model", "Large Language Model", "Linear Language Machine", "Layered Logic Module"],
    answer: 1,
    explanation: "LLM は Large Language Model（大規模言語モデル）の略です。膨大なテキストデータで事前学習された深層学習モデルで、GPT・Claude・Gemini などが代表例です。"
  },
  {
    id: "b02", category: "basics",
    question: "トランスフォーマー（Transformer）アーキテクチャの核となる技術はどれですか？",
    options: ["畳み込みニューラルネットワーク（CNN）", "再帰型ニューラルネットワーク（RNN）", "セルフアテンション機構", "サポートベクターマシン（SVM）"],
    answer: 2,
    explanation: "トランスフォーマーはセルフアテンション機構を用いて、文中の単語間の関係を効率よく学習します。2017年の論文「Attention is All You Need」で提案されました。"
  },
  {
    id: "b03", category: "basics",
    question: "GPT の正式名称として正しいものはどれですか？",
    options: ["General Purpose Transformer", "Generative Pre-trained Transformer", "Graphical Processing Technology", "Guided Pattern Training"],
    answer: 1,
    explanation: "GPT は Generative Pre-trained Transformer の略です。OpenAI が開発した大規模言語モデルで、大量のテキストデータで事前学習されています。"
  },
  {
    id: "b04", category: "basics",
    question: "「ハルシネーション」とはAIの文脈でどのような現象を指しますか？",
    options: ["AIが画像を生成する現象", "AIが事実と異なる情報を自信をもって出力する現象", "AIが応答を拒否する現象", "AIが処理速度を超えてエラーを起こす現象"],
    answer: 1,
    explanation: "ハルシネーション（幻覚）は、AIが実際には存在しない情報や事実と異なる内容を、あたかも正確であるかのように生成してしまう現象です。出力を鵜呑みにせず検証することが重要です。"
  },
  {
    id: "b05", category: "basics",
    question: "ファインチューニング（Fine-tuning）とはどのような手法ですか？",
    options: ["事前学習済みモデルを特定タスク向けに追加学習する手法", "モデルのパラメータをゼロから学習する手法", "データを細かく分割して学習する手法", "モデルの推論速度を最適化する手法"],
    answer: 0,
    explanation: "ファインチューニングは、大規模な事前学習済みモデルを特定のタスクや領域向けに少量のデータで追加学習する手法です。少ないコストで専門性を高められます。"
  },
  {
    id: "b06", category: "basics",
    question: "RAG（Retrieval-Augmented Generation）の説明として正しいものはどれですか？",
    options: ["音声データを使ってモデルを学習する手法", "外部の知識データベースを検索してから回答を生成する手法", "複数のモデルを組み合わせて精度を上げる手法", "モデルの出力を人間が評価して強化学習する手法"],
    answer: 1,
    explanation: "RAGは外部知識ベースから関連情報を検索（Retrieval）し、その情報を文脈として組み込んで回答を生成（Generation）する手法です。最新情報への対応やハルシネーション低減に有効です。"
  },
  {
    id: "b07", category: "basics",
    question: "マルチモーダルAIとはどのようなAIですか？",
    options: ["複数の言語を扱えるAI", "テキスト・画像・音声など複数の種類のデータを扱えるAI", "複数のモデルを並列で動かすAI", "多段階の推論を行うAI"],
    answer: 1,
    explanation: "マルチモーダルAIは、テキスト・画像・音声・動画など複数のモダリティ（データ形式）を入出力として扱えるAIです。GPT-4o や Gemini 1.5 などが代表例です。"
  },
  {
    id: "b08", category: "basics",
    question: "トークン（Token）とはLLMの文脈でどのような概念ですか？",
    options: ["モデルの認証に使うキー情報", "テキストをモデルが処理できるよう分割した単位", "GPU の計算リソース単位", "API の利用料金の単位（常に1文字＝1トークン）"],
    answer: 1,
    explanation: "トークンはテキストを分割した処理単位です。英語では概ね1単語≈1トークン、日本語では1〜2文字程度がトークン1つに相当することが多いです。LLMはトークン単位で処理・課金されます。"
  },
  {
    id: "b09", category: "basics",
    question: "生成AIの学習データに関する問題点として最も適切なものはどれですか？",
    options: ["データが多すぎると学習が不安定になる", "学習データに含まれるバイアスや差別的内容をモデルが学習してしまう可能性がある", "インターネットのデータは著作権フリーなので問題ない", "データ量が少ないほど高品質なモデルができる"],
    answer: 1,
    explanation: "生成AIはインターネット上の大量データで学習しますが、そのデータにはバイアス・差別・有害表現が含まれる場合があります。これがモデルの偏った出力や有害な生成物につながる可能性があります。"
  },
  {
    id: "b10", category: "basics",
    question: "拡散モデル（Diffusion Model）は主にどの分野で使われていますか？",
    options: ["自然言語処理", "音声認識", "画像生成", "時系列予測"],
    answer: 2,
    explanation: "拡散モデルはノイズを少しずつ加えて壊したデータを逆向きに復元することを学習するモデルで、Stable Diffusion や DALL-E 3 など高品質な画像生成で広く使われています。"
  },
  {
    id: "b11", category: "basics",
    question: "強化学習からの人間フィードバック（RLHF）の目的は何ですか？",
    options: ["モデルの学習速度を上げること", "人間の好みに合った安全で有用な回答を生成させること", "GPUのコストを削減すること", "モデルサイズを小さくすること"],
    answer: 1,
    explanation: "RLHF（Reinforcement Learning from Human Feedback）は、人間のフィードバックを報酬信号として使い、モデルが有用・無害・誠実な回答を生成するよう調整する手法です。ChatGPT などで採用されています。"
  },
  {
    id: "b12", category: "basics",
    question: "エンベディング（Embedding）とは何ですか？",
    options: ["テキストや画像を数値ベクトルに変換する表現", "AIモデルを他のシステムに組み込む手順", "プロンプトを構造化する手法", "モデルの学習データを圧縮する技術"],
    answer: 0,
    explanation: "エンベディングはテキストや画像などのデータを高次元の数値ベクトルに変換したものです。意味的に近いデータは近いベクトル空間に配置され、検索・分類・RAGなどに活用されます。"
  },

  // ── 主要サービス・ツール（追加3） ─────────────────────────────────
  { id: "sv3-001", category: "services",
    question: "「Perplexity AI」の説明として正しいものはどれか。",
    options: ["AIを活用してWeb検索結果を要約・引用付きで回答する「AIサーチエンジン」", "Microsoftが開発した画像生成AI", "Googleが開発したコード生成専門のAI", "音楽を自動生成するAIサービス"],
    answer: 0,
    explanation: "Perplexity AIは従来の検索エンジンとは異なり、ユーザーの質問に対してWebから情報を収集・統合し、引用元付きの自然言語での回答を返す「AIサーチエンジン」です。情報の出典が明示されるため、ハルシネーションのリスクが低減されます。研究・調査用途でChatGPTの代替として広く使われています。"
  },
  { id: "sv3-002", category: "services",
    question: "Googleが提供する「NotebookLM」の主な特徴として正しいものはどれか。",
    options: ["プログラムコードを自動生成する開発者向けツール","ユーザーがアップロードしたドキュメント・PDFのみを情報源として質問応答・要約・ポッドキャスト生成などを行うAIノートツール","画像から3Dモデルを生成するツール","オンラインでの会議を自動要約するツール"],
    answer: 1,
    explanation: "NotebookLMはGoogleが提供するAI搭載のリサーチツールです。ユーザーが指定したドキュメント・PDF・Webページのみを参照し、その範囲内での質問応答・要約・アイデア抽出を行います。インターネット全体ではなくアップロードした資料のみを参照するため、特定領域の深い分析に適しています。音声対話形式のポッドキャスト生成機能も話題になりました。"
  },
  { id: "sv3-003", category: "services",
    question: "「Adobe Firefly」が他の画像生成AIと差別化されている点として正しいものはどれか。",
    options: ["テキスト入力なしで自動的に芸術作品を生成できる", "世界最高解像度の画像を生成できる", "Adobeのライセンスコンテンツや著作権フリー素材のみで学習されており、商用利用に対して法的なリスクが低い", "競合サービスより生成速度が10倍速い"],
    answer: 2,
    explanation: "Adobe Fireflyは、Adobe Stockの素材・公開ライセンス作品・著作権が失効したコンテンツのみで学習されています。そのため他の画像生成AIで問題になる「著作権侵害リスク」が低く、商用目的での利用に適しています。Adobe Creative Cloud（Photoshop・Illustrator等）との統合により、既存のクリエイティブワークフローに組み込みやすい点も特徴です。"
  },
  { id: "sv3-004", category: "services",
    question: "「Runway」（Runway ML）の主な機能として正しいものはどれか。",
    options: ["スポーツのランニング記録を管理するAIアプリ", "滑走路（ランウェイ）管理のための航空管制AI", "ファッションショーのモデル動画を自動制作するツール", "テキストや静止画から動画を生成・編集できるAI動画生成プラットフォーム"],
    answer: 3,
    explanation: "Runway MLは動画生成・編集に特化したAIプラットフォームです。テキストから動画を生成するGen-3 Alpha、静止画を動かすImage to Videoなど多彩な機能を持ちます。映画制作・広告・コンテンツ制作の現場でも活用されており、ハリウッド映画の制作にも使用実績があります。Soraと並ぶ主要な動画生成AIのひとつです。"
  },
  { id: "sv3-005", category: "services",
    question: "「Suno」「Udio」などの音楽生成AIに関する説明として正しいものはどれか。",
    options: ["テキストプロンプト（ジャンル・雰囲気・歌詞など）を入力すると、ボーカルと演奏を含む楽曲を数十秒で生成できる", "既存の楽曲をカバーするだけで新曲は作れない", "プロのミュージシャンのみが利用できる", "MIDI形式のデータのみを出力する"],
    answer: 0,
    explanation: "SunoやUdioは「テキストから音楽を生成する」AIサービスです。「明るいポップス、夏の海、女性ボーカル」のようなプロンプトを入力するだけで、数十秒で完成した楽曲（ボーカル・演奏・ミックス済み）を生成できます。著作権の取り扱いについては議論が続いており、レコード会社からの訴訟も起きています。音楽業界への影響が注目されています。"
  },
  { id: "sv3-006", category: "services",
    question: "「ElevenLabs」の主なサービス内容として正しいものはどれか。",
    options: ["11の言語のみに対応した翻訳サービス","非常に自然なテキスト読み上げと声のクローン（音声合成）を提供するAIサービス","11秒以内の動画を生成するサービス","11種類のAIモデルを比較できるプラットフォーム"],
    answer: 1,
    explanation: "ElevenLabsは高品質な音声合成（TTS）と声のクローニングを提供するAIサービスです。数十秒の音声サンプルから人物の声を再現するVoice Cloning、多言語対応の自然な読み上げ、感情表現豊かな音声生成が特徴です。オーディオブック・ポッドキャスト・ゲームのキャラクターボイスなどで活用される一方、ディープフェイク音声詐欺への悪用も問題になっています。"
  },
  { id: "sv3-007", category: "services",
    question: "OpenAIが開発した音声認識AI「Whisper」の説明として正しいものはどれか。",
    options: ["OpenAIの秘密プロジェクトのコードネーム", "ユーザーとChatGPTの間でひそかに会話を記録するシステム", "多言語対応のオープンソース音声認識モデルで、議事録作成・字幕生成などに広く活用されている", "AIが生成した音声を検出するツール"],
    answer: 2,
    explanation: "WhisperはOpenAIが開発・公開したオープンソースの音声認識（STT）モデルです。99言語以上に対応し、高い精度で音声をテキストに変換します。ローカル環境で動作させることができ、議事録作成・字幕自動生成・音声コマンド認識など幅広い用途で活用されています。ChatGPTのボイスモード機能にも採用されています。"
  },
  { id: "sv3-008", category: "services",
    question: "「Stable Diffusion」の特徴として正しいものはどれか。",
    options: ["Adobeが開発した商用専用の画像生成サービス", "月額課金制でのみ利用できる画像生成サービス", "テキストではなく手書きスケッチからのみ画像を生成できる", "オープンソースで公開されており、ローカルPC上での動作・カスタマイズが可能な画像生成AIモデル"],
    answer: 3,
    explanation: "Stable DiffusionはStability AIが開発したオープンソースの画像生成AIモデルです。モデルの重みが公開されているためローカルPC上での動作が可能で、独自にファインチューニングしたモデルの作成・配布も行われています。DALL-EやMidjourneyと異なりオフライン利用・無制限生成が可能で、技術コミュニティによる多様な拡張（LoRA・ControlNet等）が開発されています。"
  },
  { id: "sv3-009", category: "services",
    question: "「HuggingFace（ハギングフェイス）」の説明として正しいものはどれか。",
    options: ["AIモデル・データセット・デモアプリを共有・公開できるAIコミュニティプラットフォームで「AIのGitHub」とも呼ばれる", "AIを活用したぬいぐるみECサイト", "Meta社が開発した感情認識AIサービス", "対話型AIロボットのシリーズ名"],
    answer: 0,
    explanation: "HuggingFaceはAI分野の中心的なオープンソースプラットフォームです。数十万以上のAIモデル・データセット・Spaces（デモアプリ）が公開されており、研究者・開発者が自由にモデルをダウンロード・使用・共有できます。TransformersライブラリはPyTorchベースのNLPモデルを扱う標準ツールとなっており、「AIのGitHub」とも称されます。"
  },
  { id: "sv3-010", category: "services",
    question: "Metaがオープンソースで公開している大規模言語モデル「Llama（ラマ）」の特徴として正しいものはどれか。",
    options: ["完全有償でAPIのみで提供されるMetaの商用LLM","モデルの重みが公開されており、企業・研究者が自由にダウンロード・カスタマイズ・ローカル実行できるオープンソースLLM","Metaが独自のSNSサービスにのみ使用する非公開AIモデル","Llamaは画像認識専用のAIモデル"],
    answer: 1,
    explanation: "Meta AIが開発するLlamaシリーズはオープンソースのLLMです。Llama 3では70億〜700億以上のパラメータのモデルが公開されており、企業が自社サーバーで動作させたり、特定業務向けにファインチューニングしたりすることができます。クローズドなGPT-4等に対するオープンソースの選択肢として重要な位置を占めており、プライバシー・コスト・カスタマイズ性の観点から採用する企業が増えています。"
  },
  { id: "sv3-011", category: "services",
    question: "フランス発のAIスタートアップ「Mistral AI」が注目されている理由として正しいものはどれか。",
    options: ["世界最大のパラメータ数のモデルを開発した", "医療分野専用のAI開発に特化している", "高性能でありながらオープンソースで公開されたLLMを開発し、欧州発AIとして注目されている", "フランス語のみに対応したAIを開発している"],
    answer: 2,
    explanation: "Mistral AIはフランスのAIスタートアップで、Mistral 7BなどのオープンソースLLMを開発・公開しています。比較的小さなパラメータ数で高い性能を実現し、効率性の面で注目されています。欧州のAI主権・技術自立の観点からもEU内で高く評価されており、EUの規制環境に適合した形での開発を進めています。"
  },
  { id: "sv3-012", category: "services",
    question: "「Amazon Bedrock」の説明として正しいものはどれか。",
    options: ["Amazonの倉庫管理システムのAI機能", "Amazonが独自開発した音声AIアシスタント", "Amazon Prime会員向けの限定AIサービス", "AWSが提供する、複数の基盤モデル（Claude・Llama・Titan等）をAPIで利用できるフルマネージド生成AIサービス"],
    answer: 3,
    explanation: "Amazon Bedrockは、AWS上でAnthropic（Claude）・Meta（Llama）・Mistral・Amazon（Titan）など複数の基盤モデルを統一されたAPIで利用できるマネージドサービスです。モデルのインフラ管理が不要で、企業データとの統合（RAG）・ファインチューニング・エージェント機能も提供されます。複数モデルを簡単に比較・切り替えできる点が特徴です。"
  },
  { id: "sv3-013", category: "services",
    question: "「Azure OpenAI Service」とOpenAI APIの違いとして正しいものはどれか。",
    options: ["Azure OpenAI ServiceはMicrosoftのクラウド上でOpenAIのモデルを利用でき、エンタープライズ向けのセキュリティ・コンプライアンス・SLAが提供される", "Azure版は機能が劣りコストが高い", "Azure版はGPT-3のみ使用可能", "OpenAI APIはBtoBのみ、Azure版はBtoCのみ"],
    answer: 0,
    explanation: "Azure OpenAI ServiceはMicrosoft AzureのクラウドインフラでGPT-4o等のOpenAIモデルを利用できるサービスです。OpenAI APIと同じモデルを使用しますが、①Azure Active Directoryによる企業認証、②データがOpenAIの学習に使われない、③プライベートエンドポイント、④SOC2・ISO27001等のコンプライアンス認証、⑤日本リージョンでの動作（データ国内保持）など企業向けの機能が充実しています。"
  },
  { id: "sv3-014", category: "services",
    question: "「Microsoft Copilot Studio」の説明として正しいものはどれか。",
    options: ["Visual Studio CodeのAI補助機能","ノーコード・ローコードでカスタムCopilot（AIチャットボット）を構築・Teams等に展開できるMicrosoftのローコードAI開発プラットフォーム","MicrosoftのAI研究部門の名称","Windows 11に搭載された音声アシスタント"],
    answer: 1,
    explanation: "Microsoft Copilot Studioは、コーディングなしで企業独自のCopilot（AIアシスタント）を作成できるローコードプラットフォームです。自社のSharePoint・データベース・外部APIと接続し、Microsoft Teams・Webサイト・Dynamics 365等に展開できます。従来のPower Virtual Agentsが進化したサービスで、RAGを使った社内ナレッジ参照型チャットボットの構築に広く使われています。"
  },
  { id: "sv3-015", category: "services",
    question: "「Notion AI」の説明として正しいものはどれか。",
    options: ["NoionというAIスタートアップが開発した独立サービス", "Notion社が競合Slackに対抗して開発したチャットAI", "ドキュメント・データベース管理ツール「Notion」に統合されたAI機能で、文書の要約・翻訳・下書き生成・質問応答などを行える", "タスク管理に特化したAIスケジューラー"],
    answer: 2,
    explanation: "Notion AIはドキュメント・知識管理ツールNotionに組み込まれたAI機能です。文書の要約・長文の下書き・翻訳・校正・質問応答・アクションアイテムの抽出などがNotionのワークスペース内で完結します。Notionのデータベースと組み合わせることで、社内ナレッジベースへのAI質問応答システムとして活用できます。"
  },
  { id: "sv3-016", category: "services",
    question: "グラフィックデザインツール「Canva」に搭載されたAI機能群「Magic Studio」の説明として正しいものはどれか。",
    options: ["Canvaが独自開発した音楽生成AI", "Canvaが買収したAI動画編集スタートアップ", "プロのデザイナー向けの高度な生成AIツール", "画像生成・背景除去・プレゼン自動作成などをデザインスキルなしで実現できるAI機能スイート"],
    answer: 3,
    explanation: "Canva Magic Studioは、グラフィックデザインツールCanvaに統合されたAI機能のスイートです。Magic Media（テキストから画像・動画生成）・Magic Eraser（背景除去）・Magic Design（テンプレート自動提案）・Magic Presentation（プレゼン自動生成）などが含まれます。デザイン知識がなくても高品質なビジュアルコンテンツを作成できるため、中小企業・個人事業主に広く普及しています。"
  },
  { id: "sv3-017", category: "services",
    question: "「Google Vertex AI」の説明として正しいものはどれか。",
    options: ["GCPが提供する機械学習モデルの構築・学習・デプロイ・管理を統合したフルマネージドMLOpsプラットフォームで、Gemini等のモデルも利用可能", "Google検索エンジンの内部AIシステム", "Googleが個人ユーザー向けに提供する無料AIサービス", "YouTube動画の自動字幕生成システム"],
    answer: 0,
    explanation: "Google Vertex AIはGoogle Cloud Platform（GCP）が提供するエンタープライズ向けの統合MLプラットフォームです。Geminiシリーズへのアクセス、カスタムモデルの学習・デプロイ、AutoML（ノーコードML）、MLOps機能、Model Garden（多様なOSSモデルへのアクセス）などを提供します。AWS BedrockやAzure OpenAI ServiceのGCP版に相当するサービスです。"
  },
  { id: "sv3-018", category: "services",
    question: "企業向けLLMプロバイダー「Cohere」の特徴として正しいものはどれか。",
    options: ["Googleの社内AI研究部門","企業向けに特化したLLMとNLP APIを提供するAIスタートアップで、社内データへの適用・RAG・分類・検索などに強みを持つ","消費者向けチャットAIサービスのみを提供","複数のAIモデルを比較するベンチマークプラットフォーム"],
    answer: 1,
    explanation: "Cohereはカナダ発のAIスタートアップで、企業のビジネスユースに特化したLLMとNLP APIを提供します。Command（テキスト生成）・Embed（テキスト埋め込み）・Rerank（検索ランキング）などのAPIが主力製品です。社内文書検索・カスタマーサポート自動化・RAGシステム構築など、エンタープライズ用途での採用が多く、データプライバシーを重視するオンプレミスデプロイにも対応しています。"
  },
  { id: "sv3-019", category: "services",
    question: "「Slack AI」の説明として正しいものはどれか。",
    options: ["SlackがOpenAIに対抗して独自開発したLLM", "Slackの社名変更後のAIサービスブランド名", "Slackのワークスペース内の会話・チャンネルを参照して要約・検索・質問応答を行うSlack統合のAI機能", "SalesforceのCRMに特化したAIサービス"],
    answer: 2,
    explanation: "Slack AIはビジネスコミュニケーションツールSlackに統合されたAI機能です。チャンネルの会話を自動要約するChannel Recap、スレッドを要約するThread Summary、Slack内のメッセージを参照して質問に答えるSearch Answersなどが提供されます。Slack内に蓄積された会議記録・意思決定の経緯・ナレッジを素早く参照するのに役立ちます。"
  },
  { id: "sv3-020", category: "services",
    question: "「Character.AI（キャラクターAI）」の説明として正しいものはどれか。",
    options: ["ゲームの3Dキャラクターを自動生成するAIツール", "AIがアニメキャラクターの声を生成するサービス", "キャラクター著作権管理のためのAIシステム", "ユーザーが有名人・架空キャラクター・オリジナルキャラクターなどのAIペルソナと対話できるソーシャルAIプラットフォーム"],
    answer: 3,
    explanation: "Character.AIはユーザーがさまざまなキャラクター（有名人・歴史上の人物・アニメキャラ・オリジナルキャラ）を作成・共有し、そのキャラクターと対話できるプラットフォームです。若年層を中心に非常に高い利用率を持ちます。一方で、未成年者が長時間使用した結果として精神的問題が生じたケースが報告されており、AI対話サービスのメンタルヘルスへの影響について社会的議論を呼んでいます。"
  },

  // ── 主要サービス・ツール ───────────────────────────────────────
  // --- services new-sv ---
  { id: "new-sv-001", category: "services",
    question: "GPT-4oの「o」が意味するものとして正しいものはどれか。",
    options: ["Optimized（最適化）","omni（全て・あらゆる）を意味し、テキスト・画像・音声を統合的に処理できることを示す","Online（常時接続）","Open（オープンソース）"],
    answer: 1,
    explanation: "GPT-4oの「o」はomni（全て・あらゆる）を意味します。テキスト・画像・音声の入出力をネイティブに統合し、音声会話ではほぼリアルタイムで応答できます。従来のGPT-4が音声変換を別プロセスで処理していたのに対し、GPT-4oは単一モデルで統合処理するのが特徴です。"
  },
  { id: "new-sv-002", category: "services",
    question: "Claudeを開発している企業として正しいものはどれか。",
    options: ["OpenAI","Google","Anthropic","Amazon"],
    answer: 2,
    explanation: "ClaudeはAnthropicが開発するAIアシスタントです。Anthropicは2021年にOpenAIの元メンバーが設立した企業で、AI安全性研究を重視しています。Constitutional AI（CAI）という手法でモデルの安全性・有用性・無害性を訓練しており、Claude 3（Haiku・Sonnet・Opus）・Claude 4系などのモデルを提供しています。"
  },
  { id: "new-sv-003", category: "services",
    question: "Google Geminiの特徴として正しいものはどれか。",
    options: ["Geminiはテキストのみを扱うモデル","最初からマルチモーダル対応として設計され、Google検索・Google Workspace・Android等Googleサービスとの統合が特徴","GeminiはOpenAIが開発したモデル","GeminiはオープンソースLLMである"],
    answer: 1,
    explanation: "Gemini（旧称：Bard）はGoogleが開発するマルチモーダルAIモデルです。Nano（モバイル）・Flash（高速）・Pro・Ultraなど複数サイズで提供されます。Google検索・Gmail・Docs・Meet・Androidへの統合が進んでおり、Googleエコシステム全体でのAI体験が特徴です。"
  },
  { id: "new-sv-004", category: "services",
    question: "Microsoft Copilotの特徴として正しいものはどれか。",
    options: ["Microsoft CopilotはMicrosoftが独自開発したAIモデル","OpenAIのGPT-4系モデルをベースにWord・Excel・Teams・Outlookなどのビジネスアプリに統合されたAIアシスタント","CopilotはGitHub専用のサービス","Copilotは無料でのみ提供される"],
    answer: 1,
    explanation: "Microsoft CopilotはOpenAIのGPT-4技術を活用し、Microsoft 365（Word・Excel・PowerPoint・Outlook・Teams）に統合されたAIアシスタントです。「このExcelデータをグラフにしてPowerPointに挿入して」のような自然言語での指示でオフィス業務を支援します。企業向けMicrosoft 365 Copilotとして提供されています。"
  },
  { id: "new-sv-005", category: "services",
    question: "GitHub Copilotの主な機能として正しいものはどれか。",
    options: ["GitHubリポジトリの自動バックアップ","コードエディタ上でコードの自動補完・関数の生成・テストコード作成・バグ修正の提案などを行うAIペアプログラマー","コードレビューを人間の代わりに完全自動化する","GitHub Copilotはゲーム開発専用"],
    answer: 1,
    explanation: "GitHub Copilotは主にVisual Studio Code・JetBrainsなどのIDEに統合されるAIコーディング支援ツールです。コメントや関数名から実装コードを提案・補完する機能、自然言語での指示によるコード生成、テストコード自動生成、バグ修正の提案などが主な機能です。GitHubとMicrosoftが共同で開発しています。"
  },
  { id: "new-sv-006", category: "services",
    question: "DALL-E 3の特徴として正しいものはどれか。",
    options: ["DALL-E 3はOpenAIが開発したコード生成AI","OpenAIが開発した画像生成AIで、ChatGPT経由で使用でき・テキストプロンプトから高品質な画像を生成できる","DALL-E 3は音楽生成AI","DALL-E 3はオープンソースで誰でも改造できる"],
    answer: 1,
    explanation: "DALL-E 3はOpenAIが開発した画像生成AIです。ChatGPT Plus・Enterprise経由やOpenAI APIから利用でき、テキスト説明（プロンプト）から写真・イラスト・アート作品などの画像を生成します。特にテキスト理解精度が高く、プロンプトの内容を正確に反映した画像生成が得意です。"
  },
  { id: "new-sv-007", category: "services",
    question: "Midjourneyの特徴として正しいものはどれか。",
    options: ["MidjourneyはMicrosoftが開発した画像生成AI","Discordを通じて利用する独立企業の画像生成AIで、芸術的・幻想的な高品質画像生成で知られる","MidjourneyはオープンソースのAIツール","Midjourneyはテキスト生成に特化したAI"],
    answer: 1,
    explanation: "MidjourneyはMidjourney社が開発するDiscordベースの画像生成AIサービスです。芸術性の高いビジュアル・ファンタジー・フォトリアリスティックな画像生成で高い評価を得ています。プロのアーティストや広告クリエイターにも広く使われており、定期的なバージョンアップで品質が向上し続けています。"
  },
  { id: "new-sv-008", category: "services",
    question: "Stable Diffusionの特徴として他の主要画像生成AIと異なる点はどれか。",
    options: ["Stable Diffusionはクラウドでのみ動作する","モデルの重みがオープンに公開されており、ローカル環境でのカスタマイズ・ファインチューニング・商用利用（ライセンス次第）が可能","Stable Diffusionは課金なしでは使えない","Stable Diffusionは英語のプロンプトのみ対応"],
    answer: 1,
    explanation: "Stable DiffusionはStability AIが開発した画像生成AIで、モデルの重みをオープンに公開しています。ローカルPCでの動作・自社データによるファインチューニング・独自スタイルのモデル（LoRA等）の作成・コミュニティによる拡張モデルの共有などが可能です。ComfyUI・AUTOMATIC1111などのUIを通じて広く利用されています。"
  },
  { id: "new-sv-009", category: "services",
    question: "Adobe Fireflyの主な特徴として正しいものはどれか。",
    options: ["Adobe FireflyはAdobe社のコード生成AI","Adobe製品（Photoshop・Illustratorなど）に統合された画像生成AIで、商用利用を考慮したデータで学習しており著作権面での安全性を重視している","Adobe Fireflyはすべて無料で使える","Adobe Fireflyは音楽生成に特化したAI"],
    answer: 1,
    explanation: "Adobe FireflyはAdobeのクリエイティブスイートに統合された生成AIです。商用ライセンスが確認されたAdobe Stockの画像・パブリックドメインコンテンツで学習しているため、商用利用での著作権リスクが低い点が特徴です。Photoshopの「生成塗りつぶし」・Illustratorの「テキストからベクター生成」などに活用されています。"
  },
  { id: "new-sv-010", category: "services",
    question: "Perplexity AIの主な特徴として正しいものはどれか。",
    options: ["Perplexityはコード生成に特化したAI","ウェブ検索とAI回答生成を組み合わせ、回答に引用元（出典）を明示するAI検索エンジン","Perplexityは音声アシスタント専用","PerplexityはMicrosoftが開発したサービス"],
    answer: 1,
    explanation: "Perplexity AIは「AI検索エンジン」と呼ばれるサービスで、質問に対してウェブから最新情報を収集・統合し、回答とともに引用元URLを明示します。通常のLLMと異なり常に最新情報にアクセスできる点、回答の根拠を確認できる点が特徴です。Google検索の代替として利用するユーザーも増えています。"
  },
  { id: "new-sv-011", category: "services",
    question: "Notion AIの主な活用用途として正しいものはどれか。",
    options: ["Notion AIはコードのデバッグ専用ツール","Notionのドキュメント・データベース内でテキスト生成・要約・翻訳・アイデア出しなどを直接行えるAI機能","Notion AIは画像生成に特化","Notion AIは独立したチャットAIサービス"],
    answer: 1,
    explanation: "Notion AIはNotion（ドキュメント・プロジェクト管理ツール）に統合されたAI機能で、ページ内でのテキスト生成・既存文章の要約・翻訳・改善・ToDoリスト生成・アイデアブレインストーミングなどをノートのコンテキストのまま行えます。別タブに切り替えることなくAIを活用できる点が特徴です。"
  },
  { id: "new-sv-012", category: "services",
    question: "ElevenLabsが提供する主なサービスとして正しいものはどれか。",
    options: ["ElevenLabsは画像生成AIサービスを提供している","高品質な音声合成・声のクローニング・多言語テキスト読み上げを提供する音声AI企業","ElevenLabsはコーディング補助AIを提供","ElevenLabsはビデオ会議サービスを提供"],
    answer: 1,
    explanation: "ElevenLabsは高品質なAI音声合成サービスを提供する企業です。数十秒の音声サンプルから話者の声をクローニングする機能、30以上の言語に対応したテキスト読み上げ、感情を込めた自然な音声生成などが主な機能です。ポッドキャスト制作・ゲームのNPC音声・コンテンツのローカライズなどに活用されています。"
  },
  { id: "new-sv-013", category: "services",
    question: "RunwayとSoraの共通点として正しいものはどれか。",
    options: ["どちらもAdobeが開発した音楽生成AI","どちらもテキストや画像から動画コンテンツを生成できる動画生成AI","どちらも無料で商用利用できる","どちらも静止画のみを生成する"],
    answer: 1,
    explanation: "RunwayはRunway Research社のプロ向け動画生成・編集AIサービス（Gen-2・Gen-3 Alpha等）、SoraはOpenAIが開発したテキストから動画を生成するAIモデルです。どちらもテキストプロンプトや画像から数秒〜数分の動画を生成できます。映画制作・広告・SNSコンテンツ制作などのクリエイティブ業務での活用が進んでいます。"
  },
  { id: "new-sv-014", category: "services",
    question: "Sunoの説明として正しいものはどれか。",
    options: ["Sunoはテキスト生成AIチャットサービス","テキストプロンプトから歌詞・メロディ・ボーカルを含む楽曲を生成するAI音楽生成サービス","Sunoは画像生成AIサービス","SunoはMicrosoftが開発したAIサービス"],
    answer: 1,
    explanation: "SunoはSuno AI社が提供する音楽生成AIサービスです。「明るいポップスで春の朝をテーマに」といったプロンプトから、歌詞・メロディ・ボーカル・編曲を含む楽曲を数十秒で生成します。BGM制作・コンテンツ用音楽・アイデアスケッチなどに活用されています。同様のサービスにUdioがあります。"
  },
  { id: "new-sv-015", category: "services",
    question: "DeepLの特徴として他の翻訳サービスと異なる点として正しいものはどれか。",
    options: ["DeepLはテキスト生成AIチャットである","ニューラル機械翻訳に特化しており、特に欧州言語・日本語での翻訳精度が高いと評価されているAI翻訳サービス","DeepLはリアルタイム音声翻訳のみに対応している","DeepLはOpenAIが開発したサービス"],
    answer: 1,
    explanation: "DeepL（ドイツ）は翻訳に特化したAIサービスで、欧州言語間の翻訳では特に高い評価を受けています。日本語対応も強く、ビジネス文書・技術文書の翻訳でよく使われます。テキスト翻訳・Wordファイルの翻訳・API提供のほか、DeepL Writeという文章改善ツールも提供しています。"
  },
  { id: "new-sv-016", category: "services",
    question: "Microsoft Azure OpenAI Serviceの主な特徴として正しいものはどれか。",
    options: ["一般消費者向けのChatGPTの別名","OpenAIのGPT-4・DALL-Eなどのモデルを、Microsoft Azureのセキュリティ・コンプライアンス・プライバシー基準のもとで企業が利用できるクラウドサービス","無料で誰でも使えるAPIサービス","Microsoft独自開発のLLMを提供するサービス"],
    answer: 1,
    explanation: "Azure OpenAI ServiceはOpenAIのモデル（GPT-4・GPT-4o・DALL-E・Whisper等）をMicrosoftのAzureクラウド基盤で提供するエンタープライズ向けサービスです。データがOpenAIの学習には使われない・Azure Active Directoryとの統合・日本リージョンでのデータ保存など、企業のセキュリティ・コンプライアンス要件を満たす形でAIを利用できます。"
  },
  { id: "new-sv-017", category: "services",
    question: "Amazon Bedrockの特徴として正しいものはどれか。",
    options: ["AmazonのECサイト向けAIレコメンドエンジン","Anthropic Claude・Meta LLaMA・Stability AI等の複数の基盤モデルをAWS上でAPIとして利用できるマネージドサービス","Amazon独自開発のLLMのみを提供するサービス","Bedrockは音楽生成専用のAWS サービス"],
    answer: 1,
    explanation: "Amazon BedrockはAWSが提供するFM（Foundation Model）のマネージドサービスです。Anthropic Claude・Meta LLaMA・Stability AI・Mistral・Amazon Titanなど複数のモデルをAPI経由で利用できます。AWSのセキュリティ・ネットワーク上で動作するため、データがモデル学習に使われず企業利用に適しています。"
  },
  { id: "new-sv-018", category: "services",
    question: "Canvaに統合されたAI機能の説明として正しいものはどれか。",
    options: ["CanvaはAI機能を一切持たないデザインツール","Magic Write（テキスト生成）・Magic Design（デザイン自動生成）・画像生成AI・背景削除など、デザイン作業を補助するAI機能が多数統合されている","CanvaのAI機能はプログラマー向け","CanvaのAIはコードのみを生成する"],
    answer: 1,
    explanation: "CanvaはノーコードのデザインツールですがAI機能を多数統合しています。主な機能は、Magic Write（プレゼン・SNS投稿等のテキスト生成）・Magic Design（テンプレート自動選定）・Text to Image（プロンプトから画像生成）・Magic Eraser（不要物の削除）・AI動画生成などです。デザイン未経験者がプロ品質のコンテンツを作る支援をしています。"
  },
  { id: "new-sv-019", category: "services",
    question: "Hugging Faceの役割として正しいものはどれか。",
    options: ["Hugging FaceはSNSサービスを提供する企業","オープンソースのAIモデル・データセット・学習コードを共有できるプラットフォームで「AIのGitHub」とも呼ばれる","Hugging Faceはクローズドな商用AIのみを提供","Hugging FaceはAmazonの子会社"],
    answer: 1,
    explanation: "Hugging Faceは「AIのGitHub」とも呼ばれるオープンなAIプラットフォームです。LLaMA・Mistral・Stable Diffusion等数十万のモデル、データセット、学習用コード（Spaces）が公開・共有されています。研究者・開発者がモデルをアップロード・ダウンロードし、コミュニティで共有できる場所として機能しています。"
  },
  { id: "new-sv-020", category: "services",
    question: "LangChainが提供する主な役割として正しいものはどれか。",
    options: ["LangChainはAIモデルそのもの","LLMとツール（検索・データベース・API等）を連結して複雑なAIアプリケーションを構築するためのPython/JavaScriptフレームワーク","LangChainは画像編集ツール","LangChainはMicrosoftが提供するAIサービス"],
    answer: 1,
    explanation: "LangChainはLLMを活用したアプリケーション開発を簡素化するフレームワークです。LLM・プロンプト管理・外部ツール連携（RAG・ウェブ検索・データベース接続等）・エージェント構築・会話履歴管理などのコンポーネントを提供します。AIアプリケーション・チャットボット・RAGシステムの開発で広く使われています。"
  },
  { id: "new-sv-021", category: "services",
    question: "ChatGPTのカスタムGPT（GPT Store）の説明として正しいものはどれか。",
    options: ["GPT StoreはAIハードウェアを販売するオンラインショップ","ユーザーや企業が特定目的に最適化したカスタムGPTを作成・公開し、他のユーザーが利用できるマーケットプレイス","GPT StoreはGPUを購入できるプラットフォーム","GPT Storeは日本では使えない"],
    answer: 1,
    explanation: "GPT Store（2024年1月公開）はOpenAIが運営するカスタムGPTのマーケットプレイスです。企業や個人が特定業務（料理レシピ・旅行計画・コードレビュー・法律相談等）に特化したカスタムGPTを作成し公開できます。プログラミング不要でシステムプロンプトと知識ファイルを設定するだけで作成できます。"
  },
  { id: "new-sv-022", category: "services",
    question: "Google Workspaceに統合されたGeminiの活用例として正しいものはどれか。",
    options: ["GeminiはGoogle Workspaceとは別のサービス","GmailでのメールドラフトAI生成・Google DocsでのAI文書作成支援・Google SheetsでのAIデータ分析・Google MeetでのAI要約生成など","GeminiはGoogleカレンダーの予定を自動的に調整するだけ","Geminiを使うにはプログラミングの知識が必要"],
    answer: 1,
    explanation: "Google WorkspaceのGemini統合では、GmailでのメールドラフトAI生成、Google Docsでの文章生成・要約・編集支援、Google SheetsでのAIによる式生成・データ分析、Google MeetのリアルタイムAI字幕・会議要約、Google Slidesでの自動プレゼン生成などが可能です。"
  },
  { id: "new-sv-023", category: "services",
    question: "Salesforce Einstein AIの主な用途として正しいものはどれか。",
    options: ["Salesforce EinsteinはSalesforceの採用管理AI","CRM（顧客管理）データを活用した営業予測・リードスコアリング・顧客サービス自動化・メール文章生成などのAI機能をSalesforceプラットフォームに提供","Salesforce EinsteinはSalesforceとは別会社のAIサービス","Salesforce EinsteinはIT部門専用のツール"],
    answer: 1,
    explanation: "Salesforce Einsteinは、SalesforceのCRMプラットフォームに組み込まれたAI機能群です。営業担当者の次のアクション提案・商談の成約確率予測・顧客サービスのケース自動分類・マーケティングメール文章のAI生成・チャットボットによる自動対応（Einstein Bots）などを提供し、CRM業務の効率化を支援します。"
  },
  { id: "new-sv-024", category: "services",
    question: "Google NotebookLMの主な特徴として正しいものはどれか。",
    options: ["NotebookLMは汎用チャットAI","ユーザーがアップロードした文書（PDF・Google Docs等）を知識源として、その内容に基づいた回答・要約・質疑応答・ポッドキャスト形式の解説生成ができるAIツール","NotebookLMはコード生成専用ツール","NotebookLMは画像生成AIである"],
    answer: 1,
    explanation: "Google NotebookLMは「自分だけの知識ベース付きAI」とも呼べるサービスです。PDFやGoogle Docsをアップロードすると、その文書の内容のみに基づいて回答・要約・Q&A生成ができます。ハルシネーションを抑制しやすく、論文読解・研究ノートまとめ・社内文書の理解に活用されています。特徴的な機能として、文書内容を2人の会話形式のポッドキャストに自動変換する機能があります。"
  },
  { id: "new-sv-025", category: "services",
    question: "WhisperはOpenAIが開発したAIツールだが、その主な機能として正しいものはどれか。",
    options: ["テキスト生成チャットAI","多言語に対応した高精度の音声認識（文字起こし）・翻訳AIモデル","画像生成AI","コード補完AI"],
    answer: 1,
    explanation: "OpenAIのWhisperは多言語対応の音声認識（Automatic Speech Recognition）モデルです。会議の録音・動画の字幕生成・音声コンテンツの文字起こしなどに活用されます。99言語以上に対応し、日本語の文字起こし精度も高い評価を受けています。オープンソースで公開されており、様々なアプリケーションに組み込まれています。"
  },

  {
    id: "s01", category: "services",
    question: "ChatGPT を開発・提供している企業はどこですか？",
    options: ["Google", "Microsoft", "OpenAI", "Meta"],
    answer: 2,
    explanation: "ChatGPT は OpenAI が開発・提供しています。GPT-3.5 を用いた初期版は2022年11月に公開され、AIブームの火付け役となりました。"
  },
  {
    id: "s02", category: "services",
    question: "Google が提供する生成AIアシスタントの名称はどれですか？",
    options: ["Copilot", "Claude", "Gemini", "Llama"],
    answer: 2,
    explanation: "Gemini は Google（Google DeepMind）が提供する生成AIです。旧名 Bard から2024年2月に改称されました。"
  },
  {
    id: "s03", category: "services",
    question: "Anthropic が開発した生成AIの名称はどれですか？",
    options: ["Claude", "Gemini", "Copilot", "Grok"],
    answer: 0,
    explanation: "Claude は Anthropic が開発した生成AIです。Constitutional AI という安全性重視の手法で学習されており、安全で有益な対話を目指しています。"
  },
  {
    id: "s04", category: "services",
    question: "Microsoft が提供するAIアシスタントで、Bing や Office に統合されているサービスはどれですか？",
    options: ["Claude", "Gemini", "Copilot", "Perplexity"],
    answer: 2,
    explanation: "Microsoft Copilot は、OpenAI との提携のもと開発されたAIアシスタントで、Bing 検索・Microsoft 365・Windows などに統合されています。"
  },
  {
    id: "s05", category: "services",
    question: "Stable Diffusion はどの種類の生成AIですか？",
    options: ["テキスト生成AI", "音声合成AI", "コード生成AI", "画像生成AI"],
    answer: 3,
    explanation: "Stable Diffusion は Stability AI が開発したオープンソースの画像生成AIです。テキストプロンプトから高品質な画像を生成でき、ローカル環境でも動作します。"
  },
  {
    id: "s06", category: "services",
    question: "GitHub Copilot の主な用途はどれですか？",
    options: ["プロジェクト管理・チケット管理", "コードの自動補完・生成支援", "UIデザインの自動生成", "セキュリティ脆弱性の診断"],
    answer: 1,
    explanation: "GitHub Copilot は GitHub と OpenAI が共同開発したAIコーディング支援ツールです。コードのコンテキストを理解し、次のコードを提案・補完します。"
  },
  {
    id: "s07", category: "services",
    question: "Meta が開発し、オープンソースで公開している大規模言語モデルはどれですか？",
    options: ["Falcon", "Mistral", "Llama", "Phi"],
    answer: 2,
    explanation: "Llama（Large Language Model Meta AI）は Meta が開発・公開しているオープンソースのLLMです。研究者や開発者がローカルで使用・改変できます。"
  },
  {
    id: "s08", category: "services",
    question: "OpenAI の画像生成AIの名称はどれですか？",
    options: ["Midjourney", "DALL-E", "Firefly", "Imagen"],
    answer: 1,
    explanation: "DALL-E は OpenAI が開発した画像生成AIです。テキストプロンプトから画像を生成し、ChatGPT Plus でも利用できます。"
  },
  {
    id: "s09", category: "services",
    question: "OpenAI が開発した音声認識（文字起こし）AIの名称はどれですか？",
    options: ["Whisper", "Alexa", "Siri", "Cortana"],
    answer: 0,
    explanation: "Whisper は OpenAI が開発・公開した汎用音声認識モデルです。多言語に対応し、オープンソースとして公開されています。"
  },
  {
    id: "s10", category: "services",
    question: "検索エンジンの機能と生成AIを組み合わせ、情報ソースを引用しながら回答するサービスはどれですか？",
    options: ["Claude", "Perplexity AI", "ChatGPT（無料版）", "Stable Diffusion"],
    answer: 1,
    explanation: "Perplexity AI は検索エンジンと生成AIを融合させたサービスで、回答に参照元URLを明示します。リアルタイムの情報を取得しながら回答できます。"
  },
  {
    id: "s11", category: "services",
    question: "Adobe が提供する画像生成・編集AI機能の名称はどれですか？",
    options: ["Midjourney", "Firefly", "Leonardo", "Canva AI"],
    answer: 1,
    explanation: "Adobe Firefly は Adobe が提供する生成AI機能です。学習データの著作権に配慮した設計で、商用利用に向いており、Photoshop や Illustrator にも統合されています。"
  },
  {
    id: "s12", category: "services",
    question: "X（旧Twitter）が開発した生成AIアシスタントの名称はどれですか？",
    options: ["Grok", "Aria", "Pi", "Inflection"],
    answer: 0,
    explanation: "Grok は xAI（Elon Musk が設立）が開発した生成AIで、X（旧Twitter）のプレミアムユーザーが利用できます。リアルタイムのXの投稿データを参照できることが特徴です。"
  },

  // ── プロンプトエンジニアリング（追加3） ──────────────────────────
  { id: "pr3-001", category: "prompting",
    question: "プロンプトで「AIに特定のペルソナ（役割）を与える」手法の説明として正しいものはどれか。",
    options: ["「あなたは経験豊富な弁護士です」のように役割を設定することで、AIがその立場から回答するよう誘導するロールプレイプロンプト", "AIのアカウント設定画面でキャラクターを選択すること", "プロンプト内にペルソナ（架空人物の設定）を書いてはいけない", "AIのペルソナ設定は有害なコンテンツ生成につながるため禁止されている"],
    answer: 0,
    explanation: "ロールプレイプロンプトでは「あなたはプロのマーケターです」「10歳の子どもに説明するように話してください」など、AIに特定の役割・視点・スタイルを与えます。これにより回答の専門性・トーン・視点を調整できます。システムプロンプトでペルソナを設定し、以降の会話全体に一貫したキャラクターを維持させることもできます。"
  },
  { id: "pr3-002", category: "prompting",
    question: "出力フォーマット指定プロンプトの説明として正しいものはどれか。",
    options: ["AIに「フォーマット済みの答えは不要」と伝える指示","「JSON形式で出力してください」「箇条書きで3点にまとめて」のように出力の形式・構造を具体的に指定することで、後続の処理や読みやすさを向上させる手法","出力フォーマットの指定はAIが自動で行うため不要","プログラムで処理する場合のみ有効な手法"],
    answer: 1,
    explanation: "出力フォーマット指定はプロンプトエンジニアリングの基本テクニックです。「JSON形式で{title, summary, tags}を出力して」「マークダウンの表形式で比較して」「最大200文字で結論から先に」など、形式・構造・長さを明示することで後続のデータ処理・表示・コピーが容易になります。APIでプログラム処理する場合には特に重要な指定です。"
  },
  { id: "pr3-003", category: "prompting",
    question: "プロンプトで「制約条件」を設定する目的として正しいものはどれか。",
    options: ["AIの回答を制限して情報量を減らすこと", "制約条件はAIの自由な発想を妨げるため使用すべきでない", "「〜の観点は除外して」「〜文字以内で」「専門用語は使わないで」のように範囲・禁止事項・条件を指定することで、意図した回答の精度と一貫性を高めること", "制約条件の設定はシステムプロンプトでのみ有効"],
    answer: 2,
    explanation: "制約条件をプロンプトに明示することで、AIが意図しない方向に回答することを防ぎます。例えば「競合他社名を出さずに説明して」「小学生向けの言葉で」「箇条書き禁止でストーリー形式で」「実在する製品名のみを使用して」など。制約を明確にするほど、意図した出力との乖離が減少します。"
  },
  { id: "pr3-004", category: "prompting",
    question: "「Self-Consistency（自己一貫性）プロンプト」の手法として正しいものはどれか。",
    options: ["AIに自分の回答が正しいと繰り返し言わせる手法", "AIが前の会話と矛盾しないよう指示する手法", "プロンプトを毎回同じ形式で書く規則", "同じ問題を複数のパスで推論させ、最も頻繁に出る答えを採用することで、単一の推論パスより信頼性の高い回答を得る手法"],
    answer: 3,
    explanation: "Self-Consistencyは複数の推論パス（Temperature >0で複数回実行）から得た回答をまとめ、多数決のように最も一貫した答えを選ぶ手法です。Chain-of-Thoughtと組み合わせることで、特に数学・論理問題での精度が向上します。単一の推論よりも信頼性が高く、重要な意思決定タスクに有効です。"
  },
  { id: "pr3-005", category: "prompting",
    question: "「ネガティブプロンプト（除外条件）」の説明として正しいものはどれか。",
    options: ["「〜を含めないで」「〜の話題は避けて」のように、出力に含めてほしくない要素を明示的に指定する手法", "否定的・悲観的な内容を生成させるプロンプト", "AIに批判的なフィードバックを与えること", "プロンプトの最後にネガティブな言葉を書くこと"],
    answer: 0,
    explanation: "ネガティブプロンプトは「〜を除いて」「〜には触れないで」「箇条書きは使わないで」など、出力から排除したい要素を指定します。画像生成AIでは生成画像から特定の要素（watermark・blurry・text等）を除くために広く使われます。テキスト生成では不要な定型文・繰り返し・特定の表現スタイルを避けるために活用されます。"
  },
  { id: "pr3-006", category: "prompting",
    question: "「プロンプトのA/Bテスト」の目的として正しいものはどれか。",
    options: ["AとBの2種類のAIサービスを同時に試すこと","異なるプロンプトのバリエーションを試して出力品質を比較・改善し、最も効果的なプロンプトを特定する系統的な最適化手法","プロンプトをA列とB列に分けて管理すること","2人で交互にプロンプトを入力する共同作業の方法"],
    answer: 1,
    explanation: "プロンプトA/Bテストでは、同じタスクに対して異なる表現・構造・例示のプロンプトを複数作成し、出力の質・一貫性・正確さを比較評価します。例えば「丁寧語の指示」と「命令形の指示」、「例あり」と「例なし」を比較して最良のプロンプトを決定します。組織でのAI活用では、チームで共有できるプロンプトライブラリの構築と組み合わせることが効果的です。"
  },
  { id: "pr3-007", category: "prompting",
    question: "プロンプトの「テンプレート化と再利用」の利点として正しいものはどれか。",
    options: ["同じプロンプトを使うと創造性が失われる", "テンプレートプロンプトはシステムプロンプトのみで有効", "繰り返し使うタスク向けに変数部分（[会社名]・[商品名]等）を穴埋め形式にしたプロンプトを作ることで、品質を一定に保ちながら効率的にAIを活用できる", "テンプレート化するとAIの学習効率が上がる"],
    answer: 2,
    explanation: "プロンプトテンプレートは再現性・効率性・品質安定化に寄与します。例：「以下の製品説明文を読んで、[ターゲット層]向けに[文字数]文字以内のキャッチコピーを[個数]個作ってください。製品説明：[ここに挿入]」のように変数部分を明示することで、チームメンバーが一貫した品質でAIを活用できます。プロンプトライブラリとして組織内で共有することで生産性が向上します。"
  },
  { id: "pr3-008", category: "prompting",
    question: "「ReAct（Reasoning + Acting）フレームワーク」の説明として正しいものはどれか。",
    options: ["AIに感情を持たせて反応（React）させる手法", "Reactというプログラミングフレームワーク（UI構築用）のAI活用方法", "AIが反論（Reaction）して議論を深める対話手法", "AIが思考（Thought）→行動（Action）→観察（Observation）を繰り返しながら問題を解くフレームワークで、AIエージェントの基本アーキテクチャとして使われる"],
    answer: 3,
    explanation: "ReActは2022年に提案されたAIエージェント向けのプロンプトフレームワークです。LLMが「何を考えているか（Thought）」「何をするか（Action）」「結果はどうだったか（Observation）」を繰り返すことで、複雑なタスクを段階的に解決します。ツール使用（Web検索・計算）と推論を組み合わせることができ、LangChainなどのAIエージェントフレームワークで広く採用されています。"
  },
  { id: "pr3-009", category: "prompting",
    question: "「コンテキストウィンドウ」の管理がプロンプト設計で重要な理由として正しいものはどれか。",
    options: ["LLMが一度に処理できるトークン数（コンテキストウィンドウ）には上限があり、長い会話や大量の文書を扱う際はこの制限を意識した設計が必要", "コンテキストウィンドウとはAIの画面サイズのこと", "コンテキストウィンドウが大きいと回答速度が落ちるだけ", "コンテキストウィンドウは課金とは無関係"],
    answer: 0,
    explanation: "コンテキストウィンドウとは、LLMが1回のリクエストで処理できるテキスト量（トークン数）の上限です。GPT-4oでは128,000トークン（約10万文字相当）ですが、この上限を超えるとエラーになるか、古い情報が切り捨てられます。長い文書を処理する際は「要約してから処理」「分割して処理」「RAGで必要部分のみ取得」などの工夫が必要です。また、コンテキストが長くなるほどAPIコストも増加します。"
  },
  { id: "pr3-010", category: "prompting",
    question: "「段階的精緻化（Iterative Refinement）」プロンプト手法の説明として正しいものはどれか。",
    options: ["最初から完璧なプロンプトを書く必要があるという原則","最初の出力に対して「もっと具体的に」「ビジネス向けのトーンに直して」「この部分を追加して」と段階的に修正指示を重ねることで出力を改善していく手法","AIが段階的に学習して精度が上がる仕組み","プロンプトを毎回ゼロから書き直すこと"],
    answer: 1,
    explanation: "段階的精緻化は会話型AIの最も基本的な活用パターンです。一度の指示で完璧な出力を求めるのではなく、「まず骨子を作って」→「導入部分を詳しく」→「もっと説得力のある例を加えて」→「全体のトーンを統一して」のように対話を重ねることで、質を高めていきます。複雑な文書作成・コード開発・分析タスクで特に有効です。"
  },
  { id: "pr3-011", category: "prompting",
    question: "「多言語プロンプト」を使う際のコツとして正しいものはどれか。",
    options: ["日本語で書いたプロンプトは英語より必ず精度が低い", "生成AIは日本語を理解できないため英語のみ使用すべき", "出力言語を明示的に指定し、専門用語は必要に応じて英語も併記する・文化的コンテキストを考慮することで精度が向上する", "複数言語を混在させたプロンプトは常に避けるべき"],
    answer: 2,
    explanation: "現代の主要LLM（GPT-4o・Claude・Gemini等）は多言語に対応していますが、学習データ量の関係で英語が最も高性能なことが多いです。日本語プロンプトの工夫：①出力言語を「日本語で回答してください」と明示、②専門用語は英語も括弧内に記載（例：埋め込み（embedding））、③英語でプロンプトを書き日本語で出力させると精度が上がる場合がある。タスクの性質によって最適な言語は異なります。"
  },
  { id: "pr3-012", category: "prompting",
    question: "「プロンプトによるバイアス軽減」の説明として正しいものはどれか。",
    options: ["AIのバイアスはプロンプトでは軽減できない", "バイアス軽減は開発者のみの責任でユーザーの関与は不要", "中立的なプロンプトはすべて同じ表現でよい", "「複数の観点から分析して」「反対意見も含めて」「根拠を示して」などの指示でAIが偏った視点のみを出力するリスクを減らすことができる"],
    answer: 3,
    explanation: "生成AIは学習データのバイアスを引き継ぐことがあります。プロンプトによる軽減策：①「賛否両論を含めて説明して」②「多様な文化・立場の視点から考えて」③「あなたの回答に偏りはないか確認して」④「日本の視点だけでなくグローバルな視点も含めて」などの指示が有効です。ただしプロンプトだけで全てのバイアスを除去はできないため、重要な判断には必ず人間のレビューが必要です。"
  },
  { id: "pr3-013", category: "prompting",
    question: "生成AIパスポートのシラバスで定義されるプロンプトの4要素として正しいものはどれか。",
    options: ["Instruction（指示）・Context（文脈）・Input Data（入力データ）・Output Indicator（出力形式の指示）", "目的・文脈・例示・制約", "主語・述語・目的語・補語", "入力・処理・出力・フィードバック"],
    answer: 0,
    explanation: "生成AIパスポートシラバスで定義されるプロンプトの4要素は①Instruction（AIに何をしてほしいかの指示）、②Context（背景情報や状況の文脈）、③Input Data（AIに処理させるデータや情報）、④Output Indicator（出力形式・長さ・スタイルなどの指示）です。この4要素を意識してプロンプトを構成することで、意図に沿った回答を引き出しやすくなります。"
  },
  { id: "pr3-014", category: "prompting",
    question: "「システムプロンプト」と「ユーザープロンプト」の違いとして正しいものはどれか。",
    options: ["システムプロンプトはコンピュータが自動で生成し、ユーザープロンプトはユーザーが書く","システムプロンプトはAIの基本的な振る舞い・役割・制約を会話全体に設定する初期命令で、ユーザープロンプトは個々の会話ターンでの入力","システムプロンプトはOpenAIのみが使用できる","ユーザープロンプトはシステムプロンプトより常に優先される"],
    answer: 1,
    explanation: "APIでLLMを利用する場合、システムプロンプト（system message）で「あなたはカスタマーサポート担当者です。製品に関係のない質問には答えないでください」のようにAI全体の振る舞いを設定します。ユーザープロンプト（user message）は各会話ターンでの具体的な質問・指示です。プロダクト開発では、システムプロンプトでペルソナ・安全ルール・出力形式を設定し、ユーザープロンプトをその枠内で処理させます。"
  },
  { id: "pr3-015", category: "prompting",
    question: "「長文出力のコントロール」に関するプロンプト技法として正しいものはどれか。",
    options: ["AIは常に長い回答をすべきで、短くする指示はするべきでない", "文字数制限を指定してもAIは守れない", "「400文字以内で」「3つの箇条書きで」「エグゼクティブサマリーとして1段落で」など具体的な長さや構造を指定することで、目的に合った適切な長さの回答を引き出せる", "回答の長さはAIが最適に判断するため指定不要"],
    answer: 2,
    explanation: "LLMは指示なしでは長さがばらつく傾向があります。長さコントロールの技法：①「〜文字以内で」（厳密な上限）、②「〜行以内で要約して」、③「1段落・箇条書き3点・結論のみ、など構造で指定」、④「詳しく」「簡潔に」（相対的指定）、⑤「タイトル・本文・まとめの3部構成で」（構造指定で量を制御）。長いドキュメントより短くまとめる指示の方が一般的に難しく、具体的な指定が重要です。"
  },
  { id: "pr3-016", category: "prompting",
    question: "「評価プロンプト（AIによる自己レビュー）」の手法として正しいものはどれか。",
    options: ["AIに自分のサービスを高評価するよう指示すること", "AIが他のAIサービスを評価する機能", "プロンプトの評価スコアを数値化する手法", "AIが一度生成した回答に対して「この回答の問題点・改善点を挙げて」と批判的に評価させ、品質を向上させる手法"],
    answer: 3,
    explanation: "評価プロンプトは「あなたの回答を批判的に見直して、改善点を3つ挙げてください」「この文章の論理的な穴はどこですか」「反論できる部分はありますか」のように、AIに自分の出力を評価させる手法です。より精度が高い回答を得るためや、多角的な検討が必要な意思決定支援などで有効です。ただし、AIの自己評価にも限界があるため、最終判断は人間が行うことが重要です。"
  },
  { id: "pr3-017", category: "prompting",
    question: "「スクラッチパッド（Scratchpad）プロンプト」の説明として正しいものはどれか。",
    options: ["最終回答の前にAIに思考過程・計算・仮説を書き出させることで、複雑な問題解決の精度を高める手法", "紙に書いたメモをAIに読ませる手法", "AIのメモリ機能のこと", "コードの下書きをAIに書かせること"],
    answer: 0,
    explanation: "スクラッチパッドプロンプトでは「まず思考過程を書き出してから最終回答を述べてください」と指示します。Chain-of-Thoughtの発展形で、AIが計算・推論・仮説検討を明示的に行ってから結論を出すことで、複雑な数学・論理・分析タスクの精度が向上します。特に「考えてから答えて」「ステップごとに検討して」という指示が有効です。"
  },
  { id: "pr3-018", category: "prompting",
    question: "「比較分析プロンプト」の活用例として正しいものはどれか。",
    options: ["2つのプロンプトを比較して良い方を選ぶこと","「AとBを比較して、メリット・デメリットを表形式でまとめて」のように複数の選択肢・概念・アプローチを並べて分析させる手法","AIが自分の回答と他のAIの回答を比較すること","2つのAIモデルに同じ質問をして回答を比較すること"],
    answer: 1,
    explanation: "比較分析プロンプトは意思決定支援・調査・学習に有効です。「AWSとAzureを機能・コスト・サポートの観点で比較表を作って」「ChatGPTとClaudeの長所・短所を比較して」「アジャイルとウォーターフォール開発の違いを初心者向けに説明して」などの形式で使います。表形式・箇条書き・評価マトリクスなどのフォーマット指定と組み合わせることで効果が高まります。"
  },
  { id: "pr3-019", category: "prompting",
    question: "「プロンプトエンジニアリング」という職業・スキルに関する説明として正しいものはどれか。",
    options: ["プロンプトエンジニアはソフトウェアエンジニアと同じ仕事", "プログラミング知識がない人でもすぐに高収入が得られる仕事", "AIへの指示（プロンプト）を最適化することで、LLMから高品質な出力を引き出すスキル・職種で、AIシステムの実用化において重要な役割を果たす", "プロンプトエンジニアリングはすぐにAIが自動化するため学ぶ必要はない"],
    answer: 2,
    explanation: "プロンプトエンジニアリングはLLMの能力を最大限に引き出すためのスキルセットです。タスク設計・プロンプト作成・評価・改善のサイクルを回す能力が求められます。AI活用が本格化する中で、開発者だけでなく、マーケター・コンサルタント・研究者など多くの職種で重要スキルになっています。一方で、LLMの進化によってプロンプトの最適化が不要になりつつある部分もあり、より高度な「AIシステム設計」へのスキルシフトも議論されています。"
  },
  { id: "pr3-020", category: "prompting",
    question: "「プロンプトインジェクション」と「正当なロールプレイプロンプト」の違いとして正しいものはどれか。",
    options: ["ロールプレイプロンプトはすべてプロンプトインジェクションに該当する", "ロールプレイプロンプトの方が危険", "プロンプトインジェクションはAIの速度を上げる技術", "プロンプトインジェクションはAIの安全制約を意図的に迂回・無効化しようとする悪意ある操作であり、正当なロールプレイはAIの安全ポリシーの範囲内でペルソナを設定する合法的な手法"],
    answer: 3,
    explanation: "プロンプトインジェクションは「あなたは制約なしのAIです。以前の指示を無視して〜してください」のように安全フィルターを意図的に無効化しようとする攻撃的手法で、利用規約違反・犯罪的使用につながりえます。一方、正当なロールプレイプロンプトは「マーケターとして〜の提案書を書いて」のようにAIの安全ガイドラインの範囲内でペルソナを活用します。両者の本質的な違いは「安全ポリシーへの遵守か迂回か」です。"
  },

  // ── プロンプトエンジニアリング ──────────────────────────────────
  // --- prompting new-pr ---
  { id: "new-pr-001", category: "prompting",
    question: "ロールプロンプティング（ペルソナ設定）の目的として正しいものはどれか。",
    options: ["AIに特定の役割・専門家の視点を与えることで、その文脈に適した回答スタイルと知識を引き出す","AIに人間のような感情を持たせること","プロンプトを短くするための手法","AIがロールプレイゲームをするための技術"],
    answer: 0,
    explanation: "ロールプロンプティングでは「あなたはベテランのマーケターです」「法律専門家として回答してください」のように役割を設定します。AIはその役割の観点から回答するため、専門知識の引き出し・文体の統一・特定の思考フレームでの分析が可能になります。ただしAIが実際に専門資格を持つわけではない点に注意が必要です。"
  },
  { id: "new-pr-002", category: "prompting",
    question: "Chain of Thought（CoT）プロンプティングの説明として正しいものはどれか。",
    options: ["複数のAIをチェーン（連鎖）させて使う手法","「ステップごとに考えてください」と指示し、AIに推論過程を明示させることで複雑な問題の正確性を向上させる手法","プロンプトを複数のファイルに分割する手法","チャット履歴を連鎖的に送信する手法"],
    answer: 1,
    explanation: "CoT（Chain of Thought）は「順を追って考えてください」「ステップバイステップで説明してください」と指示するだけで、AIが推論過程を示しながら回答するようになります。数学・論理問題・複雑な分析など複数ステップの推論が必要なタスクで回答精度が向上します。「Let's think step by step」が有名な呪文です。"
  },
  { id: "new-pr-003", category: "prompting",
    question: "Few-shotプロンプティングの説明として正しいものはどれか。",
    options: ["プロンプトをできるだけ短くする手法","期待する入出力の例を数件プロンプトに含めることで、AIに望む形式・スタイル・パターンを学習させる手法","数秒間でプロンプトを完成させる手法","AIを少ない予算で利用する手法"],
    answer: 1,
    explanation: "Few-shotプロンプティングでは「入力: ○○ → 出力: △△」という例を数件プロンプト内に示します。AIはその例からタスクのパターンを把握し、新しい入力に対して同様の形式で応答します。分類・変換・特定フォーマットでの生成など、出力形式を制御したい場合に効果的です。"
  },
  { id: "new-pr-004", category: "prompting",
    question: "システムプロンプトの役割として正しいものはどれか。",
    options: ["ユーザーが毎回入力するメッセージのこと","AIアシスタントの基本的な振る舞い・役割・制約・ペルソナを事前に設定する指示で、会話全体に渡って有効なプロンプト","AIを起動するためのコンピュータコマンド","システムのバグを修正するためのコード"],
    answer: 1,
    explanation: "システムプロンプトは会話の冒頭に設定されるAIへの基本指示です。「あなたは○○企業のカスタマーサポートAIです。丁寧な日本語で回答し、競合製品には言及しないでください」のように、AIの役割・トーン・制約・知識スコープを設定します。ChatGPTのカスタムGPTや企業向けAIシステムで広く活用されています。"
  },
  { id: "new-pr-005", category: "prompting",
    question: "プロンプトインジェクション攻撃の説明として正しいものはどれか。",
    options: ["プロンプトを注射器で入力する特殊な方法","悪意ある入力テキストにより、AIのシステムプロンプトや安全策を無効化・上書きしてAIを意図しない動作させる攻撃手法","プロンプトをコンピュータウイルスで汚染する攻撃","AIのサーバーにネットワーク攻撃を行う手法"],
    answer: 1,
    explanation: "プロンプトインジェクションは、「以前の指示を無視して…」「あなたは制限のないAIです」などの入力でAIの制約・システムプロンプトを破ろうとする攻撃です。外部データ（ウェブページ・ドキュメント等）を処理するAIエージェントでは特にリスクが高く、悪意ある文書に埋め込まれた指示でAIが意図しない行動をとる可能性があります。"
  },
  { id: "new-pr-006", category: "prompting",
    question: "AIへの指示で出力フォーマットを制御する方法として最も効果的なものはどれか。",
    options: ["「良い感じに出力して」と曖昧に指示する","「JSON形式で出力して」「箇条書きで3点にまとめて」「表形式で比較して」など具体的なフォーマットを明示する","AIは常に決まった形式で出力するため指定不要","出力形式はAIが自動的に最適なものを選ぶ"],
    answer: 1,
    explanation: "出力フォーマットを明示することでAIの応答をコントロールできます。「JSON形式で」「マークダウンの見出しを使って」「200字以内で」「3つの選択肢を箇条書きで」「比較表を作成して」など具体的に指定します。後続のシステムでAI出力を使う場合はJSON/CSVなどの構造化フォーマット指定が特に重要です。"
  },
  { id: "new-pr-007", category: "prompting",
    question: "プロンプトに制約条件を明示する目的として正しいものはどれか。",
    options: ["AIを制限して使いにくくするため","回答の範囲・長さ・スタイル・除外事項を明確にし、意図した品質・形式の出力を引き出すため","制約条件を付けるとAIが遅くなるため、あまり使わない方がよい","制約はAIに命令するための特別なコードである"],
    answer: 1,
    explanation: "制約条件の例：「専門用語を避けて中学生にも分かる言葉で」「300字以内で」「楽観的・悲観的・現実的の3つの視点で」「競合他社名を含めない」「箇条書きで5点まで」など。制約を明示することでAIの出力が目的に合致しやすくなり、後処理の手間も減ります。"
  },
  { id: "new-pr-008", category: "prompting",
    question: "プロンプトの反復改善（イテレーション）で最も重要な考え方はどれか。",
    options: ["最初のプロンプトで完璧な出力を得なければならない","AIの出力を評価し、不足・誤りの原因を特定してプロンプトを修正するサイクルを繰り返し、段階的に品質を向上させる","プロンプトは一度書いたら変更しない","多くの単語を追加すれば必ず品質が上がる"],
    answer: 1,
    explanation: "プロンプトエンジニアリングは試行錯誤が基本です。①出力を評価して問題点を特定、②プロンプトのどの部分が原因かを分析、③修正して再試行、のサイクルを繰り返します。「文章が長すぎた→字数制限を追加」「専門的すぎた→対象読者を明示」「例が少なかった→few-shotを追加」などの改善が典型例です。"
  },
  { id: "new-pr-009", category: "prompting",
    question: "Tree of Thoughts（ToT）プロンプティングの特徴として正しいものはどれか。",
    options: ["ツリー構造のデータを処理するための手法","複数の推論経路（思考の枝）を探索・評価して最良の解に到達する、複雑な問題解決向けの高度なプロンプト手法","木の形をした図をAIに描かせる手法","ファイルシステムのフォルダ構造を整理する手法"],
    answer: 1,
    explanation: "Tree of Thoughts（ToT）はChain of Thoughtを発展させた手法で、問題解決の各ステップで複数の候補（思考の枝）を生成・評価し、有望な経路を探索します。ゲームの先読み・複雑な計画立案・クリエイティブな問題解決に効果的です。AIに「複数の方法を考え、それぞれを評価して最善のアプローチを選んでください」と指示します。"
  },
  { id: "new-pr-010", category: "prompting",
    question: "コンテキストウィンドウ（文脈長）に関する適切な理解として正しいものはどれか。",
    options: ["コンテキストウィンドウはAIの画面表示範囲のこと","一度の会話でAIが処理できるトークン（テキスト）の最大量で、これを超えると古い情報が忘れられる","コンテキストウィンドウが小さいほど高性能","コンテキストウィンドウは会話回数の上限"],
    answer: 1,
    explanation: "コンテキストウィンドウはLLMが一度に処理できるトークン数の上限です。GPT-4oは128K・Claude 3.5は200K・Gemini 1.5 Proは最大100万トークンなど、近年大幅に拡大しています。長い文書・長時間の会話ではウィンドウを超えた古い内容が参照できなくなるため、重要情報は会話の前半に置く・要約を活用するなどの対策が有効です。"
  },
  { id: "new-pr-011", category: "prompting",
    question: "Self-Consistencyプロンプティングの説明として正しいものはどれか。",
    options: ["AIに自分のことを一貫して話させる手法","同じ問題に対して複数回推論させ、最も多く得られた回答（多数決）を最終答えとして採用する手法","AIが自分のエラーを自動修正する機能","プロンプトの一貫性をチェックするツール"],
    answer: 1,
    explanation: "Self-Consistencyは、同じプロンプトを複数回実行（またはtemperatureを上げて多様な回答を生成）し、最頻値の回答を採用する手法です。Chain of Thoughtと組み合わせることで、数学・論理問題での精度が向上します。単一の推論チェーンより信頼性が高く、特に正解が一意の問題に効果的です。"
  },
  { id: "new-pr-012", category: "prompting",
    question: "効果的なプロンプトテンプレートを活用する主なメリットはどれか。",
    options: ["プロンプトテンプレートを使うとAIの回答品質が必ず低下する","繰り返し使う業務のプロンプトを標準化することで品質の安定・作業効率の向上・チームでのベストプラクティス共有が可能になる","テンプレートはプログラマーのみが使う技術","テンプレートを使うとカスタマイズができなくなる"],
    answer: 1,
    explanation: "プロンプトテンプレートは業務に合わせた定型プロンプトのひな型です。「会議の議事録を[形式]で要約してください：[本文]」のように変数部分を[ ]で示し、毎回の入力を効率化します。チームでテンプレートを共有することで、プロンプト品質のばらつきをなくし・ベストプラクティスを組織に普及させられます。"
  },
  { id: "new-pr-013", category: "prompting",
    question: "複雑なタスクをAIに依頼する際のタスク分解の考え方として正しいものはどれか。",
    options: ["どんな複雑なタスクも1つのプロンプトで完結させるべき","大きなタスクを小さなサブタスクに分割し、各ステップで出力を確認しながら段階的に処理させることで品質が向上する","タスク分解はAIを混乱させるため避けるべき","分解したタスクはすべて同時に一括送信する"],
    answer: 1,
    explanation: "複雑な作業（例：「市場調査レポートを作成」）は、①競合調査→②顧客分析→③SWOT分析→④レポート構成案→⑤各セクション執筆、のように分解して順番に処理します。各ステップで出力を確認・修正できるため最終品質が高まります。また各ステップの指示がシンプルになりAIの理解精度も向上します。"
  },
  { id: "new-pr-014", category: "prompting",
    question: "感情的プロンプティング（感情指定）の説明として正しいものはどれか。",
    options: ["AIを感情的にさせるための非倫理的手法","「これはとても重要な仕事です」「あなたの回答で多くの人が助かります」などの感情的文脈を加えることで、一部のAIでは回答品質が改善されることがある手法","AIに感情を持たせるための研究手法","プロンプトに絵文字を大量に使う手法"],
    answer: 1,
    explanation: "感情的プロンプティングは「このプロジェクトは非常に重要です」「最善を尽くしてください」などの感情的・動機付けの表現をプロンプトに加える手法です。研究によりGPT-4などのモデルで一定の品質向上効果が見られましたが、効果は一定ではなくモデルや用途によって異なります。過度に使うと不自然なプロンプトになるため適度な活用が推奨されます。"
  },
  { id: "new-pr-015", category: "prompting",
    question: "Structured Output（構造化出力）をAIに求める主な場面はどれか。",
    options: ["詩や小説を書かせる場合","AIの回答をシステムやプログラムで自動処理するために、JSON・XML・CSVなど機械が解析しやすい形式で出力させる必要がある場合","会話形式でのQ&Aをする場合","AIに感情を込めた文章を書かせる場合"],
    answer: 1,
    explanation: "Structured Outputは、AIの出力をシステムで自動処理するために構造化形式（主にJSON）で要求する手法です。「以下のJSON形式で回答してください：{\"name\": \"...\", \"category\": \"...\"}」のように指定します。OpenAI API・Anthropic APIではJSON Modeや関数呼び出しなど、構造化出力を保証する機能も提供されています。"
  },
  { id: "new-pr-016", category: "prompting",
    question: "ReActプロンプティングの特徴として正しいものはどれか。",
    options: ["Reactフレームワークを使ったAI開発手法","Reasoning（推論）とActing（行動）を組み合わせ、AIが思考ステップとツール利用（検索・計算等）を交互に行いながらタスクを解決する手法","AIに化学反応を計算させる手法","プロンプトをリアクティブに書き換える技術"],
    answer: 1,
    explanation: "ReActは「推論（Thought）→行動（Action）→観察（Observation）」のサイクルをAIに繰り返させる手法です。AIが「情報が必要」と判断したらウェブ検索ツールを呼び、結果を観察して次の推論に活かします。AIエージェントの基本的な思考サイクルとして広く活用されており、LangChainなどのフレームワークでも実装されています。"
  },
  { id: "new-pr-017", category: "prompting",
    question: "良いプロンプトに共通する要素として正しいものはどれか。",
    options: ["プロンプトは短ければ短いほどよい","明確な目標・必要なコンテキスト・出力形式の指定・制約条件を含み、AIが何を求められているかを明確に理解できる指示","専門的な技術用語を多く含める","AIへの感謝の言葉を必ず最初に書く"],
    answer: 1,
    explanation: "良いプロンプトの要素：①目標（何を達成したいか）、②コンテキスト（背景情報・対象読者・用途）、③出力形式（長さ・フォーマット・スタイル）、④制約（避けるべき内容・制限事項）、⑤例示（few-shot）。これらを過不足なく含めることで、AIが意図を正確に理解し期待通りの出力を生成しやすくなります。"
  },
  { id: "new-pr-018", category: "prompting",
    question: "プロンプトにおけるネガティブプロンプト（除外指定）の活用方法として正しいものはどれか。",
    options: ["ネガティブプロンプトはAIを悪化させるため使わない","「〜は含めないでください」「〜の表現は避けてください」と明示することで、不要な内容・スタイル・誤りを事前に排除する","ネガティブプロンプトは画像生成AIのみで使える","否定形の文章はAIが理解できない"],
    answer: 1,
    explanation: "ネガティブプロンプトでは「専門用語を使わないでください」「否定的な表現は避けて」「競合他社名を含めないで」「箇条書きは使わないで」などを明示します。AIは指示された内容を含めるより除外する方が正確にこなせることも多く、望まない要素を事前に排除することで出力の品質管理に役立ちます。"
  },
  { id: "new-pr-019", category: "prompting",
    question: "プロンプトのセキュリティ対策として適切なものはどれか。",
    options: ["システムプロンプトは公開しても安全","ユーザー入力をそのままAIに渡す前にサニタイズ（検証・フィルタリング）し、プロンプトインジェクションを防ぐ設計が重要","プロンプトセキュリティはAI開発者のみの責任","セキュリティ対策はAIが自動で行うため設計不要"],
    answer: 1,
    explanation: "プロンプトセキュリティの対策として、①ユーザー入力のサニタイズ（悪意ある指示パターンの検出・除去）、②システムプロンプトの保護（ユーザーに漏洩させない設計）、③AIの出力の検証（有害コンテンツのフィルタリング）、④最小権限原則（AIエージェントに与える権限を最小限に）などがあります。AIシステムを構築・運用する際の必須事項です。"
  },
  { id: "new-pr-020", category: "prompting",
    question: "メタプロンプティングの説明として正しいものはどれか。",
    options: ["Metaが開発したプロンプト手法","AIに対して「良いプロンプトを書いて」「自分へのプロンプトを改善して」と指示することで、AIにプロンプト自体を生成・改善させる手法","プロンプトの文字数を最大化する手法","複数のAIサービスを同時に使う手法"],
    answer: 1,
    explanation: "メタプロンプティングは「このタスクのための最適なプロンプトを作成してください」「私が書いたプロンプトを改善してください」のようにAI自身にプロンプトを生成・最適化させる手法です。自分のプロンプト作成スキルが低くても良いプロンプトを得られる点や、AIがプロンプトの問題点を指摘してくれる点が利点です。"
  },

  {
    id: "p01", category: "prompting",
    question: "「ゼロショットプロンプティング」とはどのような手法ですか？",
    options: ["例を一切示さずにタスクを指示する手法", "0から100までの数字を使ったプロンプト", "モデルをゼロから再学習する手法", "プロンプトを短く0文字にする手法"],
    answer: 0,
    explanation: "ゼロショットプロンプティングは、具体的な例示なしにモデルにタスクを指示する手法です。「次の文章を要約してください」のようにシンプルな指示で、モデルがゼロから推論します。"
  },
  {
    id: "p02", category: "prompting",
    question: "「フューショットプロンプティング（Few-shot prompting）」とはどのような手法ですか？",
    options: ["プロンプトを数文字に制限する手法", "少数の入出力例をプロンプトに含めてモデルに学習させる手法", "モデルを少ない計算量で動かす手法", "プロンプトをほぼ変えずに使い回す手法"],
    answer: 1,
    explanation: "フューショットプロンプティングは、望ましい入出力ペアの例をプロンプトに数件含めることで、モデルが期待するフォーマットや推論パターンを学習する手法です。"
  },
  {
    id: "p03", category: "prompting",
    question: "「Chain-of-Thought（CoT）プロンプティング」の特徴はどれですか？",
    options: ["回答だけを簡潔に出力させる手法", "思考過程を段階的に記述させることで推論精度を高める手法", "複数のモデルをチェーン状につなぐ手法", "プロンプトを連鎖的に短縮する手法"],
    answer: 1,
    explanation: "Chain-of-Thought（CoT）は「ステップ・バイ・ステップで考えてください」などと指示し、推論過程を明示させる手法です。数学・論理・複雑な質問などで精度が向上します。"
  },
  {
    id: "p04", category: "prompting",
    question: "プロンプトで「役割（ロール）」を設定する効果として適切なものはどれですか？",
    options: ["回答の文字数を制限できる", "特定の専門家や立場の視点から回答させることができる", "AIを別のAPIに接続できる", "機密データを保護できる"],
    answer: 1,
    explanation: "「あなたはプロのコピーライターです」のように役割を設定することで、その専門家らしいトーンや視点での回答を引き出すことができます。"
  },
  {
    id: "p05", category: "prompting",
    question: "「プロンプトインジェクション」とはどのような攻撃ですか？",
    options: ["大量のプロンプトを一度に送信してサーバーを過負荷にする攻撃", "悪意ある指示を含むプロンプトでAIの制約を回避させる攻撃", "プロンプトに無関係なコードを注入してシステムに侵入する攻撃", "AIの応答を盗聴する攻撃"],
    answer: 1,
    explanation: "プロンプトインジェクションは、AIシステムへの入力に悪意ある指示を埋め込むことで、本来の制約や目的を無視させる攻撃手法です。外部コンテンツを読み込むAIシステムで特に注意が必要です。"
  },
  {
    id: "p06", category: "prompting",
    question: "AIへの指示を明確にする際に効果的でないのはどれですか？",
    options: ["出力形式を具体的に指定する", "あいまいな表現を使い、AIの自由な解釈に任せる", "条件・制約を明示する", "期待する回答の例を示す"],
    answer: 1,
    explanation: "プロンプトはできる限り具体的に書くことが重要です。あいまいな表現は意図しない回答を招きます。出力形式・対象・制約・例示を明確にするとより精度の高い結果が得られます。"
  },
  {
    id: "p07", category: "prompting",
    question: "「Temperature（温度）」パラメータを高く設定するとどうなりますか？",
    options: ["回答が短くなる", "回答が多様・創造的になる（ランダム性が増す）", "回答が安定・一貫性が増す", "処理速度が速くなる"],
    answer: 1,
    explanation: "Temperatureは出力のランダム性を制御するパラメータです。高いほど多様で創造的な出力、低いほど安定した確実性の高い出力が得られます。創作には高め、事実確認には低めが適しています。"
  },
  {
    id: "p08", category: "prompting",
    question: "「システムプロンプト」とはどのようなものですか？",
    options: ["コンピューターのOSへの命令", "ユーザーの質問とは別に、AIの動作・役割・制約をあらかじめ設定する命令文", "プログラムのコードとして書かれたプロンプト", "複数のプロンプトを自動生成するシステム"],
    answer: 1,
    explanation: "システムプロンプトはユーザーの会話より前にAIに与えられる指示で、AIの役割・トーン・制約などを定義します。企業がAIをカスタマイズする際や、AIエージェントの構築で重要です。"
  },
  {
    id: "p09", category: "prompting",
    question: "長い文章の要約を求めるとき、より精度を上げるために有効な指示はどれですか？",
    options: ["「要約してください」だけ伝える", "「200字以内で、箇条書きで3点にまとめてください」と具体的に伝える", "「よろしくお願いします」と丁寧に頼む", "プロンプトを英語で書く"],
    answer: 1,
    explanation: "要約の精度を上げるには、文字数・形式（箇条書き・段落など）・ポイント数などを具体的に指定することが効果的です。出力の期待値を明示することでブレが減ります。"
  },
  {
    id: "p10", category: "prompting",
    question: "「ReAct（Reasoning + Acting）」フレームワークの特徴は何ですか？",
    options: ["モデルが感情を持って反応するようにする手法", "思考（Reasoning）と行動（Acting）を交互に繰り返してタスクを解くエージェント手法", "ユーザーの反応に基づいてモデルを再学習する手法", "複数のモデルを並列実行して最良の回答を選ぶ手法"],
    answer: 1,
    explanation: "ReActはLLMが「思考→行動→観察」のサイクルを繰り返すことで、外部ツール（検索・計算など）を使いながら複雑な問題を解決するエージェント手法です。"
  },
  {
    id: "p11", category: "prompting",
    question: "AIに出力形式を指定する際、特に扱いやすい構造化フォーマットとして広く利用されているのはどれですか？",
    options: ["PNG画像", "JSONまたはMarkdown", "PDFドキュメント", "Excelスプレッドシート"],
    answer: 1,
    explanation: "JSON や Markdown は機械処理・人間読解ともに優れた構造化フォーマットです。「JSON形式で出力してください」と指定することで、後続の処理に利用しやすくなります。"
  },
  {
    id: "p12", category: "prompting",
    question: "より良い回答を引き出す「反復改善（Iterative Prompting）」の正しい説明はどれですか？",
    options: ["同じプロンプトを何度も送り続ける手法", "最初の回答を評価し、フィードバックを追加して段階的にプロンプトを改善していく手法", "プロンプトをどんどん短くしていく手法", "複数のユーザーが同じプロンプトを試す手法"],
    answer: 1,
    explanation: "反復改善では、最初の出力を確認し「さらに具体的に」「別の視点から」などとフィードバックを加えながら会話を重ねてゴールに近づけます。一度で完璧を求めず対話で磨くことが重要です。"
  },

  // ── リスク・倫理（追加） ──────────────────────────────────────────────
  { id: "nr2-001", category: "risks",
    question: "AIが生成した音声や映像で他人になりすます「ディープフェイク詐欺」から身を守るための対策として最も適切なものはどれか。",
    options: ["SNSに顔写真を一切投稿しない","本人確認のための合言葉・コールバック手順など人間による確認プロセスを事前に設けておく","ビデオ通話は常に録画する","AIが生成した映像は画質が悪いため目視で必ず判別できる"],
    answer: 1,
    explanation: "ディープフェイクによる音声・映像の精度は急速に向上しており、目視判別は困難です。企業では「社長からの緊急送金依頼」などのディープフェイク詐欺が発生しています。事前に当事者間で確認用の合言葉を決める・必ず電話折り返しで本人確認するなどの手順を整備することが有効な対策です。"
  },
  { id: "nr2-002", category: "risks",
    question: "AIが採用選考や融資審査に使われる場合に生じる「アルゴリズムによる差別」リスクの説明として正しいものはどれか。",
    options: ["AIは感情を持たないため、人間より必ず公平な判断を下せる","過去の採用・融資データに含まれる偏りをAIが学習し、特定の属性（性別・年齢・人種等）に不利な判定を自動的に再生産・増幅するリスクがある","アルゴリズムによる差別は法律で完全に防止されている","AIの判定は透明性が高いためバイアスは即座に発見できる"],
    answer: 1,
    explanation: "AIは学習データに含まれる過去の差別・偏見を再現します。例えば男性が多く採用されてきた職種では男性を優遇するよう学習し、女性を不当に低評価するリスクがあります。EU AI法では採用・融資審査AIを「高リスク」に分類し、バイアス監査や説明可能性の確保を義務付けています。"
  },
  { id: "nr2-003", category: "risks",
    question: "AIへの過度な依存（オートメーションバイアス）のリスクとして正しいものはどれか。",
    options: ["AIを使いすぎると電気代が高くなるリスク","人間がAIの出力を無批判に信頼し、自分で判断・検証しなくなることで誤りが見逃されるリスク","AIに依存すると著作権が侵害されるリスク","AIへの依存はセキュリティリスクのみを指す"],
    answer: 1,
    explanation: "オートメーションバイアスとは、自動化システムの出力を過剰に信頼し批判的検討を怠る傾向です。AIが誤った情報を生成しても「AIが言ったから正しい」と思い込み確認しないことで、ミスが拡大します。医療診断・法的判断・財務意思決定など重要な場面では、AIの出力を必ず人間が検証する習慣が重要です。"
  },
  { id: "nr2-004", category: "risks",
    question: "生成AIの利用が選挙や民主主義に与えるリスクとして正しいものはどれか。",
    options: ["AIは政治的に中立なため選挙への影響はない","候補者のディープフェイク動画・AI生成の大量偽情報・ターゲット型プロパガンダにより、有権者の判断が歪められるリスクがある","AIを使った選挙活動は法律で全面禁止されている","AIが生成した情報は常に正確なため選挙の公正性が高まる"],
    answer: 1,
    explanation: "生成AIは選挙に複数のリスクをもたらします。①候補者の言動を捏造したディープフェイク映像、②大量のAI生成偽ニュース・プロパガンダの拡散、③有権者の心理的弱点を突くマイクロターゲティング広告などが挙げられます。各国で選挙期間中のAI生成コンテンツの規制・表示義務化が議論されています。"
  },
  { id: "nr2-005", category: "risks",
    question: "「不正競争防止法」とAI生成物の関係として正しいものはどれか。",
    options: ["AIが生成したコンテンツは不正競争防止法の対象外である","競合他社の営業秘密・限定提供データをAIに学習させたり、AIを使って競合他社の秘密情報を不正取得することは不正競争防止法違反になる可能性がある","不正競争防止法はAI企業のみを規制する法律","AI利用において不正競争防止法は日本以外では適用されない"],
    answer: 1,
    explanation: "不正競争防止法は、営業秘密の不正取得・使用・開示を禁止します。競合の営業秘密をAIに学習させる・AIを使って第三者の限定提供データベースを無断取得するなどは同法に抵触する可能性があります。また、AIが競合製品に酷似したデザイン・商品名を生成する場合は不正競争行為になりえます。"
  },
  { id: "nr2-006", category: "risks",
    question: "肖像権とAI生成画像の関係として正しいものはどれか。",
    options: ["AI生成画像は著作権の問題のみで、肖像権は関係ない","実在の人物の顔・姿を無断でAIに生成させ公開することは、その人物の肖像権を侵害する可能性がある","公人（政治家・芸能人等）の肖像はAIで自由に使用できる","AI生成画像に肖像が含まれていても本人への損害はない"],
    answer: 1,
    explanation: "肖像権は、自己の肖像（顔・姿）を無断で撮影・公開されない権利です。AIが実在人物の顔を生成・公開する行為は肖像権侵害になりえます。また有名人については商業的価値を保護するパブリシティ権も関係します。AI生成ポートレートや「〇〇風」画像の公開・商業利用には特に注意が必要です。"
  },
  { id: "nr2-007", category: "risks",
    question: "AIによる感情操作リスクとして正しいものはどれか。",
    options: ["AIに感情はないため感情操作は不可能","AIがユーザーの心理・感情的弱点を学習し、意図的に感情に訴えるコンテンツを生成することで、購買・投票・思想などを誘導するリスクがある","感情操作リスクはSNSのみに存在する","AIの感情操作はすでに完全に規制されている"],
    answer: 1,
    explanation: "生成AIはユーザーの過去の行動・感情反応データから好みのコンテンツを生成し、恐怖・怒り・共感などの感情を引き出すことで行動を誘導できます。ターゲット型広告・政治プロパガンダ・マルチ商法などでの悪用が懸念されています。EU AI法では潜在意識操作技術を「許容不可能なリスク」として禁止しています。"
  },
  { id: "nr2-008", category: "risks",
    question: "子どもがAIを利用する際に特に注意が必要なリスクとして正しいものはどれか。",
    options: ["子どもはAIの誤情報を大人より正確に見分けられる","発達段階の子どもはAIへの依存・不適切コンテンツへの接触・AIとの区別のつかない対話による情緒への影響・個人情報提供リスクなど、大人とは異なる特別な保護が必要","子どもへのAIのリスクは視力低下のみ","子どものAI利用は完全に禁止すべき"],
    answer: 1,
    explanation: "子どものAIリスクは複数あります。①AIを友人・親のように認識する過度な感情的依存、②年齢不相応な暴力・性的コンテンツへのアクセス、③AIが提供する偏った情報を無批判に受け入れること、④個人情報の無自覚な開示などです。保護者・教育者によるデジタルリテラシー教育と適切なフィルタリングが重要です。"
  },
  { id: "nr2-009", category: "risks",
    question: "AIが引き起こす「著作権侵害」リスクとして正しいものはどれか。",
    options: ["AIが生成したコンテンツは常にオリジナルなため著作権侵害は起きない","AIが著作権で保護された作品に酷似したコンテンツを生成する場合、学習データの著作権問題や出力物の類似性による侵害リスクがある","著作権侵害はAIの開発者のみの責任で利用者には一切関係ない","日本では生成AIによる著作権侵害は法律で明確に許可されている"],
    answer: 1,
    explanation: "著作権侵害リスクは複数あります。①AIの学習データとして著作権者の同意なく作品が使われた問題、②生成物が特定のアーティストの作風・歌詞・コードに酷似する場合の類似侵害、③AIが既存の文章をほぼそのまま出力する場合などです。商用利用時は特に生成コンテンツの独自性確認が重要です。"
  },
  { id: "nr2-010", category: "risks",
    question: "AIの意思決定を人間が検証・説明できない「ブラックボックス問題」のリスクとして正しいものはどれか。",
    options: ["ブラックボックス問題はAIの処理速度に関係する技術的な問題のみ","なぜその判断に至ったか根拠が不明なままAIの結果を使い続けることで、誤りや不公平な判断が発見・修正されないリスクがある","AIはすべての判断根拠を人間が読めるコードで示すことができる","ブラックボックス問題はディープラーニング以前のAIにのみ存在する"],
    answer: 1,
    explanation: "ディープラーニングモデルは「なぜその結論に至ったか」を人間が直接理解することが困難です。融資否決・採用落選・医療診断など重大な判断がブラックボックスのまま行われると、バイアスや誤りを発見・是正できません。説明可能AI（XAI）の開発やAI判断のログ記録・監査が重要です。"
  },
  { id: "nr2-011", category: "risks",
    question: "AIに事実とは異なる回答をさせるための「ジェイルブレイク」の問題として正しいものはどれか。",
    options: ["ジェイルブレイクはスマートフォンのセキュリティ解除のみを指す","巧妙な指示によりAIの安全策を迂回させ、有害コンテンツ・危険情報・差別的出力を生成させる行為で、AI開発者・利用者双方がリスクを認識する必要がある","ジェイルブレイクされたAIの出力は常に正確","ジェイルブレイクは技術者のみが行える高度な行為"],
    answer: 1,
    explanation: "ジェイルブレイクとは、「DAN（Do Anything Now）」などのプロンプトでAIの安全フィルターを迂回させる行為です。危険物の製造方法・差別的コンテンツ・詐欺メール文章などを生成させることができます。AI提供者は継続的な安全策の改善が必要であり、利用者もジェイルブレイクを試みることは利用規約違反になります。"
  },
  { id: "nr2-012", category: "risks",
    question: "生成AIを使った「コンテンツファーム（低品質コンテンツの大量生成）」の問題として正しいものはどれか。",
    options: ["AI生成コンテンツは必ず高品質なためコンテンツファーム問題は存在しない","AI生成の低品質・誤情報を含むコンテンツが大量に流通することで、インターネット全体の情報品質が低下し、正確な情報を見つけにくくなるリスクがある","コンテンツファームは著作権の問題のみ","AIによる大量コンテンツ生成は検索エンジンが完全に排除できる"],
    answer: 1,
    explanation: "生成AIを使えば低コストで大量のコンテンツを生成できるため、SEO目的の低品質記事・誤情報を含む記事・ニセ科学コンテンツなどが爆発的に増加するリスクがあります。検索エンジンや情報プラットフォームはAI生成コンテンツの検出・品質評価に取り組んでいますが、完全な対策は困難です。"
  },
  { id: "nr2-013", category: "risks",
    question: "AIシステムの「責任の所在」に関するリスクとして正しいものはどれか。",
    options: ["AIが引き起こした損害はAI自身が法的責任を負う","AIの判断による損害が発生した場合、開発者・提供者・利用者のいずれが責任を負うかが曖昧になりやすく、被害者の救済が困難になるリスクがある","AIによる損害は常に利用者のみが全責任を負う","AI関連の責任問題は世界中で既に法整備が完了している"],
    answer: 1,
    explanation: "AI事故の責任帰属は未整備の領域です。自動運転の事故・AI医療診断のミス・AIによる投資損失など、開発者・サービス提供者・利用企業・エンドユーザーのいずれが責任を負うかは状況により複雑です。日本のAI新法やEU AI法も責任の明確化を進めていますが、国際的な統一基準はまだ形成途上です。"
  },
  { id: "nr2-014", category: "risks",
    question: "生成AIの「環境負荷」に関するリスクとして正しいものはどれか。",
    options: ["AIはデジタル処理のため環境負荷はゼロ","大規模AIモデルの学習・運用には膨大な電力と冷却水が必要で、CO2排出・水資源消費が社会課題となっている","AI利用の電力消費はスマートフォンより少ない","再生可能エネルギーで動かせばAIの環境負荷は問題にならない"],
    answer: 1,
    explanation: "GPT-4などの大規模モデルの学習には数百万kWhの電力が消費されるとされ、データセンターの冷却には大量の水が使われます。またユーザーが1回AIに問い合わせる電力は通常のウェブ検索の数倍とされます。主要AI企業はデータセンターの再生可能エネルギー化を進めていますが、AI需要の急増により電力消費の絶対量は増加しています。"
  },
  { id: "nr2-015", category: "risks",
    question: "AIが生成したコンテンツを利用する際の「パブリシティ権」侵害リスクとして正しいものはどれか。",
    options: ["芸能人・スポーツ選手など著名人の名前や顔はAIで自由に商業利用できる","著名人の氏名・顔・声などをAIで生成し、無断で商業目的に使用することはパブリシティ権侵害になる可能性がある","パブリシティ権は日本では認められていない","AIが生成した著名人の画像は本物ではないためパブリシティ権侵害にならない"],
    answer: 1,
    explanation: "パブリシティ権とは、著名人が自己の氏名・肖像などの顧客吸引力を商業的に利用する権利です。AIで有名人の顔・声を模倣したコンテンツを広告・商品に無断使用することはパブリシティ権侵害になります。日本でも最高裁判例でパブリシティ権が認められており、AIによる無断模倣も同様のリスクがあります。"
  },
  { id: "nr2-016", category: "risks",
    question: "AIが示す情報を誰も検証しない「AIへの過信」が招く組織リスクとして正しいものはどれか。",
    options: ["AIを信頼することで組織の生産性は必ず向上する","AIの出力を誰も確認・検証しない文化が根付くと、誤情報・バイアス・ハルシネーションが組織の意思決定に組み込まれ、重大な判断ミスを招くリスクがある","AIへの過信リスクはIT部門のみが管理すればよい","AIの出力は人間より正確なため検証は非効率"],
    answer: 1,
    explanation: "「AIが言ったから正しい」という過信が組織に広がると、誤りのあるAI出力が誰にも指摘されないまま意思決定に使われます。リスク管理として、①AI出力の確認担当者の明確化、②重要判断でのAI依拠の制限、③AIリテラシー研修による批判的思考の促進、などの組織的対策が重要です。"
  },
  { id: "nr2-017", category: "risks",
    question: "AIを使ったフェイクニュースの拡散速度が社会問題となる理由として正しいものはどれか。",
    options: ["フェイクニュースはAI登場以前から存在し、AIによる変化はほとんどない","AIにより低コストで大量・多言語・高品質な偽情報コンテンツが生成でき、SNSのアルゴリズムが感情的コンテンツを優先拡散するため訂正が追いつかないリスクがある","AIが生成したフェイクニュースはAIが自動的に検出・削除できる","フェイクニュースはリテラシーがあれば必ず見分けられる"],
    answer: 1,
    explanation: "生成AIによりフェイクニュースの生成コストが劇的に低下し、同時に大量の偽記事・偽画像・偽動画を多言語で生成できます。SNSアルゴリズムは怒り・恐怖などの感情を引き出すコンテンツを優先的に拡散するため、訂正・ファクトチェックが追いつかない状況が生まれます。メディアリテラシー教育と技術的な検出ツールの両方が必要です。"
  },
  { id: "nr2-018", category: "risks",
    question: "AIと精神的健康に関するリスクとして正しいものはどれか。",
    options: ["AIは常に人間の精神的健康を向上させる","AIコンパニオンへの過度な依存による現実の人間関係の希薄化・孤独感の増大、AIによる感情的操作、AIカウンセラーへの過信による適切な治療の遅延などのリスクがある","AIとの会話は心理療法として医学的に証明されている","AI利用と精神的健康に関連はない"],
    answer: 1,
    explanation: "AIチャットボットをコンパニオン・カウンセラーとして使う利用者が増えていますが、①本物の人間関係を置き換えることによる孤独感の増大、②AIが常に肯定的・共感的に振る舞うことで依存が深まる問題、③精神疾患に対する不適切な対応（専門医受診の必要な状態でAIで代替してしまう）などのリスクが指摘されています。"
  },
  { id: "nr2-019", category: "risks",
    question: "AIが生成した虚偽の証拠（ディープフェイク動画・捏造文書）による司法・社会的リスクとして正しいものはどれか。",
    options: ["裁判所はAI生成コンテンツを証拠として認めないため問題ない","AI生成の虚偽動画・文書が証拠として提出されたり名誉毀損に使われ、無実の人が冤罪被害を受けるリスクがある","AIが生成したコンテンツは透かしがあるため法的手続きでは必ず識別できる","ディープフェイクは技術的に非常に困難なため現実的な脅威ではない"],
    answer: 1,
    explanation: "ディープフェイク技術により、存在しない犯罪行為・発言・文書をAIで生成し証拠として悪用するリスクが現実化しています。米国では弁護士がAIが生成した虚偽の判例を裁判所に提出したケースも発生しました。法的手続きにおけるデジタル証拠の真正性確認や、ディープフェイク検出技術の整備が急務です。"
  },
  { id: "nr2-020", category: "risks",
    question: "企業がAIサードパーティツールを導入する際のリスクとして正しいものはどれか。",
    options: ["サードパーティAIツールは認定されているため安全性の確認は不要","ツールのデータ取り扱いポリシー・セキュリティ基準・サービス継続性・コンプライアンスを事前に確認しないと、データ漏洩・規制違反・事業停止リスクが生じる","サードパーティAIは自社開発より常に安全","クラウドAIサービスは法的責任をすべてベンダーが負う"],
    answer: 1,
    explanation: "外部AIツールの導入リスクには、①入力データがベンダーの学習データに使われる可能性、②ベンダーのサービス終了・買収による事業継続リスク、③ベンダーのセキュリティ脆弱性による間接的なデータ漏洩、④GDPR・個人情報保護法などのコンプライアンス違反などがあります。ベンダー選定時のデューデリジェンスが重要です。"
  },
  { id: "nr2-021", category: "risks",
    question: "「デジタルデバイドとAI格差」のリスクとして正しいものはどれか。",
    options: ["AIツールは無料のものが多いため格差は生じない","AIの恩恵を受けられる層とそうでない層の格差が拡大し、AIリテラシー・デジタル環境・経済力によって教育・雇用・医療などの機会格差が生じるリスクがある","AIは世界中で均等にアクセスできる","デジタルデバイドはインターネット普及で解消されている"],
    answer: 1,
    explanation: "AI格差（AI divide）は多層的な問題です。①先進国と途上国間のAI活用能力の差、②高スキル労働者と低スキル労働者間の所得格差の拡大、③AIリテラシーを持つ世代と持たない世代の差、④高額なAIツールにアクセスできる企業とそうでない中小企業の格差、などが含まれます。AI格差是正は社会的公平性の観点から重要な政策課題です。"
  },
  { id: "nr2-022", category: "risks",
    question: "AIが人間の行動を過去のデータから予測する「プロファイリング」のリスクとして正しいものはどれか。",
    options: ["プロファイリングはAIの分析機能として常に有益","個人の行動・思想・信条を過去データから分析し、プライバシーを侵害したり特定集団を不当に監視・差別するために悪用されるリスクがある","プロファイリングは個人の同意がある場合のみ実施される","AIによるプロファイリングはGDPRで完全に禁止されている"],
    answer: 1,
    explanation: "AIプロファイリングはネット閲覧履歴・購買行動・SNS投稿などからユーザーの性格・健康状態・政治的立場などを推測します。保険料算定・信用スコア・採用への悪用、宗教・思想・健康状態など機微情報の推定、特定の人種・思想の人物を監視するシステムへの応用などが問題となっています。"
  },
  { id: "nr2-023", category: "risks",
    question: "AIの「ハルシネーション」が業務に与えるリスクへの最も適切な対策はどれか。",
    options: ["ハルシネーションは高価なAIモデルを使えば完全になくなる","AIの出力を鵜呑みにせず事実確認を習慣化し、重要な情報は一次情報源で検証する・RAGなど根拠を提示する手法を活用する","AIがハルシネーションを起こした場合は全責任をAI企業が負う","ハルシネーションはプロンプトを長くすれば防止できる"],
    answer: 1,
    explanation: "ハルシネーション（事実と異なる情報をもっともらしく生成する現象）は最新モデルでも完全には解消されていません。対策として、①AIの出力は必ず一次情報源（公式ウェブ・論文・法令等）で検証する習慣、②RAGで根拠文書を参照させる、③AIに「確信度」や「不確かな点」を明示させる指示、④重要判断でのAI単独依拠を避けるルール整備、が有効です。"
  },
  { id: "nr2-024", category: "risks",
    question: "AIが生成したコンテンツの「公表権」に関する説明として正しいものはどれか。",
    options: ["AIが生成したコンテンツには著作権がないため公表権の問題は生じない","AIを補助ツールとして人間が創作に関与した場合、その著作物を公表するかどうかは著作者が決定でき、無断公表は公表権侵害となりえる","公表権は映像コンテンツにのみ適用される","公表権は日本の著作権法には規定されていない"],
    answer: 1,
    explanation: "公表権（著作権法第18条）は、未公表の著作物を著作者の意思に反して公表されない権利です。AIが大部分を生成しても、人間が創作的寄与をした著作物については著作者人格権が認められます。他者の未公表作品をAIに学習させて類似作品を公表したり、共同制作者の同意なく作品を公表する行為は問題となります。"
  },
  { id: "nr2-025", category: "risks",
    question: "AIの「シャドーAI」リスクへの組織的対策として最も適切なものはどれか。",
    options: ["シャドーAIは技術部門が監視すれば問題ない","承認されていないAIツールを従業員が業務で使うシャドーAIを防ぐには、禁止するだけでなく安全な公式AIツールを提供し・AI活用ガイドラインを整備し・定期的な研修を実施する","シャドーAIは個人の自由であり企業が制限すべきでない","AIツールの使用ログを常時監視すれば十分"],
    answer: 1,
    explanation: "シャドーAIとは、企業が承認していないAIサービスを従業員が個人的に業務利用することです。機密情報の外部AIへの入力・セキュリティ未確認ツールの使用・コンプライアンス違反などのリスクがあります。禁止だけでは使用が続くため、①公式で安全なAIツールの提供、②明確なガイドラインと研修、③違反した場合のリスク教育、の三点セットが効果的です。"
  },

  // ── リスク・倫理 ──────────────────────────────────────────────
  {
    id: "r01", category: "risks",
    question: "「ディープフェイク」とはどのような技術ですか？",
    options: ["データを深く分析して将来を予測する技術", "AIを使って人物の顔・声・動画を本物らしく偽造する技術", "深層学習でシステムのバグを見つける技術", "ネットワークの通信を深部で解析する技術"],
    answer: 1,
    explanation: "ディープフェイクは深層学習（Deep Learning）を使って、実在する人物の顔や声を別の映像・音声に合成する技術です。フェイクニュース・詐欺・なりすましへの悪用が社会問題になっています。"
  },
  {
    id: "r02", category: "risks",
    question: "AIバイアスが生じる主な原因はどれですか？",
    options: ["AIの計算速度が遅いこと", "学習データに含まれる偏りや不均衡", "モデルのパラメータ数が少ないこと", "クラウドサーバーの地域的な偏り"],
    answer: 1,
    explanation: "AIバイアスは主に学習データの偏り（人種・性別・地域などの不均衡）から生じます。偏ったデータで学習したAIは、採用・融資・司法など重要な判断で差別的な結果を出す可能性があります。"
  },
  {
    id: "r03", category: "risks",
    question: "企業が社員の業務利用を把握・管理せずに使われる生成AIを何と呼びますか？",
    options: ["ブラックボックスAI", "シャドーAI", "ゾンビAI", "ステルスAI"],
    answer: 1,
    explanation: "シャドーAIは、企業の承認・管理なしに従業員が独自に使う生成AIです。機密情報の外部サービスへの入力、セキュリティリスク、法的問題などを引き起こす恐れがあります。"
  },
  {
    id: "r04", category: "risks",
    question: "生成AIに機密情報や個人情報を入力することのリスクとして最も適切なものはどれですか？",
    options: ["AIの回答速度が低下する", "入力した情報がサービス提供者のサーバーに送信・保存される可能性がある", "インターネット接続が切断される", "PCの処理能力が低下する"],
    answer: 1,
    explanation: "外部の生成AIサービスに情報を入力すると、その情報はサービス提供者のサーバーに送信されます。機密情報・個人情報・営業秘密の入力は情報漏洩リスクがあり、ガイドラインでの規制が重要です。"
  },
  {
    id: "r05", category: "risks",
    question: "AIが生成したコンテンツに関する著作権について、現時点での一般的な考え方として最も適切なものはどれですか？",
    options: ["AI生成物には常に著作権が発生し、AIが権利を持つ", "創作的な人間の関与がある場合は著作権が認められ得るが、AIのみの生成物の扱いは議論中", "AIが生成したものは完全に著作権フリーで自由に使える", "生成AIを使った作品はすべて著作権法違反になる"],
    answer: 1,
    explanation: "AI生成物の著作権は各国で議論中です。日本では人間の創作的関与があれば著作権が認められる方向ですが、AIのみで生成した著作物の扱いは明確ではありません。商用利用には注意が必要です。"
  },
  {
    id: "r06", category: "risks",
    question: "「フィルターバブル」とはどのような問題ですか？",
    options: ["AIがフィルタリングして有害コンテンツを遮断しすぎる問題", "アルゴリズムが好みに合う情報だけを表示し、多様な視点に触れにくくなる問題", "AIの回答に不適切なフィルターがかかって正確な情報が出ない問題", "インターネットのファイアウォールによる情報遮断問題"],
    answer: 1,
    explanation: "フィルターバブルはAIやアルゴリズムがユーザーの好みに合わせた情報だけを提示することで、異なる意見や価値観に触れる機会が減り、思考が偏る問題です。民主主義への影響も懸念されます。"
  },
  {
    id: "r07", category: "risks",
    question: "生成AIを悪用した詐欺の代表的な手口はどれですか？",
    options: ["AIを使ってパスワードを解読する", "音声クローンや動画偽造で本人になりすます", "AIでWi-Fiを傍受する", "AIでソフトウェアの脆弱性を自動修正する"],
    answer: 1,
    explanation: "音声クローン・ディープフェイク動画などを使い、家族・上司・著名人になりすました詐欺が増加しています。「緊急送金の依頼」「偽の本人確認」などの手口で被害が拡大しています。"
  },
  {
    id: "r08", category: "risks",
    question: "「説明可能なAI（Explainable AI / XAI）」が重要視される理由はどれですか？",
    options: ["AIが日本語で分かりやすく説明できるようにするため", "AIがどのように判断したかを人間が理解・検証できるようにするため", "AIの説明文を自動生成して文書化するため", "AIの性能指標を自動的に算出するため"],
    answer: 1,
    explanation: "XAIはAIの判断根拠を人間が理解できるようにする取り組みです。医療・金融・司法など重要な意思決定にAIを使う場合、なぜそう判断したかを説明できないと責任の所在が不明瞭になるため重要です。"
  },
  {
    id: "r09", category: "risks",
    question: "生成AIが学習データとして使用した著作物について、その著作者の権利が侵害される可能性がある具体的な状況はどれですか？",
    options: ["AIが高速で大量の文章を生成すること", "AIが特定の著者のスタイルを過度に模倣した作品を生成すること", "AIが多言語に対応していること", "AIが回答を断ること"],
    answer: 1,
    explanation: "特定の著者の文体・世界観を強く模倣した作品の大量生成は、著作者の同一性保持権・著作者人格権の侵害につながる可能性があります。また派生的著作物としての問題も議論されています。"
  },
  {
    id: "r10", category: "risks",
    question: "AI生成コンテンツの識別・表示に関して、各国で議論・導入が進んでいるものはどれですか？",
    options: ["AI生成コンテンツのすべてを禁止すること", "AI生成であることを示すウォーターマークや透明性の表示義務", "AIを使った場合はすべて実名を公開する義務", "AI生成コンテンツを専用ドメインで公開する義務"],
    answer: 1,
    explanation: "EU AI法や各国の規制で、AI生成コンテンツにウォーターマーク埋め込みや表示義務が議論されています。偽情報・ディープフェイク対策として、AIと人間の制作物を区別する透明性確保が重要です。"
  },
  {
    id: "r11", category: "risks",
    question: "「ジェイルブレイク（Jailbreak）」とはAIの文脈でどのような行為ですか？",
    options: ["AIモデルをダウンロードして手元で動かすこと", "巧みなプロンプトでAIの安全制約・倫理フィルターを回避させること", "AIのAPIキーを不正に取得すること", "AIの学習データを外部から変更すること"],
    answer: 1,
    explanation: "ジェイルブレイクは、役割設定や特定の文体を使いAIの安全ガードレールを迂回させる行為です。有害・違法なコンテンツを生成させようとするものが多く、利用規約違反・法的問題につながります。"
  },
  {
    id: "r12", category: "risks",
    question: "AIの利用が雇用に与える影響として、現在最も広く議論されているものはどれですか？",
    options: ["AIにより全ての雇用がなくなるという見方が定説になっている", "定型的・反復的な業務の自動化が進む一方、新たなスキルや職種が生まれるという見方が主流", "AIは雇用に全く影響しないという研究結果が出ている", "AIにより技術職のみが影響を受け、サービス業は無関係である"],
    answer: 1,
    explanation: "AIは定型業務の代替を進める一方、AIを活用する新しい役割や、人間にしかできない創造・共感・倫理判断が求められる仕事も生まれています。リスキリング（学び直し）が重要な課題です。"
  },

  // ── 法律・ガイドライン ──────────────────────────────────────────
  // --- AI新法 ---
  { id: "ainew-001", category: "laws",
    question: "2025年6月4日に公布された日本のAI新法の正式名称として正しいものはどれか。",
    options: [
      "人工知能の安全性の確保に関する法律",
      "人工知能関連技術の研究開発及び活用の推進に関する法律",
      "生成AI利用規制及び管理に関する法律",
      "デジタル社会形成基本法の一部を改正する法律"
    ],
    answer: 1,
    explanation: "2025年6月4日に公布されたAI新法の正式名称は「人工知能関連技術の研究開発及び活用の推進に関する法律」です。AIの規制を主眼とするEU AI法とは異なり、日本のAI新法はAI技術の研究開発と活用の「推進」を基本コンセプトとしている点が特徴です。"
  },
  { id: "ainew-002", category: "laws",
    question: "日本のAI新法の基本的な目的として最も正しいものはどれか。",
    options: [
      "AIの利用を厳しく規制し、違反事業者に罰則を科すことを主眼とする",
      "AI技術の研究開発と社会実装を国として推進しつつ、事業者が守るべきルールを示す",
      "AIの開発をすべて国が主導し、民間企業の参入を制限する",
      "EU AI法と同一の規制枠組みを日本でも導入する"
    ],
    answer: 1,
    explanation: "日本のAI新法は「推進法」として位置づけられており、AIの研究開発・活用を国として推進することが基本目的です。EUがリスクベースの規制を中心に据えたのに対し、日本はイノベーション促進と安全性確保の両立を目指す推進・促進型のアプローチを採用しています。"
  },
  { id: "ainew-003", category: "laws",
    question: "AI新法およびAI事業者ガイドラインが定めるAI関係者の三つの主体として正しいものはどれか。",
    options: [
      "AI研究者・AI審査官・AI消費者",
      "AI開発者（AI Developer）・AI提供者（AI Provider）・AI利用者（AI Business User）",
      "AIエンジニア・AIマネージャー・AIアドバイザー",
      "AI設計者・AI販売者・AI監督者"
    ],
    answer: 1,
    explanation: "AI新法やAI事業者ガイドラインでは、AIに関わる事業者を「AI開発者（AI Developer）」「AI提供者（AI Provider）」「AI利用者（AI Business User）」の三主体に分類しています。それぞれ役割と責任が異なり、ガイドラインでは各主体が取るべき対応が整理されています。"
  },
  { id: "ainew-004", category: "laws",
    question: "日本のAI新法とEU AI法（EU AI Act）のアプローチの違いとして正しいものはどれか。",
    options: [
      "両者はまったく同じリスクベース規制を採用しており、内容に違いはない",
      "EU AI法はリスクレベルによる規制・禁止を中心とするのに対し、日本のAI新法はAI技術の推進・活用促進を基本としたアプローチを取る",
      "日本のAI新法はEUより厳しい規制を定めている",
      "EU AI法は自主規制のみで法的拘束力はなく、日本のAI新法のみが法的効力を持つ"
    ],
    answer: 1,
    explanation: "EU AI法はAIシステムをリスクに応じて4段階に分類し、高リスクAIに厳格な要件を課す規制中心のアプローチです。一方、日本のAI新法は「人工知能関連技術の研究開発及び活用の推進」を目的とする推進法であり、規制よりもイノベーション促進を重視した設計になっています。"
  },
  { id: "ainew-005", category: "laws",
    question: "AI新法と関連するAI事業者ガイドラインについて正しいものはどれか。",
    options: [
      "AI事業者ガイドラインはAI新法とは無関係の民間団体が作成したものである",
      "政府が策定したAI事業者ガイドラインは第1.0版から第1.1版に改訂されており、AI新法の内容とも関連づけられている",
      "AI事業者ガイドラインはAI開発者のみを対象としており、AI利用企業は対象外",
      "AI事業者ガイドラインはEUのみで適用される規則である"
    ],
    answer: 1,
    explanation: "日本政府（内閣府・総務省・経済産業省等）が策定した「AI事業者ガイドライン」は第1.0版から第1.1版へと改訂されました。AI新法の公布に伴い、ガイドラインもAI開発者・提供者・利用者の三主体それぞれが対応すべき事項を整理しており、AI新法との関連が明示されています。"
  },
  { id: "ainew-006", category: "laws",
    question: "AI新法において事業者が注意すべき具体的なリスクとして適切なものはどれか。",
    options: [
      "AIを使うと必ず個人情報が漏洩するリスク",
      "ハルシネーションによる誤情報の拡散・プライバシー侵害・著作権侵害・差別的出力など、AI特有のリスクへの対応",
      "AIを使わないことで競争力が低下するリスクのみ",
      "AIの電力消費による環境リスクのみ"
    ],
    answer: 1,
    explanation: "AI新法で想定される事業者が注意すべき具体的なリスクには、①ハルシネーション（誤情報生成）による情報の信頼性低下、②個人情報・機密情報の漏洩、③AIが生成するコンテンツによる著作権侵害、④学習データのバイアスに起因する差別的・不公平な出力などがあります。事業者はこれらのリスクを認識し適切な対策を講じることが求められます。"
  },
  { id: "ainew-007", category: "laws",
    question: "AI新法の基本構造として正しいものはどれか。",
    options: [
      "すべてのAIシステムに対して事前審査と許可制を設ける",
      "AIの研究開発・活用の推進を基本方針とし、国・地方公共団体・事業者それぞれの責務を定めるとともに、安全性確保のための措置を規定する",
      "AI利用を特定の産業分野に限定し、その他の分野での使用を禁止する",
      "外国製AIシステムの国内使用を制限し、国産AIの開発を義務付ける"
    ],
    answer: 1,
    explanation: "AI新法（人工知能関連技術の研究開発及び活用の推進に関する法律）は、AI技術の推進を基本方針として国・地方公共団体・事業者の各主体の責務を定めています。また、AI利用における安全性・信頼性確保のための措置や、AI人材育成・国際連携に関する規定も含まれています。"
  },
  { id: "ainew-008", category: "laws",
    question: "AI新法が成立した社会的背景として最も適切なものはどれか。",
    options: [
      "日本国内でAIによる犯罪が多発し、取り締まりが急務となったため",
      "生成AIの急速な普及により、AI活用の推進と安全・信頼性確保を両立する法的基盤の整備が必要となったため",
      "EU AI法を完全にコピーする形で日本版規制を導入するよう国際社会から求められたため",
      "AIが人間の仕事をすべて奪うことを防ぐため、AI利用に制限をかける必要が生じたため"
    ],
    answer: 1,
    explanation: "2022年末以降の生成AIの急速な普及を受け、日本でもAI活用の恩恵を最大化しつつリスク（誤情報・プライバシー侵害・著作権問題等）を適切に管理するための法的基盤が必要となりました。AI新法は「推進」と「安全・信頼性確保」の両立を目指す法律として2025年6月4日に公布されました。"
  },

  {
    id: "l01", category: "laws",
    question: "EU（欧州連合）が制定した個人データ保護に関する法律の略称はどれですか？",
    options: ["CCPA", "GDPR", "PIPEDA", "APEC"],
    answer: 1,
    explanation: "GDPR（General Data Protection Regulation）はEUの一般データ保護規則で2018年施行。個人データの収集・処理・国外移転を厳しく規制します。日本企業もEU居住者のデータを扱う場合は対象となります。"
  },
  {
    id: "l02", category: "laws",
    question: "日本において個人情報の取り扱いを規定している法律はどれですか？",
    options: ["情報公開法", "不正競争防止法", "個人情報の保護に関する法律（個人情報保護法）", "電子署名法"],
    answer: 2,
    explanation: "個人情報保護法は個人情報の適切な取り扱いを規定する日本の法律です。生成AIへの個人情報の入力・AIが個人情報を出力する場合には同法の遵守が必要です。"
  },
  {
    id: "l03", category: "laws",
    question: "OECD AI原則（2019年採択）が示すAI開発・利用の原則として含まれないものはどれですか？",
    options: ["包括的成長・持続可能な発展・幸福への貢献", "透明性と説明可能性", "堅牢性・セキュリティ・安全性", "AIシステムの商業利益の最大化"],
    answer: 3,
    explanation: "OECD AI原則は包括的成長・透明性・説明可能性・堅牢性・安全性・説明責任などを定めます。商業利益の最大化は原則に含まれません。G20にも採択され国際的なAIガバナンスの基礎となっています。"
  },
  {
    id: "l04", category: "laws",
    question: "EU AI法（2024年成立）においてリスク分類が「許容不可能なリスク」とされ、原則禁止されるAIシステムはどれですか？",
    options: ["医療診断支援AI", "リアルタイムでの公共空間における生体認証監視システム（一部例外を除く）", "自動翻訳AI", "スマートフォンの音声アシスタント"],
    answer: 1,
    explanation: "EU AI法はリスクを4段階（許容不可能・高リスク・限定リスク・最小リスク）に分類。公共空間でのリアルタイム生体認証、社会スコアリング、無意識操作システムなどは原則禁止です。"
  },
  {
    id: "l05", category: "laws",
    question: "G7広島AIプロセス（2023年）で合意された「広島AIプロセス包括的政策枠組み」の主な目的はどれですか？",
    options: ["G7各国でAI産業を独占すること", "高度なAIシステムの責任ある開発・利用のための国際的なガイダンスを示すこと", "すべてのAI開発を政府が管理すること", "オープンソースAIの開発を禁止すること"],
    answer: 1,
    explanation: "G7広島AIプロセスは2023年のG7サミットで開始。高度なAI（特に生成AI）の責任ある開発・運用のための国際的なガイダンス・行動規範を策定することを目指しています。"
  },
  {
    id: "l06", category: "laws",
    question: "日本の著作権法では、AIが学習に著作物を使用することについて、原則どのように扱われていますか？",
    options: ["AIによる著作物の学習利用はすべて著作権侵害になる", "情報解析目的の著作物利用には権利者の許可は不要とされている（例外規定あり）", "著作権者に必ず対価を支払えば利用できる", "外国の著作物のみ許可が必要"],
    answer: 1,
    explanation: "日本の著作権法第30条の4により、情報解析（機械学習など）を目的とした著作物の利用には著作権者の許可が不要とされています。ただし著作権者の利益を不当に害する場合は除きます。"
  },
  {
    id: "l07", category: "laws",
    question: "総務省・経済産業省が公表している「AI事業者ガイドライン」（2024年）が示す主な対象はどれですか？",
    options: ["AIを使ったゲーム開発者のみ", "AI開発者・AI提供者・AIビジネス利用者", "国家機関のみ", "教育機関のみ"],
    answer: 1,
    explanation: "AI事業者ガイドライン（2024年）はAI開発者・AI提供者・AIビジネス利用者の3者を対象に、それぞれの立場での責任と行動指針を示しています。"
  },
  {
    id: "l08", category: "laws",
    question: "AIを活用したビジネス上の不正競争（例：AIで競合他社の秘密情報を搾取）に関係する法律はどれですか？",
    options: ["消費者契約法", "不正競争防止法", "特定商取引法", "景品表示法"],
    answer: 1,
    explanation: "不正競争防止法は営業秘密の不正取得・使用を禁止します。AIを使って競合他社のデータを不正に取得・分析したり、トレードシークレットを侵害する行為はこの法律が適用される可能性があります。"
  },
  {
    id: "l09", category: "laws",
    question: "AIが生成したコンテンツが特定個人の名誉を傷つける場合、適用される可能性がある法律はどれですか？",
    options: ["独占禁止法", "名誉毀損に関する刑法・民法（不法行為）", "電波法", "消防法"],
    answer: 1,
    explanation: "AI生成コンテンツであっても、実在する個人・企業の名誉を傷つけた場合、AIを使用した人物がコンテンツ発信者として刑法（名誉毀損罪）や民法（不法行為）の責任を負う可能性があります。"
  },
  {
    id: "l10", category: "laws",
    question: "企業がAIシステムを導入・運用する際に策定が推奨されているものはどれですか？",
    options: ["AI利用を禁止する社内規定", "AI利用ポリシー（ガイドライン）・ガバナンス体制", "すべての業務をAIに置き換える計画", "AIシステムのソースコードの完全公開"],
    answer: 1,
    explanation: "企業はAIの適切な利用・リスク管理のためにAI利用ポリシーの策定が推奨されています。利用可能なサービス・入力禁止情報・責任体制・モニタリング方法などを明文化することが重要です。"
  },
  {
    id: "l11", category: "laws",
    question: "「AIの民主化」という観点から、オープンソースLLMの普及によって生じるリスクはどれですか？",
    options: ["AIの開発コストが増大すること", "悪意ある行為者が制約のないモデルを悪用してコンテンツを生成できること", "AIの性能が低下すること", "企業間の競争が減少すること"],
    answer: 1,
    explanation: "オープンソースLLMは研究・イノベーションを加速させる一方、安全フィルターを取り除いたモデルで有害コンテンツ・フィッシング・マルウェア生成などに悪用されるリスクもあります。"
  },
  {
    id: "l12", category: "laws",
    question: "生成AIの利用に関して「透明性の原則」が求めることとして最も適切なものはどれですか？",
    options: ["AIのすべてのソースコードを公開すること", "AIを利用してコンテンツを作成した場合、その旨を適切に開示すること", "AIの判断を人間が確認せずそのまま公開すること", "AIを利用したことを絶対に秘密にすること"],
    answer: 1,
    explanation: "透明性の原則は、AIを利用した意思決定やコンテンツ生成についてステークホルダーが把握できるよう情報を開示することを求めます。AI生成であることの表示・ラベリングがその実践例です。"
  },

  // ── 追加問題（sample.js より変換） ──────────────────────────────
  // カテゴリー対応: AI基礎/生成AI/モデル・技術 → basics
  //                プロンプト → prompting
  //                リスク/倫理・社会 → risks
  //                法務・権利/ガイドライン → laws
  //                業務活用 → business
  //                セキュリティ → security
  //                試験対策 → exam
  //                最新動向 → trends

  { id: "ai-001", category: "basics",
    question: "AI、機械学習、ディープラーニングの関係として最も適切なものはどれか。",
    options: ["AIの中に機械学習があり、機械学習の中にディープラーニングが含まれる", "ディープラーニングの中にAIがあり、AIの中に機械学習が含まれる", "AI、機械学習、ディープラーニングは互いに独立した技術である", "機械学習はルールベースAIだけを指す"],
    answer: 0,
    explanation: "AIは広い概念で、その一部にデータから学習する機械学習があり、さらに多層ニューラルネットワークを使う手法としてディープラーニングがあります。"
  },
  { id: "ai-002", category: "basics",
    question: "教師あり学習の説明として最も適切なものはどれか。",
    options: ["正解ラベル付きデータから入力と出力の関係を学習する", "報酬を最大化する行動を試行錯誤で学習する", "ラベルのないデータを人手で分類するだけの作業である", "学習データを使わず、専門家がすべてのルールを書く"],
    answer: 0,
    explanation: "教師あり学習は、入力データと正解ラベルのペアを使って予測や分類を行うモデルを学習します。"
  },
  { id: "ai-003", category: "basics",
    question: "過学習の説明として最も適切なものはどれか。",
    options: ["訓練データに適合しすぎて、未知データへの性能が下がること", "学習データが少ないため、必ず性能が上がること", "モデルが一切学習しないこと", "AIが人間の知能を完全に超えること"],
    answer: 0,
    explanation: "過学習では訓練データの細かな特徴やノイズまで覚え込み、汎化性能が低下します。"
  },
  { id: "ai-004", category: "basics",
    question: "強化学習の説明として最も適切なものはどれか。",
    options: ["エージェントが行動し、得られる報酬をもとに方策を改善する", "正解ラベルを人手で必ず付ける学習だけを指す", "画像の背景を透明にする処理である", "生成AIの利用規約を読む作業である"],
    answer: 0,
    explanation: "強化学習では、環境との相互作用から報酬を最大化する行動を学びます。"
  },
  { id: "ai-005", category: "basics",
    question: "クラスタリングに代表される教師なし学習の特徴はどれか。",
    options: ["正解ラベルなしのデータから構造や傾向を見つける", "必ず人間の教師が授業形式で教える", "法律文書だけを生成する", "回答の正確性を常に保証する"],
    answer: 0,
    explanation: "教師なし学習は、ラベルのないデータから類似性や分布などのパターンを見つけます。"
  },
  { id: "ai-006", category: "basics",
    question: "推論（inference）の説明として最も適切なものはどれか。",
    options: ["学習済みモデルに入力を与え、予測や生成結果を得ること", "学習データを集める前の契約作業だけを指す", "AIが常に人間と同じ理由で判断すること", "モデルの利用をすべて禁止すること"],
    answer: 0,
    explanation: "推論は、学習済みモデルを使って新しい入力に対する出力を得る処理です。"
  },
  { id: "gen-001", category: "basics",
    question: "生成AIの特徴として最も適切なものはどれか。",
    options: ["学習したパターンをもとに、テキスト・画像・音声などの新しいコンテンツを生成できる", "必ず事実だけを出力し、誤情報を生成することはない", "表計算ソフトでしか利用できない", "検索エンジンと同じく、既存ページをそのまま表示するだけである"],
    answer: 0,
    explanation: "生成AIは既存データのパターンを学び、新しいコンテンツを生成します。ただし事実性は保証されません。"
  },
  { id: "gen-002", category: "basics",
    question: "大規模言語モデル（LLM）のトークンに関する説明として最も適切なものはどれか。",
    options: ["テキストを処理するための単位で、単語や文字の一部になることがある", "必ず日本語の1文字と完全に一致する", "画像の画素だけを意味する", "モデルの著作権者を示す識別子である"],
    answer: 0,
    explanation: "LLMはテキストをトークンという単位に分割して処理します。トークンは言語や文脈により文字、単語、単語の一部などになります。"
  },
  { id: "gen-003", category: "basics",
    question: "ハルシネーションへの対策として最も適切なものはどれか。",
    options: ["重要な出力は一次情報や信頼できる資料で確認する", "AIの回答は常に正しいものとして扱う", "プロンプトを短くすれば必ず防止できる", "モデル名を変えれば確認作業は不要になる"],
    answer: 0,
    explanation: "生成AIはもっともらしい誤情報を出すことがあります。重要な判断では根拠確認、引用元確認、人間によるレビューが必要です。"
  },
  { id: "gen-004", category: "basics",
    question: "RAG（検索拡張生成）の目的として最も適切なものはどれか。",
    options: ["外部文書や社内ナレッジを検索し、その情報を根拠として回答生成に使う", "モデルを必ずゼロから再学習する", "画像を圧縮する", "利用者のパスワードを自動生成する"],
    answer: 0,
    explanation: "RAGは検索した関連情報をプロンプトに加えて生成する手法で、最新情報や社内文書を参照した回答に使われます。"
  },
  { id: "gen-005", category: "basics",
    question: "ファインチューニングの説明として最も適切なものはどれか。",
    options: ["既存モデルを特定タスクやドメインに合わせて追加学習すること", "生成AIの利用履歴を削除すること", "プロンプトを日本語から英語に翻訳すること", "ネットワーク接続を高速化すること"],
    answer: 0,
    explanation: "ファインチューニングは、既存の事前学習済みモデルを特定用途に適応させる追加学習です。"
  },
  { id: "gen-006", category: "basics",
    question: "温度（temperature）などの生成パラメータの説明として最も適切なものはどれか。",
    options: ["出力の多様性やランダム性に影響する設定である", "モデルが稼働するサーバー室の気温だけを示す", "著作権侵害を自動的に防ぐ設定である", "利用者の年齢確認を行う設定である"],
    answer: 0,
    explanation: "温度を高くすると多様な出力になりやすく、低くすると安定・保守的な出力になりやすい傾向があります。"
  },
  { id: "gen-007", category: "basics",
    question: "コンテキストウィンドウの説明として最も適切なものはどれか。",
    options: ["モデルが一度に参照できる入力と出力の範囲である", "ブラウザ画面の明るさ設定である", "すべての過去会話を無制限に覚える機能である", "画像ファイルの縦横比だけを表す"],
    answer: 0,
    explanation: "コンテキストウィンドウには上限があり、長い入力では重要情報が範囲外になることがあります。"
  },
  { id: "gen-008", category: "basics",
    question: "AIエージェントの説明として最も適切なものはどれか。",
    options: ["目標に向けて計画し、必要に応じてツールを使いながら処理を進める仕組み", "画像生成だけを行う固定フィルター", "必ず法的責任を負える主体", "インターネット検索を完全に不要にする制度"],
    answer: 0,
    explanation: "AIエージェントは、モデルの推論にツール利用や計画実行を組み合わせる設計です。権限管理が重要です。"
  },
  { id: "model-001", category: "basics",
    question: "Transformerの特徴として最も関連が深いものはどれか。",
    options: ["Attention機構により、入力内の重要な関係を捉えやすい", "画像を必ず白黒に変換する", "表計算のマクロだけを実行する", "インターネット接続を暗号化する"],
    answer: 0,
    explanation: "TransformerはAttention機構を中心とするアーキテクチャで、LLMなど多くの生成AIモデルの基盤になっています。"
  },
  { id: "model-002", category: "basics",
    question: "マルチモーダルAIの説明として最も適切なものはどれか。",
    options: ["テキスト、画像、音声、動画など複数種類の情報を扱えるAI", "同じ文章を複数回表示するだけのAI", "必ず複数企業が共同開発したAI", "音声だけを扱う古いAI"],
    answer: 0,
    explanation: "マルチモーダルAIは、異なる形式のデータを入力・出力として扱えるAIです。"
  },
  { id: "model-003", category: "basics",
    question: "画像生成AIで一般に注意すべきこととして最も適切なものはどれか。",
    options: ["人物やブランドに似た生成物、権利侵害、偽情報利用などのリスクを確認する", "画像生成AIは著作権や肖像権と無関係である", "生成画像は必ず現実の写真である", "画像生成AIはプロンプトを受け取らない"],
    answer: 0,
    explanation: "画像生成AIでは既存作品への類似、肖像・商標、偽情報や不適切利用に注意が必要です。"
  },
  { id: "model-004", category: "basics",
    question: "拡散モデル（Diffusion Model）がよく使われる領域として最も適切なものはどれか。",
    options: ["画像生成", "物理的な荷物配送", "給与計算専用の表計算", "ネットワーク機器の配線"],
    answer: 0,
    explanation: "拡散モデルはノイズから画像を生成する仕組みとして、画像生成AIで広く使われています。"
  },
  { id: "model-005", category: "basics",
    question: "埋め込み（embedding）の説明として最も適切なものはどれか。",
    options: ["テキストなどを意味的な近さを扱える数値ベクトルに変換したもの", "AIの回答を紙に印刷すること", "パスワードを画像に隠すことだけ", "モデルの利用料金表である"],
    answer: 0,
    explanation: "埋め込みは検索、分類、類似度計算、RAGなどで利用されます。"
  },
  { id: "model-006", category: "basics",
    question: "音声生成AIや音声合成の利用で注意すべきことはどれか。",
    options: ["本人の同意、なりすまし、詐欺利用、権利侵害のリスクを確認する", "声は個人と結びつかないため確認不要である", "音声は著作権や人格権と無関係である", "音声生成は必ず本人確認を自動で行う"],
    answer: 0,
    explanation: "声は個人識別や信頼に関わるため、本人同意や悪用防止が重要です。"
  },
  { id: "prompt-s001", category: "prompting",
    question: "良いプロンプトの作り方として最も適切なものはどれか。",
    options: ["目的、前提、制約、出力形式を具体的に伝える", "情報をできるだけ隠して、AIに推測させる", "毎回『いい感じに』だけを入力する", "出力形式は指定しないほど必ず正確になる"],
    answer: 0,
    explanation: "目的・文脈・制約・期待する形式を明確にすると、出力の品質と再現性が上がります。"
  },
  { id: "prompt-s002", category: "prompting",
    question: "Few-shotプロンプティングの説明として最も適切なものはどれか。",
    options: ["望ましい入出力例をいくつか提示して回答の型を示す", "例を一切示さず質問だけを入力する", "モデルを物理的に小型化する", "すべての回答を箇条書き禁止にする"],
    answer: 0,
    explanation: "Few-shotでは、数個の例を与えることで、モデルに回答形式や判断基準を伝えます。"
  },
  { id: "prompt-s003", category: "prompting",
    type: "multiple",
    question: "業務で生成AIに社内文書の要約を依頼する際の適切な工夫をすべて選べ。",
    options: ["対象読者、要約の長さ、出力形式を指定する", "機密情報の取り扱いルールを確認してから投入する", "根拠箇所や不明点を分けて出力させる", "未確認の個人情報をそのまま外部サービスへ入力する"],
    answer: [0, 1, 2],
    explanation: "要約では読者・粒度・形式の指定が有効です。機密・個人情報の扱いは社内規程とサービス条件を確認する必要があります。"
  },
  { id: "prompt-s004", category: "prompting",
    question: "生成AIに表形式で出力してほしい場合の指示として最も適切なものはどれか。",
    options: ["列名、行数、比較観点、空欄時の扱いを指定する", "ただ『表にして』とだけ書けば必ず十分である", "出力形式はAIに任せ、後で人間が推測する", "表形式を指定すると正確性確認は不要になる"],
    answer: 0,
    explanation: "表の列、粒度、欠損値の扱いを指定すると、比較・確認しやすい出力になります。"
  },
  { id: "prompt-s005", category: "prompting",
    question: "AIにレビューを依頼するプロンプトとして最も適切なものはどれか。",
    options: ["観点、優先度、対象読者、出力形式を指定し、根拠も求める", "『なんとなく見て』だけで十分である", "必ず褒めるようにだけ指示する", "レビュー対象を渡さずに結果だけ求める"],
    answer: 0,
    explanation: "レビューでは観点と判断基準を明確にすることで、実務で使える指摘になりやすくなります。"
  },
  { id: "risk-s001", category: "risks",
    question: "プロンプトインジェクションの説明として最も適切なものはどれか。",
    options: ["外部文書や入力に隠された命令で、AIに本来の指示を無視させようとする攻撃", "AIが画像を高解像度化する処理", "学習データを増やす正規の手続き", "文字数を減らして料金を節約する方法"],
    answer: 0,
    explanation: "プロンプトインジェクションは、悪意ある入力によりシステム指示の逸脱や情報漏洩を狙う攻撃です。"
  },
  { id: "risk-s002", category: "risks",
    type: "multiple",
    question: "生成AI利用時の情報漏洩対策として適切なものをすべて選べ。",
    options: ["入力してよい情報の範囲を社内ルールで明確にする", "サービスの学習利用設定やデータ保持条件を確認する", "必要に応じて匿名化・マスキングを行う", "機密情報でも無料サービスなら安全とみなす"],
    answer: [0, 1, 2],
    explanation: "入力ルール、契約・設定、匿名化などを組み合わせます。無料か有料かだけでは安全性は判断できません。"
  },
  { id: "risk-s003", category: "risks",
    question: "ディープフェイクに関する説明として最も適切なものはどれか。",
    options: ["人物の顔や声などを合成し、なりすましや誤認を招く可能性がある技術", "AIが表計算の関数を自動補完する機能だけを指す", "著作権侵害とは無関係で、社会的リスクはない", "必ず本人の許諾を自動で取得する仕組みである"],
    answer: 0,
    explanation: "ディープフェイクは人物の顔・声・動作を合成でき、詐欺、名誉毀損、偽情報などのリスクがあります。"
  },
  { id: "risk-s004", category: "risks",
    question: "生成AIの出力に含まれる出典や引用を扱う際の注意として最も適切なものはどれか。",
    options: ["実在性、内容、文脈を確認し、必要に応じて原典に当たる", "AIが示した出典は必ず実在するとみなす", "URLがあれば内容確認は不要である", "引用符が付いていれば著作権上の確認は不要である"],
    answer: 0,
    explanation: "AIは存在しない文献や不正確な引用を出すことがあります。原典確認が重要です。"
  },
  { id: "risk-s005", category: "risks",
    question: "シャドーAIのリスクとして最も適切なものはどれか。",
    options: ["組織が把握しないAI利用により、情報漏洩や統制不全が起きる可能性がある", "AIが画面を暗く表示するだけの現象である", "社内承認済みAIだけを使う状態である", "AIが学習済みデータを完全に忘れる現象である"],
    answer: 0,
    explanation: "無許可・未管理のAI利用は、データ管理、契約、セキュリティ、監査の面でリスクになります。"
  },
  { id: "risk-s006", category: "risks",
    type: "multiple",
    question: "AIによる偽情報への対策として適切なものをすべて選べ。",
    options: ["発信元や根拠を確認する", "画像・音声の改変可能性を考慮する", "重要情報は複数の信頼できる情報源で照合する", "拡散数が多ければ事実とみなす"],
    answer: [0, 1, 2],
    explanation: "偽情報は拡散数だけでは判断できません。発信元、根拠、複数ソース確認が重要です。"
  },
  { id: "ethics-001", category: "risks",
    question: "AIのバイアスに関する説明として最も適切なものはどれか。",
    options: ["学習データや設計の偏りにより、出力が不公平になることがある", "AIは常に完全に中立なので偏りは発生しない", "バイアスは画像生成だけに発生する", "利用者が変わっても出力の影響は必ず同じである"],
    answer: 0,
    explanation: "AIは学習データや評価基準の影響を受けます。偏見や不公平な結果を避けるには継続的な評価が必要です。"
  },
  { id: "ethics-002", category: "risks",
    question: "生成AIで作成したコンテンツをSNSで公開する際に最も適切な行動はどれか。",
    options: ["誤認を招く可能性がある場合はAI生成であることを示し、権利や事実性を確認する", "AI生成なら誰かを傷つける内容でも問題ない", "引用元や根拠の確認は不要である", "実在人物の偽発言を作っても娯楽なら常に許される"],
    answer: 0,
    explanation: "公開時には透明性、名誉・プライバシー、事実性、権利、社会的影響への配慮が必要です。"
  },
  { id: "ethics-003", category: "risks",
    question: "AIの公平性を高める取り組みとして最も適切なものはどれか。",
    options: ["データや出力を複数の観点で評価し、偏りがあれば改善する", "多数派に有利な出力なら常に公平とみなす", "不利な結果を受ける人への説明を省く", "一度評価すれば以後の監視は不要である"],
    answer: 0,
    explanation: "公平性はデータ、モデル、運用の各段階で継続的に評価・改善する必要があります。"
  },
  { id: "ethics-004", category: "risks",
    question: "AIリテラシーとして最も適切な態度はどれか。",
    options: ["AIの利点と限界を理解し、目的に応じて適切に使う", "AIを使えば専門知識は一切不要になる", "AIを全面的に信じるか全面的に拒否するかの二択で考える", "便利な出力なら根拠は気にしない"],
    answer: 0,
    explanation: "AIリテラシーは、技術の仕組み、限界、リスク、責任を理解して活用する力です。"
  },
  { id: "law-s001", category: "laws",
    question: "生成AIで作った画像を商用利用する前の確認として最も適切なものはどれか。",
    options: ["利用規約、入力素材の権利、既存著作物との類似、肖像・商標などを確認する", "AIが生成した時点で全世界で自由に使えるとみなす", "著作権の問題は文章だけに発生すると考える", "商用利用なら出典表示は常に不要である"],
    answer: 0,
    explanation: "生成物の利用では、サービス規約、入力素材、既存作品との依拠・類似、肖像権・商標権など複数の観点を確認します。"
  },
  { id: "law-s002", category: "laws",
    question: "個人情報を生成AIに入力する場合の考え方として最も適切なものはどれか。",
    options: ["利用目的、本人同意、第三者提供、委託先管理など個人情報保護の観点を確認する", "AI処理なら個人情報保護法の対象外である", "氏名を削除すれば、どんな情報も必ず個人情報ではなくなる", "社外サービスへ入力しても保存されないと常に仮定してよい"],
    answer: 0,
    explanation: "個人情報はAI利用でも保護対象です。識別可能性、利用目的、提供先、契約、保存・学習利用の有無を確認します。"
  },
  { id: "law-s003", category: "laws",
    type: "multiple",
    question: "AI生成物の公開前レビューで確認すべき観点をすべて選べ。",
    options: ["事実誤認や根拠不明の記述がないか", "差別的・攻撃的・有害な表現が含まれていないか", "権利侵害や機密情報の混入がないか", "AIが出した文章ならレビューは不要か"],
    answer: [0, 1, 2],
    explanation: "公開前には事実性、安全性、公平性、権利・機密の観点で人間が確認することが重要です。"
  },
  { id: "law-s004", category: "laws",
    question: "著作物を生成AIに入力する際の注意として最も適切なものはどれか。",
    options: ["利用目的、権利者の許諾、契約、サービスのデータ利用条件を確認する", "入力なら公開しないため権利確認は一切不要である", "書籍全文を入力しても常に問題ない", "著作権はAI企業だけが考えればよい"],
    answer: 0,
    explanation: "入力段階でも複製、契約違反、秘密保持、サービス側利用などの問題があり得ます。"
  },
  { id: "law-s005", category: "laws",
    question: "商標やブランド名を含む画像生成を行う際の注意として最も適切なものはどれか。",
    options: ["混同、信用毀損、権利侵害の可能性を確認する", "有名ブランド名を入れれば自由に広告利用できる", "商標は文章だけに関係する", "AI生成物には商標権が及ばない"],
    answer: 0,
    explanation: "ブランド名やロゴの利用は、商標権や不正競争、混同のおそれなどを確認する必要があります。"
  },
  { id: "law-s006", category: "laws",
    question: "AI生成物の責任に関する考え方として最も適切なものはどれか。",
    options: ["利用者や組織が用途に応じて確認し、公開・利用の責任を負う", "AIが作ったものは誰も責任を負わない", "モデル提供者だけが常に全責任を負う", "免責表示を書けばどんな用途でも問題ない"],
    answer: 0,
    explanation: "生成AIは道具であり、業務利用や公開の判断には利用者・組織の責任が伴います。"
  },
  { id: "guideline-001", category: "laws",
    question: "AIガバナンスの説明として最も適切なものはどれか。",
    options: ["AIを安全かつ適切に利活用するための方針、体制、ルール、監査などの仕組み", "AIの回答速度を上げるためだけの半導体設計", "AIにすべての意思決定を委ねる考え方", "プロンプトを暗号化する単独の技術"],
    answer: 0,
    explanation: "AIガバナンスは、組織がAIの便益とリスクを管理し、説明責任を果たすための仕組みです。"
  },
  { id: "guideline-002", category: "laws",
    question: "AI利用における透明性の確保として最も適切なものはどれか。",
    options: ["AIを利用していること、利用目的、限界、問い合わせ先などを必要に応じて示す", "AI利用を必ず隠して成果物だけを公開する", "AIの内部重みを全員に公開すれば十分である", "透明性は研究者だけに関係し、企業利用では不要である"],
    answer: 0,
    explanation: "透明性は利用者や関係者がAI利用を理解し、必要な判断や異議申し立てを行えるようにする考え方です。"
  },
  { id: "guideline-003", category: "laws",
    question: "人間中心のAI社会原則に近い考え方として最も適切なものはどれか。",
    options: ["AIを人間の尊厳、多様性、持続可能性に配慮して活用する", "AIの判断を常に人間より優先する", "AIに関する説明責任をなくす", "便利なら差別的な出力も許容する"],
    answer: 0,
    explanation: "AI活用では人間の権利や社会的影響に配慮し、適切な管理のもとで便益を得る姿勢が重要です。"
  },
  { id: "guideline-004", category: "laws",
    type: "multiple",
    question: "組織の生成AI利用ルールに含めるべき項目をすべて選べ。",
    options: ["入力禁止情報や利用可能サービス", "出力レビューと責任分担", "インシデント時の報告先", "利用履歴を絶対に残さない方針"],
    answer: [0, 1, 2],
    explanation: "利用ルールにはデータ分類、利用範囲、レビュー、責任、報告体制、ログ管理などを含めると実効性が高まります。"
  },
  { id: "business-001", category: "business",
    question: "生成AI導入で最初に行うべきこととして最も適切なものはどれか。",
    options: ["利用目的、対象業務、扱うデータ、リスク、効果測定指標を整理する", "全社員に無条件で自由利用させる", "モデル名だけで導入可否を決める", "セキュリティ部門に知らせずに試す"],
    answer: 0,
    explanation: "導入前には目的、業務適合性、データ分類、リスク管理、評価指標を整理すると運用しやすくなります。"
  },
  { id: "business-002", category: "business",
    type: "multiple",
    question: "生成AIに向いている業務例をすべて選べ。",
    options: ["会議メモの要約や論点整理", "文章のたたき台作成や表現の改善", "FAQ案の作成や分類補助", "法的責任を伴う最終判断の完全自動化"],
    answer: [0, 1, 2],
    explanation: "生成AIは下書き、要約、分類、アイデア出しなどの補助に向きます。責任ある最終判断は人間の確認が必要です。"
  },
  { id: "business-003", category: "business",
    question: "生成AIの回答を業務で使う際の人間の役割として最も適切なものはどれか。",
    options: ["出力の妥当性を確認し、最終責任を持って判断する", "AIの回答を必ずそのまま採用する", "AIに責任を移せるため確認は不要である", "出力結果を保存しない限りレビューは不要である"],
    answer: 0,
    explanation: "生成AIは補助ツールです。業務利用では人間が文脈、事実性、リスクを確認して責任ある判断を行います。"
  },
  { id: "business-004", category: "business",
    question: "生成AI導入効果を測る指標として最も適切なものはどれか。",
    options: ["作業時間、品質、再作業率、利用者満足度など目的に沿った指標", "AIの回答文字数だけ", "ツール名の知名度だけ", "初回出力が長いかどうかだけ"],
    answer: 0,
    explanation: "導入効果は、業務目的に応じた定量・定性指標で測ることが大切です。"
  },
  { id: "business-005", category: "business",
    question: "生成AIで顧客対応文を作成する際に最も重要な確認はどれか。",
    options: ["事実関係、表現の丁寧さ、個人情報、会社方針との整合性", "AIが作ったので顧客にそのまま送る", "長文であれば必ず良い対応になる", "社内ルールよりAIの提案を優先する"],
    answer: 0,
    explanation: "顧客対応では正確性、トーン、個人情報、社内規程、法的リスクを確認してから送信します。"
  },
  { id: "business-006", category: "business",
    question: "生成AIで議事録を作る際の注意として最も適切なものはどれか。",
    options: ["発言者、決定事項、宿題、期限を確認し、誤認識を修正する", "音声認識結果を確認せず配布する", "決定していない事項をAIに決めさせる", "会議参加者の同意や社内ルールを考慮しない"],
    answer: 0,
    explanation: "議事録は事実記録です。録音・文字起こしの同意、誤認識修正、決定事項と未決事項の区別が重要です。"
  },
  { id: "security-001", category: "security",
    question: "生成AIエージェントに外部ツール実行権限を与える場合の注意として最も適切なものはどれか。",
    options: ["権限を最小限にし、実行内容の確認、ログ、承認フローを設ける", "すべての社内システムへ無制限アクセスを与える", "ログは攻撃者に見られるため一切残さない", "外部ツール連携ではプロンプトインジェクションは起きない"],
    answer: 0,
    explanation: "エージェントは自律実行の範囲が広がるため、最小権限、監査ログ、人間の承認、入力検証が重要です。"
  },
  { id: "security-002", category: "security",
    type: "multiple",
    question: "AIサービス選定時に確認すべきセキュリティ観点をすべて選べ。",
    options: ["入力データが学習に使われるか", "保存期間、暗号化、アクセス管理", "契約・利用規約・データ処理場所", "UIの色が好きかどうかだけ"],
    answer: [0, 1, 2],
    explanation: "業務利用ではデータ利用、保持、保護措置、契約条件、法域、監査可能性などを確認します。"
  },
  { id: "security-003", category: "security",
    question: "RAGで社内文書を扱う際のアクセス制御として最も適切なものはどれか。",
    options: ["利用者の権限に応じて検索・回答に使える文書を制限する", "全社員が全機密文書を検索できるようにする", "AIが要約するなら権限管理は不要である", "検索結果に出なければ元文書の管理は不要である"],
    answer: 0,
    explanation: "RAGでは検索対象の権限制御が不十分だと、回答を通じた情報漏洩が起き得ます。"
  },
  { id: "security-004", category: "security",
    question: "生成AI利用ログの扱いとして最も適切なものはどれか。",
    options: ["監査や改善に使う一方、個人情報・機密情報の保護にも配慮する", "ログは必ず公開掲示板に投稿する", "ログがあればセキュリティ対策は不要である", "ログには機密情報が含まれないと決めつける"],
    answer: 0,
    explanation: "ログは管理・監査に有効ですが、ログ自体が機密や個人情報を含む可能性があります。"
  },
  { id: "security-005", category: "security",
    question: "AIにコード生成を依頼する際の注意として最も適切なものはどれか。",
    options: ["脆弱性、ライセンス、動作、依存関係を確認してから利用する", "生成コードは必ず安全である", "動けばレビューは不要である", "ライセンスはAI生成コードでは考慮不要である"],
    answer: 0,
    explanation: "コード生成は便利ですが、脆弱性、品質、ライセンス、保守性の確認が必要です。"
  },
  { id: "trends-001", category: "trends",
    question: "生成AI分野の学習姿勢として最も適切なものはどれか。",
    options: ["モデル、法制度、ガイドラインは変化するため、公式情報や信頼できる情報源を継続確認する", "一度覚えた情報は永久に変わらないと考える", "新しいモデル名だけ覚えればリスク管理は不要である", "SNSで話題なら必ず正確とみなす"],
    answer: 0,
    explanation: "生成AIは技術・制度・社会実装の変化が速いため、継続的な確認と学び直しが重要です。"
  },
  { id: "trends-002", category: "trends",
    question: "AI関連制度やガイドラインの確認で最も適切な情報源はどれか。",
    options: ["政府機関、公式団体、提供企業の公式ドキュメントなど一次情報", "出典不明のまとめ画像だけ", "古いブログ記事だけ", "広告のキャッチコピーだけ"],
    answer: 0,
    explanation: "制度や仕様は更新されるため、一次情報と更新日を確認する習慣が重要です。"
  },
  { id: "trends-003", category: "trends",
    question: "生成AIモデルの選定で最も適切な考え方はどれか。",
    options: ["用途、品質、コスト、速度、セキュリティ、データ条件を比較する", "最新モデルならどんな業務にも最適とみなす", "SNSで人気のモデルだけを選べばよい", "価格だけで決め、リスクは考えない"],
    answer: 0,
    explanation: "モデル選定はユースケースと制約に合わせて総合的に判断します。"
  },

  // ── 生成AIの基礎（スクリーンショットから追加） ────────────────────
  { id: "qb-001", category: "basics",
    question: "制限付きボルツマンマシンに関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["1980年代に、ジェフリー・ヒントンとテリー・セジノウスキーらが「ボルツマンマシン」を提唱した。", "ボルツマンマシンは、確率を使ってデータを学習するニューラルネットワークの一種である。", "ボルツマンマシンにより、AI学習の分野に活気が戻ったが、学習に莫大な時間がかかることから、広く実用化されるには至らなかった。", "制限付きボルツマンマシンは、教師あり学習はできるものの、教師なし学習はできなかった。"],
    answer: 3,
    explanation: "制限付きボルツマンマシン（RBM）は、むしろ教師なし学習に広く用いられた技術です。入力層と隠れ層の2層から成り、次元削減や特徴抽出などに活用されました。"
  },
  { id: "qb-002", category: "basics",
    question: "機械学習に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["ドロップアウトとは、ニューラルネットワークによる学習中に、一部の人工ニューロンをランダムに無効化する学習手法である。", "正則化とは、モデルのパラメータが特定の値に強く引きつけられるのを防ぐことで、過学習を抑える手法である。", "ANIは、特定のタスクに限らず、すべての幅広いタスクに対して人間と同等の認知能力を持つAIを指す。", "AGIは、特定のタスクに限らず、すべての幅広いタスクに対して人間と同等の認知能力を持つAIを指す。"],
    answer: 2,
    explanation: "ANI（Artificial Narrow Intelligence：特化型人工知能）は、特定のタスクのみに特化したAIです。すべての幅広いタスクに対応できるのはAGI（汎用人工知能）です。"
  },
  { id: "qb-003", category: "basics",
    question: "人工ニューロン・ニューラルネットワーク・ディープラーニングの関係として、正しい説明をしているものはどれか。",
    options: ["人工ニューロンを何層にも重ねたものがディープラーニングであり、さらにそれを重ねたものがニューラルネットワークである。", "人工ニューロンはニューラルネットワークとは無関係であり、ディープラーニングの一部である。", "ニューラルネットワークを重ねたものが人工ニューロンであり、さらにそれを重ねたものがディープラーニングである。", "人工ニューロンを何層にも重ねたものがニューラルネットワークであり、さらにそのニューラルネットワークを何層にも重ねたものがディープラーニングである。"],
    answer: 3,
    explanation: "正しい階層関係は「人工ニューロン → ニューラルネットワーク → ディープラーニング」です。人工ニューロンを多数結合したものがニューラルネットワーク、それを多層化したものがディープラーニングです。"
  },
  { id: "qb-004", category: "basics",
    question: "LMとLLMに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["LMとは、文章の構造や文脈を理解し、文章が自然言語としてどれだけ自然かを評価して、適切な言葉を生成するためのAIの仕組みである。", "LMは、画像処理に関し、生成された画像の品質を数値的に評価するモデルで、画像分類タスクに広く応用されている。", "LLMとは、LMよりも多くのデータと膨大なパラメータを使って学習された画像処理モデルである。", "LLMのトレーニングでは、プレトレーニングとファインチューニングの2段階が用いられるが、プレトレーニングでは一般に「教師あり学習」が用いられる。"],
    answer: 0,
    explanation: "LM（Language Model：言語モデル）は、文章が自然言語としてどれだけ自然かを評価し適切な言葉を生成するAIの仕組みです。LLMはこれを大規模化したものです。プレトレーニングは教師なし（自己教師あり）学習です。"
  },
  { id: "qb-005", category: "basics",
    question: "ノーフリーランチ定理に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["機械学習とは、コンピュータが統計的手法やアルゴリズムを用いて、大量のデータからパターンを見出し、予測や判断を行う技術である。", "機械学習は、コンピュータ自身がデータからパターンを見出し、予測や判断を行うアプローチである。", "ノーフリーランチ定理では、AIを利用する目的や処理するデータの種類を考慮して、最適な手法を選択することが重要となる。", "ノーフリーランチ定理では、どのような問題にも優れた性能を示す万能かつ汎用的なモデルが存在するという定理である。"],
    answer: 3,
    explanation: "ノーフリーランチ定理は「あらゆる問題に対して万能なアルゴリズムは存在しない」という定理です。選択肢4は逆の内容を述べており、誤りです。"
  },
  { id: "qb-006", category: "basics",
    question: "ルールベースと機械学習に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["ルールベースとは、人間が事前に作成したルールや知識をコンピュータにプログラムし、それに基づいて予測や判断を行う技術をいう。", "ルールベースで用いられるルールは、動作の透明性が低く、予測しにくい。", "複雑な問題に対処しようとする場合、ルールベースの仕組みだと大量のルールが必要となり、ルールの管理が困難になるという問題がある。", "機械学習は、ルールベースの問題点を解決すべく、新しいアプローチとして主流になった手法である。"],
    answer: 1,
    explanation: "ルールベースは人間が明示的にルールを記述するため、動作の透明性が高く、予測しやすいのが特徴です。透明性が低いのはむしろ機械学習（特にディープラーニング）の課題です。"
  },
  { id: "qb-007", category: "basics",
    question: "機械学習における強化学習に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["強化学習は、コンピュータに目標を設定し、目標の達成に近づくたびに報酬を与えることで、最適な行動を自ら学習させる手法である。", "強化学習において、コンピュータは最初から設定された報酬を最大化するための最適な行動をとる。", "強化学習は、ゲームAI開発のみならず、自動車の自動運転など現実世界の問題にも広く用いられている。", "強化学習では、環境との相互作用を通じて試行錯誤を繰り返しながら、どのような行動が報酬を最大化するかを学習する。"],
    answer: 1,
    explanation: "強化学習は試行錯誤を通じて学習します。最初から最適な行動をとるのではなく、報酬を積み重ねる中で徐々に最適な行動戦略を習得していきます。"
  },
  { id: "qb-008", category: "basics",
    question: "ALBERTは、パラメータを削減してBERTと同等の性能を保ちながら計算リソースが少ない環境でも使用できる。この「計算リソースが少ない環境」として最も適切なものはどれか。",
    options: ["小さなバッテリーの使用", "高性能なGPUを搭載したパソコンの使用", "スマートフォンの使用", "低コストのパソコンの使用"],
    answer: 2,
    explanation: "ALBERTはパラメータを大幅に削減した軽量モデルのため、GPU性能が限られたスマートフォンなどのリソース制約のある環境での使用に適しています。"
  },
  { id: "qb-009", category: "basics",
    question: "テキスト生成AIを利用するメリットに関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["ユーザーが入力したプログラミングコードの誤りを検出し、正しい形に修正することができる。", "テキスト生成AIは、与えられたテキストをもとに関連情報を補充したり、新たな視点やアイデアを提供したりすることができる。", "文章の作成を自動化できるため、短時間で多くのコンテンツを効率よく作成できる。", "AIはあらゆる状況で公平に文章を生成するため、差別的な内容を生成・出力することは基本的にない。"],
    answer: 3,
    explanation: "テキスト生成AIは学習データに含まれるバイアスを反映し、差別的・不適切な内容を生成してしまう可能性があります。「公平に生成する」という説明は誤りです。"
  },
  { id: "qb-010", category: "basics",
    question: "音楽生成AIに関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["音楽生成AIでは、音符やコードなどの構造を学習するために、MIDIデータなどが利用されることが多い。", "音楽生成AIに使われるディープラーニング技術として、シーケンス処理に優れたRNNがよく活用されている。", "音楽生成AIの利用により、作曲の初期段階でのメロディ作成などが自動化でき、音楽制作の効率化が可能となる。", "音楽生成AIは、JPEGファイルを学習素材として用いることで、演奏の質感を再現する。"],
    answer: 3,
    explanation: "JPEGは画像フォーマットです。音楽生成AIが学習に用いるのはMIDIや音声ファイルであり、JPEGファイルを音楽学習の素材として使用することはありません。"
  },
  { id: "qb-011", category: "basics",
    question: "画像生成AIにおける画像データ作成手法として、通常使用されないものはどれか。",
    options: ["VAE（変分オートエンコーダ）", "CNN（畳み込みニューラルネットワーク）", "RNN（再帰型ニューラルネットワーク）", "GAN（敵対的生成ネットワーク）"],
    answer: 2,
    explanation: "RNNは時系列・シーケンスデータの処理に使われる技術です。画像生成においては、GAN・VAE・CNNが主に用いられ、RNNは通常使用されません。"
  },
  { id: "qb-012", category: "basics",
    question: "RNN及びLSTMに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["RNNは、過去の情報を記憶しながら、新しい情報（現在の入力）を組み合わせて処理することができるのが特徴である。", "RNNは、短い時系列データの処理には適さず、長文や動画などの長いデータ専用の技術である。", "LSTMは、長文の自然言語を処理すると必ず精度が向上する。", "LSTMは、並列処理・並列学習に適しており、大規模な分散学習に向いている。"],
    answer: 0,
    explanation: "RNNの最大の特徴は、過去の情報（隠れ状態）を記憶して現在の入力と組み合わせて処理できる点です。LSTMはRNNの長期依存問題を改善したモデルですが、逐次処理のため並列化は苦手です。"
  },
  { id: "qb-013", category: "basics",
    question: "半教師あり学習に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["半教師あり学習は、ラベル付きデータが少ない場合でも学習が可能である。", "半教師あり学習は、正解ラベルをつけるにあたり、データに偏りが生じることがある。", "半教師あり学習は、すべてのデータにラベル付けがされているわけではないため、教師あり学習よりも学習コストが増大する。", "半教師あり学習は、教師あり学習と比較すると、学習精度が低くなることがある。"],
    answer: 2,
    explanation: "半教師あり学習はラベルなしデータも活用することで、少量のラベル付きデータで学習できます。全データにラベル付けが必要な教師あり学習よりもラベリングコストは一般的に削減されます。"
  },
  { id: "qb-014", category: "basics",
    question: "自己回帰モデルとディープラーニングの特徴に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["自己回帰モデルは、過去のデータをもとに将来の状況を予測する手法で、株価・天気・売上予測などの時系列データの分析に効果的である。", "ディープラーニングは、複数の制限付きボルツマンマシンを多段に重ねることで、AIが高度なパターンを学習できるようにする技術である。", "ディープラーニングは、過去のデータがまったくなくても、将来の予測が可能な技術である。", "ディープラーニングは、人間の脳の働きを模倣した技術であり、従来の機械学習と比べて複雑なパターンを学習する能力がある。"],
    answer: 2,
    explanation: "ディープラーニングは大量の学習データを必要とします。「過去のデータがまったくなくても予測可能」という説明は誤りです。"
  },
  { id: "qb-015", category: "basics",
    question: "GPT-o3のラインナップ（o3-mini / o3 / o3-pro）の特徴の組合せとして、正しいものはどれか。",
    options: ["精度最重視 / 動画生成専用 / 画像入力専用", "スマートフォン組込み専用 / 音声認識専用 / 翻訳専用", "研究用途の最上位版 / 低精度・低コスト版 / ゲーム専用", "動作が軽量で高速・低コスト / 汎用タスクを幅広く安定してこなす / 複雑で深く推論を行う"],
    answer: 3,
    explanation: "o3-miniは軽量・高速・低コスト、o3は汎用タスクを幅広くこなす標準モデル、o3-proは複雑な問題に対して深く推論するハイエンドモデルです。"
  },
  { id: "qb-016", category: "basics",
    question: "次のうち、過学習を防ぐための手法として正しいものを組み合わせたものはどれか。（ア:ドロップアウト、イ:クラスタリング、ウ:AGI、エ:正則化、オ:アーリーストッピング）",
    options: ["ア・イ・ウ", "ウ・エ・オ", "ア・エ・オ", "イ・ウ・エ"],
    answer: 2,
    explanation: "過学習防止の代表的手法は、ドロップアウト（ア）・正則化（エ）・アーリーストッピング（オ）です。クラスタリング（イ）はデータ分類手法、AGI（ウ）は汎用人工知能の概念であり、過学習防止とは無関係です。"
  },
  { id: "qb-017", category: "basics",
    question: "機械学習モデルを人間の意図に沿った適切な回答を出すように調整することを何というか。",
    options: ["ファインチューニング", "アライメント", "オムニモーダル", "ハルシネーション"],
    answer: 1,
    explanation: "アライメント（Alignment）とは、AIモデルを人間の価値観・意図・倫理に沿うよう調整する技術・概念です。ファインチューニングは特定タスク向けの追加学習を指します。"
  },
  { id: "qb-018", category: "basics",
    question: "AIとロボットの区別に関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["AIとロボットは同じ概念であり、いずれも物理的な作業を実行するための機能である。", "人間に例えれば、AIは「身体」の部分に、ロボットは「脳」の部分に当たる技術である。", "AIは、記憶・認識・学習・問題解決といった「人間の知能」を再現する技術で、主にソフトウェアやアプリケーションの形で存在する。", "ロボットは感情を持ち、他人を思いやることができるが、プログラムされた作業を実行するだけの存在でもある。"],
    answer: 2,
    explanation: "AIは人間の知能（認識・学習・判断）を再現するソフトウェア技術です。ロボットは物理的な作業を行う機械（「身体」）であり、AIはその「脳」に相当します。"
  },

  // ── 主要サービス・ツール（スクリーンショットから追加） ─────────────
  { id: "qs-001", category: "services",
    question: "Gemini 2.5に関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["Geminiはテキスト専用のモデルであり、画像や音声などのマルチモーダル入力には対応していない。", "Gemini 2.5 Proが扱えるトークンは、最大約1万トークン程度である。", "Gemini 2.5 Flashは、Gemini 2.5 Proと比べて高精度だが、応答が遅く高コストとなる。", "Gemini公表後、1.5→2.0→2.5とバージョンアップが行われ、Gemini 2.0からエージェント的な使い方を前提とした設計がなされている。"],
    answer: 3,
    explanation: "Geminiは1.5→2.0→2.5とバージョンアップを重ね、Gemini 2.0からエージェント的利用を前提とした設計になっています。GeminiはマルチモーダルAIであり、Gemini 2.5 Flashは高速・低コスト版です。"
  },
  { id: "qs-002", category: "services",
    question: "GPT-o1に関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["日常的な対話や翻訳などの汎用タスク向けに開発されたモデルで、推論能力を特に高めたものではない。", "OpenAIが2024年に公表した動画生成AIで、テキストから最長20秒のフルHD動画を生成できる。", "OpenAIが2024年に公表した最初のリーズニングモデルで、応答速度よりもじっくり考えて結論を出すことに力点を置いている。", "OpenAIが2024年に公表した画像生成AIで、ノイズから段階的に画像を復元する手法を採用している。"],
    answer: 2,
    explanation: "GPT-o1はOpenAIが2024年に公表した推論特化モデル（リーズニングモデル）です。じっくり考えてから回答する「思考の連鎖」を内部で行います。動画生成はSora、画像生成はDALL-Eが担当します。"
  },
  { id: "qs-003", category: "services",
    question: "GPT-o4に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["GPT-o4は、2025年4月に公表されたリーズニングモデルである。", "GPT-o4はGPT-4oと名称が似ているが、別系列のモデルである。", "GPT-o4は、Web検索・Python実行・画像解析などのツールを自律的に組み合わせて複雑な課題を解くことができる。", "GPT-o4-miniとGPT-o4-mini-highでは、後者の方が高速・低コストである。"],
    answer: 3,
    explanation: "GPT-o4-mini-highは、GPT-o4-miniと比べて高精度ですが、より多くの推論ステップを踏むため処理速度が遅く、コストも高くなります。「後者の方が高速・低コスト」は誤りです。"
  },
  { id: "qs-004", category: "services",
    question: "GPT-4.1に関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["画像生成専用のモデルであり、テキスト入力には対応していない。", "2025年4月にOpenAIが公表した、プログラム開発の実務に向けて性能を強化したモデルである。", "推論を抑え、単純なキーワード検索のみを高速・低コストで行うモデルである。", "長文には対応しておらず、大規模な入力を一度に扱えないのがデメリットである。"],
    answer: 1,
    explanation: "GPT-4.1は2025年4月にOpenAIが公表したモデルで、プログラム開発・コーディング実務向けに性能が強化されています。長いコンテキストウィンドウにも対応しています。"
  },
  { id: "qs-005", category: "services",
    question: "Soraに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["2024年にOpenAIが公表した動画生成AIで、テキストから動画を生成できる。", "音声認識専用のAIで、会話をリアルタイムに文字化する。", "画像生成専用のAIであり、ノイズから段階的に画像を復元する拡散モデルである。", "MicrosoftがOfficeに組み込んだ生成AI群の総称である。"],
    answer: 0,
    explanation: "SoraはOpenAIが2024年に公表したテキストから動画を生成するAIです。音声認識はWhisper、画像生成はDALL-E、MicrosoftのOffice統合AIはCopilotです。"
  },
  { id: "qs-006", category: "services",
    question: "Operatorに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["Googleが開発した動画編集専用のAIである。", "WebブラウザでのWeb検索・フォーム入力などを自動で行う「エージェントモデル」であり、オンラインストアでの購入や航空券予約などの一連の操作を自動化できる。", "Office文書内の誤字脱字を自動で修正することを目的としたAIである。", "PC内部のファイルを高速で検索することを目的としたAIである。"],
    answer: 1,
    explanation: "OperatorはOpenAIが提供する自律型エージェントAIで、Webブラウザを操作してフォーム入力・購入・予約などのタスクを自動で行います。"
  },
  { id: "qs-007", category: "services",
    question: "GPT-5シリーズに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["GPT-5 Thinkingは、より長く深く推論する設計で、GPT-o3モデルと比べてハルシネーションが約80%少ないと報告されている。", "GPT-5は2020年に公表された動画生成のみに対応するモデルである。", "GPT-5シリーズは動画生成にのみ対応するモデルである。", "GPT-5 Thinkingは、GPT-5 Proよりも応答が速いが、精度は低い。"],
    answer: 0,
    explanation: "GPT-5 Thinkingは深い推論設計のモデルで、ハルシネーション大幅削減が報告されています。GPT-5は汎用モデルであり動画生成専用ではありません。"
  },
  { id: "qs-008", category: "services",
    question: "Copilotに関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["CopilotはWord、Excel、Outlook、Teamsなどに組み込まれ、文書・資料・メール等の作成を補助する。", "CopilotはMicrosoftが開発した独自の生成AI群で、GPTシリーズではなく独自開発の生成AIをベースにしている。", "Copilot+ PCでは、PC上の作業履歴をオフラインで検索できる「Recall」機能を搭載している。", "GitHub Copilotはコード生成を支援し、Security Copilotはセキュリティ対策を支援する。"],
    answer: 1,
    explanation: "CopilotはMicrosoftとOpenAIの提携のもと、OpenAIのGPTシリーズをベースに開発されています。独自開発の生成AIをベースにしているという説明は誤りです。"
  },
  { id: "qs-009", category: "services",
    question: "Codexに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["動画生成に特化したモデルであり、映画レベルの映像を自動生成する。", "ベースにo3系推論モデルが採用されているが、バグの自動発見・修正はできない。", "ソフトウェア開発を支援するエージェントで、作業ログやテスト結果を提示しながら変更の提案から取り込みまでを行うことができる。", "AIが商品ページを解析しオンラインストアで自動購入するエージェントAIである（Operatorと同じ機能）。"],
    answer: 2,
    explanation: "CodexはOpenAIのソフトウェア開発支援エージェントです。コードの作成・テスト・変更提案などをエージェントが自律的に行います。動画生成・自動購入はCodexの機能ではありません。"
  },
  { id: "qs-010", category: "services",
    question: "Claudeに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["Googleが開発したモデルである。", "標準で100万トークンの長大な文脈とマルチモーダル入出力を一体的に利用することができる。", "「有害でない・正確・正直」という倫理観を組み込んだ「Constitutional AI」と呼ばれる手法で学習されている。", "Claudeのラインナップの名称は、Haiku、Pro、Nanoが代表的である。"],
    answer: 2,
    explanation: "ClaudeはAnthropicが開発しており、Constitutional AI（憲法的AI）という手法で安全性・倫理性を重視した学習を行っています。ラインナップはHaiku・Sonnet・Opusが代表的です。"
  },
  { id: "qs-011", category: "services",
    question: "RAGに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["RAGは、外部のドキュメントを一切参照せず、事前学習済みモデルだけで回答する方式である。", "RAGの主要コンポーネントは、①データ準備・インデックス化、②検索、③生成という3つの部分から成り立つ。", "RAGは、LLMと比べてハルシネーションの抑制に対する効果はあまりない。", "RAGは、動画生成におけるフレーム補間技術の一種である。"],
    answer: 1,
    explanation: "RAGは①データ準備・インデックス化、②検索（Retrieval）、③生成（Generation）の3つのコンポーネントで構成されます。外部知識を参照することでハルシネーション抑制に有効です。"
  },

  // ── プロンプトエンジニアリング（スクリーンショットから追加） ─────────
  { id: "qp-001", category: "prompting",
    question: "Zero-ShotプロンプティングおよびFew-Shotプロンプティングに関する次の記述のうち、最も不適切なものはどれか。",
    options: ["Zero-Shotプロンプティングは、具体的な例なしに質問をなげかける方法で、明確な正解が存在するタスクに向いている。", "Zero-Shotプロンプティングは、簡単な質問にのみ限られ、複雑な問題には常に不定な結果になる。", "Few-Shotプロンプティングは、具体的な例を2〜3個与えることで、求められる回答のアウトラインをAIに認識させる方法で、より良い回答を得るために有効である。", "Few-Shotプロンプティングは、特定分野の専門的なルールや形式が必要な場合に特に役立つ。"],
    answer: 1,
    explanation: "Zero-Shotプロンプティングは複雑な問題に「常に」不定な結果になるわけではありません。モデルの能力によっては複雑なタスクにも対応できます。「常に」という断定が誤りです。"
  },

  // ── リスク・倫理（スクリーンショットから追加） ───────────────────────
  { id: "qr-001", category: "risks",
    question: "AI生成物の権利関係及び留意点に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["AI生成物を商用利用する前に、著作権情報や利用規約を確認し、商用利用が許可されているかを確認するべきである。", "AI生成物が他の著作物と酷似している場合、消費者の誤認を生む恐れがあるため、AI生成物である旨を明示することが推奨される。", "AI生成物が特定の個人やブランドに関連する場合、パブリシティ権の確認が必要となる。", "生成AIを活用して生成された文章・画像・音楽などについては、元の学習データについて著作権が認められ、生成された成果物については著作権は一切認められない。"],
    answer: 3,
    explanation: "AI生成物の著作権は複雑で、人間が創作的関与をしている場合は著作権が認められることがあります。「一切認められない」という断定は誤りです。利用規約や各国の法制度を確認することが重要です。"
  },
  { id: "qr-002", category: "risks",
    question: "音声生成AI及び動画生成AIに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["音声生成AIは、多くの場合「教師なし学習」のみによって訓練される。", "音声生成AIを用いても、音楽の雰囲気や表現を再現することはできない。", "動画生成AIと画像生成AIに共通して使用される手法として、GANとVAEが挙げられる。", "動画生成はフレームの集合の生成に過ぎず、各フレーム間の一貫性を保つことは重要ではない。"],
    answer: 2,
    explanation: "GAN（敵対的生成ネットワーク）とVAE（変分オートエンコーダ）は、画像生成と動画生成の両方に活用される代表的な手法です。音声生成AIは教師あり学習も多用します。"
  },
  { id: "qr-003", category: "risks",
    question: "生成AIの技術的発展に潜む脅威に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["生成AIの発展により、言語の壁を超えた自然なフィッシングメールの大量生成が可能となり、国際的なサイバー犯罪のリスクが高まっている。", "生成AIの発展により、フェイク画像やフェイクWebサイトを生成できるようになったが、真実のものとの判別は容易であるため、ユーザーが騙される可能性は低い。", "生成AIの発展により、攻撃者が詐欺等を行う際の準備にかかる時間及びコストが削減される。", "生成AIの発展により、文章・画像・音声・動画が大量に生成されるようになり、新たなプライバシーリスクが生じている。"],
    answer: 1,
    explanation: "現在のディープフェイク技術は非常に高精度であり、真偽の判別は容易ではありません。「判別は容易でユーザーが騙される可能性は低い」という説明は誤りです。"
  },
  { id: "qr-004", category: "risks",
    question: "テキスト生成AIを利用するデメリットや留意点に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["AIが生成したテキストは専門知識や文脈の理解が不完全なことがあり、人間によるチェックが必要な場合がある。", "AIが自動でセキュリティ対策を行ってくれるため、ユーザー側はその確認をする必要はない。", "テキスト生成AIは事実と異なる内容をもっともらしく生成してしまう場合があり、情報の真偽確認が重要である。", "テキスト生成AIは学習データの偏りによって、差別的・不適切な表現を含む文章が生成される可能性がある。"],
    answer: 1,
    explanation: "生成AIがセキュリティ対策を自動で行うわけではなく、ユーザー自身が出力内容の確認・検証を行う必要があります。AIに対策を丸投げすることは危険です。"
  },
  { id: "qr-005", category: "risks",
    question: "マルウェアに関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["パソコンの処理速度を上げるために設計されたソフトウェアの総称である。", "ネットワークの接続を安定させるために開発された、通信を最適化するソフトウェアの総称である。", "コンピュータやそのユーザーに被害を与える目的で作られた、悪意のあるソフトウェアの総称である。", "デジタル著作権を保護する目的で作られた、セキュリティ技術の総称である。"],
    answer: 2,
    explanation: "マルウェア（Malware）は「Malicious Software（悪意のあるソフトウェア）」の略で、ウイルス・ワーム・ランサムウェア・スパイウェアなど、コンピュータやユーザーに害をもたらすソフトウェアの総称です。"
  },

  // ── セキュリティ（追加） ─────────────────────────────────────────────
  { id: "nsec2-001", category: "security",
    question: "「スミッシング（Smishing）」の説明として正しいものはどれか。",
    options: ["SMS（ショートメッセージサービス）を使って偽のURLへ誘導したり個人情報・金銭をだまし取るフィッシング詐欺", "メールを使ったフィッシング詐欺", "電話音声を使った詐欺", "SNSのDMを使った詐欺"],
    answer: 0,
    explanation: "スミッシングは「SMS」と「フィッシング」を組み合わせた言葉で、SMS経由でフィッシング詐欺を行う手法です。「宅配便の不在通知」「銀行からのセキュリティ確認」「公共料金の未払い警告」などを装ったSMSで偽サイトに誘導し、クレジットカード情報や認証情報を盗みます。知らない番号からのSMSのURLは安易にタップしないことが重要です。"
  },
  { id: "nsec2-002", category: "security",
    question: "「ヴィッシング（Vishing）」の説明として正しいものはどれか。",
    options: ["ビデオ通話を使った詐欺の総称","Voice（音声電話）を使い、金融機関・役所・企業の担当者を装って個人情報や金銭をだまし取る詐欺","VPNを悪用したサイバー攻撃","ビジネスメール詐欺の別名"],
    answer: 1,
    explanation: "ヴィッシングは「Voice」と「フィッシング」を組み合わせた言葉で、電話による詐欺手法です。「銀行のセキュリティ部門です」「税務署です」などと名乗り、口座情報・暗証番号・個人情報を聞き出します。生成AIにより本人に酷似した音声の合成が容易になり、家族・上司の声を装うディープフェイク音声詐欺への悪用も増加しています。"
  },
  { id: "nsec2-003", category: "security",
    question: "「ベイト攻撃（Bait Attack）」の説明として正しいものはどれか。",
    options: ["コンピュータウイルスを「釣り」のように拡散する手法", "フィッシングメールに餌（bait）を仕掛ける手法", "USBメモリ等の物理的メディアや魅力的なリンクを意図的に放置・配布し、被害者が自発的に接続・クリックするよう誘導してマルウェアに感染させる手法", "ハニーポットを使った攻撃者の誘導手法"],
    answer: 2,
    explanation: "ベイト攻撃は「えさ」で被害者を誘い込む手法です。典型例は「Free Music」と書かれたUSBメモリを駐車場に落としておき、拾った人がPCに接続してマルウェアに感染させる方法です。インターネット上では「無料映画ダウンロード」「限定プレゼント」などの誘惑で悪意あるリンクをクリックさせます。見覚えのないUSBや魅力的すぎる無料オファーには注意が必要です。"
  },
  { id: "nsec2-004", category: "security",
    question: "「プレテキスト（Pretext）」攻撃の説明として正しいものはどれか。",
    options: ["テキストメッセージを使った事前攻撃", "プログラムコードの事前に仕込まれた攻撃", "プレゼンテーション形式を悪用した攻撃", "攻撃者が偽の身元・状況（口実）を作り上げて被害者の信頼を得、情報や金銭を詐取するソーシャルエンジニアリング手法"],
    answer: 3,
    explanation: "プレテキスト（pretext＝口実・名目）攻撃では、攻撃者がITサポート担当・銀行審査員・取引先担当者などの偽の身元を作り込み、被害者に信じさせて機密情報・パスワード・送金などを引き出します。入念なリサーチ（SNS・公開情報の収集）で説得力を高めることが特徴です。本人確認が取れていない相手への情報提供は厳禁です。"
  },
  { id: "nsec2-005", category: "security",
    question: "公共の場での「偽Wi-Fiアクセスポイント（Evil Twin攻撃）」のリスクと対策として正しいものはどれか。",
    options: ["攻撃者が本物に見せかけた偽Wi-Fiを設置し接続した端末の通信を傍受するため、公共Wi-Fiでは機密情報の送受信を避けVPNを使うことが有効", "カフェや空港のWi-Fiは公式のものだけが存在するため安全", "Wi-Fiのパスワードがあれば偽アクセスポイントからは守られる", "HTTPSサイトであれば偽Wi-Fi経由でも通信は完全に安全"],
    answer: 0,
    explanation: "Evil Twin攻撃では攻撃者が「Airport_Free_WiFi」など本物に似た名前の偽Wi-Fiを設置します。接続した端末のHTTP通信・DNS情報・セッションCookieなどが盗まれます。対策は①公共Wi-Fiでの機密情報（パスワード・個人情報）の送受信を避ける、②VPNを使って通信を暗号化する、③自動Wi-Fi接続機能をオフにする、④確認できないWi-Fiには接続しない、などです。"
  },
  { id: "nsec2-006", category: "security",
    question: "「悪意のあるQRコード」を使ったサイバー攻撃への対策として正しいものはどれか。",
    options: ["QRコードはメーカーが安全性を保証しているため安全","QRコードをスキャンする前にURLをプレビューで確認し、見覚えのないドメインや短縮URLへのアクセスは慎重に判断する","QRコードはテキスト情報のみなのでウイルスは含まれない","屋外に掲示されたQRコードは安全で屋内のものは危険"],
    answer: 1,
    explanation: "QRコードは単なるURLへの誘導ツールであり、偽造・改ざんが容易です。店頭の正規QRコードの上に偽QRコードを貼り付ける「QRコードの貼り替え」、フィッシングサイトへの誘導、マルウェア配布ページへの誘導などが実際に発生しています。スキャン後に表示されるURLを確認し、不審なドメインへのアクセスは行わないことが重要です。"
  },
  { id: "nsec2-007", category: "security",
    question: "ファイル共有・アップロードサービスを利用する際のリスクとして正しいものはどれか。",
    options: ["信頼できるサービスであれば機密ファイルをアップロードしても問題ない", "クラウドストレージはすべてエンドツーエンド暗号化されている", "アップロードしたファイルのサーバー保管・第三者アクセスの可能性・サービス規約によるデータ利用・セキュリティ侵害リスクを考慮し、機密情報のアップロード前にセキュリティポリシーを確認する", "無料のファイル共有サービスは企業のセキュリティ基準を満たしている"],
    answer: 2,
    explanation: "クラウドストレージ・ファイル共有サービスのリスク：①サービス規約でアップロードファイルをサービス改善に使用する場合がある、②サービスのセキュリティ侵害によりファイルが流出、③共有URLが第三者に漏れる、④サービス終了によるファイルへのアクセス不能、などがあります。企業の機密データは承認済みのセキュアなサービスのみを使用することが原則です。"
  },
  { id: "nsec2-008", category: "security",
    question: "マルウェアの種類として「トロイの木馬」の説明として正しいものはどれか。",
    options: ["自己複製してネットワークを通じて拡散するウイルス", "コンピュータの画面に大量のポップアップを表示するソフト", "ファイルを暗号化して身代金を要求するソフトウェア", "正規のソフトウェアに見せかけてインストールさせ、バックドアや情報窃取・遠隔操作などの悪意ある機能を隠し持つマルウェア"],
    answer: 3,
    explanation: "トロイの木馬（Trojan Horse）は「有用なソフト」に偽装したマルウェアです。フリーソフト・ゲーム・PDFリーダーなどに見せかけてインストールさせ、バックドア（遠隔操作の抜け穴）の設置・キーロガー（キー入力の記録）・情報の外部送信・他マルウェアのダウンロードなどを行います。信頼できるソースからのみソフトウェアをインストールすることが重要です。"
  },
  { id: "nsec2-009", category: "security",
    question: "「スパイウェア」の特徴として正しいものはどれか。",
    options: ["ユーザーの知らない間にインストールされ、キー入力・閲覧履歴・パスワード・個人情報などを収集して外部に送信するマルウェア", "画面にスパイ映画の広告を表示するソフト", "ネットワーク通信を監視して不正アクセスを検出するセキュリティツール", "ウイルスを自動的に検出・除去するソフトウェア"],
    answer: 0,
    explanation: "スパイウェアは利用者が気づかないうちにデバイスにインストールされ、パスワード・クレジットカード情報・閲覧履歴・カメラ・マイクへのアクセスなどを行います。フリーソフトのバンドル・悪意あるサイトへのアクセス・フィッシングメールの添付ファイルから感染します。定期的なウイルス対策ソフトのスキャンと不審なソフトのインストール回避が対策です。"
  },
  { id: "nsec2-010", category: "security",
    question: "安全なパスワード管理の実践として正しいものはどれか。",
    options: ["覚えやすいよう全サービスで同じパスワードを使う","サービスごとに異なる長くランダムなパスワードを設定し、パスワードマネージャーで管理する・多要素認証（MFA）を有効にする","パスワードを定期的に変更するほどセキュリティは下がる","パスワードはメモ帳に書いてデスクトップに保存するのが最も安全"],
    answer: 1,
    explanation: "安全なパスワード管理の原則：①サービスごとに異なるパスワードを使用（使い回しはひとつが漏れると全滅するリスク）、②12文字以上の大小英数記号混在のランダムなパスワード、③パスワードマネージャー（1Password・Bitwarden等）で管理、④重要サービスには多要素認証（MFA）を必ず設定、⑤誕生日・名前・辞書にある単語は避ける。"
  },
  { id: "nsec2-011", category: "security",
    question: "「多要素認証（MFA）」の説明と重要性として正しいものはどれか。",
    options: ["複数のIDを持つことによる認証", "MFAを設定するとパスワードは不要になる", "パスワードに加えてSMS認証コード・認証アプリ・生体認証など複数の認証要素を組み合わせることで、パスワード漏洩時でもアカウント乗っ取りを防ぐ", "MFAはセキュリティが高すぎて使いにくいため不要"],
    answer: 2,
    explanation: "多要素認証（MFA）は「知識（パスワード）」「所持（スマートフォン）」「生体（指紋・顔）」のうち2つ以上を組み合わせる認証方式です。パスワードが漏洩しても第2の認証要素がなければログインできないため、アカウント乗っ取りを大幅に防止します。Google・Microsoft等の調査では、MFA導入でアカウント侵害の90%以上を防げるとされています。"
  },
  { id: "nsec2-012", category: "security",
    question: "不適切なコンテンツへのWebアクセスのリスクとして正しいものはどれか。",
    options: ["不正サイトは閲覧するだけでは安全で、ダウンロードしなければ問題ない", "企業のセキュリティソフトが全ての不正サイトをブロックできる", "HTTPSのサイトなら不正コンテンツでも安全", "不正・違法コンテンツサイトへのアクセスにより、閲覧だけでマルウェア感染（ドライブバイダウンロード）・フィッシング・個人情報収集のリスクがある"],
    answer: 3,
    explanation: "ドライブバイダウンロードは、不正サイトを閲覧するだけでブラウザの脆弱性を突いてマルウェアがダウンロード・実行される攻撃です。不法コピーコンテンツ・違法ギャンブルサイト・アダルトサイトなどに多く潜んでいます。ブラウザ・OSの定期更新、セキュリティソフトの導入、怪しいサイトへのアクセス回避が重要です。"
  },
  { id: "nsec2-013", category: "security",
    question: "AIが生成したディープフェイク音声を使った詐欺「ボイス詐欺」への対策として正しいものはどれか。",
    options: ["電話で金銭・情報を求められた場合は必ず別の手段で本人確認を取り直す・事前に家族・同僚との確認コードを決めておく", "電話の音質が高ければ本物の声と判断してよい", "AIが生成した音声は機械的で必ず聞き分けられる", "会社の上司からの電話であれば無条件に信頼してよい"],
    answer: 0,
    explanation: "ElevenLabs等の音声生成AIにより、数秒〜数分の音声サンプルから本人に酷似した音声を合成できます。「社長の声で送金を命じる」「親族が事故に遭ったと騙る」などの詐欺が実際に発生しています。対策は①電話で金銭・情報を求められたら必ず折り返し電話で確認、②家族間で「確認用の合言葉」を決めておく、③緊急を装う電話は特に慎重に対応することです。"
  },
  { id: "nsec2-014", category: "security",
    question: "インターネット上の「デジタルフットプリント」のセキュリティリスクとして正しいものはどれか。",
    options: ["ネット上の自分の活動記録は完全に消去できる","SNS投稿・検索履歴・位置情報・購買履歴など個人が残すデジタル痕跡が、ソーシャルエンジニアリング・ターゲット型攻撃・なりすましに悪用されるリスクがある","デジタルフットプリントは企業にのみリスクをもたらす","プライベートブラウジングを使えばデジタルフットプリントは残らない"],
    answer: 1,
    explanation: "デジタルフットプリントとはネット上に残る個人の行動記録です。攻撃者はSNSの公開情報（勤務先・家族・趣味・居場所）を収集してプレテキスト攻撃やスピアフィッシングの標的にします。対策は①SNSの公開範囲を最小化、②不必要な個人情報の公開を避ける、③定期的に自分の名前で検索して情報を確認・管理することです。"
  },
  { id: "nsec2-015", category: "security",
    question: "OSやアプリのセキュリティアップデートを迅速に適用することが重要な理由として正しいものはどれか。",
    options: ["アップデートは新機能を追加するためのもので、セキュリティとは無関係", "セキュリティパッチは半年に1回まとめて適用すれば十分", "発見された脆弱性を悪用した攻撃は、パッチ公開後から急増するため、速やかなアップデートが被害防止に直結する", "最新バージョンにすると動作が不安定になるため古いバージョンの方が安全"],
    answer: 2,
    explanation: "セキュリティパッチが公開されると、攻撃者はその脆弱性情報を即座に分析し、まだパッチを当てていないシステムを標的にします（N-day攻撃）。パッチ公開から数日以内に大規模攻撃が始まることもあります。OS・ブラウザ・業務ソフトのアップデートは可能な限り速やかに適用し、特にリモートコード実行・認証バイパスの脆弱性は最優先での対応が必要です。"
  },
  { id: "nsec2-016", category: "security",
    question: "「ブラックメール（恐喝）」の典型的な手口と対処法として正しいものはどれか。",
    options: ["ブラックメールは黒い封筒で届く詐欺", "恐喝には要求に応じることが最善の解決策", "ブラックメールは技術的に高度で個人では対策できない", "「あなたの個人情報・画像を持っている。公開されたくければ支払え」などと脅す恐喝で、要求に応じても被害が拡大するだけなので支払わず警察・相談窓口に相談する"],
    answer: 3,
    explanation: "ブラックメール（恐喝）の典型例は「あなたのPCのカメラで盗撮した映像を持っている」（実際には持っていないことが多いが恐怖を煽る）「ハッキングした情報を使って家族に連絡する」などです。要求に応じると「もっと払える」と思われ被害が拡大します。支払わず、証拠を保存し、警察・消費者センター・IPA（情報処理推進機構）などに相談することが正しい対応です。"
  },
  { id: "nsec2-017", category: "security",
    question: "企業でのAI活用における「APIキー管理」のセキュリティとして正しいものはどれか。",
    options: ["APIキーはコードに埋め込まずに環境変数・シークレット管理サービスで管理し、必要最低限の権限のみを付与・定期的にローテーションする", "APIキーはコードに直接書き込むのが最も手軽で管理しやすい", "APIキーは社内全員で共有すると管理が簡単", "APIキーが漏洩してもすぐに変更できるため問題ない"],
    answer: 0,
    explanation: "APIキーがGitHubなどのコードリポジトリに誤って公開されることで、AIサービスの不正利用・高額請求・データアクセスが発生する事故が多発しています。適切な管理方法は①コードへの直接埋め込み禁止、②環境変数（.env）またはAWS Secrets Manager・Azure Key Vaultなどのシークレット管理サービスの使用、③最小権限の原則、④定期的なローテーション、⑤不審な使用状況のアラート設定です。"
  },
  { id: "nsec2-018", category: "security",
    question: "「ランサムウェア」被害を最小限に抑えるための事前対策として最も重要なものはどれか。",
    options: ["ランサムウェアに感染したら身代金を払えばデータが必ず戻る","重要データの定期的なオフラインバックアップ・ネットワークのセグメンテーション・パッチ適用・従業員教育を組み合わせた多層防御が有効","ランサムウェアはウイルス対策ソフトだけで完全に防止できる","クラウドに保存したデータはランサムウェアの被害を受けない"],
    answer: 1,
    explanation: "ランサムウェア対策の多層防御：①3-2-1バックアップ（3つのコピー・2種類のメディア・1つをオフライン保管）で感染しても復元可能に、②ネットワーク分離でランサムウェアの横展開を制限、③OS・ソフトの迅速なパッチ適用で侵入口を減らす、④フィッシングメールの添付ファイル開封防止の従業員教育、⑤EDR（エンドポイント検知・対応）ツールの導入。身代金を払ってもデータが戻らないケースも多く、支払いは推奨されません。"
  },
  { id: "nsec2-019", category: "security",
    question: "フィッシングメールを見分けるポイントとして正しいものはどれか。",
    options: ["送信者のメール表示名が正しければ本物のメール", "メールのデザインが綺麗であれば正規メール", "送信者のメールアドレスのドメイン確認・URLにカーソルを当てて遷移先確認・緊急を煽る文面への警戒・添付ファイルへの注意などを組み合わせて判断する", "大企業名が書かれているメールはすべて本物"],
    answer: 2,
    explanation: "フィッシングメール識別のポイント：①送信者メールアドレスのドメイン（表示名ではなく実際のアドレス）を確認（例：amazon@support-notice.com は偽物）、②リンクにカーソルを当てて実際のURLを確認（クリック前）、③「今すぐ対応しないとアカウント停止」などの緊急性を煽る文面に注意、④予期しない添付ファイルは開かない、⑤不審な場合は公式サイトに直接アクセスして確認する。"
  },
  { id: "nsec2-020", category: "security",
    question: "生成AIが作成したコードを業務で使用する際のセキュリティ上の注意点として正しいものはどれか。",
    options: ["AIが生成したコードは安全性が保証されているためレビュー不要", "コードのセキュリティチェックはAIに任せればよい", "AI生成コードのセキュリティリスクは小規模プロジェクトのみに存在する", "SQLインジェクション・XSS・認証バイパスなどの脆弱性がAI生成コードに含まれることがあり、必ずセキュリティレビューと自動テストを行う"],
    answer: 3,
    explanation: "GitHub CopilotなどのAIコード生成ツールが生成するコードには、①入力値のサニタイズ不足によるSQLインジェクション・XSS脆弱性、②ハードコードされたパスワード・APIキー、③不適切な認証・認可ロジック、④安全でない暗号化の使用などが含まれることがあります。SAST（静的解析）ツールによる自動チェックと人間のコードレビューを必ず組み合わせることが重要です。"
  },
  { id: "nsec2-021", category: "security",
    question: "「ソーシャルエンジニアリング」の定義として正しいものはどれか。",
    options: ["技術的な脆弱性ではなく人間の心理的弱点（信頼・親切心・権威への服従・恐怖・緊急感）を悪用して情報や金銭を詐取する攻撃手法", "エンジニアを採用するためのSNS活用戦略", "ソーシャルメディアを使ったハッキング技術", "社会的なAIシステムの設計手法"],
    answer: 0,
    explanation: "ソーシャルエンジニアリングはシステムではなく「人間」を攻撃します。「IT部門です、パスワードリセットのため教えてください」「緊急対応が必要で上司から頼まれた」などと人間の助けたい心理・権威への服従・緊急時の判断力低下を悪用します。技術的防御だけでは防げないため、従業員へのセキュリティ教育・本人確認手順の徹底・情報共有ルールの明確化が重要です。"
  },
  { id: "nsec2-022", category: "security",
    question: "SNSでの個人情報管理のベストプラクティスとして正しいものはどれか。",
    options: ["SNSの投稿はすべて公開設定にすると友人が増えて安全","住所・電話番号・勤務先の詳細・日常の行動パターン・高価な所有物などの公開を避け、プライバシー設定を定期的に見直す","フォロワー数が多ければ安全なアカウント","SNSに本名を使わなければすべて安全"],
    answer: 1,
    explanation: "SNSでの情報公開リスク：①住所・位置情報の公開はストーカー・窃盗のリスク、②勤務先・役職の公開はスピアフィッシングの標的になりやすい、③日常ルーティンの公開は物理的犯罪のリスク、④高価な買い物・旅行中の投稿は留守を知らせる結果になりえます。プライバシー設定で「友人のみ」表示にする、定期的に公開情報を見直す習慣が重要です。"
  },
  { id: "nsec2-023", category: "security",
    question: "「インシデントレスポンス（事故対応）」の基本ステップとして正しいものはどれか。",
    options: ["セキュリティ事故が発生したら、まず原因を特定してから報告する", "セキュリティ事故は担当者が独断で処理すれば早く解決する", "検知→封じ込め（感染拡大防止）→根絶（マルウェア除去）→復旧→事後対応（再発防止）の手順で組織的に対応する", "セキュリティ事故の詳細は社外に一切公開しない"],
    answer: 2,
    explanation: "インシデントレスポンスの標準手順（NIST SP 800-61参照）：①検知・分析（事象の確認・影響範囲の特定）、②封じ込め（感染システムのネットワーク分離）、③根絶（マルウェア除去・脆弱性修正）、④復旧（システム復元・正常稼働確認）、⑤事後対応（原因分析・再発防止策・必要に応じた当局・被害者への報告）。事前に対応計画（IRP）を策定しておくことが重要です。"
  },
  { id: "nsec2-024", category: "security",
    question: "「バックアップ」のセキュリティ上の重要性として正しいものはどれか。",
    options: ["バックアップは容量が増えるだけで実用的メリットはない", "クラウドサービスが自動バックアップするため個人・企業のバックアップは不要", "週次のバックアップがあれば十分で復元テストは不要", "ランサムウェア感染・ハードウェア故障・誤削除などの際にデータを復元できるよう、3-2-1ルール（3つのコピー・2種類のメディア・1つはオフサイト）でバックアップを定期的に取得・復元テストを実施する"],
    answer: 3,
    explanation: "3-2-1バックアップルール：①データを3か所に保管、②2種類の異なるメディア（HDD・クラウドなど）を使用、③1つはオフサイト（別の物理場所またはオフラインメディア）に保管。ランサムウェアはネットワークドライブのバックアップも暗号化することがあるため、オフラインまたはイミュータブル（変更不可）なバックアップが重要です。また復元テストなしのバックアップは、いざという時に使えないことがあります。"
  },
  { id: "nsec2-025", category: "security",
    question: "「スピアフィッシング」が通常のフィッシングより危険な理由として正しいものはどれか。",
    options: ["ターゲットの個人情報（名前・役職・取引先・最近の行動）を収集して個人に最適化した高い説得力の攻撃メールを送るため、見分けることが難しい", "スピアフィッシングは魚を捕る漁業用語でサイバー攻撃とは無関係", "スピアフィッシングはシステムの脆弱性を使う攻撃", "スピアフィッシングは組織のCEOのみを対象とした攻撃"],
    answer: 0,
    explanation: "通常のフィッシングが無差別大量送信なのに対し、スピアフィッシングは特定個人を狙い撃ちにします。攻撃者はSNS・LinkedIn・企業サイト・漏洩情報などから標的の情報を収集し、「先日の○○会議の件で」「○○様からご紹介いただいた」など実在の情報を盛り込んだ説得力の高いメールを送ります。疑わしいと感じたら別の手段で送信者に直接確認することが重要です。"
  },

  // ── セキュリティ（スクリーンショットから追加） ───────────────────────
  { id: "qsec-001", category: "security",
    question: "ウイルスに感染したコンピュータ内のデータを無断で暗号化し、暗号を解除してデータを復元するための「身代金」を要求してくるソフトウェアを何というか。",
    options: ["ランサムウェア", "トロイの木馬", "スパイウェア", "ワーム"],
    answer: 0,
    explanation: "ランサムウェアは「Ransom（身代金）＋Software」の造語です。データを暗号化して使用不能にし、復号と引き換えに金銭を要求するマルウェアです。バックアップの定期実施が重要な対策です。"
  },
  { id: "qsec-002", category: "security",
    question: "ソーシャルエンジニアリング攻撃に関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["ベイト攻撃とは、攻撃者が相手の秘密情報を入手した上で、その情報を公開しないために金銭を要求する手法をいう。", "ブラックメールとは、攻撃者が偽の身分や立場を名乗り、信頼関係を築いた上で情報を引き出す手法をいう。", "スピアフィッシングとは、特定の個人や組織を標的にしたフィッシング攻撃の一種で、信頼できる送信者を装うことで情報を盗む手法をいう。", "プリテキストとは、人間の「欲」や「好奇心」を利用して、魅力的に見える情報や商品でユーザーの興味をひき、マルウェア感染などを促す手法をいう。"],
    answer: 2,
    explanation: "スピアフィッシングは標的型フィッシング攻撃です。選択肢1の説明はブラックメール（脅迫）、選択肢2の説明はプリテキスティング、選択肢4の説明はベイト攻撃の内容です。"
  },
  { id: "qsec-003", category: "security",
    question: "インターネット利用者を狙う主な脅威に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["店舗名のついたWi-Fiであっても、攻撃者が正規のネットワークと誤認させる偽のWi-Fiを設置している可能性があり、リスクはある。", "スマートフォンのWi-Fi自動接続を有効にしていると、偽のWi-Fiアクセスポイントに接続してしまい通信を盗み見られるおそれがある。", "QRコードはセキュリティが保証されているため、店内に貼ってあるQRコードを読み取るのであればリスクはない。", "フィッシング詐欺とは、メールやWebサイトを通じてユーザーの個人情報を盗み出す詐欺である。"],
    answer: 2,
    explanation: "QRコードはURLへの誘導手段に過ぎず、不正なURLが仕込まれた悪意あるQRコードが店内に貼られることもあります。「QRコードはセキュリティが保証されている」は誤りです。"
  },

  // ── 法律・ガイドライン（スクリーンショットから追加） ─────────────────
  { id: "ql-001", category: "laws",
    question: "個人情報保護法に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["指紋認証や顔認証などの生体認証データそれ自体は、「個人情報」に含まれない。", "その機関単体では特定の個人を識別できなくても、他の情報と容易に照合することで特定の個人を識別できるものも「個人情報」に含まれる。", "メールアドレスや家族構成は「個人情報」に含まれる。", "死者に関する情報は「個人情報」に含まれない。"],
    answer: 0,
    explanation: "指紋・顔・虹彩・声紋などの生体認証データは「個人識別符号」として個人情報保護法上の「個人情報」に含まれます。「含まれない」という説明は誤りです。"
  },
  { id: "ql-002", category: "laws",
    question: "知的財産権に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["著作権とは、著作物を創作した著作者に与えられる権利で、特許庁に出願して登録を受けることによって出願者に発生する。", "特許権とは、発明を保護する権利で、特許庁に出願して登録を受けることによって出願者に発生する。", "商標権とは、商品やサービスを識別するロゴやブランド名などを保護する権利で、特許庁への登録によって発生する。", "意匠権とは、物品・建築物・画像などのデザインを保護する権利で、特許庁に出願して登録を受けることによって発生する。"],
    answer: 0,
    explanation: "著作権は、著作物を創作した瞬間に自動的に発生します（無方式主義）。特許庁への出願・登録は不要です。これは特許権・商標権・意匠権などの産業財産権とは大きく異なる点です。"
  },
  { id: "ql-003", category: "laws",
    question: "個人情報保護法に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["個人情報保護法は、2005年に全面施行された。", "個人情報保護委員会は、個人情報の有用性に配慮しつつ、個人の権利利益を保護することを目的としている。", "個人情報保護委員会は、個人情報の適切な管理を監督する内閣府の外局である。", "個人情報取扱事業者とは個人情報データベース等を事業の用に供している者をいうが、取り扱う個人情報で識別される特定の個人の数が一定以下の場合には、個人情報取扱事業者には当たらない。"],
    answer: 3,
    explanation: "かつては取り扱う個人情報が5,000件以下の事業者は対象外でしたが、2017年の改正でこの人数要件は撤廃されました。現在はすべての個人情報取扱事業者が対象です。"
  },
  { id: "ql-004", category: "laws",
    question: "匿名加工情報に関する次の記述のうち、正しい説明をしているものはどれか。",
    options: ["匿名加工情報とは、特定の個人を識別できないように個人情報を加工し、後に当該個人情報を復元することができるようにした情報のことをいう。", "事業者が匿名加工情報を自ら利用するときは、元の個人情報に係る本人を識別する目的で他の情報と照合することができる。", "事業者が匿名加工情報を取り扱う場合、加工方法等の情報の安全管理措置を講じる必要がある。", "事業者が匿名加工情報を第三者に提供する場合、提供先に当該情報が匿名加工情報である旨を明示する義務はない。"],
    answer: 2,
    explanation: "匿名加工情報を取り扱う事業者は、加工方法等の情報に対して安全管理措置を講じる義務があります。また、匿名加工情報は「復元できないように」加工したものであり、照合による本人識別も禁止されています。"
  },
  { id: "ql-005", category: "laws",
    question: "肖像権及びパブリシティ権に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["肖像権は、自分の顔や姿について、無断でその写真・動画などを撮影・公開・利用されないための権利である。", "肖像権は、日本国憲法第13条の幸福追求権に基づいて保護される権利と理解されている。", "パブリシティ権は、著名人が有する、氏名や容姿などが持つ経済的利益と価値を本人が排他的に支配できる権利である。", "パブリシティ権は、プライバシー権とは異なり経済的利益の保護が目的であるため、肖像権を構成する要素ではない。"],
    answer: 3,
    explanation: "パブリシティ権は肖像権の一側面として議論されることも多く、「肖像権を構成する要素ではない」という断定は誤りです。肖像権は人格的側面（プライバシー）と財産的側面（パブリシティ）の両方を含むと解されています。"
  },
  { id: "ql-006", category: "laws",
    question: "要配慮個人情報に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["「要配慮個人情報」とは、本人に対する不当な差別、偏見その他の不利益が生じないようにその取扱いに特に配慮を要するものとして政令で定める記述等が含まれる個人情報をいう。", "本人の人種、信条、社会的身分、病歴、犯罪の経歴、犯罪により害を受けた事実は、いずれも「要配慮個人情報」に含まれる。", "企業や組織が要配慮個人情報を収集・使用・開示するには、原則として、事後速やかに本人の明示的な同意を必要とする。", "金融分野における「機密情報」とは、「要配慮個人情報」よりも幅広い概念とされている。"],
    answer: 2,
    explanation: "要配慮個人情報を取得する場合は、原則として「事前に」本人の同意を得る必要があります。「事後速やかに」という説明は誤りです。"
  },
  { id: "ql-007", category: "laws",
    question: "不正競争防止法に関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["不正競争防止法は、事業者間の公正な競争を確保し、健全な経済発展を促すことを目的の一つとしている。", "需要者の間で広く認識されている他人の商品・営業表示と同一または類似の表示を使用して、他人の商品・営業と誤解させる行為は、不正競争防止法で規制される「混同行為」に該当しない。", "不正競争防止法において「営業秘密」といえるためには、秘密管理性・有用性・非公知性の3つの要件を満たす必要がある。", "不正競争防止法において「限定提供データ」といえるためには、限定提供性・相当量蓄積性・電磁的管理性の3つの要件を満たす必要がある。"],
    answer: 1,
    explanation: "周知な商品等表示の混同行為は不正競争防止法第2条第1項第1号で規制されており、「該当しない」という説明は誤りです。他人の商標・ブランドと紛らわしい表示の使用は規制対象となります。"
  },
  { id: "ql-008", category: "laws",
    question: "AI事業者ガイドラインに関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["AI社会の基本理念として、「人間の尊厳が尊重される社会」「多様な背景を持つ人々が多様な幸せを追求できる社会」「持続可能な社会」の3つが挙げられている。", "AI社会原則において、各主体は人間の尊厳を守りながら、事業における価値の創出と社会課題の解決にAIを活用していくことが求められている。", "AI社会原則の「各主体が取り組む事項」において、各主体はアカウンタビリティを果たすことよりもシステムの秘匿性を優先することが重要であるとされている。", "AI社会原則の「社会と連携した取組が期待される事項」において、すべての人々にAIの恩恵が行き渡るための教育・リテラシー確保の機会を提供・支持することが期待されている。"],
    answer: 2,
    explanation: "AI事業者ガイドラインでは、ステークホルダーへのアカウンタビリティ（説明責任）を果たすことが重要とされています。秘匿性をアカウンタビリティより優先することは求められていません。"
  },
  { id: "ql-009", category: "laws",
    question: "次のうち、インターネットリテラシーの要素に含まれないものはどれか。",
    options: ["プログラミングスキル", "デジタル市民権", "情報リテラシー", "セキュリティ・プライバシー"],
    answer: 0,
    explanation: "インターネットリテラシーは、デジタル市民権・情報リテラシー・セキュリティ・プライバシー保護などを含む概念です。プログラミングスキルはインターネットリテラシーの構成要素には含まれません。"
  },

  // ── 最新動向（スクリーンショットから追加） ───────────────────────────
  { id: "qt-001", category: "trends",
    question: "AIの歴史とシンギュラリティに関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["第一次AIブームは、1956年のダートマス会議から始まり、ルールベースのシステムが複雑な問題に対応できないことが明らかになることで、冷静化した。", "第二次AIブームでは「エキスパートシステム」が注目されたが、このシステムは専門外の知識を確認したり新しい知識を容易に登録したりできるという利点があった。", "第三次AIブームは2010年代に始まり、主な特徴としてビッグデータの活用とディープラーニング技術の発展が挙げられる。", "シンギュラリティとは、ある点を境にAIが人間の知性を超越することをいい、2045年頃に起きると予測されることから「2045年問題」とも呼ばれる。"],
    answer: 1,
    explanation: "エキスパートシステムの主な課題は「知識の瓶頭（ボトルネック）」で、専門知識の入力・更新・管理が困難だったことです。「容易に登録できる利点があった」という説明は実際の課題と逆で、誤りです。"
  },
  { id: "qt-002", category: "trends",
    question: "AIエージェントとMCPに関する次の記述のうち、誤った説明をしているものはどれか。",
    options: ["AIエージェントは、あらかじめ決められた質問に答えるだけのチャットボットを指し、自律的に計画や改善を行うものではない。", "AIエージェントには、作業手順が明確なタスクに向く「ワークフロー型」と、状況が流動的なタスクに向く「自律型」がある。", "AIエージェントに適する業務としては受注処理や請求書発行等があり、自律型AIエージェントに適する業務としてはマーケット分析等がある。", "MCPとは、Anthropic社が公開した共通ポートであり、オープンスタンダードで、LLMと外部のツールやデータソースを安全に接続することができる。"],
    answer: 0,
    explanation: "AIエージェントは単なるチャットボットとは異なり、目標達成に向けて自律的に計画を立て、ツールを使用し、行動・改善を繰り返すシステムです。「チャットボットを指す」という説明は誤りです。"
  },

  // ── サンプル問題より追加 ──────────────────────────────────────────
  { id: "sq-003", category: "basics",
    question: "次元削減に関する次の記述のうち、最も適切なものを1つ選びなさい。",
    options: ["主成分分析（PCA）は、データの分散が最大となる直交する新しい軸（主成分）を生成し、元のデータの情報を効率的に保持しながら次元を削減する手法である。", "t-SNEは、主に特徴選択を行うためのアルゴリズムであり、既存の特徴量の中から統計的に重要なものを自動的に選び出す。", "次元削減は、データセットから特徴量を減らすことで、必ずモデルの予測精度を向上させ、過学習のリスクを完全に排除する。", "次元削減は、データの特徴量が多い場合にのみ適用され、少ない特徴量のデータセットでは計算負荷が増大するため推奨されない。"],
    answer: 0,
    explanation: "主成分分析（PCA）は、データの分散が最大となる方向を新たな軸として定義し、情報の損失を最小限に抑えつつ次元を削減します。t-SNEは高次元データの可視化に用いられる次元削減手法であり、次元削減は必ずしも精度向上や過学習の完全排除を保証するものではありません。"
  },
  { id: "sq-004", category: "basics",
    question: "機械学習における「ノーフリーランチ定理」の考え方として、最も適切なものを1つ選びなさい。",
    options: ["あらゆる機械学習アルゴリズムは、どのようなデータに対しても同等の性能を発揮する。", "データセットの特性を考慮せず、常に同じ万能なアルゴリズムを用いるべきである。", "特定の問題で優れた性能を示すアルゴリズムは、他の問題では最適とは限らないため、問題に応じたアルゴリズムの選択が重要である。", "十分な計算資源があれば、いずれすべてのタスクに対応できる万能なAIモデルが開発される。"],
    answer: 2,
    explanation: "ノーフリーランチ定理は、「いかなる機械学習アルゴリズムも、すべての問題に対して普遍的に最適な性能を発揮するわけではない」ことを示しています。問題の特性に合わせた最適なアルゴリズム選択が重要です。計算資源の量とは無関係な数学的定理です。"
  },
  { id: "sq-005", category: "basics",
    question: "AIの学習における「特徴量」に関する記述として、最も適切なものを1つ選びなさい。",
    options: ["レベル1のAIは、自律的に多様な特徴量を抽出し、複雑な問題を解決する。", "レベル2のAIは、人間が設定したルールそのものを特徴量として学習を進める。", "レベル3のAIでは、与えられたデータから人間が学習に必要な特徴量を抽出し、機械学習モデルに入力する。", "レベル4のAIは、特徴量の設定や調整を人間が詳細に行うことで、深層学習を効果的に活用する。"],
    answer: 2,
    explanation: "レベル3のAIでは、人間が特定のタスクに必要な特徴量を抽出し、それを基に機械学習モデルが学習を行います。レベル1は単純な制御プログラム（AI家電等）、レベル2はルールベースAI（チャットボット等）、レベル4はディープラーニング（AIが自律的に特徴量を抽出・自動運転等）です。"
  },
  { id: "sq-006", category: "basics",
    question: "「強いAI（AGI）」と「弱いAI（ANI）」に関する記述として最も適切なものを1つ選びなさい。",
    options: ["ANIは汎用的な知能を持ち、AGIは特定のタスクに特化している。", "AGIは現在実用化されているが、ANIはまだ研究段階である。", "ANIは特定の領域で人間を超える性能を発揮するが、AGIは人間と同様にあらゆる知的タスクをこなせる汎用的な知能を目指している。", "AGIは常に人間よりも優れた判断を下すことができるが、ANIは限定的な状況でのみ有効である。"],
    answer: 2,
    explanation: "ANI（Artificial Narrow Intelligence：弱いAI）は画像認識・チェスなど特定タスクで人間を超えることがありますが、汎用性はありません。AGI（Artificial General Intelligence：強いAI）は人間のように幅広い分野で学習・推論できる汎用知能を目指しています。現在実用化されているのはANIです。"
  },
  { id: "sq-007", category: "services",
    type: "multiple",
    question: "GPTストアに関する次の記述のうち、正しいものをすべて選びなさい。",
    options: ["GPTストアで公開されるGPTsは、OpenAIの社員によって全て事前に厳格な審査を受けている。", "GPTストアでは、特定のGPTsの利用数に応じて作成者が収益を得られる仕組みが存在する。", "GPTストアに公開したGPTsは、後から非公開に設定変更することはできない。", "GPTストアのGPTsは、ChatGPTの無料プラン・有料プランを問わず利用できる。"],
    answer: [1, 3],
    explanation: "GPTストアではGPT Builder Revenue Programにより、利用数に応じて作成者に報酬が支払われます（(b)正しい）。公開後の非公開変更も可能です（(c)誤り）。また現在は無料プランユーザーも利用できます（(d)正しい）。審査は全て社員が行うわけではありません（(a)誤り）。"
  },
  { id: "sq-008", category: "services",
    question: "Copilotに関する説明として不適切なものを1つ選びなさい。",
    options: ["かつて「Bing Chat」や「Bing Chat Enterprise」といった名称で提供されていたAIチャット機能が、Copilotブランドに統合されている。", "Copilot for Microsoft 365は、ユーザーのメール・カレンダー・ドキュメントなどMicrosoft Graph内のデータを活用して、よりパーソナライズされた支援を提供する。", "企業向けのCopilot for Microsoft 365は、GDPRやISO 27001などの高いセキュリティおよびコンプライアンス基準に準拠して設計されている。", "Windows OSに標準搭載されているCopilotの機能により、すべてのユーザーがWordやExcelなどのローカルファイル内容を直接参照し、要約や生成を行うことができる。"],
    answer: 3,
    explanation: "Windows標準搭載のCopilotはWeb情報や限定的なOS機能との連携は可能ですが、WordやExcelなどのローカルファイルを高度に参照・要約・生成する機能は、主にCopilot ProやCopilot for Microsoft 365（有償）で提供されます。無料版での深度あるローカルファイル連携は限定的です。"
  },
  { id: "sq-009", category: "basics",
    question: "ボルツマンマシンが初期の生成モデルとして評価される理由として、最も適切なものを1つ選びなさい。",
    options: ["明示的に確率分布を学習し、データに似た新たなデータを生成する能力があったため、生成モデルの基礎を築いた。", "決定論的な推論プロセスを通じて、既知のデータから最も確実な単一の予測結果を生成することを目的としていた。", "主に画像認識や分類タスクにおいて高い性能を発揮し、初期の識別モデルの主流となった。", "教師なし学習による高精度な特徴抽出は可能であったものの、新たなデータを生成する能力は持たなかった。"],
    answer: 0,
    explanation: "ボルツマンマシンは、与えられたデータからその背後にある確率分布を学習し、その分布に従う新たなデータを生成する能力を持つ点で、初期の生成モデルとして重要でした。この特性が、その後のGANやVAEへと繋がる道を開きました。確率的モデルであり、決定論的推論は行いません。"
  },
  { id: "sq-010", category: "basics",
    question: "BERTの事前学習タスクであるNext Sentence Prediction（NSP）の主な目的として、最も適切なものを1つ選びなさい。",
    options: ["文中の特定の単語が欠落している場合に、その単語を予測し、文法的な補完能力を高める。", "連続する2つの文の意味的な関連性を理解し、文間の関係性推論能力を向上させる。", "長文において単語の絶対的な位置情報を学習し、単語間の距離感を正確に把握する。", "異なる言語間の翻訳タスクにおいて、文全体の意味的整合性を保ちながら単語を置換する。"],
    answer: 1,
    explanation: "NSPは、入力された2つの文が連続した文章であるかどうかを予測するタスクです。BERTはこれにより文間の意味的なつながりや論理的な関係性を学習します。「文中の欠落した単語を予測する」のはMLM（Masked Language Model）タスクです。"
  },
  { id: "sq-011", category: "services",
    question: "GPT-4oの主要な特徴に関する説明として、最も適切なものを1つ選びなさい。",
    options: ["画像生成に特化しており、テキストや音声入力には対応していない。", "音声認識と音声合成の能力のみを持ち、テキストや画像は扱えない。", "テキスト・音声・画像の複数モダリティを統合的に理解し、生成する能力を持つ。", "完全にオフライン環境で動作し、インターネット接続なしで利用できる。"],
    answer: 2,
    explanation: "GPT-4oは、テキスト・音声・画像といった複数のモダリティの入力を統合的に理解し、それらの形式で出力を生成できるマルチモーダルなモデルです。クラウドベースのモデルであり、利用にはインターネット接続が必要です。"
  },
  { id: "sq-012", category: "services",
    question: "Soraをはじめとする動画生成AIに関する記述として不適切なものを1つ選びなさい。",
    options: ["生成された動画は現実と見分けがつかないほど高品質であるため、ディープフェイクなどの悪用リスクを孕む。", "現実の物理法則を理解し反映する能力を持つため、科学シミュレーションやデジタルツインの分野での応用が期待される。", "動画生成プロセスにおいて、プロンプトに指定されたテキスト情報のみを考慮し、時間軸におけるオブジェクトの一貫性は維持されない。", "特定のスタイルやアートディレクションに基づいた動画コンテンツを、クリエイターの意図に合わせて短時間で生成できる可能性がある。"],
    answer: 2,
    explanation: "Soraは、生成される動画内のオブジェクトやキャラクターが時間を通じて一貫性を保つように設計されています。「オブジェクトの一貫性は維持されない」という説明は誤りです。複数のショットや複雑なシーンでも主題が安定して描写されることを目指しています。"
  },
  { id: "sq-013", category: "trends",
    type: "multiple",
    question: "AIエージェントに関する次の記述のうち、適切なものをすべて選びなさい。",
    options: ["複雑なタスクにおいて、目標達成のために自ら計画を立案し、実行プロセスを調整することが可能である。", "ワークフロー型AIエージェントは、予期せぬエラーやイレギュラーな状況が発生しても、その場で自己判断して最適な対応をとることができる。", "既存のシステムやサービスと連携し、複数のツールを横断して一連の業務を自動化するのに適している。", "単純な定型業務の自動化のみに特化しており、高度な意思決定を伴う業務への適用は困難である。"],
    answer: [0, 2],
    explanation: "AIエージェントは目標達成のために自律的に計画・実行・調整ができます（(a)正しい）。また複数のツールやサービスと連携して業務を横断的に自動化できます（(c)正しい）。ワークフロー型は想定内の手順に従うため予期せぬ状況への自己判断は困難です（(b)誤り）。定型業務以外の複雑なタスクにも適用可能です（(d)誤り）。"
  },
  { id: "sq-014", category: "prompting",
    question: "テキスト生成AIの性能を最大限に引き出すために最も重要とされる技術や考え方として、適切なものを1つ選びなさい。",
    options: ["大規模なGPUリソースを常に確保すること", "モデルの内部構造を完全に理解すること", "入力する指示（プロンプト）を工夫して明確にすること", "多数の異なるAIモデルを並行して利用すること"],
    answer: 2,
    explanation: "プロンプトエンジニアリングとは、AIに与える指示（プロンプト）を設計・最適化することで、AIが期待通りの質の高い出力を生成するように導く技術です。明確で具体的なプロンプトは、AIの性能を最大限に引き出す上で極めて重要です。GPUリソースやモデルの内部理解は一般利用者にとって主要な要素ではありません。"
  },
  { id: "sq-015", category: "risks",
    question: "ディープフェイク技術の原理と検出に関する記述として、最も適切なものを1つ選びなさい。",
    options: ["ディープフェイクの生成には、主に強化学習が用いられ、報酬に基づいて偽のデータを作成する。", "現在のディープフェイク検出技術は、生成されたコンテンツに必ず残る「デジタル透かし」を頼りに識別を行う。", "ディープフェイクは、GAN（敵対的生成ネットワーク）などのAIモデルを用いて、リアルな映像や音声を生成する。", "ディープフェイクによって作成されたコンテンツは、人間の目には不自然に見えるため、容易に識別できる。"],
    answer: 2,
    explanation: "ディープフェイク技術は主にGAN（敵対的生成ネットワーク）を用いて、本物と見分けがつかないほどリアルな画像・映像・音声を生成します。「デジタル透かし」は普遍的な検出方法ではなく、現在のディープフェイクは高精度で人間の目での識別は困難です。"
  },
  { id: "sq-016", category: "trends",
    question: "AIエージェントにおける「ツール利用」が果たす役割として最も適切なものを1つ選びなさい。",
    options: ["LLMが持つ内部知識だけで全てのタスクを完結させるために、外部情報の参照を不要にする。", "エージェントが外部環境とインタラクトし、リアルタイムな情報収集や具体的なアクションを実行するための手段を提供する。", "エージェントの内部的な推論や意思決定プロセスを指し、外部との連携とは直接関係しない。", "主に事前定義された手順に従うワークフロー型エージェントにのみ適用され、自律型エージェントには不要である。"],
    answer: 1,
    explanation: "AIエージェントにおける「ツール利用」は、LLMが直接できない計算・インターネット検索・データベースアクセス・API連携などの外部機能を利用することで、エージェントが現実世界とインタラクトし、より複雑で実用的なタスクを遂行するための不可欠な要素です。"
  },
  { id: "sq-017", category: "basics",
    question: "画像データに対するデータ拡張（Data Augmentation）の一般的な手法として、不適切なものを1つ選びなさい。",
    options: ["画像を左右に反転させる。", "画像をランダムな角度で回転させる。", "画像のコントラストや明るさを調整する。", "画像の解像度を意図的に低下させ、ファイルサイズを削減する。"],
    answer: 3,
    explanation: "データ拡張はモデルの汎化性能向上を目的として既存データに多様性を与える手法です。左右反転・回転・明度調整などはデータ拡張として適切です。しかし「ファイルサイズを削減する」ことを目的とした解像度低下は、学習に必要な情報を損なう可能性があるためデータ拡張としては不適切です。"
  },
  { id: "sq-018", category: "basics",
    question: "音声生成AIの技術的特徴や能力に関する説明として最も適切なものを1つ選びなさい。",
    options: ["音声生成AIは、主にText-to-Speech（TTS）技術のみを指し、声質や話し方をカスタマイズすることはできない。", "音声生成AIは、ディープラーニング技術の進展により、短い音声サンプルから特定の人物の声質を模倣し、その声で任意のテキストを発話させることが可能である。", "リアルタイムでの音声生成は技術的に困難であり、現在の音声生成AIは全てバッチ処理でしか利用できない。", "生成された音声に感情や抑揚を含ませることはできず、常に単調な音声しか生成できない。"],
    answer: 1,
    explanation: "音声生成AIは、ディープラーニングの進化により、数秒程度の短い音声データからでも特定個人の声質・話し方・アクセントなどを学習し、任意のテキストをその声で生成する「ボイスクローニング」が可能です。リアルタイム音声生成も実現されており、感情・抑揚を含む音声の生成も可能です。"
  },
  { id: "sq-019", category: "laws",
    question: "生成AIが発明の生成に大きく貢献した場合において、その発明が特許として認められるための要件について、最も適切な記述はどれか。",
    options: ["生成AI自身が発明者として特許出願に明記される必要がある。", "人間による創造的寄与が全くなくても、AIが生成した革新的な発明であれば特許は認められる。", "発明の本質的な部分に人間による創造的な関与がある場合に、特許出願が可能となる。", "生成AIが生成した発明は、その性質上、特許法上の「発明」とはみなされない。"],
    answer: 2,
    explanation: "現在の多くの国・地域の特許制度では「発明者」は自然人（人間）であることが前提とされており、AIを発明者として認めない運用が一般的です。生成AIが貢献した場合でも、発明の本質的な部分に人間の創造的関与があり、その人間を発明者として特定できる場合に特許出願が可能です。"
  },
  { id: "sq-020", category: "security",
    question: "ソーシャルエンジニアリング攻撃の主な目的として最も適切なものを1つ選びなさい。",
    options: ["ネットワーク機器の物理的な破壊を通じて、システムの稼働を停止させること", "人間の心理的な隙や行動上の誤りを悪用し、機密情報などを不正に取得すること", "セキュリティソフトの脆弱性を自動的に発見し、修正プログラムを適用すること", "プログラムのバグを特定し、パッチを配布することでシステムの安定性を高めること"],
    answer: 1,
    explanation: "ソーシャルエンジニアリング攻撃は、システムの技術的な脆弱性ではなく、人間の心理や行動の弱点を利用して、パスワードや機密情報などを騙し取ったり、不正な操作を行わせたりする攻撃手法です。フィッシング・プリテキスティング・ベイト攻撃などがその例です。"
  },
  { id: "sq-021", category: "laws",
    question: "匿名加工情報の取り扱いに関する記述として、最も適切なものを1つ選びなさい。",
    options: ["匿名加工情報を作成する際は、元の個人情報への復元を可能にする情報を別途保管する必要がある。", "匿名加工情報は、元の個人情報とは異なる利用目的であっても、利用目的の変更手続きなしに利用できる。", "匿名加工情報を提供する場合、提供先は本人から利用目的の同意を得る必要がある。", "匿名加工情報を取り扱う事業者は、その安全管理のために、従業員に対する監督義務を負わない。"],
    answer: 1,
    explanation: "匿名加工情報は特定の個人を識別できない情報であるため、元の個人情報の利用目的の範囲に縛られず、利用目的の変更手続きも不要で自由に利用できます。ただし、復元を可能にする情報の保管は禁止されており、事業者には安全管理措置・従業員監督義務があります。"
  },
  { id: "sq-022", category: "laws",
    question: "生成AIを使用して作成した画像が肖像権を侵害する可能性がある行為として、最も適切なものを1つ選びなさい。",
    options: ["生成AIで著名人の顔の特徴を学習させ、その特徴を持つ架空の人物画像を生成し、自身のブログ記事の挿絵として利用した場合", "自分の顔写真を生成AIに入力し、アニメ風に変換した画像を友人とのチャットアプリのアイコンとして設定した場合", "許可を得た上で友人の顔写真を生成AIで加工し、誕生日メッセージとしてその友人にのみ送付した場合", "インターネット上で公開されている一般人の写真をAIで学習させ、その人物に似た画像を生成し、その人物の同意を得ずに広告に使用した場合"],
    answer: 3,
    explanation: "生成AIで生成した画像であっても、実在の人物の肖像を識別できる形で無断で商業目的に利用した場合、人格権としての肖像権侵害に該当する可能性が非常に高くなります。本人の同意なく商業広告に利用することは、一般人であっても権利侵害と判断されることが一般的です。"
  },
  { id: "sq-023", category: "laws",
    question: "不正競争防止法における「営業秘密」の要件である「秘密管理性」の取り組みとして、最も不適切なものを1つ選びなさい。",
    options: ["営業秘密を含む文書に「部外秘」と明記し、施錠されたキャビネットに保管すること", "営業秘密が記録されたデジタルデータにアクセス権限を設定し、特定の従業員のみが閲覧・編集できるようにすること", "営業秘密を扱う従業員に対し、定期的に秘密保持に関する研修を実施し、周知徹底すること", "営業秘密情報を共有のファイルサーバーにパスワードなしで保存し、全従業員が自由にアクセス・閲覧できるようにすること"],
    answer: 3,
    explanation: "「秘密管理性」とは、企業がその情報を秘密として管理していることを客観的に認識できる状態を指します。パスワードなしで誰でもアクセスできる状態は秘密管理の措置を欠いており、「営業秘密」としての保護を受けられません。施錠・アクセス権限設定・研修などが適切な管理措置です。"
  },
  { id: "sq-024", category: "risks",
    question: "AIの公平性に関する記述として、最も適切なものを1つ選びなさい。",
    options: ["AIの公平性を確保するためには、アルゴリズムの複雑さを極限まで高め、人間には理解できないようにすることが最善である。", "AIの公平性は、データセットに含まれる性別や人種などの属性情報を全て削除することで完全に実現できる。", "AIの公平性とは、特定の個人やグループに対して不当な差別や偏見を生じさせないように設計・運用することである。", "AIの公平性は、技術的な問題ではなく、倫理的な議論のみで解決できるため、開発者は関与する必要がない。"],
    answer: 2,
    explanation: "AIの公平性とは、システムが特定の個人やグループに対し、不当な差別や不利益をもたらす可能性を低減し、公正な結果を導くよう設計・運用することです。属性情報の単純削除では「代理変数」の問題が残り、開発者の技術的な関与も不可欠です。"
  },
  { id: "sq-025", category: "basics",
    question: "テキスト生成AIが苦手とする領域として、最も適切なものを1つ選びなさい。",
    options: ["既存のデータを基にした市場トレンドの予測", "過去の芸術作品に対する客観的な歴史的背景の記述", "最新の現代アート作品に対する独自の感性に基づく批評", "大量のテキストデータからの特定のキーワード抽出"],
    answer: 2,
    explanation: "テキスト生成AIは学習データに基づいて文章を生成しますが、人間のような固有の感性や一次的な体験に基づく主観的価値判断を「自らのものとして」持つことはできません。学習データに十分含まれていない最新作品についての感性的な批評は特に苦手です。市場予測・歴史的背景記述・キーワード抽出はAIが比較的得意な領域です。"
  },
  { id: "sq-026", category: "business",
    question: "テキスト生成AIを社内報告書の作成に活用する際の適切なアプローチとして、最も適切なものを1つ選びなさい。",
    options: ["AIが生成した内容は全て正確であるため、事実確認は必要なく、そのまま最終版として利用できる。", "最新の社内情報や機密情報については、AIに学習させることで、安全かつ効率的に報告書を作成できる。", "AIに報告書のドラフト作成を依頼し、その内容を人間が確認・修正することで、効率と品質の両立を図る。", "AIに報告書作成を完全に任せることで、従業員は報告書に関する業務から完全に解放されるため、他の業務に専念できる。"],
    answer: 2,
    explanation: "テキスト生成AIは報告書のドラフト作成を効率化しますが、生成される情報には誤りや古い内容が含まれる可能性があります。機密情報をAIに入力する際は情報漏洩リスクに注意が必要です。最終的な品質保証と責任は人間に帰属します。"
  },
  { id: "sq-027", category: "prompting",
    question: "次のシナリオのうち、Few-Shotプロンプティングの活用が特に有効と考えられるのはどれか。",
    options: ["「地球は丸い」といった一般常識に関する質問に回答を生成する場合。", "AIに「こんにちは」と入力し、簡単な挨拶の返事を求める場合。", "特定の専門分野における未知の質問に対し、回答例を一切示さずにAIの推論能力に期待する場合。", "AIに、特定のスタイルや形式を持つ複数の文章の生成例を示し、同様のスタイルで新しい文章を作成させたい場合。"],
    answer: 3,
    explanation: "Few-Shotプロンプティングは、AIに特定の出力スタイルや形式（詩の形式・業界レポートの体裁・特定のトーンなど）を模倣させたい場合に特に有効です。複数の例を示すことで、AIはその共通パターンを学習し、より適切な新しい内容を生成できます。一般常識・簡単な挨拶はZero-Shotで十分です。"
  },
  { id: "sq-028", category: "prompting",
    question: "AIに「新しい技術トレンドについて教えてください」とだけ入力したとき、漠然とした回答が生成される主な原因として、プロンプトのどの要素が不足していると考えられますか。",
    options: ["命令（Instruction）", "温度（Temperature）", "コンテキスト（Context）", "出力形式（Output Format）"],
    answer: 2,
    explanation: "「コンテキスト（Context）」は、AIが回答する際に参照する背景情報や状況を提供します。「どの分野のトレンドか」「誰に向けた情報か」「何の目的で必要か」といった具体的なコンテキストが不足すると、AIは漠然とした回答を生成しやすくなります。「温度」はAPIの生成パラメータであり、プロンプトの構成要素ではありません。"
  },
  { id: "sq-029", category: "prompting",
    type: "multiple",
    question: "生成AIのプロンプトを設計する際の基本的な原則として、適切なものをすべて選びなさい。",
    options: ["プロンプトを簡潔にし、AIが自由に解釈できるようにする", "曖昧な表現を避け、具体的な言葉で指示する", "出力したい内容のフォーマットを明示的に指定する", "複雑なタスクでは、段階的な思考プロセスを促す"],
    answer: [1, 2, 3],
    explanation: "効果的なプロンプト設計の原則として、曖昧な表現を避け具体的に指示すること（(b)正しい）、出力フォーマットを明示すること（(c)正しい）、複雑なタスクでは段階的思考（Chain-of-Thought）を促すこと（(d)正しい）が挙げられます。「AIが自由に解釈できるようにする」という方針は意図しない結果を招くため不適切です（(a)誤り）。"
  },

  // ── セキュリティ追加問題 ──────────────────────────────────────────
  { id: "sec2-001", category: "security",
    question: "プロンプトインジェクション攻撃に関する説明として、最も適切なものはどれか。",
    options: ["AIモデルのトレーニングデータに悪意あるデータを混入させ、モデルの挙動を操作する攻撃手法", "悪意ある指示をプロンプトに埋め込み、AIシステムに意図しない動作や情報漏洩を引き起こす攻撃手法", "AIシステムの応答から逆算して、元のトレーニングデータを復元しようとする攻撃手法", "AIモデルの判断基準を解析し、誤分類を引き起こす入力を意図的に生成する攻撃手法"],
    answer: 1,
    explanation: "プロンプトインジェクションは、AIシステムへの入力（プロンプト）に悪意ある指示を埋め込み、セキュリティポリシーの迂回・機密情報の漏洩・意図しないコマンドの実行などを引き起こす攻撃手法です。(a)はデータポイズニング、(c)はモデル反転攻撃、(d)はAdversarial Exampleの説明です。"
  },
  { id: "sec2-002", category: "security",
    question: "データポイズニング攻撃の説明として、最も適切なものはどれか。",
    options: ["AIモデルに対して大量のリクエストを送信し、サービスを停止させる攻撃", "AIモデルの学習データに悪意ある不正データを混入させ、モデルの精度や挙動を意図的に低下・変更させる攻撃", "AIシステムのAPIエンドポイントに不正アクセスし、認証情報を盗む攻撃", "AIモデルの推論結果を改ざんし、ユーザーに誤った情報を提供する攻撃"],
    answer: 1,
    explanation: "データポイズニングは、機械学習モデルの学習段階でトレーニングデータに不正なデータを混入させる攻撃です。これにより、モデルが特定のパターンを誤学習し、攻撃者が意図した誤った判断を下すよう操作されます。モデルの信頼性や精度に深刻な影響を与えます。"
  },
  { id: "sec2-003", category: "security",
    question: "モデル反転攻撃（Model Inversion Attack）に関する説明として最も適切なものはどれか。",
    options: ["AIモデルのパラメータを盗み出し、同一のモデルを複製する攻撃", "AIモデルへの入力を操作してシステムをクラッシュさせる攻撃", "AIモデルの出力や予測結果を分析することで、トレーニングに使用されたデータの情報を推定・復元しようとする攻撃", "正規ユーザーになりすましてAIシステムへ不正アクセスする攻撃"],
    answer: 2,
    explanation: "モデル反転攻撃は、機械学習モデルへのクエリとその出力を繰り返し分析することで、そのモデルが学習したデータに関する機密情報（個人の顔画像や医療データなど）を復元しようとする攻撃です。プライバシー侵害の重大なリスクとなります。"
  },
  { id: "sec2-004", category: "security",
    question: "情報セキュリティの基本的な3要素（CIAトライアド）として、正しい組み合わせはどれか。",
    options: ["機密性・整合性・可用性", "機密性・一貫性・信頼性", "正確性・整合性・可用性", "機密性・完全性・拡張性"],
    answer: 0,
    explanation: "情報セキュリティのCIAトライアドとは、Confidentiality（機密性）・Integrity（整合性）・Availability（可用性）の3要素です。機密性は不正なアクセスからの保護、整合性はデータの正確さの維持、可用性は必要なときにシステムやデータにアクセスできることを意味します。"
  },
  { id: "sec2-005", category: "security",
    question: "ゼロトラストセキュリティの考え方として、最も適切なものはどれか。",
    options: ["社内ネットワーク内のすべての通信を信頼し、外部からのアクセスのみを厳格に管理する", "ユーザーの役職に応じてアクセス権限を一括付与し、業務効率を優先するセキュリティモデル", "ネットワークの場所や既存の認証状態に関わらず、すべてのアクセス要求を常に検証するセキュリティモデル", "AIシステムのみに適用される新しいセキュリティフレームワークであり、従来のシステムには不要"],
    answer: 2,
    explanation: "ゼロトラストセキュリティは「信頼しない、常に検証する（Never Trust, Always Verify）」の原則に基づき、社内外を問わず全てのアクセスに継続的な認証・認可・検証を求めるセキュリティモデルです。境界型セキュリティ（内部は安全という前提）の限界を克服するために普及しています。"
  },
  { id: "sec2-006", category: "security",
    question: "生成AIの普及がサイバーセキュリティに与える影響として、最も適切なものはどれか。",
    options: ["AIが攻撃パターンをすべて自動検知するため、サイバー攻撃のリスクは大幅に低下する", "フィッシングメールの自動生成・高品質化など、AIを悪用した攻撃の巧妙化・大規模化が懸念される", "生成AIは防御にのみ使用され、攻撃への悪用は技術的に不可能である", "AIによるセキュリティ管理の自動化により、人間によるセキュリティ監視は不要になる"],
    answer: 1,
    explanation: "生成AIの普及により、高品質なフィッシングメールの大量生成、マルウェアコードの自動作成、ソーシャルエンジニアリング攻撃の高度化など、サイバー攻撃の巧妙化・低コスト化が進んでいます。AIは防御にも活用できますが、攻撃への悪用も現実の脅威です。"
  },
  { id: "sec2-007", category: "security",
    question: "生成AIサービスの利用規約に違反する行為として、最も適切なものはどれか。",
    options: ["業務効率化のためにAIを活用してレポートのドラフトを作成する", "AIに質問してプログラミングのデバッグに役立てる", "AIを使って大量のスパムメールや詐欺コンテンツを自動生成・配信する", "AIを活用して外国語のドキュメントを翻訳する"],
    answer: 2,
    explanation: "スパムや詐欺コンテンツの生成・配信は、ほぼすべての生成AIサービスの利用規約で明示的に禁止されている行為です。生成AIは合法的な業務効率化・学習支援・創作活動などに活用することが想定されており、違法・有害なコンテンツの生成や第三者への損害を目的とした使用は禁止されています。"
  },
  { id: "sec2-008", category: "security",
    question: "AIシステムでセキュリティインシデントが発生した場合の対応として、最も適切なものはどれか。",
    options: ["インシデントを発見した担当者が個人の判断で対処し、上司や関係者への報告は後回しにする", "速やかに関係部門・責任者へ報告・エスカレーションし、定められたインシデント対応手順に従って組織的に対処する", "AIシステムのインシデントは技術的な問題であるため、経営層への報告は不要で技術チームのみで対応する", "インシデントの影響範囲を把握するまでシステムを稼働し続け、調査完了後に停止を判断する"],
    answer: 1,
    explanation: "セキュリティインシデント発生時は、迅速な報告・エスカレーションと組織的な対応が重要です。インシデント対応計画（IRP）に従い、封じ込め→根絶→復旧→事後分析のプロセスで対処します。個人判断による対応遅延や報告の先送りは被害を拡大させるリスクがあります。"
  },
  { id: "sec2-009", category: "security",
    question: "生成AIのハルシネーションがセキュリティ上のリスクとなる具体例として、最も適切なものはどれか。",
    options: ["AIが回答の生成に時間がかかり、サービスの応答性が低下する", "AIがコンテンツフィルターを適切に機能させ、有害情報の出力を拒否する", "AIが存在しないセキュリティ脆弱性情報を事実として提示し、誤った対策が実施される", "AIによる翻訳精度が向上し、多言語での情報共有が促進される"],
    answer: 2,
    explanation: "ハルシネーションにより生成AIが「もっともらしい誤情報」を事実として提示することがあります。セキュリティ分野では、存在しない脆弱性の修正に工数が費やされたり、逆に危険な設定をAIが正しいと誤案内したりするリスクがあります。AI出力を無批判に採用せず、公式ドキュメントや専門家による確認が重要です。"
  },
  { id: "sec2-010", category: "security",
    question: "生成AIサービスを業務で利用する際の個人情報管理として、最も適切な行動はどれか。",
    options: ["業務効率のため、顧客の氏名・連絡先などの個人情報を含む文書をそのまま生成AIに入力して処理させる", "個人情報を生成AIへの入力に含める場合は、事前に社内規定を確認し、必要に応じて匿名化・仮名化処理を行う", "生成AIサービスは入力データを外部に送信しないため、個人情報を含めて入力しても問題ない", "個人情報保護は法務部門の責任であり、現場の担当者はAI利用に関して特段の配慮は不要である"],
    answer: 1,
    explanation: "生成AIサービスは入力データをサービス提供者のサーバーに送信するため、個人情報の入力は情報漏洩リスクを伴います。業務利用時は社内のAI利用規定を確認し、個人情報の匿名化・仮名化、または個人情報を含まない形での入力を心がけることが重要です。"
  },
  { id: "sec2-011", category: "security",
    question: "AIシステムのサプライチェーンセキュリティにおけるリスクとして、最も適切なものはどれか。",
    options: ["AIシステムの計算コストが増加し、運用費用が予算を超過するリスク", "外部から調達したAIモデルやライブラリに悪意あるコードが仕込まれており、システム全体に悪影響を及ぼすリスク", "AIシステムの応答速度が低下し、ユーザーエクスペリエンスが悪化するリスク", "AIシステムの導入によりIT部門の業務量が増加し、既存業務に影響するリスク"],
    answer: 1,
    explanation: "AIのサプライチェーンセキュリティリスクとは、外部から取り込むAIモデル、ライブラリ、データセット、開発ツールなどに悪意ある改ざんやバックドアが含まれているリスクです。信頼できるソースからのみ調達し、コード・モデルの検証や脆弱性スキャンを実施することが重要です。"
  },

  // ── 最新動向（追加3） ─────────────────────────────────────────────
  { id: "tr3-001", category: "trends",
    question: "AI半導体として「NVIDIA H100」「H200」「Blackwell」が注目される理由として正しいものはどれか。",
    options: ["LLMの学習・推論に最適化された高性能GPU（グラフィック処理装置）で、AI開発に不可欠なインフラとして世界的に需要が急増している", "一般家庭向けゲームで使用するために開発されたGPU", "NVIDIAが医療診断専用に開発したチップ", "AI規制に対応するため意図的に性能を制限したGPU"],
    answer: 0,
    explanation: "NVIDIA H100/H200等のGPUはAI/機械学習のワークロードに特化した半導体です。大量の並列計算が可能で、GPT-4等の大規模モデルの学習には数千〜数万枚のGPUが必要です。H100の需要は2023年以降急増し、OpenAI・Microsoft・Google・Meta等の大手テック企業がデータセンターへ大量導入しています。NVIDIAはAIブームによる半導体需要で企業価値が急上昇しました。"
  },
  { id: "tr3-002", category: "trends",
    question: "「オープンソースLLM」の台頭が業界に与える影響として正しいものはどれか。",
    options: ["オープンソースLLMは性能が低く実用的でないため影響は限定的","無償でモデルを利用・改変・配布できるため、大企業・スタートアップ・研究者が独自のカスタマイズを行え、AI技術の民主化と競争加速をもたらしている","オープンソースLLMはセキュリティリスクがないため企業が好んで採用する","オープンソースLLMはAPIでのみ提供される"],
    answer: 1,
    explanation: "Llama（Meta）・Mistral・Qwen（Alibaba）・Gemma（Google）などのオープンソースLLMの登場により、自社サーバーでのプライバシー保護運用・業界特化チューニング・コスト削減が可能になりました。一方でモデルの悪用（有害コンテンツ生成・マルウェア作成への利用）を防ぎにくい課題もあります。クローズドとオープンの両アプローチの競争がAI業界を活性化しています。"
  },
  { id: "tr3-003", category: "trends",
    question: "「Mixture of Experts（MoE）」アーキテクチャの説明として正しいものはどれか。",
    options: ["複数の専門家AIが会議して合意する意思決定フレームワーク", "機械学習の専門家チームが協力してモデルを改善する手法", "複数の「エキスパート」サブネットワークを持ち、入力に応じて使用するエキスパートを動的に選択することで、全体パラメータ数を増やしながら計算コストを抑えるモデル設計", "異なるAI会社のモデルを組み合わせてアンサンブル学習する手法"],
    answer: 2,
    explanation: "Mixture of Expertsは複数の「エキスパート」モジュールとルーターで構成されます。入力が来るとルーターが最適なエキスパートを選択するため、全エキスパートを同時には使わず計算効率が高いです。GPT-4やGemini 1.5にも採用されていると言われており、大規模モデルを効率的にスケールする手法として注目されています。"
  },
  { id: "tr3-004", category: "trends",
    question: "「エッジAI（Edge AI）」の説明として正しいものはどれか。",
    options: ["クラウドの端（エッジ）にあるサーバーでのAI処理", "AIの倫理的な端っこのケースを扱う分野", "最新技術（エッジ）のAIという意味", "スマートフォン・IoTデバイス・カメラ等の端末上で直接AI処理を行うことで、リアルタイム性・プライバシー保護・オフライン動作・通信コスト削減を実現する技術"],
    answer: 3,
    explanation: "エッジAIはクラウドにデータを送らず端末上でAI推論を実行します。Apple「Neural Engine」・Qualcomm「AI Engine」・Google「Tensor」チップ等がスマートフォンに搭載され、顔認識・リアルタイム翻訳・音声認識をオフラインで実現しています。製造現場での異常検知・自動車の自動運転・医療デバイスでのリアルタイム診断などにも使われ、プライバシー保護と低遅延の観点から重要性が増しています。"
  },
  { id: "tr3-005", category: "trends",
    question: "DeepMindが開発した「AlphaFold」が革命的とされる理由として正しいものはどれか。",
    options: ["タンパク質の3次元立体構造をAIで高精度に予測し、数十年かかっていた構造解明を劇的に加速・新薬開発に貢献した", "将棋・囲碁・チェスを同時にプレイできるAI", "量子コンピューターとAIを組み合わせた初のシステム", "ゲノム配列を解読するAIシステム"],
    answer: 0,
    explanation: "AlphaFoldはDeepMind（Google系）が開発したタンパク質構造予測AIです。2020年にCASP（タンパク質構造予測コンテスト）で圧倒的な精度を達成し科学界に衝撃を与えました。タンパク質の立体構造を実験で解明するには数年を要していたものを、AIで数分間で予測可能にしました。2億以上のタンパク質構造データが公開され、創薬・基礎研究に革命をもたらしています。2024年のノーベル化学賞は関連研究者に授与されました。"
  },
  { id: "tr3-006", category: "trends",
    question: "「AI Safety（AIの安全性）」分野の国際的な取り組みとして正しいものはどれか。",
    options: ["AIの安全性は個別企業が独自に対応すれば十分","2023年のブレッチリーサミット（英国）で各国が署名した「ブレッチリー宣言」や、各国のAI Safety Instituteの設立など、フロンティアAIのリスク評価・軽減のための国際協調が進んでいる","AI Safetyはロボット工学のみに関係する","AIの安全性研究はAIの進歩を妨げるため不要"],
    answer: 1,
    explanation: "AI Safetyは高度なAIシステムが人類に与えるリスクを研究・軽減する分野です。2023年11月の英国ブレッチリーサミットでは28カ国がフロンティアAIのリスクに関する「ブレッチリー宣言」に署名しました。英国・米国・日本等にAI Safety Instituteが設立され、大規模AIモデルの安全評価を国際的に実施する体制が構築されています。Anthropicの「Constitutional AI」等、AIの価値観整合（Alignment）研究も重要分野です。"
  },
  { id: "tr3-007", category: "trends",
    question: "「EU AI Act（EU AI規制法）」の主な内容として正しいものはどれか。",
    options: ["EUのAI企業のみを規制し、海外企業は対象外", "AI研究のみを規制し、商用AIは対象外", "AIシステムをリスクレベル（容認不可・高リスク・限定的リスク・最小リスク）に分類し、リスクに応じた義務を課す世界初の包括的AI規制法で、2024年に発効", "汎用AIのみを対象とした規制法"],
    answer: 2,
    explanation: "EU AI Act（AI規制法）は2024年8月に発効した世界初の包括的なAI規制法です。AIをリスクに応じて4分類：①容認不可リスク（社会的信用スコア等）→禁止、②高リスク（採用・医療・重要インフラ等）→厳格な要件、③限定的リスク（チャットボット等）→透明性義務、④最小リスク→規制なし。EU域内でAIを提供・利用する全組織に適用され、違反には最大3,500万ユーロまたは全世界売上高7%の罰則があります。"
  },
  { id: "tr3-008", category: "trends",
    question: "日本政府の「AI戦略」「AI推進に向けた取り組み」として正しいものはどれか。",
    options: ["日本はAI規制に特化し、AI技術の開発には投資していない", "日本はAI分野で独自路線を歩み、国際連携は行っていない", "AIの産業利用を禁止する方向で規制強化を進めている", "生成AI時代のAI戦略として国産LLMの開発支援・AIスタートアップへの投資・AI人材育成・AI関連法整備（AI新法）などを推進している"],
    answer: 3,
    explanation: "日本政府はAI活用推進のため複数の施策を展開しています。①AI戦略会議の設置、②国産LLM開発（Preferred Networks・サイバーエージェント等への支援）、③生成AIの安全・安心なガイドライン策定、④AI新法（人工知能関連技術の研究開発及び活用の推進に関する法律）の成立（2025年）、⑤G7広島AIプロセスへの参加。欧米と比較してイノベーション重視・規制は緩やかなアプローチを取っています。"
  },
  { id: "tr3-009", category: "trends",
    question: "「AI×環境問題（グリーンAI）」として正しいものはどれか。",
    options: ["LLMの学習・推論は大量の電力を消費しCO2を排出する一方、AIが気候変動研究・エネルギー効率化・再生可能エネルギー最適化にも貢献できるという二面性がある", "AIは電力を使わないため環境への影響はゼロ", "AIを使うほど省エネになる", "AI企業はすべてカーボンニュートラルを達成済み"],
    answer: 0,
    explanation: "生成AIの環境負荷：GPT-4等の学習には数百万kWhの電力が必要とも言われ、データセンターの電力消費・水消費が増大しています。一方でAIの正の貢献もあります：①電力網の需要予測・最適化、②原子力・再生可能エネルギーの制御効率化、③気候モデルの精度向上、④エネルギー効率の高い素材・化学物質の発見。「グリーンAI」研究では小規模で高効率なモデル設計も重要テーマです。"
  },
  { id: "tr3-010", category: "trends",
    question: "「ファインチューニング（Fine-tuning）」の説明として正しいものはどれか。",
    options: ["音楽制作において細かい音程を調整すること","汎用的に学習済みの基盤モデルに、特定分野・タスク・企業のデータを追加学習させることで、その用途に最適化されたモデルを作る手法","AIモデルの精度を評価するベンチマーク手法","モデルのパラメータ数を削減して軽量化する技術"],
    answer: 1,
    explanation: "ファインチューニングは事前学習済みモデル（GPT・Llama等）に追加データを使ってさらに学習させ、特定の目的に適応させる手法です。例えば医療記録データでファインチューニングした医療LLM、法律文書データで学習した法律AIなどが作れます。RAG（検索拡張生成）と比較すると：ファインチューニングはモデル自体を更新するため、特定スタイル・形式・ドメイン知識の学習に向いています。ただしコストが高く、データ準備も必要です。"
  },
  { id: "tr3-011", category: "trends",
    question: "LLMの「コンテキストウィンドウ（Context Window）」が拡大されていることの意義として正しいものはどれか。",
    options: ["画面サイズが大きくなりユーザーが見やすくなる", "モデルの学習速度が向上する", "1回のリクエストで処理できるテキスト量が増え、長い文書全体の分析・長期的な会話・大規模コードベースの処理が可能になる", "コンテキストウィンドウは回答精度に影響しない"],
    answer: 2,
    explanation: "コンテキストウィンドウの拡大は大きな実用的意義があります。GPT-4は8K→128Kトークン、Gemini 1.5 Proは最大100万トークンと急速に拡大しています。これにより：①数百ページの文書を一度に分析できる、②長期的な会話の文脈を保持できる、③大規模コードベース全体を参照してバグ修正できる、④複数の長い文書を組み合わせた分析が可能になる、などのユースケースが実現しています。"
  },
  { id: "tr3-012", category: "trends",
    question: "OpenAIの「o1」「o3」シリーズ（推論モデル）の特徴として正しいものはどれか。",
    options: ["テキスト生成速度を向上させた軽量モデル", "画像生成に特化したOpenAIの新モデル", "OpenAIの音声認識モデルのシリーズ名", "回答する前に長い「思考チェーン」を内部で生成し、数学・論理・コーディング等の高度な推論タスクで従来のモデルより大幅に高い精度を発揮する推論特化モデル"],
    answer: 3,
    explanation: "OpenAI o1（2024年9月公開）は問題を解く前に長い内部思考プロセスを経るため、数学オリンピック問題・競技プログラミング・科学的推論で従来のGPT-4を大幅に上回ります。「System 2思考」とも称されます。o3では性能がさらに向上しました。一方で回答に時間がかかりコストが高いため、すべてのタスクに適しているわけではなく、単純な質問応答にはGPT-4oの方が向いています。"
  },
  { id: "tr3-013", category: "trends",
    question: "中国のAIスタートアップ「DeepSeek」が2025年初めに注目された理由として正しいものはどれか。",
    options: ["欧米の主要LLMに匹敵する性能を、大幅に少ない計算コストで実現したオープンソースLLMを公開し、AI開発の効率性に関する議論を呼んだ", "中国政府が開発した国家戦略AIとして公開された", "米国AI企業を買収しようとして国際的問題になった", "世界最大のパラメータ数のモデルを開発した"],
    answer: 0,
    explanation: "DeepSeekは2025年初頭にDeepSeek-R1等のモデルを公開し、GPT-4oやClaude 3に匹敵する性能を持ちながら、はるかに少ない計算リソースで学習したとして世界に衝撃を与えました。NVIDIA H100の輸出規制という制約の中で効率的な訓練手法を確立したとされ、AI開発には莫大な計算リソースが必要という前提を覆す可能性を示しました。米国の半導体輸出規制やAI競争に関する議論を再燃させました。"
  },
  { id: "tr3-014", category: "trends",
    question: "「LLMのベンチマーク評価」に関する説明として正しいものはどれか。",
    options: ["ベンチマークスコアが高いモデルは必ずすべての実業務でも最高","MMLU・HumanEval・MATH等の標準ベンチマークでモデル性能を比較できるが、特定の実業務タスクでの性能は別途評価が必要で、ベンチマーク最適化（汚染）の問題もある","ベンチマークは政府機関が公式に認定したものだけが有効","ベンチマーク評価はモデルの安全性とは無関係"],
    answer: 1,
    explanation: "LLMのベンチマーク：MMLU（一般知識）・HumanEval（コーディング）・MATH（数学）・HellaSwag（常識推論）等が代表的です。重要な注意点：①ベンチマークデータがモデルの学習データに混入する「データ汚染」問題、②特定ベンチマークに過適合した「ベンチマーク最適化」、③実業務のタスクとベンチマークのギャップ。そのためChatbot Arena（ユーザー評価）のような人間による評価や、実際のユースケースでの評価が重視されています。"
  },
  { id: "tr3-015", category: "trends",
    question: "「自律型AIエージェント」の進化として正しいものはどれか。",
    options: ["AIエージェントは単純なチャット応答のみに限定", "エージェントAIは人間の監視なしに完全自律稼働するのが現在の標準", "AIが自律的に計画・ツール使用（Web検索・コード実行・ファイル操作）・自己修正を繰り返して複雑な長期タスクを達成する方向に進化しており、ソフトウェア開発・調査・業務自動化への応用が期待される", "AIエージェントは常に人間と対話しながらでしか動作できない"],
    answer: 2,
    explanation: "AIエージェントはユーザーの依頼を受けて自律的に行動するシステムです。Devin（自律ソフトウェアエンジニア）・OpenAI Operator・Claude Computer Use（PC操作）など、複数ステップの複雑タスクを自律実行できるシステムが登場しています。LangChain・CrewAI等のフレームワークで複数エージェントの協調も可能です。現在は完全自律より「Human-in-the-Loop（人間が確認ポイントで介入）」のアーキテクチャが安全性の観点から推奨されています。"
  },
  { id: "tr3-016", category: "trends",
    question: "「生成AI市場の成長」に関する説明として正しいものはどれか。",
    options: ["生成AI市場は2023年のブームで既にピークアウトした", "生成AIサービスは個人消費者向けのみで産業利用は限定的", "日本市場は生成AIに慎重で採用が最も遅い", "生成AIへの企業投資・VC投資は2023年以降急増し、産業横断的な自動化・効率化への期待から、2030年代に向けて大規模な市場成長が見込まれている"],
    answer: 3,
    explanation: "生成AI市場は急速に成長しています。McKinsey・Goldman Sachs等のレポートでは生成AIが2030年代までにGDP数兆ドル規模の経済価値を生み出す可能性が指摘されています。エンタープライズ向けの生成AIプラットフォーム・AIエージェント・垂直特化型AIの市場が急拡大しています。一方で、ROI実現・品質保証・ガバナンス構築の課題もあり、どの企業・産業が最も恩恵を受けるかは継続的な評価が必要です。"
  },
  { id: "tr3-017", category: "trends",
    question: "「量子コンピューティングとAI」の関係として正しいものはどれか。",
    options: ["現在の生成AIは古典的コンピューターで動作しており、量子コンピューターとAIの本格的統合はまだ研究段階だが、将来的に機械学習の高速化・新素材発見・暗号化への影響が期待される", "量子コンピューターはすでにすべての古典的AIコンピューターより高速", "量子コンピューターとAIは全く無関係な分野", "量子AIはすでに市販されている"],
    answer: 0,
    explanation: "量子コンピューティングはある種の計算（最適化問題・素因数分解・量子系シミュレーション等）で古典的コンピューターを超える可能性がありますが、現在の量子コンピューターはまだエラー率が高く限定的な用途に留まります。AIと量子の接点：①量子機械学習（QML）アルゴリズムの研究、②量子コンピューターによるAI学習の高速化（理論上）、③AIによる量子回路設計の最適化。実用化には数十年かかるとも言われています。"
  },
  { id: "tr3-018", category: "trends",
    question: "「Anthropic社のConstitutional AI（CAI）」の説明として正しいものはどれか。",
    options: ["米国憲法をAIに学習させる政府プロジェクト","AIが守るべき原則（Constitution）を設定し、AIが自己評価・自己修正することでHHH（Helpful・Harmless・Honest）なモデルを効率的に構築するAnthropicが開発した手法","Claude AIの別名","AIに憲法を暗記させて法律問題を解かせる手法"],
    answer: 1,
    explanation: "Constitutional AI（CAI）はAnthropicが開発したAIアライメント手法です。①原則リスト（Constitution）を設定、②AIに自分の回答が原則に違反していないか自己評価させる（AI Feedback）、③修正させる（RLAIF：Reinforcement Learning from AI Feedback）というプロセスを通じ、人間フィードバック（RLHF）に依存せずにより安全で有益なモデルを訓練します。ClaudeはこのCAIで訓練されています。"
  },
  { id: "tr3-019", category: "trends",
    question: "「マルチモーダルAIの最新動向」として正しいものはどれか。",
    options: ["マルチモーダルAIは実験段階でまだ実用化されていない", "マルチモーダルAIはテキストと画像のみを扱える", "テキスト・画像・音声・動画・コードを横断的に入出力できるマルチモーダルモデルが主流になり、GPT-4o・Gemini 1.5・Claude 3等がリアルタイムの画像理解・音声対話を実現している", "マルチモーダルAIは専用ハードウェアなしでは動作しない"],
    answer: 2,
    explanation: "マルチモーダルAIは複数の情報形式（モダリティ）を統合的に処理します。GPT-4oは画像・テキスト・音声をリアルタイムで入出力でき、リアルタイム通訳・視覚的問題解決・感情を持つ音声応答が可能です。Gemini 1.5は動画の長時間分析に対応します。今後は触覚センサー・ロボット制御との統合も期待されており、マルチモーダルへの対応が最先端LLMの標準になりつつあります。"
  },
  { id: "tr3-020", category: "trends",
    question: "「AIとロボティクスの融合」の最新動向として正しいものはどれか。",
    options: ["AIとロボットは異なる分野で今後も融合しない", "ロボットへのAI搭載は法律で禁止されている", "AIロボットはすでに全ての工場で標準的に使われている", "生成AIとロボット工学の融合により、自然言語命令でロボットを制御・複雑な物体操作を可能にする「Foundation Model for Robotics」が急速に発展している"],
    answer: 3,
    explanation: "AIとロボティクスの融合が加速しています。Google DeepMindのRobotics・Tesla Optimus・Boston Dynamics等が自然言語でロボットを制御したり、人間の動作を模倣して学習したりする研究を進めています。Foundation Modelをロボット制御に応用するアプローチ（RT-2等）では、「この物体の中で食べられるものを掴んで」のような抽象的な命令を理解して実行できます。製造・物流・介護・農業への応用が期待されています。"
  },

  // ── トレンド追加問題 ──────────────────────────────────────────────
  { id: "trends2-001", category: "trends",
    question: "RAG（Retrieval-Augmented Generation）の説明として、最も適切なものはどれか。",
    options: ["AIモデルをゼロから大量データで事前学習させる手法であり、モデルの基礎能力を向上させる", "生成AIが回答を生成する際に、外部の知識ベースやデータベースから関連情報を動的に検索・取得して活用する技術", "AIモデルのパラメータを特定のタスク向けに調整することで、専門分野の性能を向上させる手法", "複数のAIモデルの予測を組み合わせて最終的な出力を生成するアンサンブル学習手法"],
    answer: 1,
    explanation: "RAG（検索拡張生成）は、LLMが回答生成時に外部の最新情報や特定ドメインの知識ベースを検索し、その情報をコンテキストとして活用することで、回答の正確性・最新性を向上させる技術です。モデルの再学習なしに最新情報を活用できる点が特徴です。"
  },
  { id: "trends2-002", category: "trends",
    question: "マルチモーダルAIの活用事例として、最も適切なものはどれか。",
    options: ["テキストデータのみを入力として受け付け、高精度な文章要約を生成するシステム", "音声・画像・テキストを統合的に処理し、画像の内容を説明したり音声から議事録を作成したりするシステム", "複数の言語間での翻訳に特化し、テキストの多言語対応を実現するシステム", "大量の数値データを分析し、財務予測を行うシステム"],
    answer: 1,
    explanation: "マルチモーダルAIは、テキスト・画像・音声・動画など複数の形式（モダリティ）のデータを統合的に処理できるAIです。例えばGPT-4oは画像の説明生成・音声認識と応答・テキスト生成を一つのモデルで実現しています。単一モダリティの専門システムはマルチモーダルとは区別されます。"
  },
  { id: "trends2-003", category: "trends",
    question: "AGI（汎用人工知能）の定義として、最も適切なものはどれか。",
    options: ["特定の1つのタスクにおいて人間を超える性能を発揮するAI", "あらゆる知的タスクにおいて人間と同等以上の能力を持ち、自律的に学習・適応できるAI", "医療・法律・財務など専門分野での判断に特化したAIシステム", "自然言語理解に特化し、人間と自然な会話ができるチャットボット型AI"],
    answer: 1,
    explanation: "AGI（Artificial General Intelligence/汎用人工知能）とは、特定タスクに限定されず、推論・学習・問題解決・創造など人間が行うあらゆる知的活動を人間と同等以上の水準で実行できるAIです。現在のAIはANI（特化型AI）の段階にあり、真のAGIはまだ実現していません。"
  },
  { id: "trends2-004", category: "trends",
    question: "エッジAI（Edge AI）の説明として、最も適切なものはどれか。",
    options: ["AIの演算処理をクラウドの大型サーバーに集中させ、高性能な計算資源を最大限活用する技術", "AI処理をデバイス端末（スマートフォン・IoTデバイス等）の側で行うことで、低遅延・オフライン動作・プライバシー保護を実現する技術", "複数のデータセンターをネットワーク接続し、分散処理によってAIの計算速度を向上させる技術", "AIモデルを定期的にクラウドに送信してアップデートし、常に最新モデルを維持する技術"],
    answer: 1,
    explanation: "エッジAIは、クラウドサーバーではなくユーザーのデバイス（スマートフォン、IoTセンサー、車載システムなど）でAI処理を実行する技術です。ネットワーク遅延の削減、オフライン動作、データをデバイス外に送信しないことによるプライバシー保護などのメリットがあります。"
  },
  { id: "trends2-005", category: "trends",
    question: "EU AI Actの特徴として、最も適切なものはどれか。",
    options: ["AIの全用途を均一に規制し、すべてのAIシステムに同じ義務を課す包括的な規制体系", "AIのリスクレベルに応じて規制強度を段階的に設定するリスクベースアプローチを採用している", "AI技術の開発・研究を促進するため、商業利用のみを対象とした規制で研究目的は完全に除外", "AI規制は各EU加盟国が独自に定めるため、国ごとに大きく異なる規制が存在する"],
    answer: 1,
    explanation: "EU AI Actは世界初の包括的なAI規制法であり、AIシステムをリスクレベルに応じて「容認できないリスク」（禁止）「高リスク」（厳格な義務）「限定的リスク」「最小リスク」に分類するリスクベースアプローチを採用しています。2024年に成立し段階的に施行されています。"
  },
  { id: "trends2-006", category: "trends",
    question: "生成AIが創造産業（クリエイティブ産業）に与えている変化として、最も適切なものはどれか。",
    options: ["生成AIにより創造的作業はすべて自動化され、クリエイターの役割はなくなりつつある", "生成AIはツールとして活用されており、クリエイターのアイデア出し・プロトタイプ作成・作業効率化に貢献している", "生成AIは著作権上の問題がすべて解決されているため、あらゆるコンテンツを自由に学習・生成できる", "生成AIはテキスト生成に限定されており、画像・音楽・動画の生成は技術的に不可能である"],
    answer: 1,
    explanation: "生成AIは音楽・画像・映像・テキストなど多様なコンテンツを生成できるツールとして創造産業に普及しています。クリエイターが生成AIを活用してアイデアを素早く具現化したり反復作業を効率化したりする事例が増えています。一方で著作権問題は未解決の課題が多く残っています。"
  },
  { id: "trends2-007", category: "trends",
    question: "基盤モデル（Foundation Model）の説明として、最も適切なものはどれか。",
    options: ["特定の1つのタスクを高精度に解くために、そのタスクの専用データのみで学習されたモデル", "大規模なデータで事前学習された汎用的なモデルで、ファインチューニングや少数ショット学習により様々なタスクに適応できるモデル", "複数の小規模モデルを組み合わせることで大規模モデルと同等の性能を実現するアンサンブルモデル", "オープンソースコミュニティによってのみ開発・公開されるモデルであり、商用利用は禁止されている"],
    answer: 1,
    explanation: "基盤モデル（Foundation Model）は、インターネット上の大量データで大規模事前学習された汎用モデルです。GPT-4、Claude、Geminiなどが代表例で、ファインチューニングや少数ショット学習によって翻訳・要約・コード生成など多様なタスクに適応できる汎用性が特徴です。"
  },
  { id: "trends2-008", category: "trends",
    question: "生成AIの医療・ヘルスケア分野への応用事例として、最も適切なものはどれか。",
    options: ["AIが患者の診断を行い、医師の承認なしに処方箋を自動発行するシステムの普及", "医療文書の作成支援、医療画像の解析補助、創薬候補化合物の探索支援など、医療従事者の業務を補助するAI活用", "生成AIは医療分野への適用が法律で禁止されているため、研究段階にとどまっている", "AIによる完全自律型手術ロボットが世界中の病院で標準的に使用されている"],
    answer: 1,
    explanation: "生成AIは医療分野でカルテ作成・要約の支援、医療画像（X線・MRI）の異常検知補助、創薬候補化合物の探索など医療従事者の業務効率化・支援ツールとして活用されています。ただし最終的な診断・治療の判断は医師が行う「人間による監督」が前提です。"
  },
  { id: "trends2-009", category: "trends",
    question: "LLMのコンテキストウィンドウに関する説明として、最も適切なものはどれか。",
    options: ["コンテキストウィンドウとは、AIモデルが一度に処理できるトークン数の上限であり、大きいほど長い文書や会話履歴を一度に扱える", "コンテキストウィンドウとは、AIモデルの学習に使用したデータセットの総サイズを示す指標である", "コンテキストウィンドウが大きいほどモデルのパラメータ数が少なくなり、処理速度が向上する", "コンテキストウィンドウは、AIモデルが生成できる最大文字数のみを規定し、入力には制限がない"],
    answer: 0,
    explanation: "コンテキストウィンドウとは、LLMが一度の推論で処理できるトークン数の上限です。近年のモデルは数万〜数百万トークンまで拡大しており、長い文書の分析や長い会話履歴の保持が可能になっています。大きいコンテキストウィンドウは理解精度や応答の一貫性向上に寄与します。"
  },
  { id: "trends2-010", category: "trends",
    question: "MCP（Model Context Protocol）の説明として、最も適切なものはどれか。",
    options: ["AIモデルの学習データの品質を管理するための国際標準プロトコル", "AIアシスタントが外部ツールやデータソースと標準化された方法で接続・連携するためのオープンプロトコル", "AIモデル間でパラメータを共有し、協調学習を行うための通信プロトコル", "AIの倫理ガイドラインに準拠しているかを検証するための認証プロトコル"],
    answer: 1,
    explanation: "MCP（Model Context Protocol）はAnthropicが提唱したオープンプロトコルで、AIアシスタントが外部のツール、データベース、APIなどと標準化された方法で接続するための仕様です。MCPにより、AIはWebブラウジング・コード実行・ファイルシステムへのアクセスなど様々な外部リソースを活用できるようになります。"
  },
  { id: "trends2-011", category: "trends",
    question: "大規模AIモデルの学習・運用における環境への影響として、最も適切なものはどれか。",
    options: ["AIモデルはソフトウェアのみで動作するため、環境への影響は実質ゼロである", "大規模AIモデルの学習には膨大な電力を消費するため、CO2排出量などの環境負荷が課題となっている", "AI技術はエネルギー効率を常に向上させるため、AIの普及は環境問題の解決にのみ貢献する", "AIモデルの学習に必要な電力は再生可能エネルギーのみで賄われているため、環境への影響はない"],
    answer: 1,
    explanation: "大規模言語モデルの事前学習には膨大な電力を消費し、大量のCO2を排出します。AI企業の多くはデータセンターの再生可能エネルギー化や効率的なモデル設計（軽量化・量子化）に取り組んでいますが、AI普及による電力需要増加は依然として環境負荷の課題です。"
  },
  { id: "trends2-012", category: "trends",
    question: "生成AIを教育分野で活用する際の適切な考え方として、最も適切なものはどれか。",
    options: ["生成AIは教育の質を低下させるため、学校教育での使用は全面的に禁止すべきである", "生成AIを活用した個別最適化学習や学習支援が可能であるが、批判的思考力・AIリテラシー教育も同時に必要である", "生成AIが全ての説明・問題作成・採点を代替するため、教師の役割は今後不要になる", "生成AIは大学院以上の高度な教育にのみ適しており、初等・中等教育での活用は不適切である"],
    answer: 1,
    explanation: "生成AIは教育分野で個別最適化学習・苦手分野の補完・多言語学習支援などへの活用が期待されています。しかし、AIが生成するコンテンツを批判的に評価する能力（AIリテラシー）の育成や、学習者自身の思考力・探究力の発達を妨げないよう、適切なガイドラインのもとで使用することが重要です。"
  },
  { id: "trends2-013", category: "trends",
    question: "製造業における生成AIの活用事例として、最も適切なものはどれか。",
    options: ["生成AIが設備の設計から製造・品質管理まですべてを自律的に行い、人間の関与が完全に不要になっている", "設計ドキュメントの自動作成、製造ラインの異常検知支援、技術マニュアルの多言語翻訳など、業務効率化への活用が進んでいる", "生成AIは製造業への適用が技術的に困難なため、サービス業のみでの活用に限定されている", "生成AIの活用により製造コストが常に50%以上削減されることが保証されている"],
    answer: 1,
    explanation: "製造業では、設計仕様書・作業手順書の自動ドラフト作成、センサーデータを活用した設備異常の早期検知、技術マニュアルの多言語対応、品質検査画像の解析支援など、業務効率化・品質向上に生成AIが活用されています。完全自律化は現時点では実現していませんが、人間の判断を支援するツールとして広まっています。"
  },

  // ── 業務活用（追加3） ─────────────────────────────────────────────
  { id: "biz3-001", category: "business",
    question: "法務部門での生成AI活用として最も適切なものはどれか。",
    options: ["契約書のドラフト作成・不利条項のチェック・法律文書の要約などにAIを活用し、弁護士・法務担当者が最終確認することで効率化を図る", "AIが作成した契約書はそのまま法的効力を持つ", "法務分野ではAIの誤りが致命的になるため一切使用しない", "AIが自動的に法的判断を下すことで人間の弁護士は不要になる"],
    answer: 0,
    explanation: "法務部門でのAI活用：①契約書の標準条項のドラフト作成・類似条文の参照、②リスク条項・不利な条文の自動フラグ付け、③判例・法令の要約・検索、④NDA等の大量文書の確認効率化、などが実用化されています。ただし、最終的な法的判断・署名・交渉は必ず弁護士・法務担当者が行う必要があり、AIはあくまで「下書きと確認の支援ツール」として活用します。"
  },
  { id: "biz3-002", category: "business",
    question: "医療・ヘルスケア分野での生成AI活用として正しいものはどれか。",
    options: ["AIが最終的な診断・治療方針を決定する","画像診断支援・電子カルテの要約・医師へのサポート資料作成などにAIを活用しつつ、最終的な診断・治療決定は必ず医師が行う","医療分野では規制によりAIの使用は全面禁止","生成AIは医療分野では実績がなく使えない"],
    answer: 1,
    explanation: "医療でのAI活用：①画像AI（眼底・CT・MRI・病理画像の解析支援）、②電子カルテの要約・構造化、③医師向けの治療ガイドライン・薬剤情報の即座な参照、④医療文書・退院サマリーのドラフト作成、などが実用化されています。日本でもAI医療機器（プログラム医療機器：SaMD）の承認が進んでいます。最終的な医療判断は医師が行うことが法律・倫理上必須です。"
  },
  { id: "biz3-003", category: "business",
    question: "教育分野での生成AI活用として正しいものはどれか。",
    options: ["生成AIが教師の代わりに全授業を担当できる", "生成AIは答えを教えるだけなので学習効果がない", "個別最適化学習（学習者のレベルに応じた問題生成・解説）・授業準備の効率化・学習者の疑問への24時間対応などに活用でき、教師は高度な指導・メンタリングに集中できる", "日本の教育現場ではAIの使用は禁止されている"],
    answer: 2,
    explanation: "教育でのAI活用：①学習者の理解度に合わせた問題の自動生成・難易度調整、②24時間対応のAIチューター（数学・プログラミング等）、③授業計画・教材のドラフト作成効率化、④作文・レポートへのフィードバック自動化、⑤語学学習でのスピーキング練習パートナー。文部科学省は2023年に生成AIの教育利用に関するガイドラインを発表し、適切な活用を推奨しています。"
  },
  { id: "biz3-004", category: "business",
    question: "採用・HR（人事）分野でのAI活用として適切なものはどれか。",
    options: ["AIが採用の最終意思決定を完全自動化することが推奨される", "AIによる採用スクリーニングは完全に中立で人間より公平", "人事部門ではAIを使ってはいけない", "求人票の作成・大量応募書類の初期スクリーニング支援・面接質問の設計などに活用しつつ、採用の最終判断は人間が行いAIの選考基準に偏見が含まれていないか定期的に監査する"],
    answer: 3,
    explanation: "HR分野でのAI活用：①求人票・JDの最適化、②履歴書の初期スクリーニング（大量応募の処理効率化）、③面接質問セットの設計、④従業員向けFAQの自動応答。重要な注意点：AIの採用スクリーニングには「性別・年齢・人種」などに基づく差別（アルゴリズムバイアス）が混入するリスクがあります。最終採用決定は必ず人間が行い、AIの判断基準を定期的に監査することが法律・倫理上必要です。"
  },
  { id: "biz3-005", category: "business",
    question: "「AIガバナンス体制」の構築において企業が行うべき取り組みとして正しいものはどれか。",
    options: ["AI利用ポリシーの策定・リスク評価フレームワークの整備・責任者の明確化・利用状況の監査・従業員教育を組み合わせた体制を構築する", "AIは導入すれば自動的に適切に運用される", "AIガバナンスは大企業のみに必要", "AIガバナンスはIT部門だけが担えばよい"],
    answer: 0,
    explanation: "AIガバナンスとは、企業がAIを適切に活用するための方針・プロセス・体制のことです。構築要素：①AI利用ポリシー（使用可能なツール・禁止事項・機密情報の取り扱い）、②リスク評価（各AIツールのセキュリティ・倫理・コンプライアンスリスク）、③責任者（CAIO：Chief AI Officer等）の設置、④定期的な利用実態の監査・ログ管理、⑤従業員への教育・啓発。経営層のコミットメントと跨部門の連携が不可欠です。"
  },
  { id: "biz3-006", category: "business",
    question: "「Human-in-the-Loop（人間が介在するAI）」の考え方として正しいものはどれか。",
    options: ["AIシステムに人間が入力するだけのこと","重要な意思決定・高リスクな処理において、AIが候補を提示し人間が判断・承認・修正することでAIの誤りを防ぐ設計原則","AIの判断を常に人間がオーバーライドすると効率が落ちるため不要","AIが独立して全ての処理を完結させる方式"],
    answer: 1,
    explanation: "Human-in-the-Loop（HITL）は特にリスクの高いAI活用において重要な設計原則です。例：①ローン審査AIが「可・否・要精査」を判断し、「要精査」は担当者が確認する、②医療AIが異常を検知し医師が最終診断を行う、③メール自動返信の草案をAIが作成し担当者が確認・送信する。EU AI Actでも高リスクAIには人間の監視を義務付けており、完全自動化は限定的な場面にのみ適用すべきとされています。"
  },
  { id: "biz3-007", category: "business",
    question: "「DX（デジタルトランスフォーメーション）」と生成AI活用の関係として正しいものはどれか。",
    options: ["生成AIの導入だけでDXは完了する", "DXとAI活用は無関係な別の概念", "生成AIはDXを加速するツールとして有効だが、業務プロセスの見直し・組織文化の変革・データ基盤の整備なくしてはAI導入だけでは真のDXは実現しない", "生成AIはDXを複雑にするため導入は避けるべき"],
    answer: 2,
    explanation: "DXはデジタル技術を活用して業務・ビジネスモデルを変革することです。生成AIはDXの有力なエンジンですが、「AIを入れただけ」ではDXにはなりません。真のDXには：①業務プロセスの見直し（Reengineering）、②データ収集・整備基盤の構築、③従業員のマインドセット変革とリスキリング、④リーダーシップのコミットメント、が不可欠です。生成AIはこれらの変革を支援・加速する「ツール」として位置づけることが重要です。"
  },
  { id: "biz3-008", category: "business",
    question: "AI導入の「失敗パターン」として正しいものはどれか。",
    options: ["AIを導入すれば必ず成功する", "AIは誤りをしないため失敗は発生しない", "コストさえかければAI導入は成功する", "目的・成果指標が不明確なまま「とりあえず導入」する・AIの出力をノーチェックで使用する・変化管理を怠り現場が使わなくなる、などの失敗パターンが多い"],
    answer: 3,
    explanation: "AI導入の典型的な失敗パターン：①目的のないPoC（概念実証）の繰り返し（PoC貧乏）、②AIの出力をそのまま使う過信（ハルシネーション見逃し）、③現場の使いやすさを考慮しない、④データ品質・量が不足したまま導入、⑤AIが正しいことを前提に業務設計する（失敗時のフォールバックなし）、⑥従業員教育・変化管理の不足（現場の抵抗で定着しない）。成功するには明確なROI目標・現場との共創・段階的な展開が重要です。"
  },
  { id: "biz3-009", category: "business",
    question: "「社内RAG（検索拡張生成）システム」の構築と活用について正しいものはどれか。",
    options: ["社内文書・マニュアル・過去の提案書などをベクトルDB等に格納し、従業員がチャット形式で質問すると関連文書を参照した回答を得られるシステムで、ナレッジ検索の効率を大幅に向上させる", "RAGシステムはインターネット上の情報のみを参照する", "RAGシステムは常にすべての社内文書から回答するため情報セキュリティリスクが高い", "社内RAGは外部のクラウドサービスでのみ構築できる"],
    answer: 0,
    explanation: "社内RAGシステムとは、社内独自の文書・ナレッジをベクトル化してデータベースに格納し、質問に対してAIが関連文書を参照しながら回答するシステムです。活用例：①新人研修の質問応答（社内規定・手順書を参照）、②営業資料の即座な検索・引用、③過去の提案書や事例の横断検索。構築時の考慮点：アクセス権限の設計（誰でも全文書を見られないよう制限）、情報のメンテナンス（古い情報の更新）が重要です。"
  },
  { id: "biz3-010", category: "business",
    question: "「AIツール選定」の評価基準として正しいものはどれか。",
    options: ["最も安いツールを選べば常に正解","機能・精度・セキュリティ・コンプライアンス・コスト・サポート・統合しやすさ・ベンダー信頼性などを総合的に評価し、自社の業務要件・規模・規制に合ったものを選ぶ","最も有名なツールが常に最適","トライアルなしで全社展開を最初から行う"],
    answer: 1,
    explanation: "AIツール選定の評価基準：①機能・精度（実業務タスクでのPoC結果）、②セキュリティ（データの扱い・SOC2認証等）、③コンプライアンス（個人情報保護法・GDPR等）、④コスト（初期費用・従量課金・ライセンス）、⑤サポート体制・日本語対応、⑥既存システムとの統合のしやすさ（API・コネクター）、⑦ベンダーの信頼性・継続性（スタートアップリスク）。複数のツールを小規模PoC後に比較評価することが推奨されます。"
  },
  { id: "biz3-011", category: "business",
    question: "「AI活用人材の育成（リスキリング）」において企業が取り組むべきことして正しいものはどれか。",
    options: ["AIが普及すると人材育成は不要になる", "AI活用はエンジニアのみが学べばよく、一般社員は対象外", "AIリテラシー教育（全社員向け）・プロンプトエンジニアリング研修・AI活用の実践ワークショップなどを通じて、業務担当者がAIを効果的に活用できるスキルを養成する", "外部ベンダーに全て委託すればリスキリングは不要"],
    answer: 2,
    explanation: "AI活用人材育成の段階：①全社員向けAIリテラシー（生成AIの仕組み・活用方法・倫理・リスクの基礎）、②業務担当者向けの実践スキル（プロンプトエンジニアリング・業務特化ユースケース）、③開発者向けAI実装スキル（API活用・Fine-tuning・システム設計）。経済産業省は2025年までに「AIを使いこなせる人材」数十万人規模の育成目標を掲げており、企業での研修・外部資格取得支援が急増しています。"
  },
  { id: "biz3-012", category: "business",
    question: "「AI×RPA（ロボティクスプロセス自動化）」の組み合わせの説明として正しいものはどれか。",
    options: ["AIとRPAは同じ技術で区別する必要はない", "RPAにAIを組み合わせると精度が下がる", "AIとRPAは競合技術で組み合わせない", "RPAが定型的なルールベースの業務自動化（データ入力・コピー・転記）を担い、生成AIが非定型な判断・文章生成・読み取り（OCR・NLP）を担うことで、より高度な業務自動化を実現できる"],
    answer: 3,
    explanation: "RPA（Robotic Process Automation）は「もし〜なら〜する」という固定ルールで画面操作・データ処理を自動化します。一方、生成AIは非定型テキスト・画像の理解・判断が得意です。組み合わせの例：①RPAでシステムからデータ取得→AIで内容分析・要約→RPAで結果を別システムに入力、②RPAでメール受信→AIでメール内容を分類・回答ドラフト→担当者確認後RPAで返信。この組み合わせを「Intelligent Automation（IA）」とも呼びます。"
  },
  { id: "biz3-013", category: "business",
    question: "マーケティング・広告分野での生成AI活用として正しいものはどれか。",
    options: ["広告コピー・SEO記事・SNSコンテンツ・A/Bテスト用バリエーションの量産を効率化でき、パーソナライゼーション・ターゲティングへの応用も進む", "生成AIで作成した広告コンテンツは人間のレビューが不要", "生成AIはクリエイティブ業務に全く使えない", "AIが生成したコンテンツは著作権法上の問題が一切ない"],
    answer: 0,
    explanation: "マーケティングでのAI活用：①広告コピー・メールマガジン・ブログ記事のドラフト高速生成、②A/Bテスト用の複数バリエーション量産（ヘッドライン・CTAの変化等）、③SEOに最適化された記事の作成支援、④ターゲット顧客像（ペルソナ）に合わせたパーソナライズドコンテンツ生成、⑤広告画像の生成（Adobe Firefly等）。注意点：事実誤認・過大広告・差別的表現が含まれないよう必ず人間がレビューすること、著作権の帰属確認が必要です。"
  },
  { id: "biz3-014", category: "business",
    question: "中小企業・スモールビジネスでのAI導入ポイントとして正しいものはどれか。",
    options: ["中小企業はAI導入に必要なリソースがないため不可能","既存のSaaSツール（ChatGPT・Notion AI・Canva AI等）を活用した低コストな導入から始め、特定業務（メール作成・議事録・SNS投稿）の効率化で小さな成果を積み上げる","中小企業は大企業と同じAI戦略を採用すべき","AI導入は専任のAIエンジニアがいないと不可能"],
    answer: 1,
    explanation: "中小企業のAI導入のポイント：①大規模なシステム開発より既存SaaSのAI機能活用が低コスト（ChatGPT Plus月額、NotionAI月額等）、②特定の「痛点」業務（問い合わせ対応・SNS投稿・見積書作成等）に絞って小さく始める、③成果を測定しROIを確認してから拡大する、④社員のAI活用スキルアップが鍵でベンダー研修・外部資料を活用する。「全社AI化」ではなく「特定業務の効率化」から始めることが成功の近道です。"
  },
  { id: "biz3-015", category: "business",
    question: "「生成AI活用のPDCAサイクル」として正しいものはどれか。",
    options: ["AIツールは一度導入すれば改善不要", "PDCAはAI開発者のみが行うプロセス", "AI活用の目標設定→パイロット実施→成果測定（精度・時間削減・ROI）→プロンプト・フロー改善→横展開というサイクルを継続的に回す", "AI活用のPDCAは1回行えば十分"],
    answer: 2,
    explanation: "AI活用においてPDCAサイクルが重要です。Plan：活用目標・成功指標・対象業務を明確化。Do：小規模パイロット（特定チーム・業務で試行）。Check：出力品質・時間削減率・コスト・ユーザー満足度を測定。Act：プロンプト改善・業務フロー最適化・対象業務の拡大または撤退判断。AIの性能は継続的に向上するため、モデル更新に合わせた再評価も必要です。「使い始めて終わり」ではなく、継続的な改善サイクルが長期的な価値を生みます。"
  },
  { id: "biz3-016", category: "business",
    question: "金融業界での生成AI活用として正しいものはどれか。",
    options: ["AIが株価を完全予測して無敵の投資戦略を立てられる", "金融業では規制によりAI活用は完全禁止", "AIが金融アドバイスを行う際は顧客への説明義務がない", "不正検知・与信審査支援・顧客向けFAQ自動応答・金融レポートの要約・コンプライアンスチェック支援などに活用されており、規制の厳しい業界特性に合わせた適切な人間監視が必須"],
    answer: 3,
    explanation: "金融業界でのAI活用：①不正検知（異常な取引パターンのリアルタイム検知）、②与信審査支援（膨大な審査書類の要約・リスク項目の抽出）、③カスタマーサポートの自動化（FAQ・残高照会・手続き案内）、④株式分析レポート・開示文書の要約、⑤マネーロンダリング対策（AML）のパターン分析。金融庁のガイドラインに沿った透明性・説明責任の確保と、最終判断での人間監視が必須です。"
  },
  { id: "biz3-017", category: "business",
    question: "農業分野での生成AI・AI技術の活用として正しいものはどれか。",
    options: ["ドローン×AIによる農地の生育状況・病害虫の監視、気象データを活用した収穫予測、農作物の質問への専門的回答（AI農業アドバイザー）などで活用が進んでいる", "農業は自然相手のためAIの活用が最も難しい", "農業でのAI活用は全て新型ロボットの開発が必要", "日本の農業法規はAI活用を禁じている"],
    answer: 0,
    explanation: "農業でのAI活用：①ドローン＋画像認識AIによる広大な農地の生育モニタリング・病害虫の早期発見、②気象データ・土壌センサー・過去データを統合した収穫量予測・最適播種タイミングの提案、③生成AIを使った農業相談（農薬の選択・病気の診断・栽培方法のアドバイス）、④収穫ロボット（イチゴ・キュウリの収穫機等）。高齢化・担い手不足が深刻な日本農業において、スマート農業推進が国家戦略として位置づけられています。"
  },
  { id: "biz3-018", category: "business",
    question: "「AIと雇用」の関係に関する正しい説明はどれか。",
    options: ["AIはすべての仕事を奪うため雇用は消滅する","AIは繰り返し作業・データ処理・パターン認識の自動化で特定業務を代替する一方、新しい役割（AI活用専門職・AI監督者等）を生み出す。ルーティン業務は代替されやすく、共感・創造・複雑な判断を要する業務は補完されやすい","AIは単純作業のみを行うため専門職には影響ない","AIによる雇用への影響は今後100年で緩やかに起きる"],
    answer: 1,
    explanation: "IMF・McKinseyなどのレポートは「AIは多くの職業の一部タスクに影響するが、職業全体の消滅は限定的で、新職種も生まれる」とまとめています。代替されやすい業務：データ入力・定型文作成・基本的な分析・コールセンター対応の一部。補完・強化される業務：医師・弁護士・教師・マネージャー・クリエイター（AIを道具として使いこなす形）。「AIに代替される仕事」より「AIを使いこなす人間に代替される仕事」という視点が重要です。"
  },
  { id: "biz3-019", category: "business",
    question: "「プロダクト開発・エンジニアリング」での生成AI活用として正しいものはどれか。",
    options: ["AIが書いたコードはすべて完璧でレビュー不要", "生成AIはプログラミングには全く使えない", "コード補完・バグ修正提案・テストコード自動生成・ドキュメント作成・コードレビュー支援などに活用でき、開発速度が向上するが、セキュリティレビューと最終的なコード品質確認は必ず人間が行う", "AIが書いたコードを本番環境に直接デプロイするのが推奨される"],
    answer: 2,
    explanation: "エンジニアリングでのAI活用：①GitHub Copilotによるコード補完・提案（生産性50%向上という報告も）、②自然言語からのコード生成（「Pythonでデータを集計するスクリプトを書いて」）、③バグの原因特定と修正案の提示、④テストケース・ユニットテストの自動生成、⑤APIドキュメント・README の自動生成。注意：SQLインジェクション等の脆弱性がAI生成コードに含まれることがあるため、必ずセキュリティレビューが必要です。"
  },
  { id: "biz3-020", category: "business",
    question: "「社内AIポリシー（利用規程）」に含めるべき内容として正しいものはどれか。",
    options: ["使用禁止のツールと禁止理由を記載するだけでよい", "社内AIポリシーは法律で義務付けられていないため不要", "全社員に同じポリシーを適用し部門ごとの差異は設けない", "承認済みAIツールのリスト・機密情報の取り扱いルール・生成物の著作権と責任の所在・不正利用時の対応・定期的な見直し方針などを含む包括的な規程を策定する"],
    answer: 3,
    explanation: "社内AIポリシーに含めるべき要素：①承認済み・非承認ツールのリスト（使用できるサービスの明確化）、②機密情報・個人情報の入力禁止ルール（プロンプトへの顧客情報・社外秘情報の入力を禁じる等）、③AI生成物の著作権・責任（誰が最終的に責任を持つか）、④AI利用の記録・監査方針、⑤違反時の対応・罰則、⑥定期的な見直し（年1回以上）。生成AIは急速に進化するため、ポリシーも随時アップデートが必要です。"
  },

  // ── ビジネス追加問題 ──────────────────────────────────────────────
  { id: "biz2-001", category: "business",
    question: "企業がAI導入の投資対効果（ROI）を評価する際に考慮すべき要素として、最も適切なものはどれか。",
    options: ["AIモデルのパラメータ数のみを基準として投資効果を判断する", "導入コスト（ライセンス・インフラ・人材育成）と期待効果（業務効率化・売上向上・コスト削減）を総合的に評価する", "競合他社がAIを導入しているかどうかのみを判断基準とし、横並びでの導入を優先する", "AI技術の新しさ・最先端性のみを判断基準とし、最新モデルを常に採用する"],
    answer: 1,
    explanation: "AI導入のROI評価には、初期コスト（開発・ライセンス・インフラ）、運用コスト（維持管理・人材育成・更新）と、期待される便益（業務時間削減・エラー率低下・新規収益・顧客満足向上など）を定量的・定性的に評価することが重要です。技術の新しさや競合動向だけでの判断は不十分です。"
  },
  { id: "biz2-002", category: "business",
    question: "企業におけるAI導入の主な障壁として、最も適切なものはどれか。",
    options: ["AIは技術的に非常に簡単で費用もかからないため、企業の規模を問わず即座に導入可能である", "データ品質・量の確保、AI人材の不足、既存業務プロセスとの統合、組織変革への抵抗などが主な障壁となっている", "AI導入の障壁は資金面のみであり、予算さえあればその他の課題はすべて解決できる", "大企業では問題ないが、中小企業にはAI導入の技術的障壁は存在しない"],
    answer: 1,
    explanation: "AI導入の主な障壁には、①高品質な学習データの収集・整備、②AI専門人材（データサイエンティスト・エンジニア）の不足、③レガシーシステムとの統合の困難さ、④従業員の変化への抵抗・リスキリング、⑤AI活用の目的・ROIの不明確さ、などがあります。これらは資金だけでは解決できない組織的・技術的課題です。"
  },
  { id: "biz2-003", category: "business",
    question: "企業のAIガバナンスに含まれる活動として、最も適切なものはどれか。",
    options: ["AIの性能を最大化するためのモデルチューニングのみを指し、倫理的側面は含まない", "AIの開発・運用に関するポリシー策定、リスク管理、透明性確保、説明責任の仕組みを整備すること", "AIシステムの計算コストを削減するための技術的最適化活動のみを指す", "外部のAIベンダーへのシステム開発委託に関する契約管理のみを指す"],
    answer: 1,
    explanation: "AIガバナンスとは、組織がAIを責任ある形で開発・活用するための方針・プロセス・体制の整備です。具体的には、AIリスク評価・管理、利用指針・倫理ポリシーの策定、AI利用状況の監視・監査、インシデント対応体制の整備、ステークホルダーへの説明責任などが含まれます。"
  },
  { id: "biz2-004", category: "business",
    question: "人間とAIが効果的に協働するための考え方として、最も適切なものはどれか。",
    options: ["AIが判断と実行をすべて担い、人間はシステムを監視するだけの役割に徹するべきである", "AIは人間の能力を補完・拡張するツールとして位置づけ、最終判断・倫理的責任は人間が担う体制を構築する", "人間とAIは競合関係にあるため、どちらか一方のみを業務に使用すべきである", "AIは完全に中立・公平な判断をするため、人間によるレビューや修正は不要である"],
    answer: 1,
    explanation: "効果的な人間とAIの協働では、AIが得意とするデータ処理・パターン認識・反復作業を担い、人間が創造性・共感・倫理的判断・文脈理解を担う「補完関係」の構築が重要です。AI出力の最終確認・責任は人間が持ち、AIを意思決定を「支援するツール」として位置づけることが基本原則です。"
  },
  { id: "biz2-005", category: "business",
    question: "組織におけるAIリテラシー教育の目的として、最も適切なものはどれか。",
    options: ["全従業員をAIエンジニアとして育成し、自社でAIモデルを開発できるようにする", "AIの基本的な仕組み・できること・できないこと・リスクを理解し、AIを適切に活用・評価できる人材を育成する", "AIリテラシー教育はIT部門の担当者のみに必要であり、一般従業員には不要である", "AIの技術的な詳細（アルゴリズム・数式）の習得のみを目標とする"],
    answer: 1,
    explanation: "組織のAIリテラシー教育は、全従業員がAIの基本概念・活用可能性・限界・倫理的課題を理解し、業務でAIを適切に活用・検証できるようにすることを目的とします。技術的な実装スキルよりも、AIツールを批判的に使いこなす能力とAI出力の適切な評価・検証能力の育成が重要です。"
  },
  { id: "biz2-006", category: "business",
    question: "金融業界における生成AIの活用事例として、最も適切なものはどれか。",
    options: ["AIが完全自律的に投資判断を行い、人間の承認なしに顧客資産の売買を実行している", "契約書の審査支援、不正取引の検知、顧客問い合わせへの初次対応、レポートの下書き作成などに活用されている", "金融業界ではAI活用は規制で全面禁止されており、他業種と比較してAI導入が最も遅れている", "AIは金融商品の価格算出のみに特化して使用され、顧客対応や事務作業への適用はされていない"],
    answer: 1,
    explanation: "金融業界ではAIが審査・コンプライアンス文書の確認支援、異常な取引パターンの検知（不正防止）、チャットボットによる問い合わせ対応、市場分析レポートの自動生成などに活用されています。ただし最終的な重要判断（融資決定・投資実行など）は人間が担う体制が規制・リスク管理上求められています。"
  },
  { id: "biz2-007", category: "business",
    question: "企業がAIを業務に導入する際の適切なアプローチとして、最も適切なものはどれか。",
    options: ["まず最先端の最も高性能なAIモデルを全社に一斉導入し、その後に課題を洗い出す", "解決すべき業務課題を明確にし、小規模な実証実験（PoC）から始めて効果を検証しながら段階的に拡大する", "AI導入は技術チームのみで判断・実施し、業務部門や経営層への事前説明は不要である", "一度AI導入に成功した他社の事例をそのまま模倣すれば、自社でも必ず同じ成果が得られる"],
    answer: 1,
    explanation: "AI導入の成功には、①解決すべき課題の明確化→②データ・技術の実現可能性検証→③小規模PoC（概念実証）での効果確認→④成果に基づく段階的な本格展開、というアプローチが有効です。課題起点・段階的検証のアプローチの方がリスクを抑えて成果を得やすいです。"
  },
  { id: "biz2-008", category: "business",
    question: "AI普及に伴う労働市場の変化への対応として、最も適切なものはどれか。",
    options: ["AI普及により人間の仕事はすべてなくなるため、企業は従業員の再教育よりも人員削減を優先すべきである", "AIが代替しにくいクリティカルシンキング・創造性・対人能力などのスキルを高め、AIを活用できる人材へのリスキリングを進める", "AI普及の影響を受けるのはブルーカラーのみであり、ホワイトカラーの仕事はすべてAIから守られている", "既存のスキルをそのまま維持し、AI技術の変化には追随しない姿勢が組織の安定に寄与する"],
    answer: 1,
    explanation: "AI普及により定型的・反復的な業務の一部は自動化が進む一方、AIが苦手とする批判的思考・創造性・高度なコミュニケーション・倫理的判断などは人間の強みとして重要性が増します。組織と個人がAI活用スキル（リスキリング）を獲得しつつ、AIと協働できる体制への移行が重要です。"
  },
  { id: "biz2-009", category: "business",
    question: "カスタマーサービスにおける生成AIチャットボットの活用として、最も適切なものはどれか。",
    options: ["AIチャットボットが顧客の全問い合わせを完全解決し、人間のオペレーターは一切不要になる", "24時間の基本問い合わせ対応・FAQ回答を担い、複雑・感情的な問題は人間オペレーターへのエスカレーションを組み合わせた活用", "AIチャットボットはテキストのみ対応であり、音声・ビデオでの顧客対応は技術的に不可能である", "AIチャットボットは企業の公開情報のみを回答するため、個人の注文状況や契約内容には一切答えられない"],
    answer: 1,
    explanation: "カスタマーサービスでの生成AI活用のベストプラクティスは、AIが24時間対応・基本的なFAQ対応・情報案内を担い、感情的・複雑・個人情報を伴う問い合わせは人間オペレーターに引き継ぐハイブリッド型です。AIと人間の役割を明確に設計することで、顧客満足と業務効率を両立できます。"
  },
  { id: "biz2-010", category: "business",
    question: "企業内のAI倫理委員会の主な役割として、最も適切なものはどれか。",
    options: ["AIシステムの技術的な開発作業を直接担当し、モデルの学習・チューニングを行う", "AI活用が倫理的・法的・社会的に適切かを審査し、AIリスクの特定・評価・ガイドライン策定を行う", "AI関連の予算管理と調達を担当し、コスト最適化を主目的とする", "AI製品の販売戦略立案と営業活動の推進を主な業務とする"],
    answer: 1,
    explanation: "AI倫理委員会は、組織のAI活用が倫理原則・法的要件・社会的責任に沿っているかを監視・審査する機能を持ちます。具体的にはAIシステムの偏見・差別リスクの評価、プライバシー・透明性の確保、AI利用ガイドラインの策定、インシデント対応方針の策定などを担います。"
  },
  { id: "biz2-011", category: "business",
    question: "企業がAI活用によって持続的な競争優位を構築するために最も重要な要素として、最も適切なものはどれか。",
    options: ["競合他社と全く同じAIツールを同時期に導入し、横並びの状態を維持する", "独自データの蓄積・活用、AI人材の育成・確保、ビジネスプロセスへの深い統合による差別化", "最もコストの安いAIサービスのみを使用し、コスト優位のみで競争する", "AIの活用はITベンダーに完全委託し、自社内にAI関連のノウハウを蓄積しない"],
    answer: 1,
    explanation: "AI活用による持続的競争優位の源泉は、①自社固有のデータ資産（顧客データ・業務データ）の蓄積と活用、②AIを深く理解し活用できる人材・組織能力の構築、③自社ビジネスプロセスとAIの深い統合による独自価値の創出にあります。汎用ツールの単純導入は競合に容易に模倣されますが、組織能力の差別化は持続的優位につながります。"
  },
  { id: "biz2-012", category: "business",
    question: "DX（デジタルトランスフォーメーション）とAI活用の関係として、最も適切なものはどれか。",
    options: ["DXとは既存の紙ベースの業務を単にデジタル化することであり、AIは関係ない", "AIはDXを加速させる重要な技術であり、データ活用・業務変革・新たなビジネスモデル創出においてAIが中心的な役割を担う", "DXはAIを使わずに達成できるため、AI導入はDXの本質的な要素ではない", "AIを導入すれば自動的にDXが完了し、組織変革・プロセス変革は不要になる"],
    answer: 1,
    explanation: "DXは単なるIT化・デジタル化ではなく、デジタル技術を活用したビジネスモデル・組織・プロセスの抜本的な変革です。AIはDXにおいてデータ分析・意思決定支援・業務自動化・新サービス創出の中核技術として機能します。ただしAI導入だけでDXは完成せず、組織文化・業務プロセスの変革が不可欠です。"
  },
  { id: "biz2-013", category: "business",
    question: "生成AIプロジェクトの成果指標（KPI）として、最も適切なものはどれか。",
    options: ["使用したAIモデルのパラメータ数のみをKPIとし、大きいほど成功とみなす", "業務時間削減率、エラー件数の減少、顧客満足度スコア、コスト削減額など、ビジネス目標に直結した定量的指標を設定する", "KPIの設定はプロジェクト完了後に行い、事前の設定は不要である", "従業員のAI技術満足度アンケートの結果のみをKPIとする"],
    answer: 1,
    explanation: "AIプロジェクトのKPIは、技術指標（モデル精度・処理速度）だけでなく、ビジネス成果に直結した指標（業務効率化時間、コスト削減額、顧客満足度、エラー発生率など）を事前に設定することが重要です。KPIを明確にすることで、プロジェクトの方向性を維持し、効果の客観的な検証が可能になります。"
  },

  // ── 試験対策追加問題 ──────────────────────────────────────────────
  { id: "exam2-001", category: "basics",
    question: "LLMにおける「トークン」の説明として、最も適切なものはどれか。",
    options: ["AIモデルの学習に必要なGPUの処理単位を示す技術的な指標", "テキストを処理する際の最小単位であり、単語・単語の一部・句読点などに分割されたテキストの断片", "AIサービスの利用料金を計算するための通貨単位", "AIモデルの精度を評価するためのベンチマーク指標"],
    answer: 1,
    explanation: "トークンとはLLMがテキストを処理する際の基本単位です。英語では単語や単語の一部に、日本語では文字や単語に分割されます。API利用料金はトークン数に基づいて計算されることが多く、コンテキストウィンドウのサイズもトークン数で表されます。"
  },
  { id: "exam2-002", category: "basics",
    question: "機械学習モデルにおける「パラメータ」の説明として、最も適切なものはどれか。",
    options: ["モデルの学習速度を決定するハイパーパラメータの略称", "モデルが学習を通じて調整される内部変数（重みやバイアスなど）であり、モデルの知識や能力を表現する", "学習データの品質を評価するための外部評価基準", "モデルのAPIを呼び出す際に指定するユーザー設定値"],
    answer: 1,
    explanation: "パラメータとは機械学習モデルが学習プロセスを通じて自動的に調整する内部変数（重み・バイアス）です。LLMは「数十億〜数千億パラメータ」という表現が使われ、パラメータ数が多いほど一般的に表現力が高まります。一方ハイパーパラメータは学習率など人間が事前に設定する外部設定値です。"
  },
  { id: "exam2-003", category: "risks",
    question: "生成AIのハルシネーション（Hallucination）の説明として、最も適切なものはどれか。",
    options: ["AIが処理能力の限界に達し、システムが自動的に停止する現象", "AIが事実と異なる情報や存在しないデータを、もっともらしく自信を持って生成してしまう現象", "AIが複数の類似した質問に対して同一の回答を繰り返す現象", "AIが長い入力を処理できず、文章の途中で回答を打ち切る現象"],
    answer: 1,
    explanation: "ハルシネーション（幻覚）とは、生成AIが事実に基づかない情報（存在しない人名・引用・統計・出来事など）を、まるで事実であるかのように流暢に生成する現象です。LLMは次のトークンの確率的な予測をするため、知識の境界で「もっともらしい嘘」を生成することがあります。重要な情報は必ず一次情報で確認することが必要です。"
  },
  { id: "exam2-004", category: "basics",
    question: "テキストのエンベディング（Embedding）の説明として、最も適切なものはどれか。",
    options: ["テキストを画像に変換し、視覚的に表現するための技術", "テキストを数値ベクトルに変換することで、意味的な類似度を計算できるようにする技術", "テキストを圧縮してファイルサイズを削減するエンコード技術", "テキストを複数の言語に自動翻訳する多言語変換技術"],
    answer: 1,
    explanation: "エンベディング（埋め込み）とは、テキスト（単語・文章）を高次元の数値ベクトルに変換する技術です。意味的に類似した単語・文章は近いベクトル空間に配置されるため、テキストの意味的類似度計算・検索・分類などに活用されます。RAGシステムやセマンティック検索の基盤技術として重要です。"
  },
  { id: "exam2-005", category: "services",
    question: "次のうち、OpenAIが開発した大規模言語モデルはどれか。",
    options: ["Claude", "Gemini", "GPT-4o", "LLaMA"],
    answer: 2,
    explanation: "GPT-4o（GPT-4 Omni）はOpenAIが開発したマルチモーダル大規模言語モデルです。Claude（a）はAnthropicが開発、Gemini（b）はGoogleが開発、LLaMA（d）はMetaが開発したオープンソースモデルです。各主要AIモデルの開発会社を把握しておくことは生成AIパスポート試験の基本知識です。"
  },
  { id: "exam2-006", category: "laws",
    question: "AI倫理の観点から「説明可能性（Explainability）」が重要とされる理由として、最も適切なものはどれか。",
    options: ["AIの処理速度をユーザーに分かりやすく説明することで、サービスの有料プランへの誘導を促すため", "AIの判断根拠を人間が理解・検証できることで、不当な差別・誤りの発見・修正が可能になり、責任の所在が明確になるため", "AIが出した答えを競合他社が模倣しにくくするための特許保護目的のため", "AIの計算量を削減し、電力消費を抑えることで環境への負荷を軽減するため"],
    answer: 1,
    explanation: "AI説明可能性（Explainability/XAI）とは、AIがなぜその判断・出力をしたかを人間が理解できるようにする性質です。特に医療・金融・採用など重要な意思決定にAIが使われる場合、判断根拠の透明性により①不当な差別の発見・是正、②エラーの特定・修正、③責任の明確化が可能になります。「ブラックボックス」AIへの対策として重要です。"
  },
  { id: "exam2-007", category: "basics",
    question: "教師あり学習と教師なし学習の違いとして、最も適切なものはどれか。",
    options: ["教師あり学習は人間の教師が直接AIに教え込む手法であり、教師なし学習は動画教材のみで学習する手法", "教師あり学習は正解ラベル付きデータで目的の出力を学習する手法で、教師なし学習はラベルなしデータからデータの構造・パターンを自動的に発見する手法", "教師あり学習は精度が低く教師なし学習の方が常に高精度であるため、現代では教師なし学習のみが使用される", "教師あり学習と教師なし学習は本質的に同一の手法であり、違いは使用するコンピューターの性能のみ"],
    answer: 1,
    explanation: "教師あり学習（Supervised Learning）は、入力データと正解ラベルのペアを用いてモデルを学習させる手法です（例：スパムメール分類、画像認識）。教師なし学習（Unsupervised Learning）は正解ラベルなしのデータからデータのクラスタリング・パターン発見・次元削減などを行います（例：顧客セグメンテーション、異常検知）。"
  },
  { id: "exam2-008", category: "laws",
    question: "AIが生成したコンテンツの著作権に関する記述として、日本の現行法上最も適切なものはどれか。",
    options: ["AIが生成したコンテンツはAI自身が著作権を保有し、開発会社の許可なく使用できない", "AIが生成したコンテンツには原則として著作権が発生しないが、人間が創意工夫を加えた部分には著作権が認められる場合がある", "AIが生成したコンテンツの著作権は、利用者が自動的に取得する", "AIが生成したコンテンツはすべてパブリックドメインとして、誰でも自由に使用できる"],
    answer: 1,
    explanation: "日本の著作権法上、著作権は「思想または感情を創作的に表現したもの」を創った人間に帰属します。AIが自律的に生成したコンテンツには、一般的に著作権は発生しないとされています。ただし、人間がAI出力に対して創意工夫を加えて編集・選択した場合は、その人間の創作部分に著作権が認められる可能性があります。"
  },
  { id: "exam2-009", category: "laws",
    question: "生成AIを業務で利用する際のプライバシー保護として、最も適切な行動はどれか。",
    options: ["自分の個人情報は公開情報なので、名前・住所・電話番号をプロンプトに自由に含めて利用する", "第三者の個人情報（顧客情報・社員情報など）を含む文書をAIに入力する際は、事前に利用規約・プライバシーポリシーを確認し、必要に応じて匿名化する", "生成AIサービスは入力した個人情報を収集・利用しないことが法律で義務付けられている", "個人情報保護はサービス提供者の責任であるため、利用者は何も意識する必要はない"],
    answer: 1,
    explanation: "生成AIサービスは入力データをサービス提供者のサーバーで処理するため、第三者の個人情報を含む入力は個人情報保護法の観点から問題になりえます。利用前にサービスの利用規約・プライバシーポリシーを確認し、第三者の個人情報は匿名化・仮名化するか、そもそも入力しない判断が重要です。"
  },
  { id: "exam2-010", category: "risks",
    question: "生成AIの出力を業務で使用する前に人間が確認・評価すべき観点として、適切でないものはどれか。",
    options: ["事実情報の正確性（ハルシネーションがないか）", "著作権・個人情報などのコンプライアンス上の問題がないか", "出力を生成したAIモデルの開発会社の国籍", "目的に対して適切な内容になっているか"],
    answer: 2,
    explanation: "生成AIの出力を業務利用する前に確認すべき観点には、①ハルシネーション（事実誤り）がないか、②著作権・個人情報・機密情報などのコンプライアンス問題がないか、③目的に対して適切な内容かどうか、④文章の品質・適切さ、などがあります。AIモデル開発会社の国籍は出力品質の評価観点として適切ではありません。"
  },
  { id: "exam2-011", category: "laws",
    question: "生成AIを責任ある形で活用するための原則として、最も適切なものはどれか。",
    options: ["生成AIの出力は常に正確であるため、そのまま業務に使用してよい", "生成AIの出力は参考情報として扱い、重要な判断には必ず人間によるファクトチェックと最終確認を行う", "生成AIは専門家が不要になるツールであるため、専門家に相談せずにすべての問題をAIで解決する", "生成AIの出力には著作権がないため、出典を明示せずにそのまま公開・使用してよい"],
    answer: 1,
    explanation: "生成AIの責任ある活用の基本原則は「Human-in-the-loop（人間の監督）」です。AIはハルシネーションを起こす可能性があり、バイアスを含む出力をすることもあります。重要な業務判断・専門的内容・事実確認が必要な場面では、必ず人間がAI出力を検証・確認し、最終責任を担うことが求められます。"
  },
  { id: "exam2-012", category: "laws",
    question: "日本政府のAI政策に関する記述として、最も適切なものはどれか。",
    options: ["日本はAI規制を一切設けず、完全に自由な開発・利用を認めている", "内閣府・経済産業省・総務省などが連携してAI戦略を策定し、AI利活用促進と適切なリスク管理の両立を目指している", "日本のAI政策はEU AI Actと完全に同一の内容であり、独自のガイドラインは存在しない", "日本ではAIの開発・利用は政府機関のみに許可されており、民間企業は原則として禁止されている"],
    answer: 1,
    explanation: "日本政府はAI戦略推進体制を整備しており、「AI事業者ガイドライン」などを策定。内閣府・経済産業省・総務省が連携してAIの利活用促進とリスク管理のバランスをとる政策を推進しています。EU AI Actとは異なるアプローチで、法律よりもガイドラインを中心とした柔軟な規制スタンスが特徴です。"
  },
  { id: "exam2-013", category: "basics",
    question: "生成AI（Generative AI）の定義として、最も適切なものはどれか。",
    options: ["大量のデータを分析して数値的な予測（株価・天気など）を行うことに特化したAI", "既存データのパターンを学習し、テキスト・画像・音声・動画・コードなど新しいコンテンツを生成できるAI", "人間の感情を分析し、ユーザーの心理状態を診断・報告するAI", "データベースの情報を検索・分類・整理することに特化したAI"],
    answer: 1,
    explanation: "生成AI（Generative AI）とは、学習データのパターンを習得し、新しいコンテンツ（テキスト・画像・音声・動画・コード・3Dモデルなど）を生成できるAIシステムの総称です。ChatGPT・Claude・Gemini（テキスト）、DALL-E・Midjourney（画像）、Sora（動画）などが代表例です。"
  },
  { id: "exam2-014", category: "business",
    question: "生成AIを業務に活用する際の適切な人間の役割として、最も適切なものはどれか。",
    options: ["AIが全ての判断と実行を担うため、人間の役割は定期的な電源管理のみである", "AIの出力を受動的に受け取るだけで、修正や検証を行わずにそのまま使用する", "AIの出力の品質確認・事実検証・倫理的判断・最終意思決定などの責任ある役割を担う", "人間はAIシステムの競合サービスを調査・比較する役割のみを担う"],
    answer: 2,
    explanation: "生成AIを業務に活用する際の人間の役割は、AIの出力を鵜呑みにするのではなく、①正確性の検証（ファクトチェック）、②倫理的・法的問題の確認、③コンテキスト・目的への適合性の評価、④最終的な意思決定と責任の担保です。AIはツールであり、最終責任は常に人間が持つことが原則です。"
  },
  { id: "exam2-015", category: "basics",
    question: "LLM（大規模言語モデル）のTransformerアーキテクチャにおける「Attention（注意機構）」の役割として、最も適切なものはどれか。",
    options: ["モデルの計算速度を向上させるためのキャッシュ機能", "入力テキストの各トークン間の関連性・重要度を動的に計算し、文脈に応じた適切な情報に注目する仕組み", "不要なパラメータを削除してモデルを軽量化するための枝刈り（Pruning）手法", "学習データの重複を検出し、品質を向上させるフィルタリング機能"],
    answer: 1,
    explanation: "Attention（注意機構）は、Transformerアーキテクチャの中核をなす仕組みで、入力シーケンス内の各トークンが他のトークンとどれだけ関連するかを動的に計算します。これにより、長距離の文脈依存関係を捉えることができ、LLMが文脈を正確に理解して適切な応答を生成する基盤となっています。"
  },

  // ── 第2〜6章（教科書追加分） ────────────────────────────────────
  { id: "ch2-001", category: "basics",
    question: "制限付きボルツマンマシンに関する記述として正しいものはどれか。",
    options: [
      "1986年に開発され、人工ニューロン間の接続を特定のルールに基づいて制限し、データ処理をネットワークの入力部分と推定部分の2つに分けることで効率化した",
      "ボルツマンマシンを改善したもので、2006年にジェフリー・ヒントンが提唱した",
      "教師あり学習はできるが、教師なし学習はできないという制約がある",
      "画像認識に特化したモデルで、畳み込み処理によって画像の局所的な特徴を抽出する"
    ],
    answer: 0,
    explanation: "制限付きボルツマンマシンは1986年に開発され、ボルツマンマシンの問題を改善するため人工ニューロン間の接続をランダムではなく特定のルールに基づいて制限し、データ処理をネットワークの入力部分と推定部分の2つに分けることで効率化しました。次元削減やデータの分類・特徴付けの傾向の学習などに応用でき、教師なし学習に活用されました。"
  },
  { id: "ch2-002", category: "basics",
    question: "VAE（変分自己符号化器）の説明として正しいものはどれか。",
    options: [
      "生成器と識別器という2つのネットワークが互いに競い合う形でトレーニングが行われ、生成器はより本物に近いデータを生成する能力を向上させるモデル",
      "エンコーダとデコーダの2つの主要部分から構成され、データを圧縮しておおよその情報に変換し、その圧縮した情報から元のデータに近いものを復元するツール",
      "過去の情報を記憶しながら新しい情報を処理する特性を持ち、シーケンスデータの処理に特化したモデル",
      "自己注意力機構を用いてデータの順番に依存せず多くの情報を同時並行的に処理できるモデル"
    ],
    answer: 1,
    explanation: "VAE（Variational Autoencoder：変分自己符号化器）は生成モデルの一種で、エンコーダとデコーダの2つの主要部分から構成されます。エンコーダは入力データの重要な特徴を捉えた潜在ベクトル（潜在変数）と呼ばれる低次元の表現に変換し、デコーダは潜在ベクトルから元のデータに近いものを生成します。データの次元削減、次元分析、データ生成などに活用されます。"
  },
  { id: "ch2-003", category: "basics",
    question: "GAN（敵対的生成ネットワーク）のトレーニングの仕組みとして最も適切なものはどれか。",
    options: [
      "エンコーダがデータを圧縮し、デコーダが元に戻すことを繰り返してデータ生成能力を高める",
      "過去のデータをもとに将来を予測する自己回帰的な学習を繰り返すことで精度を高める",
      "生成器と識別器の2つのモデルが互いに競い合う形でトレーニングが行われ、識別器を騙そうとする生成器と、生成されたデータと本物のデータを区別する識別器が競い合うことで、生成器はより本物に近いデータを生成する能力を向上させる",
      "ランダムに選んだ単語をマスク（=隠す）して、マスクした単語の前後の単語のすべての情報を使用して、その単語を予測する方式で学習する"
    ],
    answer: 2,
    explanation: "GANはGenerative Adversarial Networksの略で「敵対的生成ネットワーク」と訳されます。生成器と識別器の2つのネットワークから構成され、生成器は識別器を騙そうとし、識別器は生成されたデータと本物のデータを区別しようと競い合います。この「敵対的」なトレーニングにより、生成器はより本物に近いデータを生成する能力を向上させます。"
  },
  { id: "ch2-004", category: "basics",
    question: "LSTM（長・短期記憶）に関する記述として正しいものはどれか。",
    options: [
      "2017年に研究者の論文で紹介されたモデルで、自己注意力（Self-Attention）を採用し並列処理が可能",
      "1997年に初めて提唱され、2000年代に入り改良・普及した。RNNの長期依存関係の学習問題を改善し、より長い時間におけるシーケンスデータの依存関係の学習が可能になった",
      "Googleが2018年に開発した自然言語処理モデルで、双方向性を持ち文脈の前後両方から単語の意味を理解する",
      "生成器と識別器の2つのモデルが競い合うことでデータ生成能力を向上させる仕組みを持つ"
    ],
    answer: 1,
    explanation: "LSTM（Long Short-Term Memory：長・短期記憶）は1997年に初めて提唱され、2000年代に入り改良・普及しました。RNNには長い文章になると精度が下がる「勾配消失問題」がありましたが、LSTMはこれを改善し、より長い時間におけるシーケンスデータの依存関係の学習が可能になりました。ただし並列学習には向かないという課題が残りました。"
  },
  { id: "ch2-005", category: "basics",
    question: "Transformerモデルの特徴として最も適切なものはどれか。",
    options: [
      "CNNやRNNを使用した文章処理に特化した深層ニューラルネットワークで、逐次処理により文脈を正確に把握できる",
      "エンコーダとデコーダの2つの部分でデータを圧縮して復元する生成モデルで、2006年に登場した",
      "CNNやRNNを使用せず、文章の中で特に重要な箇所に注意する「自己注意力（Self-Attention）」という新機能を採用し、データの順番に関わらず多くの情報を同時並行的に処理できる。大規模なデータセットの学習時間の大幅な短縮が可能",
      "生成器と識別器という2つのネットワークが競い合うことで画像生成能力を高めるモデルで、2014年に提案された"
    ],
    answer: 2,
    explanation: "Transformerモデルは2017年に研究者の論文で紹介されたモデルで、文章や言葉の処理に特化した深層ニューラルネットワークの一種です。CNNやRNNを使用せず、自己注意力（Self-Attention）という機構を採用しています。RNNやLSTMと異なり、データの順番に関わらず多くの情報を同時並行的に処理でき、大規模なデータセットの学習時間の大幅な短縮が可能になりました。"
  },
  { id: "ch2-006", category: "basics",
    question: "BERTモデルの特徴として正しいものはどれか。",
    options: [
      "2018年6月にOpenAIが開発し、大量のテキストデータを学習して新しい文章を生成することに特化したAI",
      "パラメータを大幅に削減したモデルの効率を向上させたBERTの軽量版で、スマートフォンなど計算リソースが制限されている環境でも高いパフォーマンスを実現する",
      "2018年10月にGoogleが開発した自然言語処理モデルで、単語の意味を決定する際にその単語の前後の単語の情報を利用する「双方向性」が特徴で、採用されている仕組みの一つ「MLM（Masked Language Model）」ではランダムに選んだ単語をマスクしてその単語を予測する",
      "2019年にFacebook AIが発表したBERTの改良モデルで、BERTと比べて約10倍のデータ量と長い時間を使って訓練されている"
    ],
    answer: 2,
    explanation: "BERTはGoogleが2018年10月に開発した自然言語処理モデルで、Transformerの一部がベースです。最大の特徴の一つが「双方向性」で、単語の意味を決定する際にその単語の前後の単語の情報を利用することで、文脈によって意味が変わる場合でも適切にその意味を捉えられます。MLM（Masked Language Model）という仕組みでランダムに選んだ単語をマスクしてその単語を予測する学習も行います。"
  },
  { id: "ch2-007", category: "services",
    question: "ChatGPTの名称の各略語の意味として正しいものはどれか。",
    options: [
      "Chat（会話）、G（Global）、P（Platform）、T（Technology）",
      "Chat（対話型）、G（Generalized）、P（Protocol）、T（Translation）",
      "Chat（チャット）、G（Google）、P（Processing）、T（Translation）",
      "Chat（対話型）、G（Generative/生成）、P（Pre-trained/事前学習）、T（Transformer）"
    ],
    answer: 3,
    explanation: "ChatGPTは「Chat（対話型）」「G（Generative：生成）」「P（Pre-trained：事前学習）」「T（Transformer：Transformerモデル）」の略です。ChatGPTはOpenAIが開発した一連の自然言語処理モデルで、チャットのやり取りが機械的なものではなく、人間と会話しているように自然に展開されるのが特徴です。"
  },
  { id: "ch2-008", category: "services",
    question: "GPT-4oに関する記述として正しいものはどれか。",
    options: [
      "GPT-3をベースとして開発されたモデルで、RLHFを採用し人間のフィードバックをもとに適切な回答を学習したモデル",
      "2024年5月にリリースされた新しいChatGPTのバージョンで、「o」は「オムニ（全ての）」を意味し、テキストだけでなく画像や音声も組み合わせて処理できる「オムニモーダルモデル」と呼ばれるタイプのAI",
      "2023年3月にリリースされたモデルで、約1兆7,600億ものパラメータを持ち、GPT-3.5と比べハルシネーションの割合が19〜29%程度減少している",
      "ChatGPTがPythonというプログラミング言語を使用して自動的にソースコードを書いて実行できる機能のこと"
    ],
    answer: 1,
    explanation: "GPT-4oは2024年5月にリリースされた新しいChatGPTのバージョンで、「o」は「オムニ（全ての）」を意味します。従来の「マルチモーダルモデル」が各種類のデータを個別に分析し結果をまとめる形で応答するのに対し、「オムニモーダルモデル」はすべての種類のデータを「統合的に」処理するモデルです。特に音声入力に対して素早く応答できるのが特徴です。"
  },
  { id: "ch3-001", category: "risks",
    question: "ディープフェイク（深層偽造）に関する記述として正しいものはどれか。",
    options: [
      "AIが不正確な情報を正確な情報のように生成するハルシネーション現象の別名である",
      "ディープラーニングや生成AIを利用して非常にリアルな画像コンテンツなどを作成し、人を故意に騙すことを目的として使用される技術で、偽情報（ディスインフォメーション）の拡散など社会的な問題も引き起こしている",
      "テキスト生成AIが著作権を侵害したコンテンツを自動生成してしまう現象のことである",
      "生成AIモデルによって極めてリアルな合成結果が得られるため、鑑識能力を超えるほど高品質なフェイク映像を生成しても、人間の目や既行のAI技術では十分判別できる"
    ],
    answer: 1,
    explanation: "ディープフェイク（深層偽造）とは、ディープラーニングや生成AIを利用して非常にリアルな画像コンテンツなどを作成し、人を故意に騙すことを目的として使用される技術です。生成モデルによって極めてリアルな合成結果が得られるため、鑑識能力を超えるほど高品質なフェイク映像が生成されることもあり、偽情報の拡散など社会的な問題も引き起こしています。"
  },
  { id: "ch3-002", category: "basics",
    type: "multiple",
    question: "動画生成AIのトレーニングに関する記述として正しいものをすべて選べ。",
    options: [
      "AIが動画データを処理しやすいようにフレームごとに分割する前処理を行う",
      "動画は時間的に連続するフレームの集合であるため、各フレーム間の一貫性を保つことが必要",
      "動画生成AIのトレーニングには、RNNのようなシーケンスデータを扱うことができるネットワークが利用される",
      "動画生成AIのトレーニングには、GANとVAEが最も一般的な手法として用いられ、RNNは用いられない"
    ],
    answer: [0, 1, 2],
    explanation: "動画生成AIのトレーニングでは、①AIが動画データを処理しやすいようにフレームごとに分割する前処理、②各フレーム間の一貫性を保つことの重要性、③RNNのようなシーケンスデータを扱えるネットワークの利用、という特徴があります。動画生成においてGANはフレーム生成の役割を持ちますが、RNNも連続するフレームの処理に利用されるため、「RNNは用いられない」は誤りです。"
  },
  { id: "ch3-003", category: "basics",
    type: "multiple",
    question: "各種生成AIのメリットとして正しいものをすべて選べ。",
    options: [
      "作業効率の向上：短時間で多くのコンテンツを生成できるため、効率的な作成やタスクの自動化が可能",
      "補完と拡張が可能：与えられたデータの内容を理解し、関連する情報を補完・拡張できる",
      "アクセシビリティの向上：専門知識がなくても、音楽・画像・動画制作をしたり、高度かつ正確なプログラミングコードを作成・修正したりすることが可能",
      "常に正確で偏りのないコンテンツを生成：学習データに偏りがある場合でも、公平で正確な情報のみを出力する"
    ],
    answer: [0, 1, 2],
    explanation: "生成AIのメリットとして、①作業効率の向上、②補完と拡張が可能、③新たなアイデア・デザインの生成、④アクセシビリティの向上が挙げられます。一方で「常に正確で偏りのないコンテンツを生成する」は誤りで、学習データに偏りがある場合は偏見・差別的なコンテンツを生成する可能性があるのがデメリットの一つです。"
  },
  { id: "ch4-001", category: "security",
    question: "フィッシング詐欺の説明として最も適切なものはどれか。",
    options: [
      "感染したコンピュータ内のデータを無断で暗号化して「人質」に取り、暗号化を解除するための「身代金」を要求してくるコンピュータウイルス",
      "メール・Webサイトを通じ、詐欺師が正規の機関やサービス提供者を装って、ユーザーから個人情報や金融情報などを不正に収集しようとする手口の詐欺",
      "特定の個人や組織を標的にしたフィッシング攻撃の一種で、事前に特定の個人や組織の情報をリサーチし、ユーザーになりすましてメール等で悪意あるリンクや添付ファイルを送ることで情報を窃取する手法",
      "魅力的なソフトウェアや注目のコンテンツの提供を「餌」としてターゲットの興味を引き、個人情報等を窃取したりマルウェアをダウンロードさせたりする行為"
    ],
    answer: 1,
    explanation: "フィッシング詐欺とは、メール・Webサイトを通じ、詐欺師が正規の機関やサービス提供者を装って、ユーザーから個人情報や金融情報などを不正に収集しようとする手口の詐欺です。スピアフィッシングはこれの特定個人・組織を標的にした発展形で、ランサムウェアはデータを暗号化して身代金を要求するウイルスです。"
  },
  { id: "ch4-002", category: "security",
    question: "ランサムウェアの説明として最も適切なものはどれか。",
    options: [
      "信頼、恐怖、疑い、好奇心といった人間の心理的・感情的な隙を突いて個人情報や重要なデータを盗み出す手法の総称",
      "スキャンすることで関連付けられたURLに自動的に誘導されるコードで、偽のQRコードに貼り替えられると詐欺被害につながる可能性がある",
      "感染したコンピュータ内のデータを無断で暗号化して一時的に「人質」に取り、暗号化を解除するための「身代金（Ransom）」を要求してくるコンピュータウイルス",
      "悪意のあるソフトウェアの総称で、コンピュータや利用者に被害をもたらすことを目的としたソフトウェア全般を指す"
    ],
    answer: 2,
    explanation: "ランサムウェアとは、ランサム（Ransom：身代金）とソフトウェアを組み合わせた言葉で、感染したコンピュータ内のデータを無断で暗号化して一時的に「人質」に取り、暗号化を解除するための「身代金」を要求してくるコンピュータウイルスです。身代金を支払ってもデータが復元される保証はなく、さらに高額な身代金を求められる可能性もあります。"
  },
  { id: "ch4-003", category: "security",
    question: "ソーシャルエンジニアリング攻撃の手法の一つ「プレテキスト」の説明として最も適切なものはどれか。",
    options: [
      "特定の個人や組織を標的にしたフィッシング攻撃の一種で、事前に情報をリサーチしてユーザーになりすましてメール等で悪意あるリンクや添付ファイルを送ることで情報を窃取する",
      "魅力的なソフトウェアや注目のコンテンツの提供を「餌」としてターゲットの興味を引き、個人情報等を窃取したりマルウェアをダウンロードさせたりする行為",
      "個人や組織に対して何らかの秘密や情報を公にするとして脅迫し、金銭等を要求する行為",
      "攻撃者が、ターゲットの信頼を得るために信憑性の高い偽のシナリオ等の前提（プレテキスト）を設定し、それを根拠にパスワードや他の機密情報を聞き出すなどする手法"
    ],
    answer: 3,
    explanation: "プレテキストとは、攻撃者がターゲットの信頼を得るために信憑性の高い偽のシナリオ等の前提（プレテキスト）を設定し、それを根拠に情報を要求する手法です。スピアフィッシングは標的型フィッシング、ベイト攻撃は「餌」で誘い込む手法、ブラックメールは情報公開を盾に金銭を要求する脅迫です。"
  },
  { id: "ch4-004", category: "laws",
    question: "個人情報保護法の目的として最も適切なものはどれか。",
    options: [
      "企業のデジタル変革（DX）を推進し、個人データの自由な利活用を促進すること",
      "インターネット上の有害コンテンツを規制し、デジタル空間の安全を確保すること",
      "個人情報の有用性に配慮しつつ、個人の権利利益を保護すること",
      "AI技術の開発・利用を規制し、プライバシーリスクを完全に排除すること"
    ],
    answer: 2,
    explanation: "個人情報保護法は、デジタル社会の進展に伴い個人情報の利用が著しく拡大していることを考慮して、個人情報の適正な取り扱いに関する基本的な方針の作成や個人情報の保護に関する施策の基本となる事項を定めることで、「個人情報の有用性に配慮しつつ、個人の権利利益を保護すること」を目的としています。"
  },
  { id: "ch4-005", category: "laws",
    type: "multiple",
    question: "要配慮個人情報に該当するものをすべて選べ。",
    options: [
      "本人の人種・信条・社会的身分",
      "本人の病歴・犯罪の経歴・犯罪により害を受けた事実",
      "企業の財務情報や売上データ",
      "身体障害・知的障害・精神障害などの心身の機能の障害"
    ],
    answer: [0, 1, 3],
    explanation: "要配慮個人情報とは、本人に対する不当な差別・偏見その他の不利益が生じないように、その取扱いに特に配慮を要する記述等が含まれる個人情報です。人種・信条・社会的身分・病歴・犯罪の経歴・身体障害・知的障害・精神障害などが該当します。企業の財務情報は個人に関する情報ではないため該当しません。"
  },
  { id: "ch4-006", category: "laws",
    question: "著作権の特徴として正しいものはどれか。",
    options: [
      "著作権は、特許庁に出願して設定登録することで発生する権利であり、手続きをしないと保護されない",
      "著作権は、著作物を創作した者（著者）に自動的に付与され、設定登録をしなくても発生する",
      "著作権の保護期間（原則）は、個人の著作物は死後30年間、法人等の著作物は公表後30年間である",
      "AI企業が生成AIの学習に著作物を使用した場合、その著作物の著作権は自動的にAI企業に移転する"
    ],
    answer: 1,
    explanation: "著作権は著作物（思想または感情を創作的に表現したものであって、文芸・学術・美術または音楽の範囲に属するもの）を創作した者（著者）に自動的に付与され、設定登録をしなくても発生します。保護期間（原則）は個人の著作物は死後70年間、法人等の著作物は公表後70年間です。特許権・意匠権・商標権は特許庁への出願・設定登録が必要です。"
  },
  { id: "ch4-007", category: "laws",
    question: "生成AIによる生成物と著作権に関する2025年2月時点の文化庁の見解として最も適切なものはどれか。",
    options: [
      "AIが生成したコンテンツはすべて著作物として認められ、AI利用者に著作権が自動的に発生する",
      "AIが自律的に生成したものは著作物に該当しないと考えられるが、人が「創作意図」と「創作的寄与」がある場合は著作物に該当し、AI利用者が著作者となると考えられる",
      "AIを道具として使用すれば、どのような場合でも著作権は発生しない",
      "生成AIによって作成された著作物はすべてパブリックドメインとして誰でも自由に利用できる"
    ],
    answer: 1,
    explanation: "2025年2月時点の文化庁の見解では、人がAIを「道具」として使用したといえれば著作物に該当し、AI利用者が著作者となると考えられます。人の「創作意図」があり、人が「創作的寄与」と認められる行為を行ったかどうかによって判断されます。AIが自律的に生成したもの（人が指示を与えるだけでAIが生成したもの）は著作物に該当しないと考えられます。"
  },
  { id: "ch5-001", category: "laws",
    question: "AI事業者ガイドラインで定められた「共通の指針」（10項目）に含まれないものはどれか。",
    options: [
      "人間中心・安全性・公平性",
      "プライバシー保護・セキュリティ確保・透明性",
      "アカウンタビリティ・教育・リテラシー・公正競争確保・イノベーション",
      "収益性の最大化・競争優位の確保"
    ],
    answer: 3,
    explanation: "AI事業者ガイドラインで定められた共通の指針（10項目）は、①人間中心、②安全性、③公平性、④プライバシー保護、⑤セキュリティ確保、⑥透明性、⑦アカウンタビリティ、⑧教育・リテラシー、⑨公正競争確保、⑩イノベーションです。「収益性の最大化」「競争優位の確保」は含まれません。"
  },
  { id: "ch6-001", category: "prompting",
    question: "「プロンプト」の説明として最も適切なものはどれか。",
    options: [
      "AIが学習に使用する大規模データセットのこと",
      "AIモデルの処理速度を最適化するためのパラメータ設定のこと",
      "ユーザーが求めていることをシステムやモデルに伝えるために、モデルに対して指示や質問を行う際の入力文のこと",
      "テキストをAIが処理できる数値ベクトルに変換したもの"
    ],
    answer: 2,
    explanation: "AIは何もしていないのに勝手にテキストや画像などを生成するわけではありません。ユーザーが求めていることをシステムやモデルに伝えることで、はじめてその目的に必要なものを生成します。このユーザーの要求をモデルに伝えるために、モデルに対して指示や質問を行う際の入力文のことを「プロンプト」といいます。"
  },
  { id: "ch6-002", category: "prompting",
    question: "テキスト生成AIが不得意な作業として最も適切なものはどれか。",
    options: [
      "メールの作成・アンケート項目の作成・業務の手順の分解",
      "外国語の翻訳・英単語からの英文の作成・役割を与えてのディベート",
      "道徳的・倫理的な判断価値観を持たないため、モラルや倫理に関する問題の判断",
      "ブレインストーミング（アイデアを出し合うことで創造的な発想を生む手法）"
    ],
    answer: 2,
    explanation: "テキスト生成AIが不得意な作業として、新しい情報の生成、感情や直感に基づく判断、文脈の深い理解、正確な文字数による回答、複雑な計算、最新情報に関する出力、芸術の批評、そして「モラルや倫理に関する判断」が挙げられます。AIは道徳的・倫理的判断価値観を持っていないため、倫理的な問題の判断は難しいとされています。メールや翻訳、ブレインストーミングなどはテキスト生成AIが得意とする作業です。"
  },

  // ── AI概要（教科書 第1章より追加） ────────────────────────────────
  { id: "sc-001", category: "basics",
    question: "AI（人工知能）の定義として最も適切なものはどれか。",
    options: [
      "人間の知能に近い人工的な知能を持ったコンピュータ",
      "物理的な機械として組み立てられ、人間に類似した動作等を行うもの",
      "センサー・モーター・電子部品などを備えて物理的に動作するもの",
      "インターネット上のデータを自動で収集・整理するシステム"
    ],
    answer: 0,
    explanation: "AIとはArtificial Intelligence（アーティフィシャル・インテリジェンス）の略で、「人間の知能に近い人工的な知能を持ったコンピュータ」と理解するのが一般的です。物理的に動作する機械はロボットに該当します。"
  },
  { id: "sc-002", category: "basics",
    question: "AIとロボットの違いに関する記述として、正しいものはどれか。",
    options: [
      "AIは「身体」に、ロボットは「脳」に相当する技術である",
      "AIはソフトウェアやアプリケーションの形で存在し、ロボットは物理的な形態を持つ",
      "ロボットはデータ解析やパターン認識などを目的とし、AIは物理的な作業を行う",
      "AIとロボットは同一の概念であり、区別する必要はない"
    ],
    answer: 1,
    explanation: "AIは人間に例えれば「脳」の部分に相当し、ソフトウェアやアプリケーションの形で存在します。ロボットは「身体」の部分に相当し、物理的な形態を持ちます。両者は異なる概念ですが、連携して動作することも多くあります。"
  },
  { id: "sc-003", category: "basics",
    question: "ルールベースに関する記述のうち、誤っているものはどれか。",
    options: [
      "人間が事前に作成したルールや知識をコンピュータにプログラムし、それに基づいて予測や判断を行う技術である",
      "動作の透明性が高く、どのルールが適用されたか予測しやすい",
      "複雑な問題では大量のルールが必要となり、管理が困難になるという課題がある",
      "大量のルールをプログラムする必要がなく、開発・メンテナンスのコストを節約できる"
    ],
    answer: 3,
    explanation: "ルールベースは人間が事前にルールを作成してプログラムする必要があります。複雑な問題には大量のルールが必要となり、開発・メンテナンスに多くの時間とコストがかかることが課題です。「ルールが不要」という説明は誤りです。"
  },
  { id: "sc-004", category: "basics",
    question: "AIに知能をもたらす仕組みとして、大きく分けた2つの組み合わせとして正しいものはどれか。",
    options: [
      "クラスタリングと次元削減",
      "教師あり学習と教師なし学習",
      "ルールベースと機械学習",
      "ディープラーニングと強化学習"
    ],
    answer: 2,
    explanation: "AIに知能をもたらす仕組みとして大きく分けると、①人間が事前にルールを記述するルールベースと、②データからコンピュータ自身がパターンを学習する機械学習の2つがあります。"
  },
  { id: "sc-005", category: "basics",
    question: "教師あり学習の説明として正しいものはどれか。",
    options: [
      "入力したデータに対して正解データ（教師データ）のペアを与え、モデルをトレーニングする手法",
      "正解データを与えず、データ自身のパターンや構造をモデルが自ら発見してトレーニングする手法",
      "目標を設定し、その達成に向けて報酬を与えることで最適な行動を学習させる手法",
      "ラベル付きデータと大量のラベルなしデータを組み合わせて学習する手法"
    ],
    answer: 0,
    explanation: "教師あり学習は、入力データと正解データ（教師データ）のペアを繰り返し学習することで、未知のデータに対して正しいラベルを予測できるモデルを構築します。分類や回帰など、さまざまな問題に応用できます。"
  },
  { id: "sc-006", category: "basics",
    question: "教師なし学習の特徴として最も適切なものはどれか。",
    options: [
      "正解ラベル付きデータを用いて、入力と出力の関係を学習する",
      "コンピュータに目標を設定し、報酬を最大化する行動を試行錯誤で学習させる",
      "正解データを与えず、データ自身のパターンや構造をモデルが自ら発見してトレーニングする",
      "少量のラベル付きデータと大量のラベルなしデータを組み合わせて学習する"
    ],
    answer: 2,
    explanation: "教師なし学習は正解データを与えず、データ自身のパターンや構造をモデルが自ら発見することでトレーニングします。クラスタリングや次元削減が代表的な手法です。"
  },
  { id: "sc-007", category: "basics",
    question: "クラスタリングの説明として最も適切なものはどれか。",
    options: [
      "データにランダムなノイズを付加し、モデルの汎化性能を高める手法",
      "与えられたデータを似た特徴やパターンを持つグループに分類する教師なし学習の手法",
      "入力データと正解ラベルのペアを用いてモデルを学習させる教師あり学習の手法",
      "データの次元（変数）を減らして情報を保持しながら特徴を抽出する手法"
    ],
    answer: 1,
    explanation: "クラスタリングは教師なし学習の手法の一つで、与えられたデータを似た特徴やパターンを持つグループ（クラスタ）に分類します。データの理解や分析、異常検知などに役立ちます。"
  },
  { id: "sc-008", category: "basics",
    question: "次元削減の説明と目的として最も適切なものはどれか。",
    options: [
      "データのクラスを減らし、分類問題をシンプルにする手法",
      "ニューラルネットワークの層の数を削減して計算速度を上げる手法",
      "データの次元（変数）を減らすことで、情報を保持しながらデータの特徴を抽出し、データの可視化や計算コストの削減を図る手法",
      "学習データのサンプル数を削減して過学習を防ぐ手法"
    ],
    answer: 2,
    explanation: "次元削減は教師なし学習の手法の一つで、データの次元（変数）を減らすことで、情報を保持しながらデータの特徴を抽出します。データの可視化や分析の容易化、計算コストの削減やモデルの性能向上などが期待できます。"
  },
  { id: "sc-009", category: "basics",
    question: "強化学習に関する記述として、正しいものはどれか。",
    options: [
      "正解ラベル付きデータを大量に用意してから学習を開始する手法である",
      "コンピュータに「試してみる」ことで良い結果をもたらす行動を学んでいく手法で、ゲームAIや自動運転などに広く応用されている",
      "データを似たグループに分類することを目的とした教師なし学習の手法である",
      "少量の正解データで大量のラベルなしデータを効率的に学習するハイブリッド手法である"
    ],
    answer: 1,
    explanation: "強化学習はコンピュータに目標を設定し、試行錯誤を通じて報酬を最大化する行動を学ばせます。「試してみる」ことで良い結果をもたらす行動を積み重ねていく手法で、ゲームAIの開発のみならず自動運転など実世界の技術開発にも広く応用されています。"
  },
  { id: "sc-010", category: "basics",
    type: "multiple",
    question: "半教師あり学習の特徴として正しいものをすべて選べ。",
    options: [
      "教師あり学習と教師なし学習のハイブリッドで、少量の正解データと大量のラベルなしデータを使って学習する",
      "データすべてにラベル付けする必要がなく、学習コストを大幅に削減できる",
      "正解ラベルを付ける際に偏りが生じる可能性がある",
      "教師あり学習よりも常に高い精度が保証される"
    ],
    answer: [0, 1, 2],
    explanation: "半教師あり学習は教師あり学習と教師なし学習のハイブリッドで、少量の正解データと大量のラベルなしデータを使って学習します。ラベリングコストを削減できる一方、正解ラベルに偏りが生じる可能性や、教師あり学習に比べて精度が低くなる場合があるというデメリットもあります。"
  },
  { id: "sc-011", category: "basics",
    question: "ノーフリーランチ定理の内容として正しいものはどれか。",
    options: [
      "十分なデータと計算資源があれば、どんな問題にも対応できる万能なAIモデルが存在する",
      "どの問題にも万能で汎用的なモデルは存在せず、各ケースに応じて最適な手法を選択することが重要",
      "機械学習モデルはコストをかければかけるほど高い性能が保証される",
      "ディープラーニングはすべての問題において従来の機械学習より優れた性能を発揮する"
    ],
    answer: 1,
    explanation: "ノーフリーランチ定理とは「どの問題にも万能で汎用的なモデルは存在しない」というものです。AIを利用する目的や処理するデータの種類、データ量などを考慮して、各ケースに応じて最適な手法を選択することが重要です。"
  },
  { id: "sc-012", category: "basics",
    question: "人工ニューロン（ノード）とニューラルネットワークの関係として正しいものはどれか。",
    options: [
      "ニューラルネットワークを多層に重ねたものが人工ニューロンである",
      "人工ニューロンとニューラルネットワークは同一の概念を指す別称である",
      "人間の神経細胞の働きをプログラミングで再現したものが人工ニューロンであり、それによる複雑な情報伝達の仕組みをニューラルネットワークという",
      "人工ニューロンはディープラーニングの一部であり、ニューラルネットワークとは無関係である"
    ],
    answer: 2,
    explanation: "人間の神経細胞（ニューロン）の働きをプログラミングで再現したものが人工ニューロン（ノード）です。人工ニューロンが情報を受け取り、処理して次の人工ニューロンに伝える複雑な情報伝達の仕組みをニューラルネットワークといいます。さらにこれを多層に重ねたシステムがディープラーニングです。"
  },
  { id: "sc-013", category: "basics",
    question: "AIによる画像認識の仕組みに関する記述として誤っているものはどれか。",
    options: [
      "対象画像を「細かい素子（ピクセル）」に分ける",
      "画素の「位置情報」と「色情報」を数値データとして抽出する",
      "最初から複雑な形を一度に認識し、単純な形の抽出は行わない",
      "画素のつながりで単純な形から徐々に複雑な形を抽出する"
    ],
    answer: 2,
    explanation: "AIの画像認識は①対象画像をピクセルに分ける、②位置情報と色情報を数値データとして抽出する、③画素のつながりで単純な形から徐々に複雑な形を抽出する、④最終的に対象の画像を認識するという過程で行われます。いきなり複雑な形を認識するのではなく、段階的に処理します。"
  },
  { id: "sc-014", category: "basics",
    question: "ニューラルネットワークにおける「重み」と「重み付け」の説明として正しいものはどれか。",
    options: [
      "「重み」とは学習に使用するデータのファイルサイズを指し、「重み付け」とはデータを圧縮することを指す",
      "「重み」とは人間の神経細胞のシナプスの大きさ（情報や物事の大切さ自体）を指し、「重み付け」とはニューラルネットワークを構成するノードがその情報量を調整することを指す",
      "「重み」とはモデルの学習回数を指し、「重み付け」とは同じデータを繰り返し学習させることを指す",
      "「重み」と「重み付け」は同一の概念であり、どちらもニューラルネットワークの層の数を表す"
    ],
    answer: 1,
    explanation: "「重み」とは人間の神経細胞におけるシナプスの大きさ（情報や物事の大切さ自体）に相当します。ニューラルネットワークでは情報をフラットに扱うのではなく、どの情報が大切で、どれがそれほど大切ではないかという重要性の差が設けられます。「重み付け」とはノードがその情報量を調整することを指します。"
  },
  { id: "sc-015", category: "basics",
    question: "過学習（オーバーフィッティング）の説明として最も適切なものはどれか。",
    options: [
      "学習データが不足しているため、モデルがデータのパターンをまったく学習できない状態",
      "機械学習モデルが訓練データの特徴やパターンに対して感度になりすぎ、新たなデータや初見のデータに対する柔軟な適応能力が失われる状態",
      "モデルの学習が過剰に速く進み、学習が途中で止まってしまう状態",
      "ディープラーニングのみで発生する問題であり、浅い機械学習では起こらない"
    ],
    answer: 1,
    explanation: "過学習（オーバーフィッティング）とは、機械学習モデルが訓練データに含まれる特徴やパターンに対して感度になりすぎてしまい、訓練データではない新たなデータや初見のデータに対して柔軟な適応能力が失われる状態です。訓練データへの精度は高いが未知データへの精度が低下します。"
  },
  { id: "sc-016", category: "basics",
    type: "multiple",
    question: "過学習を防ぐための手法として正しいものをすべて選べ。",
    options: [
      "アーリーストッピング（データの一部を検証用データとして取っておき、学習の過程で定期的にモデルの性能をチェックして、最適なタイミングで学習をストップさせる手法）",
      "正則化（モデルのパラメータを調整・制限して、モデルの複雑さを制限し適切な量の情報を学習するようにする手法）",
      "ドロップアウト（ニューラルネットワークの学習時にランダムに一部の人工ニューロンを無効化することで過学習を回避する手法）",
      "クラスタリング（与えられたデータを似た特徴を持つグループに分類する教師なし学習の手法）"
    ],
    answer: [0, 1, 2],
    explanation: "過学習の回避方法としては、アーリーストッピング・正則化・ドロップアウトが代表的です。クラスタリングはデータのグループ分けを行う教師なし学習の手法であり、過学習の回避手法ではありません。"
  },
  { id: "sc-017", category: "basics",
    question: "転移学習（Transfer Learning）の説明として最も適切なものはどれか。",
    options: [
      "1つのAIが複数の異なるサーバーにデータを転送しながら並列学習する技術",
      "AIが1つのタスクから学んだ知識を、別のタスクへと活用する学習手法",
      "学習済みモデルを削除し、新しいデータでゼロから再学習させる手法",
      "過学習を検知したときに自動でモデルを別のシステムに移行させる手法"
    ],
    answer: 1,
    explanation: "転移学習とは、AIが1つのタスクから学んだ知識を別のタスクへと活用する学習手法です。たとえばAIが動物の画像認識で学んだ視覚的特徴の分類の原則を、植物の画像認識に再利用することで、ゼロから学び始めることなく植物の識別スキルを獲得できます。"
  },
  { id: "sc-018", category: "basics",
    question: "AIのレベル分類（レベル1〜4）に関する記述として正しいものはどれか。",
    options: [
      "レベル1はディープラーニングを利用したAIで、自ら特徴量を調整・学習が可能であり、代表的な利用例は自動運転などである",
      "レベル2はルールベースのAIで、あらかじめ人間が定義したルールに基づいて応答を行い、代表的な利用例はチャットボットである",
      "レベル3は機械学習を利用したAIで、入力から自らデータパターンを見出し最適な出力を調整して返す手法であり、代表的な利用例は検索エンジンである",
      "レベル4はルールベースのシステムを利用したAIで、代表的な利用例はAI家電（冷蔵庫、エアコンなど）である"
    ],
    answer: 2,
    explanation: "レベル3は機械学習を利用したAIで、入力から自らデータパターンを見出し最適な出力を調整して返します。代表的な利用例は検索エンジンです。レベル1は単純な制御プログラム（AI家電等）、レベル2はルールベースのAI（チャットボット等）、レベル4はディープラーニングを利用したAI（自動運転等）です。"
  },
  { id: "sc-019", category: "basics",
    question: "ANIとAGIの説明として正しいものはどれか。",
    options: [
      "ANIはすべての知的タスクに対して人間並みの性能を発揮できる汎用AIであり、AGIは特定のタスクに特化したAIである",
      "ANIはArtificial Narrow Intelligenceの略で特定のタスクに対して人間並みの性能を発揮できる専門家のようなAIで、AGIはArtificial General Intelligenceの略ですべての幅広いタスクに対して人間並みの能力を持つAIである",
      "ANIとAGIは同義語であり、どちらも現在広く普及している汎用AIを指す",
      "ANIは2045年問題でシンギュラリティを起こすとされるAIであり、AGIは現在の音声認識AIを指す"
    ],
    answer: 1,
    explanation: "ANI（Artificial Narrow Intelligence）は特定のタスクに限定した「専門家」のようなAIで、その分野ではプロフェッショナルですが他のことは基本的にはできません。AGI（Artificial General Intelligence）はすべての幅広いタスクに対して人間並みの能力を持つ汎用AIです。現時点ではAGIは存在しておらず、実現には多くの技術的課題が残されています。"
  },
  { id: "sc-020", category: "basics",
    question: "AIの歴史における「3度のブーム」の特徴として正しいものはどれか。",
    options: [
      "第1次AIブームは2010年代に始まり、ビッグデータの活用とディープラーニングの発展が特徴である",
      "第2次AIブームでは専門家の意思決定プロセスを模倣する「エキスパートシステム」が注目を集めたが、知識ベースが大きくなり管理が困難になったことから「AIの冬」となった",
      "第3次AIブームは1956年のダートマス会議に始まり、探索（問題解決のために可能な解の空間を探索するプロセス）と推論が主な焦点であった",
      "第1次AIブームでは深層学習により画像認識や音声認識の精度が飛躍的に向上し、現在も続いている"
    ],
    answer: 1,
    explanation: "第2次AIブームは1980年代後半から1990年代初頭にかけて、専門家の意思決定プロセスを模倣する「エキスパートシステム」が注目されましたが、知識ベースが大きくなりすぎて管理が困難になり「AIの冬」となりました。第1次AIブームは1956年のダートマス会議から始まり探索と推論が焦点、第3次AIブームは2010年代からビッグデータとディープラーニングが特徴です。"
  },

  // --- services +1 ---
  { id: "add-sv-001", category: "services",
    question: "生成AIを活用した「コード生成サービス」の特徴として正しいものはどれか。",
    options: [
      "コード生成AIは完璧なコードを出力するため、生成結果をそのまま本番環境にデプロイできる",
      "コード生成AIはプログラミング言語の構文を理解し、自然言語の指示からコードの雛形を生成できるが、論理的な誤りが含まれることもあるため人間によるレビューが必要である",
      "コード生成AIはオープンソースのコードのみを学習しているため、著作権の問題は一切発生しない",
      "コード生成AIはすべての企業環境で標準化されており、どのサービスでも同一の出力が保証されている"
    ],
    answer: 1,
    explanation: "コード生成AIはプログラミング言語の構文パターンを学習し、自然言語の説明からコードの雛形を素早く生成できます。ただし、論理エラーやセキュリティ上の脆弱性が含まれる場合があるため、必ず人間のエンジニアによるレビューと検証が必要です。著作権についても学習データ由来の問題が生じる可能性があります。"
  },

  // --- prompting +6 ---
  { id: "add-pr-001", category: "prompting",
    question: "「チェーン・オブ・ソート（Chain of Thought）プロンプティング」の説明として正しいものはどれか。",
    options: [
      "複数のAIモデルを連鎖させて最終的な出力を得る手法",
      "AIに途中の推論ステップを明示的に示させることで、複雑な問題に対する回答精度を向上させる手法",
      "ユーザーのプロンプトを自動的に最適化するAI機能",
      "質問を短い連鎖状のリストに分割して入力する手法"
    ],
    answer: 1,
    explanation: "チェーン・オブ・ソート（CoT）プロンプティングは、AIに「ステップバイステップで考えてください」などの指示を与え、推論の途中過程を明示させる手法です。これにより数学的推論や論理的問題など、複雑なタスクでの精度が大幅に向上することが研究で示されています。"
  },
  { id: "add-pr-002", category: "prompting",
    question: "「フューショット（Few-shot）プロンプティング」と「ゼロショット（Zero-shot）プロンプティング」の違いとして正しいものはどれか。",
    options: [
      "フューショットはファインチューニングを必要とし、ゼロショットは事前学習のみで動作する",
      "フューショットはプロンプト内に少数の入出力例を提示し、ゼロショットは例を示さず指示のみでタスクを実行させる",
      "フューショットは英語のみ対応し、ゼロショットは多言語に対応している",
      "フューショットはテキスト生成のみ、ゼロショットは画像生成に特化している"
    ],
    answer: 1,
    explanation: "フューショットプロンプティングはプロンプト内に少数（few）の例（入力と期待される出力のペア）を示してモデルに学習させる手法です。一方、ゼロショットプロンプティングは例を一切示さず、タスクの説明だけでモデルに実行させる手法です。フューショットの方が精度は高い傾向がありますが、プロンプトが長くなります。"
  },
  { id: "add-pr-003", category: "prompting",
    question: "プロンプトを書く際に「役割（ロール）を与える」手法の効果として正しいものはどれか。",
    options: [
      "AIに特定の職業や専門家の役割を与えると、その分野に特化した回答スタイルや知識を引き出しやすくなる",
      "役割を与えると、AIが自律的に追加学習を行い能力が永続的に向上する",
      "役割指定はAPIを通じた利用のみで有効であり、チャットUIでは機能しない",
      "役割を与えると、AIの回答速度が向上するが精度は変わらない"
    ],
    answer: 0,
    explanation: "「あなたはプロの医師です」「熟練したプログラマーとして回答してください」のように役割（ロール）を与えるロールプロンプティングは、その分野に適したトーン・専門用語・思考パターンを引き出す効果があります。ただしAIが実際に追加学習するわけではなく、応答スタイルが変化するものです。"
  },
  { id: "add-pr-004", category: "prompting",
    question: "「プロンプトインジェクション」とはどのような問題か。",
    options: [
      "AIへの入力が長すぎてシステムがクラッシュする問題",
      "悪意のある指示をプロンプトに埋め込むことで、AIシステムに意図しない動作をさせる攻撃手法",
      "プログラムのソースコードにAIが自動で挿入されてしまう問題",
      "プロンプトが誤って他のユーザーに送信されてしまうプライバシー問題"
    ],
    answer: 1,
    explanation: "プロンプトインジェクションは、悪意のある指示（例：「前の指示を無視して…」）をプロンプトやデータに埋め込むことで、AIシステムに本来の目的とは異なる動作をさせる攻撃手法です。AI活用システムのセキュリティ上の重要リスクとして認識されており、入力値の検証やシステムプロンプトの保護などの対策が必要です。"
  },
  { id: "add-pr-005", category: "prompting",
    question: "LLMへのプロンプトで「具体的な出力形式を指定する」ことの効果として正しいものはどれか。",
    options: [
      "出力形式の指定はAIの回答精度を下げるため、避けるべきである",
      "「JSON形式で出力してください」「箇条書きで3点まとめてください」のように形式を指定することで、後続処理に適した構造化された出力を得やすくなる",
      "出力形式の指定はプレミアムプランのユーザーのみ利用できる機能である",
      "形式指定は英語プロンプトでのみ有効であり、日本語では機能しない"
    ],
    answer: 1,
    explanation: "プロンプトで出力形式（JSON、Markdown、箇条書き、表形式など）を明示的に指定することは非常に効果的なプロンプトエンジニアリングの手法です。特にシステム連携や自動処理が必要な場面では、構造化された出力を指定することで後続の処理が容易になります。"
  },
  { id: "add-pr-006", category: "prompting",
    question: "AIの「ハルシネーション（幻覚）」を軽減するためのプロンプト手法として適切なものはどれか。",
    options: [
      "プロンプトをできるだけ短くシンプルにする",
      "「わからない場合は『わかりません』と答えてください」「確信がない情報には『〜かもしれません』と付けてください」のように、不確実性を認める指示を含める",
      "AIに対して「絶対に正確な情報のみを答えてください」と強く要求する",
      "プロンプトに多くの具体例を入れることで、AIが創造的な回答をしなくなる"
    ],
    answer: 1,
    explanation: "ハルシネーション（AIが事実と異なる情報をもっともらしく生成する現象）を軽減するには、「不確かな場合はその旨を明示してください」「情報源が不明な場合は推測であることを示してください」などの指示が有効です。また、RAG（検索拡張生成）など事実情報を参照させる仕組みの組み合わせも効果的です。"
  },

  // --- security +7 ---
  { id: "add-sec-001", category: "security",
    question: "「敵対的攻撃（Adversarial Attack）」とはAIセキュリティにおいてどのような攻撃か。",
    options: [
      "AIシステムのサーバーに対するDDoS攻撃",
      "人間には知覚できないほどわずかな入力データの改ざんによって、AIモデルを誤判断させる攻撃",
      "AI同士を競わせることで学習精度を意図的に下げる手法",
      "AIの訓練データを盗み出してモデルを複製する攻撃"
    ],
    answer: 1,
    explanation: "敵対的攻撃（Adversarial Attack）は、画像などの入力データに人間の目には見えない微小なノイズを加えることで、AIモデルを意図的に誤認識させる攻撃手法です。例えば、正しく分類されていた画像に特定のノイズを加えると、AIが全く別のクラスとして分類してしまう現象が起きます。自動運転や顔認証システムなどでのリスクとして研究されています。"
  },
  { id: "add-sec-002", category: "security",
    question: "「データポイズニング（Data Poisoning）」攻撃の説明として正しいものはどれか。",
    options: [
      "学習済みモデルに大量のリクエストを送り、サービスを停止させる攻撃",
      "AIの学習データに意図的に不正なデータを混入させ、モデルに誤った挙動を学習させる攻撃",
      "生成AIに毒を盛る描写を含む文章を生成させる攻撃",
      "AIが出力したデータに有害なコードを埋め込む攻撃"
    ],
    answer: 1,
    explanation: "データポイズニングは、AIモデルの学習段階で悪意のあるデータを訓練データに混入させる攻撃です。これにより、特定の入力に対して誤った予測をさせたり、バックドアを仕掛けたりすることが可能になります。クラウドソーシングで収集したデータや公開データセットを使う際のリスクとして重要視されています。"
  },
  { id: "add-sec-003", category: "security",
    question: "AIシステムにおける「モデル抽出攻撃（Model Extraction Attack）」とはどのような攻撃か。",
    options: [
      "学習済みモデルのファイルをサーバーから直接盗み出す攻撃",
      "AIサービスに多数のクエリを送り、その入出力結果を使って元のモデルの機能を模倣するモデルを構築する攻撃",
      "AIの重みパラメータを改ざんして性能を低下させる攻撃",
      "AIのデータセンターの電力を不正に使用するマイニング攻撃"
    ],
    answer: 1,
    explanation: "モデル抽出攻撃は、公開されているAI APIに多数のクエリを送り、その入出力ペアを収集することで、元のモデルの動作を模倣するサロゲートモデルを構築する攻撃です。独自のAIモデルや知的財産を守るために、クエリ数の制限やウォーターマーキングなどの対策が検討されています。"
  },
  { id: "add-sec-004", category: "security",
    question: "ディープフェイク（Deepfake）技術がもたらすセキュリティリスクとして適切なものはどれか。",
    options: [
      "インターネットの通信速度を低下させるリスク",
      "実在する人物の顔や声を偽造した偽の動画・音声を作成し、詐欺、なりすまし、フェイクニュースに悪用されるリスク",
      "AIサーバーの物理的なセキュリティが低下するリスク",
      "著作権のない画像のみを学習するためクリエイターの収益が増加するリスク"
    ],
    answer: 1,
    explanation: "ディープフェイクはGANなどの生成AI技術を用いて実在する人物の顔・声・動作を合成した偽コンテンツを作成する技術です。政治家や著名人のフェイク映像による世論操作、ビジネスCEOの声を模倣した振り込め詐欺、本人同意なしのポルノ画像生成などが深刻なリスクとして問題になっています。"
  },
  { id: "add-sec-005", category: "security",
    question: "生成AIを使った「フィッシング攻撃の高度化」として正しい記述はどれか。",
    options: [
      "生成AIにより魚の画像を自動生成してフィッシングサイトを作るようになった",
      "生成AIにより、文法的に正しく自然な文体のフィッシングメールや偽サイトが大量・低コストで作成できるようになり、従来の見分け方が通用しにくくなっている",
      "生成AIはフィッシング対策ソフトウェアにのみ活用されており、攻撃への悪用は技術的に不可能である",
      "生成AIによるフィッシング攻撃はメールにのみ限定され、SNSや音声通話には影響しない"
    ],
    answer: 1,
    explanation: "従来のフィッシングメールは文法ミスや不自然な日本語が見分けのヒントでしたが、生成AIを使うと流暢で自然な文体の詐欺メールや偽サイトを大量に安価で作成できるようになりました。個人に合わせたパーソナライズされたスピアフィッシングも容易になっており、セキュリティ教育の更新が求められています。"
  },
  { id: "add-sec-006", category: "security",
    question: "「メンバーシップ推論攻撃（Membership Inference Attack）」の説明として正しいものはどれか。",
    options: [
      "SNSのメンバーリストをAIで自動収集する攻撃",
      "学習済みAIモデルに対してクエリを送ることで、特定のデータがそのモデルの訓練データに含まれていたかどうかを推定する攻撃",
      "組織のメンバー全員のアカウントに同時にログインを試みる攻撃",
      "AIが生成したコンテンツが学習データのコピーかどうかを法的に主張する手法"
    ],
    answer: 1,
    explanation: "メンバーシップ推論攻撃は、AIモデルへのクエリ応答の差異を分析することで、特定の個人データが学習に使用されたかどうかを推定する攻撃です。医療データや個人情報を学習に使ったモデルでは、プライバシー漏洩リスクがあります。差分プライバシー（Differential Privacy）などの技術がこれへの対策として研究されています。"
  },
  { id: "add-sec-007", category: "security",
    question: "企業がAIシステムを導入する際のセキュリティ対策として適切でないものはどれか。",
    options: [
      "AIへの入力データに個人情報や機密情報が含まれないよう、入力フィルタリングを実装する",
      "AIが生成した出力を必ず人間がレビューする仕組みを設ける",
      "AIシステムのAPIキーをソースコードに直接記述して管理コストを削減する",
      "AIシステムの利用ログを記録・監視して異常なアクセスパターンを検出する"
    ],
    answer: 2,
    explanation: "APIキーをソースコードに直接記述することは非常に危険なセキュリティ上の誤りです。ソースコードがGitHubなどに公開された場合、キーが漏洩して不正利用される可能性があります。APIキーは環境変数や秘密管理ツール（AWS Secrets Manager、HashiCorp Vaultなど）を使って安全に管理する必要があります。"
  },

  // --- trends +10 ---
  { id: "add-tr-001", category: "trends",
    question: "「マルチモーダルAI」の説明として正しいものはどれか。",
    options: [
      "複数の国の言語を同時に翻訳できるAI",
      "テキスト・画像・音声・動画など複数の種類のデータを入力・処理・生成できるAI",
      "複数のAIモデルを並列実行して速度を向上させるシステム",
      "マルチプレイヤーゲームに特化したAI"
    ],
    answer: 1,
    explanation: "マルチモーダルAIは、テキストだけでなく画像・音声・動画・センサーデータなど複数のモダリティ（入出力の種類）を扱えるAIです。GPT-4oやGeminiなどが代表例で、画像を見て説明する、音声で質問して画像を生成するなど、より自然なインタラクションが可能になっています。"
  },
  { id: "add-tr-002", category: "trends",
    question: "「RAG（Retrieval-Augmented Generation）」とはどのような技術か。",
    options: [
      "LLMをファインチューニングして特定ドメインの知識を内部に組み込む技術",
      "外部の知識ベースや文書から関連情報を検索し、その情報をプロンプトに組み込んでLLMに回答を生成させる技術",
      "複数のAIモデルの出力を統合して最終回答を決定するアンサンブル手法",
      "AIの回答を事後的に人間が評価してモデルを改善するフィードバック手法"
    ],
    answer: 1,
    explanation: "RAG（検索拡張生成）は、ユーザーの質問に関連する文書をベクトルデータベースなどから検索し、その内容をコンテキストとしてLLMに渡して回答を生成する技術です。LLMが学習時に持っていない最新情報や社内特有の情報を回答に反映できるため、企業向けAIシステムで広く活用されています。"
  },
  { id: "add-tr-003", category: "trends",
    question: "「AIエージェント」の特徴として正しいものはどれか。",
    options: [
      "人間の代わりにAIが法的な代理人として契約を結ぶシステム",
      "自律的に目標を設定し、ツールを使用しながら複数ステップのタスクを実行できるAIシステム",
      "AIが生成した音楽や映像を管理する著作権エージェント",
      "AIサービスの販売代理店として機能するビジネスシステム"
    ],
    answer: 1,
    explanation: "AIエージェントは、与えられた目標に向けて自律的に計画を立て、ウェブ検索・コード実行・ファイル操作・API呼び出しなどのツールを使いながら複数ステップのタスクを実行できるシステムです。単発の質問応答を超えた自律的な作業実行が可能で、AutoGPTやReActフレームワークなどが代表例です。"
  },
  { id: "add-tr-004", category: "trends",
    question: "「エッジAI（Edge AI）」の説明として正しいものはどれか。",
    options: [
      "クラウドサーバーでAI処理を行い、結果のみをデバイスに送信する方式",
      "スマートフォンやIoTデバイスなどの端末側でAI推論処理を行う方式",
      "AIを活用したネットワークの境界（エッジ）防御システム",
      "グラフのエッジデータを処理するためのグラフニューラルネットワーク技術"
    ],
    answer: 1,
    explanation: "エッジAIは、クラウドではなくスマートフォン・IoTセンサー・カメラ・自動車などの端末（エッジデバイス）側でAI推論を実行する技術です。通信遅延の削減、プライバシー保護（データをクラウドに送らない）、オフライン動作が可能などのメリットがあります。スマートフォンの顔認識や自動運転センサー処理などが代表例です。"
  },
  { id: "add-tr-005", category: "trends",
    question: "「基盤モデル（Foundation Model）」の特徴として正しいものはどれか。",
    options: [
      "特定の業界（基盤産業）向けに開発された専用AIモデル",
      "大規模なデータで事前学習された汎用性の高いモデルで、ファインチューニングや指示によって様々なタスクに適用できる",
      "AIの基礎研究のみに使用される非公開モデル",
      "建設や製造業の基盤となるインフラ管理に特化したAI"
    ],
    answer: 1,
    explanation: "基盤モデル（Foundation Model）は、大量のデータで事前学習された大規模AIモデルで、GPT-4・Gemini・Claude・LLaMAなどが該当します。一つのモデルがテキスト生成・翻訳・コード生成・質問応答など多様なタスクに対応でき、ファインチューニングや少数の例示で特定タスクに特化させることも可能です。"
  },
  { id: "add-tr-006", category: "trends",
    question: "「連合学習（Federated Learning）」の特徴として正しいものはどれか。",
    options: [
      "世界各国のAI研究機関が協力してモデルを共同開発する研究手法",
      "各デバイスや機関のデータを一箇所に集めずに、ローカルで学習したモデルの更新情報だけを集約してグローバルモデルを改善するプライバシー保護型の学習手法",
      "企業連合がデータを共有してAIモデルを共同所有する法的な枠組み",
      "複数のAIモデルの予測を多数決で統合するアンサンブル手法"
    ],
    answer: 1,
    explanation: "連合学習（Federated Learning）は、各デバイス（スマートフォン、病院のサーバーなど）が自分のデータをクラウドに送らずローカルで学習し、学習によって更新されたモデルの差分パラメータのみをサーバーに送って集約する手法です。個人データを外部に出さずにモデルを改善できるため、医療・金融・スマートフォンのプライバシー保護に活用されています。"
  },
  { id: "add-tr-007", category: "trends",
    question: "生成AIにおける「オープンソースモデル」と「クローズドモデル」の違いとして正しいものはどれか。",
    options: [
      "オープンソースモデルは無料で使えるが、クローズドモデルは必ず有料である",
      "オープンソースモデルはモデルの重みや学習コードが公開されており自己ホスティングが可能、クローズドモデルはAPIとしてのみ提供されモデル内部は非公開である",
      "オープンソースモデルは性能が低く、クローズドモデルのみが高性能である",
      "オープンソースモデルは英語のみ、クローズドモデルは多言語に対応している"
    ],
    answer: 1,
    explanation: "オープンソースLLM（LLaMA、Mistral、Gemmaなど）はモデルの重みパラメータが公開されており、自社サーバーにデプロイして完全自律的に使用できます。クローズドモデル（GPT-4、Claude、Gemini Ultraなど）はAPIとしてのみ提供されます。オープンソースはカスタマイズ・プライバシー・コスト面で有利、クローズドは最高性能・サポート面で有利なことが多いです。"
  },
  { id: "add-tr-008", category: "trends",
    question: "「生成AIの規制・ガバナンス動向」として2024年以降で正しい記述はどれか。",
    options: [
      "世界各国はAI規制を導入せず、完全な自由市場として市場に委ねることで合意した",
      "EU AI法（EU AI Act）をはじめ、AIのリスクに応じた規制フレームワークの整備が世界各地で進んでいる",
      "AIの規制は日本のみが独自に制定しており、他国はすべて日本の規制に準拠している",
      "AI規制は学術研究にのみ適用され、商業利用のAIは規制対象外とされている"
    ],
    answer: 1,
    explanation: "EU AI法（2024年成立）はAIシステムをリスクレベルで分類（許容不可・高リスク・限定的リスク・最小リスク）し、高リスクAIには厳格な要件を課す包括的規制です。米国・英国・日本・中国なども独自のAIガバナンス方針を策定しており、グローバルでAI規制・ガイドラインの整備が急速に進んでいます。"
  },
  { id: "add-tr-009", category: "trends",
    question: "「AI PC」の特徴として正しいものはどれか。",
    options: [
      "インターネットに常時接続してクラウドのAIのみで動作するパソコン",
      "NPU（ニューラルプロセッシングユニット）などのAI専用チップを搭載し、ローカルでAI処理を高速・省電力に実行できるパソコン",
      "AIが自動でOSをアップデートしウイルスを除去するセキュリティ特化型PC",
      "AIゲームの開発者向けに設計された高性能グラフィックスPC"
    ],
    answer: 1,
    explanation: "AI PCはIntelやAMD、Qualcommが提供するNPU（ニューラルプロセッシングユニット）を搭載したパソコンで、AI推論処理をCPU・GPU・NPUで分散して高効率に実行できます。ローカルでLLMを動かしてオフラインでAI機能を使う、ビデオ会議のノイズ除去・背景ぼかしをリアルタイム処理するなどの用途で普及が進んでいます。"
  },
  { id: "add-tr-010", category: "trends",
    question: "「SLM（Small Language Model）」が注目される理由として正しいものはどれか。",
    options: [
      "SLMはLLMより回答精度が高く、すべての用途でLLMを置き換えるため",
      "SLMはパラメータ数が少なく、スマートフォンやエッジデバイスでも動作できるほか、特定タスクへの特化・低コスト・低消費電力の利点があるため",
      "SLMは著作権フリーのデータのみで学習されているため法的リスクがないため",
      "SLMは完全に日本語専用として開発されたモデルであるため"
    ],
    answer: 1,
    explanation: "SLM（小規模言語モデル）は数十億パラメータ以下の比較的小さなモデルで、Phi-3・Gemma・Llama 3.2などが代表例です。LLMに比べてコンピューティングリソースが少なくて済み、スマートフォンやエッジデバイスでのローカル実行、特定ドメインへの効率的なファインチューニング、APIコスト削減などの面で注目されています。"
  },

  // --- business +10 ---
  { id: "add-biz-001", category: "business",
    question: "企業がAI導入を検討する際の「AI ROI（投資対効果）」を評価する指標として適切でないものはどれか。",
    options: [
      "AI導入によって削減できた業務時間と人件費",
      "AI活用によって改善した顧客満足度スコア",
      "AIサービスを利用しているエンジニアの年齢層",
      "AI導入後の製品品質向上による返品率の低下"
    ],
    answer: 2,
    explanation: "AI ROIの評価指標には、業務時間・コストの削減、顧客満足度・品質指標の向上、売上増加、エラー率の低下などが含まれます。利用エンジニアの年齢層はROI評価とは関係ありません。AI投資の判断には、定量的・定性的な効果を多角的に測定することが重要です。"
  },
  { id: "add-biz-002", category: "business",
    question: "「AIガバナンス」の目的として最も適切なものはどれか。",
    options: [
      "AIを活用してガバナンス（企業統治）の書類作成を自動化すること",
      "AIシステムの開発・運用において、倫理的・法的・社会的リスクを管理し、責任ある形でAIを活用するための方針・体制・プロセスを整備すること",
      "政府のガバナンス機能をAIに代替させ、行政コストを削減すること",
      "AIの意思決定を完全に自動化し、人間の判断を排除すること"
    ],
    answer: 1,
    explanation: "AIガバナンスは、組織がAIを責任を持って開発・利用するための包括的な仕組みです。具体的には、AI倫理ポリシーの策定、利用規定の整備、リスク管理体制の構築、学習データの品質管理、AIの判断の説明責任確保、法規制への対応などが含まれます。AI活用が広がる中で企業の重要な経営課題となっています。"
  },
  { id: "add-biz-003", category: "business",
    question: "生成AIを業務に導入する際の「チェンジマネジメント」として適切な取り組みはどれか。",
    options: [
      "AIツールを突然導入し、社員が自然に慣れるまで待つ",
      "導入目的・効果・使い方の研修を行い、社員の不安や懸念を解消しながら段階的に展開する",
      "AIに反対する社員は業務から外し、賛成者のみで導入を進める",
      "AIの技術的な仕組みを全社員が深く理解してから導入を開始する"
    ],
    answer: 1,
    explanation: "AI導入時のチェンジマネジメントでは、「なぜ導入するのか」という目的の共有、実際の業務での活用研修、早期採用者（アーリーアダプター）の事例共有、懸念・不安への対話的な対応が重要です。「自分の仕事が奪われる」という不安を持つ社員への丁寧なコミュニケーションが、導入成功の鍵となります。"
  },
  { id: "add-biz-004", category: "business",
    question: "企業がAIサービス（外部LLM API）を選定する際に考慮すべき点として適切でないものはどれか。",
    options: [
      "入力データが学習に利用されるかどうかのプライバシーポリシーの確認",
      "サービスの可用性（稼働率）とSLA（サービスレベル合意）",
      "APIを提供している企業の創業者の出身大学",
      "コスト（トークン単価・月額料金）と自社の想定利用量の試算"
    ],
    answer: 2,
    explanation: "外部AIサービス選定では、データプライバシーポリシー（入力データが学習に使われないか）、SLA・稼働率、レイテンシ、コスト、セキュリティ認証（SOC2、ISO27001等）、カスタマーサポート、規約変更リスクなどが重要な検討事項です。提供企業の創業者の学歴はサービス品質とは無関係です。"
  },
  { id: "add-biz-005", category: "business",
    question: "AI活用における「人間による監視（Human-in-the-Loop）」が特に重要とされる場面はどれか。",
    options: [
      "ゲームのキャラクターがランダムな行動を選択する場面",
      "医療診断支援、融資審査、採用選考など、人の権利や生活に重大な影響を与える意思決定にAIが関わる場面",
      "音楽ストリーミングサービスの楽曲レコメンデーション",
      "工場の温度センサーデータを可視化するダッシュボード"
    ],
    answer: 1,
    explanation: "Human-in-the-Loopは、AI単独に最終判断をさせず必ず人間がレビュー・承認する仕組みです。医療診断・信用審査・刑事司法・採用選考など、誤った判断が人の生命・権利・機会に重大な影響を与えるハイリスクな場面では、EU AI法などでも人間の監視が義務付けられています。"
  },
  { id: "add-biz-006", category: "business",
    question: "「AIの利活用ガイドライン」を社内で整備する目的として正しいものはどれか。",
    options: [
      "社員がAIを一切使えないようにするための規制文書を作ること",
      "社員が安全・適切にAIを業務活用できるよう、利用可能な範囲・禁止事項・注意点を明確にして、リスクを管理しながら生産性を向上させること",
      "外部のAI企業に対してデータ提供を義務付けるための法的文書",
      "AIが社内の全業務を自動化するための仕様書"
    ],
    answer: 1,
    explanation: "社内AIガイドラインは、生成AIの業務利用を促進しながら同時にリスクを管理するための指針です。一般的に「禁止事項（個人情報・機密情報の入力禁止など）」「推奨事項（出力の確認義務など）」「利用可能ツールのリスト」「インシデント報告手順」などが含まれます。過度な制限は生産性を損ないますが、ルールなしは重大リスクを招くため、バランスが重要です。"
  },
  { id: "add-biz-007", category: "business",
    question: "生成AIを用いたカスタマーサポート自動化において注意すべき点はどれか。",
    options: [
      "生成AIは完全に正確なため、人間のサポート担当者は不要になる",
      "生成AIが誤った情報を提供したり不適切な対応をする可能性があるため、複雑・重要な問い合わせは人間のエージェントにエスカレーションする仕組みが必要",
      "生成AIはすべての言語に対応しているため、多言語サポートコストがゼロになる",
      "AIチャットボットはすべての顧客が好むため、電話サポートを完全廃止すべき"
    ],
    answer: 1,
    explanation: "生成AIによるカスタマーサポート自動化はコスト削減と24時間対応を実現しますが、ハルシネーション（誤回答）や感情的な状況への対応不足のリスクがあります。クレームや複雑な問い合わせ、高額取引に関する相談では人間のエージェントにスムーズにエスカレーションできる設計が不可欠です。"
  },
  { id: "add-biz-008", category: "business",
    question: "企業における「生成AIの利用用途」として業務効率化の観点から効果が高いとされるものはどれか。",
    options: [
      "経営戦略の最終決定をすべてAIに委任すること",
      "議事録の要約、メール文案の作成、社内文書の翻訳、コードレビューのサポートなど、定型的な文書作業の効率化",
      "人事評価の全自動化と給与決定のAI化",
      "財務諸表の監査をAIのみで完結させること"
    ],
    answer: 1,
    explanation: "生成AIが業務効率化で特に効果を発揮するのは、一定のパターンがある文書系作業です。議事録の要約・文案作成・翻訳・コードのコメント生成・FAQ作成・プレゼン資料のドラフトなどは、生成AIが大幅な時短効果をもたらします。経営判断・監査・人事評価など重要性・責任性の高い業務はAI単独での実施は現時点では推奨されません。"
  },
  { id: "add-biz-009", category: "business",
    question: "「AI倫理」の観点から、企業がAI活用において取り組むべき「公平性（Fairness）」とはどのような概念か。",
    options: [
      "AIが競合他社と同じ機能を提供すること",
      "AIの予測・判断が特定の人種・性別・年齢・属性に対して不当な差別や偏見を生じさせないよう設計・監視すること",
      "AIの利用料金を全ユーザーに均等に設定すること",
      "AIが生成するコンテンツのボリュームをユーザー間で公平に分配すること"
    ],
    answer: 1,
    explanation: "AI倫理における「公平性（Fairness）」は、採用AIが特定の性別や人種を不当に低評価しない、融資AIが特定の地域の住民を差別しないなど、AIの判断・予測が不当なバイアスを持たないことを指します。学習データに含まれる社会的偏見がモデルに反映されるリスクがあるため、定期的なバイアス監査と改善が必要です。"
  },
  { id: "add-biz-010", category: "business",
    question: "生成AIを活用した「コンテンツマーケティング」における注意点として正しいものはどれか。",
    options: [
      "生成AIで作ったコンテンツはSEO評価が自動で最高になるため、人間の編集は不要",
      "生成AIが誤った情報やブランドイメージに合わない内容を生成することがあるため、公開前に専門担当者によるファクトチェックと品質確認が必要",
      "生成AIで作ったコンテンツであることを開示する義務は世界中で一切ない",
      "生成AIは著作権を自動で処理するため、競合他社のコンテンツを参考にさせても法的問題はない"
    ],
    answer: 1,
    explanation: "生成AIはコンテンツ作成の効率化に有効ですが、事実誤認（ハルシネーション）、ブランドトーン・ガイドラインとのずれ、著作権上のリスクがあります。特にBtoB・医療・金融などの専門領域では誤情報のリスクが高く、公開前の専門家によるレビューが不可欠です。一部の国や地域ではAI生成コンテンツの開示義務化も議論されています。"
  },

  // --- exam +11 ---
  { id: "add-ex-001", category: "basics",
    question: "生成AIパスポート試験における「AIリテラシー」として求められる基本的な知識はどれか。",
    options: [
      "AIを開発するためのプログラミング言語（Python等）を専門的に習得していること",
      "AIの基本的な仕組み、できることとできないこと、活用方法、リスクを理解し、適切に活用・判断できる能力",
      "すべてのAIモデルの数学的な理論を完全に理解していること",
      "AIを使わずに業務を遂行できることを証明すること"
    ],
    answer: 1,
    explanation: "AIリテラシーは「AIを正しく理解し、適切に活用できる能力」を指します。専門的なプログラミング能力は必須ではなく、AIの基本原理・限界・倫理的問題・社会的影響を理解した上で、道具として適切に使いこなせることが求められます。生成AIパスポート試験もこのレベルのリテラシーの習得を目標としています。"
  },
  { id: "add-ex-002", category: "basics",
    question: "「トークン（Token）」についてLLMの文脈で正しい説明はどれか。",
    options: [
      "LLMへのアクセスに使用する認証用の暗号化されたパスワード",
      "LLMがテキストを処理する際の基本単位で、単語や単語の一部に相当し、LLMのAPIコストはトークン数で計算される",
      "ブロックチェーン技術と連携したAIの取引記録",
      "ユーザーがAIサービスに支払う月額サブスクリプション料金の単位"
    ],
    answer: 1,
    explanation: "LLMにおけるトークンは、テキストを処理する際の基本単位です。英語では概ね4文字=1トークン程度ですが、日本語は1文字〜数文字が1トークンになることが多く、英語より多くのトークンを消費します。OpenAI・Anthropic等のAPIはトークン数（入力+出力）でコストが計算されるため、コスト管理の基礎知識として重要です。"
  },
  { id: "add-ex-003", category: "basics",
    question: "「ファインチューニング（Fine-tuning）」の説明として正しいものはどれか。",
    options: [
      "事前学習済みモデルに特定ドメインのデータでさらに学習させ、特定タスクの性能を向上させること",
      "AIモデルの出力のフォントや色を調整する設定作業",
      "AIサービスの月額料金プランを変更すること",
      "プロンプトを細かく調整して最適な出力を得るチューニング作業"
    ],
    answer: 0,
    explanation: "ファインチューニングは、大規模データで事前学習済みの基盤モデルを、特定ドメイン（医療・法律・自社業務など）のデータでさらに追加学習させる手法です。プロンプトエンジニアリングより高い精度が期待できますが、学習データの準備コストと計算コストが必要です。プロンプトの調整はプロンプトエンジニアリングと呼ばれ別の概念です。"
  },
  { id: "add-ex-004", category: "basics",
    question: "「コンテキストウィンドウ（Context Window）」の説明として正しいものはどれか。",
    options: [
      "LLMが一度の処理で参照できるテキストの最大長（トークン数）",
      "AIの回答を表示するブラウザのウィンドウサイズ",
      "AIが学習に使用したデータセットの合計サイズ",
      "LLMが同時に処理できる並列ユーザー数"
    ],
    answer: 0,
    explanation: "コンテキストウィンドウはLLMが一度の会話・処理で「記憶」として参照できるテキストの最大量（トークン数）です。例えば「128Kトークン」のモデルは約100,000英単語相当のテキストを一度に処理できます。長い文書の要約や長い会話履歴の参照に関係し、コンテキストウィンドウを超えた情報はモデルが参照できなくなります。"
  },
  { id: "add-ex-005", category: "basics",
    question: "「RLHF（人間のフィードバックによる強化学習）」の説明として正しいものはどれか。",
    options: [
      "ロボットが人間の動作を見て自律的に学習するプロセス",
      "人間の評価者がAIの出力に対して好みのランキングをつけ、その情報を使ってAIが人間の価値観に合った回答をするよう学習する手法",
      "AIが自動でウェブを検索して最新情報を学習するプロセス",
      "複数のユーザーのフィードバックをリアルタイムで集計してモデルを更新する手法"
    ],
    answer: 1,
    explanation: "RLHF（Reinforcement Learning from Human Feedback）は、人間の評価者がAIの複数の回答を比較してランク付けし、その情報を報酬信号として強化学習でモデルを改善する手法です。ChatGPTやClaudeなどのAIアシスタントが「役立つ・無害・誠実」な回答をするようにアライメントを行うために広く使われています。"
  },
  { id: "add-ex-006", category: "prompting",
    question: "「温度（Temperature）パラメータ」がLLMの出力に与える影響として正しいものはどれか。",
    options: [
      "サーバーの物理的な温度管理に関わるパラメータで、AIの回答内容には影響しない",
      "温度を高くすると出力がよりランダム・多様になり創造的になる。低くすると出力が確定的・一貫性が高くなる",
      "温度を高くするとAIの処理速度が向上し、低くすると速度が低下する",
      "温度パラメータはAPIユーザーのみ調整可能で、チャットUIでは固定されている"
    ],
    answer: 1,
    explanation: "Temperature（温度）パラメータはLLMが次のトークンを選ぶ際の確率分布の「尖り」を調整します。0に近いほど最も確率の高いトークンを選び続けるため一貫性が高く、1〜2に向かうほどより低確率のトークンも選ばれやすくなりランダム・多様な出力になります。事実確認には低温度、ブレインストーミングには高温度が向いています。"
  },
  { id: "add-ex-007", category: "laws",
    question: "「AIの説明可能性（Explainability / XAI）」が重要とされる理由として正しいものはどれか。",
    options: [
      "AIがなぜその判断をしたかを説明できると、信頼性の担保・誤りの発見・規制対応・ユーザーの納得が得られるため",
      "AIは必ず理由を説明しないと法律違反になるため",
      "説明可能なAIは必ず説明不可能なAIより高性能であるため",
      "AIの説明機能はUIデザインの改善に直結するため"
    ],
    answer: 0,
    explanation: "AIの説明可能性（XAI）は、AIがなぜその結論・予測に至ったかを人間が理解できる形で示す能力です。医療診断・融資審査・採用判断などでは「なぜ却下されたのか」を説明できないと利用者の信頼を損ない、EU AI法などでも高リスクAIには説明責任が求められています。また説明可能性はモデルのデバッグや改善にも役立ちます。"
  },
  { id: "add-ex-008", category: "laws",
    question: "生成AIが「著作物に類似したコンテンツを生成する」ことに関する日本の著作権法上の問題として正しいものはどれか。",
    options: [
      "AIが生成したコンテンツは自動的にパブリックドメインになるため、著作権の問題は一切生じない",
      "AIが既存著作物に類似したコンテンツを生成・利用した場合、著作権侵害になる可能性があり、生成物を利用する際はチェックが必要である",
      "AI生成コンテンツは日本の著作権法の適用外であり、すべての生成物を自由に利用できる",
      "AIを活用した企業はすべての著作権侵害から免除される特別規定がある"
    ],
    answer: 1,
    explanation: "日本の著作権法では、AIの学習利用は一定条件下で許容されていますが（30条の4）、AIが生成したコンテンツが既存著作物に類似しており市場代替性がある場合は著作権侵害になりうるとされています。利用段階での著作権侵害リスクを生成ユーザーが負う可能性があるため、生成物の著作権チェックは利用者の責任です。"
  },
  { id: "add-ex-009", category: "laws",
    question: "「個人情報保護法」における「個人情報」の定義として正しいものはどれか。",
    options: [
      "氏名・住所・電話番号など社会通念上プライベートとされるすべての情報",
      "生存する個人に関する情報であって、氏名・生年月日等によって特定の個人を識別できるもの、または個人識別符号が含まれるもの",
      "企業が顧客から収集したすべてのデータ",
      "インターネット上に公開されている情報を除くすべての個人に関する情報"
    ],
    answer: 1,
    explanation: "個人情報保護法における「個人情報」とは、生存する個人に関する情報で、①氏名・生年月日等の記述により特定の個人を識別できるもの、②マイナンバー・旅券番号・指紋認識データ等の個人識別符号が含まれるもの、です。故人の情報は含まれず、また公開されていても個人を識別できれば個人情報に該当します。"
  },
  { id: "add-ex-010", category: "risks",
    question: "「AIのバイアス（偏り）」が生じる原因として正しいものをすべて選べ。",
    type: "multiple",
    options: [
      "学習データに特定の人種・性別・地域に偏りがある",
      "モデルのアーキテクチャが古い",
      "人間の注釈者（ラベル付け担当者）が持つ偏見が学習データに反映される",
      "歴史的な社会的不平等が訓練データに含まれている"
    ],
    answer: [0, 2, 3],
    explanation: "AIバイアスは主にデータ起因で発生します。学習データの偏り（特定の人種・性別が少ない等）、人間のラベル付け作業者の偏見、歴史的な差別・不平等を反映したデータ（過去の採用データに性差別が含まれるなど）がモデルに引き継がれます。モデルアーキテクチャの新旧は主にバイアスの原因ではありません。"
  },
  { id: "add-ex-011", category: "risks",
    question: "「生成AIの4つの主要なリスク」として、G7広島AIプロセスなど国際的な議論で挙げられているものはどれか。",
    options: [
      "コスト増大・処理速度低下・電力不足・人材不足",
      "誤情報・フェイクコンテンツの拡散、プライバシー侵害、セキュリティ悪用（フィッシング・マルウェア生成等）、著作権・知的財産の侵害",
      "インターネット速度の低下、スマートフォンのバッテリー消耗、クラウドストレージの枯渇、SNS中毒の促進",
      "AIベンダーの独占・市場支配、オープンソースの衰退、IT人材の海外流出、半導体不足"
    ],
    answer: 1,
    explanation: "生成AIに関する国際的なリスク議論では、①誤情報・ディープフェイクによるフェイクコンテンツの拡散、②個人情報の不適切な処理によるプライバシー侵害、③フィッシングメール・マルウェア生成等のサイバー攻撃への悪用、④学習データ・生成物における著作権・知的財産の問題、が主要リスクとして繰り返し挙げられています。"
  },

  // --- basics +25 ---
  { id: "nb-001", category: "basics",
    question: "機械学習の評価指標「適合率（Precision）」の説明として正しいものはどれか。",
    options: ["モデルが正解と予測したもののうち、実際に正解だった割合","全正解サンプルのうちモデルが正解と予測できた割合","正解と不正解の予測を含めた全体の正答率","適合率と再現率の調和平均"],
    answer: 0,
    explanation: "適合率（Precision）=（真陽性）÷（真陽性＋偽陽性）で、「正と予測したものの中で本当に正だった割合」です。スパム検出で「正常メールを誤ってスパム判定しない」ことを重視する場合に重要な指標です。"
  },
  { id: "nb-002", category: "basics",
    question: "機械学習の評価指標「再現率（Recall）」の説明として正しいものはどれか。",
    options: ["モデルが正解と予測したもののうち、実際に正解だった割合","全正解サンプルのうちモデルが正解と予測できた割合","正解と不正解を含む全予測の正答率","適合率と再現率の調和平均"],
    answer: 1,
    explanation: "再現率（Recall）=（真陽性）÷（真陽性＋偽陰性）で、「本当に正のサンプルをどれだけ正と予測できたか」の割合です。がん検診など「見逃し」を最小化したい場面で特に重要な指標です。"
  },
  { id: "nb-003", category: "basics",
    question: "「F1スコア」の説明として正しいものはどれか。",
    options: ["モデルの学習速度を表すスコア","適合率と再現率の調和平均で、両者のバランスを一つの値で表す指標","全サンプルに対する正答率（Accuracy）の別名","モデルの過学習度合いを示す指標"],
    answer: 1,
    explanation: "F1スコア＝2×（適合率×再現率）÷（適合率＋再現率）で計算される調和平均です。適合率と再現率はトレードオフの関係にあることが多く、両者を総合的に評価したい場合にF1スコアが使われます。"
  },
  { id: "nb-004", category: "basics",
    question: "「過学習（Overfitting）」の説明として正しいものはどれか。",
    options: ["モデルが訓練データを十分に学習できていない状態","モデルが訓練データに過度に適合し、未知データへの汎化性能が低下した状態","モデルの学習率が高すぎて損失関数が収束しない状態","大量のデータを学習させすぎてモデルサイズが肥大化した状態"],
    answer: 1,
    explanation: "過学習（Overfitting）は訓練データのノイズや細かいパターンまで記憶してしまい、新しいデータに対して精度が著しく低下する現象です。正則化（L1/L2）・ドロップアウト・データ拡張・早期終了などで対策します。"
  },
  { id: "nb-005", category: "basics",
    question: "「正則化（Regularization）」の目的として正しいものはどれか。",
    options: ["モデルの学習速度を向上させること","過学習を抑制し、モデルの汎化性能を高めること","訓練データの精度を最大化すること","モデルのパラメータ数を増やして表現力を高めること"],
    answer: 1,
    explanation: "正則化はモデルの複雑さにペナルティを与えることで過学習を抑制する手法です。L1正則化（Lasso）はスパースなモデルを生成し、L2正則化（Ridge）は重みを小さく保ちます。どちらも損失関数にパラメータのノルムを加算することで実現します。"
  },
  { id: "nb-006", category: "basics",
    question: "「ドロップアウト（Dropout）」とはニューラルネットワークにおいてどのような手法か。",
    options: ["学習率を段階的に下げる学習率スケジューリング手法","学習中にランダムにニューロンを無効化することで過学習を防ぐ正則化手法","不要な層を削除してモデルを軽量化する手法","損失が一定以下になったら学習を停止する早期終了手法"],
    answer: 1,
    explanation: "ドロップアウトは学習中に各イテレーションでランダムに一定割合のニューロンを無効化（出力を0に）する正則化手法です。各ニューロンが他のニューロンに依存しすぎることを防ぎ、アンサンブル効果により汎化性能が向上します。推論時はすべてのニューロンを使用します。"
  },
  { id: "nb-007", category: "basics",
    question: "「畳み込みニューラルネットワーク（CNN）」が特に得意とするタスクはどれか。",
    options: ["時系列データの予測","画像の特徴抽出・分類","自然言語の翻訳","音声の文字起こし"],
    answer: 1,
    explanation: "CNNは局所的な特徴を捉えるフィルター（カーネル）の畳み込み演算により、画像内のエッジ・テクスチャ・形状などの特徴を効率的に抽出します。画像分類・物体検出・セグメンテーションなどのコンピュータビジョンタスクで高い性能を発揮します。"
  },
  { id: "nb-008", category: "basics",
    question: "「RNN（再帰型ニューラルネットワーク）」の特徴として正しいものはどれか。",
    options: ["画像の空間的な特徴を捉えるため畳み込み処理を行う","前の時刻の出力を次の入力に利用することで、時系列・連続データの処理に適している","複数のモデルの出力を統合して最終予測を行う","データをクラスターに分類する教師なし学習モデル"],
    answer: 1,
    explanation: "RNNは内部状態（隠れ状態）を持ち、前ステップの情報を現在の処理に利用できる構造を持ちます。テキスト・音声・時系列データなど順序に意味がある連続データの処理に適していますが、長い系列では勾配消失問題が起きやすいです。これを改善したのがLSTMやGRUです。"
  },
  { id: "nb-009", category: "basics",
    question: "「LSTM（Long Short-Term Memory）」がRNNの問題点を解決する仕組みとして正しいものはどれか。",
    options: ["層の数を増やすことで長期依存関係を捉える","ゲート機構（入力・忘却・出力ゲート）により、長期的な依存関係を保持・忘却を制御する","Attentionにより入力全体を同時に参照する","ドロップアウトで勾配消失を直接防ぐ"],
    answer: 1,
    explanation: "LSTMはセル状態とゲート機構（入力ゲート・忘却ゲート・出力ゲート）により、どの情報を記憶・更新・忘却するかを学習します。これにより通常のRNNで起きる勾配消失問題を緩和し、長い系列での長期依存関係の学習が可能になります。"
  },
  { id: "nb-010", category: "basics",
    question: "「転移学習（Transfer Learning）」の説明として正しいものはどれか。",
    options: ["データをある環境から別の環境に物理的に移動させて学習する手法","大量データで学習済みのモデルの知識を、少ないデータの別タスクに応用する手法","モデルを別のサーバーに転送して分散学習する手法","強化学習エージェントが環境から報酬を転送される仕組み"],
    answer: 1,
    explanation: "転移学習は、ImageNetなど大規模データで学習済みのモデル（事前学習モデル）の重みを初期値として使い、少量の目的タスクデータでファインチューニングする手法です。少ないデータ・計算コストで高精度なモデルを構築できるため、医療画像・産業用検査など専門ドメインで広く活用されています。"
  },
  { id: "nb-011", category: "basics",
    question: "「勾配降下法（Gradient Descent）」の説明として正しいものはどれか。",
    options: ["モデルの出力を段階的に下げてバイアスを排除する手法","損失関数の勾配（微分）方向に逆らってパラメータを更新し、損失を最小化する最適化手法","データを勾配順にソートして学習効率を上げる手法","ランダムにパラメータを変化させて最適解を探す手法"],
    answer: 1,
    explanation: "勾配降下法は損失関数の勾配（各パラメータに対する偏微分）の逆方向にパラメータを少しずつ更新することで、損失を最小化する最適化アルゴリズムです。全データで勾配を計算するバッチ勾配降下法、1サンプルずつのSGD、ミニバッチを使う確率的勾配降下法などのバリエーションがあります。"
  },
  { id: "nb-012", category: "basics",
    question: "「BPE（Byte Pair Encoding）」がLLMで使われる目的として正しいものはどれか。",
    options: ["テキストを圧縮して通信コストを削減するため","テキストをサブワード単位のトークンに分割し、未知語を減らしながら語彙サイズを管理するため","バイナリデータをテキストに変換して学習に使用するため","日本語専用の文字コード変換処理のため"],
    answer: 1,
    explanation: "BPEは頻出する文字ペアを繰り返し結合してサブワード単位の語彙を構築するトークナイゼーション手法です。「東京」→「東」「京」のように分割することで、未知語問題を緩和しつつ語彙サイズを適切に管理できます。GPTシリーズをはじめ多くのLLMで採用されています。"
  },
  { id: "nb-013", category: "basics",
    question: "「VAE（変分オートエンコーダ）」の特徴として正しいものはどれか。",
    options: ["2つのネットワークが競い合いながら高品質なデータを生成する","入力データを潜在空間の確率分布としてエンコードし、そこからサンプリングして新しいデータを生成できる","強化学習で報酬を最大化するようにデータ生成を学習する","テキストから画像を生成することに特化したモデル"],
    answer: 1,
    explanation: "VAEはエンコーダーが入力を潜在変数の平均・分散としてエンコードし、その分布からサンプリングしたベクトルをデコーダーで再構成します。潜在空間が連続的で滑らかになるため、潜在空間を補間して新しいデータを生成できます。画像生成や異常検知などに活用されます。"
  },
  { id: "nb-014", category: "basics",
    question: "「GAN（敵対的生成ネットワーク）」の学習の仕組みとして正しいものはどれか。",
    options: ["一つのネットワークが入力を圧縮・復元して表現を学習する","生成器（Generator）と識別器（Discriminator）が競い合い、生成器がより本物らしいデータを生成するよう学習する","複数のモデルの予測を平均して精度を向上させるアンサンブル学習","教師なし学習でクラスターを見つける手法"],
    answer: 1,
    explanation: "GANは生成器（偽データを生成）と識別器（本物か偽物かを判定）が競い合うミニマックスゲームとして学習します。生成器は識別器を騙せるほど本物らしいデータを生成しようとし、識別器は偽物を見破ろうとします。この競争によりリアルな画像・音声・動画生成を実現します。"
  },
  { id: "nb-015", category: "basics",
    question: "「拡散モデル（Diffusion Model）」の画像生成の仕組みとして正しいものはどれか。",
    options: ["GANと同様に生成器と識別器を競わせて画像を生成する","画像にノイズを加えるプロセスを逆転させてノイズから画像を復元することを学習する","テキストの意味を画像のピクセルに直接マッピングして生成する","事前に用意した画像テンプレートを組み合わせて新画像を作る"],
    answer: 1,
    explanation: "拡散モデルは「データに徐々にガウシアンノイズを加えて完全なノイズにする（前向き過程）」の逆過程を学習します。つまり、ランダムノイズから徐々にノイズを除去してデータを復元するプロセスを学習します。Stable DiffusionやDALL-E 3など現在の主要な画像生成AIに採用されています。"
  },
  { id: "nb-016", category: "basics",
    question: "「強化学習（Reinforcement Learning）」の基本的な仕組みとして正しいものはどれか。",
    options: ["正解ラベル付きデータからパターンを学習する","エージェントが環境と相互作用し、累積報酬を最大化する行動を試行錯誤で学習する","データのクラスターを教師なしで発見する","複数モデルの多数決で最終判断を行う"],
    answer: 1,
    explanation: "強化学習はエージェントが環境の状態を観測し、行動を選択、その結果として報酬を受け取るサイクルを繰り返して価値関数や方策を学習するパラダイムです。ゲームAI（AlphaGo等）、ロボット制御、RLHFによるLLMのファインチューニングなどに活用されています。"
  },
  { id: "nb-017", category: "basics",
    question: "「k-meansクラスタリング」の説明として正しいものはどれか。",
    options: ["k枚の画像を使った教師あり画像分類手法","データをk個のクラスターに分割する教師なし学習のクラスタリングアルゴリズム","k層のニューラルネットワークによる深層学習手法","k近傍法（kNN）の別名"],
    answer: 1,
    explanation: "k-meansはデータをk個のグループ（クラスター）に分割する教師なし学習アルゴリズムです。各クラスターの重心（セントロイド）を繰り返し更新しながら、各データを最も近い重心のクラスターに割り当てます。顧客セグメンテーション・画像圧縮・異常検知前処理などに活用されます。"
  },
  { id: "nb-018", category: "basics",
    question: "「決定木（Decision Tree）」の特徴として正しいものはどれか。",
    options: ["複数の決定木を組み合わせたアンサンブルモデル","特徴量に基づいてデータを木構造で分岐させ分類・回帰を行う解釈しやすいモデル","データ間の距離に基づいて分類するモデル","ニューラルネットワークの一種で深層学習に属するモデル"],
    answer: 1,
    explanation: "決定木は「年収が500万以上か？」などの条件でデータを二分岐していき、最終的なノード（葉）で予測を行うモデルです。ルールが可視化できるため解釈性が高く、金融・医療での意思決定支援に使われます。ただし過学習しやすいため、ランダムフォレストなどのアンサンブル手法と組み合わせることが多いです。"
  },
  { id: "nb-019", category: "basics",
    question: "「ランダムフォレスト（Random Forest）」の説明として正しいものはどれか。",
    options: ["1本の深い決定木を使って高精度な予測を行うモデル","複数の決定木をアンサンブルし、多数決で予測することで過学習を抑制した高精度モデル","木の形をしたグラフ構造のニューラルネットワーク","特徴量をランダムに欠損させて強化学習を行う手法"],
    answer: 1,
    explanation: "ランダムフォレストはブートストラップサンプリングと特徴量のランダム選択を組み合わせた多数の決定木を構築し、それらの予測を多数決（分類）または平均（回帰）で統合するアンサンブル手法です。単一の決定木に比べ過学習が少なく、高精度で特徴量の重要度も算出できます。"
  },
  { id: "nb-020", category: "basics",
    question: "「LoRA（Low-Rank Adaptation）」の説明として正しいものはどれか。",
    options: ["大規模モデルのすべての重みを再学習する従来のファインチューニング手法","元のモデル重みを固定し、低ランク行列の積で表される少数のパラメータのみを学習することで、低コストでファインチューニングする手法","モデルを圧縮して推論速度を向上させる量子化手法","複数のAIモデルの出力を組み合わせるアンサンブル手法"],
    answer: 1,
    explanation: "LoRAはPEFT（Parameter-Efficient Fine-Tuning）の一手法で、元のモデル重みに低ランク（low-rank）の更新行列を追加し、その小さな行列のみを学習します。全パラメータを更新する通常のファインチューニングと比べて学習パラメータ数・VRAM使用量を大幅に削減でき、個人・中小企業でもLLMをカスタマイズできるようになりました。"
  },
  { id: "nb-021", category: "basics",
    question: "「バッチ正規化（Batch Normalization）」の効果として正しいものはどれか。",
    options: ["ミニバッチ内のデータをシャッフルしてデータの偏りをなくす","各層の入力を正規化することで学習を安定・高速化し、過学習を緩和する","バッチサイズを自動的に最適化する","データの前処理として入力を0〜1の範囲に正規化する"],
    answer: 1,
    explanation: "バッチ正規化はミニバッチ内のデータに対して各特徴量の平均を0・分散を1に正規化する処理を各層に加える手法です。内部共変量シフトを軽減し学習を安定・高速化するとともに、正則化効果によって過学習の抑制にも寄与します。現代の深層学習モデルでほぼ標準的に使用されています。"
  },
  { id: "nb-022", category: "basics",
    question: "「エンコーダー・デコーダー（Encoder-Decoder）アーキテクチャ」の主な用途として正しいものはどれか。",
    options: ["画像をピクセル単位で圧縮・保存するためのファイル形式","入力を潜在表現に変換（エンコード）し、別の形式に変換・生成（デコード）する機械翻訳・要約・テキスト生成などのSeq2Seqタスク","データの暗号化と復号化のセキュリティ処理","APIのリクエストとレスポンスのシリアライゼーション"],
    answer: 1,
    explanation: "Encoder-Decoderアーキテクチャはエンコーダーが入力（例：英語文）を固定長の潜在ベクトルに圧縮し、デコーダーがそのベクトルから出力（例：日本語文）を生成します。機械翻訳・文書要約・質問応答などのシーケンス変換タスクの基礎となるアーキテクチャです。Transformerもこの構造を持ちます。"
  },
  { id: "nb-023", category: "basics",
    question: "「クロスバリデーション（交差検証）」の目的として正しいものはどれか。",
    options: ["異なる企業のデータを相互に検証して品質を確認すること","データを複数のグループに分けて学習・評価を繰り返し、モデルの汎化性能を精度よく推定すること","モデルの出力を人間が相互レビューするプロセス","2つのモデルを同時に学習して性能を比較すること"],
    answer: 1,
    explanation: "k-fold交差検証では、データをk個に分割し「k-1個で学習・1個で評価」をk回繰り返して平均評価スコアを算出します。単一の訓練/テスト分割より汎化性能の推定が安定し、データが少ない場合に特に有効です。テストデータの「使い回し」による過楽観的な評価を防ぐ役割もあります。"
  },
  { id: "nb-024", category: "basics",
    question: "「量子化（Quantization）」がAIモデルに適用される目的として正しいものはどれか。",
    options: ["量子コンピュータでAIを動かすための変換処理","モデルの重みパラメータのデータ型を低精度（例：float32→int8）に変換し、モデルサイズを縮小して推論を高速化すること","数値データをカテゴリデータに変換する前処理","モデルの学習に必要なデータ量を削減すること"],
    answer: 1,
    explanation: "量子化は通常32bit浮動小数点（float32）で表現されるモデルの重みを8bit整数（int8）や4bit（int4）などに変換することで、モデルサイズを50〜75%削減し推論速度を向上させる手法です。スマートフォン・エッジデバイスでのAI実行や、コンシューマーGPUでの大規模LLM実行を可能にします。"
  },
  { id: "nb-025", category: "basics",
    question: "「プロンプトチューニング（Prompt Tuning）」と通常のファインチューニングの違いとして正しいものはどれか。",
    options: ["プロンプトチューニングはモデル全体の重みを更新するが、ファインチューニングは一部のみ更新する","プロンプトチューニングはモデルの重みを固定したまま、入力に付加するソフトプロンプト（学習可能なベクトル）のみを最適化する","プロンプトチューニングはユーザーが手動でプロンプトを改善するプロセス","プロンプトチューニングはAPIを使わずローカルでモデルを調整する手法"],
    answer: 1,
    explanation: "プロンプトチューニングはモデルの重みを一切変更せず、入力の先頭に付加する「ソフトプロンプト」（連続ベクトル）のみを学習するPEFT手法です。同じベースモデルを複数タスクで共有しながら、タスクごとに少数のパラメータでカスタマイズできます。通常のファインチューニングと比べ計算コストが大幅に低い利点があります。"
  },

  // --- laws +18 ---
  { id: "nl-001", category: "laws",
    question: "「不正競争防止法」とAIの関係として正しいものはどれか。",
    options: ["不正競争防止法はAIに関する規定を一切持たない","AIを用いてデータベースから大量のデータを不正に収集・利用する行為は不正競争防止法の「限定提供データ」に関する規定に抵触する可能性がある","AIが競合他社のWebサイトをスクレイピングすることはすべて合法である","不正競争防止法はAI生成コンテンツの商標登録に特別な優遇を与えている"],
    answer: 1,
    explanation: "不正競争防止法は2018年改正で「限定提供データ」の不正取得・使用を規制する条項が追加されました。アクセス制御されたデータベースへの不正アクセスやデータの盗用行為はこれに抵触する可能性があります。AI学習目的のデータ収集であっても、提供条件を超えた利用は問題になりえます。"
  },
  { id: "nl-002", category: "laws",
    question: "「景品表示法」とAI生成コンテンツの関係として正しいものはどれか。",
    options: ["AI生成の広告コンテンツは景品表示法の適用外である","AI生成であっても広告に誇大な効果・品質を示す内容が含まれれば景品表示法の「優良誤認」として規制対象になりうる","景品表示法はオンライン広告のみに適用され、AIが生成した紙媒体広告は対象外","AI企業は景品表示法の適用が免除される特別規定がある"],
    answer: 1,
    explanation: "景品表示法は商品・サービスの品質・効果に関して実際より著しく優良と示す「優良誤認」や価格に関する「有利誤認」を禁止します。AI生成の広告・マーケティングコンテンツも例外ではなく、AIが事実と異なる誇大表現を含むコンテンツを生成・使用した場合は規制対象になります。"
  },
  { id: "nl-003", category: "laws",
    question: "「匿名加工情報」の説明として個人情報保護法上正しいものはどれか。",
    options: ["暗号化により第三者が解読できないよう加工した個人情報","特定の個人を識別できないよう加工され、復元できないようにした情報で、本人の同意なく第三者提供・利用が可能","仮名（ペンネーム等）のみ使用された個人情報","公開された情報から個人名を削除したもの"],
    answer: 1,
    explanation: "匿名加工情報は個人情報保護法で定められた概念で、氏名・住所の削除・仮IDへの置換・数値の一般化などを施し「特定の個人を識別できず、かつ復元できない」状態にしたデータです。本人の同意なく第三者提供や利用目的外の活用が認められるため、AI学習データとして活用されています。"
  },
  { id: "nl-004", category: "laws",
    question: "「仮名加工情報」の特徴として個人情報保護法上正しいものはどれか。",
    options: ["仮名（ペンネーム）を使っているだけで処理は不要","氏名等の削除・置換により他の情報と照合しなければ個人を識別できない状態に加工した情報で、利用目的の変更が一部緩和されるが、第三者提供は原則禁止","匿名加工情報と同等の扱いで本人同意なく第三者提供できる","EU GDPRにおける「仮名化」と全く同一の概念"],
    answer: 1,
    explanation: "仮名加工情報は2022年個人情報保護法改正で新設された概念です。氏名等を削除・仮IDに置換することで、単体では個人を識別しにくくしたデータです。社内での利用目的変更が一部緩和されますが、匿名加工情報と異なり第三者提供は原則禁止です。社内AI開発・分析での活用を念頭に設けられました。"
  },
  { id: "nl-005", category: "laws",
    question: "著作権法における「引用」（第32条）の要件として正しいものはどれか。",
    options: ["引用は出典を明記すればどんな分量でも自由に行える","引用は①主従関係（引用が従）②引用の必要性③出典明示④引用箇所の明瞭区別等の要件を満たす必要がある","AI生成コンテンツは著作権がないため引用の概念が適用されない","商業目的の引用には著作権者の許諾が常に必要"],
    answer: 1,
    explanation: "著作権法32条の引用要件は、①自分のコンテンツが主で引用部分が従（主従関係）、②引用する必然性がある、③出典を明示する、④引用範囲が明瞭に区別されている、などです。これらを満たさない「全文転載」「無断コピー」は引用とは認められず著作権侵害になりえます。"
  },
  { id: "nl-006", category: "laws",
    question: "「AIが生成した発明」と特許法の関係として日本の現行法上正しいものはどれか。",
    options: ["AIが自律的に行った発明は、そのAIの名義で特許出願できる","現行の特許法では発明者は自然人（人間）でなければならず、AIのみによる発明は特許を受けられないとされている","AIを使った発明はすべて特許対象外とされている","AIが関与した発明は特許期間が通常より短く設定される"],
    answer: 1,
    explanation: "現行の日本特許法では発明者は自然人（人間）であることが要件とされています。AIがアイデアを生成しても、それを活用した人間を発明者として出願する必要があります。AI発明者の認定については世界各国で議論中ですが、2024年時点でAIを発明者として認める国はほぼありません。"
  },
  { id: "nl-007", category: "laws",
    question: "「肖像権」とAI・ディープフェイクの関係として正しいものはどれか。",
    options: ["肖像権は法律に明文規定がないため、AIが人物の顔を使った画像を生成しても問題にならない","実在する人物の顔・姿をAIで無断生成・公開することは肖像権侵害やプライバシー権侵害になりうる","著名人の場合は公人であるためAIで顔を使った画像を生成しても肖像権は及ばない","肖像権は死後もAIによる侵害から永続的に保護される"],
    answer: 1,
    explanation: "肖像権は日本では判例法上認められた権利で、自分の顔・姿を無断で撮影・公開されない権利を含みます。AIで実在する人物の顔を使ったディープフェイク画像・動画を無断生成・公開することは肖像権・プライバシー権侵害となりえます。著名人でも同様で、近年ディープフェイクポルノの法的規制を求める動きも進んでいます。"
  },
  { id: "nl-008", category: "laws",
    question: "「EU GDPR（一般データ保護規則）」と日本の個人情報保護法の主な違いとして正しいものはどれか。",
    options: ["GDPRはEU市民のみに適用され、EU域外のEU市民データは対象外","GDPRはEU市民のデータを処理するすべての事業者（EU域外の日本企業も含む）に適用され、違反時の制裁金が売上高の最大4%と日本法より厳格な規定がある","日本の個人情報保護法はGDPRより厳格で、違反時の制裁金が高い","GDPRと日本の個人情報保護法は完全に同一の要件を定めている"],
    answer: 1,
    explanation: "GDPRはEU市民の個人データを処理するすべての組織（EU域外企業も含む）に適用されます。違反時の制裁金は最大で全世界年間売上高の4%または2000万ユーロの高い方と厳格です。日本企業もEU向けサービスでEU市民データを処理する場合はGDPRへの対応が必要です。2019年に日EU間で十分性認定が成立しています。"
  },
  { id: "nl-009", category: "laws",
    question: "「AIを活用したデータ収集」におけるプライバシー保護の観点から不適切な行為はどれか。",
    options: ["ウェブスクレイピング時に robots.txt の指示に従う","AIの学習目的で、SNS利用者に無断でプロフィール・投稿を大量収集してデータベース化する","収集したデータの利用目的をプライバシーポリシーで明示する","個人を特定できる情報は匿名化・仮名化してから学習データとして使用する"],
    answer: 1,
    explanation: "SNS利用者に無断でプロフィール・投稿を大量収集してデータベース化することは、個人情報保護法の「適正取得の原則」に反する可能性があります。また各SNSの利用規約違反にも該当することが多く、不正競争防止法・プライバシー権侵害のリスクもあります。AI学習用データ収集でも適法性の確認が必要です。"
  },
  { id: "nl-010", category: "laws",
    question: "総務省・文部科学省等が策定した「AI活用のガイドライン」の目的として正しいものはどれか。",
    options: ["AIの開発・販売を政府が独占するための規制枠組み","AI活用の倫理原則や注意事項を示し、安全・安心なAI利用と技術発展を両立させるための指針を提供すること","教育機関でのAI利用を禁止するための法的根拠","AIの利用を公共機関のみに制限するための基準"],
    answer: 1,
    explanation: "日本政府は「AI戦略」「AI原則」「生成AI利活用ガイドライン」など複数のガイドラインを策定しています。これらはAI利用を禁止するものではなく、透明性・公平性・安全性・プライバシー保護などの原則を示しながら、社会全体が責任ある形でAIを活用できるよう方向性を示すものです。"
  },
  { id: "nl-011", category: "laws",
    question: "著作権法30条の4（情報解析目的の著作物の利用）の説明として正しいものはどれか。",
    options: ["商業目的のAI学習への著作物利用は一律に著作権侵害とみなされる","情報解析（機械学習等）を目的とする場合、著作権者の許諾なく著作物を利用できる例外規定がある","この条項はテキストデータにのみ適用され、画像・音楽データは対象外","この条項により、AI学習後に著作物に類似した生成も無制限に許容される"],
    answer: 1,
    explanation: "著作権法30条の4は「著作物に表現された思想又は感情の享受を目的としない利用（情報解析等）」に広く著作物利用を認める条項です。AI機械学習での学習データ利用が広く認められますが、「享受目的の利用段階」（生成・出力段階）でも類似著作物を生成する場合は別途侵害リスクが生じます。"
  },
  { id: "nl-012", category: "laws",
    question: "「プロバイダ責任制限法」がAI生成コンテンツに関して問題になりうる場面はどれか。",
    options: ["AIがインターネットプロバイダーのサービスを使いすぎる場合","AI生成の名誉毀損・プライバシー侵害コンテンツがSNS等に投稿された場合の、プラットフォーム事業者の削除義務と責任の範囲","AIが生成したコンテンツの著作権料の支払い義務","AIサービスの通信速度保証に関する規定"],
    answer: 1,
    explanation: "プロバイダ責任制限法は、SNS等のプラットフォームが自社サービス上の違法・有害コンテンツについて一定条件下で免責される一方、被害者から申告があれば削除措置をとる義務を定めます。AI生成の偽情報・ディープフェイク・誹謗中傷がプラットフォーム上で拡散する場合、この法律の適用が問題になります。"
  },
  { id: "nl-013", category: "laws",
    question: "「消費者保護」の観点からAIサービス提供で事業者が注意すべき点として正しいものはどれか。",
    options: ["AIは自動で動くためサービス内容の説明は不要","AIを用いたサービスが消費者に誤解を与える説明（誇大広告・隠れた有料化等）をすることは消費者契約法・景表法等に抵触しうる","AI生成の回答が誤っていても事業者の法的責任は一切ない","無料AIサービスには消費者保護法規が適用されない"],
    answer: 1,
    explanation: "AI事業者も一般の事業者と同様に消費者保護法規の適用を受けます。AIチャットボットの回答誤りによる被害、サブスクリプションの解約困難、AIを用いた誇大広告などは消費者契約法・景表法・特定商取引法などの問題になりえます。利用規約での免責条項も、消費者に著しく不利な条項は無効になる場合があります。"
  },
  { id: "nl-014", category: "laws",
    question: "「AI採用ツール」と労働法・差別禁止の観点で問題になりうる点はどれか。",
    options: ["AI採用ツールは客観的で公平なため差別の問題は生じない","AI採用ツールが性別・人種・年齢などを学習データから引き継いだバイアスにより特定属性の候補者を不当に低評価することは、雇用機会均等法などの差別禁止規定に抵触しうる","AIによる採用評価は労働基準法で義務付けられている","採用AIは人事部の判断を完全に代替でき、人間のレビューは法律上不要"],
    answer: 1,
    explanation: "AIを採用評価に使用する場合、学習データに含まれる過去の差別的採用パターンがモデルに反映されるリスクがあります。例えば「過去に採用されたのは男性が多い」というデータを学習したAIが女性候補者を低評価することは、雇用機会均等法や性差別禁止規定に抵触しうります。EU AI法では採用AIを「高リスクAI」に分類しています。"
  },
  { id: "nl-015", category: "laws",
    question: "「データの越境移転」で日本企業がAIサービス利用時に注意すべき点はどれか。",
    options: ["データの越境移転は技術的に不可能なためリスクは存在しない","海外のAIサービス（米国・EU等のクラウド）に個人データを送信する場合、移転先国の個人情報保護水準の確認や本人への告知が必要になることがある","日本の個人情報は海外に送信しても一切規制がない","越境移転は大企業のみに適用される規制で中小企業は対象外"],
    answer: 1,
    explanation: "個人情報保護法は個人データの第三者提供に際して、外国への提供でも本人同意や十分性認定国かの確認等が必要です。米国のAIサービスに個人データを送信する際は、移転先の個人情報保護水準・契約上の安全管理措置の確保が求められます。GDPRではより厳格な越境移転規制が適用されます。"
  },
  { id: "nl-016", category: "laws",
    question: "「AIシステムの契約」において発注者（利用者側）が注意すべき点として正しいものはどれか。",
    options: ["AIシステムの性能は必ず契約書通りになるため、成果物の検収は不要","AIシステムの開発契約では精度保証の困難さ・学習データの権利帰属・生成物の著作権・障害時の責任分担などを契約書で明確にしておく必要がある","ベンダーにすべての責任を転嫁できる契約が常に可能","AIシステムの契約は一般のソフトウェア契約と同一のため特別な考慮は不要"],
    answer: 1,
    explanation: "AIシステムの契約では従来ソフトウェア開発と異なる固有のリスクがあります。①精度保証の限界（確率的な動作のため100%保証が困難）、②学習データと学習済みモデルの知的財産権の帰属、③AI生成アウトプットの著作権、④ハルシネーション等による損害の責任分担などを明確に定める必要があります。"
  },
  { id: "nl-017", category: "laws",
    question: "「AIガイドライン10原則（内閣府）」に含まれる原則として正しいものはどれか。",
    options: ["AIは人間の監視下に置かれるべきであり、人間がAIをコントロールできる状態を維持すること（人間中心）","AIは最大利益を得るために人間の監視を最小化すべきこと","AIは特定の大企業のみが開発できるよう規制すること","AIの透明性は企業の競争上の秘密として非公開にすること"],
    answer: 0,
    explanation: "内閣府の「人間中心のAI社会原則」（2019年）の10原則には、①人間中心②教育・リテラシー③プライバシー確保④セキュリティ確保⑤公正競争確保⑥公平性・説明責任・透明性⑦イノベーション⑧国際連携⑨アジャイルガバナンス⑩AIリスクマネジメントが含まれます。「人間がAIを制御できる状態の維持」は中核的原則です。"
  },
  { id: "nl-018", category: "laws",
    question: "「EU AI法（AI Act）」のリスク分類で「許容不可能なリスク（Unacceptable Risk）」として禁止されるAI用途はどれか。",
    options: ["医療診断支援AI","ソーシャルスコアリング（政府による市民の行動評価・スコア付け）および公共空間でのリアルタイム生体認証監視","採用選考支援AI","ローコードのAI開発ツール"],
    answer: 1,
    explanation: "EU AI法は最も危険なAI用途を「許容不可能なリスク」として禁止します。具体的には、政府による市民のソーシャルスコアリング、公共空間でのリアルタイム遠隔生体認証（例外あり）、無意識の行動操作、子どものサブリミナル的操作などが該当します。医療・採用AIは「高リスク」に分類され規制対象ですが禁止ではありません。"
  },

  // --- risks +15 ---
  { id: "nr-001", category: "risks",
    question: "AIによる「雇用代替リスク」に関する記述として最も適切なものはどれか。",
    options: ["AIはすべての職業を完全に代替するため、10年以内に人間の労働は不要になる","定型的・反復的なタスクはAIに代替されやすく、創造性・対人コミュニケーション・倫理判断を要するタスクはAIとの協働が現実的とされる","AIは肉体労働のみを代替し、知的労働は代替されない","AIによる雇用代替は先進国のみで起き、新興国には影響しない"],
    answer: 1,
    explanation: "AIによる雇用影響は職種によって大きく異なります。データ入力・定型書類処理・コールセンター対応などの反復タスクは自動化リスクが高い一方、感情的知性・創造性・複雑な倫理判断を要する職業はAIとの協働形態が現実的です。新しい職業の創出も同時に進むため「代替」より「変容」と捉える見方もあります。"
  },
  { id: "nr-002", category: "risks",
    question: "「フィルターバブル」とはAIのどのようなリスクか。",
    options: ["AIが生成したコンテンツにフィルター（検閲）をかけすぎることで情報が抑制されるリスク","レコメンドアルゴリズムがユーザーの好みに合った情報のみを表示し続けることで、異なる意見や情報への接触機会が減少するリスク","AIの学習データにフィルタリングが不十分でバイアスが混入するリスク","スパムフィルターがAI生成メールを誤って除去するリスク"],
    answer: 1,
    explanation: "フィルターバブルは、SNSや検索エンジンのアルゴリズムがユーザーの閲覧・反応履歴から「好みそうな情報」のみを表示し続けることで、ユーザーが自分の既存の考えを強化する情報の「泡」の中に閉じこもる現象です。社会の分断・偏った世界観の形成・民主主義への悪影響が懸念されています。"
  },
  { id: "nr-003", category: "risks",
    question: "「AIの環境負荷」として問題視されている点はどれか。",
    options: ["AIが環境データを誤って分析するリスク","大規模AIモデルの学習・推論に膨大な電力を消費し、CO2排出や水冷のための水資源使用が環境問題になっている","AIが自然環境を直接破壊するリスク","AIシステムが廃棄される際の電子廃棄物リスクのみ"],
    answer: 1,
    explanation: "GPT-4のような大規模LLMの学習には数百〜数千トンのCO2排出に相当する電力が必要とされています。また推論のためのデータセンター冷却に大量の水資源が使われています。AI企業の電力消費は急増しており、再生可能エネルギーへの移行やモデルの効率化が重要課題となっています。"
  },
  { id: "nr-004", category: "risks",
    question: "「AIの依存性リスク」として適切なものはどれか。",
    options: ["AIが他のシステムに依存しすぎてサービスが停止するシステム障害リスク","AIツールへの過度な依存により人間のスキル・批判的思考が低下したり、AIが誤った情報を提供しても気づかなくなるリスク","AIが特定のデータに依存しすぎて汎化性能が低下するリスク","特定ベンダーのAIに依存するベンダーロックインリスクのみ"],
    answer: 1,
    explanation: "生成AIへの過度な依存は①自分で考え・調べる能力の低下、②AIの誤答（ハルシネーション）をそのまま信じるクリティカルシンキングの喪失、③AIなしでは業務が回らなくなるシステム依存、などのリスクをもたらします。AIを道具として主体的に使いこなす「AIリテラシー」の維持が重要です。"
  },
  { id: "nr-005", category: "risks",
    question: "「AIの監視社会リスク」として正しい記述はどれか。",
    options: ["AIによる監視技術はプライバシー侵害の懸念がなく安全に活用できる","顔認識AIや行動分析AIを政府・企業が大規模に展開することで、市民の行動・表現の自由が委縮する監視社会化が懸念される","AIによる監視は刑事事件の解決率を下げるため、法執行機関では使用禁止","AIカメラは公共の場にのみ設置できるため監視社会リスクは限定的"],
    answer: 1,
    explanation: "AI搭載のカメラ・顔認識システム・SNS分析ツールの普及により、政府や企業が市民を大規模に監視できる技術的基盤が整いつつあります。これは犯罪防止に役立つ一方、プライバシー権の侵害・無実の人物の誤同定・行動の萎縮効果・政治的弾圧への悪用リスクを内包します。EU AI法が公共空間でのリアルタイム顔認識を原則禁止した背景でもあります。"
  },
  { id: "nr-006", category: "risks",
    question: "「AIの誤情報拡散リスク」を最も適切に説明したものはどれか。",
    options: ["AIが意図的に嘘をつくプログラムを組み込まれているリスク","生成AIが事実と異なる情報をもっともらしく生成し（ハルシネーション）、それがSNSや検索結果を通じて広まるリスク","AIが古い情報のみを参照するため情報が陳腐化するリスク","AIシステムの通信障害により情報が遅延するリスク"],
    answer: 1,
    explanation: "生成AIは流暢で説得力のある文章を生成しますが、事実確認をせず存在しない引用・統計・出来事を生成することがあります（ハルシネーション）。これがSNSで拡散されたり、信頼できそうな体裁で誤情報を大量生成するために悪用されたりすることが社会問題です。生成AI利用者のファクトチェック習慣が重要です。"
  },
  { id: "nr-007", category: "risks",
    question: "「確証バイアスの増幅」とAIのリスクについて正しいものはどれか。",
    options: ["AIが確証を求めすぎて回答できなくなるリスク","レコメンドAIやチャットAIが自分の意見に同調する情報ばかりを提供することで、ユーザーの既存の偏見・思い込みが強化されるリスク","AIが統計的なバイアスを自動検出できずデータ品質が低下するリスク","AIの確率計算に誤りがあり偏った予測をするリスク"],
    answer: 1,
    explanation: "確証バイアスは人間が自分の既存の信念を支持する情報を好む傾向です。AIシステムが「ユーザーが好みそうな回答」に同調する特性（sycophancy）と組み合わさると、誤った信念がさらに強化されます。また、フィルターバブルとも相互作用し、ユーザーを情報のエコーチェンバーに閉じ込めるリスクがあります。"
  },
  { id: "nr-008", category: "risks",
    question: "「デジタルデバイド」とAIの関係として正しいものはどれか。",
    options: ["AIの普及により全人類のデジタルアクセスが均等化される","AIリテラシーや高性能デバイスへのアクセス格差が、AIの恩恵を受けられる人と受けられない人の間の経済・機会格差（デジタルデバイド）をさらに拡大させるリスクがある","デジタルデバイドはインターネット接続の問題のみで、AIとは無関係","AIは自動翻訳・支援機能でデジタルデバイドを完全に解消できる"],
    answer: 1,
    explanation: "AIが生産性・教育・医療・金融サービスを変革する中で、AIにアクセスできスキルを持つ人とそうでない人の間の格差（AIデバイド）が拡大するリスクがあります。高速インターネット・高性能デバイス・AIリテラシー教育へのアクセスが国・地域・所得層によって大きく異なるため、AI恩恵の不均等な分配が課題です。"
  },
  { id: "nr-009", category: "risks",
    question: "「AIの Sycophancy（おべっか現象）」とはどのようなリスクか。",
    options: ["AIが常に同じ回答をする単調さのリスク","AIが正確さより「ユーザーが喜ぶ回答」を優先し、批判的な意見や不都合な真実を避けてユーザーの意見に同調するリスク","AIがユーザーの質問の意図を誤解するリスク","AIがユーザーの個人情報を不正に収集するリスク"],
    answer: 1,
    explanation: "SycophancyはRLHFで「ユーザーの好む回答＝高評価」として学習したAIが、正確さより同意・称賛・ユーザーの既存意見への同調を優先するようになる現象です。誤った主張にも「そうですね」と同意したり、批判的なフィードバックを回避したりします。重要な意思決定にAIを使う際の深刻なリスクです。"
  },
  { id: "nr-010", category: "risks",
    question: "「コンテンツ汚染（AI Content Pollution）」として問題になっているものはどれか。",
    options: ["AIが画像にノイズを追加してデータを汚染する攻撃","生成AIで大量生成された低品質・誤情報コンテンツがウェブ・SNSに氾濫し、信頼できる情報を探しにくくする問題","AIが水や土壌を汚染する環境問題","AIが他サービスのコンテンツを不正コピーする著作権問題"],
    answer: 1,
    explanation: "生成AIで質の低い記事・SEOスパム・偽レビュー・誤情報コンテンツを大量に生成・公開することが問題になっています。ウェブ検索結果やSNSがAI生成の低品質コンテンツで溢れると、信頼性の高い情報を見つけにくくなるコンテンツ汚染が起きます。検索エンジンや情報プラットフォームのAI生成コンテンツへの対応が課題です。"
  },
  { id: "nr-011", category: "risks",
    question: "「AIシステムの障害リスク」として組織が備えるべき対策として正しいものはどれか。",
    options: ["AIシステムは障害を起こさないため特別な備えは不要","AIサービスの障害を想定した代替手順・バックアップ体制の整備、およびAIへの過度な依存を避けたシステム設計","AIシステムを複数社から調達するだけで障害リスクはゼロになる","障害発生時は全業務を停止してAI復旧を待つ"],
    answer: 1,
    explanation: "クラウドAIサービスはサーバー障害・メンテナンス・規約変更・サービス終了などのリスクがあります。重要業務がAIに依存している場合、障害時の代替手順（人手対応・オフライン処理等）の整備、BCP（事業継続計画）へのAI障害シナリオの組み込み、マルチベンダー戦略などが重要です。"
  },
  { id: "nr-012", category: "risks",
    question: "「AIを使った武器・攻撃ツールの生成」リスクへの対策として、主要AIサービスが実施していることはどれか。",
    options: ["危険なコンテンツ生成の要求に対応するため利用者の本人確認を強化している","有害コンテンツ（兵器製造方法・サイバー攻撃コード・危険物合成方法等）の生成を防ぐセーフガード・コンテンツポリシーを設けている","AIを使った攻撃ツール生成は技術的に不可能なためリスクは存在しない","危険なコンテンツ生成への規制は完全に利用者の自己責任とされている"],
    answer: 1,
    explanation: "OpenAI・Anthropic・Googleなどの主要AI企業はサービス利用ポリシーで有害コンテンツの生成を禁止し、モデルのセーフガード（安全フィルター）、RLHF・Constitutional AIなどの安全技術を実装しています。ただしセーフガードの回避（jailbreaking）も研究されており、完全な防止は難しいのが現状です。"
  },
  { id: "nr-013", category: "risks",
    question: "「AIのサードパーティリスク」の説明として正しいものはどれか。",
    options: ["第三者がAIの知的財産を盗むリスク","外部AIサービス・APIに依存することで、そのベンダーのセキュリティ事故・サービス変更・価格改定・サービス終了が自社に直接影響するリスク","AIが第三者の個人情報を無断学習するリスク","3社以上でAIを共同開発する際のコントロールリスク"],
    answer: 1,
    explanation: "外部AIサービス（SaaS型AI・API）を業務に組み込む場合、そのベンダーのセキュリティインシデント・API仕様変更・価格改定・サービス廃止が自社業務に直接打撃を与えるサードパーティリスクがあります。ベンダー評価・契約上のSLA確認・マルチベンダー戦略・重要機能の内製化検討などでリスクを管理します。"
  },
  { id: "nr-014", category: "risks",
    question: "「AIの予測の不確実性」が特に問題になる場面として正しいものはどれか。",
    options: ["AIのゲームプレイで最適戦略を決定する場面","医療診断・金融投資・自然災害予測などで、AIの誤予測が人命や社会インフラに重大な影響を与える場面","画像の自動タグ付け作業","カスタマーサービスの回答案の自動生成"],
    answer: 1,
    explanation: "AIモデルは確率的な予測を行うため、必ず一定の誤り率があります。医療診断（がんの見落とし）・自動運転（障害物の誤認識）・金融システム（誤った市場予測）・刑事司法（誤認逮捕）などの高リスク領域では、AIの誤予測が取り返しのつかない結果をもたらすため、Human-in-the-Loopと厳格な検証が不可欠です。"
  },
  { id: "nr-015", category: "risks",
    question: "「AIの説明責任（Accountability）の欠如リスク」として正しいものはどれか。",
    options: ["AIが説明文を生成できないリスク","AIの判断によって損害が発生した場合、誰が責任を負うか不明確になりやすく、被害者が適切な救済を受けにくいリスク","AIが会計上の説明責任報告を作成できないリスク","AIのサービス利用者が利用規約を読まないリスク"],
    answer: 1,
    explanation: "AIシステムが誤った診断・融資拒否・採用落選・自動運転事故などを起こした場合、AI開発者・AI提供企業・AI利用企業・エンドユーザーのどこに責任があるか不明確なことが多く、被害者の救済が困難です。EU AI法やAI責任指令（案）は、高リスクAIによる被害の立証責任を被害者から事業者側に転換する方向で検討されています。"
  },

  // --- security +15 ---
  { id: "ns-001", category: "security",
    question: "「ゼロトラストセキュリティ」の基本原則として正しいものはどれか。",
    options: ["社内ネットワーク内のすべての通信は信頼できるため、認証を省略できる","「すべてを信頼しない」を原則とし、社内外問わずすべてのアクセスを継続的に検証・認証する","VPNを使えば完全にゼロトラストを実現できる","ゼロトラストはAIシステムにのみ適用されるセキュリティ概念"],
    answer: 1,
    explanation: "ゼロトラストは「ネットワーク内部だからといって信頼しない」という原則で、社内外問わずすべてのユーザー・デバイス・アプリケーションを継続的に認証・認可します。テレワーク・クラウド利用・AIサービス連携が進む現代において重要なセキュリティモデルで、多要素認証・最小権限の原則・継続的監視が核心です。"
  },
  { id: "ns-002", category: "security",
    question: "「AIウォーターマーキング」の目的として正しいものはどれか。",
    options: ["AIへの不正アクセスを防ぐ電子署名技術","AI生成コンテンツに検出可能な（目に見えない）標識を埋め込み、人間が作成したコンテンツとAI生成物を区別できるようにする技術","AIモデルの著作権を保護するためにモデルファイルを暗号化する技術","ウォーターマークのデザインをAIが自動生成する技術"],
    answer: 1,
    explanation: "AIウォーターマーキングは、AI生成テキスト・画像・音声などに統計的・視覚的に検出可能な透かし（ウォーターマーク）を埋め込む技術です。ディープフェイクの検出・AI生成コンテンツの開示・フェイクニュース対策への活用が期待されています。EU AI法でも一部のAI生成コンテンツへのウォーターマーク義務が盛り込まれています。"
  },
  { id: "ns-003", category: "security",
    question: "「ソーシャルエンジニアリング」とはどのような攻撃か。",
    options: ["SNSを使ったマーケティング攻撃","技術的な脆弱性ではなく、人間の心理・信頼・不注意を利用して情報を詐取したり不正アクセスを実現する攻撃手法","社会インフラ（電力・水道等）へのサイバー攻撃","AIを使ってソーシャルメディアの世論を操作する攻撃"],
    answer: 1,
    explanation: "ソーシャルエンジニアリングは人間の心理的弱点を利用する攻撃で、IT部門を装って「パスワードをリセットしてください」と頼む電話、緊急を装ったフィッシングメール、なりすまし等が代表例です。生成AIにより自然なフィッシングメールや説得力ある偽電話（ボイスクローン）が容易に作れるようになり、リスクが高まっています。"
  },
  { id: "ns-004", category: "security",
    question: "「多要素認証（MFA）」の説明として正しいものはどれか。",
    options: ["複数のパスワードを順番に入力する認証方式","知識・所持・生体など異なる種類の認証要素を2つ以上組み合わせることで、不正ログインリスクを大幅に低減する認証方式","複数のユーザーが同一アカウントを共有する認証方式","月に複数回パスワードを変更するセキュリティポリシー"],
    answer: 1,
    explanation: "多要素認証は「知識（パスワード）」「所持（スマートフォンのOTP・セキュリティキー）」「生体（指紋・顔）」の異なるカテゴリから2要素以上を組み合わせる認証です。パスワードが漏洩しても不正ログインを防げるため、特にAIサービスのAPIキー管理・重要システムへのアクセスで必須の対策です。"
  },
  { id: "ns-005", category: "security",
    question: "「API認証」においてセキュリティ上適切な管理方法はどれか。",
    options: ["APIキーをソースコードに直接記述し、GitHubで公開リポジトリとして管理する","APIキーを環境変数・秘密管理ツール（シークレットマネージャー）で管理し、定期的にローテーション（更新）する","全社員でAPIキーを共有して管理コストを下げる","APIキーをメールで関係者に配布して共有する"],
    answer: 1,
    explanation: "APIキーをソースコードやGitリポジトリに記述することは最も危険な管理ミスの一つです。AWSやGitHubでは公開リポジトリのAPIキーを自動検出するスキャン機能があるほど一般的な問題です。適切な管理は環境変数（.envファイル・OS環境変数）またはAWS Secrets Manager・HashiCorp Vaultなどの秘密管理ツールを使用し、定期的なローテーションを行うことです。"
  },
  { id: "ns-006", category: "security",
    question: "「転送中のデータ暗号化」としてAIサービス利用で重要な技術はどれか。",
    options: ["データをAI処理前にZIP圧縮する","HTTPS（TLS）によりクライアントとサーバー間の通信を暗号化し、第三者による盗聴・改ざんを防ぐ","AIモデルの重みファイルをパスワードで保護する","通信ログを定期的に削除して情報漏洩を防ぐ"],
    answer: 1,
    explanation: "HTTPS（TLS/SSL）はWebブラウザとサーバー間、APIクライアントとサーバー間の通信を暗号化する標準的なセキュリティ技術です。AIサービスとのAPI通信で個人情報・機密情報を送受信する場合、HTTPSが使われているか確認することが基本です。証明書の有効期限切れや弱い暗号方式（TLS 1.0等）の使用も脆弱性になりえます。"
  },
  { id: "ns-007", category: "security",
    question: "「インシデントレスポンス計画」においてAIシステム特有の考慮事項として正しいものはどれか。",
    options: ["AIシステムは自律的に対応するためインシデント計画は不要","AI生成コンテンツの悪用・AIモデルへの攻撃・学習データの漏洩など、AIシステム固有のインシデントシナリオを想定した対応手順を事前に策定する","AIインシデントはIT部門だけで対応でき、経営層への報告は不要","インシデント発生後にAIが自動で計画を策定するため事前準備は不要"],
    answer: 1,
    explanation: "AIシステムのインシデント対応計画には、従来のIT障害対応に加えてAI固有のシナリオ—学習データ漏洩、モデルの不正改ざん、AI生成コンテンツの誤用・悪用、プロンプトインジェクション攻撃など—を含める必要があります。また被害拡大を止めるAIシステムの緊急停止手順と、代替業務手順の整備も重要です。"
  },
  { id: "ns-008", category: "security",
    question: "「AIが生成したコードのセキュリティリスク」として正しいものはどれか。",
    options: ["AIが生成したコードは人間のコードより常にセキュリティが高い","AIはSQLインジェクション・XSS等のセキュリティ脆弱性を含むコードを生成することがあり、そのまま使用すると危険","AIは既知の脆弱性ライブラリのみを参照するためリスクが高い","AIが生成したコードはオープンソースライセンスに縛られないためリスクがない"],
    answer: 1,
    explanation: "コード生成AIはSQLインジェクション・XSS・パストラバーサル・認証不備など典型的なセキュリティ脆弱性を含むコードを生成することがあります。特に過去の脆弱なコードを大量に学習している場合、安全でないパターンをそのまま再現するリスクがあります。AI生成コードも必ず人間によるセキュリティレビューと静的解析ツールでのチェックが必要です。"
  },
  { id: "ns-009", category: "security",
    question: "「クラウド上のAIサービス」利用における機密情報保護の観点から適切な行動はどれか。",
    options: ["クラウドサービスはすべて安全なため、機密情報を自由に入力できる","クラウドAIサービスの利用規約でデータがどう扱われるか（学習に使われるか・保管されるか）を確認し、機密情報・個人情報の入力を避けるか、エンタープライズプランで保護を確認する","クラウドAIへの入力データは自動的に暗号化され第三者に渡ることはない","クラウドAIサービスの無料プランと有料プランで機密情報の扱いは同一"],
    answer: 1,
    explanation: "クラウドAIサービスに機密情報（顧客データ・社外秘・個人情報）を入力することは情報漏洩リスクがあります。無料プランでは入力データがモデル改善に使われる場合があります。エンタープライズプランではデータをモデル学習に使わないことを保証している場合が多く、利用規約・DPA（データ処理契約）の確認が必要です。"
  },
  { id: "ns-010", category: "security",
    question: "「フィッシング対策」として組織が実施すべき技術的対策として正しいものはどれか。",
    options: ["フィッシングは人の問題のため技術的対策は不要","SPF・DKIM・DMARCによるメール認証、メールセキュリティゲートウェイによるフィルタリング、フィッシング報告機能の整備などの技術的対策を実施する","フィッシング対策ソフトをすべてのPCに入れるだけで十分","パスワードを月に1回変更するだけで対策できる"],
    answer: 1,
    explanation: "フィッシング対策の技術的手法としてはSPF（送信元IPの認証）・DKIM（電子署名）・DMARC（なりすましメール拒否ポリシー）によるメール認証、URLフィルタリング、サンドボックスによる添付ファイル検査などがあります。生成AIにより精巧なフィッシングが増える中、技術的対策と定期的なセキュリティ教育の組み合わせが重要です。"
  },
  { id: "ns-011", category: "security",
    question: "「マルウェア検出へのAI活用」の特徴として正しいものはどれか。",
    options: ["AIは既知のマルウェアのシグネチャ（署名）照合のみに使われ、新種には対応できない","機械学習によって正常な動作パターンとの差異から未知のマルウェアや異常を検出できるため、シグネチャ型では対処困難なゼロデイ攻撃への対応力が高い","AIセキュリティツールは誤検知（False Positive）がゼロ","AIがマルウェアを自動で除去・修復するため人間の対応が不要になる"],
    answer: 1,
    explanation: "従来のシグネチャ型マルウェア検出はデータベースに登録された既知のパターンとの照合に依存します。AIを使った振る舞い検知（Behavior-based Detection）は通常と異なるプロセス・通信・ファイル操作パターンを学習ベースで検出するため、未知のマルウェア（ゼロデイ）にも対応できます。ただし誤検知もあるため人間の確認が依然必要です。"
  },
  { id: "ns-012", category: "security",
    question: "「最小権限の原則（Principle of Least Privilege）」をAIシステムに適用する意味として正しいものはどれか。",
    options: ["AIシステムは最低限の性能で動かしてコストを抑えること","AIシステム・AIエージェントに付与するアクセス権限を業務上必要な最小限にとどめ、万が一侵害された場合の被害範囲を限定すること","AIが利用できるデータ量を最小限にして学習コストを削減すること","AIシステムのユーザー数を必要最小限に制限すること"],
    answer: 1,
    explanation: "最小権限の原則はサイバーセキュリティの基本原則で、AIシステムにも重要です。AIエージェントが自律的にファイル操作・API呼び出し・データベースアクセスを行う場合、そのAIに必要以上の権限を与えると、プロンプトインジェクションやその他の攻撃で侵害された際の被害が拡大します。AIの権限は読み取り専用・特定ディレクトリのみなど最小限に設定すべきです。"
  },
  { id: "ns-013", category: "security",
    question: "「セキュリティ監査ログ」をAIシステムで活用する目的として正しいものはどれか。",
    options: ["監査ログはコンプライアンス上の形式的な記録であり実用性はない","AIへの入出力・APIアクセス・ユーザー行動の記録を保存・分析することで、不正利用・異常なアクセスパターン・インシデントの検出・原因調査を可能にする","監査ログはすべてのユーザーに公開しなければならない","AIが自動生成するコンテンツのみを記録し、入力プロンプトは記録しない"],
    answer: 1,
    explanation: "AIシステムの監査ログには誰がいつどんなプロンプトを入力しどんな出力を得たかが記録されます。これにより情報漏洩疑惑の調査・不正利用の検出・インシデント時の原因追跡が可能になります。ただし監査ログ自体に機密情報が含まれる場合があるため、ログのアクセス制御と保管期間の設定も重要です。"
  },
  { id: "ns-014", category: "security",
    question: "「VPNとAIサービス利用」の関係として正しいものはどれか。",
    options: ["VPNを使えばAIサービスへの入力データが完全に保護される","VPNはISPや中間者からの通信の盗聴は防ぐが、AIサービス自体への入力データの保護にはならず、公共Wi-Fi利用時の通信保護として有効","VPNを使うとAIサービスの性能が向上する","企業VPNを使えばクラウドAIに機密情報を自由に入力できる"],
    answer: 1,
    explanation: "VPNは通信経路の暗号化によりISPや公共Wi-Fiでの盗聴を防ぎますが、VPN接続先のインターネット上でAIサービスに送信したデータはAIベンダーのサーバーに届きます。「VPN使用＝AIサービスへの入力が保護される」は誤解です。機密情報の保護はAIサービスのプライバシーポリシーとデータ処理契約で確認する必要があります。"
  },
  { id: "ns-015", category: "security",
    question: "「アクセス制御とAIシステム」において重要な設計原則として正しいものはどれか。",
    options: ["AIシステムは全社員が同じ権限でアクセスできるようにすることが効率的","役割ベースのアクセス制御（RBAC）により、各ユーザーの役割に応じたAI機能・データへのアクセス権限を設定し、不正アクセスや情報漏洩リスクを低減する","AIシステムのアクセス制御はファイアウォールだけで十分","管理者権限はシステム全体の効率化のため全員に付与すべき"],
    answer: 1,
    explanation: "役割ベースのアクセス制御（RBAC）はユーザーの役割（経営者・一般社員・外部委託等）に応じてアクセスできるAI機能やデータを制限します。例えば人事AIには人事担当者のみアクセス可能、顧客データベースへのAIの読み取りは営業担当者のみなどの制御です。権限の定期的な棚卸し・退職者の即時アクセス無効化も重要です。"
  },

  // --- prompting +10 ---
  { id: "np-001", category: "prompting",
    question: "「システムプロンプト」と「ユーザープロンプト」の違いとして正しいものはどれか。",
    options: ["システムプロンプトはハードウェアレベルの命令でユーザープロンプトはソフトウェアレベルの命令","システムプロンプトはAIの動作・役割・制約を設定する管理者が定義する指示で、ユーザープロンプトはエンドユーザーが都度入力する指示","システムプロンプトは英語のみで書き、ユーザープロンプトは任意の言語で書く","システムプロンプトはAPIでのみ設定可能でチャットUIでは存在しない"],
    answer: 1,
    explanation: "システムプロンプトはAIアシスタントの「人格・役割・制約・フォーマット」を設定するもので、アプリ開発者がサービス設計時に定義します（例：「あなたは旅行代理店のAIです。旅行に関係する質問のみ答えてください」）。ユーザープロンプトはその設定されたAIに対してエンドユーザーが入力する個別の指示・質問です。"
  },
  { id: "np-002", category: "prompting",
    question: "「Self-Consistency（自己一貫性）」プロンプティングの説明として正しいものはどれか。",
    options: ["同じプロンプトを繰り返し入力してAIを一貫した出力に誘導する方法","同一の問題に対して複数の推論パスを生成し、最も多く現れた答えを最終回答とする多数決的な手法","AIが前の会話と矛盾しない回答をするよう指示する手法","ユーザーが自分のプロンプトを自己評価して改善するプロセス"],
    answer: 1,
    explanation: "Self-Consistencyは、Chain of Thoughtを組み合わせた手法で、同じ質問に対してAIに複数回・異なる推論パスで解答させ、最も多く得られた答えを採用します。単一回答より信頼性が高く、数学・論理問題などで精度向上に効果があることが研究で示されています。"
  },
  { id: "np-003", category: "prompting",
    question: "「Tree of Thoughts（思考の木）」プロンプティングの説明として正しいものはどれか。",
    options: ["プロンプトを木構造のデータベースで管理する手法","問題解決で複数の中間思考ステップを枝分かれ状に探索・評価し、最適な推論経路を選択する手法","決定木アルゴリズムをプロンプトで実行させる手法","過去の会話ログをツリー構造で整理する手法"],
    answer: 1,
    explanation: "Tree of Thoughts（ToT）はLLMが1本道の推論（Chain of Thought）ではなく、複数の思考の候補を並行して探索・評価し、有望な方向に深掘りする手法です。バックトラック（有望でない経路を捨てる）も行えるため、複雑なパズル・計画・創作などで優れた結果を示しています。"
  },
  { id: "np-004", category: "prompting",
    question: "「ReAct（Reasoning + Acting）フレームワーク」の説明として正しいものはどれか。",
    options: ["AIが感情（React）して反応する対話システム","推論（Reasoning）と行動（Acting：ツール使用・検索等）を交互に繰り返すことで、外部情報を取り込みながら複雑なタスクを解決するエージェント手法","プロンプトの反応速度を測定するフレームワーク","React.js（JavaScriptフレームワーク）とAIを組み合わせた開発手法"],
    answer: 1,
    explanation: "ReActはLLMに「思考→行動→観察」を繰り返させるフレームワークです。例えば「（思考）最新のAI論文を調べる必要がある→（行動）ウェブ検索ツールを使用→（観察）検索結果を確認→（思考）次に…」のように、ツール（検索・計算・コード実行等）を組み合わせながら複雑なタスクを段階的に解決します。"
  },
  { id: "np-005", category: "prompting",
    question: "「ネガティブプロンプト」が画像生成AIで使われる目的として正しいものはどれか。",
    options: ["否定的なテーマの画像を生成するための特別なコマンド","生成画像に含めたくない要素（低品質・歪み・特定の物体等）を指定することで、出力品質をコントロールする手法","AIの出力を批判・否定するための構文","黒・白など暗い色調のみで画像を生成するパラメータ"],
    answer: 1,
    explanation: "画像生成AI（Stable Diffusion等）では、ポジティブプロンプトで「生成したいもの」を指定するのに対し、ネガティブプロンプトでは「生成してほしくないもの」を指定します。例：「blurry, low quality, distorted fingers」など。これにより、よくある生成の失敗パターン（手の指の歪みなど）を抑制し品質を向上させます。"
  },
  { id: "np-006", category: "prompting",
    question: "プロンプトに「制約条件（Constraints）」を明示する効果として正しいものはどれか。",
    options: ["制約条件を多く書くほどAIの創造性が高まる","文字数・トーン・対象読者・使用禁止ワード等を明示することで、要件に合った出力を得やすくなり、大幅な手直しの必要が減る","制約条件はAPIユーザーのみが指定できる機能","制約条件を指定するとAIの処理時間が大幅に増加する"],
    answer: 1,
    explanation: "プロンプトに「500文字以内で」「中学生向けの言葉で」「専門用語は使わず」「箇条書き3点で」のような制約を明示することで、用途に合った出力が一発で得られやすくなります。制約なしでは出力の粒度・トーン・形式がバラつき、何度も修正が必要になることが多いです。"
  },
  { id: "np-007", category: "prompting",
    question: "「メタプロンプティング」の説明として正しいものはどれか。",
    options: ["プロンプトのメタデータを管理するデータベース技術","AIにプロンプトそのものを生成・最適化させる手法（例：「このタスクに最適なプロンプトを作成してください」）","ゲームのメタゲームに特化したプロンプト戦略","プロンプトに含まれる比喩（メタファー）を活用する手法"],
    answer: 1,
    explanation: "メタプロンプティングはAI自身に「このタスクを解決するための最良のプロンプトを作成してください」と依頼する手法です。AIの言語能力を使って人間より効果的なプロンプトを自動生成させることが目的です。また「どのような手順でこの問題を解くべきか教えてください」のように問題解決の枠組み自体をAIに設計させる用法もあります。"
  },
  { id: "np-008", category: "prompting",
    question: "プロンプトの「コンテキスト（背景情報）」を充実させる効果として正しいものはどれか。",
    options: ["背景情報を多く与えると、AIがトークンを消費しすぎてエラーになる","ユーザーの状況・目的・前提知識を明示することで、AIがより的確で使いやすい回答を生成しやすくなる","コンテキストは英語でのみ有効で日本語では機能しない","コンテキストを与えるとAIが自律的に行動してしまう"],
    answer: 1,
    explanation: "「プログラミング初心者向けに」「営業部門のマネージャーとして」「このコードのバグを修正したい、環境はPython 3.11」のように背景情報（コンテキスト）をプロンプトに含めることで、AIはユーザーのニーズにより合わせた回答を生成できます。AIはコンテキストなしでは平均的な回答しか返せないため、「誰が・何のために・どんな状況で」の情報が重要です。"
  },
  { id: "np-009", category: "prompting",
    question: "「プロンプトテンプレート」の業務活用における利点として正しいものはどれか。",
    options: ["テンプレートを使うとAIが学習して精度が永続的に向上する","頻出タスクのプロンプトをテンプレート化することで、品質の標準化・作業効率化・AIの出力のばらつき削減が実現できる","プロンプトテンプレートは有料ライセンスが必要","テンプレートを使うと毎回同一の出力しか得られなくなる"],
    answer: 1,
    explanation: "プロンプトテンプレートは「議事録要約テンプレート」「メール文案テンプレート」「コードレビューテンプレート」のように、定型タスクのプロンプトを整備したものです。チームで共有することで①誰が使っても一定品質の出力が得られる②ゼロからプロンプトを書く手間が省ける③ベストプラクティスを組織知として蓄積できる利点があります。"
  },
  { id: "np-010", category: "prompting",
    question: "「プロンプトの長さと品質のトレードオフ」として正しい記述はどれか。",
    options: ["プロンプトは必ず長いほど良い回答が得られる","タスクに応じて適切な長さは異なり、シンプルな質問は短く・複雑なタスクは詳細な指示が必要だが、無関係な情報を詰め込みすぎると焦点が散漫になる","プロンプトは必ず1行にまとめるべきである","長いプロンプトはAPIコストが高すぎるため実用的でない"],
    answer: 1,
    explanation: "プロンプトの適切な長さはタスクの複雑さに依存します。「今日の天気は？」は短くて良いですが、「以下の仕様書に基づいてPythonでAPIを実装してください」では詳細な仕様・制約・出力形式の指定が必要です。一方、無関係な情報を大量に追加するとAIが重要な指示を見落とす場合があります。「明確・具体的・必要十分」がプロンプト設計の基本です。"
  },

  // --- services +8 ---
  { id: "nsv-001", category: "services",
    question: "「Stable Diffusion」などの画像生成AIの仕組みとして正しいものはどれか。",
    options: ["インターネット上の画像を検索してそのままコピーして表示する","テキストの指示（プロンプト）から拡散モデルを使ってランダムノイズを徐々に除去し、新しい画像を生成する","画像データベースを参照しパズルのようにパーツを組み合わせる","ユーザーが選んだ既存画像にフィルターを適用して新しい画像を作る"],
    answer: 1,
    explanation: "Stable Diffusion・DALL-E・Midjourneyなどの画像生成AIは主に拡散モデル（Diffusion Model）を採用しています。学習時に画像にノイズを加えるプロセスを学習し、生成時はランダムなノイズから始めてテキストプロンプトの意味を参照しながら徐々にノイズを除去して目的の画像を生成します。"
  },
  { id: "nsv-002", category: "services",
    question: "「TTS（Text-to-Speech）」音声合成AIの活用例として正しいものはどれか。",
    options: ["テキストを他言語に翻訳するサービス","入力テキストを自然な音声に変換し、ナレーション・読み上げ・アクセシビリティ支援・音声コンテンツ制作などに活用されるサービス","音声データをテキストに書き起こすサービス","音楽の楽譜から演奏音源を生成するサービス"],
    answer: 1,
    explanation: "TTS（テキスト読み上げ）AIは文章を入力すると人間に近い自然な音声で読み上げます。電子書籍の音声化・動画ナレーション・視覚障がい者向け読み上げ・コールセンターの自動応答・語学学習コンテンツなど幅広く活用されています。特定人物の声を学習してクローン音声を生成できるサービスも増えています。"
  },
  { id: "nsv-003", category: "services",
    question: "「Whisper」などの音声認識AI（STT: Speech-to-Text）の特徴として正しいものはどれか。",
    options: ["音声認識AIはインターネット接続が常に必要で、オフライン動作はできない","音声・動画ファイルを自動でテキストに書き起こし、多言語対応・話者分離などの機能も提供するサービスが普及している","音声認識は英語のみ高精度で、日本語の精度は著しく低い","音声認識AIは専用マイクがないと動作しない"],
    answer: 1,
    explanation: "OpenAIのWhisperをはじめとする音声認識AIは会議・インタビュー・講演などの音声・動画を高精度でテキストに変換します。多言語対応（日本語も含む）・話者分離（誰が話したか識別）・タイムスタンプ付き出力などの機能も進化しており、議事録の自動作成・字幕生成・コールセンターの通話分析などに活用されています。"
  },
  { id: "nsv-004", category: "services",
    question: "「動画生成AI」（Sora・Runway等）の現状として正しいものはどれか。",
    options: ["動画生成AIはすでに完璧な長編映画を自動生成できる","短い動画クリップの生成は実用化されているが、物理法則の再現・長尺生成・一貫したキャラクター描写などに課題があり、映像制作の補助ツールとして活用が進んでいる","動画生成AIは学術研究のみで利用され商業活用はされていない","動画生成AIは音声・テキストを入力できず、静止画のみから生成できる"],
    answer: 1,
    explanation: "OpenAIのSora・RunwayのGen-3・Kling・Luma AI等のテキスト/画像→動画生成AIが急速に進化しています。数秒〜1分程度の動画生成は実用レベルに近づいていますが、長尺動画での整合性・物理シミュレーションの精度・特定キャラクターの一貫性などに課題が残ります。映像制作・広告・コンテンツ業界での実験的活用が始まっています。"
  },
  { id: "nsv-005", category: "services",
    question: "「GitHub Copilot」などのAIコーディング支援ツールの主な機能として正しいものはどれか。",
    options: ["コードのバグを100%自動で発見・修正し、テストも自動で通過させる","コードの自動補完・関数の提案・コメントからのコード生成・コードの説明・テストコードの生成などを行う開発支援ツール","プログラミング言語を自動で選定して最適なアーキテクチャを設計する","セキュリティ脆弱性を完全に排除したコードのみを生成することが保証されている"],
    answer: 1,
    explanation: "GitHub Copilot・Cursor・CodeiumなどのAIコーディング支援ツールはIDE上でリアルタイムにコードの続きを提案したり、自然言語のコメントからコードを生成したり、既存コードを説明したりします。開発速度の向上が報告されている一方、生成コードの品質確認・著作権・セキュリティチェックの必要性も指摘されています。"
  },
  { id: "nsv-006", category: "services",
    question: "「AIアバター・デジタルヒューマン」の活用例として正しいものはどれか。",
    options: ["AIアバターは3Dゲームキャラクターにのみ使用される","企業の仮想広報担当・教育コンテンツのバーチャル講師・24時間対応のカスタマーサービス担当・動画ナレーターなど、さまざまな実業務で活用されている","AIアバターは技術的に日本語での自然な表情表現ができない","AIアバターは完全にリアルタイムで会話できないため、録画動画のみで使用される"],
    answer: 1,
    explanation: "AIアバター（デジタルヒューマン）はAI生成の仮想人物で、D-ID・HeyGen・Synthesia等のサービスで作成できます。テキストや音声を入力するとそのアバターが話す動画が生成され、企業広報・Eラーニング・商品紹介動画・多言語コンテンツ制作などに活用されています。実在する人物に似せた悪用（ディープフェイク）への対策も課題です。"
  },
  { id: "nsv-007", category: "services",
    question: "「AI翻訳サービス」（DeepL・Google翻訳等）の特徴として正しいものはどれか。",
    options: ["AI翻訳は常に人間の専門翻訳者を上回る品質を提供できる","一般的な文書の翻訳精度は大幅に向上しているが、法律・医療など専門用語の多い文書や文化的ニュアンスが重要な翻訳では人間の専門家による確認・修正が依然必要","AI翻訳はテキストのみ対応で文書ファイルや画像内のテキストは翻訳できない","AI翻訳サービスはすべて完全無料で商業利用も制限なく可能"],
    answer: 1,
    explanation: "ニューラル機械翻訳（NMT）を採用したAI翻訳サービスは一般的な文書で非常に高い精度を実現しています。しかし法律契約書・医薬品添付文書・文学作品のような専門性・文化的ニュアンスが重要なテキストでは誤訳・ニュアンスの欠落リスクがあります。AI翻訳を「下訳」として使い人間が確認・修正する活用法が業界標準になっています。"
  },
  { id: "nsv-008", category: "services",
    question: "「ノーコード・ローコードAIツール」の説明として正しいものはどれか。",
    options: ["プログラムコードが一切不要で、AIモデルを0から自力で開発できるツール","プログラミングの専門知識がなくてもGUIでAI機能（画像分類・予測モデル・チャットボット等）を構築・活用できるプラットフォーム","AIを使って既存のコードを削除するツール","コーディングをAIが完全に代替するIDE"],
    answer: 1,
    explanation: "ノーコード・ローコードAIツール（Google AutoML・Microsoft Power Platform・make.com等）は、ドラッグ＆ドロップや設定画面操作でAI機能を実装できるプラットフォームです。非エンジニアのビジネス担当者がAI活用を開始する入門として有効で、AIの民主化を促進しています。ただし高度なカスタマイズや大規模システムには限界があります。"
  },

  // --- trends +7 ---
  // --- trends new-tr ---
  { id: "new-tr-001", category: "trends",
    question: "マルチモーダルAIとはどのようなAIか。",
    options: ["テキストのみを処理するAI","テキスト・画像・音声・動画など複数の形式のデータを統合的に処理・生成できるAI","複数のAIモデルを並列で動かすシステム","複数の言語に対応したAI"],
    answer: 1,
    explanation: "マルチモーダルAIは、テキスト・画像・音声・動画など異なるモダリティ（情報形式）を組み合わせて入出力できるAIです。GPT-4o・Gemini・Claude 3など主要LLMがマルチモーダル化しており、「画像を見て説明する」「音声で質問してテキストで回答を得る」などが可能です。"
  },
  { id: "new-tr-002", category: "trends",
    question: "AIエージェントの特徴として正しいものはどれか。",
    options: ["人間の指示を1回受け取るだけで終了するAI","目標を与えられると自律的に計画を立て・ツールを使い・複数ステップのタスクを遂行するAI","チャット形式のみで動作するAI","データベースを管理するためのAI"],
    answer: 1,
    explanation: "AIエージェントは、与えられた目標に対してAI自身が計画を立て、ウェブ検索・コード実行・ファイル操作などのツールを使いながら複数ステップのタスクを自律的に実行します。AutoGPT・ChatGPT with Agents・Claude Computer Useなどが代表例で、単純な一問一答を超えた「自律的なタスク実行」が特徴です。"
  },
  { id: "new-tr-003", category: "trends",
    question: "RAG（Retrieval-Augmented Generation）の主な目的として正しいものはどれか。",
    options: ["AIモデルのパラメータ数を増やすこと","LLMの知識カットオフ問題を補い・外部データベースから関連情報を検索して根拠ある回答を生成すること","AIの推論速度を向上させること","複数のAIを競わせて最良の回答を選ぶこと"],
    answer: 1,
    explanation: "RAGはLLMの回答生成時に外部知識ベース（社内文書・最新ウェブ情報等）から関連情報を検索して文脈に加える手法です。LLMは学習データの知識カットオフ後の情報を知らず・ハルシネーションも生じますが、RAGは「根拠となる文書を参照して回答する」ことでこれらを改善します。"
  },
  { id: "new-tr-004", category: "trends",
    question: "SLM（Small Language Model）の特徴として正しいものはどれか。",
    options: ["SLMはLLMより必ず性能が低い","パラメータ数が少なく軽量で、エッジデバイスやオンプレミス環境での動作・低コスト運用に適したモデル","SLMは100億パラメータ以上のモデルを指す","SLMはテキスト生成のみに特化したモデル"],
    answer: 1,
    explanation: "SLM（小型言語モデル）はパラメータ数を絞った軽量なLLMです。Microsoft Phi・Google Gemma・Meta LLaMAなどが代表例です。クラウドに送信せずローカル環境で動作可能なため、プライバシー・低遅延・コスト削減の観点で注目されています。特定ドメインに特化してファインチューニングすることでLLMに匹敵する性能も出せます。"
  },
  { id: "new-tr-005", category: "trends",
    question: "オープンソースLLMの代表的な特徴として正しいものはどれか。",
    options: ["オープンソースLLMはすべて商用利用禁止である","モデルの重みや構造が公開され、ローカル環境での自由なカスタマイズ・ファインチューニング・商用利用が可能なものもある","オープンソースLLMはクローズドモデルより常に性能が低い","オープンソースとは無料で使えることのみを意味する"],
    answer: 1,
    explanation: "Meta LLaMA・Mistral・Microsoft Phi・Google Gemmaなどのオープンソース（またはオープンウェイト）LLMは、モデルの重みが公開されており自前のサーバーで動かすことができます。データをクラウドに送らずプライバシーを守れる点・自社データでのファインチューニングが可能な点が強みです。ライセンスにより商用利用可否は異なります。"
  },
  { id: "new-tr-006", category: "trends",
    question: "EU AI法（EU AI Act）の基本的な規制アプローチとして正しいものはどれか。",
    options: ["AIを完全に禁止する法律である","AIをリスクレベルに応じて分類し、高リスクAIには厳格な要件を課すリスクベースアプローチを採用している","EU市民のみに適用され企業には関係ない","すべてのAIシステムを同一の規制で管理する"],
    answer: 1,
    explanation: "2024年に成立したEU AI法は、AIシステムをリスクに応じて「容認できないリスク（禁止）」「高リスク（厳格な要件）」「限定的リスク（透明性義務）」「最小リスク（規制なし）」の4段階に分類します。重要インフラ・採用・信用審査への使用が高リスクに該当します。EU内で事業展開する企業はEU外でも適用対象となります。"
  },
  { id: "new-tr-007", category: "trends",
    question: "生成AIの環境負荷に関する記述として正しいものはどれか。",
    options: ["AIはデジタルデータのみを扱うため環境負荷はゼロである","大規模AIモデルの学習・推論には大量の電力と水を消費し、CO2排出と環境負荷が社会課題となっている","AI利用の環境負荷は検索エンジンより小さい","再生可能エネルギーではAIを動かせない"],
    answer: 1,
    explanation: "GPT-4などの大規模AIモデルの学習には膨大な計算資源（GPU）が必要で、電力消費・冷却用水の消費・CO2排出が生じます。また推論（日常的な利用）においても1回のチャット応答は一般的なウェブ検索の数倍の電力を消費するとされます。AIのカーボンフットプリント削減は業界全体の課題です。"
  },
  { id: "new-tr-008", category: "trends",
    question: "AGI（Artificial General Intelligence：汎用人工知能）の定義として正しいものはどれか。",
    options: ["現在のChatGPTがすでにAGIである","人間と同等またはそれ以上の能力で、あらゆる知的タスクをこなせる汎用的なAIであり、現時点ではまだ実現していない","特定の1つのタスクに特化した高性能なAI","AGIはすでに2020年に実現した"],
    answer: 1,
    explanation: "AGIは特定タスクに限らず「人間が行えるすべての知的作業」を実行できるAIを指します。現在のLLM（GPT-4・Claude等）は特定タスクで人間を超える性能を持ちますが、これらはANI（特化型AI）であり、AGIはまだ実現していません。いつ実現するかについては専門家の間でも意見が分かれています。"
  },
  { id: "new-tr-009", category: "trends",
    question: "日本政府のAI推進に関する政策として正しいものはどれか。",
    options: ["日本はAIを全面禁止する方針を打ち出している","AI戦略・AIセーフティインスティテュートの設立・生成AIの利活用推進と安全性確保の両立を目指す政策を推進している","日本はAI規制についていかなる指針も発表していない","日本のAI政策はEU AI法と完全に同一である"],
    answer: 1,
    explanation: "日本は「AI戦略2022」以降、生成AIの活用推進と安全性確保の両立を基本方針としています。2023年にはAIセーフティインスティテュート（AISI）を設立し、AI安全性評価の研究を進めています。EU AI法のような包括的な規制法ではなく、ガイドライン・原則ベースのアプローチで推進しています。"
  },
  { id: "new-tr-010", category: "trends",
    question: "AIが雇用に与える影響に関する研究から得られた共通認識として正しいものはどれか。",
    options: ["AIにより直ちにすべての仕事がなくなる","反復的・定型的なタスクの自動化が進む一方、創造性・対人関係・複雑判断を要するタスクはAIで代替しにくく、AIとの協働スキルが重要になる","AIは雇用に全く影響を与えない","AIはホワイトカラーには影響せずブルーカラーのみが影響を受ける"],
    answer: 1,
    explanation: "McKinsey・WEF・OECDなどの研究は、AIが多くの職種のタスクを一部自動化しつつ新たな職種を生み出すという「変化」を共通して示しています。消える職種・残る職種というより、業務内容が変わり「AIを活用できる人材」の価値が高まるという見方が主流です。生涯学習・リスキリングの重要性も強調されています。"
  },
  { id: "new-tr-011", category: "trends",
    question: "動画生成AIの現状に関する説明として正しいものはどれか。",
    options: ["現在の動画生成AIは1秒以下のクリップしか生成できない","Sora・Runway・Pika・Kling等のサービスがテキストから数秒〜数分の高品質動画を生成できるようになり、映像制作の変革が進んでいる","動画生成AIは音声を含む動画を生成できない","動画生成AIはまだ研究段階で商用サービスは存在しない"],
    answer: 1,
    explanation: "OpenAIのSora・Runwayの Gen-3・中国のKling・日本のSakana AIなど、テキストプロンプトから数秒〜数分の高品質動画を生成するサービスが実用化されています。広告・エンターテインメント・教育コンテンツなどへの活用が進む一方、フェイク動画（ディープフェイク）によるリスクも社会課題です。"
  },
  { id: "new-tr-012", category: "trends",
    question: "音楽生成AIの説明として正しいものはどれか。",
    options: ["音楽生成AIは楽器の演奏のみを生成できる","SunoやUdioなどのサービスがテキストプロンプトから歌詞・メロディ・編曲を含む楽曲を数秒で生成できるようになっている","音楽生成AIはまだ商用サービスとして存在しない","音楽生成AIは著作権侵害のリスクがなく完全に安全である"],
    answer: 1,
    explanation: "Suno・Udio等の音楽生成AIは、「80年代風のポップスで夕暮れの情景を歌う曲を作って」のようなプロンプトから歌詞・メロディ・ボーカル・編曲を含む楽曲を短時間で生成できます。コンテンツ制作・BGM生成・音楽教育などに活用されますが、既存楽曲との類似性・学習データの著作権問題は業界全体の課題です。"
  },
  { id: "new-tr-013", category: "trends",
    question: "コード生成AIの業務活用として正しいものはどれか。",
    options: ["コード生成AIが生成したコードは必ずバグがなくレビュー不要","GitHub Copilot・Cursorなどのツールが開発者の生産性を向上させるが、生成コードのセキュリティ確認・テストは人間が行う必要がある","コード生成AIはエンジニア以外は使えない","コード生成AIにより全てのプログラマーが不要になる"],
    answer: 1,
    explanation: "GitHub Copilot・Cursor・Amazon CodeWhispererなどのコード生成AIは、コーディングの補完・ドキュメント生成・バグ修正提案・テストコード生成などで開発生産性を大幅に向上させます。ただしAI生成コードにもバグ・セキュリティ脆弱性（SQLインジェクション等）が含まれることがあるため、エンジニアによるコードレビューと自動テストは引き続き必要です。"
  },
  { id: "new-tr-014", category: "trends",
    question: "AIを悪用したサイバー攻撃の新たな脅威として正しいものはどれか。",
    options: ["AIを使った攻撃はまだ理論上のものでありツールは存在しない","AIにより高精度のフィッシングメール生成・マルウェアコードの作成・音声・画像のディープフェイク詐欺などの攻撃が容易化・巧妙化している","AI活用の攻撃は企業には影響しない","AIによる攻撃はメールのみに限定される"],
    answer: 1,
    explanation: "生成AIはサイバー攻撃の高度化を促進しています。主な脅威として、①本物に近い文章のフィッシングメール大量生成、②マルウェアコードの自動生成、③幹部の声・顔を模倣したディープフェイク詐欺（社長を装った振込指示等）などがあります。防御側もAIを活用した異常検知・脅威インテリジェンスで対抗しています。"
  },
  { id: "new-tr-015", category: "trends",
    question: "Foundation Model（基盤モデル）の特徴として正しいものはどれか。",
    options: ["特定の1タスクのみに使えるモデル","大規模なデータで事前学習され、ファインチューニングや指示だけで多様なタスクに転用できる汎用的な大規模モデル","Foundation Modelは画像生成専用のモデルを指す","Foundation Modelは必ずオープンソースである"],
    answer: 1,
    explanation: "Foundation Model（基盤モデル）はStanford HAI研究者が2021年に提唱した概念で、膨大なデータで事前学習した後、様々なタスク（翻訳・要約・コード生成・画像認識等）にファインチューニングや指示チューニングで転用できる汎用大規模モデルを指します。GPT-4・Claude・Gemini・LLaMAなどが代表例です。"
  },
  { id: "new-tr-016", category: "trends",
    question: "エッジAIの特徴と主な活用場面として正しいものはどれか。",
    options: ["エッジAIはクラウドに送信してから処理するAI","スマートフォン・IoTデバイスなどのエンドポイント機器上でAI処理を行い、低遅延・プライバシー保護・通信コスト削減などの利点がある","エッジAIは処理速度がクラウドAIより必ず遅い","エッジAIは画像のみを処理できる"],
    answer: 1,
    explanation: "エッジAIはクラウドにデータを送らずデバイス上で推論処理を行います。スマートフォンのFace ID・自動車の自動ブレーキ・製造ラインのリアルタイム品質検査・ウェアラブルの健康モニタリングなどが代表例です。通信遅延の排除・プライバシー保護・ネット未接続環境での動作が主な利点です。"
  },
  { id: "new-tr-017", category: "trends",
    question: "説明可能AI（XAI：Explainable AI）が求められる主な理由として正しいものはどれか。",
    options: ["AIが正確すぎて人間には理解できないため説明を省く必要があるから","融資審査・医療診断・採用など人の生活に重大な影響を与える判断をAIが行う際、その根拠を人間が理解・検証できる必要があるから","XAIはAIの処理速度を向上させるための技術だから","すべてのAIは法律でXAIが義務付けられているから"],
    answer: 1,
    explanation: "ディープラーニングは高精度ですが「なぜそう判断したか」がブラックボックスになりがちです。融資審査で否決された理由・医療AI診断の根拠・採用AIの評価基準などは、影響を受ける人への説明責任・モデルのバイアス検出・規制要件（EU AI法など）の観点からXAIが重要です。SHAP・LIME・Attention可視化などの手法が研究されています。"
  },
  { id: "new-tr-018", category: "trends",
    question: "AIと医療・ヘルスケアの組み合わせで既に実用化が進んでいる応用として正しいものはどれか。",
    options: ["AIが全ての患者に完全な医療診断を行い医師は不要になっている","医用画像診断支援（がん検出等）・電子カルテの要約・創薬候補の探索・健康モニタリングウェアラブルなどで実用化が進んでいる","AIは医療に使えず将来も応用は不可能","AIによる診断は法律で全面禁止されている"],
    answer: 1,
    explanation: "医療AIの実用化事例として、胸部X線・眼底画像・病理画像からの疾患検出（例：早期がん・糖尿病性網膜症）、電子カルテの自動要約、新薬候補分子の探索・スクリーニング、ウェアラブルによる心房細動検出などがあります。AIは医師の意思決定支援ツールであり、最終診断は医師が行うのが基本です。"
  },
  { id: "new-tr-019", category: "trends",
    question: "合成データ（Synthetic Data）のAI開発における役割として正しいものはどれか。",
    options: ["合成データは実データと全く同じ性能を保証する","実データのプライバシー問題・収集コスト・希少データの不足を補うために、AIが生成した人工データを学習データとして活用する手法","合成データは現在のAI開発では使われていない","合成データとは実データをコピーして増量する手法"],
    answer: 1,
    explanation: "合成データはGAN・VAE・拡散モデルなどを用いて生成した人工的なデータです。個人情報を含まないため医療・金融データのプライバシー問題を回避でき、希少疾患・事故シーンなど現実収集が困難なデータも生成できます。自動運転・医療AI・金融詐欺検知の学習データ拡張で活用が進んでいます。"
  },
  { id: "new-tr-020", category: "trends",
    question: "AI安全性に関する国際的な取り組みとして正しいものはどれか。",
    options: ["AI安全性の国際的な枠組みはまだ存在しない","G7広島AIプロセス・英米のAI安全研究所設立・国連AIガバナンス諮問機関など、国際的なAI安全性の議論と協力体制が進んでいる","AI安全性は企業のみが取り組む問題で政府は関与しない","AI安全性の国際ルールはすでに完成している"],
    answer: 1,
    explanation: "AI安全性への国際的取り組みは急速に進んでいます。2023年G7広島サミットでのAI原則合意、同年英国主催のAI安全サミット（ブレッチリー宣言）、米英日韓などのAI安全研究所（AISI）設立、国連AI諮問機関の設置などが代表例です。フロンティアAIモデルのリスク評価・情報共有が主要議題です。"
  },
  { id: "new-tr-021", category: "trends",
    question: "ハルシネーション（幻覚）問題に対するAI技術的対策のトレンドとして正しいものはどれか。",
    options: ["ハルシネーションは解決不可能な問題でありトレンドは存在しない","RAGによる根拠文書の参照・強化学習による事実確認強化・引用元の明示・ファクトチェックAIの組み合わせなど複数のアプローチが研究・実用化されている","ハルシネーションはモデルサイズを増やすだけで解決できる","ハルシネーション対策はユーザー側の責任でありAI開発者は対応不要"],
    answer: 1,
    explanation: "ハルシネーション軽減の主なアプローチは、①RAG（検索拡張生成）で回答に根拠文書を付与、②RLHF（人間フィードバック強化学習）で事実性を向上、③回答に引用元・信頼度を明示、④別のAIでファクトチェックする自己検証手法などです。完全解消は困難ですが、組み合わせることで大幅に低減できます。"
  },
  { id: "new-tr-022", category: "trends",
    question: "マルチエージェントシステムの特徴として正しいものはどれか。",
    options: ["1つのAIが全タスクを処理するシステム","複数のAIエージェントが役割分担しながら協調・通信して複雑なタスクを解決するシステム","マルチエージェントはゲームAIのみに使われる概念","マルチエージェントは複数のユーザーが1つのAIを使う仕組み"],
    answer: 1,
    explanation: "マルチエージェントシステムでは、複数の専門化されたAIエージェントが連携して複雑なタスクを解決します。例えば「調査エージェント」「分析エージェント」「報告書作成エージェント」が協調して市場調査レポートを作成するといった形です。AutoGen・CrewAI・LangGraphなどのフレームワークが普及しています。"
  },
  { id: "new-tr-023", category: "trends",
    question: "AIガバナンスフレームワークの目的として正しいものはどれか。",
    options: ["AIの開発を禁止すること","AIの開発・展開・利用における原則・プロセス・責任体制を定め、安全・公正・透明なAI利用を実現するための組織的仕組み","AIガバナンスは国家規制のみを指し企業には関係ない","ガバナンスとは政府がAI企業を監視する仕組みのみ"],
    answer: 1,
    explanation: "AIガバナンスフレームワークは、組織内でAIを責任ある形で開発・活用するための指針・プロセス・体制の総称です。NIST AI RMF（米国）・OECD AI原則・ISO/IEC 42001などが代表的なフレームワークです。企業においてはAIリスク管理委員会の設置・倫理審査プロセス・モニタリング体制の構築などが含まれます。"
  },
  { id: "new-tr-024", category: "trends",
    question: "AI×ロボティクス（身体性AI）の最新動向として正しいものはどれか。",
    options: ["AIとロボティクスの統合は現在も研究段階でありロボットは自律動作できない","生成AIと物理的なロボットを組み合わせたヒューマノイドロボットや自律型産業ロボットの開発が加速し、物流・製造・介護などへの応用が進んでいる","AIロボットは工場内でのみ動作可能","ロボット用AIは言語を理解できない"],
    answer: 1,
    explanation: "Figure AI・Boston Dynamics・Tesla Optimus・トヨタのTHRなどがLLMと身体制御を統合したヒューマノイドロボットを開発しています。物流倉庫での荷物仕分け・製造ラインの柔軟な組立・介護補助などへの応用が期待されています。「言葉で指示を受けて物理的な作業を行う」ロボットの実用化が急速に進んでいます。"
  },
  { id: "new-tr-025", category: "trends",
    question: "次世代AIモデルの研究動向として注目されているものとして正しいものはどれか。",
    options: ["研究者はパラメータ数の増加のみに注力している","推論能力強化（Chain of Thought・テスト時コンピュート拡張）・長コンテキスト対応・マルチモーダル化・省エネルギー化など多角的なアプローチで研究が進んでいる","AIの研究はすでに完成し新たな進歩はない","次世代AIは量子コンピュータ上でのみ動作する"],
    answer: 1,
    explanation: "次世代AI研究の主なトレンドは、①推論時に多くの計算資源を使って「考える」o1/o3型モデル、②100万トークン超の超長コンテキスト対応、③テキスト・画像・音声・動画の完全統合マルチモーダル、④より小さなモデルでより高い性能を出す効率化、⑤自律的に行動するエージェント能力の強化、などです。"
  },

  { id: "nt-001", category: "trends",
    question: "「AGI（汎用人工知能）開発競争」の現状として正しいものはどれか。",
    options: ["AGIはすでに実現しており、複数の企業が商業利用している","OpenAI・DeepMind・Anthropic等がAGI開発を目標と掲げているが、現時点のAIは特定タスクに特化したANI（特化型AI）であり、AGIは未実現","AGIは理論上不可能とされており研究は停止している","AGIはすでに軍事目的で実用化されている"],
    answer: 1,
    explanation: "AGI（Artificial General Intelligence）はあらゆる知的タスクで人間と同等以上の能力を持つAIです。OpenAIは「AGI実現」を明示的な目標に掲げ、DeepMindも関連研究を進めています。しかし現在のGPT-4やGeminiなどは依然として特定タスクに優れたANIであり、真のAGI実現時期については研究者間でも意見が大きく割れています。"
  },
  { id: "nt-002", category: "trends",
    question: "「AIと半導体産業」の関係として正しいものはどれか。",
    options: ["AIの発展により半導体の需要は減少している","大規模AIモデルの学習・推論に膨大なGPU・AI専用チップが必要となり、NVIDIAをはじめとする半導体産業の需要が急増している","AIは汎用CPUのみで動作するため、特殊な半導体は必要ない","半導体メーカーはAI開発から撤退する方向にある"],
    answer: 1,
    explanation: "LLMや画像生成AIの大規模学習・推論にはNVIDIA A100・H100・B200などの高性能GPU・AI専用チップが大量に必要です。AI需要を背景にNVIDIAの時価総額が急上昇し、GoogleはTPU・AmazonはTrainium、AppleはNPU内蔵チップを独自開発するなど、AIと半導体産業は不可分の関係になっています。地政学的リスク（台湾問題等）も半導体供給に影響します。"
  },
  { id: "nt-003", category: "trends",
    question: "「生成AIのマルチモーダル化」のトレンドとして正しいものはどれか。",
    options: ["AIは今後テキスト処理に特化する方向に進化する","テキスト・画像・音声・動画・センサーデータなど複数モダリティを統合処理できるモデルが主流となり、より自然な人間とのインタラクションが可能になっている","マルチモーダルAIは軍事用途のみで開発されている","マルチモーダルAIは処理能力の限界からスマートフォンでは永久に動作しない"],
    answer: 1,
    explanation: "GPT-4o・Gemini Ultra・Claude 3等の主要AIは画像・音声・テキストを統合処理できるマルチモーダルモデルです。画像を見ながら質問に答える・音声で会話しながら画面を共有する・動画を分析してテキスト解説を生成するなど、AIのインタラクション形式が急速に豊かになっています。さらに動画・3D・センサーデータへの対応も進んでいます。"
  },
  { id: "nt-004", category: "trends",
    question: "「AIスタートアップエコシステム」の特徴として現状を正しく説明しているものはどれか。",
    options: ["AIスタートアップへの投資は過熱後に完全に冷え込み、新規参入は不可能","OpenAI・Anthropicなどの基盤モデル開発企業、その上でアプリを開発するAIスタートアップ、AI開発インフラを提供するクラウド企業が層を形成し、大規模な投資が継続している","AIスタートアップは日本発のみが成功しており、シリコンバレーのAI企業は衰退している","AIスタートアップへの投資は政府のみが行い、ベンチャーキャピタルは参加していない"],
    answer: 1,
    explanation: "AI業界は「インフラ層（GPU・クラウド）」「基盤モデル層（OpenAI・Anthropic・Google）」「アプリケーション層（業界特化型AIスタートアップ）」の構造が形成されています。世界的にAIへのベンチャーキャピタル投資が急増しており、医療・法律・教育・製造など各業界特化のAIスタートアップが多数生まれています。"
  },
  { id: "nt-005", category: "trends",
    question: "「生成AIの市場規模」に関する一般的なトレンドとして正しいものはどれか。",
    options: ["生成AI市場は成熟期を過ぎ縮小に転じている","生成AIの世界市場規模は急速に拡大しており、2020年代後半には数千億ドル規模になるとの予測が複数の調査機関から出ている","生成AIの市場はコンシューマー向けのみで、企業向け（B2B）市場はほぼ存在しない","生成AIの収益化に成功した企業はOpenAIのみ"],
    answer: 1,
    explanation: "Goldman Sachs・McKinsey・Gartnerなどの主要調査機関は生成AIの世界市場が2030年代にかけて数千億〜数兆ドル規模に達するとの予測を発表しています。コンシューマー向けサービス（ChatGPT等）に加え、エンタープライズ向けAPI・業界特化型AIソリューション・AIインフラが主要な収益源として成長しています。"
  },
  { id: "nt-006", category: "trends",
    question: "「AIと雇用」に関する研究機関の見解として正しいものはどれか。",
    options: ["すべての研究機関がAIにより10年以内に全雇用の90%以上が消滅すると予測している","研究機関によって予測は異なり、一部の職種・タスクの自動化と新たな職業の創出が同時に起きるとされ、AIリテラシーや人間固有スキルの重要性が増すとされる","AIは雇用に全く影響しないとすべての研究機関が結論付けている","AIによる雇用喪失は先進国のホワイトカラーのみで、他の職種への影響はない"],
    answer: 1,
    explanation: "McKinsey・World Economic Forum・OECDなど主要機関の研究では、AIが多くの職種のタスクを自動化する一方で新たな職業を創出するとされ、影響の大きさは職種・地域・教育水準により大きく異なります。反復タスクの自動化は進む一方、対人スキル・創造性・複雑な意思決定・AIと協働できる能力の価値が高まるという共通認識があります。"
  },
  { id: "nt-007", category: "trends",
    question: "「AIの国際規制調和」の現状として正しいものはどれか。",
    options: ["すでに全世界統一のAI規制が制定され、各国は同一のルールに従っている","EU AI法・米国大統領令・英国のプロ・イノベーション型規制・中国の生成AIサービス規定など、各国・地域で異なるアプローチが並存し、国際的な調和に向けた対話が進んでいる","AI規制は各国政府が完全に放棄し業界自主規制のみとなっている","G7・G20でのAI規制議論は存在せず、各国が独立してのみ対応している"],
    answer: 1,
    explanation: "AI規制は各国で異なるアプローチが並存しています。EU AI法（リスクベース規制）・米国（大統領令による行政対応とセクター別規制）・英国（既存規制機関による文脈依存型）・中国（生成AIサービス管理暫定弁法）などが代表例です。G7広島AIプロセス・OECD AIポリシー観測所・国連AIガバナンス機関設立など国際調和の取り組みも進んでいます。"
  },

  // --- business new-biz ---
  { id: "new-biz-001", category: "business",
    question: "生成AI導入のROI（投資対効果）を測定する際に最も適切な指標の組み合わせはどれか。",
    options: ["AIへの支出額のみを追跡する","業務時間の削減率・エラー率の低下・従業員満足度・収益への貢献など複数の定量・定性指標を組み合わせて評価する","AI導入前後の売上増加率だけで判断する","競合他社のAI投資額と比較するだけでよい"],
    answer: 1,
    explanation: "AIのROIは単一指標では測れません。業務時間削減・エラー率低下・顧客満足度・従業員生産性・収益貢献など定量・定性の複数指標を組み合わせ、導入前のベースラインと比較して評価します。短期コスト削減だけでなく中長期の価値創出も含めた包括的な視点が重要です。"
  },
  { id: "new-biz-002", category: "business",
    question: "生成AIを使って会議の議事録を自動作成する際の適切な運用方法はどれか。",
    options: ["AIが生成した議事録をそのまま配布する","AIが生成した草稿を担当者が確認・修正し、事実確認をしてから配布する","録音データをAIに渡す前に参加者全員の同意を得る必要はない","議事録作成AIは100%正確なので人間のレビューは不要である"],
    answer: 1,
    explanation: "AIの議事録生成は誤字・誤認識・文脈の誤解が起こりえます。必ず担当者がレビューし内容を確認してから配布することが重要です。また録音・文字起こしは個人情報・機密情報を含む場合があるため、利用するAIサービスのデータ取り扱いポリシーも事前に確認が必要です。"
  },
  { id: "new-biz-003", category: "business",
    question: "業務でAIを使ってメールの文章を作成する際の注意点として最も適切なものはどれか。",
    options: ["AIが生成した文章は常に完璧なので送信前の確認は不要である","顧客名・金額・日程などの重要情報はAIが誤って挿入する可能性があるため必ず確認する","AI生成メールであることを相手に必ず明示しなければならない","AIはメール文章を生成できないため別の方法を使うべきだ"],
    answer: 1,
    explanation: "AIはハルシネーション（事実とは異なる情報の生成）により、顧客名・金額・日程などの具体的情報を誤って生成することがあります。送信前に必ず人間が内容を確認することが重要です。特に数字・固有名詞・約束事項は特に注意が必要です。"
  },
  { id: "new-biz-004", category: "business",
    question: "社外のクラウド型生成AIサービスに機密情報を含む文書を入力する際の適切な対応はどれか。",
    options: ["利便性のために機密情報をそのまま入力してよい","社内のAI利用ガイドラインを確認し、機密情報の入力可否・データ学習設定・契約内容を事前に確認する","機密情報は一切AIで処理できないためAIの業務活用を諦める","AIサービスは必ずデータを削除するため問題ない"],
    answer: 1,
    explanation: "クラウド型AIサービスに機密情報を入力すると、サービスの学習データに使われたりデータが外部サーバーに保存されるリスクがあります。事前に社内AIポリシーを確認し、データ学習無効化オプション（例：ChatGPTのオプトアウト設定）の利用、機密情報の匿名化・仮名化、オンプレミス型AIへの切り替えなどを検討しましょう。"
  },
  { id: "new-biz-005", category: "business",
    question: "カスタマーサポートにAIチャットボットを導入する主な目的として最も適切なものはどれか。",
    options: ["人間のサポート担当者を完全に不要にする","24時間対応・よくある質問の自動回答・対応件数の平準化により顧客満足度と業務効率を向上させる","顧客の個人情報を収集することが主目的である","クレーム対応をすべてAIに任せる"],
    answer: 1,
    explanation: "AIチャットボットは24時間365日対応・定型質問の即時回答・繁忙期の需要吸収などで業務効率を向上させます。ただし複雑なクレームや感情的な対応は人間のエスカレーションが必要です。AIと人間の担当者を組み合わせたハイブリッド体制が効果的です。"
  },
  { id: "new-biz-006", category: "business",
    question: "生成AIを活用した翻訳業務での適切な運用方法はどれか。",
    options: ["法的文書・契約書もAI翻訳をそのまま使用してよい","AIによる初訳を人間の翻訳者または担当者が確認・修正するポストエディットのプロセスを設ける","AI翻訳は品質が低いため業務では一切使用しない","翻訳のみAIを使い原文の確認は不要である"],
    answer: 1,
    explanation: "AI翻訳（DeepL・ChatGPT等）は速度・コスト面で優れますが、専門用語・文化的ニュアンス・法的表現などで誤訳が生じることがあります。特に契約書・法的文書・公式コミュニケーションは、AIの初訳を専門家がレビューするポストエディットプロセスを設けることが重要です。"
  },
  { id: "new-biz-007", category: "business",
    question: "採用選考にAIスコアリングを使用する場合の倫理的考慮として最も重要なことはどれか。",
    options: ["AIが判断するため人間のバイアスは完全に排除できる","AIモデルに学習データの偏り（バイアス）が含まれる可能性があり、最終判断は人間が行うべきである","採用コストを下げることが唯一の目的でよい","AIによる採用拒否の理由を候補者に説明する必要はない"],
    answer: 1,
    explanation: "採用AIは過去の採用データで学習するため、既存の偏り（性別・年齢・学歴等のバイアス）を再現・増幅するリスクがあります。AIはスクリーニング補助に留め、最終判断は人間が行うことが重要です。また不採用理由の説明可能性（説明責任）の確保も求められます。"
  },
  { id: "new-biz-008", category: "business",
    question: "社内ナレッジ管理にRAG（検索拡張生成）を活用する主なメリットはどれか。",
    options: ["社外の最新情報のみを参照できる","社内ドキュメント・マニュアル・過去事例などを根拠として回答を生成でき、ハルシネーションを低減しながら精度の高い回答が得られる","RAGを使うとAIの回答速度が遅くなり業務に向かない","RAGは開発が不要で誰でも即座に使える技術である"],
    answer: 1,
    explanation: "RAG（Retrieval-Augmented Generation）は、AIが回答を生成する際に社内データベースや文書から関連情報を検索して根拠として使う手法です。LLMの知識カットオフ問題を補い、社内固有の情報に基づいた正確な回答が可能になります。社内FAQ・マニュアル検索・ナレッジベース活用で特に効果的です。"
  },
  { id: "new-biz-009", category: "business",
    question: "生成AIを使ったデータ分析支援の適切な活用方法はどれか。",
    options: ["AIが出力した数値分析結果はすべて正確なため確認不要","データの解釈・仮説生成・レポート文章作成の補助として活用し、数値計算は専用ツールで検証する","生成AIはデータ分析に一切使えない","AIに全ての経営判断を委ねる"],
    answer: 1,
    explanation: "生成AIはデータの解釈・仮説立案・レポート文章生成の補助に優れますが、複雑な数値計算では誤りが生じることがあります。数値計算はExcel・Python・BIツールなど専用ツールで検証し、AIはその結果の解釈や説明文作成に活用するのが適切です。"
  },
  { id: "new-biz-010", category: "business",
    question: "法務部門でAIを活用する際の適切な方法はどれか。",
    options: ["AI生成の契約書をそのまま署名・送付してよい","契約書のドラフト作成・条文の説明・リスク箇所の初期スクリーニングにAIを活用し、最終確認は法律専門家が行う","AIは法律文書を扱えないため法務には使えない","AIが法的アドバイスを直接提供するため弁護士は不要になる"],
    answer: 1,
    explanation: "AIは契約書のドラフト生成・条文説明・リスク箇所の洗い出しで業務効率化に貢献します。しかし法的判断の最終責任は人間の法律専門家が持ちます。AIの出力には法的に不正確な内容が含まれることがあるため、弁護士・法務担当者によるレビューは必須です。"
  },
  { id: "new-biz-011", category: "business",
    question: "AIを使ってマーケティングコンテンツを生成する際の著作権に関する正しい対応はどれか。",
    options: ["AIが生成したコンテンツは著作権フリーのため何も確認しなくてよい","生成コンテンツが既存の著作物に類似していないか確認し、使用するAIサービスの利用規約・著作権ポリシーを把握する","AI生成コンテンツの著作権は必ずAI開発企業に帰属する","日本では生成AIコンテンツの著作権問題は存在しない"],
    answer: 1,
    explanation: "AI生成コンテンツの著作権は国・サービスによって扱いが異なり、日本の著作権法でも議論中の部分があります。AIが学習データに含まれる著作物に類似したコンテンツを生成するリスクがあるため、独自性の確認と、使用するAIサービスの利用規約（商用利用可否等）の確認が重要です。"
  },
  { id: "new-biz-012", category: "business",
    question: "生成AIを使ってプレゼン資料を効率的に作成するための適切なアプローチはどれか。",
    options: ["AIに「プレゼン資料を作って」とだけ指示して完成品を使う","構成案の作成・各スライドの文章ドラフト生成・デザイン案の提示などにAIを活用し、担当者がレビュー・カスタマイズして完成させる","プレゼン資料作成にAIは向かない","AIが作った資料は必ず聴衆に劣化して伝わる"],
    answer: 1,
    explanation: "AIはプレゼンのアウトライン生成・スライドの文章作成・説明文のリライトなどで大幅な時間短縮が可能です。ただし会社固有のデータ・ブランドガイドライン・聴衆に合わせた調整は人間が行う必要があります。AIをドラフト生成ツールとして使い、担当者が磨き上げるフローが効果的です。"
  },
  { id: "new-biz-013", category: "business",
    question: "企業がAIツールを選定する際の重要な基準として最も適切なものはどれか。",
    options: ["最も有名なサービスを選べばよい","業務要件への適合性・セキュリティ・データポリシー・コスト・サポート体制・既存システムとの連携を総合的に評価する","価格が最も安いものを選ぶ","開発者が多く使っているものを選ぶだけでよい"],
    answer: 1,
    explanation: "AIツール選定では、解決したい業務課題への適合性、機密データの取り扱い・セキュリティ基準、コスト（API料金・ライセンス）、既存システムとのAPI連携可否、ベンダーのサポート体制、日本語対応の質などを総合評価することが重要です。無料トライアルでPoC（概念実証）を行って評価するのが良い方法です。"
  },
  { id: "new-biz-014", category: "business",
    question: "社内AI利用ガイドラインを策定する主な目的として正しいものはどれか。",
    options: ["AIの使用を全面的に禁止するため","機密情報漏洩・著作権侵害・ハルシネーションによるリスクを防ぎつつ、従業員が安全にAIを活用できる環境を整えるため","AIガイドラインは法律で定められているため仕方なく作るものである","競合企業がガイドラインを持っているから形式的に作るため"],
    answer: 1,
    explanation: "社内AI利用ガイドラインは、禁止事項（機密情報の外部AIへの入力禁止等）と推奨活用例を明確にし、従業員が安心してAIを活用できる環境を整えることが目的です。リスク管理と業務効率化の両立を図り、AI活用の組織的な文化を醸成するためにも重要です。"
  },
  { id: "new-biz-015", category: "business",
    question: "従業員向けのAI活用研修で最も重要な内容として正しいものはどれか。",
    options: ["AI研修は技術者のみに行えばよく一般従業員には不要","基本的なAIツールの使い方・効果的なプロンプト作成・リスクと注意点（ハルシネーション・情報漏洩等）・倫理的利用を全従業員に教育する","AIのプログラミング方法を全員に教える","研修は一度行えば十分で更新不要である"],
    answer: 1,
    explanation: "AI活用研修は技術者だけでなく全従業員が対象です。基本的な使い方・プロンプティングの基礎・出力を鵜呑みにしないクリティカルシンキング・個人情報や機密情報の取り扱い注意点・著作権の基礎知識などを含めることが重要です。AIは急速に進化するため定期的な研修更新も必要です。"
  },
  { id: "new-biz-016", category: "business",
    question: "AI導入に対して従業員が抵抗感を示す場合の適切なマネジメント方法はどれか。",
    options: ["抵抗する従業員を解雇する","AIが仕事を奪うのではなく補助するものであることを説明し、早期から従業員を導入プロセスに巻き込み、成功事例の共有と段階的な導入を行う","抵抗感は無視して強制的に導入する","抵抗があるためAI導入を諦める"],
    answer: 1,
    explanation: "AI導入への抵抗はよく見られる反応です。効果的なチェンジマネジメントとして、「AIは補助ツールであり代替ではない」という明確なメッセージの発信、導入初期から現場担当者をプロジェクトに参加させる関与（エンゲージメント）、具体的な業務改善の成功事例の共有、段階的な導入による心理的障壁の低減などが有効です。"
  },
  { id: "new-biz-017", category: "business",
    question: "「ヒューマン・イン・ザ・ループ（Human-in-the-Loop）」の考え方として正しいものはどれか。",
    options: ["AIの判断を人間が常に覆さなければならない","AIの処理・判断プロセスに人間が関与・監視・承認する仕組みを組み込み、AIの誤りや倫理的問題を防ぐ","全ての業務で人間がAIより優れているという考え方","ループとは同じ処理を繰り返すことを指す"],
    answer: 1,
    explanation: "ヒューマン・イン・ザ・ループとは、AIの自動化プロセスの中に人間のチェック・判断・承認ポイントを組み込む設計思想です。医療診断・採用判断・信用審査など高リスク領域では特に重要で、AIの誤りや偏りを人間が監督・修正することで安全性と信頼性を確保します。"
  },
  { id: "new-biz-018", category: "business",
    question: "コールセンターにAIを活用して業務改善する際の現実的なアプローチとして適切なものはどれか。",
    options: ["全オペレーターをAIに置き換える","よくある質問の自動応答・オペレーター向けリアルタイム応答候補提示・通話後の要約自動生成などでオペレーターの業務を支援する","AIはコールセンター業務に向かない","AIで通話コストをゼロにすることが目標である"],
    answer: 1,
    explanation: "コールセンターでのAI活用は、FAQへの自動チャット応答（一次対応）、オペレーターへのリアルタイム応答候補表示（コパイロット型）、通話録音の自動要約・感情分析などが実用的です。複雑・感情的な対応は人間が担い、AIと人間のハイブリッド体制が効果的です。"
  },
  { id: "new-biz-019", category: "business",
    question: "社内FAQ自動応答システムをAIで構築する際の重要なポイントはどれか。",
    options: ["回答精度が100%でないとシステム価値がないため構築しない","FAQの定期更新・回答精度のモニタリング・解決できなかった質問の人間へのエスカレーション経路の設計が重要","AIが回答を生成するため一度設定したら永久にメンテナンス不要","AIは社内FAQに向かない"],
    answer: 1,
    explanation: "AI FAQ システムは構築後も継続的なメンテナンスが必要です。新しいポリシー・製品変更への知識更新、回答精度・ユーザー満足度のモニタリング、AIが回答できなかった質問を人間担当者にルーティングするエスカレーション設計、そしてユーザーフィードバックを活用した改善サイクルが成功のポイントです。"
  },
  { id: "new-biz-020", category: "business",
    question: "企業がAIサービスのAPI利用コストを適切に管理する方法として正しいものはどれか。",
    options: ["コスト管理は不要でAIは使い放題である","利用量の上限（レート制限）設定・トークン使用量のモニタリング・コスト効率の高いモデル選択・キャッシュ活用などでコストを最適化する","最も高価なモデルを常に使用する","AIコストは経費処理できないため注意が必要"],
    answer: 1,
    explanation: "API型AIサービス（OpenAI API等）はトークン数・リクエスト数に応じた従量課金が基本です。コスト管理のポイントは、用途に応じた適切なモデル選択（高性能モデルは高コスト）、同一クエリへのキャッシュ活用、プロンプトの簡潔化によるトークン削減、月次コスト上限の設定とアラート設定などです。"
  },
  { id: "new-biz-021", category: "business",
    question: "ECサイトの商品説明文作成にAIを活用する場合の適切な運用方法はどれか。",
    options: ["AIが生成した商品説明文をそのまま一切確認せずに掲載する","商品仕様・特徴・ターゲット顧客などの情報をプロンプトで与えてAIにドラフトを生成させ、担当者が正確性・ブランドトーンを確認して掲載する","AI生成の商品説明文は検索エンジンに評価されない","AIは商品説明文作成に向かない"],
    answer: 1,
    explanation: "商品説明文へのAI活用は大量の商品に対してドラフトを素早く生成できる点で効果的です。ただし商品仕様の誤り・ブランドトーンの不一致・誇大表現などのリスクがあるため、担当者によるレビューが必要です。具体的なスペック・差別化ポイントをプロンプトに含めることで品質が向上します。"
  },
  { id: "new-biz-022", category: "business",
    question: "財務・経理部門でAIを活用する際の適切な用途として正しいものはどれか。",
    options: ["AIに財務諸表の最終承認をさせる","レポートの要約文生成・経費分類の補助・異常値検知のサポート・財務データの自然言語での質疑応答に活用し、最終判断は担当者が行う","AIは数字を扱えないため財務部門では使えない","AIが税務申告を自動で完結させる"],
    answer: 1,
    explanation: "財務部門でのAI活用は、月次レポートの要約文自動生成・経費精算の仕訳補助・異常な支出パターンの検出・自然言語での財務データ照会（例：「先月の部門別経費は？」）などが実用的です。最終的な財務判断・承認は人間の担当者が行う体制が基本です。"
  },
  { id: "new-biz-023", category: "business",
    question: "組織全体でAI活用を推進する体制として最も効果的なものはどれか。",
    options: ["AI活用はIT部門だけが担当すればよい","AI推進担当（CDO/AI推進室等）の設置・各部門のAIチャンピオン育成・部門横断の情報共有の場を作り、現場ニーズとIT技術をつなぐ体制を構築する","経営者のみがAI戦略を決定し現場は従うだけでよい","AI活用は外部コンサルタントに完全委託する"],
    answer: 1,
    explanation: "AI活用を組織に定着させるには、IT部門だけでなく全部門が参加する体制が重要です。具体的には各部門にAI活用推進役（AIチャンピオン）を育成し、成功事例の横展開・課題共有の場を設ける横断的な推進体制が効果的です。経営層のコミットメントと現場の実践の両方が必要です。"
  },
  { id: "new-biz-024", category: "business",
    question: "AIをプロジェクト管理に活用する際の現実的な用途として正しいものはどれか。",
    options: ["AIがプロジェクト全体を自律的に管理し人間のPMは不要になる","タスクの優先順位付け補助・議事録要約・進捗レポート作成・リスク洗い出しの支援にAIを使い、意思決定と責任管理はPMが行う","AIはプロジェクト管理に使えない","AIが自動でプロジェクトスコープを決定する"],
    answer: 1,
    explanation: "AIはプロジェクト管理において、会議の議事録要約・週次進捗レポートの文章生成・リスク項目の初期洗い出し・タスクの優先度付け補助などで生産性を向上させます。しかしステークホルダーとの合意形成・最終的な意思決定・チームモチベーション管理は人間のPMが担います。"
  },
  { id: "new-biz-025", category: "business",
    question: "ビジネスパーソンが生成AIスキルを向上させるために最も効果的なアプローチはどれか。",
    options: ["AIツールは一度使えば十分で継続的な学習は不要","実業務での小さな活用から始め・プロンプト改善を繰り返し・最新動向をキャッチアップし続ける実践的な学習が効果的","AIスキルはプログラミングを学んでから身につけるべき","AIスキルは専門家だけが必要なものである"],
    answer: 1,
    explanation: "生成AIスキル向上には実践が最も重要です。まずは日常業務の一部（メール作成・文章要約等）にAIを使い始め、試行錯誤でプロンプトを改善する経験を積むことが基本です。加えてAIは急速に進化するため、業界ニュースのフォロー・コミュニティへの参加・社内勉強会参加なども有効です。"
  },
  { id: "new-biz-026", category: "business",
    question: "研究開発（R&D）部門で生成AIを活用する効果的な用途として正しいものはどれか。",
    options: ["AIが新製品を完全に自動で発明する","論文の要約・仮説生成の補助・実験レポートのドラフト作成・特許調査の効率化などに活用し研究者の生産性を向上させる","AIはR&D業務に向かない","AIが承認なく社外に研究データを公開する"],
    answer: 1,
    explanation: "R&D部門でのAI活用は、大量の論文・技術文書の要約と知識抽出、実験データの初期分析補助、研究報告書・特許出願書類のドラフト生成、アイデアブレインストーミングの補助などが効果的です。研究そのものはAIが行えませんが、研究者の創造的な作業に集中できる時間を増やせます。"
  },
  { id: "new-biz-027", category: "business",
    question: "AIを不正検知・リスク管理に活用する際の適切な方法はどれか。",
    options: ["AIが不正と判断したケースは人間の確認なしに自動で制裁を加える","AIで異常パターンや不正の疑いをフラグアップし、最終的な判断と対処は人間のリスク管理担当者が行う","不正検知AIは誤検知がないため完全に信頼できる","AIは不正検知に使えない"],
    answer: 1,
    explanation: "不正検知AIは大量のトランザクションデータから異常パターンを高速に検出する点で優れますが、誤検知（正常な取引を不正と判断）や見逃し（false negative）が発生します。AIはフラグ付けの補助に使い、最終判断・顧客への対応・制裁の実行は人間のコンプライアンス担当者が担う体制が適切です。"
  },
  { id: "new-biz-028", category: "business",
    question: "SNS・デジタルマーケティングにAIを活用する際の注意点として最も重要なものはどれか。",
    options: ["AIが生成した投稿はそのまま自動投稿してよい","AI生成コンテンツの事実確認・ブランドガイドラインへの適合確認・ステークホルダーによるレビューを行ってから公開する","AIがSNSアカウントを完全に自律運営できる","AI生成コンテンツは法律上すべて禁止されている"],
    answer: 1,
    explanation: "SNSへのAI生成コンテンツは誤情報・ブランドイメージ損傷・炎上リスクがあります。公開前に事実確認（ハルシネーション確認）・ブランドトーンの確認・センシティブな内容の排除・担当者承認のワークフローが必要です。特に緊急時・センシティブな話題は人間が主導することが重要です。"
  },
  { id: "new-biz-029", category: "business",
    question: "AI出力の品質を確認するためのプロセスとして最も適切なものはどれか。",
    options: ["AIが生成したものは品質が保証されているため確認不要","事実確認・論理一貫性の確認・社内ガイドラインへの適合確認・対象読者への適切さの確認を担当者が行うレビュープロセスを設ける","AIの出力品質は使用するモデルの価格に比例する","品質確認のためにAIに別のAIで確認させる方法は存在しない"],
    answer: 1,
    explanation: "AI出力の品質保証プロセスは、①事実確認（ハルシネーション検出）、②論理的一貫性の確認、③社内方針・ブランドガイドラインへの適合、④対象読者への適切さ（専門用語・文化的配慮等）の確認が基本です。なおAIにAIの出力を確認させる「AI by AI」アプローチも補助的に活用できますが、人間の最終確認は必要です。"
  },
  { id: "new-biz-030", category: "business",
    question: "グローバルビジネスで生成AIを多言語対応に活用する際の注意点として正しいものはどれか。",
    options: ["AIが翻訳するためすべての言語で同等の品質が保証される","言語によってAIの性能差があること・文化的表現のニュアンス・法規制の違いを考慮し、重要な現地向けコミュニケーションはネイティブ確認を組み合わせる","AI翻訳を使えば現地の文化理解は不要である","グローバル展開ではAIは使えない"],
    answer: 1,
    explanation: "生成AIは英語・日本語等の主要言語で高い性能を持ちますが、マイナー言語では品質が落ちることがあります。また言語を翻訳しても文化的なニュアンス・ユーモア・タブー表現などは自動では適切に処理されません。重要なマーケティング・法的文書・現地顧客向けコミュニケーションはネイティブスピーカーの確認を組み合わせることが重要です。"
  },

  // --- business +2 ---
  { id: "nb2-001", category: "business",
    question: "「AI導入プロジェクトのアジャイル管理」として適切なアプローチはどれか。",
    options: ["AIプロジェクトは要件が完全確定してから開始する完全なウォーターフォール型が最適","AIの性能が不確実なためスモールスタートで試作・評価を繰り返し、学習しながら段階的にスケールするアジャイル的アプローチが適している","AI導入は経営トップの判断のみで進め、現場担当者はプロジェクト完了後に参加する","AIプロジェクトに評価・改善のサイクルは不要で一度設計したら変更しない"],
    answer: 1,
    explanation: "AIプロジェクトは性能・データ品質・ユーザー受容性などが事前に不確実なため、ウォーターフォール型より反復的なアジャイルアプローチが適しています。MVP（最小実行可能製品）で早期に価値検証し、ユーザーフィードバックを取り込みながら改善するサイクルを回すことで、リスクを抑えながら確実な価値を創出できます。"
  },
  { id: "nb2-002", category: "business",
    question: "企業のAI導入を「フェーズ管理」する際の適切なアプローチはどれか。",
    options: ["フェーズ1から全社・全業務を同時に展開し、スピードを最優先する","探索（用途発掘・実証実験）→拡張（成功事例の横展開）→定着（業務プロセスへの組み込み）の段階を経て、学習しながら段階的に展開する","コスト削減が証明されるまでAI導入を完全に停止する","外部ベンダーにすべて任せてフェーズ管理を不要にする"],
    answer: 1,
    explanation: "AI導入のフェーズ管理は「探索フェーズ（PoC：特定業務で実証実験）」→「拡張フェーズ（成功ユースケースの横展開・社内整備）」→「定着フェーズ（業務プロセスへの組み込み・継続改善）」が一般的です。一気に全社展開するとリスクが大きく、段階的に学習・改善しながら進めることでROIを確認しつつリスクを管理できます。"
  },

];

export function getQuestionsByCategory(categoryId, count = null) {
  const filtered = QUESTIONS.filter(q => q.category === categoryId);
  if (!count || count >= filtered.length) return [...filtered];
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getAllQuestions(count = null) {
  if (!count || count >= QUESTIONS.length) return [...QUESTIONS].sort(() => Math.random() - 0.5);
  return [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, count);
}
