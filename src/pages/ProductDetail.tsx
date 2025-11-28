import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { id } = useParams();
  const { addProduct } = useRFQ();
  const { toast } = useToast();
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
      title: "Added to RFQ",
      description: `${product.name} has been added to your quote request.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="bg-muted/50 py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.recycled && (
                  <Badge variant="outline" className="border-success text-success">
                    <Leaf className="h-3 w-3 mr-1" />
                    {product.recycledContent}
                  </Badge>
                )}
                {product.inStock && (
                  <Badge variant="secondary">In Stock</Badge>
                )}
                {product.certifications.includes('FDA Contact Compliant') && (
                  <Badge variant="outline">
                    <Shield className="h-3 w-3 mr-1" />
                    FDA Contact Compliant
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">{product.name}</h1>
              <p className="text-lg text-muted-foreground font-mono mb-4">{product.grade}</p>
              <p className="text-muted-foreground max-w-3xl">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={handleAddToRFQ} size="lg">
                  Request Quote
                </Button>
                <Button variant="outline" size="lg">
                  Request Sample
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download TDS
                </Button>
              </div>
            </div>

            {/* Quick RFQ Panel */}
            <Card className="lg:w-96 flex-shrink-0">
              <CardHeader>
                <CardTitle>Quick Quote Request</CardTitle>
                <CardDescription>Get a response within 48 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company *</Label>
                  <Input id="company" placeholder="ABC Manufacturing" />
                </div>
                <div>
                  <Label htmlFor="quantity">Approximate Quantity (MT)</Label>
                  <Input 
                    id="quantity" 
                    placeholder="e.g., 20" 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Additional Requirements</Label>
                  <Textarea id="notes" placeholder="Color preferences, certifications needed, delivery timeline..." rows={3} />
                </div>
                <Button className="w-full">Submit Request</Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your data is secure and will only be used to process your quote request.
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
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="quality">Quality & Compliance</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="packaging">Packaging & Logistics</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Consistent Quality</p>
                        <p className="text-sm text-muted-foreground">Batch-to-batch consistency with full traceability</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Technical Support</p>
                        <p className="text-sm text-muted-foreground">Processing guidance and troubleshooting assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Global Shipping</p>
                        <p className="text-sm text-muted-foreground">Reliable delivery from our Dubai hub worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Certified Supply Chain</p>
                        <p className="text-sm text-muted-foreground">ISO-certified partners and traceable sourcing</p>
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
                    Technical Documentation
                  </CardTitle>
                  <CardDescription>Download product datasheets, safety information, and certificates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={product.documents.tds} download>
                        <Download className="h-4 w-4 mr-2" />
                        <div className="text-left">
                          <div className="font-medium">TDS</div>
                          <div className="text-xs text-muted-foreground">Technical Datasheet</div>
                        </div>
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={product.documents.sds} download>
                        <Download className="h-4 w-4 mr-2" />
                        <div className="text-left">
                          <div className="font-medium">SDS</div>
                          <div className="text-xs text-muted-foreground">Safety Datasheet</div>
                        </div>
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={product.documents.certificate} download>
                        <Download className="h-4 w-4 mr-2" />
                        <div className="text-left">
                          <div className="font-medium">Certificate</div>
                          <div className="text-xs text-muted-foreground">Compliance Cert.</div>
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
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>Key material properties and test conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-semibold">Property</TableHead>
                          <TableHead className="font-semibold">Value</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Melt Flow Index (MFI)</TableCell>
                          <TableCell>{product.specifications.mfi}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Density</TableCell>
                          <TableCell>{product.specifications.density}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tensile Strength</TableCell>
                          <TableCell>{product.specifications.tensileStrength}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Elongation at Break</TableCell>
                          <TableCell>{product.specifications.elongation}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Melting Point</TableCell>
                          <TableCell>{product.specifications.meltingPoint}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Test Methods:</strong> All specifications determined according to ASTM and ISO standards. Contact our technical team for complete test reports and methodology details.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quality" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quality & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map(cert => (
                        <Badge key={cert} variant="secondary">{cert}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Quality Assurance</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                        <span>Every batch tested and certified with full documentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                        <span>Material passports available with complete traceability</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                        <span>Third-party laboratory testing reports on request</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.applications.map(app => (
                      <div key={app} className="flex items-center p-4 bg-muted/50 rounded-lg">
                        <Package className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
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
                  <CardTitle>Processing Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.processing).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Processing parameters may vary based on your specific equipment and product requirements. Contact our technical team for optimization support.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="packaging" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Packaging & Logistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Standard Packaging Options</h4>
                    <div className="space-y-3">
                      {Object.entries(product.packaging).map(([key, value]) => (
                        <div key={key} className="flex items-start">
                          <Truck className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          <div>
                            <span className="font-medium capitalize">{key}: </span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Shipping</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                        <span>Ships from Dubai ports to worldwide destinations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                        <span>FCL and LCL options available</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-success flex-shrink-0" />
                        <span>Typical lead time: 2-4 weeks from order confirmation</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about this product</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {product.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
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
                      <strong>Still have questions?</strong> Our technical team is here to help. <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for personalized assistance with your specific application.
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
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    <Leaf className="h-3 w-3 mr-1" />
                    Recycled
                  </Badge>
                  <CardTitle className="text-lg">Related Product {i}</CardTitle>
                  <CardDescription>Product grade code</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/products/related-${i}`}>View Details</Link>
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
