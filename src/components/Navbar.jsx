import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, MessageCircle, ArrowRight, Phone, Mail, Globe, ChevronRight } from 'lucide-react';

const LANGS = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ar', label: 'AR', name: 'العربية' },
];

const LOGO_SLOGANS = {
  tr: 'YAPAY ZEKA İLE GÖRSEL ÜRETİM',
  en: 'AI-POWERED VISUAL PRODUCTION',
  ar: 'إنتاج بصري بالذكاء الاصطناعي',
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('tr');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const changeLang = (code) => {
    setActiveLang(code);
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
  };

  const navLinks = [
    { href: '#services', label: t('nav.services'), icon: '🎨' },
    { href: '#portfolio', label: t('nav.portfolio'), icon: '📸' },
    { href: '#chart', label: 'İstatistikler', icon: '📊' },
    { href: '#packages', label: t('nav.packages'), icon: '📦' },
    { href: '#faq', label: 'SSS', icon: '❓' },
    { href: '#contact', label: t('nav.contact'), icon: '📞' },
  ];

  const currentSlogan = LOGO_SLOGANS[activeLang] || LOGO_SLOGANS.tr;

  return (
    <>
      <nav
        id="navbar"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.75)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(229,0,26,0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '38px', height: '38px',
              background: 'var(--gradient-red)',
              borderRadius: '9px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', fontWeight: '900', color: 'white',
              boxShadow: '0 0 18px rgba(229,0,26,0.45)',
              flexShrink: 0,
            }}>U</div>
            <div>
              <div style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '1rem', lineHeight: 1.1 }}>
                Uğur UĞURLU
              </div>
              <div style={{
                color: 'rgba(229,0,26,0.9)', fontSize: '0.55rem', fontWeight: '700',
                letterSpacing: '0.06em', lineHeight: 1.2,
                transition: 'all 0.3s',
                direction: activeLang === 'ar' ? 'rtl' : 'ltr',
              }}>
                {currentSlogan}
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{
                color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                fontWeight: '500', fontSize: '0.875rem', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--red)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
              >{link.label}</a>
            ))}
          </div>

          {/* Right: Lang + CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Language Toggle */}
            <div className="lang-toggle">
              {LANGS.map(lang => (
                <button key={lang.code} className={`lang-btn${activeLang === lang.code ? ' active' : ''}`}
                  onClick={() => changeLang(lang.code)} id={`lang-${lang.code}`}>
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <a href="https://wa.me/905550570368" className="btn-primary desktop-cta"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem' }}
              id="nav-cta-btn" rel="noopener noreferrer" target="_blank">
              {t('nav.cta')}
            </a>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Menu"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white', cursor: 'pointer',
                width: '38px', height: '38px', borderRadius: '9px',
                display: 'none', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '5px',
                transition: 'all 0.2s',
              }}
              className="hamburger"
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(229,0,26,0.2)'; e.currentTarget.style.borderColor = 'rgba(229,0,26,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              <span style={{ width: '18px', height: '2px', background: 'white', borderRadius: '1px', display: 'block' }} />
              <span style={{ width: '14px', height: '2px', background: 'rgba(229,0,26,0.9)', borderRadius: '1px', display: 'block', alignSelf: 'flex-start', marginLeft: '2px' }} />
              <span style={{ width: '18px', height: '2px', background: 'white', borderRadius: '1px', display: 'block' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* === SLIDE-IN DRAWER === */}
      {/* Backdrop */}
      <div onClick={() => setDrawerOpen(false)} style={{
        position: 'fixed', inset: 0, zIndex: 1998,
        background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)',
        opacity: drawerOpen ? 1 : 0,
        pointerEvents: drawerOpen ? 'all' : 'none',
        transition: 'opacity 0.35s ease',
      }} />

      {/* Drawer Panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(320px, 85vw)',
        background: '#0c0c0c',
        zIndex: 1999,
        transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex', flexDirection: 'column',
        borderLeft: '1px solid rgba(229,0,26,0.2)',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
        overflowY: 'auto',
      }}>
        {/* Drawer Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.25rem 1.25rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '34px', height: '34px', background: 'var(--gradient-red)',
              borderRadius: '8px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontWeight: '900', color: 'white', fontSize: '1rem',
            }}>U</div>
            <div>
              <div style={{ color: 'white', fontWeight: '800', fontSize: '0.9rem' }}>Uğur UĞURLU</div>
              <div style={{ color: 'rgba(229,0,26,0.8)', fontSize: '0.5rem', fontWeight: '700', letterSpacing: '0.05em' }}>
                {currentSlogan}
              </div>
            </div>
          </div>
          <button onClick={() => setDrawerOpen(false)} style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            color: 'white', cursor: 'pointer', width: '34px', height: '34px',
            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><X size={16} /></button>
        </div>

        {/* İŞ ALIMI AÇIK badge */}
        <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <span className="badge-open" style={{ fontSize: '0.65rem' }}>
            <span style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }} />
            İŞ ALIMI AÇIK
          </span>
        </div>

        {/* Nav Links */}
        <div style={{ padding: '0.75rem 0', flex: 1 }}>
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href}
              onClick={() => setDrawerOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.9rem 1.25rem',
                color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.2s', gap: '0.75rem',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(229,0,26,0.08)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{link.label}</span>
              </div>
              <ChevronRight size={14} style={{ color: 'rgba(229,0,26,0.6)' }} />
            </a>
          ))}
        </div>

        {/* Language Switcher in Drawer */}
        <div style={{
          padding: '1rem 1.25rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontWeight: '700', marginBottom: '0.6rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Dil / Language / لغة
          </p>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {LANGS.map(lang => (
              <button key={lang.code}
                onClick={() => { changeLang(lang.code); }}
                style={{
                  flex: 1, padding: '0.55rem',
                  borderRadius: '8px', border: 'none', cursor: 'pointer',
                  fontWeight: '700', fontSize: '0.8rem',
                  background: activeLang === lang.code ? 'var(--gradient-red)' : 'rgba(255,255,255,0.07)',
                  color: 'white', transition: 'all 0.2s',
                }}>
                {lang.label}
                <div style={{ fontSize: '0.55rem', opacity: 0.7, fontWeight: '400' }}>{lang.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Drawer CTA Buttons */}
        <div style={{
          padding: '1rem 1.25rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.6rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textAlign: 'center', marginBottom: '0.25rem' }}>
            Hemen iletişime geç 👇
          </p>
          <a href="https://wa.me/905550570368" id="drawer-whatsapp"
            rel="noopener noreferrer" target="_blank"
            onClick={() => setDrawerOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: '#25D366', color: 'white', padding: '0.8rem',
              borderRadius: '10px', fontWeight: '700', fontSize: '0.9rem',
              textDecoration: 'none', boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
            }}>
            <MessageCircle size={17} fill="white" />
            WhatsApp'tan Yaz
          </a>
          <a href="https://wa.me/905550570368?text=Merhaba, teklif almak istiyorum." id="drawer-quote"
            rel="noopener noreferrer" target="_blank"
            onClick={() => setDrawerOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              background: 'var(--gradient-red)', color: 'white', padding: '0.8rem',
              borderRadius: '10px', fontWeight: '700', fontSize: '0.9rem',
              textDecoration: 'none', boxShadow: 'var(--glow-red)',
            }}>
            <ArrowRight size={17} />
            Hızlı Teklif Al
          </a>

          {/* Contact info in drawer */}
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              { icon: <Phone size={12} />, value: '+90 555 057 03 68', href: 'tel:+905550570368' },
              { icon: <Mail size={12} />, value: 'mail@ugurugurlu.net', href: 'mailto:mail@ugurugurlu.net' },
              { icon: <Globe size={12} />, value: 'ugurugurlu.net', href: 'https://ugurugurlu.net' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(229,0,26,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                {item.icon} {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .desktop-cta { display: none !important; }
        }
        @media (min-width: 901px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
