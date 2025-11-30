import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
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
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { trackQuoteRequest } from '@/lib/analytics';
import resourcesLibrary from '@/assets/resources-library.jpg';
import resourcesProcessing from '@/assets/resources-processing.jpg';
import resourcesNews from '@/assets/resources-news.jpg';
import industryPackaging from '@/assets/industries/industry-packaging.jpg';
import industryAutomotive from '@/assets/industries/industry-automotive.jpg';
import industryConstruction from '@/assets/industries/industry-construction.jpg';
import industryConsumer from '@/assets/industries/industry-consumer.jpg';
import industryAgriculture from '@/assets/industries/industry-agriculture.jpg';
import industryIndustrial from '@/assets/industries/industry-industrial.jpg';
import sustainabilityHero from '@/assets/sustainability-hero.jpg';
import whyChooseUs from '@/assets/why-choose-us.jpg';

export default function Home() {
  const { t, i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const isRTL = resolvedLanguage.startsWith('ar');

  const seoTitle = t('seo.home.title');
  const seoDescription = t('seo.home.description');
  const organizationDescription = t('seo.organizationDescription');
  const brandName = t('branding.name');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const categories = [
    {
      title: t('categories.recycled.title'),
      description: t('categories.recycled.description'),
      icon: Leaf,
      link: '/products?category=recycled',
      image: '/images/products/recycled-granules.jpg'
    },
    {
      title: t('categories.virgin.title'),
      description: t('categories.virgin.description'),
      icon: Package,
      link: '/products?category=virgin',
      image: '/images/products/petrochemical-pellets.jpg'
    },
    {
      title: t('categories.compounds.title'),
      description: t('categories.compounds.description'),
      icon: Target,
      link: '/products?category=compounds',
      image: '/images/products/compounds-masterbatch.jpg'
    },
    {
      title: t('categories.parts.title'),
      description: t('categories.parts.description'),
      icon: Shield,
      link: '/products?category=parts',
      image: '/images/products/finished-parts.jpg'
    }
  ];

  const valueProps = [
    {
      title: t('whyUs.batch.title'),
      description: t('whyUs.batch.description'),
      icon: CheckCircle2
    },
    {
      title: t('whyUs.rfq.title'),
      description: t('whyUs.rfq.description'),
      icon: Clock
    },
    {
      title: t('whyUs.support.title'),
      description: t('whyUs.support.description'),
      icon: Users
    },
    {
      title: t('whyUs.sourcing.title'),
      description: t('whyUs.sourcing.description'),
      icon: FileText
    }
  ];

  const industries = [
    { name: t('industries.packaging'), icon: Package, image: industryPackaging },
    { name: t('industries.automotive'), icon: Truck, image: industryAutomotive },
    { name: t('industries.construction'), icon: Shield, image: industryConstruction },
    { name: t('industries.consumer'), icon: Target, image: industryConsumer },
    { name: t('industries.agriculture'), icon: Leaf, image: industryAgriculture },
    { name: t('industries.industrial'), icon: Zap, image: industryIndustrial }
  ];

  // Organization and Website structured data
  const organizationSchema = generateOrganizationSchema({
    name: brandName,
    url: 'https://polysource.global',
    logo: 'https://polysource.global/logo.png',
    description: organizationDescription,
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

  const websiteSchema = generateWebSiteSchema(brandName, 'https://polysource.global');

  return (
    <div className="min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
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
            className={cn("max-w-4xl", isRTL && "text-right")}
            {...fadeInUp}
          >
            <Badge variant="secondary" className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm">
              {t('hero.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl drop-shadow-md">
              {t('hero.subtitle')}
            </p>
            <div className={cn("flex flex-col sm:flex-row gap-4 mb-8", isRTL && "sm:flex-row-reverse")}>
              <Button 
                asChild 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                onClick={() => trackQuoteRequest('hero')}
              >
                <Link to="/contact">{t('hero.requestQuote')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                <Link to="/products">{t('hero.viewMaterials')}</Link>
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => {
                  document.getElementById('product-categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.viewAllMaterials')}
                <ChevronDown className={cn("h-4 w-4", isRTL ? "mr-2" : "ml-2")} />
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className={cn(
              "flex flex-wrap items-center gap-6 pt-4 border-t border-primary-foreground/20",
              isRTL && "flex-row-reverse"
            )}>
              <div className={cn("flex items-center gap-2 text-sm text-primary-foreground/80", isRTL && "flex-row-reverse")}>
                <Globe className="h-4 w-4" />
                <span>{t('hero.trustBadges.countries')}</span>
              </div>
              <div className={cn("flex items-center gap-2 text-sm text-primary-foreground/80", isRTL && "flex-row-reverse")}>
                <Package className="h-4 w-4" />
                <span>{t('hero.trustBadges.tons')}</span>
              </div>
              <div className={cn("flex items-center gap-2 text-sm text-primary-foreground/80", isRTL && "flex-row-reverse")}>
                <Shield className="h-4 w-4" />
                <span>{t('hero.trustBadges.certified')}</span>
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
              <p className="text-sm text-muted-foreground">{t('stats.tonnesDelivered')}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">18+</p>
              <p className="text-sm text-muted-foreground">{t('stats.countriesServed')}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">50%</p>
              <p className="text-sm text-muted-foreground">{t('stats.recycledContent')}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">&lt;48hr</p>
              <p className="text-sm text-muted-foreground">{t('stats.quoteTurnaround')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="product-categories" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className={cn("text-center mb-12", isRTL && "text-center")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('categories.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('categories.subtitle')}
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
                  <Link to={category.link}>
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                      <div className={cn(
                        "absolute bottom-3 p-2 bg-primary/90 rounded-lg",
                        isRTL ? "right-3" : "left-3"
                      )}>
                        <category.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                    <CardHeader className={cn("pt-4", isRTL ? 'text-right' : '')}>
                      <CardTitle className="group-hover:text-primary transition-colors text-lg">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{category.description}</CardDescription>
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
            className={cn("text-center mb-12", isRTL && "text-center")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('whyUs.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </motion.div>

          <div className={cn(
            "grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center",
            isRTL && "lg:grid-flow-dense"
          )}>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={cn("relative", isRTL && "lg:col-start-2")}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={whyChooseUs}
                  alt="Business partnership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className={cn("flex items-start", isRTL && "flex-row-reverse")}>
                        <div className={cn("p-2 bg-primary/10 rounded-lg", isRTL ? "ml-4" : "mr-4")}>
                          <prop.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className={isRTL ? 'text-right' : ''}>
                          <CardTitle className="mb-2 text-base">{prop.title}</CardTitle>
                          <CardDescription className="text-sm">{prop.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              {t('industries.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('industries.subtitle')}
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
                <Card className="text-center overflow-hidden hover:shadow-lg transition-all group">
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <industry.icon className="h-6 w-6 mx-auto mb-1 text-white" />
                      <p className="font-medium text-sm text-white">{industry.name}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-success/5 border-y border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto",
            isRTL && "md:grid-flow-dense"
          )}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={isRTL ? 'text-right md:col-start-2' : ''}
            >
              <Badge variant="outline" className="mb-4 border-success text-success">
                {t('sustainability.badge')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('sustainability.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('sustainability.subtitle')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className={cn("flex items-start", isRTL && "flex-row-reverse")}>
                  <CheckCircle2 className={cn("h-5 w-5 text-success mt-0.5 flex-shrink-0", isRTL ? "ml-3" : "mr-3")} />
                  <span className="text-muted-foreground">{t('sustainability.points.pcr')}</span>
                </li>
                <li className={cn("flex items-start", isRTL && "flex-row-reverse")}>
                  <CheckCircle2 className={cn("h-5 w-5 text-success mt-0.5 flex-shrink-0", isRTL ? "ml-3" : "mr-3")} />
                  <span className="text-muted-foreground">{t('sustainability.points.iso')}</span>
                </li>
                <li className={cn("flex items-start", isRTL && "flex-row-reverse")}>
                  <CheckCircle2 className={cn("h-5 w-5 text-success mt-0.5 flex-shrink-0", isRTL ? "ml-3" : "mr-3")} />
                  <span className="text-muted-foreground">{t('sustainability.points.co2')}</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
                <Link to="/sustainability">
                  {t('sustainability.learnMore')}
                  <ArrowRight className={cn("h-4 w-4", isRTL ? "mr-2 rotate-180" : "ml-2")} />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={cn("relative", isRTL && "md:col-start-1 md:row-start-1")}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <motion.img 
                  src={sustainabilityHero}
                  alt="Sustainable polymer recycling"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-success/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Leaf className="h-8 w-8 text-success" />
                  </div>
                </div>
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
              {t('home.resources.sectionTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('home.resources.sectionSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={resourcesLibrary} 
                  alt="TDS & SDS Library"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className={cn(
                  "absolute bottom-3 p-2 bg-primary/90 rounded-lg",
                  isRTL ? "right-3" : "left-3"
                )}>
                  <FileText className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <CardHeader className={cn("pt-4", isRTL ? 'text-right' : '')}>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{t('home.resources.cards.libraryTitle')}</CardTitle>
                <CardDescription className="text-sm">
                  {t('home.resources.cards.libraryDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className={isRTL ? 'text-right' : ''}>
                <Button asChild variant="link" className="p-0">
                  <Link to="/resources">{t('home.resources.cards.libraryCta')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={resourcesProcessing} 
                  alt="Processing Guidelines"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className={cn(
                  "absolute bottom-3 p-2 bg-primary/90 rounded-lg",
                  isRTL ? "right-3" : "left-3"
                )}>
                  <Package className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <CardHeader className={cn("pt-4", isRTL ? 'text-right' : '')}>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{t('home.resources.cards.guidesTitle')}</CardTitle>
                <CardDescription className="text-sm">
                  {t('home.resources.cards.guidesDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className={isRTL ? 'text-right' : ''}>
                <Button asChild variant="link" className="p-0">
                  <Link to="/blog">{t('home.resources.cards.guidesCta')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={resourcesNews} 
                  alt="Industry News"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className={cn(
                  "absolute bottom-3 p-2 bg-primary/90 rounded-lg",
                  isRTL ? "right-3" : "left-3"
                )}>
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <CardHeader className={cn("pt-4", isRTL ? 'text-right' : '')}>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{t('home.resources.cards.newsTitle')}</CardTitle>
                <CardDescription className="text-sm">
                  {t('home.resources.cards.newsDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className={isRTL ? 'text-right' : ''}>
                <Button asChild variant="link" className="p-0">
                  <Link to="/blog">{t('home.resources.cards.newsCta')}</Link>
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
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className={cn("flex flex-col sm:flex-row gap-4 justify-center", isRTL && "sm:flex-row-reverse")}>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">{t('cta.button')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">{t('home.resources.browseCatalogCta')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
