import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppCTA() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'tr';
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed && window.scrollY > 400) setVisible(true);
      else if (window.scrollY <= 400) setVisible(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  const TEXTS = {
    tr: { main: 'Teklif almak için WhatsApp\'tan yazın', cta: 'WhatsApp\'tan Yaz' },
    en: { main: 'Message us on WhatsApp for a quote', cta: 'Chat on WhatsApp' },
    ar: { main: 'راسلنا على واتساب للحصول على عرض', cta: 'واتساب' },
  };
  const text = TEXTS[lang] || TEXTS.tr;

  return (
    <>
      {/* ── Sticky Bar ── */}
      <div style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: 998,
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div style={{
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(229,0,26,0.25)',
          /* ── Desktop: flex row, full width ── */
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '0.65rem 1.25rem',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.35)',
        }}>

          {/* Online dot + label — hide on smallest screens */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            flexShrink: 0,
          }} className="wa-label">
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#25D366',
              boxShadow: '0 0 6px rgba(37,211,102,0.8)',
              animation: 'wa-blink 1.8s infinite',
            }} />
            <span style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '0.8rem', fontWeight: '500',
              whiteSpace: 'nowrap',
            }}>
              {text.main}
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/905550570368?text=Merhaba, teklif almak istiyorum."
            id="sticky-wa-btn"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.45rem',
              background: '#25D366',
              color: 'white',
              padding: '0.6rem 1.4rem',
              borderRadius: '8px',
              fontWeight: '800', fontSize: '0.88rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 3px 14px rgba(37,211,102,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(37,211,102,0.55)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 3px 14px rgba(37,211,102,0.4)';
            }}
          >
            <MessageCircle size={16} fill="white" />
            {text.cta}
          </a>

          {/* Dismiss */}
          <button
            id="sticky-dismiss-btn"
            onClick={() => { setDismissed(true); setVisible(false); }}
            aria-label="Kapat"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              width: '30px', height: '30px',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.13)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
            }}
          >
            <X size={13} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes wa-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── Mobile: thinner, centered, tighter ── */
        @media (max-width: 640px) {
          #sticky-wa-btn {
            padding: 0.55rem 1.1rem !important;
            font-size: 0.82rem !important;
            border-radius: 7px !important;
          }
          .wa-label { display: none !important; }
        }
      `}</style>
    </>
  );
}
