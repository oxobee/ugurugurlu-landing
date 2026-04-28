import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Clock, Star, Shield } from 'lucide-react';

/* Sticky bottom WhatsApp CTA bar — appears after scrolling 300px */
export default function WhatsAppCTA() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'tr';
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300 && !dismissed) setVisible(true);
      else if (window.scrollY <= 300) setVisible(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  const TEXTS = {
    tr: {
      pre: '💬 Şu an aktif olarak proje alıyorum —',
      bold: 'Hemen WhatsApp\'tan yazın!',
      sub: '⚡ Genellikle 5 dakika içinde yanıt veriyorum',
      cta: 'WhatsApp\'tan Yaz',
      dismiss: 'Kapat',
    },
    en: {
      pre: '💬 Currently accepting new projects —',
      bold: 'Message on WhatsApp now!',
      sub: '⚡ I usually reply within 5 minutes',
      cta: 'Write on WhatsApp',
      dismiss: 'Close',
    },
    ar: {
      pre: '💬 أقبل مشاريع جديدة حالياً —',
      bold: 'راسلني على واتساب الآن!',
      sub: '⚡ عادةً ما أرد خلال 5 دقائق',
      cta: 'تواصل عبر واتساب',
      dismiss: 'إغلاق',
    },
  };

  const text = TEXTS[lang] || TEXTS.tr;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      zIndex: 998,
      transform: visible ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      {/* Main CTA Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a0005 50%, #0c0c0c 100%)',
        borderTop: '1px solid rgba(229,0,26,0.3)',
        padding: '0.85rem 1.5rem',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '1rem',
        flexWrap: 'wrap',
        boxShadow: '0 -8px 30px rgba(0,0,0,0.4)',
      }}>
        {/* Trust signals row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, minWidth: '200px', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <div style={{
            width: '42px', height: '42px', flexShrink: 0,
            background: 'var(--gradient-red)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: '900', color: 'white', fontSize: '1.1rem',
            boxShadow: '0 0 15px rgba(229,0,26,0.4)',
            position: 'relative',
          }}>
            U
            {/* Online dot */}
            <div style={{
              position: 'absolute', bottom: '1px', right: '1px',
              width: '10px', height: '10px', background: '#25D366',
              borderRadius: '50%', border: '2px solid #0c0c0c',
            }} />
          </div>

          <div>
            <div style={{ color: 'white', fontSize: '0.88rem', lineHeight: 1.4 }}>
              {text.pre} <strong style={{ color: '#25D366' }}>{text.bold}</strong>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', marginTop: '0.2rem' }}>
              {text.sub}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }} className="trust-badges">
          {[
            { icon: <Clock size={11} />, label: lang === 'ar' ? '5 دقائق' : lang === 'en' ? '5 min reply' : '5 dak. yanıt' },
            { icon: <Star size={11} />, label: lang === 'ar' ? 'جودة عالية' : lang === 'en' ? 'Pro quality' : 'Pro kalite' },
            { icon: <Shield size={11} />, label: lang === 'ar' ? 'مضمون' : lang === 'en' ? 'Guaranteed' : 'Garantili' },
          ].map((b, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.3rem 0.6rem', borderRadius: '6px',
              color: 'rgba(255,255,255,0.6)', fontSize: '0.68rem',
            }}>
              {b.icon} {b.label}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <a href="https://wa.me/905550570368?text=Merhaba, teklif almak istiyorum."
            id="sticky-whatsapp-cta"
            rel="noopener noreferrer" target="_blank"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: '#25D366', color: 'white',
              padding: '0.7rem 1.4rem', borderRadius: '10px',
              fontWeight: '800', fontSize: '0.9rem',
              textDecoration: 'none', whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 25px rgba(37,211,102,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)'; }}
          >
            <MessageCircle size={17} fill="white" />
            {text.cta}
          </a>

          {/* Dismiss */}
          <button onClick={() => { setDismissed(true); setVisible(false); }}
            id="sticky-dismiss"
            style={{
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
              width: '34px', height: '34px', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
            aria-label="Kapat"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-badges { display: none !important; }
        }
      `}</style>
    </div>
  );
}
