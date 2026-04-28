import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function ComparisonSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('pro');

  return (
    <section id="comparison" style={{ padding: '5rem 0', background: '#f8f8f8' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Fark Yaratan Alan</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('comparison.title').split('=').map((part, i) => (
              <span key={i}>
                {i === 0 ? part + '=' : <span style={{ color: 'var(--red)' }}>{part}</span>}
              </span>
            ))}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* Toggle Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', background: 'white', borderRadius: '12px',
            padding: '0.4rem', gap: '0.3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            border: '1px solid #e8e8e8',
          }}>
            <button id="tab-standard" onClick={() => setActiveTab('standard')} style={{
              padding: '0.6rem 1.5rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
              fontWeight: '600', fontSize: '0.85rem', transition: 'all 0.3s',
              background: activeTab === 'standard' ? '#1a1a1a' : 'transparent',
              color: activeTab === 'standard' ? 'white' : '#666',
            }}>{t('comparison.standard_title')}</button>
            <button id="tab-pro" onClick={() => setActiveTab('pro')} style={{
              padding: '0.6rem 1.5rem', borderRadius: '8px', border: 'none', cursor: 'pointer',
              fontWeight: '600', fontSize: '0.85rem', transition: 'all 0.3s',
              background: activeTab === 'pro' ? 'var(--red)' : 'transparent',
              color: activeTab === 'pro' ? 'white' : '#666',
            }}>{t('comparison.pro_title')}</button>
          </div>
        </div>

        {/* Comparison Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem',
          alignItems: 'center', maxWidth: '900px', margin: '0 auto',
        }} className="comparison-grid">

          {/* Standard Card */}
          <div style={{
            background: 'white', borderRadius: '20px', padding: '2rem',
            border: `2px solid ${activeTab === 'standard' ? '#1a1a1a' : '#e8e8e8'}`,
            transition: 'all 0.3s', opacity: activeTab === 'standard' ? 1 : 0.7,
            transform: activeTab === 'standard' ? 'scale(1.02)' : 'scale(1)',
            boxShadow: activeTab === 'standard' ? '0 10px 40px rgba(0,0,0,0.1)' : 'none',
          }}>
            <div style={{
              background: '#f5f5f5', borderRadius: '50%', width: '50px', height: '50px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.2rem', fontSize: '1.5rem',
            }}>😐</div>
            <h3 style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '1.2rem', color: '#333' }}>
              {t('comparison.standard_title')}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {(t('comparison.standard_items', { returnObjects: true }) || []).map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#666', fontSize: '0.9rem' }}>
                  <span style={{ color: '#ccc', fontWeight: '700' }}>✕</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Center Arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              background: 'var(--gradient-red)', color: 'white',
              borderRadius: '50%', width: '44px', height: '44px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'var(--glow-red)',
            }}>
              <ArrowRight size={20} />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: i === 1 ? 'var(--red)' : '#ddd',
                }} />
              ))}
            </div>
          </div>

          {/* Pro Card */}
          <div style={{
            background: activeTab === 'pro' ? 'linear-gradient(135deg, #0A0A0A, #1a0005)' : 'white',
            borderRadius: '20px', padding: '2rem',
            border: `2px solid ${activeTab === 'pro' ? 'var(--red)' : '#e8e8e8'}`,
            transition: 'all 0.3s',
            transform: activeTab === 'pro' ? 'scale(1.05)' : 'scale(1)',
            boxShadow: activeTab === 'pro' ? 'var(--glow-red), 0 20px 60px rgba(0,0,0,0.2)' : 'none',
            position: 'relative', overflow: 'hidden',
          }}>
            {activeTab === 'pro' && (
              <div style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'var(--red)', color: 'white',
                fontSize: '0.65rem', fontWeight: '800', padding: '0.2rem 0.6rem',
                borderRadius: '20px', letterSpacing: '0.05em',
              }}>KAZANAN</div>
            )}
            <div style={{
              background: 'rgba(229,0,26,0.15)', borderRadius: '50%', width: '50px', height: '50px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.2rem', fontSize: '1.5rem',
            }}>🏆</div>
            <h3 style={{
              fontWeight: '800', fontSize: '1.1rem', marginBottom: '1.2rem',
              color: activeTab === 'pro' ? 'white' : '#333',
            }}>
              {t('comparison.pro_title')}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {(t('comparison.pro_items', { returnObjects: true }) || []).map((item, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  color: activeTab === 'pro' ? 'rgba(255,255,255,0.85)' : '#333',
                  fontSize: '0.9rem',
                }}>
                  <span style={{ color: 'var(--red)', fontWeight: '700' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Toggle Label */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'white', borderRadius: '50px', padding: '0.75rem 1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e8e8e8',
            cursor: 'pointer',
          }} onClick={() => setActiveTab(activeTab === 'standard' ? 'pro' : 'standard')}>
            <TrendingUp size={16} style={{ color: 'var(--red)' }} />
            <span style={{ fontWeight: '600', fontSize: '0.9rem', color: '#333' }}>
              {t('comparison.toggle_label')}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
            max-width: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
