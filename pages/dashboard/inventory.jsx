import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function InventoryDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [warehouseFilter, setWarehouseFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [aiRecommendations, setAiRecommendations] = useState([]);

  // Mock data
  const inventoryData = {
    warehouses: ['東京主庫', '横浜支庫', '大阪営業所'],
    products: [
      {
        id: 'PROD-001',
        name: 'マイコン16bit',
        sku: 'MCU-001',
        category: '電子部品',
        currentStock: 150,
        safetyStock: 50,
        reorderPoint: 100,
        maxStock: 500,
        unitPrice: 1000,
        status: 'normal',
        warehouse: '東京主庫',
        forecast7days: 175,
        forecast30days: 750,
        lastRestock: '2026-01-20',
        lotNumber: 'LOT-20260120-001',
        expiryDate: '2027-01-20',
        location: 'A-01-02',
        barcodeQR: 'QR-MCU-001',
      },
      {
        id: 'PROD-002',
        name: '部品A',
        sku: 'PART-A',
        category: '機械部品',
        currentStock: 620,
        safetyStock: 50,
        reorderPoint: 100,
        maxStock: 300,
        unitPrice: 500,
        status: 'overstock',
        warehouse: '東京主庫',
        forecast7days: 50,
        forecast30days: 200,
        lastRestock: '2026-01-15',
        lotNumber: 'LOT-20260115-002',
        expiryDate: null,
        location: 'B-02-01',
        barcodeQR: 'QR-PART-A',
      },
      {
        id: 'PROD-003',
        name: 'センサー',
        sku: 'SNS-001',
        category: '電子部品',
        currentStock: 45,
        safetyStock: 50,
        reorderPoint: 100,
        maxStock: 300,
        unitPrice: 800,
        status: 'critical',
        warehouse: '横浜支庫',
        forecast7days: 80,
        forecast30days: 400,
        lastRestock: '2026-01-10',
        lotNumber: 'LOT-20260110-003',
        expiryDate: '2026-12-31',
        location: 'C-01-03',
        barcodeQR: 'QR-SNS-001',
      },
    ],
    alerts: [
      {
        id: 'ALERT-001',
        type: 'critical',
        product: '部品A',
        message: '在庫が最大値の120%（620個）です。販売促進またはサプライヤーへの返品を検討してください。',
        severity: 'warning',
        timestamp: '2026-01-23T09:00:00Z',
      },
      {
        id: 'ALERT-002',
        type: 'critical',
        product: 'センサー',
        message: '在庫が発注点以下です。緊急発注が必要です（現在45個→発注点100個）',
        severity: 'critical',
        timestamp: '2026-01-23T10:30:00Z',
      },
      {
        id: 'ALERT-003',
        type: 'expiry',
        product: 'マイコン16bit',
        message: '有効期限が2027年1月20日です。残り12ヶ月。在庫回転を促進してください。',
        severity: 'info',
        timestamp: '2026-01-20T12:00:00Z',
      },
    ],
  };

  // AI推奨事項の生成
  const generateAIRecommendations = () => {
    const recommendations = [
      {
        id: 'REC-001',
        type: 'inventory',
        product: 'センサー',
        action: '緊急発注推奨',
        reason: '現在の売上速度（1日約12個）から見て、あと3.75日でストック切れ',
        supplier: '東芝エレクトロニクス',
        quantity: 200,
        leadTime: '3営業日',
        estimatedCost: 160000,
        confidence: 0.95,
      },
      {
        id: 'REC-002',
        type: 'overstock',
        product: '部品A',
        action: 'セール推奨',
        reason: '在庫が適正量の3倍以上。7日間のセール（15%割引）で50個の売上増を予測',
        currentDiscount: '0%',
        proposedDiscount: '15%',
        estimatedSales: 50,
        projectedIncome: 18750,
        confidence: 0.87,
      },
      {
        id: 'REC-003',
        type: 'replacement',
        product: 'マイコン16bit',
        action: '代替品提案',
        reason: '同等の32bit版が市場で高需要。在庫が減少傾向の場合は代替検討を',
        alternativeProduct: 'マイコン32bit',
        alternativeSKU: 'MCU-002',
        priceAdjustment: '+200円/個',
        confidence: 0.72,
      },
    ];
    setAiRecommendations(recommendations);
  };

  useEffect(() => {
    generateAIRecommendations();
  }, []);

  return (
    <>
      <Head>
        <title>AI統合在庫管理 - ダッシュボード</title>
      </Head>

      <div style={{
        background: 'linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%)',
        color: '#e8eaef',
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}>
        
        {/* Header */}
        <div style={{
          padding: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(0,0,0,0.3)',
        }}>
          <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '700' }}>
            📦 在庫管理ダッシュボード
          </h1>
          <p style={{ margin: '0.5rem 0 0', fontSize: '13px', color: '#999' }}>
            リアルタイム在庫管理 | AI予測 | インボイス対応
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem 2rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(0,0,0,0.2)',
          overflowX: 'auto',
        }}>
          {[
            { id: 'overview', label: '📊 概要' },
            { id: 'inventory', label: '📦 在庫管理' },
            { id: 'forecast', label: '📈 需要予測' },
            { id: 'alerts', label: '⚠️ アラート' },
            { id: 'ai', label: '🤖 AI推奨' },
            { id: 'reports', label: '📋 レポート' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.75rem 1.25rem',
                background: activeTab === tab.id ? '#0066cc' : 'transparent',
                color: activeTab === tab.id ? '#fff' : '#999',
                border: activeTab === tab.id ? '2px solid #0066cc' : '1px solid rgba(255,255,255,0.2)',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? '600' : '400',
                transition: 'all 0.3s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ padding: '2rem' }}>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              {/* KPI Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
                <div style={{
                  background: 'rgba(100, 181, 246, 0.1)',
                  border: '1px solid rgba(100, 181, 246, 0.3)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>
                    総在庫数
                  </p>
                  <p style={{ margin: '0.75rem 0 0', fontSize: '28px', fontWeight: '700', color: '#64b5f6' }}>
                    815個
                  </p>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '12px', color: '#4db8ff' }}>
                    ↑ 5.2% 前日比
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255, 152, 0, 0.1)',
                  border: '1px solid rgba(255, 152, 0, 0.3)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>
                    総在庫金額
                  </p>
                  <p style={{ margin: '0.75rem 0 0', fontSize: '28px', fontWeight: '700', color: '#ffb74d' }}>
                    ¥589K
                  </p>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '12px', color: '#ffa726' }}>
                    適正値の102%
                  </p>
                </div>

                <div style={{
                  background: 'rgba(76, 175, 80, 0.1)',
                  border: '1px solid rgba(76, 175, 80, 0.3)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>
                    正常品目
                  </p>
                  <p style={{ margin: '0.75rem 0 0', fontSize: '28px', fontWeight: '700', color: '#81c784' }}>
                    1個
                  </p>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '12px', color: '#4caf50' }}>
                    3品目中
                  </p>
                </div>

                <div style={{
                  background: 'rgba(239, 83, 80, 0.1)',
                  border: '1px solid rgba(239, 83, 80, 0.3)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <p style={{ margin: 0, fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>
                    要注意品目
                  </p>
                  <p style={{ margin: '0.75rem 0 0', fontSize: '28px', fontWeight: '700', color: '#ef5350' }}>
                    2個
                  </p>
                  <p style={{ margin: '0.5rem 0 0', fontSize: '12px', color: '#ef5350' }}>
                    緊急対応が必要
                  </p>
                </div>
              </div>

              {/* Top Alerts */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '1.5rem',
              }}>
                <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '16px', fontWeight: '600' }}>
                  🚨 最新アラート（{inventoryData.alerts.length}件）
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {inventoryData.alerts.map(alert => (
                    <div key={alert.id} style={{
                      padding: '1rem',
                      background: alert.severity === 'critical' ? 'rgba(239,83,80,0.1)' : 'rgba(255,152,0,0.1)',
                      borderLeft: `4px solid ${alert.severity === 'critical' ? '#ef5350' : '#ffa726'}`,
                      borderRadius: '6px',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#fff' }}>
                            {alert.product} - {alert.message.substring(0, 50)}...
                          </p>
                          <p style={{ margin: '0.5rem 0 0', fontSize: '11px', color: '#999' }}>
                            {new Date(alert.timestamp).toLocaleString('ja-JP')}
                          </p>
                        </div>
                        <button style={{
                          padding: '0.5rem 1rem',
                          background: '#0066cc',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px',
                        }}>
                          対応
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Inventory Tab */}
          {activeTab === 'inventory' && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="商品名またはSKUで検索..."
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '0.75rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '6px',
                    color: '#fff',
                  }}
                />
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '13px',
                }}>
                  <thead>
                    <tr style={{ background: 'rgba(0,102,204,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', color: '#fff', fontWeight: '600' }}>商品名</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: '#fff', fontWeight: '600' }}>現在在庫</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: '#fff', fontWeight: '600' }}>適正在庫</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: '#fff', fontWeight: '600' }}>発注点</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: '#fff', fontWeight: '600' }}>7日予測</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: '#fff', fontWeight: '600' }}>ステータス</th>
                      <th style={{ padding: '1rem', textAlign: 'center', color: '#fff', fontWeight: '600' }}>アクション</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.products.map(product => (
                      <tr key={product.id} style={{
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        background: selectedProduct?.id === product.id ? 'rgba(0,102,204,0.1)' : 'transparent',
                      }}>
                        <td style={{ padding: '1rem', color: '#fff' }}>
                          <div style={{ fontWeight: '600' }}>{product.name}</div>
                          <div style={{ fontSize: '11px', color: '#999', marginTop: '0.25rem' }}>{product.sku}</div>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#64b5f6' }}>
                          <strong>{product.currentStock}</strong>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>
                          {product.maxStock}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>
                          {product.reorderPoint}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center', color: '#ffa726' }}>
                          {product.forecast7days}
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            background: product.status === 'critical' ? 'rgba(239,83,80,0.2)' :
                                       product.status === 'overstock' ? 'rgba(255,152,0,0.2)' :
                                       'rgba(76,175,80,0.2)',
                            color: product.status === 'critical' ? '#ef5350' :
                                   product.status === 'overstock' ? '#ffa726' :
                                   '#81c784',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: '600',
                          }}>
                            {product.status === 'critical' ? '⚠️ 緊急' :
                             product.status === 'overstock' ? '⬆️ 過剰' :
                             '✅ 正常'}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <button
                            onClick={() => setSelectedProduct(product)}
                            style={{
                              padding: '0.4rem 0.8rem',
                              background: '#0066cc',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '11px',
                              fontWeight: '600',
                            }}
                          >
                            詳細
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Product Detail */}
              {selectedProduct && (
                <div style={{
                  marginTop: '2rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '16px', fontWeight: '600' }}>
                    🔍 商品詳細: {selectedProduct.name}
                  </h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                  }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>SKU</p>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '14px', color: '#fff', fontWeight: '600' }}>
                        {selectedProduct.sku}
                      </p>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>ロット番号</p>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '14px', color: '#fff', fontWeight: '600' }}>
                        {selectedProduct.lotNumber}
                      </p>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>ロケーション</p>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '14px', color: '#fff', fontWeight: '600' }}>
                        {selectedProduct.location}
                      </p>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>単価</p>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '14px', color: '#fff', fontWeight: '600' }}>
                        ¥{selectedProduct.unitPrice.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>有効期限</p>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '14px', color: selectedProduct.expiryDate ? '#ffa726' : '#81c784', fontWeight: '600' }}>
                        {selectedProduct.expiryDate || '制限なし'}
                      </p>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>バーコード</p>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '14px', color: '#64b5f6', fontWeight: '600', fontFamily: 'monospace' }}>
                        {selectedProduct.barcodeQR}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Forecast Tab */}
          {activeTab === 'forecast' && (
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              padding: '2rem',
            }}>
              <h3 style={{ margin: '0 0 2rem 0', fontSize: '16px', fontWeight: '600' }}>
                📈 30日間の需要予測（AI分析）
              </h3>
              <div style={{
                background: 'linear-gradient(90deg, rgba(100,181,246,0.1) 0%, rgba(100,181,246,0.05) 100%)',
                height: '300px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1rem',
                gap: '0.5rem',
              }}>
                {[85, 92, 78, 95, 110, 120, 105, 115, 98, 125, 112, 135, 128, 142, 150, 145, 160, 155, 170, 165, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220].map((value, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${(value / 220) * 100}%`,
                      background: value > 150 ? '#ef5350' : value > 100 ? '#ffa726' : '#64b5f6',
                      borderRadius: '4px 4px 0 0',
                      minHeight: '2px',
                      opacity: 0.8,
                    }}
                    title={`Day ${idx + 1}: ${value}個`}
                  />
                ))}
              </div>
              <p style={{ margin: '1.5rem 0 0', fontSize: '12px', color: '#999' }}>
                💡 AI分析: マイコン16bitの需要は増加傾向（7日平均20%↑）。現在の在庫では25日後に枯渇の予測。
              </p>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {inventoryData.alerts.map(alert => (
                <div key={alert.id} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${alert.severity === 'critical' ? 'rgba(239,83,80,0.5)' : 'rgba(255,152,0,0.5)'}`,
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#fff' }}>
                        {alert.severity === 'critical' ? '🔴 緊急:' : '🟡 警告:'} {alert.product}
                      </h4>
                      <p style={{ margin: '0.75rem 0 0', fontSize: '14px', color: '#bbb', lineHeight: '1.6' }}>
                        {alert.message}
                      </p>
                      <p style={{ margin: '1rem 0 0', fontSize: '11px', color: '#666' }}>
                        {new Date(alert.timestamp).toLocaleString('ja-JP')}
                      </p>
                    </div>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      background: '#0066cc',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '13px',
                    }}>
                      対応する
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* AI Recommendations Tab */}
          {activeTab === 'ai' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
                🤖 AI推奨事項（信頼度順）
              </h3>
              {aiRecommendations.map(rec => (
                <div key={rec.id} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(100,181,246,0.3)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#64b5f6' }}>
                        {rec.action}: {rec.product}
                      </h4>
                      <p style={{ margin: '0.5rem 0', fontSize: '13px', color: '#bbb' }}>
                        {rec.reason}
                      </p>
                    </div>
                    <div style={{
                      textAlign: 'right',
                      padding: '0.75rem 1rem',
                      background: 'rgba(100,181,246,0.1)',
                      borderRadius: '6px',
                    }}>
                      <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>信頼度</p>
                      <p style={{ margin: '0.5rem 0 0', fontSize: '18px', fontWeight: '700', color: '#64b5f6' }}>
                        {(rec.confidence * 100).toFixed(0)}%
                      </p>
                    </div>
                  </div>
                  {rec.type === 'inventory' && (
                    <div style={{
                      background: 'rgba(76,175,80,0.1)',
                      padding: '1rem',
                      borderRadius: '6px',
                      marginBottom: '1rem',
                    }}>
                      <p style={{ margin: 0, fontSize: '12px', color: '#81c784', fontWeight: '600' }}>
                        推奨: {rec.quantity}個を{rec.supplier}から発注（納期: {rec.leadTime}、予想額: ¥{rec.estimatedCost.toLocaleString()}）
                      </p>
                    </div>
                  )}
                  {rec.type === 'overstock' && (
                    <div style={{
                      background: 'rgba(255,152,0,0.1)',
                      padding: '1rem',
                      borderRadius: '6px',
                      marginBottom: '1rem',
                    }}>
                      <p style={{ margin: 0, fontSize: '12px', color: '#ffa726', fontWeight: '600' }}>
                        推奨: {rec.proposedDiscount}割引で{rec.estimatedSales}個の増販が見込まれ、¥{rec.projectedIncome.toLocaleString()}の売上増加
                      </p>
                    </div>
                  )}
                  <button style={{
                    padding: '0.75rem 1.5rem',
                    background: '#0066cc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '13px',
                  }}>
                    この推奨を承認
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              padding: '2rem',
            }}>
              <h3 style={{ margin: '0 0 2rem 0', fontSize: '16px', fontWeight: '600' }}>
                📋 在庫レポート
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}>
                <button style={{
                  padding: '1rem',
                  background: 'rgba(0,102,204,0.2)',
                  border: '1px solid rgba(100,181,246,0.5)',
                  borderRadius: '6px',
                  color: '#64b5f6',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                }}>
                  📊 月次レポート生成
                </button>
                <button style={{
                  padding: '1rem',
                  background: 'rgba(0,102,204,0.2)',
                  border: '1px solid rgba(100,181,246,0.5)',
                  borderRadius: '6px',
                  color: '#64b5f6',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                }}>
                  📈 在庫回転率分析
                </button>
                <button style={{
                  padding: '1rem',
                  background: 'rgba(0,102,204,0.2)',
                  border: '1px solid rgba(100,181,246,0.5)',
                  borderRadius: '6px',
                  color: '#64b5f6',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                }}>
                  🗂️ 棚卸予定表
                </button>
                <button style={{
                  padding: '1rem',
                  background: 'rgba(0,102,204,0.2)',
                  border: '1px solid rgba(100,181,246,0.5)',
                  borderRadius: '6px',
                  color: '#64b5f6',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                }}>
                  💰 在庫評価レポート
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
