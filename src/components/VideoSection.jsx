import { useState, useRef } from 'react';

const THUMB_Q = ['maxresdefault', 'sddefault', 'hqdefault'];

function YouTubePlayer({ videoId, isVertical = false, label = '' }) {
  const [playing, setPlaying] = useState(false);
  const [thumbIdx, setThumbIdx] = useState(0);
  const iframeRef = useRef(null);

  const thumbUrl = `https://img.youtube.com/vi/${videoId}/${THUMB_Q[thumbIdx]}.jpg`;

  const embedUrl = [
    `https://www.youtube.com/embed/${videoId}`,
    '?autoplay=1',
    '&controls=0',
    '&modestbranding=1',
    '&rel=0',
    '&showinfo=0',
    '&iv_load_policy=3',
    '&disablekb=1',
    '&playsinline=1',
    '&fs=0',
    '&cc_load_policy=0',
    '&enablejsapi=1',
    '&vq=hd1080',
    '&hd=1',
  ].join('');

  // After iframe loads → request 1080p via postMessage
  const onLoad = () => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'setPlaybackQuality', args: ['hd1080'] }),
        '*'
      );
    } catch (_) {}
  };

  return (
    <div
      id={`yt-${videoId}`}
      onClick={() => !playing && setPlaying(true)}
      style={{
        position: 'relative',
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#000',
        aspectRatio: isVertical ? '9/16' : '16/9',
        cursor: playing ? 'default' : 'pointer',
        boxShadow: '0 8px 40px rgba(0,0,0,0.55)',
        width: '100%',
      }}
    >
      {!playing ? (
        <>
          <img
            src={thumbUrl}
            alt={label}
            draggable={false}
            onError={() => thumbIdx < THUMB_Q.length - 1 && setThumbIdx(i => i + 1)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.72)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.3))' }} />

          {/* Only triangle play icon */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                width: isVertical ? '54px' : '70px', height: isVertical ? '54px' : '70px',
                background: 'rgba(229,0,26,0.92)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 0 10px rgba(229,0,26,0.18), 0 8px 30px rgba(0,0,0,0.45)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <svg width={isVertical ? '20' : '26'} height={isVertical ? '20' : '26'} viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>

          {label && (
            <div style={{
              position: 'absolute', bottom: '0.75rem', left: '0.75rem',
              background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)',
              color: 'white', fontSize: '0.7rem', fontWeight: '600',
              padding: '0.25rem 0.6rem', borderRadius: '6px',
            }}>{label}</div>
          )}
        </>
      ) : (
        <>
          {/* iframe — slightly oversized to clip bottom bar */}
          <iframe
            ref={iframeRef}
            src={embedUrl}
            onLoad={onLoad}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title={label}
            style={{
              position: 'absolute',
              top: '-3%', left: '-2%',
              width: '104%', height: '106%',
              border: 'none',
            }}
          />
          {/* ── Black gradient masks: hide title bar (top) & branding (bottom) ── */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: isVertical ? '55px' : '70px',
            background: 'linear-gradient(to bottom, #000 55%, transparent 100%)',
            zIndex: 4, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: isVertical ? '45px' : '55px',
            background: 'linear-gradient(to top, #000 50%, transparent 100%)',
            zIndex: 4, pointerEvents: 'none',
          }} />
        </>
      )}
    </div>
  );
}

function PortfolioCard({ src, label, category, badge }) {
  return (
    <div
      style={{
        position: 'relative', borderRadius: '14px', overflow: 'hidden',
        background: '#111', cursor: 'zoom-in',
        boxShadow: '0 8px 30px rgba(0,0,0,0.4)', transition: 'transform 0.3s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 60%)',
        padding: '1.5rem 0.75rem 0.75rem',
      }}>
        <div style={{
          background: 'var(--red)', color: 'white', fontSize: '0.62rem',
          fontWeight: '800', letterSpacing: '0.05em', padding: '0.2rem 0.5rem',
          borderRadius: '4px', display: 'inline-block', marginBottom: '0.3rem', textTransform: 'uppercase',
        }}>{badge || 'AI Dönüşüm'}</div>
        <div style={{ color: 'white', fontWeight: '700', fontSize: '0.82rem' }}>{label}</div>
        {category && <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem' }}>{category}</div>}
      </div>
    </div>
  );
}

const PORTFOLIO_ITEMS = [
  { src: '/images/portfolio-bag.png', label: 'Yeşil Deri Çanta', category: 'Aksesuar', badge: 'AI Stüdyo' },
  { src: '/images/portfolio-shoes.png', label: 'Deri Sneaker', category: 'Ayakkabı', badge: 'Lifestyle' },
  { src: '/images/portfolio-jacket.png', label: 'Deri Ceket', category: 'Giyim', badge: 'AI Manken' },
];

const SHORTS = [
  { id: 'py8fFl3CXJY', label: 'Short #1' },
  { id: 'D4WchfbEusg', label: 'Short #2' },
  { id: 'dAxE0RjEmOE', label: 'Short #3' },
  { id: 'DkJbYHk86RI', label: 'Short #4' },
];

export default function VideoSection() {
  const [tab, setTab] = useState('videos');

  return (
    <section id="videos" style={{ padding: '5rem 0', background: '#0A0A0A' }}>
      <div className="container">

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

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {[
            { key: 'portfolio', label: '🖼️ Görsel Referanslar' },
            { key: 'videos', label: '🎬 Video Referanslar' },
          ].map(t => (
            <button key={t.key} id={`tab-${t.key}`} onClick={() => setTab(t.key)} style={{
              padding: '0.55rem 1.25rem', borderRadius: '25px',
              border: `1.5px solid ${tab === t.key ? 'var(--red)' : 'rgba(255,255,255,0.12)'}`,
              background: tab === t.key ? 'var(--gradient-red)' : 'rgba(255,255,255,0.04)',
              color: 'white', fontWeight: '700', fontSize: '0.85rem',
              cursor: 'pointer', transition: 'all 0.25s',
            }}>{t.label}</button>
          ))}
        </div>

        {/* GÖRSEL REFERANSLAR */}
        {tab === 'portfolio' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }} className="portfolio-grid">
              {PORTFOLIO_ITEMS.map((item, i) => <PortfolioCard key={i} {...item} />)}
            </div>

            <div style={{
              marginTop: '2rem',
              background: 'linear-gradient(135deg, rgba(229,0,26,0.12), rgba(229,0,26,0.04))',
              border: '1.5px solid rgba(229,0,26,0.25)', borderRadius: '18px',
              padding: '2rem 2.5rem', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ color: 'var(--red)', fontWeight: '800', fontSize: '1rem', marginBottom: '0.4rem', fontFamily: 'Outfit, sans-serif' }}>
                  🎯 Ürününüz de bu listede olabilir.
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
                  Sadece bir fotoğraf gönderin — biz gerisini halledelim. Rakiplerinizin önüne geçmek için
                  ihtiyacınız olan tek şey <strong style={{ color: 'white' }}>doğru görsel</strong>.
                </p>
              </div>
              <a href="https://wa.me/905550570368?text=Merhaba, ürün görselim için teklif almak istiyorum."
                id="portfolio-cta-wa" rel="noopener noreferrer" target="_blank"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: '#25D366', color: 'white', padding: '0.75rem 1.5rem',
                  borderRadius: '10px', fontWeight: '800', fontSize: '0.9rem',
                  textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                  boxShadow: '0 4px 20px rgba(37,211,102,0.35)', transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                📲 Hemen Teklif Al
              </a>
            </div>
          </div>
        )}

        {/* VİDEO REFERANSLAR */}
        {tab === 'videos' && (
          <div>
            {/* Horizontal */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(229,0,26,0.15)', color: 'var(--red)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>
                  🎬 Öne Çıkan Video
                </div>
                <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>16:9 · Yatay Format</div>
              </div>
              <YouTubePlayer videoId="UP4Pjh81E4w" isVertical={false} label="Reklam Videosu" />
            </div>

            {/* Shorts */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(229,0,26,0.15)', color: 'var(--red)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>
                📱 Short Videolar
              </div>
              <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>9:16 · Dikey · Instagram & TikTok</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }} className="shorts-grid">
              {SHORTS.map(s => <YouTubePlayer key={s.id} videoId={s.id} isVertical={true} label={s.label} />)}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: repeat(2,1fr) !important; }
          .shorts-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
          .shorts-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
