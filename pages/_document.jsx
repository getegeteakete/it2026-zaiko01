import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI統合在庫管理システム - デジタル化・AI導入補助金2026対応" />
        <meta property="og:title" content="AI統合在庫管理システム" />
        <meta property="og:description" content="自律型AIエージェント × インボイス統合決済プラットフォーム" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
