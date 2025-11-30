import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Target, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/hooks/useDirection';

export default function About() {
  const { t, i18n } = useTranslation();
  const { isRTL } = useDirection();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const locale: 'en' | 'ar' = resolvedLanguage.startsWith('ar') ? 'ar' : 'en';

  const heroCopy = {
    en: {
      title: 'Built by Engineers Who Got Tired of Unreliable Polymer Traders',
      description:
        "We started PolySource because we experienced the same frustrations you have: inconsistent recycled materials, slow WhatsApp-based RFQs, and traders who disappear when problems arise."
    },
    ar: {
      title: 'تأسسنا على يد مهندسين سئموا من تجار البوليمر غير الموثوقين',
      description:
        'أسسنا بولي سورس لأننا واجهنا نفس التحديات التي تواجهها: مواد معاد تدويرها بجودة غير ثابتة، عروض أسعار بطيئة عبر الواتساب، وتجار يختفون عند ظهور المشكلات.'
    }
  };

  const storyCopy = {
    en: {
      heading: 'Our Story',
      paragraphs: [
        "Founded in 2019 in Dubai, PolySource Global emerged from a simple observation: the polymer trading industry was stuck in the past. While manufacturing technology evolved, supply chains remained opaque, quality was inconsistent, and communication happened through scattered WhatsApp threads.",
        "Our founding team brought together materials engineering expertise, supply chain experience, and a commitment to doing things differently. We built relationships with certified recyclers and processors who shared our vision for traceable, consistent recycled materials.",
        "Today, we serve manufacturers across 18+ countries, delivering over 12,500 tonnes annually. But we've stayed true to our core principle: technical partnership over transactional trading."
      ]
    },
    ar: {
      heading: 'قصتنا',
      paragraphs: [
        'تأسست بولي سورس جلوبال في دبي عام 2019 بعد ملاحظة بسيطة: صناعة تجارة البوليمرات عالقة في الماضي. بينما تطورت تقنيات التصنيع، بقيت سلاسل التوريد معتمة، والجودة غير متسقة، والتواصل يتم عبر محادثات واتساب متفرقة.',
        'جمع فريقنا التأسيسي بين خبرة هندسة المواد وتجربة سلاسل الإمداد والالتزام بالعمل بشكل مختلف. بنينا شراكات مع شركات إعادة تدوير ومعالجات معتمدة تشاركنا رؤيتنا للمواد المعاد تدويرها ذات التتبع والجودة المستمرة.',
        'اليوم نخدم المصنعين في أكثر من 18 دولة ونورد أكثر من 12,500 طن سنوياً، مع التمسك بمبدأنا الأساسي: الشراكة التقنية بدلاً من التداول التقليدي.'
      ]
    }
  };

  const values = [
    {
      icon: Target,
      title: {
        en: 'Technical Excellence',
        ar: 'التميز التقني'
      },
      description: {
        en: 'We prioritize material science and processing expertise over sales pitches.',
        ar: 'نُقدّم علم المواد وخبرة المعالجة على الخطابات التسويقية.'
      }
    },
    {
      icon: Globe,
      title: {
        en: 'Global Reach',
        ar: 'وصول عالمي'
      },
      description: {
        en: 'Dubai hub position enables us to bridge MENA, European, Asian, and African markets efficiently.',
        ar: 'موقعنا في دبي يتيح لنا الربط بكفاءة بين أسواق الشرق الأوسط وأوروبا وآسيا وأفريقيا.'
      }
    },
    {
      icon: Users,
      title: {
        en: 'Partnership Mindset',
        ar: 'عقلية الشراكة'
      },
      description: {
        en: "We work as an extension of your team, not just a vendor sending invoices.",
        ar: 'نعمل كامتداد لفريقك، ولسنا مجرد مورد يرسل الفواتير.'
      }
    },
    {
      icon: Award,
      title: {
        en: 'Recycled-First',
        ar: 'الأولوية للمواد المعاد تدويرها'
      },
      description: {
        en: 'We believe recycled polymers are the future when done right—with quality and transparency.',
        ar: 'نؤمن أن البوليمرات المعاد تدويرها هي المستقبل عندما تُقدَّم بجودة وشفافية.'
      }
    }
  ];

  const dubaiAdvantages = {
    en: {
      heading: 'The Dubai Advantage',
      items: [
        {
          title: 'Port Hub',
          description: "Strategic access to Jebel Ali Port, one of the world's largest container terminals"
        },
        {
          title: 'Time Zone Bridge',
          description: 'Operating hours overlap with European mornings and Asian afternoons'
        },
        {
          title: 'Trade Infrastructure',
          description: 'Free zone benefits and established trade routes to 4 continents'
        }
      ]
    },
    ar: {
      heading: 'ميزة دبي',
      items: [
        {
          title: 'مركز موانئ',
          description: 'وصول استراتيجي إلى ميناء جبل علي، أحد أكبر محطات الحاويات في العالم'
        },
        {
          title: 'جسر التوقيت',
          description: 'ساعات العمل تتقاطع مع صباح أوروبا وبعد ظهر آسيا'
        },
        {
          title: 'بنية تحتية تجارية',
          description: 'مزايا المناطق الحرة ومسارات تجارية راسخة إلى 4 قارات'
        }
      ]
    }
  };

  const teamCopy = {
    en: {
      heading: 'Our Team',
      description:
        'Materials engineers, supply chain specialists, and industry veterans who understand both the technical and logistical challenges you face.',
      placeholder:
        "Our team profiles and leadership bios will be added here. For now, know that we're a group of technical professionals who've worked across polymer manufacturing, recycling operations, and international trade."
    },
    ar: {
      heading: 'فريقنا',
      description:
        'مهندسو مواد، ومتخصصو سلاسل إمداد، وخبراء صناعة يفهمون التحديات التقنية واللوجستية التي تواجهها.',
      placeholder:
        'سنضيف نبذات الفريق والقيادة هنا قريباً. حالياً، نحن فريق من المتخصصين التقنيين الذين عملوا في تصنيع البوليمرات وعمليات إعادة التدوير والتجارة الدولية.'
    }
  };

  const organizationSchema = generateOrganizationSchema({
    name: 'PolySource Global',
    url: 'https://polysource.global',
    logo: 'https://polysource.global/logo.png',
    description: 'Dubai-based polymer supplier founded by engineers. Specializing in recycled and virgin polymers with technical expertise and global reach.',
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.about'), url: 'https://polysource.global/about' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={
          locale === 'ar'
            ? 'نبذة عن بولي سورس جلوبال - مورد البوليمرات الرائد في دبي'
            : 'About PolySource Global - Leading Polymer Supplier in Dubai'
        }
        description={
          locale === 'ar'
            ? 'تأسست عام 2019 في دبي على يد مهندسي مواد. نخدم أكثر من 18 دولة ونورد أكثر من 12,500 طن من البوليمرات المعاد تدويرها والأصلية سنوياً مع التركيز على الشراكة التقنية.'
            : 'Founded in 2019 in Dubai by materials engineers. PolySource Global serves 18+ countries with 12,500+ tonnes of recycled and virgin polymers annually. Technical partnership over transactional trading.'
        }
        keywords={
          locale === 'ar'
            ? 'نبذة بولي سورس، مورد بوليمرات دبي، شركة تجارة بوليمرات، هندسة مواد، موزع بوليمرات B2B، مورد بوليمرات الشرق الأوسط'
            : 'about PolySource, Dubai polymer supplier, polymer trading company, materials engineering, B2B polymer distributor, MENA polymer supplier'
        }
        structuredData={[organizationSchema, breadcrumbSchema]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isRTL ? 'text-right' : ''}`}>
              {heroCopy[locale].title}
            </h1>
            <p className={`text-xl text-primary-foreground/90 ${isRTL ? 'text-right' : ''}`}>
              {heroCopy[locale].description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
                {storyCopy[locale].heading}
              </h2>
              <div
                className={`prose prose-lg max-w-none text-muted-foreground space-y-4 ${
                  isRTL ? 'text-right prose-rtl' : ''
                }`}
              >
                {storyCopy[locale].paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold mb-4 text-foreground ${isRTL ? 'text-right' : ''}`}>
              {locale === 'ar' ? 'ما الذي يدفعنا' : 'What Drives Us'}
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              {locale === 'ar'
                ? 'هذه ليست شعارات تسويقية، بل مبادئ نتخذ على أساسها قراراتنا اليومية.'
                : "These aren't corporate buzzwords. They're the principles we use to make decisions every day."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
              <motion.div
                key={value.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-2 bg-primary/10 rounded-lg ${isRTL ? 'ml-4' : 'mr-4'}`}>
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className={`mb-2 ${isRTL ? 'text-right' : ''}`}>
                          {value.title[locale]}
                        </CardTitle>
                        <p className={`text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
                          {value.description[locale]}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Advantage */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
                {dubaiAdvantages[locale].heading}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {dubaiAdvantages[locale].items.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="pt-6">
                      <h3 className={`font-semibold mb-2 ${isRTL ? 'text-right' : ''}`}>{item.title}</h3>
                      <p className={`text-sm text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold mb-4 text-foreground ${isRTL ? 'text-right' : ''}`}>
              {teamCopy[locale].heading}
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
              {teamCopy[locale].description}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className={`pt-6 text-center ${isRTL ? 'text-right' : ''}`}>
                <p className="text-muted-foreground">{teamCopy[locale].placeholder}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
