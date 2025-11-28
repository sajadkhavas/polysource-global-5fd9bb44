import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, Package, Truck, FileText, CreditCard, Leaf, Shield } from 'lucide-react';

const faqCategories = [
  {
    title: 'Products & Materials',
    icon: Package,
    faqs: [
      {
        question: 'What types of polymers do you supply?',
        answer: 'We supply a comprehensive range including recycled polymers (rPE, rPP, rPET), virgin polymers (LDPE, LLDPE, HDPE, PP, PS), compounds and masterbatches, and finished plastic parts. Our portfolio covers film grades, injection molding grades, blow molding grades, and extrusion grades.'
      },
      {
        question: 'What is the difference between recycled and virgin polymers?',
        answer: 'Virgin polymers are produced directly from petrochemical feedstocks with consistent, predictable properties. Recycled polymers are processed from post-consumer or post-industrial waste, offering environmental benefits while meeting technical specifications. Our recycled grades are engineered to match virgin performance in most applications.'
      },
      {
        question: 'Can I get samples before placing a bulk order?',
        answer: 'Yes, we provide samples for evaluation purposes. Sample quantities typically range from 25-50kg depending on the material. Contact our sales team with your requirements and application details to request samples.'
      },
      {
        question: 'Do you provide technical data sheets (TDS) for all products?',
        answer: 'Yes, every product comes with a comprehensive Technical Data Sheet including properties like MFI, density, tensile strength, and processing parameters. Safety Data Sheets (SDS) and certificates of compliance are also available for all materials.'
      }
    ]
  },
  {
    title: 'Ordering & Pricing',
    icon: CreditCard,
    faqs: [
      {
        question: 'What is the minimum order quantity (MOQ)?',
        answer: 'Our standard MOQ is one full container load (FCL), which is typically 20-26 metric tonnes for a 40ft container. However, we can accommodate smaller orders based on stock availability and can consolidate shipments for smaller quantities.'
      },
      {
        question: 'How do I request a quote?',
        answer: 'You can request a quote through our online RFQ form, by emailing hello@polysource.global, or by contacting our sales team directly. Provide product specifications, quantity needed, delivery location, and timeline for the most accurate quote.'
      },
      {
        question: 'What are your payment terms?',
        answer: 'We offer flexible payment terms including Letter of Credit (L/C), Telegraphic Transfer (T/T), and open account terms for established customers. Payment terms are discussed during the quotation process based on order value and customer relationship.'
      },
      {
        question: 'How quickly will I receive a quotation?',
        answer: 'We aim to provide detailed quotations within 48 hours of receiving your RFQ. Complex inquiries or custom specifications may take slightly longer. Urgent requests can be expedited—please indicate timeline requirements in your inquiry.'
      }
    ]
  },
  {
    title: 'Shipping & Logistics',
    icon: Truck,
    faqs: [
      {
        question: 'Which countries do you ship to?',
        answer: 'We ship globally from our Dubai hub to over 18 countries across MENA, Europe, Asia, and Africa. Our strategic location provides efficient access to major markets. Contact us to confirm shipping to your specific destination.'
      },
      {
        question: 'What are the typical lead times?',
        answer: 'Lead times depend on stock availability and destination. In-stock items typically ship within 1-2 weeks. Production orders may require 4-6 weeks. Transit times vary by destination: MENA region (1-2 weeks), Europe (2-3 weeks), Asia (2-4 weeks), Africa (2-4 weeks).'
      },
      {
        question: 'What shipping terms (Incoterms) do you offer?',
        answer: 'We offer flexible Incoterms including FOB Dubai, CIF, CFR, and DAP. The most suitable term depends on your logistics preferences and capabilities. Our logistics team can advise on the best option for your situation.'
      },
      {
        question: 'How is the material packaged for shipping?',
        answer: 'Standard packaging is 25kg bags on pallets, shrink-wrapped for protection. Big bags (500-1000kg) and bulk container options are available for larger volumes. Packaging can be customized based on your handling requirements and destination regulations.'
      }
    ]
  },
  {
    title: 'Quality & Compliance',
    icon: Shield,
    faqs: [
      {
        question: 'What quality certifications do you hold?',
        answer: 'Our supply chain partners maintain ISO 9001:2015 (Quality Management) and ISO 14001:2015 (Environmental Management) certifications. Materials are available with FDA contact compliance, REACH compliance, and RoHS compliance as required.'
      },
      {
        question: 'How do you ensure batch-to-batch consistency?',
        answer: 'Every batch undergoes rigorous quality testing including MFI verification, density measurement, and mechanical property testing. We work with certified recyclers and processors who maintain strict quality control protocols. Each shipment includes a Certificate of Analysis (CoA).'
      },
      {
        question: 'Can you provide certificates of compliance for specific regulations?',
        answer: 'Yes, we provide compliance certificates including FDA food contact certification, REACH declarations, RoHS certificates, and other regulatory documentation as required by your application and market. Specify your compliance needs when requesting a quote.'
      },
      {
        question: 'What happens if material does not meet specifications?',
        answer: 'We stand behind our products. If material does not meet agreed specifications, we work with you to resolve the issue promptly through replacement, credit, or return. All claims are processed within our quality assurance protocol with full documentation.'
      }
    ]
  },
  {
    title: 'Sustainability',
    icon: Leaf,
    faqs: [
      {
        question: 'What percentage of recycled content is available?',
        answer: 'Our recycled grades offer up to 100% post-consumer recycled (PCR) content. We also offer blended grades with varying recycled percentages (30%, 50%, 70%) to match your sustainability targets and technical requirements.'
      },
      {
        question: 'How do you verify recycled content claims?',
        answer: 'We work exclusively with certified recyclers who provide full traceability documentation. Material passports accompany each shipment detailing the source, processing method, and certification status. We never make vague sustainability claims.'
      },
      {
        question: 'Can recycled polymers meet food-contact standards?',
        answer: 'Yes, certain recycled grades are FDA food-contact compliant. These materials are specifically processed and tested to meet food safety requirements. Specify food-contact needs in your inquiry and we will recommend suitable grades with appropriate certifications.'
      }
    ]
  },
  {
    title: 'Technical Support',
    icon: FileText,
    faqs: [
      {
        question: 'Do you provide technical support for processing?',
        answer: 'Yes, our technical team provides comprehensive support including processing parameter recommendations, troubleshooting assistance, and application development guidance. We can also arrange on-site visits for major projects or persistent technical challenges.'
      },
      {
        question: 'Can you help with material selection for my application?',
        answer: 'Absolutely. Share your application requirements including mechanical properties, processing method, end-use environment, and regulatory needs. Our technical team will recommend suitable materials and can provide samples for evaluation.'
      },
      {
        question: 'What information should I provide when requesting technical assistance?',
        answer: 'For effective technical support, provide: current material grade being used (if any), processing method and equipment, application description, performance issues or requirements, and any regulatory compliance needs. The more detail you provide, the better we can assist.'
      }
    ]
  }
];

// Flatten FAQs for schema
const allFaqs = faqCategories.flatMap(cat => cat.faqs);

export default function FAQ() {
  const faqSchema = generateFAQSchema(allFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://polysource.global' },
    { name: 'FAQ', url: 'https://polysource.global/faq' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Frequently Asked Questions"
        description="Get answers to common questions about recycled polymers, product specifications, shipping, minimum order quantities, and quality certifications. Expert guidance for polymer sourcing."
        keywords="polymer FAQ, recycled polymer questions, plastic supplier FAQ, polymer specifications, minimum order quantity, polymer shipping"
        structuredData={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <HelpCircle className="h-12 w-12 mb-4 opacity-80" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about our products, ordering process, shipping, and technical support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is ready to help with your specific requirements. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:hello@polysource.global">Email Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
