import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateArticleSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function BlogArticle() {
  const { id } = useParams();

  // Mock article data
  const article = {
    title: 'Understanding MFI (Melt Flow Index) and Its Impact on Processing',
    category: 'Technical Guide',
    date: '2024-02-15',
    readTime: '8 min',
    author: 'Engineering Team',
    content: `
      <h2>What is Melt Flow Index (MFI)?</h2>
      <p>Melt Flow Index (MFI), also known as Melt Flow Rate (MFR), is a measure of how easily a thermoplastic polymer flows when melted. It's expressed as the mass of polymer (in grams) that flows through a standard die in 10 minutes under specific temperature and load conditions.</p>
      
      <h2>Why MFI Matters for Your Process</h2>
      <p>MFI directly impacts your processing parameters and final part quality:</p>
      <ul>
        <li><strong>Injection Molding:</strong> Lower MFI materials (thicker when melted) require higher injection pressures and may need adjusted cycle times.</li>
        <li><strong>Extrusion:</strong> Higher MFI grades flow more easily through dies but may have lower mechanical strength.</li>
        <li><strong>Blow Molding:</strong> MFI affects parison sag and bottle wall thickness distribution.</li>
      </ul>

      <h2>Selecting the Right MFI for Your Application</h2>
      <p>General guidelines for MFI selection:</p>
      <ul>
        <li><strong>0.2-2 g/10min:</strong> High-strength applications, thick-walled parts, blow molding</li>
        <li><strong>2-8 g/10min:</strong> General injection molding, most industrial applications</li>
        <li><strong>8-25 g/10min:</strong> Thin-walled parts, fast cycle times, complex geometries</li>
        <li><strong>25+ g/10min:</strong> Film extrusion, fiber production, very thin sections</li>
      </ul>

      <h2>Practical Example: Switching from Virgin to Recycled HDPE</h2>
      <p>When substituting virgin HDPE with recycled grades, you may notice MFI variations due to chain degradation during previous processing. Here's how to compensate:</p>
      <ul>
        <li>If recycled grade has higher MFI: Reduce barrel temperature by 10-15°C, increase injection speed</li>
        <li>If recycled grade has lower MFI: Increase temperature, reduce injection speed, verify pressure capacity</li>
      </ul>

      <h2>Common Misconceptions</h2>
      <p><strong>Myth:</strong> "Higher MFI always means lower quality."<br>
      <strong>Reality:</strong> MFI is application-dependent. Film grades naturally have high MFI by design.</p>
      
      <p><strong>Myth:</strong> "MFI is the only flow property that matters."<br>
      <strong>Reality:</strong> Polydispersity index (PDI) and shear sensitivity also critically affect processing.</p>

      <h2>How We Specify MFI</h2>
      <p>At PolySource, every grade specification includes:</p>
      <ul>
        <li>MFI value range (not just a single number)</li>
        <li>Test conditions (temperature and load)</li>
        <li>Batch-to-batch consistency data</li>
        <li>Processing parameter recommendations</li>
      </ul>

      <h2>Need Processing Support?</h2>
      <p>If you're experiencing flow-related issues or need help optimizing parameters for recycled grades, our technical team can provide processing guidelines specific to your equipment and application.</p>
    `
  };

  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: 'A technical deep-dive into how MFI affects injection molding and extrusion parameters, with practical guidelines for matching material grades to your equipment.',
    author: article.author,
    datePublished: article.date,
    publisher: {
      name: 'PolySource Global',
      url: 'https://polysource.global',
      logo: 'https://polysource.global/logo.png',
      description: 'Dubai-based polymer supplier'
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={article.title}
        description="A technical deep-dive into how MFI affects injection molding and extrusion parameters, with practical guidelines for matching material grades to your equipment."
        keywords="MFI, melt flow index, polymer processing, injection molding, extrusion"
        type="article"
        article={{
          publishedTime: article.date,
          author: article.author,
          section: article.category,
          tags: ['MFI', 'polymer processing', 'technical guide']
        }}
        structuredData={articleSchema}
      />
      {/* Back Button */}
      <section className="bg-muted/50 py-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" size="sm">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">{article.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(article.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime} read
              </div>
              <div>By {article.author}</div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-muted-foreground prose-ul:mb-6
                prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-2">Material Science</Badge>
                  <h3 className="font-semibold mb-2">
                    <Link to="/blog/2" className="hover:text-primary transition-colors">
                      Recycled vs Virgin HDPE: When to Use Each
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Breaking down the real performance differences between recycled and virgin HDPE grades...
                  </p>
                  <div className="text-xs text-muted-foreground">6 min read</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-2">Processing Tips</Badge>
                  <h3 className="font-semibold mb-2">
                    <Link to="/blog/4" className="hover:text-primary transition-colors">
                      Processing Troubleshooting: Common Issues with Recycled PE
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Practical solutions for warping, surface defects, and inconsistent cycle times...
                  </p>
                  <div className="text-xs text-muted-foreground">7 min read</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto text-center">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Have Technical Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our engineering team can provide processing guidance and material recommendations for your specific application.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Technical Support</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
