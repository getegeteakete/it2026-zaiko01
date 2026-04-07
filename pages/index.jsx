import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI統合在庫管理システム - デジタル化補助金対応</title>
        <meta name="description" content="自動化で業務効率を劇的改善。年間¥525万の効果。ROI 577%。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {/* ナビゲーション */}
        <nav
          style={{
            background: '#fff',
            borderBottom: '1px solid #e0e0e0',
            padding: '1rem 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
            📦 AI在庫管理
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>
              機能
            </a>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>
              料金
            </a>
            <button
              style={{
                background: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              始める
            </button>
          </div>
        </nav>

        {/* ヒーロー */}
        <section
          style={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #fff 100%)',
            padding: '4rem 2rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#1a1a1a',
                margin: '0 0 1rem 0',
                lineHeight: '1.2',
              }}
            >
              在庫管理を<br />
              完全自動化
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#666',
                margin: '0 0 2rem 0',
                lineHeight: '1.6',
              }}
            >
              AI が発注・予測・インボイス対応をすべて処理。
              <br />
              年間 ¥525万円の効果。ROI 577%。
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                style={{
                  background: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                デモを見る
              </button>
              <button
                style={{
                  background: '#f0f0f0',
                  color: '#1a1a1a',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                詳細を見る
              </button>
            </div>

            <div
              style={{
                marginTop: '3rem',
                background: '#e0e0e0',
                borderRadius: '12px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '1rem' }}>📊</div>
                <p style={{ margin: 0 }}>ダッシュボードプレビュー</p>
              </div>
            </div>
          </div>
        </section>

        {/* 機能セクション */}
        <section
          id="features"
          style={{
            padding: '4rem 2rem',
            background: '#fff',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#1a1a1a',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            5つのコア機能
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: '🤖',
                title: 'AI自動発注',
                description: 'Claude APIが最適サプライヤーを判定し、自動発注を実行。',
              },
              {
                icon: '📈',
                title: '需要予測',
                description: '機械学習で30日先の需要を正確に予測。在庫切れを防止。',
              },
              {
                icon: '📄',
                title: 'インボイス完全対応',
                description: '国税庁API連携。2026年10月の50%控除ルールに自動対応。',
              },
              {
                icon: '⚠️',
                title: 'リアルタイムアラート',
                description: '異常検知と過剰在庫を瞬時に検出。即座に対応。',
              },
              {
                icon: '💰',
                title: 'コスト最適化',
                description: '在庫保管コストを32%削減。購買業務は月100時間削減。',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 0.75rem 0', color: '#1a1a1a' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 効果セクション */}
        <section
          style={{
            padding: '4rem 2rem',
            background: '#f8f9fa',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#1a1a1a',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            導入の効果
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { label: '購買業務削減', value: '月100時間', color: '#10b981' },
              { label: 'インボイス対応', value: '月198時間', color: '#3b82f6' },
              { label: '在庫コスト削減', value: '年¥600万', color: '#f59e0b' },
              { label: 'ROI', value: '577%', color: '#8b5cf6' },
              { label: '投資回収期間', value: '1.8ヶ月', color: '#ec4899' },
              { label: '年間効果', value: '¥525万円', color: '#06b6d4' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: `2px solid ${item.color}`,
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '12px', color: '#666', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '28px', fontWeight: 700, color: item.color, margin: '0.75rem 0 0' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 料金セクション */}
        <section
          id="pricing"
          style={{
            padding: '4rem 2rem',
            background: '#fff',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#1a1a1a',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            シンプルな料金体系
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                name: 'スタンダード',
                price: '¥50,000',
                period: '月額',
                features: ['基本機能', 'AI予測', '初期サポート'],
              },
              {
                name: 'プロフェッショナル',
                price: '¥100,000',
                period: '月額',
                features: ['全機能', 'AI自動発注', '優先サポート', 'カスタマイズ'],
                recommended: true,
              },
              {
                name: 'エンタープライズ',
                price: 'カスタム',
                period: '相談',
                features: ['カスタム機能', '専任サポート', 'API統合', 'オンプレミス対応'],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: plan.recommended ? '2px solid #007bff' : '1px solid #e0e0e0',
                  borderRadius: '12px',
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                {plan.recommended && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#007bff',
                      color: '#fff',
                      padding: '0.25rem 1rem',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    推奨
                  </div>
                )}
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 0.5rem 0', color: '#1a1a1a' }}>
                  {plan.name}
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '14px', color: '#666', marginLeft: '0.5rem' }}>
                    {plan.period}
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 1.5rem 0',
                  }}
                >
                  {plan.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      style={{
                        padding: '0.5rem 0',
                        fontSize: '14px',
                        color: '#666',
                      }}
                    >
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: '100%',
                    background: plan.recommended ? '#007bff' : '#f0f0f0',
                    color: plan.recommended ? '#fff' : '#1a1a1a',
                    border: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  詳細を見る
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 1rem 0' }}>
            補助金で実質負担¥30万円
          </h2>
          <p style={{ fontSize: '16px', margin: '0 0 2rem 0', opacity: 0.95 }}>
            デジタル化・AI導入補助金2026（インボイス枠）対応
          </p>
          <button
            style={{
              background: '#fff',
              color: '#007bff',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            申請サポートを受ける
          </button>
        </section>

        {/* フッター */}
        <footer
          style={{
            background: '#f8f9fa',
            padding: '2rem',
            textAlign: 'center',
            color: '#666',
            fontSize: '14px',
            borderTop: '1px solid #e0e0e0',
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026 AI統合在庫管理システム. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
