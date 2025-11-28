export interface NavigationItem {
  id: string;
  label: {
    en: string;
    fa: string;
    ar: string;
  };
  href?: string;
  icon?: string; // lucide icon name
  description?: {
    en: string;
    fa: string;
    ar: string;
  };
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    id: 'polymer-products',
    label: {
      en: 'Polymer Products',
      fa: 'محصولات پلیمری',
      ar: 'المنتجات البوليمرية'
    },
    href: '/products',
    icon: 'Package',
    description: {
      en: 'Browse our complete range of petrochemical, recycled, and specialty polymers',
      fa: 'مرور کامل محدوده ما از پلیمرهای پتروشیمی، بازیافتی و تخصصی',
      ar: 'تصفح مجموعتنا الكاملة من البوليمرات البتروكيماوية والمعاد تدويرها والمتخصصة'
    },
    children: [
      {
        id: 'petrochemical',
        label: {
          en: 'Petrochemical Raw Materials',
          fa: 'مواد اولیه پتروشیمی',
          ar: 'المواد الخام البتروكيماوية'
        },
        href: '/products?category=petrochemical',
        icon: 'Droplet',
        description: {
          en: 'Virgin polymers from petrochemical sources',
          fa: 'پلیمرهای اولیه از منابع پتروشیمی',
          ar: 'البوليمرات البكر من المصادر البتروكيماوية'
        },
        children: [
          {
            id: 'ldpe',
            label: {
              en: 'Low-Density Polyethylene (LDPE)',
              fa: 'پلی‌اتیلن کم چگال (LDPE)',
              ar: 'البولي إيثيلين منخفض الكثافة (LDPE)'
            },
            href: '/products?type=ldpe'
          },
          {
            id: 'lldpe',
            label: {
              en: 'Linear Low-Density Polyethylene (LLDPE)',
              fa: 'پلی‌اتیلن خطی کم چگال (LLDPE)',
              ar: 'البولي إيثيلين الخطي منخفض الكثافة (LLDPE)'
            },
            href: '/products?type=lldpe'
          },
          {
            id: 'hdpe',
            label: {
              en: 'High-Density Polyethylene (HDPE)',
              fa: 'پلی‌اتیلن پرچگال (HDPE)',
              ar: 'البولي إيثيلين عالي الكثافة (HDPE)'
            },
            href: '/products?type=hdpe'
          },
          {
            id: 'pp-h',
            label: {
              en: 'Polypropylene Homopolymer (PP-H)',
              fa: 'پلی‌پروپیلن هموپلیمر (PP-H)',
              ar: 'البولي بروبيلين المتجانس (PP-H)'
            },
            href: '/products?type=pp-h'
          },
          {
            id: 'pp-c',
            label: {
              en: 'Polypropylene Copolymer (PP-C)',
              fa: 'پلی‌پروپیلن کوپلیمر (PP-C)',
              ar: 'البولي بروبيلين المشترك (PP-C)'
            },
            href: '/products?type=pp-c'
          },
          {
            id: 'ps',
            label: {
              en: 'Polystyrene (PS)',
              fa: 'پلی‌استایرن (PS)',
              ar: 'البوليستيرين (PS)'
            },
            href: '/products?type=ps'
          },
          {
            id: 'pc',
            label: {
              en: 'Polycarbonate (PC)',
              fa: 'پلی‌کربنات (PC)',
              ar: 'البولي كربونات (PC)'
            },
            href: '/products?type=pc'
          },
          {
            id: 'abs-san',
            label: {
              en: 'ABS and SAN',
              fa: 'ABS و SAN',
              ar: 'ABS و SAN'
            },
            href: '/products?type=abs'
          },
          {
            id: 'pvc',
            label: {
              en: 'PVC',
              fa: 'PVC',
              ar: 'PVC'
            },
            href: '/products?type=pvc'
          }
        ]
      },
      {
        id: 'recycled',
        label: {
          en: 'Recycled Materials',
          fa: 'مواد بازیافتی',
          ar: 'المواد المعاد تدويرها'
        },
        href: '/products?category=recycled',
        icon: 'Recycle',
        description: {
          en: 'Certified recycled polymer granules',
          fa: 'گرانول‌های پلیمری بازیافتی گواهی‌شده',
          ar: 'حبيبات البوليمر المعاد تدويرها المعتمدة'
        },
        children: [
          {
            id: 'rpe',
            label: {
              en: 'Recycled Polyethylene (rPE)',
              fa: 'پلی‌اتیلن بازیافتی (rPE)',
              ar: 'البولي إيثيلين المعاد تدويره (rPE)'
            },
            href: '/products?type=rpe',
            children: [
              {
                id: 'rpe-light',
                label: {
                  en: 'Light Granules',
                  fa: 'گرانول سبک',
                  ar: 'الحبيبات الخفيفة'
                },
                href: '/products?type=rpe-light'
              },
              {
                id: 'rpe-heavy',
                label: {
                  en: 'Heavy Granules',
                  fa: 'گرانول سنگین',
                  ar: 'الحبيبات الثقيلة'
                },
                href: '/products?type=rpe-heavy'
              },
              {
                id: 'rpe-film',
                label: {
                  en: 'Film & Nylon Waste',
                  fa: 'ضایعات فیلم و نایلون',
                  ar: 'نفايات الأفلام والنايلون'
                },
                href: '/products?type=rpe-film'
              }
            ]
          },
          {
            id: 'rpp',
            label: {
              en: 'Recycled Polypropylene (rPP)',
              fa: 'پلی‌پروپیلن بازیافتی (rPP)',
              ar: 'البولي بروبيلين المعاد تدويره (rPP)'
            },
            href: '/products?type=rpp',
            children: [
              {
                id: 'rpp-textile',
                label: {
                  en: 'Textile Granules',
                  fa: 'گرانول نساجی',
                  ar: 'حبيبات النسيج'
                },
                href: '/products?type=rpp-textile'
              },
              {
                id: 'rpp-injection',
                label: {
                  en: 'Injection Granules',
                  fa: 'گرانول تزریقی',
                  ar: 'حبيبات الحقن'
                },
                href: '/products?type=rpp-injection'
              },
              {
                id: 'rpp-colored',
                label: {
                  en: 'Colored Compounds',
                  fa: 'کامپاندهای رنگی',
                  ar: 'المركبات الملونة'
                },
                href: '/products?type=rpp-colored'
              }
            ]
          },
          {
            id: 'other-recycled',
            label: {
              en: 'Other Recycled Polymers',
              fa: 'سایر پلیمرهای بازیافتی',
              ar: 'البوليمرات المعاد تدويرها الأخرى'
            },
            href: '/products?category=recycled&type=other',
            children: [
              {
                id: 'rabs',
                label: { en: 'ABS', fa: 'ABS', ar: 'ABS' },
                href: '/products?type=rabs'
              },
              {
                id: 'rps',
                label: { en: 'PS', fa: 'PS', ar: 'PS' },
                href: '/products?type=rps'
              },
              {
                id: 'rpet',
                label: { en: 'PET', fa: 'PET', ar: 'PET' },
                href: '/products?type=rpet'
              },
              {
                id: 'rpvc',
                label: { en: 'PVC', fa: 'PVC', ar: 'PVC' },
                href: '/products?type=rpvc'
              }
            ]
          }
        ]
      },
      {
        id: 'compounds',
        label: {
          en: 'Compounds & Masterbatches',
          fa: 'کامپاندها و مستربچ‌ها',
          ar: 'المركبات والمسترباتش'
        },
        href: '/products?category=compounds',
        icon: 'Beaker',
        description: {
          en: 'Custom formulations and color solutions',
          fa: 'فرمولاسیون‌های سفارشی و راهکارهای رنگی',
          ar: 'التركيبات المخصصة وحلول الألوان'
        },
        children: [
          {
            id: 'color-mb',
            label: {
              en: 'Color Masterbatch',
              fa: 'مستربچ رنگی',
              ar: 'مسترباتش الألوان'
            },
            href: '/products?type=color-mb'
          },
          {
            id: 'additive-mb',
            label: {
              en: 'Additive Masterbatch',
              fa: 'مستربچ افزودنی',
              ar: 'مسترباتش المضافات'
            },
            href: '/products?type=additive-mb'
          },
          {
            id: 'filled-compounds',
            label: {
              en: 'Filled Compounds',
              fa: 'کامپاندهای پرشده',
              ar: 'المركبات المملوءة'
            },
            href: '/products?type=filled',
            children: [
              {
                id: 'pp-caco3',
                label: {
                  en: 'PP Compound with CaCO₃',
                  fa: 'کامپاند PP با CaCO₃',
                  ar: 'مركب PP مع CaCO₃'
                },
                href: '/products?type=pp-caco3'
              },
              {
                id: 'pa-talc',
                label: {
                  en: 'PA Compound with Talc',
                  fa: 'کامپاند PA با تالک',
                  ar: 'مركب PA مع التلك'
                },
                href: '/products?type=pa-talc'
              }
            ]
          },
          {
            id: 'fiber-reinforced',
            label: {
              en: 'Fiber-Reinforced Compounds',
              fa: 'کامپاندهای تقویت‌شده با الیاف',
              ar: 'المركبات المعززة بالألياف'
            },
            href: '/products?type=fiber-reinforced'
          },
          {
            id: 'engineering',
            label: {
              en: 'Engineering Compounds',
              fa: 'کامپاندهای مهندسی',
              ar: 'المركبات الهندسية'
            },
            href: '/products?type=engineering'
          },
          {
            id: 'special-mb',
            label: {
              en: 'UV / Antistatic / Antioxidant',
              fa: 'UV / ضد استاتیک / آنتی‌اکسیدان',
              ar: 'UV / مضاد للكهرباء الساكنة / مضاد للأكسدة'
            },
            href: '/products?type=special-mb'
          }
        ]
      },
      {
        id: 'finished-parts',
        label: {
          en: 'Finished Polymer Parts & Products',
          fa: 'قطعات و محصولات پلیمری ساخته‌شده',
          ar: 'القطع والمنتجات البوليمرية المصنعة'
        },
        href: '/products?category=finished',
        icon: 'Box',
        description: {
          en: 'Molded parts and finished applications',
          fa: 'قطعات قالب‌گیری شده و محصولات نهایی',
          ar: 'القطع المصبوبة والتطبيقات النهائية'
        },
        children: [
          {
            id: 'industrial-parts',
            label: {
              en: 'Industrial Parts',
              fa: 'قطعات صنعتی',
              ar: 'القطع الصناعية'
            },
            href: '/products?type=industrial'
          },
          {
            id: 'household',
            label: {
              en: 'Polymer Household Items',
              fa: 'لوازم خانگی پلیمری',
              ar: 'الأدوات المنزلية البوليمرية'
            },
            href: '/products?type=household'
          },
          {
            id: 'packaging',
            label: {
              en: 'Packaging Products',
              fa: 'محصولات بسته‌بندی',
              ar: 'منتجات التعبئة والتغليف'
            },
            href: '/products?type=packaging'
          },
          {
            id: 'consumer',
            label: {
              en: 'Consumer & Decorative Products',
              fa: 'محصولات مصرفی و تزئینی',
              ar: 'المنتجات الاستهلاكية والزخرفية'
            },
            href: '/products?type=consumer'
          },
          {
            id: 'custom-molded',
            label: {
              en: 'Custom Molded Products',
              fa: 'محصولات قالب‌گیری سفارشی',
              ar: 'المنتجات المصبوبة حسب الطلب'
            },
            href: '/products?type=custom'
          }
        ]
      }
    ]
  },
  {
    id: 'services',
    label: {
      en: 'Services',
      fa: 'خدمات',
      ar: 'الخدمات'
    },
    href: '/services',
    children: [
      {
        id: 'consulting',
        label: {
          en: 'Technical Consulting & Material Selection',
          fa: 'مشاوره فنی و انتخاب مواد',
          ar: 'الاستشارات الفنية واختيار المواد'
        },
        href: '/services#consulting'
      },
      {
        id: 'formulation',
        label: {
          en: 'Custom Formulation Design',
          fa: 'طراحی فرمولاسیون سفارشی',
          ar: 'تصميم التركيبة المخصصة'
        },
        href: '/services#formulation'
      },
      {
        id: 'qc',
        label: {
          en: 'Quality Control & Testing',
          fa: 'کنترل کیفیت و آزمایش',
          ar: 'مراقبة الجودة والاختبار'
        },
        href: '/services#qc'
      },
      {
        id: 'logistics',
        label: {
          en: 'Transport & Logistics',
          fa: 'حمل و نقل و لجستیک',
          ar: 'النقل والخدمات اللوجستية'
        },
        href: '/services#logistics'
      }
    ]
  },
  {
    id: 'insights',
    label: {
      en: 'News & Technical Knowledge',
      fa: 'اخبار و دانش فنی',
      ar: 'الأخبار والمعرفة التقنية'
    },
    href: '/blog',
    children: [
      {
        id: 'market-analysis',
        label: {
          en: 'Polymer Market Analysis',
          fa: 'تحلیل بازار پلیمر',
          ar: 'تحليل سوق البوليمر'
        },
        href: '/blog?category=market'
      },
      {
        id: 'educational',
        label: {
          en: 'Educational Articles',
          fa: 'مقالات آموزشی',
          ar: 'المقالات التعليمية'
        },
        href: '/blog?category=education'
      }
    ]
  },
  {
    id: 'about',
    label: {
      en: 'About Us',
      fa: 'درباره ما',
      ar: 'من نحن'
    },
    href: '/about',
    children: [
      {
        id: 'company',
        label: {
          en: 'Company Introduction',
          fa: 'معرفی شرکت',
          ar: 'مقدمة الشركة'
        },
        href: '/about'
      },
      {
        id: 'contact',
        label: {
          en: 'Contact Us',
          fa: 'تماس با ما',
          ar: 'اتصل بنا'
        },
        href: '/contact'
      }
    ]
  }
];
