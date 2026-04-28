import { useTranslation } from 'react-i18next';
import { MessageCircle, Check, Star, Zap } from 'lucide-react';

export default function PackagesSection() {
  const { t } = useTranslation();
  const items = t('packages.items', { returnObjects: true }) || [];

  return (
    <section id="packages" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Fiyatlandırma</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('packages.title')}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t('packages.subtitle')}
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem', alignItems: 'start',
          maxWidth: '960px', margin: '0 auto',
        }} className="packages-grid">
          {items.map((pkg, i) => {
            const isPro = i === 1;
            return (
              <div key={i} style={{
                background: isPro ? 'linear-gradient(160deg, #0A0A0A, #1a0005, #0A0A0A)' : 'white',
                borderRadius: '20px', padding: '2.25rem 2rem',
                border: isPro ? '2px solid var(--red)' : '2px solid #e8e8e8',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s',
                boxShadow: isPro ? 'var(--glow-red), 0 20px 60px rgba(0,0,0,0.15)' : 'none',
                transform: isPro ? 'scale(1.04)' : 'scale(1)',
              }}
                onMouseEnter={e => {
                  if (!isPro) {
                    e.currentTarget.style.borderColor = 'var(--red)';
                    e.currentTarget.style.boxShadow = '0 4px 30px rgba(229,0,26,0.1)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isPro) {
                    e.currentTarget.style.borderColor = '#e8e8e8';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Popular Badge */}
                {isPro && (
                  <div style={{
                    position: 'absolute', top: '-1px', right: '1.5rem',
                    background: 'var(--gradient-red)', color: 'white',
                    fontSize: '0.65rem', fontWeight: '800', padding: '0.3rem 0.8rem',
                    borderRadius: '0 0 8px 8px', letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                  }}>
                    <Star size={10} fill="white" />
                    {t('packages.badge')}
                  </div>
                )}

                {/* Package Icon */}
                <div style={{
                  width: '48px', height: '48px',
                  background: isPro ? 'rgba(229,0,26,0.2)' : 'rgba(229,0,26,0.08)',
                  borderRadius: '12px', marginBottom: '1.25rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--red)',
                }}>
                  {i === 0 ? <Zap size={22} /> : i === 1 ? <Star size={22} /> : <Check size={22} />}
                </div>

                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontWeight: '900', fontSize: '1.3rem',
                  marginBottom: '0.4rem',
                  color: isPro ? 'white' : '#111',
                }}>
                  {pkg.name}
                </h3>
                <p style={{ color: isPro ? 'rgba(255,255,255,0.5)' : '#888', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  {pkg.desc}
                </p>

                {/* Features */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
                  {pkg.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: isPro ? 'rgba(255,255,255,0.8)' : '#444' }}>
                      <div style={{
                        width: '18px', height: '18px', borderRadius: '50%',
                        background: 'rgba(229,0,26,0.15)', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Check size={10} color="var(--red)" strokeWidth={3} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="https://wa.me/905550570368" id={`pkg-cta-${i}`}
                  rel="noopener noreferrer" target="_blank"
                  className={isPro ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    display: 'flex', justifyContent: 'center', width: '100%',
                    color: isPro ? 'white' : (i === 0 ? 'var(--red)' : '#333'),
                    borderColor: 'var(--red)',
                    textDecoration: 'none',
                  }}>
                  <MessageCircle size={16} />
                  {t('packages.cta')}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .packages-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
