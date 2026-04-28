import { useState } from 'react';

/* ────────────────────────────────
   Clean YouTube Player Component
   Shows custom thumbnail + play btn.
   On click → iframe with controls=0
──────────────────────────────────*/
const THUMB_QUALITY = ['maxresdefault', 'sddefault', 'hqdefault'];

function YouTubePlayer({ videoId, isVertical = false, label = '' }) {
  const [playing, setPlaying] = useState(false);
  const [thumbIdx, setThumbIdx] = useState(0);

  const thumbUrl = `https://img.youtube.com/vi/${videoId}/${THUMB_QUALITY[thumbIdx]}.jpg`;

  // Embed URL — all UI-hiding params
  const embedUrl = [
    `https://www.youtube.com/embed/${videoId}`,
    '?autoplay=1',
    '&controls=0',          // hide control bar
    '&modestbranding=1',    // hide YT logo
    '&rel=0',               // no related videos
    '&showinfo=0',          // no title overlay
    '&iv_load_policy=3',    // no annotations
    '&disablekb=1',         // no keyboard shortcuts
    '&playsinline=1',       // play inline on iOS
    '&loop=0',
    '&fs=0',                // no fullscreen button
    '&cc_load_policy=0',    // no captions
  ].join('');

  return (
    <div
      id={`yt-${videoId}`}
      style={{
        position: 'relative',
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#000',
        aspectRatio: isVertical ? '9/16' : '16/9',
        cursor: playing ? 'default' : 'pointer',
        boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
        width: '100%',
      }}
      onClick={() => !playing && setPlaying(true)}
    >
      {!playing ? (
        <>
          {/* Thumbnail */}
          <img
            src={thumbUrl}
            alt={label}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(0.75)',
            }}
            draggable={false}
            onError={() => {
              if (thumbIdx < THUMB_QUALITY.length - 1) setThumbIdx(i => i + 1);
            }}
          />

          {/* Dark overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)',
          }} />

          {/* Play Button — only a triangle, nothing else */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: isVertical ? '56px' : '72px',
              height: isVertical ? '56px' : '72px',
              background: 'rgba(229,0,26,0.92)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 0 8px rgba(229,0,26,0.2), 0 8px 30px rgba(0,0,0,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 0 0 12px rgba(229,0,26,0.3), 0 10px 40px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 0 8px rgba(229,0,26,0.2), 0 8px 30px rgba(0,0,0,0.4)';
              }}
            >
              {/* Triangle icon only */}
              <svg
                width={isVertical ? '20' : '26'}
                height={isVertical ? '20' : '26'}
                viewBox="0 0 24 24"
                fill="white"
                style={{ marginLeft: '3px' }}
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>

          {/* Label badge at bottom */}
          {label && (
            <div style={{
              position: 'absolute', bottom: '0.75rem', left: '0.75rem',
              background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
              color: 'white', fontSize: '0.7rem', fontWeight: '600',
              padding: '0.25rem 0.6rem', borderRadius: '6px',
            }}>
              {label}
            </div>
          )}
        </>
      ) : (
        /* ── Active iframe — slightly oversized to clip any remaining YT UI ── */
        <iframe
          src={embedUrl}
          style={{
            position: 'absolute',
            top: '-2%',
            left: '-2%',
            width: '104%',
            height: '104%',
            border: 'none',
            pointerEvents: 'auto',
          }}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          title={label}
          loading="lazy"
        />
      )}
    </div>
  );
}

/* ────────────────────────────────
   Portfolio Image Card (GIF slot)
──────────────────────────────────*/
function PortfolioCard({ src, label, category, badge }) {
  return (
    <div style={{
      position: 'relative', borderRadius: '14px', overflow: 'hidden',
      background: '#111', cursor: 'zoom-in',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
      transition: 'transform 0.3s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <img src={src} alt={label}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
        padding: '1.5rem 0.75rem 0.75rem',
      }}>
        <div style={{
          background: 'var(--red)', color: 'white',
          fontSize: '0.62rem', fontWeight: '800', letterSpacing: '0.05em',
          padding: '0.2rem 0.5rem', borderRadius: '4px',
          display: 'inline-block', marginBottom: '0.3rem',
          textTransform: 'uppercase',
        }}>
          {badge || 'AI Dönüşüm'}
        </div>
        <div style={{ color: 'white', fontWeight: '700', fontSize: '0.82rem' }}>
          {label}
        </div>
        {category && (
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem' }}>{category}</div>
        )}
      </div>
    </div>
  );
}


/* ════════════════════════════════
   MAIN VIDEO SECTION
════════════════════════════════ */
export default function VideoSection() {
  const [tab, setTab] = useState('videos'); // 'portfolio' | 'videos'

  const PORTFOLIO_ITEMS = [
    {
      src: '/images/portfolio-bag.png',
      label: 'Yeşil Deri Çanta',
      category: 'Aksesuar',
      badge: 'AI Stüdyo',
    },
    {
      src: '/images/portfolio-shoes.png',
      label: 'Deri Sneaker',
      category: 'Ayakkabı',
      badge: 'Lifestyle',
    },
    {
      src: '/images/portfolio-jacket.png',
      label: 'Deri Ceket',
      category: 'Giyim',
      badge: 'AI Manken',
    },
    // Kullanıcının kendi GIF'lerini buraya ekleyebilir
    // { src: '/images/your-gif.gif', label: 'Ürün Adı', category: 'Kategori', badge: 'AI Dönüşüm' },
  ];

  const SHORTS = [
    { id: 'py8fFl3CXJY', label: 'Ürün Videosu #1' },
    { id: 'D4WchfbEusg', label: 'Ürün Videosu #2' },
    { id: 'dAxE0RjEmOE', label: 'Ürün Videosu #3' },
    { id: 'DkJbYHk86RI', label: 'Ürün Videosu #4' },
  ];

  return (
    <section id="videos" style={{ padding: '5rem 0', background: '#0A0A0A' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.2)',
            color: '#FF4D6A', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Çalışma Örnekleri</span>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '0.75rem' }}>
            Gerçek Projelerden <span style={{ color: 'var(--red)' }}>Sonuçlar</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
            Müşterilerin ürünleri için ürettiğimiz görseller ve reklam videoları
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex', gap: '0.5rem', justifyContent: 'center',
          marginBottom: '2.5rem',
        }}>
          {[
            { key: 'portfolio', label: '🖼️ Görsel Örnekler' },
            { key: 'videos', label: '🎬 Video Örnekler' },
          ].map(t => (
            <button key={t.key} id={`tab-${t.key}`} onClick={() => setTab(t.key)} style={{
              padding: '0.55rem 1.25rem', borderRadius: '25px',
              border: `1.5px solid ${tab === t.key ? 'var(--red)' : 'rgba(255,255,255,0.12)'}`,
              background: tab === t.key ? 'var(--gradient-red)' : 'rgba(255,255,255,0.04)',
              color: 'white', fontWeight: '700', fontSize: '0.85rem',
              cursor: 'pointer', transition: 'all 0.25s',
            }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── PORTFOLIO TAB ── */}
        {tab === 'portfolio' && (
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
            }} className="portfolio-grid">
              {PORTFOLIO_ITEMS.map((item, i) => (
                <PortfolioCard key={i} {...item} />
              ))}
            </div>

            {/* Persuasive CTA Banner */}
            <div style={{
              marginTop: '2rem',
              background: 'linear-gradient(135deg, rgba(229,0,26,0.12), rgba(229,0,26,0.04))',
              border: '1.5px solid rgba(229,0,26,0.25)',
              borderRadius: '18px',
              padding: '2rem 2.5rem',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '1.5rem',
              flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ color: 'var(--red)', fontWeight: '800', fontSize: '1rem', marginBottom: '0.4rem', fontFamily: 'Outfit, sans-serif' }}>
                  🎯 Ürününüz de bu listede olabilir.
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
                  Sadece bir fotoğraf gönderin — biz gerisini halledelim.
                  Rakiplerinizin önüne geçmek için ihtiyacınız olan tek şey <strong style={{ color: 'white' }}>doğru görsel</strong>.
                </p>
              </div>
              <a href="https://wa.me/905550570368?text=Merhaba, ürün görselim için teklif almak istiyorum."
                id="portfolio-cta-wa" rel="noopener noreferrer" target="_blank"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: '#25D366', color: 'white',
                  padding: '0.75rem 1.5rem', borderRadius: '10px',
                  fontWeight: '800', fontSize: '0.9rem', textDecoration: 'none',
                  whiteSpace: 'nowrap', flexShrink: 0,
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                📲 Hemen Teklif Al
              </a>
            </div>
          </div>
        )}

        {/* ── VIDEOS TAB ── */}
        {tab === 'videos' && (
          <div>
            {/* ── Featured Horizontal Video ── */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  background: 'rgba(229,0,26,0.15)',
                  color: 'var(--red)', padding: '0.25rem 0.75rem',
                  borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700',
                }}>
                  🎬 Öne Çıkan Video
                </div>
                <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
                  16:9 · Yatay Format
                </div>
              </div>
              <YouTubePlayer
                videoId="UP4Pjh81E4w"
                isVertical={false}
                label="Reklam Videosu"
              />
            </div>

            {/* ── 4 Vertical Shorts ── */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '1rem',
            }}>
              <div style={{
                background: 'rgba(229,0,26,0.15)',
                color: 'var(--red)', padding: '0.25rem 0.75rem',
                borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700',
              }}>
                📱 Short Videolar
              </div>
              <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
                9:16 · Dikey Format · Instagram & TikTok
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
            }} className="shorts-grid">
              {SHORTS.map((s, i) => (
                <YouTubePlayer
                  key={s.id}
                  videoId={s.id}
                  isVertical={true}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .shorts-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .shorts-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
