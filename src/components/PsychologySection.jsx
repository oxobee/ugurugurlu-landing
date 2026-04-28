import { useTranslation } from 'react-i18next';
import { Eye, Clock, Target, Shield } from 'lucide-react';

const ICONS = [Eye, Clock, Target, Shield];

export default function PsychologySection() {
  const { t } = useTranslation();
  const items = t('psychology.items', { returnObjects: true }) || [];

  return (
    <section id="psychology" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Psikoloji</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('psychology.title')}
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem',
          maxWidth: '900px', margin: '0 auto',
        }} className="psych-grid">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i} style={{
                display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                background: 'white', border: '1px solid #e8e8e8', borderRadius: '16px',
                padding: '1.75rem', transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--red)';
                  e.currentTarget.style.boxShadow = '0 4px 25px rgba(229,0,26,0.08)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e8e8e8';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '50px', height: '50px', background: 'rgba(229,0,26,0.08)',
                  color: 'var(--red)', borderRadius: '12px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {Icon && <Icon size={22} />}
                </div>
                <div>
                  <h3 style={{ fontWeight: '800', fontSize: '1rem', marginBottom: '0.5rem', color: '#111' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key stat banner */}
        <div style={{
          maxWidth: '700px', margin: '3rem auto 0',
          background: 'linear-gradient(135deg, #0A0A0A, #1a0005)',
          borderRadius: '16px', padding: '2rem',
          border: '1px solid rgba(229,0,26,0.3)',
          textAlign: 'center',
        }}>
          <div style={{ color: 'var(--red)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', fontFamily: 'Outfit, sans-serif' }}>
            %67
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
            Müşterilerin <strong style={{ color: 'white' }}>%67'si</strong> ürün görselini, fiyattan daha önemli buluyor.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .psych-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
