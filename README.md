# 🤖 AI統合在庫管理システム

自律型AIエージェント × インボイス統合決済プラットフォーム

**デジタル化・AI導入補助金2026対応 | インボイス制度完全対応**

---

## 📋 プロジェクト概要

本プロジェクトは、以下の技術を活用したSaaSプラットフォームです：

### コアコンセプト
- **入力ゼロ、発注ミスゼロ、インボイス対応漏れゼロ。AIが経営を自走させる。**

### ターゲット
- 卸売業、小売業、製造業の中小企業（従業員20～300名）
- インボイス対応が経営課題の企業
- 人手不足に悩む企業

### 主要機能
1. **AI-OCR & RPA** - FAX・メール・紙の注文書を自動データ化
2. **需要予測 & 異常検知** - AIが最適在庫量を算出、誤発注を警告
3. **インボイス完全対応** - 国税庁API連携、2026年10月の50%控除に自動対応
4. **マルチエージェント自動発注** - 在庫減でAIが最適サプライヤーから自動発注
5. **決済統合 & 全銀協対応** - 銀行振込データ自動生成
6. **RAGチャットボット** - 社内ナレッジから自動回答

---

## 🚀 デプロイ方法

### Vercelへのデプロイ（推奨）

#### 1. リポジトリの準備
```bash
# Gitリポジトリを初期化
git init
git add .
git commit -m "Initial commit: AI Invoice Management System"
git branch -M main
git remote add origin https://github.com/[YourName]/ai-invoice-system.git
git push -u origin main
```

#### 2. Vercelでデプロイ
1. [Vercel.com](https://vercel.com) にアクセス
2. "New Project" をクリック
3. GitHubリポジトリを接続
4. `ai-invoice-system` を選択
5. "Deploy" をクリック

**自動デプロイが開始されます！**

#### 3. 環境変数の設定（必要に応じて）
```
# Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## 🏗️ プロジェクト構造

```
ai-invoice-system/
├── pages/
│   ├── index.jsx              # ランディングページ
│   ├── dashboard/
│   │   ├── index.jsx          # 管理画面（ダッシュボード）
│   │   ├── procurement.jsx    # 購買管理
│   │   ├── inventory.jsx      # 在庫管理
│   │   └── invoice.jsx        # インボイス管理
│   ├── api/
│   │   ├── procurement.js     # 購買API
│   │   ├── inventory.js       # 在庫API
│   │   ├── invoice.js         # インボイスAPI
│   │   └── auth.js            # 認証API
│   └── _app.jsx               # グローバル設定
├── public/
│   ├── favicon.ico
│   └── logo.png
├── styles/
│   └── globals.css
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Dashboard/
│   │   ├── KPICard.jsx
│   │   ├── ForecastChart.jsx
│   │   └── AutomationProgress.jsx
│   └── Common/
│       ├── Layout.jsx
│       └── Navigation.jsx
├── lib/
│   ├── api.js                 # API通信
│   ├── auth.js                # 認証ロジック
│   └── utils.js               # ユーティリティ
├── package.json
├── next.config.js
├── .gitignore
├── .env.local                 # ローカル環境変数（Git除外）
└── README.md
```

---

## 💻 ローカル開発

### インストール
```bash
# 依存パッケージのインストール
npm install

# または yarn
yarn install
```

### 開発サーバー起動
```bash
npm run dev
# または
yarn dev
```

**ブラウザで http://localhost:3000 を開く**

### ビルド＆本番環境
```bash
npm run build
npm start
```

---

## 📦 API仕様

### 購買管理API
```
POST /api/procurement
GET /api/procurement
PUT /api/procurement/:id
```

### 在庫管理API
```
GET /api/inventory
POST /api/inventory/forecast
GET /api/inventory/alerts
```

### インボイスAPI
```
POST /api/invoice/validate
GET /api/invoice/summary
POST /api/invoice/export
```

詳細は [API仕様書.pdf](./docs/API仕様書.pdf) を参照

---

## 🔒 セキュリティ

- ✅ TLS 1.3通信
- ✅ 多要素認証（MFA）対応
- ✅ ロールベースアクセス制御（RBAC）
- ✅ AES-256暗号化
- ✅ GDPR対応
- ✅ 監査ログ記録（3年保存）

---

## 📊 補助金情報

### 対応制度
- **デジタル化・AI導入補助金2026**
  - 枠：インボイス対応類型
  - 補助上限額：150万円
  - 補助率：50%

### 申請に必要な資料
1. ITツール登録申請書
2. システム仕様書
3. 企業の財務諸表（直近分）
4. 本人確認書類

→ [申請チェックリスト.xlsx](./docs/申請チェックリスト.xlsx) を参照

---

## 📈 期待される効果

| プロセス | 効果 |
|---------|------|
| 購買管理 | 発注ミス97%削減、コスト月20～50万円削減 |
| 在庫管理 | 保管コスト30%削減、廃棄損失ゼロ |
| 請求・決済 | インボイス対応99%自動化、人手月200時間削減 |
| 財務・会計 | 納税申告90%自動化、誤申告ゼロ |

---

## 💰 料金

| プラン | 月額 | 特徴 |
|--------|------|------|
| スタンダード | ¥50,000 | 基本機能、補助対象 |
| エンタープライズ | ¥150,000 | 全機能、専任サポート |

**補助金利用時の実質コスト：¥300,000/年（初年度）**

---

## 🤝 サポート

### ドキュメント
- [システム仕様書](./docs/システム仕様書.pdf)
- [API仕様書](./docs/API仕様書.pdf)
- [ユーザーマニュアル](./docs/ユーザーマニュアル.pdf)
- [実装ガイド](./docs/実装ガイド.md)

### 問い合わせ
- 📧 Email: support@ai-invoice.jp
- 💬 チャットサポート: 管理画面から利用可能
- 📞 電話: 0570-XXX-XXX（営業時間：9:30～17:30）

---

## 📝 ライセンス

本プロジェクトはMITライセンスのもとで公開されています。
詳細は [LICENSE](./LICENSE) を参照してください。

---

## 🔄 更新履歴

### v1.0.0 (2026-01-23)
- ✅ 初版リリース
- ✅ 基本機能実装
- ✅ インボイス対応完了
- ✅ Vercelデプロイ対応

---

## 🙏 謝辞

本システムは以下のオープンソースプロジェクトを活用しています：
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Chart.js](https://www.chartjs.org/)

---

**最終更新：2026年1月23日**
**開発チーム：AI Innovation Lab**
