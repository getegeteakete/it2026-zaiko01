import React, { useState } from 'react';
import Head from 'next/head';

export default function InventoryManagement() {
  const [activeTab, setActiveTab] = useState('list');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // 在庫データ
  const [inventory, setInventory] = useState([
    { id: 1, sku: 'MCU-001', name: 'マイコン16bit', category: 'IC・マイコン', qty: 1250, minQty: 500, maxQty: 2000, costPrice: 1000, sellPrice: 1200, warehouse: 'A倉庫', status: 'active', updated: '2026-03-07' },
    { id: 2, sku: 'SNS-002', name: 'センサーモジュール', category: 'センサー', qty: 145, minQty: 300, maxQty: 800, costPrice: 800, sellPrice: 1000, warehouse: 'A倉庫', status: 'active', updated: '2026-03-05' },
    { id: 3, sku: 'LED-003', name: 'LED制御基板', category: '制御基板', qty: 890, minQty: 400, maxQty: 1500, costPrice: 1600, sellPrice: 1950, warehouse: 'B倉庫', status: 'active', updated: '2026-03-07' },
  ]);

  const [formData, setFormData] = useState({
    sku: '', name: '', category: '', qty: '', minQty: '', maxQty: '',
    costPrice: '', sellPrice: '', warehouse: '', status: 'active',
  });

  const handleRegisterClick = () => {
    setFormData({ sku: '', name: '', category: '', qty: '', minQty: '', maxQty: '', costPrice: '', sellPrice: '', warehouse: '', status: 'active' });
    setEditingId(null);
    setShowRegisterModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setInventory(inventory.map(item => item.id === editingId ? { ...item, ...formData, updated: '2026-03-07' } : item));
    } else {
      setInventory([...inventory, { id: Math.max(...inventory.map(i => i.id), 0) + 1, ...formData, updated: '2026-03-07' }]);
    }
    setShowRegisterModal(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setShowRegisterModal(true);
  };

  const handleDelete = (id) => {
    if (confirm('この商品を削除しますか？')) {
      setInventory(inventory.filter(item => item.id !== id));
    }
  };

  const filteredInventory = inventory.filter(item =>
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>在庫管理 - 登録・編集画面</title>
      </Head>

      <div style={{ fontFamily: 'Arial, sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
        {/* ヘッダー */}
        <header style={{ background: '#fff', borderBottom: '1px solid #ddd', padding: '1.5rem 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700 }}>📦 在庫管理</h1>
            <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '13px' }}>商品登録・編集・管理</p>
          </div>
        </header>

        <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          {/* ツールバー */}
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
              <input
                type="text"
                placeholder="SKU / 商品名で検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '6px', flex: 1, maxWidth: '400px' }}
              />
              <button style={{ padding: '0.75rem 1rem', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                🔍 検索
              </button>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ padding: '0.75rem 1rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
                📤 CSV インポート
              </button>
              <button onClick={handleRegisterClick} style={{ padding: '0.75rem 1.5rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
                ➕ 新規登録
              </button>
            </div>
          </div>

          {/* タブ */}
          <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', borderBottom: '2px solid #eee', backgroundColor: '#f8f9fa' }}>
              <button
                onClick={() => setActiveTab('list')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  border: 'none',
                  background: activeTab === 'list' ? '#007bff' : 'transparent',
                  color: activeTab === 'list' ? '#fff' : '#666',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'list' ? 600 : 400,
                }}
              >
                📋 商品一覧 ({filteredInventory.length})
              </button>
              <button
                onClick={() => setActiveTab('batch')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  border: 'none',
                  background: activeTab === 'batch' ? '#007bff' : 'transparent',
                  color: activeTab === 'batch' ? '#fff' : '#666',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'batch' ? 600 : 400,
                }}
              >
                📊 バッチ操作
              </button>
              <button
                onClick={() => setActiveTab('adjust')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  border: 'none',
                  background: activeTab === 'adjust' ? '#007bff' : 'transparent',
                  color: activeTab === 'adjust' ? '#fff' : '#666',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'adjust' ? 600 : 400,
                }}
              >
                🔧 在庫調整
              </button>
            </div>

            {/* タブコンテンツ */}
            <div style={{ padding: '2rem' }}>
              {activeTab === 'list' && (
                <div>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                      <thead>
                        <tr style={{ background: '#f8f9fa', borderBottom: '2px solid #ddd' }}>
                          <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>SKU</th>
                          <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>商品名</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>カテゴリ</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>現在庫</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>最小値</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>倉庫</th>
                          <th style={{ padding: '1rem', textAlign: 'right', fontWeight: 600 }}>原価</th>
                          <th style={{ padding: '1rem', textAlign: 'right', fontWeight: 600 }}>販売価</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>更新日</th>
                          <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredInventory.map((item) => (
                          <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '1rem', fontWeight: 600 }}>{item.sku}</td>
                            <td style={{ padding: '1rem' }}>{item.name}</td>
                            <td style={{ padding: '1rem', textAlign: 'center', fontSize: '12px', color: '#666' }}>{item.category}</td>
                            <td style={{ padding: '1rem', textAlign: 'center', fontWeight: 600, color: item.qty < item.minQty ? '#dc3545' : '#28a745' }}>
                              {item.qty}個
                            </td>
                            <td style={{ padding: '1rem', textAlign: 'center', color: '#999' }}>{item.minQty}個</td>
                            <td style={{ padding: '1rem', textAlign: 'center', fontSize: '12px' }}>{item.warehouse}</td>
                            <td style={{ padding: '1rem', textAlign: 'right' }}>¥{item.costPrice.toLocaleString()}</td>
                            <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 600, color: '#007bff' }}>¥{item.sellPrice.toLocaleString()}</td>
                            <td style={{ padding: '1rem', textAlign: 'center', fontSize: '12px', color: '#999' }}>{item.updated}</td>
                            <td style={{ padding: '1rem', textAlign: 'center' }}>
                              <button
                                onClick={() => handleEdit(item)}
                                style={{ padding: '0.4rem 0.8rem', background: '#ffc107', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '0.5rem', fontSize: '12px' }}
                              >
                                編集
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                style={{ padding: '0.4rem 0.8rem', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                              >
                                削除
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'batch' && (
                <div style={{ maxWidth: '600px' }}>
                  <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '16px', fontWeight: 700 }}>📤 CSV インポート / エクスポート</h3>
                  <div style={{ background: '#f0f8ff', border: '2px dashed #007bff', borderRadius: '8px', padding: '3rem', textAlign: 'center', marginBottom: '2rem' }}>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                      CSVファイルをドラッグ＆ドロップするか、<br />
                      <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                        ファイルを選択
                      </button>
                    </p>
                  </div>
                  <button style={{ width: '100%', padding: '0.75rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, marginBottom: '1rem' }}>
                    📥 現在の在庫をエクスポート
                  </button>
                  <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '6px', fontSize: '12px' }}>
                    <p style={{ margin: 0, fontWeight: 600, marginBottom: '0.5rem' }}>📋 CSV フォーマット</p>
                    <p style={{ margin: 0, color: '#666', fontFamily: 'monospace' }}>
                      SKU,商品名,カテゴリ,数量,最小値,最大値,原価,販売価,倉庫
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'adjust' && (
                <div style={{ maxWidth: '500px' }}>
                  <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '16px', fontWeight: 700 }}>🔧 在庫調整</h3>
                  <form style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>商品選択</label>
                      <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }}>
                        <option>— 選択してください —</option>
                        {inventory.map(item => <option key={item.id}>{item.sku} - {item.name}</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>調整種類</label>
                      <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }}>
                        <option>在庫増加</option>
                        <option>在庫減少</option>
                        <option>棚卸し（数量入力）</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>数量</label>
                      <input type="number" placeholder="0" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>理由・備考</label>
                      <textarea placeholder="例：棚卸し実施、破損品処理など" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', minHeight: '100px' }} />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                      ✅ 在庫調整を確定
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* 登録・編集モーダル */}
        {showRegisterModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '600px',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}>
              {/* モーダルヘッダー */}
              <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700 }}>
                  {editingId ? '📝 商品編集' : '➕ 商品登録'}
                </h2>
                <button
                  onClick={() => setShowRegisterModal(false)}
                  style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>

              {/* モーダルコンテンツ */}
              <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>SKU *</label>
                    <input
                      type="text"
                      required
                      value={formData.sku}
                      onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                      placeholder="MCU-001"
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>商品名 *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="商品名を入力"
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>カテゴリ *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    >
                      <option>— 選択 —</option>
                      <option>IC・マイコン</option>
                      <option>センサー</option>
                      <option>制御基板</option>
                      <option>その他</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>倉庫 *</label>
                    <select
                      required
                      value={formData.warehouse}
                      onChange={(e) => setFormData({ ...formData, warehouse: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    >
                      <option>— 選択 —</option>
                      <option>A倉庫</option>
                      <option>B倉庫</option>
                      <option>C倉庫</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>現在庫 *</label>
                    <input
                      type="number"
                      required
                      value={formData.qty}
                      onChange={(e) => setFormData({ ...formData, qty: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>最小値 *</label>
                    <input
                      type="number"
                      required
                      value={formData.minQty}
                      onChange={(e) => setFormData({ ...formData, minQty: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>最大値 *</label>
                    <input
                      type="number"
                      required
                      value={formData.maxQty}
                      onChange={(e) => setFormData({ ...formData, maxQty: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>原価 (円) *</label>
                    <input
                      type="number"
                      required
                      value={formData.costPrice}
                      onChange={(e) => setFormData({ ...formData, costPrice: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '0.5rem' }}>販売価格 (円) *</label>
                    <input
                      type="number"
                      required
                      value={formData.sellPrice}
                      onChange={(e) => setFormData({ ...formData, sellPrice: parseInt(e.target.value) })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      background: '#007bff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    ✅ 保存
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRegisterModal(false)}
                    style={{
                      flex: 1,
                      padding: '0.75rem',
                      background: '#6c757d',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    ✕ キャンセル
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
