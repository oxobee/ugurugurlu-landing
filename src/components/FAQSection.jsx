import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState(null);
  const items = t('faq.items', { returnObjects: true }) || [];

  return (
    <section id="faq" style={{ padding: '5rem 0', background: '#f8f8f8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>SSS</span>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            {t('faq.title')}
          </h2>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '14px',
              border: `1.5px solid ${openIdx === i ? 'var(--red)' : '#e8e8e8'}`,
              overflow: 'hidden', transition: 'border-color 0.3s',
              boxShadow: openIdx === i ? '0 4px 20px rgba(229,0,26,0.08)' : 'none',
            }}>
              <button id={`faq-${i}`} onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', padding: '1.25rem 1.5rem',
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', gap: '1rem',
              }}>
                <span style={{
                  fontWeight: '700', fontSize: '0.95rem',
                  color: openIdx === i ? 'var(--red)' : '#111',
                  transition: 'color 0.3s',
                }}>
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  style={{
                    color: openIdx === i ? 'var(--red)' : '#888',
                    transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s, color 0.3s',
                    flexShrink: 0,
                  }}
                />
              </button>

              {/* Answer */}
              <div style={{
                maxHeight: openIdx === i ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}>
                <div style={{
                  padding: '0 1.5rem 1.25rem',
                  borderTop: '1px solid #f0f0f0',
                }}>
                  <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.7', paddingTop: '1rem' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
