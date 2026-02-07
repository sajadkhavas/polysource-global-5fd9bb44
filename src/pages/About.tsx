import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Target, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: 'Technical Excellence', description: 'We prioritize material science and processing expertise over sales pitches.' },
    { icon: Globe, title: 'Global Reach', description: 'Dubai hub position enables us to bridge MENA, European, Asian, and African markets efficiently.' },
    { icon: Users, title: 'Partnership Mindset', description: "We work as an extension of your team, not just a vendor sending invoices." },
    { icon: Award, title: 'Recycled-First', description: 'We believe recycled polymers are the future when done right—with quality and transparency.' }
  ];

  const organizationSchema = generateOrganizationSchema({ name: 'PolySource Global', url: 'https://polysource.global', logo: 'https://polysource.global/logo.png', description: 'Dubai-based polymer supplier founded by engineers.', address: { addressLocality: 'Dubai', addressCountry: 'UAE' }, contactPoint: { telephone: '+971 4 XXX XXXX', email: 'hello@polysource.global', contactType: 'Customer Service' } });
  const breadcrumbItems = [{ labelKey: "breadcrumb.home", to: "/" }, { labelKey: "breadcrumb.about", to: "/about" }];
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: t('breadcrumb.home'), url: 'https://polysource.global' }, { name: t('breadcrumb.about'), url: 'https://polysource.global/about' }]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="About PolySource Global" description="Founded in 2019 in Dubai by materials engineers. PolySource Global serves 18+ countries." structuredData={[organizationSchema, breadcrumbSchema]} />
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground [&_span]:text-primary-foreground [&_svg]:text-primary-foreground/50 bg-primary-foreground/10 border-primary-foreground/20" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Built by Engineers Who Got Tired of Unreliable Polymer Traders</h1>
            <p className="text-xl text-primary-foreground/90">We started PolySource because we experienced the same frustrations you have: inconsistent recycled materials, slow WhatsApp-based RFQs, and traders who disappear when problems arise.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>Founded in 2019 in Dubai, PolySource Global emerged from a simple observation: the polymer trading industry was stuck in the past.</p>
                <p>Our founding team brought together materials engineering expertise, supply chain experience, and a commitment to doing things differently.</p>
                <p>Today, we serve manufacturers across 18+ countries, delivering over 12,500 tonnes annually.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full"><CardHeader><div className="flex items-start"><div className="p-2 bg-primary/10 rounded-lg mr-4"><value.icon className="h-6 w-6 text-primary" /></div><div><CardTitle className="mb-2">{value.title}</CardTitle><p className="text-muted-foreground">{value.description}</p></div></div></CardHeader></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
