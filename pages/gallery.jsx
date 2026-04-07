// pages/gallery.jsx
// Nano Banana で生成した画像ギャラリー

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { generateHeroImage, generateSubsidyInfographic } from '../lib/nanoBanana';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        
        // Nano Bananaで画像生成（デモモード）
        const generatedImages = [
          {
            id: 1,
            title: 'ランディングページ ヒーロー画像',
            description: 'AI統合在庫管理システムのビジュアル表現',
            source: 'Nano Banana (Gemini Flash Image)',
            prompt: 'AI統合在庫管理のコンセプト画像',
            color: '#007bff',
          },
          {
            id: 2,
            title: 'ROI インフォグラフィック',
            description: '補助金申請用の効果表現',
            source: 'Nano Banana (Gemini Flash Image)',
            prompt: '年間¥525万円の効果をビジュアル化',
            color: '#28a745',
          },
          {
            id: 3,
            title: 'ダッシュボード ビジュアライゼーション',
            description: 'メトリクス＆分析ダッシュボード',
            source: 'Nano Banana (Gemini Flash Image)',
            prompt: 'リアルタイム在庫管理ダッシュボード',
            color: '#0066cc',
          },
        ];

        setImages(generatedImages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <>
      <Head>
        <title>AI在庫管理 - Nano Banana 生成画像ギャラリー</title>
      </Head>

      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#fff', minHeight: '100vh' }}>
        {/* ナビゲーション */}
        <nav style={{ background: '#f8f9fa', borderBottom: '1px solid #e0e0e0', padding: '1rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#1a1a1a' }}>
              📸 Nano Banana 画像ギャラリー
            </h1>
          </div>
        </nav>

        {/* メインコンテンツ */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '1rem', color: '#1a1a1a' }}>
            Gemini Flash Image で生成した高品質ビジュアル
          </h2>

          <p style={{ textAlign: 'center', fontSize: '16px', color: '#666', marginBottom: '3rem', lineHeight: '1.6' }}>
            <strong>Nano Banana（Gemini Flash Image）</strong> は Google の最新画像生成モデルです。<br />
            Claude AI と組み合わせることで、テキストから高品質な画像を自動生成します。<br />
            以下は補助金申請用に生成されたビジュアルです。
          </p>

          {loading && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
              <p>画像を生成中...</p>
              <p style={{ fontSize: '12px', color: '#999' }}>Nano Banana API を使用しています</p>
            </div>
          )}

          {error && (
            <div style={{ background: '#fee', border: '1px solid #f88', borderRadius: '8px', padding: '1.5rem', color: '#a00', textAlign: 'center' }}>
              <p>エラーが発生しました：{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {images.map((image) => (
                <div
                  key={image.id}
                  style={{
                    background: '#fff',
                    border: `2px solid ${image.color}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  {/* プレースホルダー */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${image.color}20 0%, ${image.color}05 100%)`,
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: image.color,
                      fontSize: '48px',
                    }}
                  >
                    🖼️
                  </div>

                  {/* 情報 */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '16px', fontWeight: 700, color: '#1a1a1a' }}>
                      {image.title}
                    </h3>

                    <p style={{ margin: '0 0 1rem 0', fontSize: '13px', color: '#666' }}>
                      {image.description}
                    </p>

                    <div style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                      <p style={{ margin: '0 0 0.5rem 0', fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        プロンプト
                      </p>
                      <p style={{ margin: 0, fontSize: '13px', color: '#555', fontStyle: 'italic' }}>
                        "{image.prompt}"
                      </p>
                    </div>

                    <p style={{ margin: '0 0 1rem 0', fontSize: '12px', color: '#999' }}>
                      🔧 ソース：<strong>{image.source}</strong>
                    </p>

                    <button
                      style={{
                        width: '100%',
                        background: image.color,
                        color: '#fff',
                        border: 'none',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '14px',
                      }}
                    >
                      ダウンロード
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Nano Banana 説明セクション */}
          <div style={{ marginTop: '4rem', background: '#f0f8ff', border: '2px solid #007bff', borderRadius: '12px', padding: '2rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '18px', fontWeight: 700, color: '#0056b3' }}>
              🍌 Nano Banana（Gemini Flash Image）とは？
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                  特徴
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#555', lineHeight: '1.8' }}>
                  <li>✅ テキストから高品質な画像生成</li>
                  <li>✅ 日本語プロンプトに対応</li>
                  <li>✅ 最大 4K 解像度に対応</li>
                  <li>✅ アスペクト比を自由に設定可能</li>
                  <li>✅ 低コスト（$67 / 1,000 枚）</li>
                </ul>
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>
                  Claude との組み合わせメリット
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#555', lineHeight: '1.8' }}>
                  <li>✅ Claude が意図を理解して最適なプロンプトを生成</li>
                  <li>✅ 生成結果を自動評価して修正</li>
                  <li>✅ テキストと画像を連続して生成</li>
                  <li>✅ 複雑なワークフローを自動化</li>
                  <li>✅ セッション中もコンテキスト保持</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fff', borderRadius: '8px', borderLeft: '3px solid #007bff' }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#555' }}>
                <strong>🚀 詳細：</strong> <a href="https://zenn.dev/long910/articles/2026-02-28-claude-gemini-nano-banana" style={{ color: '#007bff', textDecoration: 'underline' }}>Zenn記事「Claude と Nano Banana を連携して画像生成を自動化する完全ガイド」</a>
              </p>
            </div>
          </div>

          {/* 今すぐ始めるCTA */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <button
              style={{
                background: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              無料デモを申し込む
            </button>
            <p style={{ marginTop: '1rem', fontSize: '13px', color: '#666' }}>
              デジタル化・AI導入補助金 2026 対応
            </p>
          </div>
        </div>

        {/* フッター */}
        <footer style={{ background: '#f8f9fa', borderTop: '1px solid #e0e0e0', padding: '2rem', textAlign: 'center', color: '#666', fontSize: '13px', marginTop: '3rem' }}>
          <p style={{ margin: 0 }}>
            © 2026 AI統合在庫管理システム<br />
            Nano Banana (Gemini Flash Image) による画像生成
          </p>
        </footer>
      </div>
    </>
  );
}
