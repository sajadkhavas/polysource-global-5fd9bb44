import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, CheckCircle2, Target, FileText, Users, Globe } from 'lucide-react';

export default function Sustainability() {
  const principles = [
    {
      icon: Target,
      title: 'Quality Over Claims',
      description: 'We don\'t call something "sustainable" unless it actually performs in production. Recycled materials must meet the same standards as virgin grades.'
    },
    {
      icon: FileText,
      title: 'Traceable Sourcing',
      description: 'Every batch comes with origin documentation. You know where your material came from and how it was processed.'
    },
    {
      icon: Users,
      title: 'Certified Partners',
      description: 'We work only with recyclers and processors who maintain ISO 14001 certification and transparent operations.'
    },
    {
      icon: Globe,
      title: 'Regional Impact',
      description: 'Supporting MENA-based recycling infrastructure development and diverting post-consumer waste from landfills.'
    }
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'FDA Contact Compliant Materials',
    'REACH Compliance',
    'RoHS Compliance'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sustainability"
        description="Recycled-first approach with traceable sourcing and certified partners. 6,200+ tonnes of recycled polymers supplied with full material traceability and ISO 14001 certified supply chain."
        keywords="sustainable polymers, recycled polymers, circular economy, polymer traceability, ISO 14001"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-success/20 to-success/5 py-20 border-b border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-4 border-success text-success">
              <Leaf className="h-3 w-3 mr-1" />
              Our Approach
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Recycled-First. But Only When It Works.
            </h1>
            <p className="text-xl text-muted-foreground">
              We believe recycled polymers are the future—but not through greenwashing or compromising quality. Our approach: traceable sourcing, consistent testing, and honest conversations about what works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Commitment</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Prioritize Recycled Content</p>
                    <p>We actively push recycled materials first, offering up to 50% PCR content across suitable applications. But we're transparent when virgin material is the better technical choice.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Full Material Traceability</p>
                    <p>Every shipment includes material passports detailing sourcing origin, processing methods, and certification status. No vague "recycled content" claims.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Consistent Quality Standards</p>
                    <p>Batch-to-batch consistency through rigorous testing protocols. Recycled grades meet the same specifications as virgin equivalents.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Support Regional Recycling</p>
                    <p>We partner with MENA-based recyclers to build local circular economy infrastructure, reducing transportation emissions and supporting regional development.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Guiding Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we make decisions about materials, partners, and processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-success/10 rounded-lg mr-4">
                        <principle.icon className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{principle.title}</CardTitle>
                        <CardDescription>{principle.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Certifications & Compliance</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Our Standards</CardTitle>
                  <CardDescription>
                    Certifications maintained across our supply chain and available for all compliant materials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map(cert => (
                      <Badge key={cert} variant="secondary" className="text-sm">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-success/5 border-y border-success/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">2024 Impact</h2>
            <p className="text-lg text-muted-foreground">
              Transparent reporting on our recycled material supply
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-foreground mb-2">6,200</p>
                <p className="text-sm text-muted-foreground">Tonnes of Recycled Polymers Supplied</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-foreground mb-2">45%</p>
                <p className="text-sm text-muted-foreground">Average PCR Content in Recycled Grades</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-foreground mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Material Batches with Full Traceability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>A Note on Transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  We don't claim to be carbon-neutral or perfectly circular—no B2B polymer supplier can honestly make that claim today. What we do claim:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>We prioritize recycled materials whenever technical requirements allow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>We provide complete traceability and never make vague sustainability claims</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>We're honest about when virgin material is the better choice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>We continuously work to improve our processes and expand recycled offerings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
