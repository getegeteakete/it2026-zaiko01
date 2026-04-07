import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <>
      <Head>
        <title>AI統合在庫管理システム | インボイス完全対応</title>
        <meta name="description" content="自律型AIエージェント × インボイス統合決済プラットフォーム。デジタル化・AI導入補助金2026対応。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a', background: '#fff' }}>
        
        {/* Navigation */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid #f0f0f0',
          position: 'sticky',
          top: 0,
          background: 'rgba(255,255,255,0.95)',
          zIndex: 100,
        }}>
          <div style={{ fontSize: '20px', fontWeight: '700', color: '#0066cc' }}>
            🤖 AI-Invoice
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>機能</a>
            <a href="#benefits" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>効果</a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>料金</a>
            <button style={{
              padding: '0.75rem 1.5rem',
              background: '#0066cc',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
            }}>
              デモ申請
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          padding: '5rem 2rem',
          background: 'linear-gradient(135deg, #0066cc15 0%, #00cc6615 100%)',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#000',
            margin: '0 0 1rem 0',
            lineHeight: '1.2',
          }}>
            入力ゼロ、発注ミスゼロ、<br />インボイス対応漏れゼロ
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#666',
            margin: '0 0 2rem 0',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            自律型AIエージェントがあなたの購買・在庫・請求業務を完全自動化。<br />
            インボイス制度にも対応した、次世代の経営基盤。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button style={{
              padding: '1rem 2rem',
              background: '#0066cc',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '16px',
            }}>
              今すぐ始める
            </button>
            <button style={{
              padding: '1rem 2rem',
              background: 'transparent',
              color: '#0066cc',
              border: '2px solid #0066cc',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '16px',
            }}>
              デモを見る
            </button>
          </div>

          {/* Badges */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '3rem',
            fontSize: '13px',
            color: '#666',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00cc66' }}>✓</span> デジタル化補助金対応
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00cc66' }}>✓</span> インボイス枠認可
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#00cc66' }}>✓</span> 6ヶ月で本稼働
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: '5rem 2rem', background: '#f9f9f9' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '800',
            textAlign: 'center',
            margin: '0 0 3rem 0',
          }}>
            6つの主要機能
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {[
              {
                icon: '📄',
                title: 'AI-OCR & RPA',
                desc: 'FAX・メール・紙の注文書を自動読み取り。入力時間：月80時間 → 0時間',
              },
              {
                icon: '📊',
                title: '需要予測 & 異常検知',
                desc: 'AIが最適な在庫量を算出。在庫過剰：40%削減、在庫切れ：95%回避',
              },
              {
                icon: '✅',
                title: 'インボイス完全対応',
                desc: '国税庁API連携。2026年10月の50%控除に自動対応。年間¥50～200万円の節税効果',
              },
              {
                icon: '🤖',
                title: 'マルチエージェント自動発注',
                desc: '在庫が減ると自動で最適なサプライヤーから発注。人手：月100時間 → 0時間',
              },
              {
                icon: '💳',
                title: '決済統合 & 全銀協対応',
                desc: '銀行振込データを自動生成。請求書と決済を自動照合',
              },
              {
                icon: '🔍',
                title: 'RAGチャットボット',
                desc: '「代替品は？」の質問に社内ナレッジから自動回答。24時間サポート',
              },
            ].map((feature, idx) => (
              <div key={idx} style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,102,204,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '36px', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 0.75rem 0' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" style={{ padding: '5rem 2rem' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '800',
            textAlign: 'center',
            margin: '0 0 3rem 0',
          }}>
            期待される効果（補助対象プロセス）
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {[
              { process: '購買管理', effect: '発注ミス97%削減 / コスト月20～50万円削減' },
              { process: '在庫管理', effect: '保管コスト30%削減 / 廃棄損失ゼロ達成' },
              { process: '請求・決済', effect: 'インボイス対応99%自動化 / 人手月200時間削減' },
              { process: '財務・会計', effect: '納税申告業務90%自動化 / 誤申告ゼロ' },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#f0f7ff',
                padding: '2rem',
                borderRadius: '12px',
                borderLeft: '4px solid #0066cc',
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0066cc', margin: '0 0 0.75rem 0' }}>
                  {item.process}
                </h4>
                <p style={{ fontSize: '14px', color: '#333', margin: 0, lineHeight: '1.6' }}>
                  {item.effect}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ padding: '5rem 2rem', background: '#f9f9f9' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '800',
            textAlign: 'center',
            margin: '0 0 3rem 0',
          }}>
            料金体系
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 1rem 0' }}>
                スタンダードプラン
              </h3>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#0066cc', margin: '0 0 0.5rem 0' }}>
                ¥50,000<span style={{ fontSize: '14px', color: '#666' }}>/月</span>
              </div>
              <p style={{ fontSize: '12px', color: '#999', margin: '0 0 1.5rem 0' }}>
                ※インボイス対応枠の補助対象
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ AI-OCR機能</li>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ インボイス対応</li>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ 在庫管理</li>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ RAGチャットボット</li>
              </ul>
            </div>

            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              border: '2px solid #0066cc',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '20px',
                background: '#0066cc',
                color: '#fff',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '700',
              }}>
                推奨
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 1rem 0' }}>
                エンタープライズ
              </h3>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#0066cc', margin: '0 0 0.5rem 0' }}>
                ¥150,000<span style={{ fontSize: '14px', color: '#666' }}>/月</span>
              </div>
              <p style={{ fontSize: '12px', color: '#999', margin: '0 0 1.5rem 0' }}>
                全機能 + カスタマイズ対応
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ 全ての機能</li>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ 優先サポート</li>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ カスタマイズ対応</li>
                <li style={{ padding: '0.5rem 0', fontSize: '14px', color: '#666' }}>✓ 専任コンサルタント</li>
              </ul>
            </div>
          </div>

          <div style={{
            marginTop: '3rem',
            background: '#f0f7ff',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '3rem auto 0',
          }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0066cc', margin: '0 0 1rem 0' }}>
              📊 補助金利用の計算例
            </h4>
            <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.8' }}>
              <p><strong>年間利用料：¥600,000</strong></p>
              <p>補助率：50%（インボイス枠）</p>
              <p style={{ margin: '1rem 0' }}>→ <strong style={{ color: '#00cc66', fontSize: '18px' }}>事業者負担：¥300,000</strong></p>
              <p style={{ fontSize: '12px', color: '#999' }}>初年度実質コスト：¥300,000</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
          color: '#fff',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '800',
            margin: '0 0 1.5rem 0',
          }}>
            デジタル化・AI導入補助金の<br />申請受付開始
          </h2>
          <p style={{
            fontSize: '16px',
            margin: '0 0 2rem 0',
            opacity: 0.9,
          }}>
            限られた枠ですので、まずは無料相談をお申込みください
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            background: '#fff',
            color: '#0066cc',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '16px',
          }}>
            無料相談を申し込む →
          </button>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '2rem',
          background: '#1a1a1a',
          color: '#999',
          fontSize: '12px',
          textAlign: 'center',
        }}>
          <p style={{ margin: 0 }}>
            © 2026 AI統合在庫管理システム | 
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none', marginLeft: '0.5rem' }}>利用規約</a>
            {' | '}
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>プライバシーポリシー</a>
          </p>
          <p style={{ margin: '1rem 0 0 0' }}>
            デジタル化・AI導入補助金2026対応 | インボイス制度完全対応 | 中小企業向けSaaS
          </p>
        </footer>
      </div>
    </>
  );
}
