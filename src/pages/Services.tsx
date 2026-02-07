import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateBreadcrumbSchema, generateOrganizationSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Microscope, Shield, Truck, FileText, Users, CheckCircle2, ArrowRight, Beaker, ClipboardCheck, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const services = [
  { id: 'material-selection', icon: Target, title: 'Material Selection Consulting', shortDesc: 'Expert guidance to find the right polymer', benefits: ['Application-specific recommendations', 'Cost-performance optimization', 'Regulatory compliance guidance'] },
  { id: 'technical-support', icon: Microscope, title: 'Technical Support & Troubleshooting', shortDesc: 'Processing optimization and problem resolution', benefits: ['Processing parameter optimization', 'Defect analysis', 'Material blending guidance'] },
  { id: 'quality-control', icon: Shield, title: 'Quality Assurance & Testing', shortDesc: 'Rigorous testing and certification', benefits: ['Batch-specific Certificate of Analysis', 'Full material traceability', 'Third-party testing'] },
  { id: 'logistics', icon: Truck, title: 'Global Logistics & Shipping', shortDesc: 'Reliable delivery worldwide', benefits: ['Shipping to 18+ countries', 'Flexible Incoterms', 'Real-time tracking'] },
  { id: 'documentation', icon: FileText, title: 'Documentation & Compliance', shortDesc: 'Complete technical documentation', benefits: ['TDS & SDS', 'Compliance certificates', 'Material passports'] },
  { id: 'partnership', icon: Users, title: 'Partnership Programs', shortDesc: 'Long-term supply agreements', benefits: ['Volume-based pricing', 'Priority allocation', 'Dedicated account management'] }
];

const processSteps = [
  { step: 1, title: 'Consultation', description: 'Share your requirements with our team.', icon: Users },
  { step: 2, title: 'Recommendation', description: 'Receive material recommendations with pricing.', icon: Beaker },
  { step: 3, title: 'Validation', description: 'Evaluate samples in your production environment.', icon: ClipboardCheck },
  { step: 4, title: 'Delivery', description: 'Receive certified material with full documentation.', icon: Globe }
];

export default function Services() {
  const { t } = useTranslation();
  const breadcrumbItems = [{ labelKey: "breadcrumb.home", to: "/" }, { labelKey: "breadcrumb.services", to: "/services" }];
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: t('breadcrumb.home'), url: 'https://polysource.global' }, { name: t('breadcrumb.services'), url: 'https://polysource.global/services' }]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Services - Material Consulting & Technical Support" description="Expert polymer consulting services." structuredData={[breadcrumbSchema]} />

      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground [&_span]:text-primary-foreground [&_svg]:text-primary-foreground/50 bg-primary-foreground/10 border-primary-foreground/20" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">Technical Partnership</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">More Than Materials. A Technical Partner.</h1>
            <p className="text-xl text-primary-foreground/90">From material selection to production troubleshooting, we provide the expertise you need.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">Comprehensive support across the polymer supply chain</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full"><CardHeader><div className="p-2 bg-primary/10 rounded-lg w-fit mb-3"><service.icon className="h-6 w-6 text-primary" /></div><CardTitle className="text-lg">{service.title}</CardTitle><CardDescription>{service.shortDesc}</CardDescription></CardHeader>
                  <CardContent><ul className="space-y-2">{service.benefits.map(b => (<li key={b} className="flex items-start text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />{b}</li>))}</ul></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className="text-center h-full"><CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><step.icon className="h-6 w-6 text-primary" /></div>
                  <p className="text-xs text-muted-foreground mb-1">Step {step.step}</p>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">Tell us about your requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary"><Link to="/contact">Request a Quote</Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/products">Browse Products</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
