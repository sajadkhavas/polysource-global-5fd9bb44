import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  Shield, 
  Zap, 
  Globe, 
  FileText, 
  Truck,
  Leaf,
  Target,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const categories = [
    {
      title: 'Recycled Polymers',
      description: 'rPE, rPP, rPET with certified quality',
      icon: Leaf,
      link: '/products?category=recycled'
    },
    {
      title: 'Virgin Polymers',
      description: 'PE, PP grades for demanding applications',
      icon: Package,
      link: '/products?category=virgin'
    },
    {
      title: 'Compounds & Masterbatches',
      description: 'Custom-formulated for your specifications',
      icon: Target,
      link: '/products?category=compounds'
    },
    {
      title: 'Finished Parts',
      description: 'Injection molded and extruded components',
      icon: Shield,
      link: '/products?category=parts'
    }
  ];

  const valueProps = [
    {
      title: 'Batch Consistency',
      description: 'Every shipment meets spec. No surprises, no rework, no excuses.',
      icon: CheckCircle2
    },
    {
      title: 'Digital RFQ Process',
      description: 'Quote requests processed in under 48 hours. No WhatsApp chaos.',
      icon: Clock
    },
    {
      title: 'Technical Support',
      description: 'Material selection guidance, processing parameters, troubleshooting.',
      icon: Users
    },
    {
      title: 'Transparent Sourcing',
      description: 'Traceable material origins, certifications on demand, no greenwashing.',
      icon: FileText
    }
  ];

  const industries = [
    { name: 'Packaging', icon: Package },
    { name: 'Automotive', icon: Truck },
    { name: 'Construction', icon: Shield },
    { name: 'Consumer Goods', icon: Target },
    { name: 'Agriculture', icon: Leaf },
    { name: 'Industrial', icon: Zap }
  ];

  // Organization and Website structured data
  const organizationSchema = generateOrganizationSchema({
    name: 'PolySource Global',
    url: 'https://polysource.global',
    logo: 'https://polysource.global/logo.png',
    description: 'Dubai-based polymer supplier specializing in recycled and virgin polymers with global shipping',
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

  const websiteSchema = generateWebSiteSchema('PolySource Global', 'https://polysource.global');

  return (
    <div className="min-h-screen">
      <SEO
        title="Recycled Polymer Supplier Dubai | Virgin PE, PP, HDPE Materials"
        description="PolySource Global - Dubai's leading B2B polymer supplier. Technical-grade recycled PE, PP, rPET and virgin polymers. Serving 18+ countries with batch traceability and 48hr quote turnaround."
        keywords="recycled polymers Dubai, virgin polymers UAE, PE supplier, PP supplier, HDPE materials, rPE, rPP, B2B polymer trading, plastic raw materials, polymer distributor MENA"
        structuredData={[organizationSchema, websiteSchema]}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-home-polymers.jpg)' }}
        />
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-gradient-start)/0.9)] via-[hsl(var(--hero-gradient-start)/0.75)] to-transparent"
          animate={{
            background: [
              'linear-gradient(135deg, hsl(210 80% 15% / 0.9) 0%, hsl(210 75% 25% / 0.7) 50%, transparent 100%)',
              'linear-gradient(145deg, hsl(210 80% 18% / 0.9) 0%, hsl(210 75% 28% / 0.7) 50%, transparent 100%)',
              'linear-gradient(135deg, hsl(210 80% 15% / 0.9) 0%, hsl(210 75% 25% / 0.7) 50%, transparent 100%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-foreground/10 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
          <motion.div 
            className="max-w-4xl"
            {...fadeInUp}
          >
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm">
              Dubai to the World
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Recycled-First Polymer Supply Chain
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl drop-shadow-md">
              Global sourcing of high-quality recycled and virgin polymers with sustainability at the core. Technical-grade materials with traceable quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                <Link to="/products">View Materials</Link>
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Globe className="h-4 w-4" />
                <span>18+ Countries</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Package className="h-4 w-4" />
                <span>500+ Tons/month</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Shield className="h-4 w-4" />
                <span>Certified Recycled</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">12,500+</p>
              <p className="text-sm text-muted-foreground">Tonnes Delivered Annually</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">18+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">50%</p>
              <p className="text-sm text-muted-foreground">Recycled Content Available</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">&lt;48hr</p>
              <p className="text-sm text-muted-foreground">Quote Turnaround</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Industrial-Grade Polymers, Simplified
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From recycled materials to virgin grades and custom compounds, all with consistent quality you can rely on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link to={category.link}>
                    <CardHeader>
                      <category.icon className="h-10 w-10 mb-4 text-primary" />
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Leading Manufacturers Choose Us Over Traditional Traders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not another commodity trader. We're a technical partner focused on solving the real problems in recycled polymer supply.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <prop.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{prop.title}</CardTitle>
                        <CardDescription>{prop.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Trusted Across Industries
            </h2>
            <p className="text-lg text-muted-foreground">
              Supplying production-grade polymers to manufacturers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <industry.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="font-medium text-sm">{industry.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-success/5 border-y border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 border-success text-success">
                Sustainability
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Recycled-First. Traceable. Certified.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We prioritize recycled polymers not as a marketing gimmick, but as a technical solution. Every batch comes with traceable sourcing data and third-party certifications.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Post-consumer and post-industrial recycled content available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">ISO 14001 certified supply chain partners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Material passports with full traceability data</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
                <Link to="/sustainability">
                  Learn More About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center">
                <Leaf className="h-32 w-32 text-success" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources / Blog Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Technical Resources & Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Material data sheets, processing guides, and industry insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-3" />
                <CardTitle>TDS & SDS Library</CardTitle>
                <CardDescription>
                  Download technical and safety data sheets for all our materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link to="/resources">Access Resources →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-primary mb-3" />
                <CardTitle>Processing Guidelines</CardTitle>
                <CardDescription>
                  Temperature profiles, cycle times, and optimization tips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link to="/blog">Read Guide →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-3" />
                <CardTitle>Industry News</CardTitle>
                <CardDescription>
                  Latest updates on polymer markets and sustainability regulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link to="/blog">View Blog →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Source Reliable Polymers?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get a detailed quote within 48 hours. No WhatsApp back-and-forth required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start RFQ</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">Browse Catalog</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
