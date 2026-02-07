import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, CheckCircle2, Target, FileText, Users, Globe } from 'lucide-react';

interface ImpactCard { value: string; label: string; }
interface InfoItem { title: string; description: string; }

export default function Sustainability() {
  const { t } = useTranslation();

  const breadcrumbItems = [{ labelKey: "breadcrumb.home", to: "/" }, { labelKey: "breadcrumb.sustainability", to: "/sustainability" }];
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: t('breadcrumb.home'), url: 'https://polysource.global' }, { name: t('breadcrumb.sustainability'), url: 'https://polysource.global/sustainability' }]);

  const principles = [
    { icon: Target, title: t('sustainabilityPage.principles.quality.title'), description: t('sustainabilityPage.principles.quality.description') },
    { icon: FileText, title: t('sustainabilityPage.principles.traceable.title'), description: t('sustainabilityPage.principles.traceable.description') },
    { icon: Users, title: t('sustainabilityPage.principles.certified.title'), description: t('sustainabilityPage.principles.certified.description') },
    { icon: Globe, title: t('sustainabilityPage.principles.regional.title'), description: t('sustainabilityPage.principles.regional.description') }
  ];

  const commitmentItems = t('sustainabilityPage.commitment', { returnObjects: true }) as InfoItem[];
  const certifications = t('sustainabilityPage.certificationsList', { returnObjects: true }) as string[];
  const impactCards = t('sustainabilityPage.impactCards', { returnObjects: true }) as ImpactCard[];
  const impactItems = t('sustainabilityPage.impactList', { returnObjects: true }) as string[];
  const transparencyItems = t('sustainabilityPage.transparencyList', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <SEO title={t('sustainabilityPage.title')} description={t('sustainabilityPage.description')} structuredData={breadcrumbSchema} />

      <section className="bg-gradient-to-br from-success/20 to-success/5 pt-32 pb-20 border-b border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-success text-success"><Leaf className="h-3 w-3 mr-1" />{t('sustainabilityPage.badge')}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('sustainabilityPage.heroTitle')}</h1>
            <p className="text-xl text-muted-foreground">{t('sustainabilityPage.heroSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-foreground">{t('sustainabilityPage.commitmentTitle')}</h2>
          <div className="space-y-6 text-muted-foreground">
            {commitmentItems.map(item => (<div key={item.title} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0 mr-3" /><div><p className="font-medium text-foreground mb-1">{item.title}</p><p>{item.description}</p></div></div>))}
          </div>
        </div></div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('sustainabilityPage.principlesTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full"><CardHeader><div className="flex items-start"><div className="p-2 bg-success/10 rounded-lg mr-4"><p.icon className="h-6 w-6 text-success" /></div><div><CardTitle className="mb-2">{p.title}</CardTitle><CardDescription>{p.description}</CardDescription></div></div></CardHeader></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-foreground">{t('sustainabilityPage.certificationsTitle')}</h2>
          <Card><CardContent className="pt-6"><div className="flex flex-wrap gap-3">{certifications.map(cert => (<Badge key={cert} variant="secondary" className="text-sm">{cert}</Badge>))}</div></CardContent></Card>
        </div></div>
      </section>

      <section className="py-20 bg-success/5 border-y border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{t('sustainabilityPage.impactTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactCards.map(card => (<Card key={card.label} className="text-center"><CardContent className="pt-6"><p className="text-4xl font-bold text-foreground mb-2">{card.value}</p><p className="text-sm text-muted-foreground">{card.label}</p></CardContent></Card>))}
          </div>
        </div>
      </section>
    </div>
  );
}
