import { useTranslation } from 'react-i18next';
import { ArrowRight, Eye, MessageCircle, Zap } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" style={{
      background: 'var(--gradient-hero)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '70px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `
          linear-gradient(rgba(229,0,26,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(229,0,26,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Red glow orb */}
      <div style={{
        position: 'absolute', top: '20%', right: '15%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(229,0,26,0.2) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT: Text Content */}
          <div style={{ animation: 'fadeInUp 0.7s ease forwards' }}>
            {/* Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge-open">
                <span style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', display: 'inline-block' }} />
                {t('hero.badge')}
              </span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1.15',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              {t('hero.title').split(',').map((part, i) => (
                <span key={i}>
                  {i === 0 ? part : <span style={{ color: 'var(--red)' }}>{part}</span>}
                  {i === 0 ? ',' : ''}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              maxWidth: '520px',
            }}>
              {t('hero.subtitle')}
            </p>

            {/* Tagline */}
            <div style={{
              background: 'rgba(229,0,26,0.12)',
              border: '1px solid rgba(229,0,26,0.3)',
              borderRadius: '8px',
              padding: '0.8rem 1.2rem',
              marginBottom: '2rem',
              display: 'inline-block',
            }}>
              <p style={{ color: 'var(--red-light)', fontWeight: '700', fontSize: '0.95rem', margin: 0 }}>
                ⚡ {t('hero.tagline')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="https://wa.me/905550570368" className="btn-primary" id="hero-cta-primary"
                rel="noopener noreferrer" target="_blank">
                <MessageCircle size={18} />
                {t('hero.cta_primary')}
              </a>
              <a href="#portfolio" className="btn-secondary" id="hero-cta-secondary">
                <Eye size={18} />
                {t('hero.cta_secondary')}
              </a>
            </div>

            {/* Key Message */}
            <div style={{
              borderLeft: '3px solid var(--red)',
              paddingLeft: '1rem',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
            }}>
              "{t('hero.key_message')}"
            </div>

            {/* Stats Row */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {[
                { value: '%320', label: 'Dönüşüm Artışı' },
                { value: '48s', label: 'Hızlı Teslimat' },
                { value: '6+', label: 'Platform' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--red)', fontWeight: '900', fontSize: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Hero Mockup */}
          <div style={{ position: 'relative', animation: 'float 4s ease-in-out infinite' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(229,0,26,0.2)',
              border: '1px solid rgba(229,0,26,0.2)',
            }}>
              <img
                src="/images/hero-mockup.png"
                alt="AI Ürün Görseli Dönüşümü – Yapay Zeka ile Görsel Üretim"
                style={{ width: '100%', display: 'block' }}
                loading="eager"
              />
            </div>

            {/* Floating Badge */}
            <div style={{
              position: 'absolute', top: '-10px', right: '-10px',
              background: 'var(--gradient-red)',
              color: 'white', padding: '0.5rem 0.8rem',
              borderRadius: '10px', fontSize: '0.75rem', fontWeight: '800',
              boxShadow: 'var(--glow-red)',
            }}>
              <Zap size={12} style={{ display: 'inline' }} /> AI Powered
            </div>

            {/* Floating Conversion Badge */}
            <div style={{
              position: 'absolute', bottom: '-10px', left: '-10px',
              background: 'rgba(10,10,10,0.95)',
              border: '1px solid rgba(229,0,26,0.4)',
              color: 'white', padding: '0.75rem 1rem',
              borderRadius: '12px', fontSize: '0.8rem',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ color: 'var(--red)', fontWeight: '900', fontSize: '1.2rem' }}>%320</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>Dönüşüm Artışı</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
        background: 'linear-gradient(to bottom, transparent, white)',
      }} />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
