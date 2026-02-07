import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, Package, Truck, FileText, CreditCard, Leaf, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/hooks/useDirection';

const faqContent = {
  en: {
    heroTitle: 'Frequently Asked Questions',
    heroDescription: 'Find answers to common questions about our products, ordering process, shipping, and technical support.',
    ctaHeading: 'Still Have Questions?',
    ctaBody: 'Our team is ready to help with your specific requirements. Contact us for personalized assistance.',
    requestQuote: 'Request a Quote',
    emailUs: 'Email Us',
    categories: [
      {
        title: 'Products & Materials',
        icon: Package,
        faqs: [
          {
            question: 'What types of polymers do you supply?',
            answer:
              'We supply a comprehensive range including recycled polymers (rPE, rPP, rPET), virgin polymers (LDPE, LLDPE, HDPE, PP, PS), compounds and masterbatches, and finished plastic parts. Our portfolio covers film grades, injection molding grades, blow molding grades, and extrusion grades.'
          },
          {
            question: 'What is the difference between recycled and virgin polymers?',
            answer:
              'Virgin polymers are produced directly from petrochemical feedstocks with consistent, predictable properties. Recycled polymers are processed from post-consumer or post-industrial waste, offering environmental benefits while meeting technical specifications. Our recycled grades are engineered to match virgin performance in most applications.'
          },
          {
            question: 'Can I get samples before placing a bulk order?',
            answer:
              'Yes, we provide samples for evaluation purposes. Sample quantities typically range from 25-50kg depending on the material. Contact our sales team with your requirements and application details to request samples.'
          },
          {
            question: 'Do you provide technical data sheets (TDS) for all products?',
            answer:
              'Yes, every product comes with a comprehensive Technical Data Sheet including properties like MFI, density, tensile strength, and processing parameters. Safety Data Sheets (SDS) and certificates of compliance are also available for all materials.'
          }
        ]
      },
      {
        title: 'Ordering & Pricing',
        icon: CreditCard,
        faqs: [
          {
            question: 'What is the minimum order quantity (MOQ)?',
            answer:
              'Our standard MOQ is one full container load (FCL), which is typically 20-26 metric tonnes for a 40ft container. However, we can accommodate smaller orders based on stock availability and can consolidate shipments for smaller quantities.'
          },
          {
            question: 'How do I request a quote?',
            answer:
              'You can request a quote through our online RFQ form, by emailing hello@polysource.global, or by contacting our sales team directly. Provide product specifications, quantity needed, delivery location, and timeline for the most accurate quote.'
          },
          {
            question: 'What are your payment terms?',
            answer:
              'We offer flexible payment terms including Letter of Credit (L/C), Telegraphic Transfer (T/T), and open account terms for established customers. Payment terms are discussed during the quotation process based on order value and customer relationship.'
          },
          {
            question: 'How quickly will I receive a quotation?',
            answer:
              'We aim to provide detailed quotations within 48 hours of receiving your RFQ. Complex inquiries or custom specifications may take slightly longer. Urgent requests can be expedited—please indicate timeline requirements in your inquiry.'
          }
        ]
      },
      {
        title: 'Shipping & Logistics',
        icon: Truck,
        faqs: [
          {
            question: 'Which countries do you ship to?',
            answer:
              'We ship globally from our Dubai hub to over 18 countries across MENA, Europe, Asia, and Africa. Our strategic location provides efficient access to major markets. Contact us to confirm shipping to your specific destination.'
          },
          {
            question: 'What are the typical lead times?',
            answer:
              'Lead times depend on stock availability and destination. In-stock items typically ship within 1-2 weeks. Production orders may require 4-6 weeks. Transit times vary by destination: MENA region (1-2 weeks), Europe (2-3 weeks), Asia (2-4 weeks), Africa (2-4 weeks).'
          },
          {
            question: 'What shipping terms (Incoterms) do you offer?',
            answer:
              'We offer flexible Incoterms including FOB Dubai, CIF, CFR, and DAP. The most suitable term depends on your logistics preferences and capabilities. Our logistics team can advise on the best option for your situation.'
          },
          {
            question: 'How is the material packaged for shipping?',
            answer:
              'Standard packaging is 25kg bags on pallets, shrink-wrapped for protection. Big bags (500-1000kg) and bulk container options are available for larger volumes. Packaging can be customized based on your handling requirements and destination regulations.'
          }
        ]
      },
      {
        title: 'Quality & Compliance',
        icon: Shield,
        faqs: [
          {
            question: 'What quality certifications do you hold?',
            answer:
              'Our supply chain partners maintain ISO 9001:2015 (Quality Management) and ISO 14001:2015 (Environmental Management) certifications. Materials are available with FDA contact compliance, REACH compliance, and RoHS compliance as required.'
          },
          {
            question: 'How do you ensure batch-to-batch consistency?',
            answer:
              'Every batch undergoes rigorous quality testing including MFI verification, density measurement, and mechanical property testing. We work with certified recyclers and processors who maintain strict quality control protocols. Each shipment includes a Certificate of Analysis (CoA).'
          },
          {
            question: 'Can you provide certificates of compliance for specific regulations?',
            answer:
              'Yes, we provide compliance certificates including FDA food contact certification, REACH declarations, RoHS certificates, and other regulatory documentation as required by your application and market. Specify your compliance needs when requesting a quote.'
          },
          {
            question: 'What happens if material does not meet specifications?',
            answer:
              'We stand behind our products. If material does not meet agreed specifications, we work with you to resolve the issue promptly through replacement, credit, or return. All claims are processed within our quality assurance protocol with full documentation.'
          }
        ]
      },
      {
        title: 'Sustainability',
        icon: Leaf,
        faqs: [
          {
            question: 'What percentage of recycled content is available?',
            answer:
              'Our recycled grades offer up to 100% post-consumer recycled (PCR) content. We also offer blended grades with varying recycled percentages (30%, 50%, 70%) to match your sustainability targets and technical requirements.'
          },
          {
            question: 'How do you verify recycled content claims?',
            answer:
              'We work exclusively with certified recyclers who provide full traceability documentation. Material passports accompany each shipment detailing the source, processing method, and certification status. We never make vague sustainability claims.'
          },
          {
            question: 'Can recycled polymers meet food-contact standards?',
            answer:
              'Yes, certain recycled grades are FDA food-contact compliant. These materials are specifically processed and tested to meet food safety requirements. Specify food-contact needs in your inquiry and we will recommend suitable grades with appropriate certifications.'
          }
        ]
      },
      {
        title: 'Technical Support',
        icon: FileText,
        faqs: [
          {
            question: 'Do you provide technical support for processing?',
            answer:
              'Yes, our technical team provides comprehensive support including processing parameter recommendations, troubleshooting assistance, and application development guidance. We can also arrange on-site visits for major projects or persistent technical challenges.'
          },
          {
            question: 'Can you help with material selection for my application?',
            answer:
              'Absolutely. Share your application requirements including mechanical properties, processing method, end-use environment, and regulatory needs. Our technical team will recommend suitable materials and can provide samples for evaluation.'
          },
          {
            question: 'What information should I provide when requesting technical assistance?',
            answer:
              'For effective technical support, provide: current material grade being used (if any), processing method and equipment, application description, performance issues or requirements, and any regulatory compliance needs. The more detail you provide, the better we can assist.'
          }
        ]
      }
    ]
  },
  ar: {
    heroTitle: 'الأسئلة الشائعة',
    heroDescription: 'اعثر على الإجابات حول منتجاتنا وعمليات الطلب والشحن والدعم التقني.',
    ctaHeading: 'ما زلت بحاجة إلى مساعدة؟',
    ctaBody: 'فريقنا جاهز لدعم احتياجاتك الخاصة. تواصل معنا للحصول على مساعدة مخصصة.',
    requestQuote: 'اطلب عرض أسعار',
    emailUs: 'راسلنا عبر البريد',
    categories: [
      {
        title: 'المنتجات والمواد',
        icon: Package,
        faqs: [
          {
            question: 'ما أنواع البوليمرات التي توفرونها؟',
            answer:
              'نوفر مجموعة شاملة تشمل البوليمرات المعاد تدويرها (rPE، rPP، rPET)، والبوليمرات الأصلية (LDPE، LLDPE، HDPE، PP، PS)، والمركبات والماسترباتش، والأجزاء البلاستيكية النهائية. يغطي نطاقنا درجات الأفلام والحقن والنفخ والبثق.'
          },
          {
            question: 'ما الفرق بين البوليمرات المعاد تدويرها والأصلية؟',
            answer:
              'يتم إنتاج البوليمرات الأصلية مباشرة من المواد البتروكيميائية بخصائص ثابتة ومتوقعة، بينما تتم معالجة البوليمرات المعاد تدويرها من النفايات ما بعد الاستهلاك أو الصناعية، ما يقدم فوائد بيئية مع تلبية المتطلبات التقنية. تم تصميم درجاتنا المعاد تدويرها لتضاهي أداء الأصلية في معظم التطبيقات.'
          },
          {
            question: 'هل يمكنني الحصول على عينات قبل طلب كمية كبيرة؟',
            answer:
              'نعم، نوفر عينات للتقييم عادة بكمية 25-50 كجم حسب المادة. تواصل مع فريق المبيعات وشارك متطلباتك وتفاصيل التطبيق لطلب عينات.'
          },
          {
            question: 'هل توفرون أوراق بيانات فنية (TDS) لجميع المنتجات؟',
            answer:
              'نعم، يأتي كل منتج مع ورقة بيانات فنية شاملة تشمل خصائص مثل MFI والكثافة وقوة الشد ومعلمات المعالجة. تتوفر أيضاً أوراق بيانات السلامة (SDS) وشهادات الامتثال لكل المواد.'
          }
        ]
      },
      {
        title: 'الطلبات والتسعير',
        icon: CreditCard,
        faqs: [
          {
            question: 'ما الحد الأدنى للطلب (MOQ)؟',
            answer:
              'الحد الأدنى القياسي هو حاوية كاملة، عادة 20-26 طن متري للحاوية 40 قدماً. يمكننا تلبية الطلبات الأصغر بناءً على توفر المخزون أو دمج الشحنات للكميات الصغيرة.'
          },
          {
            question: 'كيف أطلب عرض أسعار؟',
            answer:
              'يمكنك طلب عرض أسعار عبر نموذج RFQ على موقعنا أو عبر البريد hello@polysource.global أو بالتواصل المباشر مع فريق المبيعات. قدم مواصفات المنتج والكمية والموقع ووقت التسليم للحصول على عرض دقيق.'
          },
          {
            question: 'ما هي شروط الدفع المتاحة؟',
            answer:
              'نقدم شروط دفع مرنة تشمل خطاب اعتماد (L/C)، تحويل بنكي (T/T)، وحسابات مفتوحة للعملاء الحاليين. يتم مناقشة الشروط أثناء التسعير بناءً على قيمة الطلب والعلاقة التجارية.'
          },
          {
            question: 'ما المدة اللازمة لاستلام عرض الأسعار؟',
            answer:
              'نهدف لتقديم عروض مفصلة خلال 48 ساعة من استلام طلبك. الطلبات المعقدة أو المخصصة قد تستغرق وقتاً أطول قليلاً. يمكن تسريع الطلبات العاجلة عند توضيح الجدول الزمني.'
          }
        ]
      },
      {
        title: 'الشحن واللوجستيات',
        icon: Truck,
        faqs: [
          {
            question: 'إلى أي دول تقومون بالشحن؟',
            answer:
              'نقوم بالشحن عالمياً من مركزنا في دبي إلى أكثر من 18 دولة عبر الشرق الأوسط وأوروبا وآسيا وأفريقيا. يوفر موقعنا الاستراتيجي وصولاً سريعاً للأسواق الكبرى. تواصل معنا لتأكيد الشحن إلى وجهتك.'
          },
          {
            question: 'ما هي أوقات التسليم المعتادة؟',
            answer:
              'تعتمد المدد على توفر المخزون والوجهة. المنتجات المتاحة تُشحن عادة خلال 1-2 أسبوع، والطلبات الإنتاجية قد تحتاج 4-6 أسابيع. تختلف أوقات النقل حسب الوجهة: الشرق الأوسط 1-2 أسبوع، أوروبا 2-3 أسابيع، آسيا 2-4 أسابيع، أفريقيا 2-4 أسابيع.'
          },
          {
            question: 'ما شروط الشحن (Incoterms) التي توفرونها؟',
            answer:
              'نوفر شروط إنكوترمز مرنة مثل FOB دبي وCIF وCFR وDAP. يعتمد الاختيار الأنسب على تفضيلاتك اللوجستية وقدراتك. يمكن لفريق اللوجستيات تقديم المشورة حول الخيار الأفضل.'
          },
          {
            question: 'كيف يتم تغليف المواد للشحن؟',
            answer:
              'التغليف القياسي أكياس 25 كجم على منصات مغلفة بالبلاستيك للحماية. تتوفر أكياس كبيرة (500-1000 كجم) وخيارات شحن سائبة للكميات الأكبر. يمكن تخصيص التغليف وفق متطلبات المناولة ولوائح الوجهة.'
          }
        ]
      },
      {
        title: 'الجودة والامتثال',
        icon: Shield,
        faqs: [
          {
            question: 'ما شهادات الجودة التي تمتلكونها؟',
            answer:
              'يحافظ شركاؤنا في سلسلة التوريد على شهادات ISO 9001:2015 لإدارة الجودة وISO 14001:2015 للإدارة البيئية. تتوفر المواد مع شهادات امتثال تلامس الغذاء من FDA وشهادات REACH وRoHS عند الحاجة.'
          },
          {
            question: 'كيف تضمنون الاتساق بين الدُفعات؟',
            answer:
              'تخضع كل دفعة لاختبارات جودة صارمة تشمل التحقق من MFI وقياس الكثافة والخواص الميكانيكية. نعمل مع معالجات ومعيدي تدوير معتمدين يحافظون على بروتوكولات جودة دقيقة. كل شحنة تتضمن شهادة تحليل (CoA).'
          },
          {
            question: 'هل يمكنكم تقديم شهادات امتثال للوائح محددة؟',
            answer:
              'نعم، نوفر شهادات امتثال مثل اعتماد تلامس الغذاء من FDA وإقرارات REACH وشهادات RoHS وغيرها حسب تطبيقك وسوقك. حدد احتياجات الامتثال عند طلب العرض.'
          },
          {
            question: 'ماذا لو لم تطابق المواد المواصفات؟',
            answer:
              'ندعم منتجاتنا بشكل كامل. إذا لم تطابق المواد المواصفات المتفق عليها، نعمل معك لحل المشكلة سريعاً عبر الاستبدال أو الرصيد أو الإرجاع. تتم معالجة جميع المطالبات ضمن بروتوكول ضمان الجودة مع توثيق كامل.'
          }
        ]
      },
      {
        title: 'الاستدامة',
        icon: Leaf,
        faqs: [
          {
            question: 'ما نسبة المحتوى المعاد تدويره المتوفرة؟',
            answer:
              'توفر درجاتنا المعاد تدويرها حتى 100% محتوى ما بعد الاستهلاك. كما نقدم درجات ممزوجة بنسب مختلفة (30%، 50%، 70%) لتلائم أهداف الاستدامة والمتطلبات التقنية.'
          },
          {
            question: 'كيف تتحققون من صحة نسب المحتوى المعاد تدويره؟',
            answer:
              'نعمل حصرياً مع معيدي تدوير معتمدين يقدمون توثيق تتبع كامل. ترافق جوازات المواد كل شحنة موضحة المصدر وطريقة المعالجة وحالة الشهادات. لا نقدم ادعاءات استدامة غير موثقة.'
          },
          {
            question: 'هل يمكن أن تلبي البوليمرات المعاد تدويرها معايير ملامسة الغذاء؟',
            answer:
              'نعم، بعض الدرجات المعاد تدويرها متوافقة مع تلامس الغذاء من FDA. يتم تجهيز هذه المواد واختبارها خصيصاً لتلبية متطلبات سلامة الغذاء. حدد احتياجاتك وسنوصي بالدرجات المناسبة مع الشهادات الملائمة.'
          }
        ]
      },
      {
        title: 'الدعم التقني',
        icon: FileText,
        faqs: [
          {
            question: 'هل تقدمون دعماً تقنياً للمعالجة؟',
            answer:
              'نعم، يوفر فريقنا التقني دعماً شاملاً يشمل توصيات معلمات المعالجة والمساعدة في حل المشكلات وإرشادات تطوير التطبيقات. يمكننا أيضاً ترتيب زيارات ميدانية للمشاريع الكبرى أو التحديات التقنية المستمرة.'
          },
          {
            question: 'هل يمكنكم المساعدة في اختيار المادة المناسبة لتطبيقي؟',
            answer:
              'بالتأكيد. شارك متطلبات تطبيقك بما في ذلك الخصائص الميكانيكية وطريقة المعالجة وبيئة الاستخدام والاحتياجات التنظيمية. سيوصي فريقنا بالمواد المناسبة ويمكنه توفير عينات للتقييم.'
          },
          {
            question: 'ما المعلومات التي يجب توفيرها عند طلب المساعدة التقنية؟',
            answer:
              'للحصول على دعم تقني فعال، قدم درجة المادة الحالية (إن وجدت) وطريقة المعالجة والمعدات ووصف التطبيق والمشكلات أو المتطلبات الأداء، وأي احتياجات امتثال تنظيمي. كلما زادت التفاصيل، تحسنت قدرتنا على المساعدة.'
          }
        ]
      }
    ]
  }
};

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const { isRTL } = useDirection();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const locale: 'en' | 'ar' = resolvedLanguage.startsWith('ar') ? 'ar' : 'en';
  const categories = faqContent[locale].categories;
  const faqSchema = generateFAQSchema(categories.flatMap(cat => cat.faqs));
  
  const breadcrumbItems = [
    { labelKey: "breadcrumb.home", to: "/" },
    { labelKey: "breadcrumb.faq", to: "/faq" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.faq'), url: 'https://polysource.global/faq' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={faqContent[locale].heroTitle}
        description={
          locale === 'ar'
            ? 'احصل على إجابات حول البوليمرات المعاد تدويرها والمواصفات والشحن والحد الأدنى للطلبات وشهادات الجودة.'
            : 'Get answers to common questions about recycled polymers, product specifications, shipping, minimum order quantities, and quality certifications. Expert guidance for polymer sourcing.'
        }
        keywords={
          locale === 'ar'
            ? 'أسئلة البوليمرات، بوليمر معاد تدويره، مورد بلاستيك، مواصفات البوليمر، الحد الأدنى للطلب، شحن البوليمرات'
            : 'polymer FAQ, recycled polymer questions, plastic supplier FAQ, polymer specifications, minimum order quantity, polymer shipping'
        }
        structuredData={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground [&_span]:text-primary-foreground [&_svg]:text-primary-foreground/50" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <HelpCircle className="h-12 w-12 mb-4 opacity-80" />
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>
              {faqContent[locale].heroTitle}
            </h1>
            <p className={`text-xl text-primary-foreground/90 ${isRTL ? 'text-right' : ''}`}>
              {faqContent[locale].heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className={isRTL ? 'text-right' : ''}>
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-2 bg-primary/10 rounded-lg ${isRTL ? 'ml-0' : ''}`}>
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className={isRTL ? 'text-right' : 'text-left'}>
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className={`text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center max-w-2xl mx-auto ${isRTL ? 'rtl text-right' : ''}`}
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground">{faqContent[locale].ctaHeading}</h2>
            <p className="text-muted-foreground mb-6">{faqContent[locale].ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">{faqContent[locale].requestQuote}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:hello@polysource.global">{faqContent[locale].emailUs}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
