import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function BeforeAfterSection() {
  const { t } = useTranslation();
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const getPosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(pos, 2), 98);
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e) => {
    if (!isDragging) return;
    setSliderPos(getPosition(e.clientX));
  };

  const onTouchMove = (e) => {
    const touch = e.touches[0];
    setSliderPos(getPosition(touch.clientX));
  };

  return (
    <section id="portfolio" style={{ padding: '5rem 0', background: '#0A0A0A' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.2)',
            color: 'var(--red-light)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Before / After</span>
          <h2 className="section-title" style={{ marginBottom: '0.75rem', color: 'white' }}>
            {t('beforeafter.title')}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
            {t('beforeafter.subtitle')}
          </p>
        </div>

        {/* Slider Container */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'ew-resize',
              userSelect: 'none',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(229,0,26,0.15)',
              border: '1px solid rgba(229,0,26,0.2)',
              aspectRatio: '4/3',
            }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseUp}
            onTouchMove={onTouchMove}
          >
            {/* After Image (Base) */}
            <img
              src="/images/after.png"
              alt="Profesyonel AI Görsel - After"
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
              }}
              draggable={false}
            />

            {/* Before Image (Clipped) */}
            <div style={{
              position: 'absolute', inset: 0,
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              transition: isDragging ? 'none' : 'clip-path 0.1s',
            }}>
              <img
                src="/images/before.png"
                alt="Standart Görsel - Before"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  filter: 'grayscale(30%)',
                }}
                draggable={false}
              />
            </div>

            {/* Slider Handle */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0,
              left: `${sliderPos}%`, transform: 'translateX(-50%)',
              width: '3px', background: 'white',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              transition: isDragging ? 'none' : 'left 0.1s',
            }}>
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '44px', height: '44px',
                background: 'white',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                fontSize: '1rem',
              }}>
                <span style={{ userSelect: 'none' }}>↔</span>
              </div>
            </div>

            {/* Labels */}
            <div style={{
              position: 'absolute', top: '1rem', left: '1rem',
              background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
              color: 'white', padding: '0.4rem 0.8rem', borderRadius: '6px',
              fontSize: '0.75rem', fontWeight: '700',
              opacity: sliderPos > 20 ? 1 : 0, transition: 'opacity 0.3s',
            }}>
              {t('beforeafter.before')}
            </div>
            <div style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'var(--red)', backdropFilter: 'blur(8px)',
              color: 'white', padding: '0.4rem 0.8rem', borderRadius: '6px',
              fontSize: '0.75rem', fontWeight: '700',
              opacity: sliderPos < 80 ? 1 : 0, transition: 'opacity 0.3s',
            }}>
              {t('beforeafter.after')}
            </div>
          </div>

          {/* Hint */}
          <p style={{
            textAlign: 'center', color: 'rgba(255,255,255,0.3)',
            fontSize: '0.8rem', marginTop: '1rem',
          }}>
            ← Kaydırarak karşılaştır →
          </p>
        </div>
      </div>
    </section>
  );
}
