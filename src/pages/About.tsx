import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateOrganizationSchema } from '@/lib/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Target, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Technical Excellence',
      description: 'We prioritize material science and processing expertise over sales pitches.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Dubai hub position enables us to bridge MENA, European, Asian, and African markets efficiently.'
    },
    {
      icon: Users,
      title: 'Partnership Mindset',
      description: 'We work as an extension of your team, not just a vendor sending invoices.'
    },
    {
      icon: Award,
      title: 'Recycled-First',
      description: 'We believe recycled polymers are the future when done right—with quality and transparency.'
    }
  ];

  const organizationSchema = generateOrganizationSchema({
    name: 'PolySource Global',
    url: 'https://polysource.global',
    logo: 'https://polysource.global/logo.png',
    description: 'Dubai-based polymer supplier founded by engineers. Specializing in recycled and virgin polymers with technical expertise and global reach.',
    address: {
      addressLocality: 'Dubai',
      addressCountry: 'UAE'
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Founded in 2019 in Dubai by materials engineers. Serving 18+ countries with 12,500+ tonnes of recycled and virgin polymers annually. Technical partnership over transactional trading."
        keywords="about polysource, dubai polymer supplier, materials engineering, polymer trading"
        structuredData={organizationSchema}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built by Engineers Who Got Tired of Unreliable Polymer Traders
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We started PolySource because we experienced the same frustrations you have: inconsistent recycled materials, slow WhatsApp-based RFQs, and traders who disappear when problems arise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Founded in 2019 in Dubai, PolySource Global emerged from a simple observation: the polymer trading industry was stuck in the past. While manufacturing technology evolved, supply chains remained opaque, quality was inconsistent, and communication happened through scattered WhatsApp threads.
                </p>
                <p>
                  Our founding team brought together materials engineering expertise, supply chain experience, and a commitment to doing things differently. We built relationships with certified recyclers and processors who shared our vision for traceable, consistent recycled materials.
                </p>
                <p>
                  Today, we serve manufacturers across 18+ countries, delivering over 12,500 tonnes annually. But we've stayed true to our core principle: technical partnership over transactional trading.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">What Drives Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These aren't corporate buzzwords. They're the principles we use to make decisions every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{value.title}</CardTitle>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Advantage */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Dubai Advantage</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Port Hub</h3>
                    <p className="text-sm text-muted-foreground">
                      Strategic access to Jebel Ali Port, one of the world's largest container terminals
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Time Zone Bridge</h3>
                    <p className="text-sm text-muted-foreground">
                      Operating hours overlap with European mornings and Asian afternoons
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Trade Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">
                      Free zone benefits and established trade routes to 4 continents
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Materials engineers, supply chain specialists, and industry veterans who understand both the technical and logistical challenges you face.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">
                  Our team profiles and leadership bios will be added here. For now, know that we're a group of technical professionals who've worked across polymer manufacturing, recycling operations, and international trade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
