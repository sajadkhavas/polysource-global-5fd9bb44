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
  Beaker,
  ClipboardCheck,
  Globe
} from 'lucide-react';

const services = [
  {
    id: 'material-selection',
    icon: Target,
    title: 'Material Selection Consulting',
    shortDesc: 'Expert guidance to find the right polymer for your application',
    description: 'Our materials engineering team helps you identify the optimal polymer grade for your specific application requirements. We consider mechanical properties, processing parameters, environmental factors, and regulatory compliance to recommend materials that perform reliably in production.',
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
    description: 'From processing parameter optimization to troubleshooting production issues, our technical team provides hands-on support. We help you maximize output quality, reduce waste, and solve processing challenges with data-driven recommendations.',
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
    description: 'Every shipment includes comprehensive quality documentation. We perform batch testing, provide Certificates of Analysis, and maintain full traceability from source to delivery. Additional testing services available upon request.',
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
    description: 'Our Dubai hub provides strategic access to global markets. We handle export documentation, coordinate shipping, and offer flexible Incoterms to match your logistics requirements. Real-time shipment tracking keeps you informed throughout transit.',
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
    description: 'We provide comprehensive documentation packages including Technical Data Sheets (TDS), Safety Data Sheets (SDS), compliance certificates, and material passports. Custom documentation available for specific regulatory requirements.',
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
    description: 'For regular buyers, we offer partnership programs with benefits including priority allocation, volume pricing, dedicated account management, and flexible payment terms. Build a reliable supply relationship with preferential conditions.',
    benefits: [
      'Volume-based pricing tiers',
      'Priority stock allocation',
      'Dedicated account management',
      'Flexible payment terms',
      'Quarterly business reviews'
    ],
    cta: 'Explore Partnership Options'
  }
];

const processSteps = [
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
];

export default function Services() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://polysource.global' },
    { name: 'Services', url: 'https://polysource.global/services' }
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
        title="Services - Material Consulting & Technical Support"
        description="Expert polymer consulting services including material selection, technical support, quality assurance, and global logistics. Partner with Dubai's leading polymer supplier for reliable supply chain solutions."
        keywords="polymer consulting, material selection, technical support, quality assurance, polymer logistics, B2B polymer services"
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
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              Technical Partnership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Materials. A Technical Partner.
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              From material selection to production troubleshooting, we provide the expertise and support you need for successful polymer applications.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Discuss Your Requirements</Link>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support across the entire polymer supply chain
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
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
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link to="/contact">
                        {service.cta}
                        <ArrowRight className="h-4 w-4 ml-1" />
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure successful material supply
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Tell us about your requirements and let's find the right solution together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
