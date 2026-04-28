import { useTranslation } from 'react-i18next';

const PLATFORMS = [
  {
    name: 'Trendyol',
    color: '#F27A1A',
    bg: '#FFF5EE',
    emoji: '🛍️',
    desc: 'Türkiye\'nin #1 Pazaryeri',
  },
  {
    name: 'Hepsiburada',
    color: '#FF6000',
    bg: '#FFF4EE',
    emoji: '🏪',
    desc: 'Milyonlarca Alıcı',
  },
  {
    name: 'Amazon',
    color: '#FF9900',
    bg: '#FFFBF0',
    emoji: '📦',
    desc: 'Global Pazaryeri',
  },
  {
    name: 'Etsy',
    color: '#F1641E',
    bg: '#FFF5EE',
    emoji: '🎨',
    desc: 'El Yapımı & Vintage',
  },
  {
    name: 'ÇiçekSepeti',
    color: '#E91E63',
    bg: '#FFF0F5',
    emoji: '🌸',
    desc: 'Hızlı Teslimat',
  },
  {
    name: 'Instagram',
    color: '#E1306C',
    bg: '#FFF0F5',
    emoji: '📸',
    desc: 'Sosyal Ticaret',
  },
];

export default function PlatformsSection() {
  const { t } = useTranslation();

  return (
    <section id="platforms" style={{ padding: '5rem 0', background: '#f8f8f8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('platforms.title')}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t('platforms.subtitle')}
          </p>
        </div>

        {/* Platform Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.2rem',
          maxWidth: '900px',
          margin: '0 auto',
        }} className="platform-grid">
          {PLATFORMS.map((platform, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '2px solid #e8e8e8',
              transition: 'all 0.3s ease',
              cursor: 'default',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = platform.color;
                e.currentTarget.style.transform = 'translateY(-4px)';
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
              <div style={{
                fontSize: '2rem', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: platform.bg, borderRadius: '12px', flexShrink: 0,
              }}>
                {platform.emoji}
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1rem', color: '#111', marginBottom: '0.2rem' }}>
                  {platform.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#888' }}>
                  {platform.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div style={{
          textAlign: 'center', marginTop: '2.5rem',
          background: 'white', borderRadius: '12px', padding: '1.2rem 2rem',
          border: '1px solid #e8e8e8', maxWidth: '500px', margin: '2.5rem auto 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
        }}>
          <span style={{ fontSize: '1.2rem' }}>🎯</span>
          <p style={{ color: '#555', fontSize: '0.9rem', margin: 0, fontWeight: '500' }}>
            Aynı ürün listesinde en dikkat çeken <strong style={{ color: 'var(--red)' }}>sen ol</strong>.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .platform-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .platform-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
