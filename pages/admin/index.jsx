import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();

  const menuItems = [
    {
      title: '📦 在庫管理',
      description: '商品登録・編集・削除・在庫調整',
      icon: '📦',
      path: '/admin/inventory',
      color: '#007bff',
      tasks: ['登録', '編集', '削除', 'CSV'],
    },
    {
      title: '📊 販売管理',
      description: '注文・売上・請求書管理',
      icon: '📊',
      path: '/admin/sales',
      color: '#28a745',
      tasks: ['受注', '出荷', '売上', '請求'],
    },
    {
      title: '📤 発注管理',
      description: 'サプライヤー管理・自動発注',
      icon: '📤',
      path: '/admin/purchase',
      color: '#ffc107',
      tasks: ['発注', 'サプライヤ', '受領', 'AI推奨'],
    },
    {
      title: '📝 帳票管理',
      description: 'インボイス・税務書類・レポート',
      icon: '📝',
      path: '/admin/reports',
      color: '#17a2b8',
      tasks: ['インボイス', 'レポート', '税務', 'PDF'],
    },
    {
      title: '⚙️ システム設定',
      description: 'ユーザー・倉庫・カテゴリ設定',
      icon: '⚙️',
      path: '/admin/settings',
      color: '#6c757d',
      tasks: ['ユーザ', '倉庫', 'カテゴリ', 'API'],
    },
    {
      title: '📊 レポート分析',
      description: 'AI予測・分析・ダッシュボード',
      icon: '📊',
      path: '/dashboard/inventory',
      color: '#dc3545',
      tasks: ['予測', '分析', 'グラフ', 'AI'],
    },
  ];

  return (
    <>
      <Head>
        <title>管理画面ダッシュボード</title>
      </Head>

      <div style={{ fontFamily: 'Arial, sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
        {/* ヘッダー */}
        <header style={{ background: '#fff', borderBottom: '1px solid #ddd', padding: '1.5rem 2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>🎛️ 管理画面</h1>
              <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '13px' }}>在庫・販売・発注・税務管理システム</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#666' }}>👤 管理者ユーザー</span>
              <button style={{ padding: '0.5rem 1rem', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>
                ログアウト
              </button>
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          {/* サマリー */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <p style={{ margin: 0, fontSize: '12px', color: '#666', fontWeight: 600 }}>総在庫金額</p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '24px', fontWeight: 700, color: '#007bff' }}>¥4.28M</p>
            </div>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <p style={{ margin: 0, fontSize: '12px', color: '#666', fontWeight: 600 }}>今月売上</p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '24px', fontWeight: 700, color: '#28a745' }}>¥3.63M</p>
            </div>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <p style={{ margin: 0, fontSize: '12px', color: '#666', fontWeight: 600 }}>保留中の発注</p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '24px', fontWeight: 700, color: '#ffc107' }}>3件</p>
            </div>
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <p style={{ margin: 0, fontSize: '12px', color: '#666', fontWeight: 600 }}>アラート</p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '24px', fontWeight: 700, color: '#dc3545' }}>4件</p>
            </div>
          </div>

          {/* メニュー */}
          <h2 style={{ margin: '0 0 2rem 0', fontSize: '18px', fontWeight: 700 }}>管理機能</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => router.push(item.path)}
                style={{
                  background: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: `2px solid transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                {/* ヘッダー */}
                <div style={{ background: item.color, color: '#fff', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '32px' }}>{item.icon}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '12px', opacity: 0.9 }}>{item.description}</p>
                  </div>
                </div>

                {/* コンテンツ */}
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ margin: '0 0 1rem 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>主な機能</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.tasks.map((task, tidx) => (
                      <span
                        key={tidx}
                        style={{
                          display: 'inline-block',
                          padding: '0.4rem 0.8rem',
                          background: `${item.color}20`,
                          color: item.color,
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 600,
                        }}
                      >
                        {task}
                      </span>
                    ))}
                  </div>
                </div>

                {/* フッター */}
                <div style={{ padding: '1rem 1.5rem', background: '#f8f9fa', borderTop: '1px solid #eee', textAlign: 'right' }}>
                  <button
                    style={{
                      padding: '0.5rem 1rem',
                      background: item.color,
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '12px',
                    }}
                  >
                    開く →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* フッターメモ */}
          <div style={{ marginTop: '3rem', background: '#e8f4f8', border: '2px solid #007bff', borderRadius: '8px', padding: '1.5rem', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '13px', color: '#0056b3' }}>
              <strong>✅ 通販サイト管理画面レベルの機能を実装しています。</strong><br />
              商品登録から在庫管理、AI自動発注、インボイス対応までワンプラットフォームで実現できます。
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
