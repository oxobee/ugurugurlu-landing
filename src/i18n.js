import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      nav: {
        services: "Hizmetler",
        portfolio: "Örnekler",
        packages: "Paketler",
        contact: "İletişim",
        cta: "Teklif Al",
      },
      hero: {
        badge: "İŞ ALIMI AÇIK",
        title: "Rakiplerinle Aynı Ürünü Satıyorsan, Farkı Görsellerin Belirler",
        subtitle: "Aynı ürünü satan yüzlerce mağaza arasından sıyrılmak için profesyonel görseller, mankenli sunumlar ve reklam videoları üretiyorum.",
        tagline: "Dikkat çeken kazanır. Sıradan görünen kaybeder.",
        cta_primary: "Teklif Al",
        cta_secondary: "Örnekleri Gör",
        key_message: "Aynı ürünü satıyor olabilirsin. Ama daha iyi gösteriyorsan, daha çok satarsın.",
      },
      comparison: {
        title: "Aynı Ürün, Farklı Sunum = Daha Fazla Satış",
        subtitle: "Aynı ürünü satan 10 mağaza var. Müşteri hangisini seçer? Görseli daha iyi olanı.",
        standard_title: "Standart Satıcı",
        standard_items: ["Beyaz arka plan ürün", "Düşük dikkat çekme", "Ortalama dönüşüm", "Rakipler arasında kaybolur"],
        pro_title: "Profesyonel Sunum (Sen)",
        pro_items: ["Mankenli kullanım görseli", "Senaryo ve sahne görselleri", "Reklam videosu", "Rakipler arasından sıyrılır"],
        toggle_label: "Görsel Kalitesi Artır → Satış Etkisini Gör",
      },
      chart: {
        title: "Görsel Kalitesi Satışınızı Nasıl Etkiler?",
        labels: ["Düz Ürün Fotoğrafı", "İyileştirilmiş Görsel", "Mankenli Sunum", "Reklam Videosu"],
        tooltip: "Daha iyi sunum = daha fazla dikkat = daha yüksek satış ihtimali",
        description: "Görsel kalitesi arttıkça müşteri güveni ve satın alma ihtimali yükselir.",
        note: "* Bu oranlar sektörel gözlemlere dayalıdır, ürün ve pazara göre değişebilir.",
        y_label: "Dönüşüm Oranı (%)",
      },
      platforms: {
        title: "Nerede Satıyorsan, Orada Öne Çık",
        subtitle: "Aynı ürün listesinde en dikkat çeken sen ol.",
      },
      services: {
        title: "Hizmetlerim",
        subtitle: "Her platform için optimize, profesyonel içerikler",
        items: [
          { title: "Dijital Mankene Giydirme", desc: "Ürününüzü gerçekçi dijital mankene giydirerek hayat verin." },
          { title: "Farklı Poz ve Açılar", desc: "Her açıdan çekici, dikkat çekici görsel varyasyonlar." },
          { title: "Reklam Görseli Üretimi", desc: "Sosyal medya ve pazaryeri için optimize reklam görselleri." },
          { title: "Video Reklam (Reels/TikTok)", desc: "Viral potansiyelli, dikkat çekici kısa video içerikleri." },
          { title: "Sosyal Medya İçerikleri", desc: "Instagram, TikTok ve diğer platformlar için içerik üretimi." },
          { title: "Pazaryeri Optimizasyon", desc: "Trendyol, Hepsiburada, Amazon için kapsamlı görsel paketi." },
        ],
      },
      beforeafter: {
        title: "Dönüşümü Kendin Gör",
        subtitle: "Kaydırarak farkı hisset",
        before: "Standart Görsel",
        after: "Profesyonel Sunum",
      },
      psychology: {
        title: "Müşteri Ürünü Değil, Görseli Satın Alır",
        items: [
          { title: "Önce Görür, Sonra Karar Verir", desc: "İnsan beyni görseli metinden %60.000 daha hızlı işler." },
          { title: "İlk 3 Saniye Kritik", desc: "Dikkat çekemeyen ürün, müşteriye görünmez hale gelir." },
          { title: "Dikkat Çekmeyen Ürün Kaybeder", desc: "Yüzlerce rakip arasında kaybolmak yerine öne çıkın." },
          { title: "Güven Veren Görsel Satış Getirir", desc: "Profesyonel sunum, marka güvenini %3x artırır." },
        ],
      },
      process: {
        title: "Nasıl Çalışır?",
        subtitle: "4 adımda profesyonel içeriğe ulaşın",
        steps: [
          { num: "01", title: "Ürünü Gönder", desc: "Ürün fotoğrafınızı veya bilgilerinizi bize gönderin." },
          { num: "02", title: "Tarzı Seç", desc: "Görsel tarzı, platform ve hedef kitleyi belirleyin." },
          { num: "03", title: "İçerik Üretelim", desc: "Yapay zeka teknolojisiyle profesyonel içerikler hazırlayalım." },
          { num: "04", title: "Satışa Koy", desc: "Hazır görselleri platformlara yükle, satışları izle." },
        ],
      },
      packages: {
        title: "Paketler",
        subtitle: "İhtiyacınıza uygun paketi seçin",
        badge: "En Çok Tercih Edilen",
        cta: "Teklif Al",
        items: [
          {
            name: "Başlangıç",
            desc: "Küçük işletmeler ve tekil ürünler için",
            features: ["3 farklı görsel", "1 platform optimizasyonu", "Temel düzenleme", "2 gün teslimat"],
          },
          {
            name: "Profesyonel",
            desc: "Büyüyen e-ticaret mağazaları için",
            features: ["10 farklı görsel", "3 platform optimizasyonu", "Mankenli sunum", "Video içerik", "3 gün teslimat", "Revizyon hakkı"],
          },
          {
            name: "Premium",
            desc: "Ciddi büyüme hedefleyen markalar için",
            features: ["Sınırsız görsel", "Tüm platformlar", "Mankenli + Sahne", "Reklam videosu", "Sosyal medya paketi", "Öncelikli destek"],
          },
        ],
      },
      cta_section: {
        title: "Ürünün Hazırsa, Satışa Dönüştürelim",
        subtitle: "İş alımı açık. Şu an aktif olarak yeni projeler alıyorum.",
        whatsapp: "WhatsApp'tan Yaz",
        offer: "Hızlı Teklif Al",
      },
      faq: {
        title: "Sık Sorulan Sorular",
        items: [
          { q: "Tek fotoğraf ile olur mu?", a: "Evet, tek bir ürün fotoğrafından profesyonel görsel seti üretebiliyorum. Ürünün net görüneceği bir fotoğraf yeterli." },
          { q: "Görseller gerçekçi mi görünüyor?", a: "Yapay zeka teknolojisi ile üretilen görseller son derece gerçekçi görünmektedir. Müşterilerim yüksek memnuniyet oranlarıyla devam eden projeler oluşturuyor." },
          { q: "Teslim süresi ne kadar?", a: "Paket türüne göre 24 saat ile 5 iş günü arasında değişmektedir. Acil projeler için öncelikli işlem uygulanır." },
          { q: "Video reklam da yapılabiliyor mu?", a: "Evet. Reels, TikTok ve dijital reklam formatlarında video içerik üretimi de yapıyorum." },
          { q: "Pazaryeri kurallarına uygun mu?", a: "Trendyol, Hepsiburada, Amazon, Etsy ve ÇiçekSepeti görsел kurallarına tam uyumlu içerikler üretiyorum." },
        ],
      },
      footer: {
        tagline: "Yapay Zeka ile Görsel Üretim",
        phone: "+90 555 057 03 68",
        email: "mail@ugurugurlu.net",
        site: "www.ugurugurlu.net",
        rights: "Tüm hakları saklıdır.",
      },
      videos: {
        title: "Reklam Videoları",
        subtitle: "Ürünlerinizi harekete geçirin",
        vertical_label: "Reels / TikTok",
        horizontal_label: "YouTube / Reklam",
        coming_soon: "Video Yakında",
      }
    }
  },
  en: {
    translation: {
      nav: {
        services: "Services",
        portfolio: "Portfolio",
        packages: "Packages",
        contact: "Contact",
        cta: "Get a Quote",
      },
      hero: {
        badge: "ACCEPTING NEW ORDERS",
        title: "If You're Selling the Same Product as Your Competitors, Visuals Make the Difference",
        subtitle: "I create professional visuals, mannequin presentations, and ad videos to help you stand out among hundreds of stores selling the same products.",
        tagline: "Those who attract attention win. Those who look ordinary lose.",
        cta_primary: "Get a Quote",
        cta_secondary: "See Examples",
        key_message: "You might be selling the same product. But if you present it better, you sell more.",
      },
      comparison: {
        title: "Same Product, Different Presentation = More Sales",
        subtitle: "10 stores sell the same product. Which one does the customer choose? The one with better visuals.",
        standard_title: "Standard Seller",
        standard_items: ["Plain white background", "Low attention score", "Average conversion rate", "Lost among competitors"],
        pro_title: "Professional Presentation (You)",
        pro_items: ["Mannequin lifestyle shots", "Scenario & scene visuals", "Ad video included", "Stand out from competition"],
        toggle_label: "Improve Visual Quality → See Sales Impact",
      },
      chart: {
        title: "How Does Visual Quality Affect Your Sales?",
        labels: ["Plain Product Photo", "Enhanced Visual", "Mannequin Presentation", "Ad Video"],
        tooltip: "Better presentation = more attention = higher chance of sale",
        description: "As visual quality increases, customer trust and purchase intent rise significantly.",
        note: "* These figures are based on industry observations and may vary by product and market.",
        y_label: "Conversion Rate (%)",
      },
      platforms: {
        title: "Stand Out Wherever You Sell",
        subtitle: "Be the most eye-catching listing among the same products.",
      },
      services: {
        title: "My Services",
        subtitle: "Professional content optimized for every platform",
        items: [
          { title: "Digital Mannequin Dressing", desc: "Bring your products to life with realistic digital mannequins." },
          { title: "Multiple Poses & Angles", desc: "Attractive, attention-grabbing visual variations from every angle." },
          { title: "Ad Visual Production", desc: "Optimized advertising visuals for social media and marketplaces." },
          { title: "Video Ads (Reels/TikTok)", desc: "Short video content with viral potential and high engagement." },
          { title: "Social Media Content", desc: "Content creation for Instagram, TikTok, and other platforms." },
          { title: "Marketplace Optimization", desc: "Comprehensive visual package for Trendyol, Amazon, Etsy & more." },
        ],
      },
      beforeafter: {
        title: "See the Transformation Yourself",
        subtitle: "Slide to feel the difference",
        before: "Standard Visual",
        after: "Professional Presentation",
      },
      psychology: {
        title: "Customers Buy the Visual, Not the Product",
        items: [
          { title: "See First, Decide Later", desc: "The human brain processes visuals 60,000x faster than text." },
          { title: "First 3 Seconds Are Critical", desc: "Products that fail to grab attention become invisible to customers." },
          { title: "Unnoticed Products Lose", desc: "Stand out instead of getting lost among hundreds of competitors." },
          { title: "Trust-Building Visuals Drive Sales", desc: "Professional presentation increases brand trust by 3x." },
        ],
      },
      process: {
        title: "How It Works",
        subtitle: "Get professional content in 4 easy steps",
        steps: [
          { num: "01", title: "Send Your Product", desc: "Send us your product photos or details." },
          { num: "02", title: "Choose Your Style", desc: "Define the visual style, platform, and target audience." },
          { num: "03", title: "We Create Content", desc: "We produce professional content using AI technology." },
          { num: "04", title: "Upload & Sell", desc: "Upload the ready visuals to platforms and watch your sales." },
        ],
      },
      packages: {
        title: "Packages",
        subtitle: "Choose the right package for your needs",
        badge: "Most Popular",
        cta: "Get a Quote",
        items: [
          {
            name: "Starter",
            desc: "For small businesses and single products",
            features: ["3 unique visuals", "1 platform optimization", "Basic editing", "2-day delivery"],
          },
          {
            name: "Professional",
            desc: "For growing e-commerce stores",
            features: ["10 unique visuals", "3 platform optimizations", "Mannequin presentation", "Video content", "3-day delivery", "Revision rights"],
          },
          {
            name: "Premium",
            desc: "For brands targeting serious growth",
            features: ["Unlimited visuals", "All platforms", "Mannequin + Scene", "Ad video", "Social media package", "Priority support"],
          },
        ],
      },
      cta_section: {
        title: "If Your Product Is Ready, Let's Turn It Into Sales",
        subtitle: "Accepting new projects. Currently actively taking on new work.",
        whatsapp: "Write on WhatsApp",
        offer: "Quick Quote",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Can it be done with just one photo?", a: "Yes, I can create a professional visual set from a single product photo. A clear photo of the product is sufficient." },
          { q: "Do the visuals look realistic?", a: "Visuals produced with AI technology look extremely realistic. My clients continuously work with me due to high satisfaction rates." },
          { q: "How long does delivery take?", a: "It varies between 24 hours and 5 business days depending on the package. Priority processing is available for urgent projects." },
          { q: "Is video advertising also available?", a: "Yes. I also produce video content in Reels, TikTok, and digital ad formats." },
          { q: "Are the visuals compliant with marketplace rules?", a: "I produce content fully compliant with Trendyol, Hepsiburada, Amazon, Etsy, and ÇiçekSepeti image rules." },
        ],
      },
      footer: {
        tagline: "AI-Powered Visual Production",
        phone: "+90 555 057 03 68",
        email: "mail@ugurugurlu.net",
        site: "www.ugurugurlu.net",
        rights: "All rights reserved.",
      },
      videos: {
        title: "Ad Videos",
        subtitle: "Bring your products to life",
        vertical_label: "Reels / TikTok",
        horizontal_label: "YouTube / Ad",
        coming_soon: "Video Coming Soon",
      }
    }
  },
  ar: {
    translation: {
      nav: {
        services: "الخدمات",
        portfolio: "الأعمال",
        packages: "الباقات",
        contact: "التواصل",
        cta: "احصل على عرض",
      },
      hero: {
        badge: "نقبل طلبات جديدة",
        title: "إذا كنت تبيع نفس المنتج كمنافسيك، فالصور هي الفارق",
        subtitle: "أنتج صوراً احترافية وعروض تقديمية بالمانيكان وفيديوهات إعلانية لمساعدتك على التميز من بين مئات المتاجر التي تبيع نفس المنتجات.",
        tagline: "من يلفت الأنظار يفوز. من يبدو عادياً يخسر.",
        cta_primary: "احصل على عرض سعر",
        cta_secondary: "شاهد الأمثلة",
        key_message: "قد تبيع نفس المنتج. لكن إذا عرضته بشكل أفضل، ستبيع أكثر.",
      },
      comparison: {
        title: "نفس المنتج، عرض مختلف = مبيعات أكثر",
        subtitle: "10 متاجر تبيع نفس المنتج. أيها يختار العميل؟ الأفضل في الصور.",
        standard_title: "البائع العادي",
        standard_items: ["خلفية بيضاء عادية", "جذب انتباه منخفض", "معدل تحويل متوسط", "يضيع بين المنافسين"],
        pro_title: "العرض الاحترافي (أنت)",
        pro_items: ["صور مانيكان واقعية", "مشاهد وسيناريوهات إبداعية", "فيديو إعلاني مدرج", "تميز عن المنافسين"],
        toggle_label: "حسّن جودة الصور ← شاهد تأثير المبيعات",
      },
      chart: {
        title: "كيف تؤثر جودة الصور على مبيعاتك؟",
        labels: ["صورة منتج عادية", "صورة محسّنة", "عرض مانيكان", "فيديو إعلاني"],
        tooltip: "عرض أفضل = انتباه أكثر = احتمال بيع أعلى",
        description: "كلما ارتفعت جودة الصورة، ارتفعت ثقة العميل وزادت نية الشراء بشكل ملحوظ.",
        note: "* هذه الأرقام مبنية على ملاحظات قطاعية وقد تتفاوت حسب المنتج والسوق.",
        y_label: "معدل التحويل (%)",
      },
      platforms: {
        title: "تميز في كل مكان تبيع فيه",
        subtitle: "كن الأكثر لفتاً للنظر بين المنتجات المتشابهة.",
      },
      services: {
        title: "خدماتي",
        subtitle: "محتوى احترافي مُحسَّن لكل منصة",
        items: [
          { title: "إلباس المانيكان الرقمي", desc: "أضف الحياة لمنتجاتك مع مانيكانات رقمية واقعية." },
          { title: "أوضاع وزوايا متعددة", desc: "تنويعات بصرية جذابة ومبهرة من كل زاوية." },
          { title: "إنتاج مواد إعلانية", desc: "مواد إعلانية مُحسَّنة لوسائل التواصل الاجتماعي والأسواق الإلكترونية." },
          { title: "فيديوهات إعلانية (ريلز/تيك توك)", desc: "محتوى فيديو قصير بإمكانية انتشار واسعة." },
          { title: "محتوى وسائل التواصل الاجتماعي", desc: "إنتاج محتوى لإنستغرام وتيك توك والمنصات الأخرى." },
          { title: "تحسين الأسواق الإلكترونية", desc: "باقة صور شاملة لأمازون وإيتسي وغيرها." },
        ],
      },
      beforeafter: {
        title: "شاهد التحول بنفسك",
        subtitle: "حرك للإحساس بالفرق",
        before: "صورة عادية",
        after: "عرض احترافي",
      },
      psychology: {
        title: "العميل يشتري الصورة، لا المنتج",
        items: [
          { title: "يرى أولاً، ثم يقرر", desc: "الدماغ البشري يعالج الصور بسرعة أكبر 60,000 مرة من النص." },
          { title: "الثواني الثلاث الأولى حاسمة", desc: "المنتجات التي لا تجذب الانتباه تصبح غير مرئية للعملاء." },
          { title: "المنتج غير الملحوظ يخسر", desc: "تميز بدلاً من الضياع بين مئات المنافسين." },
          { title: "الصور الموثوقة تزيد المبيعات", desc: "العرض الاحترافي يزيد الثقة بالعلامة التجارية 3 أضعاف." },
        ],
      },
      process: {
        title: "كيف يعمل؟",
        subtitle: "احصل على محتوى احترافي في 4 خطوات",
        steps: [
          { num: "01", title: "أرسل منتجك", desc: "أرسل لنا صور منتجك أو تفاصيله." },
          { num: "02", title: "اختر أسلوبك", desc: "حدد الأسلوب البصري والمنصة والجمهور المستهدف." },
          { num: "03", title: "ننتج المحتوى", desc: "ننتج محتوى احترافياً باستخدام تقنية الذكاء الاصطناعي." },
          { num: "04", title: "ارفع وبيع", desc: "ارفع الصور الجاهزة على المنصات وراقب مبيعاتك." },
        ],
      },
      packages: {
        title: "الباقات",
        subtitle: "اختر الباقة المناسبة لاحتياجاتك",
        badge: "الأكثر شعبية",
        cta: "احصل على عرض",
        items: [
          {
            name: "المبتدئ",
            desc: "للشركات الصغيرة والمنتجات الفردية",
            features: ["3 صور فريدة", "تحسين منصة واحدة", "تحرير أساسي", "تسليم خلال يومين"],
          },
          {
            name: "الاحترافي",
            desc: "لمتاجر التجارة الإلكترونية المتنامية",
            features: ["10 صور فريدة", "تحسين 3 منصات", "عرض مانيكان", "محتوى فيديو", "تسليم خلال 3 أيام", "حق المراجعة"],
          },
          {
            name: "المتميز",
            desc: "للعلامات التجارية التي تستهدف نمواً جاداً",
            features: ["صور غير محدودة", "جميع المنصات", "مانيكان + مشهد", "فيديو إعلاني", "باقة وسائل التواصل", "دعم ذو أولوية"],
          },
        ],
      },
      cta_section: {
        title: "إذا كان منتجك جاهزاً، دعنا نحوله إلى مبيعات",
        subtitle: "نقبل مشاريع جديدة. أعمل حالياً على مشاريع جديدة بنشاط.",
        whatsapp: "تواصل عبر واتساب",
        offer: "عرض سريع",
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          { q: "هل يمكن العمل بصورة واحدة فقط؟", a: "نعم، يمكنني إنتاج مجموعة صور احترافية من صورة منتج واحدة. صورة واضحة للمنتج كافية." },
          { q: "هل الصور تبدو واقعية؟", a: "الصور المنتجة بتقنية الذكاء الاصطناعي تبدو واقعية للغاية. يستمر عملائي في التعامل معي بسبب معدلات الرضا العالية." },
          { q: "كم يستغرق التسليم؟", a: "يتراوح بين 24 ساعة و5 أيام عمل حسب الباقة. المعالجة الأولوية متاحة للمشاريع العاجلة." },
          { q: "هل الإعلانات المصورة متاحة أيضاً؟", a: "نعم. أنتج أيضاً محتوى فيديو بصيغ ريلز وتيك توك والإعلانات الرقمية." },
          { q: "هل الصور متوافقة مع قواعد الأسواق الإلكترونية؟", a: "أنتج محتوى متوافقاً تماماً مع قواعد صور تريندزيول وهبسي بورادا وأمازون وإيتسي." },
        ],
      },
      footer: {
        tagline: "إنتاج بصري بالذكاء الاصطناعي",
        phone: "+90 555 057 03 68",
        email: "mail@ugurugurlu.net",
        site: "www.ugurugurlu.net",
        rights: "جميع الحقوق محفوظة.",
      },
      videos: {
        title: "فيديوهات إعلانية",
        subtitle: "أضف الحركة لمنتجاتك",
        vertical_label: "ريلز / تيك توك",
        horizontal_label: "يوتيوب / إعلان",
        coming_soon: "الفيديو قريباً",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
