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
import { ArrowLeft, ArrowRight, Download, Leaf, Shield, Package, Truck, FileText, CheckCircle2 } from 'lucide-react';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';
import { LazyImage } from '@/components/LazyImage';
import { getProductImage, getProductAltText } from '@/data/product-images';
import { useDirection } from '@/hooks/useDirection';
import type { ProductCategory } from '@/data/product-taxonomy';

export default function ProductDetail() {
  const { id } = useParams();
  const { addProduct } = useRFQ();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const { isRTL } = useDirection();
  const [quantity, setQuantity] = useState('');

  // Mock product data
  const product = {
    id: 'rpe-001',
    name: 'Recycled HDPE Film Grade',
    grade: 'rHDPE-F100',
    type: 'HDPE',
    recycled: true,
    recycledContent: '100% Post-Consumer',
    color: 'Natural',
    description: 'High-quality recycled HDPE specifically engineered for film applications. This grade delivers consistent processing characteristics and excellent film properties, making it ideal for packaging and agricultural applications.',
    specifications: {
      mfi: '0.3-0.7 g/10min (190°C/2.16kg)',
      density: '0.954-0.960 g/cm³',
      tensileStrength: '≥ 24 MPa',
      elongation: '≥ 500%',
      meltingPoint: '125-132°C'
    },
    applications: ['Packaging Film', 'Shopping Bags', 'Agricultural Film', 'Protective Sheeting'],
    certifications: ['ISO 9001', 'ISO 14001', 'FDA Contact Compliant'],
    processing: {
      temperature: '180-220°C',
      mouldTemp: '20-40°C',
      backPressure: '5-15 bar',
      screwSpeed: 'Medium'
    },
    packaging: {
      standard: '25kg bags',
      bulk: 'Big bags (500-1000kg)',
      container: '20-26 MT per 40ft container'
    },
    documents: {
      tds: '/documents/rhdpe-f100-tds.pdf',
      sds: '/documents/rhdpe-f100-sds.pdf',
      certificate: '/documents/rhdpe-f100-certificate.pdf'
    },
    faqs: [
      {
        question: 'What is the minimum order quantity?',
        answer: 'Our minimum order quantity is typically 1 container (20-26 MT). However, we can accommodate smaller orders based on availability. Contact us to discuss your specific requirements.'
      },
      {
        question: 'Is this material suitable for food contact applications?',
        answer: 'Yes, this grade is FDA contact compliant and suitable for food packaging applications. We provide full documentation including certificates of compliance with each shipment.'
      },
      {
        question: 'What is the shelf life of this material?',
        answer: 'When stored properly in a cool, dry place away from direct sunlight, this material has a shelf life of 24 months from the date of manufacture. We recommend using FIFO (First In, First Out) inventory management.'
      },
      {
        question: 'Can you provide technical support for processing?',
        answer: 'Absolutely! Our technical team provides comprehensive support including processing parameter optimization, troubleshooting, and application development assistance. We also offer on-site visits for major projects.'
      },
      {
        question: 'What quality documentation is included with shipments?',
        answer: 'Every shipment includes: Certificate of Analysis (CoA), Material Safety Data Sheet (MSDS/SDS), Technical Data Sheet (TDS), and relevant compliance certificates. Additional documentation available upon request.'
      }
    ],
    inStock: true
  };

  const handleAddToRFQ = () => {
    addProduct({
      id: product.id,
      name: product.name,
      type: product.type,
      grade: product.grade
    });
    toast({
      title: t('productDetail.addedToRfq'),
      description: t('productDetail.addedToRfqDesc', { name: product.name }),
    });
  };

  // Generate structured data for SEO
  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    brand: 'PolySource Global',
    offers: {
      availability: product.inStock ? 'InStock' : 'OutOfStock'
    }
  });

  const breadcrumbItems = [
    { labelKey: "breadcrumb.home", to: "/" },
    { labelKey: "breadcrumb.products", to: "/products" },
    { label: product.name, to: `/products/${product.id}` }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.products'), url: 'https://polysource.global/products' },
    { name: product.name, url: `https://polysource.global/products/${product.id}` }
  ]);

  const faqSchema = generateFAQSchema(product.faqs);

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.name} - ${product.grade}`}
        description={product.description.slice(0, 155)}
        keywords={`${product.type}, ${product.recycled ? 'recycled polymer' : 'polymer'}, ${product.applications.join(', ')}`}
        type="product"
        structuredData={[productSchema, breadcrumbSchema, faqSchema]}
      />
      {/* Breadcrumb */}
      <section className="bg-muted/50 py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} className="mb-0" />
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col lg:flex-row gap-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Product Image */}
            <div className="lg:w-96 flex-shrink-0">
              <Card className="overflow-hidden">
                <div className="aspect-square relative bg-muted">
                  <LazyImage
                    src={getProductImage('recycled' as ProductCategory)}
                    alt={getProductAltText(product.name, 'recycled' as ProductCategory)}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.recycled && (
                  <Badge variant="outline" className="border-success text-success">
                    <Leaf className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {product.recycledContent}
                  </Badge>
                )}
                {product.inStock && (
                  <Badge variant="secondary">{t('productDetail.inStock')}</Badge>
                )}
                {product.certifications.includes('FDA Contact Compliant') && (
                  <Badge variant="outline">
                    <Shield className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    FDA Contact Compliant
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">{product.name}</h1>
              <p className="text-lg text-muted-foreground font-mono mb-4">{product.grade}</p>
              <p className="text-muted-foreground max-w-3xl">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={handleAddToRFQ} size="lg">
                  {t('productDetail.requestQuote')}
                </Button>
                <Button variant="outline" size="lg">
                  {t('productDetail.requestSample')}
                </Button>
                <Button variant="outline" size="lg">
                  <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('productDetail.downloadTds')}
                </Button>
              </div>
            </div>

            {/* Quick RFQ Panel */}
            <Card className="lg:w-96 flex-shrink-0">
              <CardHeader>
                <CardTitle>{t('productDetail.quickQuote.title')}</CardTitle>
                <CardDescription>{t('productDetail.quickQuote.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">{t('productDetail.quickQuote.yourName')}</Label>
                  <Input id="name" placeholder={t('productDetail.quickQuote.namePlaceholder')} />
                </div>
                <div>
                  <Label htmlFor="email">{t('productDetail.quickQuote.email')}</Label>
                  <Input id="email" type="email" placeholder={t('productDetail.quickQuote.emailPlaceholder')} />
                </div>
                <div>
                  <Label htmlFor="company">{t('productDetail.quickQuote.company')}</Label>
                  <Input id="company" placeholder={t('productDetail.quickQuote.companyPlaceholder')} />
                </div>
                <div>
                  <Label htmlFor="quantity">{t('productDetail.quickQuote.quantity')}</Label>
                  <Input 
                    id="quantity" 
                    placeholder={t('productDetail.quickQuote.quantityPlaceholder')}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="notes">{t('productDetail.quickQuote.requirements')}</Label>
                  <Textarea id="notes" placeholder={t('productDetail.quickQuote.requirementsPlaceholder')} rows={3} />
                </div>
                <Button className="w-full">{t('productDetail.quickQuote.submit')}</Button>
                <p className="text-xs text-muted-foreground text-center">
                  {t('productDetail.quickQuote.privacy')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto">
              <TabsTrigger value="overview">{t('productDetail.tabs.overview')}</TabsTrigger>
              <TabsTrigger value="specifications">{t('productDetail.tabs.specifications')}</TabsTrigger>
              <TabsTrigger value="quality">{t('productDetail.tabs.quality')}</TabsTrigger>
              <TabsTrigger value="applications">{t('productDetail.tabs.applications')}</TabsTrigger>
              <TabsTrigger value="processing">{t('productDetail.tabs.processing')}</TabsTrigger>
              <TabsTrigger value="packaging">{t('productDetail.tabs.packaging')}</TabsTrigger>
              <TabsTrigger value="faq">{t('productDetail.tabs.faq')}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('productDetail.overview.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle2 className={`h-5 w-5 text-success ${isRTL ? 'ml-3' : 'mr-3'} mt-0.5 flex-shrink-0`} />
                      <div>
                        <p className="font-medium">{t('productDetail.overview.consistentQuality')}</p>
                        <p className="text-sm text-muted-foreground">{t('productDetail.overview.consistentQualityDesc')}</p>
                      </div>
                    </div>
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle2 className={`h-5 w-5 text-success ${isRTL ? 'ml-3' : 'mr-3'} mt-0.5 flex-shrink-0`} />
                      <div>
                        <p className="font-medium">{t('productDetail.overview.technicalSupport')}</p>
                        <p className="text-sm text-muted-foreground">{t('productDetail.overview.technicalSupportDesc')}</p>
                      </div>
                    </div>
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle2 className={`h-5 w-5 text-success ${isRTL ? 'ml-3' : 'mr-3'} mt-0.5 flex-shrink-0`} />
                      <div>
                        <p className="font-medium">{t('productDetail.overview.globalShipping')}</p>
                        <p className="text-sm text-muted-foreground">{t('productDetail.overview.globalShippingDesc')}</p>
                      </div>
                    </div>
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle2 className={`h-5 w-5 text-success ${isRTL ? 'ml-3' : 'mr-3'} mt-0.5 flex-shrink-0`} />
                      <div>
                        <p className="font-medium">{t('productDetail.overview.certifiedSupply')}</p>
                        <p className="text-sm text-muted-foreground">{t('productDetail.overview.certifiedSupplyDesc')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Downloads Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {t('productDetail.documentation.title')}
                  </CardTitle>
                  <CardDescription>{t('productDetail.documentation.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={product.documents.tds} download>
                        <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <div className="font-medium">{t('productDetail.documentation.tds')}</div>
                          <div className="text-xs text-muted-foreground">{t('productDetail.documentation.tdsDesc')}</div>
                        </div>
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={product.documents.sds} download>
                        <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <div className="font-medium">{t('productDetail.documentation.sds')}</div>
                          <div className="text-xs text-muted-foreground">{t('productDetail.documentation.sdsDesc')}</div>
                        </div>
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={product.documents.certificate} download>
                        <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        <div className={isRTL ? 'text-right' : 'text-left'}>
                          <div className="font-medium">{t('productDetail.documentation.certificate')}</div>
                          <div className="text-xs text-muted-foreground">{t('productDetail.documentation.certificateDesc')}</div>
                        </div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('productDetail.specifications.title')}</CardTitle>
                  <CardDescription>{t('productDetail.specifications.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">{t('productDetail.specifications.property')}</TableHead>
                          <TableHead className="font-semibold">{t('productDetail.specifications.value')}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">{t('productDetail.specifications.mfi')}</TableCell>
                          <TableCell>{product.specifications.mfi}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">{t('productDetail.specifications.density')}</TableCell>
                          <TableCell>{product.specifications.density}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">{t('productDetail.specifications.tensileStrength')}</TableCell>
                          <TableCell>{product.specifications.tensileStrength}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">{t('productDetail.specifications.elongation')}</TableCell>
                          <TableCell>{product.specifications.elongation}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">{t('productDetail.specifications.meltingPoint')}</TableCell>
                          <TableCell>{product.specifications.meltingPoint}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      {t('productDetail.specifications.testMethods')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quality" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('productDetail.quality.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">{t('productDetail.quality.certifications')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map(cert => (
                        <Badge key={cert} variant="secondary">{cert}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">{t('productDetail.quality.qualityAssurance')}</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 text-success flex-shrink-0`} />
                        <span>{t('productDetail.quality.batchTested')}</span>
                      </li>
                      <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 text-success flex-shrink-0`} />
                        <span>{t('productDetail.quality.materialPassports')}</span>
                      </li>
                      <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 text-success flex-shrink-0`} />
                        <span>{t('productDetail.quality.thirdParty')}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('productDetail.applications.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.applications.map(app => (
                      <div key={app} className={`flex items-center p-4 bg-muted/50 rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Package className={`h-5 w-5 text-primary ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
                        <span className="font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="processing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('productDetail.processing.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.processing).map(([key, value]) => (
                      <div key={key} className={`flex justify-between py-2 border-b border-border last:border-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-muted-foreground capitalize">{t(`productDetail.processing.${key}`)}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      {t('productDetail.processing.note')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="packaging" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('productDetail.packaging.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">{t('productDetail.packaging.standardOptions')}</h4>
                    <div className="space-y-3">
                      {Object.entries(product.packaging).map(([key, value]) => (
                        <div key={key} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Truck className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 text-primary flex-shrink-0`} />
                          <div>
                            <span className="font-medium capitalize">{t(`productDetail.packaging.${key}`)}: </span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">{t('productDetail.packaging.shipping')}</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 text-success flex-shrink-0`} />
                        <span>{t('productDetail.packaging.dubaiPorts')}</span>
                      </li>
                      <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 text-success flex-shrink-0`} />
                        <span>{t('productDetail.packaging.fclLcl')}</span>
                      </li>
                      <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle2 className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5 text-success flex-shrink-0`} />
                        <span>{t('productDetail.packaging.leadTime')}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('productDetail.faq.title')}</CardTitle>
                  <CardDescription>{t('productDetail.faq.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {product.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className={isRTL ? 'text-right' : 'text-left'}>
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>{t('productDetail.faq.stillQuestions')}</strong> {' '}
                      <Link to="/contact" className="text-primary hover:underline">{t('productDetail.faq.contactUs')}</Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">{t('productDetail.relatedProducts.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    <Leaf className={`h-3 w-3 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {t('productDetail.relatedProducts.recycled')}
                  </Badge>
                  <CardTitle className="text-lg">Related Product {i}</CardTitle>
                  <CardDescription>Product grade code</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/products/related-${i}`}>{t('productDetail.relatedProducts.viewDetails')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}