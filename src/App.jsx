import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComparisonSection from './components/ComparisonSection';
import ChartSection from './components/ChartSection';
import PlatformsSection from './components/PlatformsSection';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import VideoSection from './components/VideoSection';
import PsychologySection from './components/PsychologySection';
import ProcessSection from './components/ProcessSection';
import PackagesSection from './components/PackagesSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';

/* SEO meta per language */
const SEO_META = {
  tr: {
    title: 'Uğur UĞURLU | Yapay Zeka ile Görsel Üretim – AI Ürün Fotoğrafı & Reklam Videosu',
    description: 'Trendyol, Hepsiburada, Amazon, Etsy\'de daha fazla sat. Yapay zeka ile profesyonel ürün görseli, mankenli sunum ve reklam videosu üretimi. Hemen teklif al!',
    keywords: 'yapay zeka ürün görseli, AI ürün fotoğrafı, e-ticaret görsel üretimi, mankenli ürün fotoğrafı, Trendyol ürün görseli, reklam görseli üretimi, dijital mankene giydirme',
  },
  en: {
    title: 'Uğur UĞURLU | AI Product Photography & Ad Videos for E-Commerce',
    description: 'Stand out on Amazon, Etsy, eBay and more with AI-powered professional product visuals, mannequin presentations, and ad videos. Get a quote today!',
    keywords: 'AI product photography, virtual product photography, e-commerce product images, AI mannequin photos, product image optimization, dropshipping product photos AI',
  },
  ar: {
    title: 'أوغور أوغورلو | تصوير المنتجات بالذكاء الاصطناعي لمتاجر الإلكترونية',
    description: 'تميز في أمازون وإيتسي والمزيد مع صور المنتجات الاحترافية بالذكاء الاصطناعي وعروض المانيكان ومقاطع الفيديو الإعلانية.',
    keywords: 'صور منتجات بالذكاء الاصطناعي, تصوير المنتجات التجارية, تحسين صور المتجر الإلكتروني',
  },
};

export default function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'tr';
  const meta = SEO_META[lang] || SEO_META.tr;

  return (
    <>
      <Helmet>
        <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <ComparisonSection />
        <ChartSection />
        <PlatformsSection />
        <ServicesSection />
        <BeforeAfterSection />
        <VideoSection />
        <PsychologySection />
        <ProcessSection />
        <PackagesSection />
        <CTASection />
        <FAQSection />
      </main>

      <Footer />

      {/* Sticky WhatsApp CTA Bar (rectangular) */}
      <WhatsAppCTA />

      {/* Floating WhatsApp Bubble (always visible corner) */}
      <a
        href="https://wa.me/905550570368"
        id="whatsapp-float"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="WhatsApp ile İletişim"
        title="WhatsApp'tan Yaz"
        style={{
          position: 'fixed', bottom: '5.5rem', right: '1.5rem', zIndex: 997,
          width: '54px', height: '54px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          animation: 'wa-pulse 2.5s infinite',
          transition: 'transform 0.3s',
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.4); }
          70% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 12px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </>
  );
}
