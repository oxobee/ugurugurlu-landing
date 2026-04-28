import { useTranslation } from 'react-i18next';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section id="contact" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1a0005 40%, #0A0A0A 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background Grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `
          linear-gradient(rgba(229,0,26,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(229,0,26,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      {/* Glow Orbs */}
      <div style={{
        position: 'absolute', top: '-100px', left: '20%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(229,0,26,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(229,0,26,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Badge */}
        <span className="badge-open" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          <span style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', display: 'inline-block' }} />
          İŞ ALIMI AÇIK
        </span>

        <h2 style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: '900',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white',
          lineHeight: '1.2', marginBottom: '1rem', letterSpacing: '-0.02em',
        }}>
          {t('cta_section.title')}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
          {t('cta_section.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/905550570368" className="btn-whatsapp" id="cta-whatsapp"
            rel="noopener noreferrer" target="_blank">
            <MessageCircle size={18} fill="white" />
            {t('cta_section.whatsapp')}
          </a>
          <a href="https://wa.me/905550570368?text=Merhaba, teklif almak istiyorum." id="cta-offer"
            className="btn-primary" rel="noopener noreferrer" target="_blank">
            <ArrowRight size={18} />
            {t('cta_section.offer')}
          </a>
        </div>

        {/* Contact Detail Cards */}
        <div style={{
          display: 'flex', gap: '1rem', justifyContent: 'center',
          flexWrap: 'wrap', marginTop: '3rem',
        }}>
          {[
            { label: '📞 Telefon', value: '+90 555 057 03 68', href: 'tel:+905550570368' },
            { label: '📧 E-posta', value: 'mail@ugurugurlu.net', href: 'mailto:mail@ugurugurlu.net' },
            { label: '🌐 Web', value: 'www.ugurugurlu.net', href: 'https://ugurugurlu.net' },
          ].map((item, i) => (
            <a key={i} href={item.href} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px', padding: '1rem 1.5rem',
              textDecoration: 'none', transition: 'all 0.3s',
              backdropFilter: 'blur(10px)',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(229,0,26,0.5)';
                e.currentTarget.style.background = 'rgba(229,0,26,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                {item.label}
              </div>
              <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>
                {item.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
