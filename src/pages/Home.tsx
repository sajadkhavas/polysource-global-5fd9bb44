import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Package, Shield, Zap, Globe, FileText, Truck, Leaf, Target, Clock, Users, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { trackQuoteRequest } from '@/lib/analytics';
import industryPackaging from '@/assets/industries/industry-packaging.jpg';
import industryAutomotive from '@/assets/industries/industry-automotive.jpg';
import industryConstruction from '@/assets/industries/industry-construction.jpg';
import industryConsumer from '@/assets/industries/industry-consumer.jpg';
import industryAgriculture from '@/assets/industries/industry-agriculture.jpg';
import industryIndustrial from '@/assets/industries/industry-industrial.jpg';
import sustainabilityHero from '@/assets/sustainability-hero.jpg';
import whyChooseUs from '@/assets/why-choose-us.jpg';

export default function Home() {
  const { t } = useTranslation();
  const brandName = t('branding.name');

  const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

  const categories = [
    { title: t('categories.recycled.title'), description: t('categories.recycled.description'), icon: Leaf, link: '/products?category=recycled', image: '/images/products/recycled-granules.jpg' },
    { title: t('categories.virgin.title'), description: t('categories.virgin.description'), icon: Package, link: '/products?category=virgin', image: '/images/products/petrochemical-pellets.jpg' },
    { title: t('categories.compounds.title'), description: t('categories.compounds.description'), icon: Target, link: '/products?category=compounds', image: '/images/products/compounds-masterbatch.jpg' },
    { title: t('categories.parts.title'), description: t('categories.parts.description'), icon: Shield, link: '/products?category=parts', image: '/images/products/finished-parts.jpg' }
  ];

  const valueProps = [
    { title: t('whyUs.batch.title'), description: t('whyUs.batch.description'), icon: CheckCircle2 },
    { title: t('whyUs.rfq.title'), description: t('whyUs.rfq.description'), icon: Clock },
    { title: t('whyUs.support.title'), description: t('whyUs.support.description'), icon: Users },
    { title: t('whyUs.sourcing.title'), description: t('whyUs.sourcing.description'), icon: FileText }
  ];

  const industries = [
    { name: t('industries.packaging'), icon: Package, image: industryPackaging },
    { name: t('industries.automotive'), icon: Truck, image: industryAutomotive },
    { name: t('industries.construction'), icon: Shield, image: industryConstruction },
    { name: t('industries.consumer'), icon: Target, image: industryConsumer },
    { name: t('industries.agriculture'), icon: Leaf, image: industryAgriculture },
    { name: t('industries.industrial'), icon: Zap, image: industryIndustrial }
  ];

  const organizationSchema = generateOrganizationSchema({ name: brandName, url: 'https://polysource.global', logo: 'https://polysource.global/logo.png', description: t('seo.organizationDescription'), address: { addressLocality: 'Dubai', addressCountry: 'UAE' }, contactPoint: { telephone: '+971 4 XXX XXXX', email: 'hello@polysource.global', contactType: 'Customer Service' } });
  const websiteSchema = generateWebSiteSchema(brandName, 'https://polysource.global');

  return (
    <div className="min-h-screen">
      <SEO title={t('seo.home.title')} description={t('seo.home.description')} structuredData={[organizationSchema, websiteSchema]} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/hero-home-polymers.jpg)' }} />
        <motion.div className="absolute inset-0 bg-gradient-to-r from-[hsl(210_80%_15%/0.9)] via-[hsl(210_75%_25%/0.7)] to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
          <motion.div className="max-w-4xl" {...fadeInUp}>
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm">{t('hero.badge')}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">{t('hero.title')}</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl drop-shadow-md">{t('hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" onClick={() => trackQuoteRequest('hero')}><Link to="/contact">{t('hero.requestQuote')}</Link></Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"><Link to="/products">{t('hero.viewMaterials')}</Link></Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80"><Globe className="h-4 w-4" /><span>{t('hero.trustBadges.countries')}</span></div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80"><Package className="h-4 w-4" /><span>{t('hero.trustBadges.tons')}</span></div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80"><Shield className="h-4 w-4" /><span>{t('hero.trustBadges.certified')}</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ val: '12,500+', label: t('stats.tonnesDelivered') }, { val: '18+', label: t('stats.countriesServed') }, { val: '50%', label: t('stats.recycledContent') }, { val: '<48hr', label: t('stats.quoteTurnaround') }].map((s, i) => (
              <motion.div key={s.val} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{s.val}</p><p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="product-categories" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">{t('categories.title')}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{t('categories.subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                  <Link to={c.link}>
                    <div className="relative h-40 overflow-hidden"><img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" /><div className="absolute bottom-3 left-3 p-2 bg-primary/90 rounded-lg"><c.icon className="h-5 w-5 text-primary-foreground" /></div></div>
                    <CardHeader className="pt-4"><CardTitle className="group-hover:text-primary transition-colors text-lg">{c.title}</CardTitle><CardDescription className="text-sm">{c.description}</CardDescription></CardHeader>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">{t('whyUs.title')}</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl"><img src={whyChooseUs} alt="Business partnership" className="w-full h-full object-cover" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueProps.map((prop, i) => (
                <motion.div key={prop.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="h-full"><CardHeader><div className="flex items-start"><div className="p-2 bg-primary/10 rounded-lg mr-4"><prop.icon className="h-6 w-6 text-primary" /></div><div><CardTitle className="mb-2 text-base">{prop.title}</CardTitle><CardDescription className="text-sm">{prop.description}</CardDescription></div></div></CardHeader></Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">{t('industries.title')}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">{t('industries.subtitle')}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="text-center overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-32 overflow-hidden"><img src={ind.image} alt={ind.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-3"><ind.icon className="h-6 w-6 mx-auto mb-1 text-white" /><p className="font-medium text-sm text-white">{ind.name}</p></div></div>
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
            <div>
              <Badge variant="outline" className="mb-4 border-success text-success">{t('sustainability.badge')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('sustainability.title')}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t('sustainability.subtitle')}</p>
              <ul className="space-y-3 mb-8">
                {['pcr', 'iso', 'co2'].map(key => (
                  <li key={key} className="flex items-start"><CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0 mr-3" /><span className="text-muted-foreground">{t(`sustainability.points.${key}`)}</span></li>
                ))}
              </ul>
              <Button asChild variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
                <Link to="/sustainability">{t('sustainability.learnMore')}<ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img src={sustainabilityHero} alt="Sustainable polymer recycling" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary"><Link to="/contact">{t('cta.button')}</Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/products">{t('home.resources.browseCatalogCta')}</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
