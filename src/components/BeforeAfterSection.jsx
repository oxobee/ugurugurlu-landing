import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'tshirt',
    category: 'T-Shirt',
    emoji: '👕',
    before: '/images/before.png',
    after: '/images/after.png',
    beforeLabel: { tr: 'Düz ürün fotoğrafı', en: 'Plain product photo', ar: 'صورة المنتج العادية' },
    afterLabel: { tr: 'Mankenli sunum', en: 'Mannequin lifestyle', ar: 'عرض مع المانيكان' },
    stat: '%187',
    statLabel: { tr: 'Dönüşüm Artışı', en: 'Conversion Increase', ar: 'زيادة التحويل' },
  },
  {
    id: 'watch',
    category: 'Saat',
    emoji: '⌚',
    before: '/images/before_watch.png',
    after: '/images/after_watch.png',
    beforeLabel: { tr: 'Düz zemin, kötü ışık', en: 'Flat surface, bad lighting', ar: 'سطح مسطح، إضاءة سيئة' },
    afterLabel: { tr: 'Premium sahne görseli', en: 'Premium lifestyle scene', ar: 'مشهد راقي احترافي' },
    stat: '%290',
    statLabel: { tr: 'Dönüşüm Artışı', en: 'Conversion Increase', ar: 'زيادة التحويل' },
  },
  {
    id: 'dress',
    category: 'Elbise',
    emoji: '👗',
    before: '/images/before_dress.png',
    after: '/images/after_dress.png',
    beforeLabel: { tr: 'Kırışık, yerde düz', en: 'Crumpled, flat on floor', ar: 'مجعد، ملقى على الأرض' },
    afterLabel: { tr: 'Akdeniz yaşam tarzı', en: 'Mediterranean lifestyle', ar: 'أسلوب حياة متوسطي' },
    stat: '%320',
    statLabel: { tr: 'Dönüşüm Artışı', en: 'Conversion Increase', ar: 'زيادة التحويل' },
  },
  {
    id: 'tent',
    category: 'Çadır',
    emoji: '⛺',
    before: '/images/before_tent.png',
    after: '/images/after_tent.png',
    beforeLabel: { tr: 'Toplanmış, bağlamda yok', en: 'Packed, no context', ar: 'مطوي، بلا سياق' },
    afterLabel: { tr: 'Dağ macera sahnesi', en: 'Mountain adventure scene', ar: 'مشهد المغامرة الجبلية' },
    stat: '%245',
    statLabel: { tr: 'Dönüşüm Artışı', en: 'Conversion Increase', ar: 'زيادة التحويل' },
  },
  {
    id: 'phone',
    category: 'Telefon Kılıfı',
    emoji: '📱',
    before: '/images/before_phone.png',
    after: '/images/after_phone.png',
    beforeLabel: { tr: 'Beyaz zemin, cansız', en: 'White bg, lifeless', ar: 'خلفية بيضاء، بلا حياة' },
    afterLabel: { tr: 'Ofis yaşam tarzı', en: 'Lifestyle desk setup', ar: 'إعداد مكتب أسلوب حياة' },
    stat: '%215',
    statLabel: { tr: 'Dönüşüm Artışı', en: 'Conversion Increase', ar: 'زيادة التحويل' },
  },
  {
    id: 'toy',
    category: 'Oyuncak',
    emoji: '🧸',
    before: '/images/before_toy.png',
    after: '/images/after_toy.png',
    beforeLabel: { tr: 'Dağınık, anlamsız', en: 'Scattered, meaningless', ar: 'مبعثر، بلا معنى' },
    afterLabel: { tr: 'Çocuk odası sahnesi', en: 'Nursery lifestyle scene', ar: 'مشهد غرفة الأطفال' },
    stat: '%198',
    statLabel: { tr: 'Dönüşüm Artışı', en: 'Conversion Increase', ar: 'زيادة التحويل' },
  },
];

export default function BeforeAfterSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'tr';

  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const product = PRODUCTS[activeIdx];

  const getPosition = (clientX, el) => {
    const rect = el.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(pos, 2), 98);
  };

  const next = () => { setActiveIdx(i => (i + 1) % PRODUCTS.length); setSliderPos(50); };
  const prev = () => { setActiveIdx(i => (i - 1 + PRODUCTS.length) % PRODUCTS.length); setSliderPos(50); };

  return (
    <section id="portfolio" style={{ padding: '5rem 0', background: '#0A0A0A' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.2)',
            color: 'var(--red-light)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Before / After</span>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '0.75rem' }}>
            {t('beforeafter.title')}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem' }}>
            {t('beforeafter.subtitle')} — 6 {lang === 'ar' ? 'فئة منتج' : lang === 'en' ? 'product categories' : 'farklı kategori'}
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex', gap: '0.5rem', justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: '2rem',
        }}>
          {PRODUCTS.map((p, i) => (
            <button key={p.id} id={`ba-tab-${p.id}`} onClick={() => { setActiveIdx(i); setSliderPos(50); }} style={{
              background: activeIdx === i ? 'var(--red)' : 'rgba(255,255,255,0.07)',
              border: `1px solid ${activeIdx === i ? 'var(--red)' : 'rgba(255,255,255,0.1)'}`,
              color: activeIdx === i ? 'white' : 'rgba(255,255,255,0.5)',
              padding: '0.4rem 0.9rem', borderRadius: '20px',
              fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer',
              transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '0.35rem',
            }}>
              <span>{p.emoji}</span>
              <span>{p.category}</span>
            </button>
          ))}
        </div>

        {/* Main Slider + Nav */}
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>

          {/* Prev / Next Arrows */}
          <button onClick={prev} style={{
            position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: 'rgba(229,0,26,0.85)', border: 'none',
            color: 'white', width: '40px', height: '40px', borderRadius: '50%',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', boxShadow: '0 4px 15px rgba(229,0,26,0.4)',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--red)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(229,0,26,0.85)'}
          ><ChevronLeft size={18} /></button>

          <button onClick={next} style={{
            position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: 'rgba(229,0,26,0.85)', border: 'none',
            color: 'white', width: '40px', height: '40px', borderRadius: '50%',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s', boxShadow: '0 4px 15px rgba(229,0,26,0.4)',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--red)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(229,0,26,0.85)'}
          ><ChevronRight size={18} /></button>

          {/* Slider Container */}
          <div
            style={{
              position: 'relative', borderRadius: '20px', overflow: 'hidden',
              cursor: 'ew-resize', userSelect: 'none',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(229,0,26,0.15)',
              border: '1px solid rgba(229,0,26,0.25)',
              aspectRatio: '4/3',
            }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={e => { if (isDragging) setSliderPos(getPosition(e.clientX, e.currentTarget)); }}
            onTouchMove={e => setSliderPos(getPosition(e.touches[0].clientX, e.currentTarget))}
          >
            {/* After (right/base) */}
            <img src={product.after} alt={`After - ${product.category}`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              draggable={false}
            />
            {/* Before (left/clipped) */}
            <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <img src={product.before} alt={`Before - ${product.category}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
                draggable={false}
              />
            </div>

            {/* Slider Handle */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${sliderPos}%`, transform: 'translateX(-50%)',
              width: '3px', background: 'white',
              boxShadow: '0 0 15px rgba(0,0,0,0.5)',
            }}>
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '42px', height: '42px',
                background: 'white', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                fontSize: '1rem', fontWeight: '700', color: '#333',
              }}>↔</div>
            </div>

            {/* Labels */}
            <div style={{
              position: 'absolute', top: '0.75rem', left: '0.75rem',
              background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
              color: 'white', padding: '0.35rem 0.75rem', borderRadius: '6px',
              fontSize: '0.72rem', fontWeight: '700',
              opacity: sliderPos > 20 ? 1 : 0, transition: 'opacity 0.3s',
            }}>
              ❌ {product.beforeLabel[lang] || product.beforeLabel.tr}
            </div>
            <div style={{
              position: 'absolute', top: '0.75rem', right: '0.75rem',
              background: 'var(--red)', backdropFilter: 'blur(8px)',
              color: 'white', padding: '0.35rem 0.75rem', borderRadius: '6px',
              fontSize: '0.72rem', fontWeight: '700',
              opacity: sliderPos < 80 ? 1 : 0, transition: 'opacity 0.3s',
            }}>
              ✅ {product.afterLabel[lang] || product.afterLabel.tr}
            </div>

            {/* Stat Badge */}
            <div style={{
              position: 'absolute', bottom: '0.75rem', right: '0.75rem',
              background: 'linear-gradient(135deg, rgba(229,0,26,0.95), rgba(180,0,15,0.95))',
              color: 'white', padding: '0.4rem 0.75rem', borderRadius: '8px',
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontSize: '1.1rem', fontWeight: '900', fontFamily: 'Outfit, sans-serif' }}>
                {product.stat}
              </div>
              <div style={{ fontSize: '0.6rem', opacity: 0.85 }}>
                {product.statLabel[lang] || product.statLabel.tr}
              </div>
            </div>

            {/* Category Badge */}
            <div style={{
              position: 'absolute', bottom: '0.75rem', left: '0.75rem',
              background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
              color: 'white', padding: '0.35rem 0.75rem', borderRadius: '6px',
              fontSize: '0.75rem', fontWeight: '600',
              display: 'flex', alignItems: 'center', gap: '0.3rem',
            }}>
              {product.emoji} {product.category}
            </div>
          </div>

          {/* Hint */}
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '0.75rem' }}>
            ← {lang === 'ar' ? 'اسحب للمقارنة' : lang === 'en' ? 'Drag to compare' : 'Kaydırarak karşılaştır'} →
          </p>

          {/* Dot indicators */}
          <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginTop: '1rem' }}>
            {PRODUCTS.map((_, i) => (
              <div key={i} onClick={() => { setActiveIdx(i); setSliderPos(50); }} style={{
                width: i === activeIdx ? '24px' : '8px', height: '8px',
                borderRadius: '4px',
                background: i === activeIdx ? 'var(--red)' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer', transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
