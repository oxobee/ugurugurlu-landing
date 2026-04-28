import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const LANGS = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('tr');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeLang = (code) => {
    setActiveLang(code);
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
    setMobileOpen(false);
  };

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#packages', label: t('nav.packages') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(229,0,26,0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'var(--gradient-red)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', fontWeight: '900', color: 'white',
            boxShadow: '0 0 15px rgba(229,0,26,0.4)',
          }}>U</div>
          <div>
            <div style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '1rem', lineHeight: 1.1 }}>
              Uğur UĞURLU
            </div>
            <div style={{ color: 'rgba(229,0,26,0.9)', fontSize: '0.6rem', fontWeight: '600', letterSpacing: '0.05em' }}>
              YAPAY ZEKA İLE GÖRSEL ÜRETİM
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
              fontWeight: '500', fontSize: '0.9rem', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--red)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
            >{link.label}</a>
          ))}
        </div>

        {/* Right side: Lang + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language Toggle */}
          <div className="lang-toggle">
            {LANGS.map(lang => (
              <button key={lang.code} className={`lang-btn${activeLang === lang.code ? ' active' : ''}`}
                onClick={() => changeLang(lang.code)} id={`lang-${lang.code}`}>
                {lang.label}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <a href="https://wa.me/905550570368" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
            id="nav-cta-btn" rel="noopener noreferrer" target="_blank">
            {t('nav.cta')}
          </a>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.25rem', display: 'none' }}
            id="mobile-menu-btn" className="mobile-only">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(10,10,10,0.98)', borderTop: '1px solid rgba(229,0,26,0.2)',
          padding: '1.5rem',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
                padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                fontWeight: '500',
              }}>{link.label}</a>
          ))}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {LANGS.map(lang => (
              <button key={lang.code} className={`lang-btn${activeLang === lang.code ? ' active' : ''}`}
                onClick={() => changeLang(lang.code)}
                style={{ background: activeLang === lang.code ? 'var(--red)' : 'rgba(255,255,255,0.1)', color: 'white' }}>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
