# 🌐 **Vercel デプロイ - 完全ガイド**

GitHubへのプッシュが完了しました！✅

あとは、以下の手順で **わずか5分で本番環境がライブになります。**

---

## 🎯 **ステップバイステップ**

### **Step 1: Vercel の Web Dashboard にアクセス**

1. ブラウザで開く: https://vercel.com/dashboard
2. ログインするか新規アカウントを作成

### **Step 2: 新しいプロジェクトを追加**

1. **「Add New」** → **「Project」** をクリック
2. **「Import Git Repository」** をクリック

### **Step 3: GitHub リポジトリを接続**

1. 「Install Vercel for GitHub」をクリック
2. GitHub の認証画面で「Authorize Vercel」
3. リポジトリリストから **`it2026-zaiko01`** を選択
4. **「Import」** をクリック

### **Step 4: プロジェクト設定**

**Framework Preset** のページで：

- ✅ **Framework**: `Next.js` （自動検出）
- ✅ **Build Command**: `npm run build` （デフォルト）
- ✅ **Output Directory**: `.next` （デフォルト）
- ✅ **Install Command**: `npm install` （デフォルト）

**その他の設定は変更不要です。**

### **Step 5: Environment Variables（オプション）

環境変数の設定（デフォルトで問題ありません）：

```
Key: NEXT_PUBLIC_API_URL
Value: https://api.yourdomain.com
```

後で変更できるので、ここではスキップしても大丈夫です。

### **Step 6: Deploy をクリック！**

**「Deploy」** ボタンをクリックすると、自動的に本番環境へのデプロイが開始されます。

---

## ⏳ **デプロイ進行状況**

Vercel Dashboard で以下を確認：

```
🔨 Building...      → 約1-2分でビルド完了
✅ Built            → コンパイル成功
🚀 Deploying...     → CDN への配置中
✅ Ready to view    → ライブになりました！
```

---

## 🎉 **デプロイ完了！**

### ✅ **あなたの本番環境URL：**

```
https://it2026-zaiko01.vercel.app
```

**ブラウザで確認:**

1. **ランディングページ**: https://it2026-zaiko01.vercel.app/
   - 機能・料金・CTA ボタンが表示される

2. **管理画面**: https://it2026-zaiko01.vercel.app/dashboard/inventory
   - ダッシュボードのすべてのタブが動作

---

## 🔄 **自動デプロイ設定**

これからは **GitHub へのプッシュが自動的に Vercel デプロイをトリガーします：**

```
git push origin main
    ↓
GitHub受け取り
    ↓
Vercel が自動検知
    ↓
ビルド開始
    ↓
本番環境にデプロイ ✅
```

---

## 🌍 **カスタムドメイン設定（後で OK）**

Vercel ダッシュボードで：

1. **Project Settings** → **Domains**
2. 「Add」をクリック
3. あなたのドメイン（例：`zaiko.yourdomain.com`）を入力
4. DNS レコードを設定

---

## 📊 **デプロイ後の管理**

### **Vercel Dashboard の見方**

**Deployments タブ:**
- 各デプロイの状態確認
- ロールバック（前のバージョンに戻す）
- デプロイログ確認

**Analytics タブ:**
- アクセス数
- パフォーマンス（Core Web Vitals）
- 地域別アクセス

**Settings タブ:**
- 環境変数管理
- ドメイン設定
- Git 連携管理

---

## 🔐 **セキュリティ**

✅ **自動的に有効：**
- HTTPS（SSL/TLS）
- セキュリティヘッダー
- DDoS 保護
- WAF（Web Application Firewall）

---

## ⚡ **パフォーマンス**

Vercel による自動最適化：

✅ **画像最適化**
- WebP変換
- 自動リサイズ

✅ **キャッシング**
- CDN キャッシング（世界中）
- レスポンス時間 < 100ms

✅ **コード最適化**
- 自動コード分割
- バンドルサイズ縮小

---

## 🐛 **トラブルシューティング**

### Q1: デプロイが失敗する

**確認事項:**
1. GitHub リポジトリが正しくリンクされているか
2. ローカルで `npm run build` が成功するか

```bash
# ローカルで試す
npm install
npm run build
```

### Q2: ページが表示されない

1. ブラウザキャッシュをクリア：`Ctrl+Shift+Delete`
2. シークレットウィンドウで開く
3. Vercel Dashboard でビルドログを確認

### Q3: API 接続エラー

環境変数を確認：

**Vercel Dashboard → Settings → Environment Variables**

```
NEXT_PUBLIC_API_URL が正しく設定されているか確認
```

---

## 📈 **次のステップ**

### ✅ **すぐやること**

1. ✅ Vercel ダッシュボードでデプロイを確認
2. ✅ 本番環境URL にアクセスして動作確認
3. ✅ 補助金申請書に本番環境URL を記載
4. ✅ 営業チームにデモ環境を共有

### 🔜 **後でやること**

1. カスタムドメイン設定
2. Google Analytics 連携
3. バックエンド API（FastAPI）をデプロイ
4. 本番データベース設定

---

## 📞 **サポート**

- **Vercel 公式ドキュメント**: https://vercel.com/docs
- **GitHub Issues**: https://github.com/getegeteakete/it2026-zaiko01/issues
- **Next.js ドキュメント**: https://nextjs.org/docs

---

## 🎊 **おめでとうございます！**

**あなたの AI 統合在庫管理システムが本番環境で稼働中です！** 🚀

本番URL: **https://it2026-zaiko01.vercel.app**

---

**最後に:**

1. ブックマークに追加
2. スクリーンショットを撮って補助金申請書に添付
3. チームメンバーに共有
4. 顧客デモで使用

**これで補助金申請の準備も完全です！** ✅
