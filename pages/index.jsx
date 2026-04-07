import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard/inventory');
    }, 300);
  };

  const handleContactClick = () => {
    alert('📧 デモお申し込み\n\nメール: support@ai-inventory.jp\nお電話: お気軽にお問い合わせください');
  };

  const handleGalleryClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/gallery');
    }, 300);
  };

  const handleScrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>AI統合在庫管理システム - デジタル化補助金対応</title>
      </Head>

      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#fff' }}>
        <nav style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>📦 AI在庫管理システム</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handleGalleryClick} style={{ background: 'transparent', color: '#007bff', border: '1px solid #007bff', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>画像ギャラリー</button>
            <button onClick={handleContactClick} style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}>デモ申し込み</button>
          </div>
        </nav>

        <section style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #fff 100%)', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', margin: 0, lineHeight: '1.2' }}>在庫管理の<br />すべての作業を自動化</h1>
            <p style={{ fontSize: '20px', color: '#555', margin: '1.5rem 0', lineHeight: '1.8' }}><strong>毎日の在庫確認、発注判定、請求書処理に月300時間かかっていませんか？</strong><br />AIがすべて自動判定・自動発注・自動処理します。</p>

            <div style={{ background: '#f0f8ff', border: '2px solid #007bff', borderRadius: '12px', padding: '2rem', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 1.5rem 0', color: '#0056b3', fontSize: '18px' }}>📊 導入後の変化</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div><p style={{ fontSize: '12px', color: '#666', margin: 0 }}>購買業務</p><p style={{ fontSize: '22px', fontWeight: 700, color: '#d9534f', margin: '0.5rem 0' }}>月100h → 0h</p></div>
                <div><p style={{ fontSize: '12px', color: '#666', margin: 0 }}>インボイス対応</p><p style={{ fontSize: '22px', fontWeight: 700, color: '#28a745', margin: '0.5rem 0' }}>月200h → 2h</p></div>
                <div><p style={{ fontSize: '12px', color: '#666', margin: 0 }}>年間効果</p><p style={{ fontSize: '22px', fontWeight: 700, color: '#0066cc', margin: '0.5rem 0' }}>¥525万円</p></div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button onClick={handleDemoClick} disabled={isLoading} style={{ background: '#007bff', color: '#fff', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: isLoading ? 'wait' : 'pointer', fontSize: '16px', fontWeight: 600, opacity: isLoading ? 0.7 : 1 }}>
                {isLoading ? '読み込み中...' : '🚀 デモダッシュボードを見る'}
              </button>
              <button onClick={handleScrollToFeatures} style={{ background: '#f0f0f0', color: '#1a1a1a', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>📋 機能詳細を見る</button>
            </div>
          </div>
        </section>

        <section id="features" style={{ padding: '4rem 2rem', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '3rem', color: '#1a1a1a' }}>5つのAI機能</h2>
            {['AI自動発注', 'AI需要予測', 'インボイス自動対応', 'リアルタイムアラート', 'コスト最適化'].map((title, idx) => (
              <div key={idx} style={{ marginBottom: '2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#1a1a1a' }}>{idx + 1}. {title}</h3>
                <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>高度なAI技術を活用して、在庫管理業務を完全自動化します。</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#e8f4f8', padding: '3rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a', marginBottom: '1rem' }}>補助金で実質負担 ¥30万円</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '1.5rem' }}>デジタル化・AI導入補助金2026（インボイス枠）対応</p>
          <button onClick={handleContactClick} style={{ background: '#007bff', color: '#fff', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 700 }}>補助金申請サポートを受ける</button>
        </section>

        <footer style={{ background: '#f8f9fa', padding: '2rem', textAlign: 'center', color: '#666', fontSize: '13px', borderTop: '1px solid #e0e0e0' }}>
          <p style={{ margin: 0 }}>© 2026 AI統合在庫管理システム | Nano Banana (Gemini Flash Image) 統合</p>
        </footer>
      </div>
    </>
  );
}
