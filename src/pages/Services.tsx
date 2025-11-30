import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema, generateOrganizationSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Microscope, 
  Shield, 
  Truck, 
  FileText,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Beaker,
  ClipboardCheck,
  Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/hooks/useDirection';

const servicesContent = {
  en: {
    hero: {
      badge: 'Technical Partnership',
      title: 'More Than Materials. A Technical Partner.',
      description:
        'From material selection to production troubleshooting, we provide the expertise and support you need for successful polymer applications.',
      cta: 'Discuss Your Requirements'
    },
    servicesHeading: 'Our Services',
    servicesSubheading: 'Comprehensive support across the entire polymer supply chain',
    processHeading: 'How We Work',
    processSubheading: 'A structured approach to ensure successful material supply',
    ctaHeading: 'Ready to Get Started?',
    ctaSubheading: "Tell us about your requirements and let's find the right solution together.",
    primaryCta: 'Request a Quote',
    secondaryCta: 'Browse Products',
    services: [
      {
        id: 'material-selection',
        icon: Target,
        title: 'Material Selection Consulting',
        shortDesc: 'Expert guidance to find the right polymer for your application',
        description:
          'Our materials engineering team helps you identify the optimal polymer grade for your specific application requirements. We consider mechanical properties, processing parameters, environmental factors, and regulatory compliance to recommend materials that perform reliably in production.',
        benefits: [
          'Application-specific material recommendations',
          'Cost-performance optimization',
          'Regulatory compliance guidance (FDA, REACH, RoHS)',
          'Recycled material alternatives evaluation',
          'Processing compatibility assessment'
        ],
        cta: 'Get Material Recommendations'
      },
      {
        id: 'technical-support',
        icon: Microscope,
        title: 'Technical Support & Troubleshooting',
        shortDesc: 'Processing optimization and problem resolution',
        description:
          'From processing parameter optimization to troubleshooting production issues, our technical team provides hands-on support. We help you maximize output quality, reduce waste, and solve processing challenges with data-driven recommendations.',
        benefits: [
          'Processing parameter optimization',
          'Defect analysis and resolution',
          'Cycle time improvement strategies',
          'Material blending guidance',
          'On-site technical visits (for major projects)'
        ],
        cta: 'Request Technical Support'
      },
      {
        id: 'quality-control',
        icon: Shield,
        title: 'Quality Assurance & Testing',
        shortDesc: 'Rigorous testing and certification for every batch',
        description:
          'Every shipment includes comprehensive quality documentation. We perform batch testing, provide Certificates of Analysis, and maintain full traceability from source to delivery. Additional testing services available upon request.',
        benefits: [
          'Batch-specific Certificate of Analysis (CoA)',
          'MFI, density, and mechanical property verification',
          'Full material traceability documentation',
          'Compliance certificates (FDA, REACH, RoHS)',
          'Third-party testing coordination'
        ],
        cta: 'Learn About Our QA Process'
      },
      {
        id: 'logistics',
        icon: Truck,
        title: 'Global Logistics & Shipping',
        shortDesc: 'Reliable delivery from Dubai to worldwide destinations',
        description:
          'Our Dubai hub provides strategic access to global markets. We handle export documentation, coordinate shipping, and offer flexible Incoterms to match your logistics requirements. Real-time shipment tracking keeps you informed throughout transit.',
        benefits: [
          'Shipping to 18+ countries',
          'Flexible Incoterms (FOB, CIF, CFR, DAP)',
          'Export documentation handling',
          'Container consolidation for smaller orders',
          'Real-time shipment tracking'
        ],
        cta: 'Discuss Shipping Options'
      },
      {
        id: 'documentation',
        icon: FileText,
        title: 'Documentation & Compliance',
        shortDesc: 'Complete technical and regulatory documentation',
        description:
          'We provide comprehensive documentation packages including Technical Data Sheets (TDS), Safety Data Sheets (SDS), compliance certificates, and material passports. Custom documentation available for specific regulatory requirements.',
        benefits: [
          'Technical Data Sheets (TDS)',
          'Safety Data Sheets (SDS/MSDS)',
          'Certificates of Compliance',
          'Material passports with traceability',
          'Custom documentation on request'
        ],
        cta: 'Request Documentation'
      },
      {
        id: 'partnership',
        icon: Users,
        title: 'Partnership Programs',
        shortDesc: 'Long-term supply agreements and volume benefits',
        description:
          'For regular buyers, we offer partnership programs with benefits including priority allocation, volume pricing, dedicated account management, and flexible payment terms. Build a reliable supply relationship with preferential conditions.',
        benefits: [
          'Volume-based pricing tiers',
          'Priority stock allocation',
          'Dedicated account management',
          'Flexible payment terms',
          'Quarterly business reviews'
        ],
        cta: 'Explore Partnership Options'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Share your requirements, application details, and specifications with our team.',
        icon: Users
      },
      {
        step: 2,
        title: 'Recommendation',
        description: 'Receive material recommendations with technical justification and pricing.',
        icon: Beaker
      },
      {
        step: 3,
        title: 'Validation',
        description: 'Evaluate samples in your production environment with our technical support.',
        icon: ClipboardCheck
      },
      {
        step: 4,
        title: 'Delivery',
        description: 'Receive consistent, certified material with full documentation.',
        icon: Globe
      }
    ]
  },
  ar: {
    hero: {
      badge: 'شراكة تقنية',
      title: 'أكثر من مجرد مواد. نحن شريك تقني.',
      description:
        'من اختيار المواد حتى حل مشكلات الإنتاج، نوفر الخبرة والدعم الذي تحتاجه لنجاح تطبيقات البوليمر لديك.',
      cta: 'ناقش متطلباتك'
    },
    servicesHeading: 'خدماتنا',
    servicesSubheading: 'دعم شامل عبر سلسلة توريد البوليمر كاملة',
    processHeading: 'كيف نعمل',
    processSubheading: 'منهجية منظمة لضمان توريد المواد بنجاح',
    ctaHeading: 'جاهز للبدء؟',
    ctaSubheading: 'أخبرنا بمتطلباتك ولنجد الحل المناسب معاً.',
    primaryCta: 'اطلب عرض أسعار',
    secondaryCta: 'تصفح المنتجات',
    services: [
      {
        id: 'material-selection',
        icon: Target,
        title: 'استشارات اختيار المواد',
        shortDesc: 'إرشاد خبراء لاختيار البوليمر الأنسب لتطبيقك',
        description:
          'يساعدك فريق هندسة المواد لدينا في تحديد درجة البوليمر المثلى لاحتياجاتك. نأخذ في الاعتبار الخصائص الميكانيكية ومعلمات المعالجة والعوامل البيئية والامتثال التنظيمي للتوصية بمواد تعمل بثبات في الإنتاج.',
        benefits: [
          'توصيات مواد مخصصة للتطبيق',
          'تحسين التوازن بين التكلفة والأداء',
          'إرشادات الامتثال التنظيمي (FDA، REACH، RoHS)',
          'تقييم بدائل المواد المعاد تدويرها',
          'تقييم توافق المعالجة'
        ],
        cta: 'احصل على توصيات المواد'
      },
      {
        id: 'technical-support',
        icon: Microscope,
        title: 'الدعم التقني وحل المشكلات',
        shortDesc: 'تحسين المعالجة ومعالجة الأعطال',
        description:
          'من تحسين معلمات المعالجة إلى حل مشكلات الإنتاج، يقدم فريقنا التقني دعماً عملياً. نساعدك على تعظيم جودة الإنتاج، وتقليل الفاقد، وحل تحديات المعالجة بتوصيات قائمة على البيانات.',
        benefits: [
          'تحسين معلمات التشغيل',
          'تحليل العيوب وحلها',
          'استراتيجيات تقليل زمن الدورة',
          'إرشادات خلط المواد',
          'زيارات تقنية ميدانية (للمشاريع الكبرى)'
        ],
        cta: 'اطلب دعماً تقنياً'
      },
      {
        id: 'quality-control',
        icon: Shield,
        title: 'ضمان الجودة والاختبارات',
        shortDesc: 'اختبارات صارمة وشهادات لكل دفعة',
        description:
          'يتضمن كل شحن توثيق جودة شامل. نجري اختبارات على الدُفعات، ونوفر شهادات التحليل، ونحافظ على تتبع كامل من المصدر إلى التسليم. تتوفر خدمات اختبار إضافية عند الطلب.',
        benefits: [
          'شهادة تحليل خاصة بكل دفعة',
          'التحقق من MFI والكثافة والخواص الميكانيكية',
          'توثيق كامل لتتبع المواد',
          'شهادات امتثال (FDA، REACH، RoHS)',
          'تنسيق اختبارات الطرف الثالث'
        ],
        cta: 'تعرف على عملية الجودة لدينا'
      },
      {
        id: 'logistics',
        icon: Truck,
        title: 'اللوجستيات والشحن العالمي',
        shortDesc: 'تسليم موثوق من دبي إلى وجهات حول العالم',
        description:
          'يوفر مركزنا في دبي وصولاً استراتيجياً إلى الأسواق العالمية. نتولى مستندات التصدير، وننسق الشحن، ونقدم شروط إنكوترمز مرنة تناسب احتياجاتك اللوجستية. تتبع الشحنات في الوقت الفعلي يبقيك على اطلاع طوال الرحلة.',
        benefits: [
          'الشحن إلى أكثر من 18 دولة',
          'إنكوترمز مرنة (FOB، CIF، CFR، DAP)',
          'التعامل مع مستندات التصدير',
          'تجميع الحاويات للطلبيات الصغيرة',
          'تتبع الشحنات في الوقت الفعلي'
        ],
        cta: 'ناقش خيارات الشحن'
      },
      {
        id: 'documentation',
        icon: FileText,
        title: 'التوثيق والامتثال',
        shortDesc: 'حزم توثيق فني وتنظيمي كاملة',
        description:
          'نوفر حزم توثيق شاملة تشمل أوراق البيانات الفنية (TDS) وأوراق بيانات السلامة (SDS) وشهادات الامتثال وجوازات المواد. يمكن تخصيص التوثيق للمتطلبات التنظيمية الخاصة.',
        benefits: [
          'أوراق البيانات الفنية (TDS)',
          'أوراق بيانات السلامة (SDS/MSDS)',
          'شهادات الامتثال',
          'جوازات مواد مع إمكانية التتبع',
          'توثيق مخصص عند الطلب'
        ],
        cta: 'اطلب التوثيق'
      },
      {
        id: 'partnership',
        icon: Users,
        title: 'برامج الشراكة',
        shortDesc: 'اتفاقيات توريد طويلة الأجل ومزايا الحجم',
        description:
          'للمشترين الدائمين، نقدم برامج شراكة تشمل تخصيصاً أولوياً، وأسعار حجم، وإدارة حساب مخصصة، وشروط دفع مرنة. ابنِ علاقة توريد موثوقة بشروط تفضيلية.',
        benefits: [
          'شرائح تسعير حسب الكميات',
          'تخصيص مخزون بأولوية',
          'إدارة حساب مخصصة',
          'شروط دفع مرنة',
          'مراجعات أعمال ربع سنوية'
        ],
        cta: 'استكشف خيارات الشراكة'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'الاستشارة',
        description: 'شارك فريقنا متطلباتك وتفاصيل التطبيق والمواصفات.',
        icon: Users
      },
      {
        step: 2,
        title: 'التوصية',
        description: 'احصل على توصيات المواد مع المبررات التقنية والتسعير.',
        icon: Beaker
      },
      {
        step: 3,
        title: 'التحقق',
        description: 'قيّم العينات في بيئة الإنتاج لديك مع دعمنا الفني.',
        icon: ClipboardCheck
      },
      {
        step: 4,
        title: 'التسليم',
        description: 'استلم مواد موثقة ومعتمدة بشكل ثابت مع كامل المستندات.',
        icon: Globe
      }
    ]
  }
};

export default function Services() {
  const { i18n } = useTranslation();
  const { isRTL } = useDirection();
  const locale = i18n.language === 'ar' ? 'ar' : 'en';
  const content = servicesContent[locale];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: 'https://polysource.global' },
    { name: locale === 'ar' ? 'الخدمات' : 'Services', url: 'https://polysource.global/services' }
  ]);

  const organizationSchema = generateOrganizationSchema({
    name: 'PolySource Global',
    url: 'https://polysource.global',
    logo: 'https://polysource.global/logo.png',
    description: 'Dubai-based polymer supplier offering material selection consulting, technical support, quality assurance, and global logistics services.',
    address: {
      addressLocality: 'Dubai',
      addressCountry: 'UAE'
    },
    contactPoint: {
      telephone: '+971 4 XXX XXXX',
      email: 'hello@polysource.global',
      contactType: 'Customer Service'
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={
          locale === 'ar'
            ? 'الخدمات - استشارات المواد والدعم التقني'
            : 'Services - Material Consulting & Technical Support'
        }
        description={
          locale === 'ar'
            ? 'خدمات استشارية متخصصة في البوليمرات تشمل اختيار المواد، الدعم التقني، ضمان الجودة، واللوجستيات العالمية. كن شريكاً مع مورد البوليمرات الرائد في دبي لسلسلة توريد موثوقة.'
            : "Expert polymer consulting services including material selection, technical support, quality assurance, and global logistics. Partner with Dubai's leading polymer supplier for reliable supply chain solutions."
        }
        keywords={
          locale === 'ar'
            ? 'استشارات بوليمرات، اختيار المواد، دعم تقني، ضمان الجودة، لوجستيات البوليمر، خدمات بوليمر B2B'
            : 'polymer consulting, material selection, technical support, quality assurance, polymer logistics, B2B polymer services'
        }
        structuredData={[breadcrumbSchema, organizationSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
            >
              {content.hero.badge}
            </Badge>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isRTL ? 'text-right' : ''}`}>
              {content.hero.title}
            </h1>
            <p className={`text-xl text-primary-foreground/90 mb-8 ${isRTL ? 'text-right' : ''}`}>
              {content.hero.description}
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">{content.hero.cta}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${isRTL ? 'rtl text-right' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {content.servicesHeading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.servicesSubheading}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-lg transition-shadow ${isRTL ? 'text-right' : ''}`}>
                  <CardHeader>
                    <div className={`p-3 bg-primary/10 rounded-lg w-fit mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDesc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className={`flex items-start text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <CheckCircle2
                            className={`h-4 w-4 text-success ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 flex-shrink-0`}
                          />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="link" className={`p-0 h-auto ${isRTL ? 'justify-start' : ''}`}>
                      <Link to="/contact" className={`${isRTL ? 'flex flex-row-reverse items-center gap-1' : 'flex items-center gap-1'}`}>
                        {service.cta}
                        <ArrowIcon className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${isRTL ? 'rtl text-right' : ''}`}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">{content.processHeading}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.processSubheading}</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {content.processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      isRTL ? 'rotate-180' : ''
                    }`}
                  >
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div
                    className={`absolute -top-2 ${isRTL ? '-left-2' : '-right-2'} w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm`}
                  >
                    {step.step}
                  </div>
                </div>
                <h3 className={`font-semibold mb-2 text-foreground ${isRTL ? 'text-right' : ''}`}>{step.title}</h3>
                <p className={`text-sm text-muted-foreground ${isRTL ? 'text-right' : ''}`}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center max-w-3xl mx-auto ${isRTL ? 'rtl text-right' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.ctaHeading}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">{content.ctaSubheading}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">{content.primaryCta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">{content.secondaryCta}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
