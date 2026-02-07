import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { generateProductSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Download, Leaf, Shield, Package, Truck, FileText, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LazyImage } from '@/components/LazyImage';
import { getProductImage, getProductAltText } from '@/data/product-images';
import type { ProductCategory } from '@/data/product-taxonomy';

export default function ProductDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState('');

  const product = {
    id: 'rpe-001', name: 'Recycled HDPE Film Grade', grade: 'rHDPE-F100', type: 'HDPE',
    recycled: true, recycledContent: '100% Post-Consumer', color: 'Natural',
    description: 'High-quality recycled HDPE specifically engineered for film applications.',
    specifications: { mfi: '0.3-0.7 g/10min (190°C/2.16kg)', density: '0.954-0.960 g/cm³', tensileStrength: '≥ 24 MPa', elongation: '≥ 500%', meltingPoint: '125-132°C' },
    applications: ['Packaging Film', 'Shopping Bags', 'Agricultural Film', 'Protective Sheeting'],
    certifications: ['ISO 9001', 'ISO 14001', 'FDA Contact Compliant'],
    processing: { temperature: '180-220°C', mouldTemp: '20-40°C', backPressure: '5-15 bar', screwSpeed: 'Medium' },
    packaging: { standard: '25kg bags', bulk: 'Big bags (500-1000kg)', container: '20-26 MT per 40ft container' },
    documents: { tds: '/documents/rhdpe-f100-tds.pdf', sds: '/documents/rhdpe-f100-sds.pdf', certificate: '/documents/rhdpe-f100-certificate.pdf' },
    faqs: [
      { question: 'What is the minimum order quantity?', answer: 'Typically 1 container (20-26 MT). Contact us for smaller orders.' },
      { question: 'Is this material suitable for food contact?', answer: 'Yes, this grade is FDA contact compliant.' },
      { question: 'What quality documentation is included?', answer: 'CoA, MSDS/SDS, TDS, and compliance certificates.' }
    ],
    inStock: true
  };

  const productSchema = generateProductSchema({ name: product.name, description: product.description, brand: 'PolySource Global', offers: { availability: product.inStock ? 'InStock' : 'OutOfStock' } });
  const breadcrumbItems = [{ labelKey: "breadcrumb.home", to: "/" }, { labelKey: "breadcrumb.products", to: "/products" }, { label: product.name, to: `/products/${product.id}` }];
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: t('breadcrumb.home'), url: 'https://polysource.global' }, { name: t('breadcrumb.products'), url: 'https://polysource.global/products' }, { name: product.name, url: `https://polysource.global/products/${product.id}` }]);
  const faqSchema = generateFAQSchema(product.faqs);

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${product.name} - ${product.grade}`} description={product.description} structuredData={[productSchema, breadcrumbSchema, faqSchema]} />
      <section className="bg-muted/50 py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><Breadcrumbs items={breadcrumbItems} className="mb-0" /></div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-96 flex-shrink-0">
              <Card className="overflow-hidden">
                <div className="aspect-square relative bg-muted">
                  <LazyImage src={getProductImage('recycled' as ProductCategory)} alt={getProductAltText(product.name, 'recycled' as ProductCategory)} className="w-full h-full object-cover" />
                </div>
              </Card>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.recycled && <Badge variant="outline" className="border-success text-success"><Leaf className="h-3 w-3 mr-1" />{product.recycledContent}</Badge>}
                {product.inStock && <Badge variant="secondary">{t('productDetail.inStock')}</Badge>}
              </div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">{product.name}</h1>
              <p className="text-lg text-muted-foreground font-mono mb-4">{product.grade}</p>
              <p className="text-muted-foreground max-w-3xl">{product.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg"><Link to="/contact">{t('productDetail.requestQuote')}</Link></Button>
                <Button variant="outline" size="lg"><Download className="h-4 w-4 mr-2" />{t('productDetail.downloadTds')}</Button>
              </div>
            </div>

            <Card className="lg:w-96 flex-shrink-0">
              <CardHeader><CardTitle>{t('productDetail.quickQuote.title')}</CardTitle><CardDescription>{t('productDetail.quickQuote.subtitle')}</CardDescription></CardHeader>
              <CardContent className="space-y-4">
                <div><Label htmlFor="name">{t('productDetail.quickQuote.yourName')}</Label><Input id="name" placeholder={t('productDetail.quickQuote.namePlaceholder')} /></div>
                <div><Label htmlFor="email">{t('productDetail.quickQuote.email')}</Label><Input id="email" type="email" placeholder={t('productDetail.quickQuote.emailPlaceholder')} /></div>
                <div><Label htmlFor="company">{t('productDetail.quickQuote.company')}</Label><Input id="company" placeholder={t('productDetail.quickQuote.companyPlaceholder')} /></div>
                <div><Label htmlFor="quantity">{t('productDetail.quickQuote.quantity')}</Label><Input id="quantity" placeholder={t('productDetail.quickQuote.quantityPlaceholder')} value={quantity} onChange={(e) => setQuantity(e.target.value)} /></div>
                <div><Label htmlFor="notes">{t('productDetail.quickQuote.requirements')}</Label><Textarea id="notes" placeholder={t('productDetail.quickQuote.requirementsPlaceholder')} rows={3} /></div>
                <Button className="w-full">{t('productDetail.quickQuote.submit')}</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto">
              <TabsTrigger value="overview">{t('productDetail.tabs.overview')}</TabsTrigger>
              <TabsTrigger value="specifications">{t('productDetail.tabs.specifications')}</TabsTrigger>
              <TabsTrigger value="applications">{t('productDetail.tabs.applications')}</TabsTrigger>
              <TabsTrigger value="faq">{t('productDetail.tabs.faq')}</TabsTrigger>
            </TabsList>
            <TabsContent value="overview"><Card><CardHeader><CardTitle>{t('productDetail.overview.title')}</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">{product.description}</p></CardContent></Card></TabsContent>
            <TabsContent value="specifications">
              <Card><CardHeader><CardTitle>{t('productDetail.specifications.title')}</CardTitle></CardHeader><CardContent>
                <Table><TableHeader><TableRow><TableHead>Property</TableHead><TableHead>Value</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {Object.entries(product.specifications).map(([key, val]) => (<TableRow key={key}><TableCell className="font-medium capitalize">{key}</TableCell><TableCell>{val}</TableCell></TableRow>))}
                  </TableBody>
                </Table>
              </CardContent></Card>
            </TabsContent>
            <TabsContent value="applications">
              <Card><CardHeader><CardTitle>{t('productDetail.applications.title')}</CardTitle></CardHeader><CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.applications.map(app => (<div key={app} className="flex items-center p-4 bg-muted/50 rounded-lg"><Package className="h-5 w-5 text-primary mr-3 flex-shrink-0" /><span className="font-medium">{app}</span></div>))}
                </div>
              </CardContent></Card>
            </TabsContent>
            <TabsContent value="faq">
              <Card><CardHeader><CardTitle>{t('productDetail.faq.title')}</CardTitle></CardHeader><CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {product.faqs.map((faq, i) => (<AccordionItem key={i} value={`item-${i}`}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>))}
                </Accordion>
              </CardContent></Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
