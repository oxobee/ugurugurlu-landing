import { useTranslation } from 'react-i18next';
import { Phone, Mail, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{
      background: '#0A0A0A',
      padding: '3rem 0 2rem',
      borderTop: '1px solid rgba(229,0,26,0.2)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          gap: '3rem', marginBottom: '2.5rem',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px', height: '38px', background: 'var(--gradient-red)',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', fontWeight: '900', color: 'white',
                boxShadow: '0 0 15px rgba(229,0,26,0.4)',
              }}>U</div>
              <div>
                <div style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '1rem' }}>
                  Uğur UĞURLU
                </div>
                <div style={{ color: 'rgba(229,0,26,0.8)', fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.06em' }}>
                  {t('footer.tagline').toUpperCase()}
                </div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.83rem', lineHeight: '1.7', maxWidth: '250px' }}>
              {t('footer.tagline')} — Trendyol, Hepsiburada, Amazon, Etsy & more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '1.2rem', fontSize: '0.9rem' }}>
              {t('nav.services') !== 'Hizmetler' ? 'Quick Links' : t('nav.contact') !== 'İletişim' ? 'روابط سريعة' : 'Hızlı Bağlantılar'}
            </h4>
            {[
              { href: '#services', label: t('nav.services') },
              { href: '#portfolio', label: t('nav.portfolio') },
              { href: '#packages', label: t('nav.packages') },
              { href: '#faq', label: 'FAQ' },
              { href: '#contact', label: t('nav.contact') },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{
                display: 'block', color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                fontSize: '0.85rem', marginBottom: '0.6rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '1.2rem', fontSize: '0.9rem' }}>
              {t('nav.contact')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { Icon: Phone, value: t('footer.phone'), href: 'tel:+905550570368' },
                { Icon: Mail, value: t('footer.email'), href: 'mailto:mail@ugurugurlu.net' },
                { Icon: Globe, value: t('footer.site'), href: 'https://ugurugurlu.net' },
                { Icon: MessageCircle, value: 'WhatsApp', href: 'https://wa.me/905550570368' },
              ].map(({ Icon, value, href }, i) => (
                <a key={i} href={href} rel="noopener noreferrer"
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                    fontSize: '0.85rem', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--red)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  <Icon size={14} /> {value}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
            © {new Date().getFullYear()} Uğur UĞURLU – {t('footer.tagline')}. {t('footer.rights')}
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['TR', 'EN', 'AR'].map(lang => (
              <span key={lang} style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem' }}>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
