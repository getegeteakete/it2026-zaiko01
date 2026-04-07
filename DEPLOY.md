# 🚀 **Vercel デプロイガイド**

## ✅ **前提条件**

- Node.js 18以上がインストール済み
- Vercelアカウント（https://vercel.com）
- GitHubアカウント

## 📝 **Step 1: ローカル動作確認**

```bash
# パッケージをインストール
npm install

# 開発サーバー起動
npm run dev

# ブラウザで http://localhost:3000 を開く
# ✅ ランディングページが表示されることを確認
# ✅ ダッシュボードは http://localhost:3000/dashboard/inventory で確認
```

## 🔄 **Step 2: GitHub にプッシュ**

```bash
# すべてのファイルをステージング
git add .

# コミット
git commit -m "Initial commit: AI Inventory Management System"

# メインブランチにプッシュ
git push origin main

# ✅ GitHub で https://github.com/getegeteakete/it2026-zaiko01 を確認
```

## 🌐 **Step 3: Vercel でデプロイ**

### 方法A: Vercel Web Dashboard を使用（推奨）

1. https://vercel.com にアクセス
2. 「Add New... → Project」をクリック
3. GitHub を接続
4. `it2026-zaiko01` リポジトリを選択
5. Framework は「Next.js」を選択（自動検出）
6. Environment Variables を設定（オプション）
   - `NEXT_PUBLIC_API_URL`: `https://api.yourdomain.com`
7. 「Deploy」をクリック

✅ デプロイ開始！数分待つと自動的に本番環境が起動します。

### 方法B: Vercel CLI を使用

```bash
# Vercel CLI をインストール
npm i -g vercel

# ログイン
vercel login

# デプロイ
vercel

# GitHub の main ブランチに連動した自動デプロイが有効化
```

## ✨ **デプロイ後の確認**

デプロイ完了後、以下をチェック：

1. **ランディングページ**: https://your-project.vercel.app/
   - ✅ ヒーロー画像が表示
   - ✅ 機能・料金・CTA ボタンが表示

2. **管理画面**: https://your-project.vercel.app/dashboard/inventory
   - ✅ ダッシュボードが表示
   - ✅ タブ切り替えが動作

3. **レスポンシブ**: モバイル（iPhone）で確認
   - ✅ レイアウトが崩れない

## 🔧 **自動デプロイ設定**

GitHub にプッシュすると自動的に Vercel でデプロイされます：

```
GitHub (main) → push → Vercel 自動ビルド → デプロイ完了
```

## 📊 **Vercel ダッシュボードで確認**

https://vercel.com/dashboard で以下を確認：

- **Deployments**: 最新のデプロイ状態
- **Analytics**: アクセス数・パフォーマンス
- **Settings**: ドメイン設定・環境変数

## 🌍 **カスタムドメイン設定（オプション）

1. Vercel Dashboard → Settings → Domains
2. 「Add」をクリック
3. ドメイン名を入力（例：zaiko.yourdomain.com）
4. DNS レコードを設定

## 🐛 **トラブルシューティング**

### デプロイが失敗する場合

```bash
# ローカルでビルドテスト
npm run build

# エラーを確認
npm run dev
```

### 本番環境で表示されない場合

1. Vercel Dashboard でビルドログを確認
2. ブラウザのキャッシュをクリア（Ctrl+Shift+Delete）
3. https://your-project.vercel.app?t=`date +%s` で強制リロード

### API 接続エラーの場合

- `.env.local` の `NEXT_PUBLIC_API_URL` を確認
- バックエンド（FastAPI）が起動しているか確認

## 📈 **パフォーマンス最適化**

Vercel は自動的に以下を行います：

- ✅ 画像の自動最適化（WebP変換）
- ✅ コード分割・バンドル最適化
- ✅ CDN キャッシング（全世界）
- ✅ サーバーレス関数化

## 🔐 **セキュリティチェック**

- ✅ HTTPS が自動有効
- ✅ Headers が設定済み（next.config.js）
- ✅ 環境変数は Vercel に管理

---

**デプロイ完了後、このシステムは本番環境で稼働します！** 🎉

詳細: https://vercel.com/docs
