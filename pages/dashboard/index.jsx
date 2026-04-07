import React, { useState } from 'react';
import Head from 'next/head';

export default function ProfessionalDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // モデルデータ
  const dashboardData = {
    kpis: [
      {
        id: 1,
        label: '総在庫金額',
        value: '¥4,285,000',
        change: '+12.5%',
        trend: 'up',
        icon: '📊',
      },
      {
        id: 2,
        label: '回転率',
        value: '4.2回/年',
        change: '+8.3%',
        trend: 'up',
        icon: '📈',
      },
      {
        id: 3,
        label: '欠品リスク',
        value: '2件',
        change: '-50%',
        trend: 'down',
        icon: '⚠️',
      },
      {
        id: 4,
        label: 'AI予測精度',
        value: '94.2%',
        change: '+3.1%',
        trend: 'up',
        icon: '🤖',
      },
    ],
    products: [
      {
        id: 1,
        name: 'マイコン16bit',
        sku: 'MCU-001',
        stock: 1250,
        status: 'optimal',
        value: '¥1,250,000',
        movement: '↑ 15%',
      },
      {
        id: 2,
        name: 'センサーモジュール',
        sku: 'SNS-002',
        stock: 420,
        status: 'warning',
        value: '¥336,000',
        movement: '↓ 8%',
      },
      {
        id: 3,
        name: 'LED制御基板',
        sku: 'LED-003',
        stock: 890,
        status: 'optimal',
        value: '¥1,425,000',
        movement: '↑ 22%',
      },
    ],
    alerts: [
      {
        id: 1,
        severity: 'info',
        message: 'Q2在庫最適化完了：在庫コスト 18% 削減',
        time: '2時間前',
      },
      {
        id: 2,
        severity: 'warning',
        message: 'センサーモジュール：予測では30日後に発注が必要',
        time: '4時間前',
      },
      {
        id: 3,
        severity: 'success',
        message: 'LED制御基板：AI推奨セール実施で 45% の追加売上',
        time: '1日前',
      },
    ],
  };

  return (
    <>
      <Head>
        <title>AI統合在庫管理システム - ダッシュボード</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        style={{
          background: '#ffffff',
          color: '#1a1a1a',
          minHeight: '100vh',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* ナビゲーション */}
        <nav
          style={{
            background: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0',
            padding: '0 2rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 600 }}>
            📦 在庫管理システム
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <button
              style={{
                background: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              レポート出力
            </button>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#e0e0e0',
              }}
            />
          </div>
        </nav>

        {/* メインコンテンツ */}
        <div style={{ padding: '2rem' }}>
          {/* ヘッダー */}
          <div
            style={{
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 600 }}>
                ダッシュボード
              </h1>
              <p
                style={{
                  margin: '0.5rem 0 0',
                  color: '#666',
                  fontSize: '14px',
                }}
              >
                2026年4月8日 | リアルタイムデータ
              </p>
            </div>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                border: '1px solid #ddd',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              <option value="week">先週</option>
              <option value="month">先月</option>
              <option value="quarter">四半期</option>
              <option value="year">年間</option>
            </select>
          </div>

          {/* KPIカード */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            {dashboardData.kpis.map((kpi) => (
              <div
                key={kpi.id}
                style={{
                  background: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 4px 16px rgba(0,0,0,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 2px 8px rgba(0,0,0,0.04)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: '#666',
                      fontSize: '13px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {kpi.label}
                  </p>
                  <span style={{ fontSize: '20px' }}>{kpi.icon}</span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                  }}
                >
                  {kpi.value}
                </p>
                <p
                  style={{
                    margin: '0.75rem 0 0',
                    fontSize: '12px',
                    color: kpi.trend === 'up' ? '#10b981' : '#ef4444',
                    fontWeight: 600,
                  }}
                >
                  {kpi.change} {kpi.trend === 'up' ? '📈' : '📉'}
                </p>
              </div>
            ))}
          </div>

          {/* タブナビゲーション */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              borderBottom: '1px solid #e0e0e0',
              paddingBottom: '1rem',
            }}
          >
            {[
              { id: 'overview', label: 'ダッシュボード' },
              { id: 'inventory', label: '在庫管理' },
              { id: 'forecast', label: '予測' },
              { id: 'reports', label: 'レポート' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.75rem 1.25rem',
                  fontSize: '14px',
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  color:
                    activeTab === tab.id ? '#007bff' : '#666',
                  cursor: 'pointer',
                  borderBottom:
                    activeTab === tab.id ? '2px solid #007bff' : 'none',
                  marginBottom: '-1rem',
                  paddingBottom: '1.75rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* コンテンツエリア */}
          {activeTab === 'overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
              {/* 在庫テーブル */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #e0e0e0' }}>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
                    主要商品在庫状況
                  </h3>
                </div>
                <table
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '14px',
                  }}
                >
                  <thead>
                    <tr style={{ background: '#f8f9fa', borderBottom: '1px solid #e0e0e0' }}>
                      <th
                        style={{
                          padding: '1rem 1.5rem',
                          textAlign: 'left',
                          fontWeight: 600,
                          color: '#666',
                        }}
                      >
                        商品名
                      </th>
                      <th
                        style={{
                          padding: '1rem 1.5rem',
                          textAlign: 'center',
                          fontWeight: 600,
                          color: '#666',
                        }}
                      >
                        在庫数
                      </th>
                      <th
                        style={{
                          padding: '1rem 1.5rem',
                          textAlign: 'right',
                          fontWeight: 600,
                          color: '#666',
                        }}
                      >
                        在庫金額
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.products.map((product) => (
                      <tr
                        key={product.id}
                        style={{
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#f8f9fa';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <td
                          style={{
                            padding: '1rem 1.5rem',
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 600, color: '#1a1a1a' }}>
                              {product.name}
                            </div>
                            <div style={{ fontSize: '12px', color: '#999', marginTop: '0.25rem' }}>
                              {product.sku}
                            </div>
                          </div>
                        </td>
                        <td
                          style={{
                            padding: '1rem 1.5rem',
                            textAlign: 'center',
                            fontWeight: 500,
                          }}
                        >
                          {product.stock}
                        </td>
                        <td
                          style={{
                            padding: '1rem 1.5rem',
                            textAlign: 'right',
                            fontWeight: 600,
                            color: '#007bff',
                          }}
                        >
                          {product.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* アラート */}
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '16px', fontWeight: 600 }}>
                  最新通知
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {dashboardData.alerts.map((alert) => (
                    <div
                      key={alert.id}
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        background:
                          alert.severity === 'info'
                            ? '#e3f2fd'
                            : alert.severity === 'warning'
                            ? '#fff3e0'
                            : '#f1f5fe',
                        borderLeft:
                          alert.severity === 'info'
                            ? '3px solid #2196f3'
                            : alert.severity === 'warning'
                            ? '3px solid #ff9800'
                            : '3px solid #4caf50',
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#1a1a1a',
                        }}
                      >
                        {alert.message}
                      </p>
                      <p
                        style={{
                          margin: '0.5rem 0 0',
                          fontSize: '12px',
                          color: '#999',
                        }}
                      >
                        {alert.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div
              style={{
                background: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                color: '#666',
              }}
            >
              <p style={{ margin: 0 }}>在庫管理詳細ページ</p>
            </div>
          )}

          {activeTab === 'forecast' && (
            <div
              style={{
                background: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                color: '#666',
              }}
            >
              <p style={{ margin: 0 }}>AI予測ページ</p>
            </div>
          )}

          {activeTab === 'reports' && (
            <div
              style={{
                background: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                color: '#666',
              }}
            >
              <p style={{ margin: 0 }}>レポートページ</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
