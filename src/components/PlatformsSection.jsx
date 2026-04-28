import { useTranslation } from 'react-i18next';

const PLATFORMS = [
  // Turkish
  { name: 'Trendyol', flag: '🇹🇷', color: '#F27A1A', bg: '#FFF5EE', desc: 'Türkiye #1', category: 'TR' },
  { name: 'Hepsiburada', flag: '🇹🇷', color: '#FF6000', bg: '#FFF4EE', desc: 'Türkiye', category: 'TR' },
  { name: 'ÇiçekSepeti', flag: '🇹🇷', color: '#E91E63', bg: '#FFF0F5', desc: 'Türkiye', category: 'TR' },
  // Global Giants
  { name: 'Amazon', flag: '🌍', color: '#FF9900', bg: '#FFFBF0', desc: 'Global #1', category: 'GLOBAL' },
  { name: 'eBay', flag: '🌍', color: '#E53238', bg: '#FFF0F0', desc: 'Global', category: 'GLOBAL' },
  { name: 'Etsy', flag: '🌍', color: '#F1641E', bg: '#FFF5EE', desc: 'Global / El yapımı', category: 'GLOBAL' },
  // Europe
  { name: 'Zalando', flag: '🇩🇪', color: '#FF6900', bg: '#FFF4EE', desc: 'Avrupa / Moda', category: 'EU' },
  { name: 'ASOS', flag: '🇬🇧', color: '#2d2d2d', bg: '#f5f5f5', desc: 'UK / Dünya', category: 'EU' },
  { name: 'Otto', flag: '🇩🇪', color: '#CC0000', bg: '#FFF0F0', desc: 'Almanya', category: 'EU' },
  // Middle East
  { name: 'Noon', flag: '🇦🇪', color: '#FFEE00', bg: '#FFFFEE', desc: 'BAE / S. Arabistan', category: 'ME', textColor: '#333' },
  { name: 'Namshi', flag: '🇦🇪', color: '#000000', bg: '#f5f5f5', desc: 'Orta Doğu', category: 'ME' },
  // Global others
  { name: 'Shopify', flag: '🌍', color: '#96BF48', bg: '#F5FFEE', desc: 'Global D2C', category: 'GLOBAL' },
  { name: 'Walmart', flag: '🇺🇸', color: '#0071CE', bg: '#EEF5FF', desc: 'Amerika', category: 'US' },
  { name: 'AliExpress', flag: '🌏', color: '#FF4747', bg: '#FFF0F0', desc: 'Asya / Global', category: 'GLOBAL' },
  { name: 'Wish', flag: '🌍', color: '#2FB7EC', bg: '#EEF9FF', desc: 'Global', category: 'GLOBAL' },
  { name: 'MercadoLibre', flag: '🌎', color: '#FFE600', bg: '#FFFBEE', desc: 'Latin Amerika', category: 'LATAM', textColor: '#333' },
];

const CATEGORY_LABELS = {
  TR: { label: 'Türkiye', color: '#E5001A', bg: 'rgba(229,0,26,0.08)' },
  GLOBAL: { label: 'Global', color: '#2563EB', bg: 'rgba(37,99,235,0.08)' },
  EU: { label: 'Avrupa', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
  ME: { label: 'Orta Doğu', color: '#D97706', bg: 'rgba(217,119,6,0.08)' },
  US: { label: 'Amerika', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
  LATAM: { label: 'Latam', color: '#DB2777', bg: 'rgba(219,39,119,0.08)' },
};

export default function PlatformsSection() {
  const { t } = useTranslation();

  return (
    <section id="platforms" style={{ padding: '5rem 0', background: 'white', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Platformlar</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('platforms.title')}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
            {t('platforms.subtitle')}
          </p>

          {/* Category Filter Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {Object.entries(CATEGORY_LABELS).map(([key, val]) => (
              <span key={key} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                background: val.bg, color: val.color,
                padding: '0.3rem 0.75rem', borderRadius: '20px',
                fontSize: '0.75rem', fontWeight: '700',
                border: `1px solid ${val.color}30`,
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: val.color, display: 'inline-block' }} />
                {val.label}
              </span>
            ))}
          </div>
        </div>

        {/* Platform Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }} className="platform-grid">
          {PLATFORMS.map((platform, i) => {
            const cat = CATEGORY_LABELS[platform.category];
            return (
              <div key={i} style={{
                background: 'white',
                borderRadius: '14px',
                padding: '1.25rem',
                border: '1.5px solid #e8e8e8',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = platform.color;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 8px 30px ${platform.color}25`;
                  e.currentTarget.style.background = platform.bg;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e8e8e8';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'white';
                }}
              >
                {/* Category dot */}
                <div style={{
                  position: 'absolute', top: '0.6rem', right: '0.6rem',
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: cat.color, opacity: 0.6,
                }} />

                {/* Platform Name & Flag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{platform.flag}</span>
                  <span style={{
                    fontWeight: '800', fontSize: '0.95rem',
                    color: platform.textColor || platform.color,
                    fontFamily: 'Outfit, sans-serif',
                  }}>{platform.name}</span>
                </div>

                <div style={{
                  fontSize: '0.72rem', color: '#999', fontWeight: '500',
                }}>
                  {platform.desc}
                </div>

                {/* Bottom accent line */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '2px', background: platform.color, opacity: 0,
                  transition: 'opacity 0.3s',
                }} className="platform-accent" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #0A0A0A, #1a0005)',
          borderRadius: '20px',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          border: '1px solid rgba(229,0,26,0.25)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        }}>
          <div>
            <div style={{ color: 'white', fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.4rem', fontFamily: 'Outfit, sans-serif' }}>
              🌍 16+ Platformda Öne Çık
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', margin: 0 }}>
              Türkiye'den dünyaya — Her platformun görsel standartlarına uygun içerik üretimi.
            </p>
          </div>
          <a href="https://wa.me/905550570368" id="platform-cta"
            rel="noopener noreferrer" target="_blank"
            className="btn-primary" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
            Hemen Başla →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .platform-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 640px) { .platform-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        .platform-card:hover .platform-accent { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
