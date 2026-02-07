import { products } from './products';
import { blogPosts } from '@/lib/mockData';

export interface LocalizedSEOText {
  en: string;
  ar: string;
}

export interface OpenGraphLocale {
  title: string;
  description: string;
  type: 'website' | 'article' | 'product';
  url: string;
  image: string;
  locale: string;
  siteName: string;
}

export interface PageSEO {
  path: string;
  pageType: 'static' | 'product' | 'article' | 'system';
  title: LocalizedSEOText;
  metaDescription: LocalizedSEOText;
  keywords: LocalizedSEOText;
  openGraph: {
    en: OpenGraphLocale;
    ar: OpenGraphLocale;
  };
  structuredData: {
    en: Record<string, unknown> | Record<string, unknown>[];
    ar: Record<string, unknown> | Record<string, unknown>[];
  };
}

const siteUrl = 'https://polysource.global';
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PolySource Global',
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description: 'B2B polymer supplier in Dubai for virgin, recycled, and compound materials.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE'
  },
  areaServed: ['Middle East', 'Europe', 'Africa'],
  knowsAbout: [
    'Recycled polymers',
    'Virgin petrochemical grades',
    'Masterbatch and compounds',
    'Bulk polymer logistics',
    'Technical polymer support'
  ]
};

const staticPages: PageSEO[] = [
  {
    path: '/',
    pageType: 'static',
    title: {
      en: 'PolySource Global | B2B Polymer Supplier in Dubai',
      ar: 'بولي سورس جلوبال | مورد بوليمرات B2B في دبي'
    },
    metaDescription: {
      en: 'Source virgin and recycled polymers, compounds, and masterbatch with technical support, bulk order reliability, and fast Dubai logistics for packaging, automotive, and construction.',
      ar: 'احصل على البوليمرات البكر والمعاد تدويرها والكمباوند والماستر باتش مع دعم فني وموثوقية في الطلبيات الكبيرة ولوجستيات سريعة من دبي لقطاعات التعبئة والسيارات والإنشاءات.'
    },
    keywords: {
      en: 'B2B polymer supplier Dubai, recycled plastic granules, virgin polymer grades, masterbatch supplier UAE, bulk polymer orders',
      ar: 'مورد بوليمرات B2B دبي, حبيبات بلاستيك معاد تدويرها, درجات بوليمر بكر, مورد ماستر باتش الإمارات, طلبيات بوليمرات بالجملة'
    },
    openGraph: {
      en: {
        title: 'PolySource Global | B2B Polymer Supplier in Dubai',
        description: 'Reliable polymer sourcing for industrial buyers with sustainability, technical quality, and regional logistics advantage.',
        type: 'website',
        url: `${siteUrl}/`,
        image: `${siteUrl}/images/hero-home-polymers.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'بولي سورس جلوبال | مورد بوليمرات B2B في دبي',
        description: 'توريد بوليمرات موثوق للمشترين الصناعيين مع الاستدامة والجودة الفنية وميزة لوجستية إقليمية.',
        type: 'website',
        url: `${siteUrl}/ar`,
        image: `${siteUrl}/images/hero-home-polymers.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: [
        orgSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'PolySource Global',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/products?search={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
      ],
      ar: [
        orgSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'PolySource Global',
          url: `${siteUrl}/ar`
        }
      ]
    }
  },
  {
    path: '/products',
    pageType: 'static',
    title: {
      en: 'Polymer Products | Virgin, Recycled & Compounds for Industry',
      ar: 'منتجات البوليمر | بكر ومعاد تدويره وكمباوند للصناعة'
    },
    metaDescription: {
      en: 'Explore LDPE, HDPE, PP, recycled rPET/rPP/rPE, and performance compounds. Compare grades by MFI, color, and applications for packaging, automotive, and construction lines.',
      ar: 'استعرض LDPE وHDPE وPP ومواد rPET/rPP/rPE المعاد تدويرها وكمباوندات الأداء. قارن الدرجات حسب MFI واللون والتطبيقات لخطوط التعبئة والسيارات والإنشاءات.'
    },
    keywords: {
      en: 'LDPE film grade, HDPE blow molding, PP homopolymer, recycled rPET flakes, polymer compounds B2B',
      ar: 'درجة فيلم LDPE, HDPE للقولبة بالنفخ, PP هوموبوليمر, رقائق rPET معاد تدويرها, كمباوندات بوليمر B2B'
    },
    openGraph: {
      en: {
        title: 'Polymer Products for B2B Manufacturing',
        description: 'Technical polymer portfolio with recycled and virgin grades for high-volume industrial supply.',
        type: 'website',
        url: `${siteUrl}/products`,
        image: `${siteUrl}/images/hero-products-pellets.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'منتجات بوليمر للتصنيع الصناعي B2B',
        description: 'محفظة بوليمرات تقنية تشمل الدرجات المعاد تدويرها والبكر للتوريد الصناعي بكميات كبيرة.',
        type: 'website',
        url: `${siteUrl}/ar/products`,
        image: `${siteUrl}/images/hero-products-pellets.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Polymer Products',
        url: `${siteUrl}/products`,
        about: products.slice(0, 6).map((product) => ({
          '@type': 'Product',
          name: product.name,
          sku: product.grade,
          material: product.type,
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'MFI', value: product.mfi },
            { '@type': 'PropertyValue', name: 'Recycled', value: String(product.recycled) }
          ]
        }))
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'منتجات البوليمر',
        url: `${siteUrl}/ar/products`
      }
    }
  },
  {
    path: '/services',
    pageType: 'static',
    title: {
      en: 'B2B Services | Bulk Supply, QA, and Technical Polymer Support',
      ar: 'خدمات B2B | توريد بالجملة وضبط جودة ودعم فني للبوليمرات'
    },
    metaDescription: {
      en: 'From material matching and compliance documents to bulk shipping and post-sale technical support, PolySource enables stable polymer procurement at industrial scale.',
      ar: 'من مطابقة المواد ووثائق المطابقة إلى الشحن بالجملة والدعم الفني بعد البيع، تمكّن PolySource عمليات شراء بوليمرات مستقرة على نطاق صناعي.'
    },
    keywords: {
      en: 'bulk polymer procurement, technical material support, polymer quality assurance, B2B resin sourcing, Dubai polymer logistics',
      ar: 'شراء بوليمرات بالجملة, دعم فني للمواد, ضمان جودة البوليمرات, توريد راتنجات B2B, لوجستيات بوليمرات دبي'
    },
    openGraph: {
      en: {
        title: 'B2B Polymer Services for Industrial Buyers',
        description: 'End-to-end support for RFQ, technical qualification, and bulk delivery from Dubai.',
        type: 'website',
        url: `${siteUrl}/services`,
        image: `${siteUrl}/images/products/compounds-masterbatch.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'خدمات بوليمر B2B للمشترين الصناعيين',
        description: 'دعم متكامل لطلب الأسعار والتأهيل الفني والتسليم بالجملة من دبي.',
        type: 'website',
        url: `${siteUrl}/ar/services`,
        image: `${siteUrl}/images/products/compounds-masterbatch.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Industrial Polymer Sourcing & Technical Support',
        provider: { '@type': 'Organization', name: 'PolySource Global' },
        areaServed: ['AE', 'GCC', 'MENA', 'EU'],
        audience: { '@type': 'BusinessAudience', audienceType: 'Industrial B2B Buyers' }
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'توريد بوليمرات صناعية ودعم فني',
        provider: { '@type': 'Organization', name: 'PolySource Global' }
      }
    }
  },
  {
    path: '/about',
    pageType: 'static',
    title: {
      en: 'About PolySource Global | Trusted Polymer Partner in Dubai',
      ar: 'من نحن في PolySource Global | شريك بوليمرات موثوق في دبي'
    },
    metaDescription: {
      en: 'Learn how PolySource combines sustainability sourcing, strict quality controls, and B2B commercial expertise to supply packaging, automotive, and construction manufacturers.',
      ar: 'تعرف كيف تجمع PolySource بين التوريد المستدام وضبط الجودة الصارم والخبرة التجارية B2B لتوريد مصنعي التعبئة والسيارات والإنشاءات.'
    },
    keywords: {
      en: 'about polymer supplier dubai, polymer trading company UAE, B2B plastics partner, quality controlled polymers',
      ar: 'عن مورد بوليمرات دبي, شركة تجارة بوليمرات الإمارات, شريك بلاستيك B2B, بوليمرات بضبط جودة'
    },
    openGraph: {
      en: {
        title: 'About PolySource Global',
        description: 'Trusted sourcing partner for technical and recycled polymer materials in Dubai.',
        type: 'website',
        url: `${siteUrl}/about`,
        image: `${siteUrl}/images/hero-about-facility.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'عن PolySource Global',
        description: 'شريك توريد موثوق لمواد البوليمر التقنية والمعاد تدويرها في دبي.',
        type: 'website',
        url: `${siteUrl}/ar/about`,
        image: `${siteUrl}/images/hero-about-facility.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: orgSchema,
      ar: orgSchema
    }
  },
  {
    path: '/sustainability',
    pageType: 'static',
    title: {
      en: 'Sustainability | Recycled Polymer Solutions for Circular Manufacturing',
      ar: 'الاستدامة | حلول بوليمرات معاد تدويرها للتصنيع الدائري'
    },
    metaDescription: {
      en: 'Discover recycled polymer grades including rHDPE, rPP, rLDPE, and rPET with traceability-focused sourcing and technical suitability for industrial conversion processes.',
      ar: 'اكتشف درجات البوليمرات المعاد تدويرها مثل rHDPE وrPP وrLDPE وrPET مع توريد يركز على التتبع والملاءمة الفنية لعمليات التحويل الصناعية.'
    },
    keywords: {
      en: 'recycled polymers UAE, circular plastics supply, rHDPE rPP rPET, sustainable packaging materials, PCR compounds',
      ar: 'بوليمرات معاد تدويرها الإمارات, توريد بلاستيك دائري, rHDPE rPP rPET, مواد تعبئة مستدامة, كمباوند PCR'
    },
    openGraph: {
      en: {
        title: 'Sustainable Polymer Sourcing for Industry',
        description: 'High-quality recycled grades with consistent technical performance and documentation.',
        type: 'website',
        url: `${siteUrl}/sustainability`,
        image: `${siteUrl}/images/home-sustainability-recycling.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'توريد بوليمرات مستدامة للصناعة',
        description: 'درجات معاد تدويرها عالية الجودة بأداء فني ثابت ووثائق موثوقة.',
        type: 'website',
        url: `${siteUrl}/ar/sustainability`,
        image: `${siteUrl}/images/home-sustainability-recycling.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Sustainability at PolySource Global',
        about: ['Recycled polymers', 'Circular economy', 'Industrial sustainability']
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'الاستدامة في PolySource Global',
        about: ['البوليمرات المعاد تدويرها', 'الاقتصاد الدائري', 'الاستدامة الصناعية']
      }
    }
  },
  {
    path: '/resources',
    pageType: 'static',
    title: {
      en: 'Resources | Polymer Technical Guides, Market Insights & Processing Tips',
      ar: 'الموارد | أدلة تقنية للبوليمرات ورؤى السوق ونصائح المعالجة'
    },
    metaDescription: {
      en: 'Access practical content for industrial buyers: grade selection, processing optimization, recycled-content strategies, and regional polymer market updates.',
      ar: 'احصل على محتوى عملي للمشترين الصناعيين: اختيار الدرجات وتحسين المعالجة واستراتيجيات المحتوى المعاد تدويره وتحديثات سوق البوليمرات الإقليمية.'
    },
    keywords: {
      en: 'polymer processing guide, recycled content strategy, polymer market insights, MFI technical guide, B2B plastics knowledge',
      ar: 'دليل معالجة البوليمر, استراتيجية المحتوى المعاد تدويره, رؤى سوق البوليمرات, دليل MFI التقني, معرفة البلاستيك B2B'
    },
    openGraph: {
      en: {
        title: 'Polymer Knowledge Center for B2B Teams',
        description: 'Technical resources and decision-support content for polymer procurement and production teams.',
        type: 'website',
        url: `${siteUrl}/resources`,
        image: `${siteUrl}/images/products/petrochemical-pellets.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'مركز معرفة البوليمرات لفرق B2B',
        description: 'موارد تقنية ومحتوى داعم للقرار لفرق شراء وإنتاج البوليمرات.',
        type: 'website',
        url: `${siteUrl}/ar/resources`,
        image: `${siteUrl}/images/products/petrochemical-pellets.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'PolySource Resources',
        itemListElement: blogPosts.slice(0, 4).map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${siteUrl}/blog/${post.id}`,
          name: post.title_en
        }))
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'موارد PolySource',
        itemListElement: blogPosts.slice(0, 4).map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${siteUrl}/ar/blog/${post.id}`,
          name: post.title_ar
        }))
      }
    }
  },
  {
    path: '/blog',
    pageType: 'static',
    title: {
      en: 'Polymer Blog | Technical Insights for B2B Manufacturers',
      ar: 'مدونة البوليمرات | رؤى تقنية لمصنّعي B2B'
    },
    metaDescription: {
      en: 'Read expert articles on MFI, recycled-vs-virgin selection, quality traceability, and procurement strategy for packaging, automotive, and construction plastics.',
      ar: 'اقرأ مقالات خبراء حول MFI واختيار المعاد تدويره مقابل البكر وتتبع الجودة واستراتيجيات الشراء لبلاستيك التعبئة والسيارات والإنشاءات.'
    },
    keywords: {
      en: 'polymer blog, industrial plastics insights, recycled polymer quality, MFI articles, polymer procurement strategy',
      ar: 'مدونة البوليمر, رؤى البلاستيك الصناعي, جودة البوليمر المعاد تدويره, مقالات MFI, استراتيجية شراء البوليمرات'
    },
    openGraph: {
      en: {
        title: 'PolySource Blog for Industrial Polymer Buyers',
        description: 'Actionable technical and commercial insights for polymer sourcing and processing teams.',
        type: 'website',
        url: `${siteUrl}/blog`,
        image: `${siteUrl}/images/products/finished-parts.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'مدونة PolySource لمشتري البوليمرات الصناعيين',
        description: 'رؤى تقنية وتجارية قابلة للتنفيذ لفرق توريد ومعالجة البوليمرات.',
        type: 'website',
        url: `${siteUrl}/ar/blog`,
        image: `${siteUrl}/images/products/finished-parts.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'PolySource Global Blog',
        url: `${siteUrl}/blog`
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'مدونة PolySource Global',
        url: `${siteUrl}/ar/blog`
      }
    }
  },
  {
    path: '/faq',
    pageType: 'static',
    title: {
      en: 'FAQ | Polymer Grades, Bulk Orders, and Technical Support',
      ar: 'الأسئلة الشائعة | درجات البوليمر والطلبيات الكبيرة والدعم الفني'
    },
    metaDescription: {
      en: 'Find answers on MOQ, lead times, recycled content, quality checks, and application matching for B2B polymer procurement from Dubai.',
      ar: 'اعثر على إجابات حول الحد الأدنى للطلب وأوقات التوريد والمحتوى المعاد تدويره وفحوصات الجودة وملاءمة التطبيقات لشراء البوليمرات B2B من دبي.'
    },
    keywords: {
      en: 'polymer supplier FAQ, bulk order MOQ polymers, recycled resin quality checks, Dubai polymer lead time',
      ar: 'أسئلة مورد البوليمرات, حد أدنى لطلب البوليمرات بالجملة, فحوصات جودة الراتنج المعاد تدويره, مدة توريد البوليمرات من دبي'
    },
    openGraph: {
      en: {
        title: 'FAQ for B2B Polymer Procurement',
        description: 'Quick answers for industrial buyers on grades, logistics, and documentation.',
        type: 'website',
        url: `${siteUrl}/faq`,
        image: `${siteUrl}/images/products/recycled-granules.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'الأسئلة الشائعة لشراء البوليمرات B2B',
        description: 'إجابات سريعة للمشترين الصناعيين حول الدرجات واللوجستيات والوثائق.',
        type: 'website',
        url: `${siteUrl}/ar/faq`,
        image: `${siteUrl}/images/products/recycled-granules.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can you supply recycled and virgin grades in bulk?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. PolySource supplies both recycled and virgin polymer grades for industrial-scale orders.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you provide technical support for grade selection?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our team supports application-based grade matching using MFI, mechanical performance, and processing requirements.'
            }
          }
        ]
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'هل يمكنكم توريد الدرجات المعاد تدويرها والبكر بكميات كبيرة؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نعم، توفر PolySource درجات بوليمر معاد تدويرها وبكر للطلبات الصناعية الكبيرة.'
            }
          }
        ]
      }
    }
  },
  {
    path: '/contact',
    pageType: 'static',
    title: {
      en: 'Contact PolySource Global | RFQ for Industrial Polymer Supply',
      ar: 'تواصل مع PolySource Global | طلب عرض سعر لتوريد البوليمرات الصناعية'
    },
    metaDescription: {
      en: 'Send your RFQ for recycled or virgin polymer grades. Our Dubai team responds with technical recommendations, pricing, and shipping options for B2B buyers.',
      ar: 'أرسل طلب عرض السعر لدرجات البوليمر المعاد تدويرها أو البكر. يرد فريق دبي بتوصيات فنية وتسعير وخيارات الشحن لمشتري B2B.'
    },
    keywords: {
      en: 'polymer RFQ Dubai, contact polymer supplier UAE, bulk resin quote, technical polymer consultation',
      ar: 'طلب عرض سعر بوليمرات دبي, التواصل مع مورد بوليمرات الإمارات, عرض سعر راتنج بالجملة, استشارة فنية للبوليمرات'
    },
    openGraph: {
      en: {
        title: 'Request a Polymer Quote from PolySource Global',
        description: 'Connect with our B2B team for bulk orders, technical data, and logistics planning.',
        type: 'website',
        url: `${siteUrl}/contact`,
        image: `${siteUrl}/images/products/petrochemical-pellets.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'اطلب عرض سعر بوليمرات من PolySource Global',
        description: 'تواصل مع فريق B2B لطلبات الجملة والبيانات الفنية والتخطيط اللوجستي.',
        type: 'website',
        url: `${siteUrl}/ar/contact`,
        image: `${siteUrl}/images/products/petrochemical-pellets.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact PolySource Global',
        url: `${siteUrl}/contact`,
        mainEntity: {
          '@type': 'Organization',
          name: 'PolySource Global',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE'
          }
        }
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'اتصل بـ PolySource Global',
        url: `${siteUrl}/ar/contact`
      }
    }
  },
  {
    path: '*',
    pageType: 'system',
    title: {
      en: 'Page Not Found | PolySource Global',
      ar: 'الصفحة غير موجودة | PolySource Global'
    },
    metaDescription: {
      en: 'The requested page could not be found. Continue browsing PolySource Global products and resources.',
      ar: 'تعذر العثور على الصفحة المطلوبة. تابع تصفح منتجات وموارد PolySource Global.'
    },
    keywords: {
      en: '404, page not found',
      ar: '404, الصفحة غير موجودة'
    },
    openGraph: {
      en: {
        title: 'Page Not Found',
        description: 'Return to PolySource Global homepage and continue your product search.',
        type: 'website',
        url: `${siteUrl}/404`,
        image: `${siteUrl}/images/hero-home-polymers.jpg`,
        locale: 'en_US',
        siteName: 'PolySource Global'
      },
      ar: {
        title: 'الصفحة غير موجودة',
        description: 'ارجع إلى الصفحة الرئيسية في PolySource Global وتابع البحث عن المنتجات.',
        type: 'website',
        url: `${siteUrl}/ar/404`,
        image: `${siteUrl}/images/hero-home-polymers.jpg`,
        locale: 'ar_AE',
        siteName: 'PolySource Global'
      }
    },
    structuredData: {
      en: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '404 - Page Not Found'
      },
      ar: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '404 - الصفحة غير موجودة'
      }
    }
  }
];

const productPages: PageSEO[] = products.map((product) => ({
  path: `/products/${product.id}`,
  pageType: 'product',
  title: {
    en: `${product.name} (${product.grade}) | Industrial Polymer Supply`,
    ar: `${product.name} (${product.grade}) | توريد بوليمرات صناعية`
  },
  metaDescription: {
    en: `${product.description}. Grade ${product.grade} with MFI ${product.mfi}, color ${product.color}, and applications in ${product.applications.join(', ')}. Available for B2B bulk orders from Dubai.`,
    ar: `${product.name} بدرجة ${product.grade} بمؤشر تدفق ${product.mfi} ولون ${product.color} وتطبيقات في ${product.applications.join('، ')}. متاح لطلبات B2B الكبيرة من دبي.`
  },
  keywords: {
    en: `${product.name}, ${product.grade}, ${product.type}, industrial polymer, B2B bulk resin`,
    ar: `${product.name}, ${product.grade}, ${product.type}, بوليمر صناعي, راتنج بالجملة B2B`
  },
  openGraph: {
    en: {
      title: `${product.name} | PolySource Global`,
      description: `${product.grade} for industrial use. MFI ${product.mfi}. ${product.recycled ? 'Recycled content solution.' : 'Virgin grade solution.'}`,
      type: 'product',
      url: `${siteUrl}/products/${product.id}`,
      image: `${siteUrl}/images/products/${product.recycled ? 'recycled-granules.jpg' : 'petrochemical-pellets.jpg'}`,
      locale: 'en_US',
      siteName: 'PolySource Global'
    },
    ar: {
      title: `${product.name} | PolySource Global`,
      description: `${product.grade} للاستخدام الصناعي. MFI ${product.mfi}. ${product.recycled ? 'حل بمحتوى معاد تدويره.' : 'حل بدرجة بكر.'}`,
      type: 'product',
      url: `${siteUrl}/ar/products/${product.id}`,
      image: `${siteUrl}/images/products/${product.recycled ? 'recycled-granules.jpg' : 'petrochemical-pellets.jpg'}`,
      locale: 'ar_AE',
      siteName: 'PolySource Global'
    }
  },
  structuredData: {
    en: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.grade,
      description: product.description,
      material: product.type,
      category: product.category,
      brand: { '@type': 'Brand', name: 'PolySource Global' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        seller: { '@type': 'Organization', name: 'PolySource Global' }
      },
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'MFI', value: product.mfi },
        { '@type': 'PropertyValue', name: 'Color', value: product.color },
        { '@type': 'PropertyValue', name: 'Recycled', value: product.recycled ? 'Yes' : 'No' }
      ]
    },
    ar: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.grade,
      description: `درجة ${product.grade} لتطبيقات ${product.applications.join('، ')}`,
      brand: { '@type': 'Brand', name: 'PolySource Global' }
    }
  }
}));

const articlePages: PageSEO[] = blogPosts.map((post) => ({
  path: `/blog/${post.id}`,
  pageType: 'article',
  title: {
    en: `${post.title_en} | PolySource Blog`,
    ar: `${post.title_ar} | مدونة PolySource`
  },
  metaDescription: {
    en: `${post.excerpt_en}. Read this technical article for B2B polymer sourcing and production optimization.`,
    ar: `${post.excerpt_ar}. اقرأ هذا المقال التقني لتحسين توريد وإنتاج البوليمرات في بيئة B2B.`
  },
  keywords: {
    en: `${post.category}, polymer blog, industrial plastics, B2B sourcing, PolySource Global`,
    ar: `${post.category_ar}, مدونة البوليمرات, البلاستيك الصناعي, توريد B2B, PolySource Global`
  },
  openGraph: {
    en: {
      title: post.title_en,
      description: post.excerpt_en,
      type: 'article',
      url: `${siteUrl}/blog/${post.id}`,
      image: post.image,
      locale: 'en_US',
      siteName: 'PolySource Global'
    },
    ar: {
      title: post.title_ar,
      description: post.excerpt_ar,
      type: 'article',
      url: `${siteUrl}/ar/blog/${post.id}`,
      image: post.image,
      locale: 'ar_AE',
      siteName: 'PolySource Global'
    }
  },
  structuredData: {
    en: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title_en,
      description: post.excerpt_en,
      datePublished: post.date,
      author: { '@type': 'Organization', name: 'PolySource Global Editorial Team' },
      publisher: { '@type': 'Organization', name: 'PolySource Global' },
      image: post.image
    },
    ar: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title_ar,
      description: post.excerpt_ar,
      datePublished: post.date,
      author: { '@type': 'Organization', name: 'فريق التحرير في PolySource Global' },
      publisher: { '@type': 'Organization', name: 'PolySource Global' },
      image: post.image
    }
  }
}));

export const pageSEO: PageSEO[] = [...staticPages, ...productPages, ...articlePages];

