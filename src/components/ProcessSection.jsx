import { useTranslation } from 'react-i18next';
import { Package, Palette, Wand2, Rocket } from 'lucide-react';

const STEP_ICONS = [Package, Palette, Wand2, Rocket];

export default function ProcessSection() {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true }) || [];

  return (
    <section id="process" style={{ padding: '5rem 0', background: '#f8f8f8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Süreç</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('process.title')}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t('process.subtitle')}
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem', position: 'relative',
        }} className="process-grid">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            const isLast = i === steps.length - 1;
            return (
              <div key={i} style={{ position: 'relative', textAlign: 'center' }}>
                {/* Connector line */}
                {!isLast && (
                  <div style={{
                    position: 'absolute', top: '32px', left: '60%', right: '-40%',
                    height: '2px',
                    background: 'linear-gradient(to right, var(--red), rgba(229,0,26,0.2))',
                    zIndex: 0,
                  }} className="connector" />
                )}

                {/* Step Card */}
                <div style={{
                  background: 'white', borderRadius: '18px', padding: '1.75rem 1.25rem',
                  border: '1px solid #e8e8e8', position: 'relative', zIndex: 1,
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--red)';
                    e.currentTarget.style.boxShadow = '0 4px 25px rgba(229,0,26,0.1)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e8e8e8';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Step Number */}
                  <div style={{
                    width: '52px', height: '52px',
                    background: 'var(--gradient-red)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1rem',
                    boxShadow: '0 4px 15px rgba(229,0,26,0.3)',
                  }}>
                    {Icon && <Icon size={22} color="white" />}
                  </div>

                  {/* Step Num */}
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontWeight: '900',
                    fontSize: '0.7rem', color: 'var(--red)', letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}>
                    ADIM {step.num}
                  </div>

                  <h3 style={{ fontWeight: '800', fontSize: '1rem', marginBottom: '0.6rem', color: '#111' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: '0.83rem', lineHeight: '1.6' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .connector { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
