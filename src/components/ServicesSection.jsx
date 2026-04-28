import { useTranslation } from 'react-i18next';
import { User, Layers, Megaphone, Video, Share2, ShoppingBag } from 'lucide-react';

const ICONS = [User, Layers, Megaphone, Video, Share2, ShoppingBag];

export default function ServicesSection() {
  const { t } = useTranslation();
  const items = t('services.items', { returnObjects: true }) || [];

  return (
    <section id="services" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Hizmetler</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('services.title')}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t('services.subtitle')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="services-grid">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i} className="card-base service-card" style={{ cursor: 'default' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--red)';
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(229,0,26,0.1)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  const iconBox = e.currentTarget.querySelector('.icon-box');
                  if (iconBox) {
                    iconBox.style.background = 'var(--gradient-red)';
                    iconBox.style.color = 'white';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e8e8e8';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  const iconBox = e.currentTarget.querySelector('.icon-box');
                  if (iconBox) {
                    iconBox.style.background = 'rgba(229,0,26,0.08)';
                    iconBox.style.color = 'var(--red)';
                  }
                }}
              >
                <div className="icon-box" style={{
                  width: '52px', height: '52px',
                  background: 'rgba(229,0,26,0.08)',
                  color: 'var(--red)',
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.2rem',
                  transition: 'all 0.3s ease',
                }}>
                  {Icon && <Icon size={24} />}
                </div>
                <h3 style={{ fontWeight: '800', fontSize: '1rem', marginBottom: '0.6rem', color: '#111' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
