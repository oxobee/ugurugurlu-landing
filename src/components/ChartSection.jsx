import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

export default function ChartSection() {
  const { t } = useTranslation();
  const labels = t('chart.labels', { returnObjects: true }) || [
    'Düz Ürün Fotoğrafı', 'İyileştirilmiş Görsel', 'Mankenli Sunum', 'Reklam Videosu'
  ];

  const data = {
    labels,
    datasets: [{
      label: t('chart.y_label') || 'Dönüşüm Oranı (%)',
      data: [100, 140, 210, 320],
      backgroundColor: [
        'rgba(150,150,150,0.6)',
        'rgba(229,0,26,0.4)',
        'rgba(229,0,26,0.7)',
        'rgba(229,0,26,1)',
      ],
      borderColor: [
        'rgba(150,150,150,0.8)',
        'rgba(229,0,26,0.6)',
        'rgba(229,0,26,0.9)',
        'rgba(229,0,26,1)',
      ],
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1200,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0A0A0A',
        titleColor: 'rgba(255,255,255,0.9)',
        bodyColor: 'rgba(255,255,255,0.7)',
        borderColor: 'rgba(229,0,26,0.4)',
        borderWidth: 1,
        padding: 14,
        callbacks: {
          title: (items) => items[0].label,
          label: (item) => `${item.raw}% — ${t('chart.tooltip') || 'Daha iyi sunum = daha yüksek satış'}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#555',
          font: { size: 12, weight: '600' },
          maxRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        max: 380,
        grid: {
          color: 'rgba(0,0,0,0.05)',
          lineWidth: 1,
        },
        ticks: {
          color: '#888',
          font: { size: 11 },
          callback: (val) => `%${val}`,
        },
      },
    },
  };

  return (
    <section id="chart" style={{ padding: '5rem 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(229,0,26,0.1)',
            color: 'var(--red)', fontWeight: '700', fontSize: '0.8rem',
            padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '1rem',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Verilerle Kanıtlı</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            {t('chart.title')}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t('chart.description')}
          </p>
        </div>

        {/* Chart Container */}
        <div style={{
          background: '#fafafa',
          borderRadius: '20px',
          padding: '2.5rem',
          border: '1px solid #e8e8e8',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 4px 30px rgba(0,0,0,0.05)',
        }}>
          <div style={{ height: '340px', position: 'relative' }}>
            <Bar data={data} options={options} />
          </div>

          {/* Legend Dots */}
          <div style={{
            display: 'flex', gap: '1.5rem', justifyContent: 'center',
            flexWrap: 'wrap', marginTop: '1.5rem',
          }}>
            {[
              { color: 'rgba(150,150,150,0.7)', label: labels[0], val: '%100' },
              { color: 'rgba(229,0,26,0.5)', label: labels[1], val: '%140' },
              { color: 'rgba(229,0,26,0.8)', label: labels[2], val: '%210' },
              { color: 'rgba(229,0,26,1)', label: labels[3], val: '%320' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: item.color }} />
                <span style={{ fontSize: '0.8rem', color: '#555' }}>{item.label}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--red)' }}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{
          textAlign: 'center', color: '#aaa', fontSize: '0.78rem',
          marginTop: '1.5rem', fontStyle: 'italic',
        }}>
          {t('chart.note')}
        </p>
      </div>
    </section>
  );
}
