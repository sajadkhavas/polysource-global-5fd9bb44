import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, CheckCircle2, Target, FileText, Users, Globe } from 'lucide-react';
import { useDirection } from '@/hooks/useDirection';

interface ImpactCard {
  value: string;
  label: string;
}

interface InfoItem {
  title: string;
  description: string;
}

export default function Sustainability() {
  const { t } = useTranslation();
  const { isRTL } = useDirection();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.sustainability'), url: 'https://polysource.global/sustainability' }
  ]);

  const principles = [
    {
      icon: Target,
      title: t('sustainabilityPage.principles.quality.title'),
      description: t('sustainabilityPage.principles.quality.description')
    },
    {
      icon: FileText,
      title: t('sustainabilityPage.principles.traceable.title'),
      description: t('sustainabilityPage.principles.traceable.description')
    },
    {
      icon: Users,
      title: t('sustainabilityPage.principles.certified.title'),
      description: t('sustainabilityPage.principles.certified.description')
    },
    {
      icon: Globe,
      title: t('sustainabilityPage.principles.regional.title'),
      description: t('sustainabilityPage.principles.regional.description')
    }
  ];

  const commitmentItems = t('sustainabilityPage.commitment', { returnObjects: true }) as InfoItem[];
  const certifications = t('sustainabilityPage.certificationsList', { returnObjects: true }) as string[];
  const impactCards = t('sustainabilityPage.impactCards', { returnObjects: true }) as ImpactCard[];
  const impactItems = t('sustainabilityPage.impactList', { returnObjects: true }) as string[];
  const transparencyItems = t('sustainabilityPage.transparencyList', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('sustainabilityPage.title')}
        description={t('sustainabilityPage.description')}
        structuredData={breadcrumbSchema}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-success/20 to-success/5 pt-32 pb-20 border-b border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className={`mb-4 border-success text-success ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Leaf className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
              {t('sustainabilityPage.badge')}
            </Badge>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-foreground ${isRTL ? 'text-right' : ''}`}>
              {t('sustainabilityPage.heroTitle')}
            </h1>
            <p className={`text-xl text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
              {t('sustainabilityPage.heroSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={isRTL ? 'text-right' : ''}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">{t('sustainabilityPage.commitmentTitle')}</h2>
              <div className="space-y-6 text-muted-foreground">
                {commitmentItems.map(item => (
                  <div key={item.title} className="flex items-start">
                    <CheckCircle2 className={`h-5 w-5 text-success mt-0.5 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    <div className={isRTL ? 'text-right' : ''}>
                      <p className="font-medium text-foreground mb-1">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${isRTL ? 'rtl text-right' : ''}`}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('sustainabilityPage.principlesTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('sustainabilityPage.heroSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-2 bg-success/10 rounded-lg ${isRTL ? 'ml-4' : 'mr-4'}`}>
                        <principle.icon className="h-6 w-6 text-success" />
                      </div>
                      <div className={isRTL ? 'text-right' : ''}>
                        <CardTitle className="mb-2">{principle.title}</CardTitle>
                        <CardDescription>{principle.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={isRTL ? 'text-right' : ''}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">{t('sustainabilityPage.certificationsTitle')}</h2>
              <Card>
                <CardHeader>
                  <CardTitle>{t('sustainabilityPage.certificationsTitle')}</CardTitle>
                  <CardDescription>{t('sustainabilityPage.certificationsDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map(cert => (
                      <Badge key={cert} variant="secondary" className="text-sm">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-success/5 border-y border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center mb-12 ${isRTL ? 'rtl' : ''}`}
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">{t('sustainabilityPage.impactTitle')}</h2>
            <p className={`text-lg text-muted-foreground ${isRTL ? 'text-right' : 'text-center'}`}>
              {t('sustainabilityPage.impactSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactCards.map(card => (
              <Card key={card.label} className="text-center">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-foreground mb-2">{card.value}</p>
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <ul className={`space-y-2 text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
              {impactItems.map(item => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className={`h-4 w-4 text-success mt-1 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>{t('sustainabilityPage.transparencyTitle')}</CardTitle>
              </CardHeader>
              <CardContent className={`text-muted-foreground ${isRTL ? 'text-right' : ''}`}>
                <p className="mb-4">{t('sustainabilityPage.transparencyIntro')}</p>
                <ul className="space-y-2">
                  {transparencyItems.map(item => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className={`h-4 w-4 text-success mt-0.5 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
