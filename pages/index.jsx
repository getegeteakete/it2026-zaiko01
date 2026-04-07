import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI統合在庫管理システム - デジタル化補助金対応</title>
      </Head>

      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#fff' }}>
        <nav style={{ background: '#fff', borderBottom: '1px solid #e0e0e0', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>📦 AI在庫管理システム</div>
          <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
            無料デモ申し込み
          </button>
        </nav>

        <section style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #fff 100%)', padding: '4rem 2rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', margin: 0, lineHeight: '1.2' }}>
              在庫管理の<br />すべての作業を自動化
            </h1>

            <p style={{ fontSize: '18px', color: '#555', margin: '1.5rem 0', lineHeight: '1.8' }}>
              毎日の在庫確認、発注判定、請求書処理に月300時間かかっていませんか？<br />
              <strong>AIがすべて自動判定・自動発注・自動処理します。</strong>
            </p>

            <div style={{ background: '#f0f8ff', border: '2px solid #007bff', borderRadius: '12px', padding: '2rem', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 1.5rem 0', color: '#0056b3', fontSize: '18px' }}>📊 導入後の変化</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                <div>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>購買業務</p>
                  <p style={{ fontSize: '22px', fontWeight: 700, color: '#d9534f', margin: '0.5rem 0' }}>月100h → 0h</p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>インボイス対応</p>
                  <p style={{ fontSize: '22px', fontWeight: 700, color: '#28a745', margin: '0.5rem 0' }}>月200h → 2h</p>
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>年間効果</p>
                  <p style={{ fontSize: '22px', fontWeight: 700, color: '#0066cc', margin: '0.5rem 0' }}>¥525万円</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>
                今すぐ始める
              </button>
              <button style={{ background: '#f0f0f0', color: '#1a1a1a', border: 'none', padding: '1rem 2rem', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: 600 }}>
                詳細資料を見る
              </button>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '3rem', color: '#1a1a1a' }}>こんなお悩みありませんか？</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem' }}>
              <p style={{ fontSize: '14px', color: '#d9534f', fontWeight: 600, margin: '0 0 0.75rem 0' }}>❌ 複数システムから在庫を確認している</p>
              <p style={{ fontSize: '14px', color: '#28a745', fontWeight: 600, margin: 0 }}>✅ リアルタイム一元管理でスマホからもアクセス可能</p>
            </div>

            <div style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem' }}>
              <p style={{ fontSize: '14px', color: '#d9534f', fontWeight: 600, margin: '0 0 0.75rem 0' }}>❌ 発注タイミングを人が判定（ミス多い）</p>
              <p style={{ fontSize: '14px', color: '#28a745', fontWeight: 600, margin: 0 }}>✅ AIが自動判定・自動発注。ミスはゼロに</p>
            </div>

            <div style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem' }}>
              <p style={{ fontSize: '14px', color: '#d9534f', fontWeight: 600, margin: '0 0 0.75rem 0' }}>❌ インボイス対応が大変</p>
              <p style={{ fontSize: '14px', color: '#28a745', fontWeight: 600, margin: 0 }}>✅ 自動判定・自動計算。税務対応100%カバー</p>
            </div>

            <div style={{ background: '#f8f9fa', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem' }}>
              <p style={{ fontSize: '14px', color: '#d9534f', fontWeight: 600, margin: '0 0 0.75rem 0' }}>❌ 過剰在庫で倉庫代がかさむ</p>
              <p style={{ fontSize: '14px', color: '#28a745', fontWeight: 600, margin: 0 }}>✅ AI予測で最適在庫。32%削減</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '3rem', color: '#1a1a1a' }}>5つのAI機能</h2>

            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #007bff', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0.5rem 0' }}>1️⃣ AI自動発注</h3>
              <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>Claude AIが過去の売上傾向とサプライヤー情報から最適な発注を判定。ボタン1つで自動発注。</p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #007bff', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0.5rem 0' }}>2️⃣ AI需要予測</h3>
              <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>機械学習で季節変動や曜日パターンを学習。30日先の売上を高精度で予測（精度94.2%）。</p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #007bff', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0.5rem 0' }}>3️⃣ インボイス自動対応</h3>
              <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>国税庁APIと連携。適格請求書かどうかを自動判定。2026年10月の50%控除ルールに自動対応。</p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #007bff', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0.5rem 0' }}>4️⃣ リアルタイムアラート</h3>
              <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>過剰在庫・欠品リスク・有効期限切れを瞬時に検知。メール・Slack連携で即座に対応。</p>
            </div>

            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #007bff' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0.5rem 0' }}>5️⃣ コスト最適化</h3>
              <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>AI分析で不動在庫を特定。セール価格・代替品を提案。保管コストを自動計算。</p>
            </div>
          </div>
        </section>

        <section style={{ background: '#e8f4f8', padding: '3rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a', marginBottom: '1rem' }}>
            補助金で実質負担 ¥30万円
          </h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '1.5rem' }}>
            デジタル化・AI導入補助金2026（インボイス枠）対応<br />
            <strong>¥60万円 × 50% = 実質負担¥30万円（初年度）</strong>
          </p>
          <button style={{
            background: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 700,
          }}>
            補助金申請サポートを受ける
          </button>
        </section>

        <footer style={{
          background: '#f8f9fa',
          padding: '2rem',
          textAlign: 'center',
          color: '#666',
          fontSize: '13px',
          borderTop: '1px solid #e0e0e0',
        }}>
          <p style={{ margin: 0 }}>© 2026 AI統合在庫管理システム | デジタル化・AI導入補助金2026対応</p>
        </footer>
      </div>
    </>
  );
}
