import { useTranslation } from 'react-i18next';
import { Play, MonitorPlay } from 'lucide-react';

// 5 vertical + 1 horizontal placeholder videos
const VERTICAL_VIDEOS = [
  { id: 'v1', label: 'Trendyol Reels', duration: '0:15' },
  { id: 'v2', label: 'TikTok Ad', duration: '0:20' },
  { id: 'v3', label: 'Instagram Story', duration: '0:15' },
  { id: 'v4', label: 'Fashion Reels', duration: '0:18' },
  { id: 'v5', label: 'Product Reveal', duration: '0:12' },
];

export default function VideoSection() {
  const { t } = useTranslation();

  return (
    <section id="videos" style={{ padding: '5rem 0', background: '#0f0f0f' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.2)',
            color: 'var(--red-light)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Video İçerikler</span>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '0.75rem' }}>
            {t('videos.title')}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
            {t('videos.subtitle')}
          </p>
        </div>

        {/* Featured Horizontal Video */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
          borderRadius: '20px', overflow: 'hidden',
          border: '1px solid rgba(229,0,26,0.25)',
          marginBottom: '2rem', position: 'relative',
          maxWidth: '900px', margin: '0 auto 2rem',
        }}>
          <div style={{ aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', position: 'relative' }}>
            {/* Animated background dots */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(229,0,26,0.15) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            {/* Play button */}
            <div style={{
              width: '72px', height: '72px',
              background: 'rgba(229,0,26,0.9)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 0 30px rgba(229,0,26,0.5), 0 0 60px rgba(229,0,26,0.2)',
              cursor: 'pointer', transition: 'transform 0.3s',
              zIndex: 1,
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Play size={28} fill="white" color="white" style={{ marginLeft: '4px' }} />
            </div>
            <div style={{
              background: 'rgba(229,0,26,0.15)', border: '1px solid rgba(229,0,26,0.3)',
              color: 'rgba(229,0,26,0.9)', padding: '0.4rem 1rem', borderRadius: '20px',
              fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.75rem', zIndex: 1,
            }}>
              <MonitorPlay size={12} style={{ display: 'inline', marginRight: '4px' }} />
              {t('videos.horizontal_label')}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', zIndex: 1 }}>
              {t('videos.coming_soon')}
            </p>

            {/* Corner Badge */}
            <div style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(229,0,26,0.2)', border: '1px solid rgba(229,0,26,0.4)',
              color: 'var(--red)', padding: '0.3rem 0.7rem', borderRadius: '6px',
              fontSize: '0.7rem', fontWeight: '700',
            }}>16:9 Format</div>
          </div>
        </div>

        {/* Vertical Videos Grid (5 items) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto',
        }} className="video-grid">
          {VERTICAL_VIDEOS.map((video, i) => (
            <div key={video.id} style={{
              background: 'linear-gradient(160deg, #1a1a2e, #0f1625)',
              borderRadius: '14px', overflow: 'hidden',
              border: '1px solid rgba(229,0,26,0.2)',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--red)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(229,0,26,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(229,0,26,0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Vertical placeholder (9:16 ratio) */}
              <div style={{
                aspectRatio: '9/16',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '1rem', position: 'relative',
                backgroundImage: `
                  radial-gradient(rgba(229,0,26,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}>
                {/* Number badge */}
                <div style={{
                  position: 'absolute', top: '0.6rem', left: '0.6rem',
                  background: 'rgba(229,0,26,0.2)', color: 'var(--red)',
                  fontSize: '0.6rem', fontWeight: '800',
                  padding: '0.2rem 0.5rem', borderRadius: '4px',
                }}>{String(i + 1).padStart(2, '0')}</div>

                <div style={{
                  width: '40px', height: '40px',
                  background: 'rgba(229,0,26,0.2)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '0.75rem',
                }}>
                  <Play size={16} fill="rgba(229,0,26,0.8)" color="rgba(229,0,26,0.8)" />
                </div>

                <div style={{
                  background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(229,0,26,0.3)',
                  color: 'var(--red)', padding: '0.2rem 0.5rem', borderRadius: '10px',
                  fontSize: '0.55rem', fontWeight: '700', marginBottom: '0.5rem',
                }}>
                  {t('videos.vertical_label')}
                </div>

                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', textAlign: 'center' }}>
                  {video.label}
                </p>
              </div>

              {/* Duration Bar */}
              <div style={{
                padding: '0.5rem 0.75rem',
                borderTop: '1px solid rgba(229,0,26,0.1)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem' }}>9:16</span>
                <span style={{ color: 'rgba(229,0,26,0.7)', fontSize: '0.6rem', fontWeight: '700' }}>{video.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center', color: 'rgba(255,255,255,0.3)',
          fontSize: '0.8rem', marginTop: '1.5rem', fontStyle: 'italic',
        }}>
          * Videolar yakında eklenecek — Demo içerikler gösterilmektedir.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .video-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
