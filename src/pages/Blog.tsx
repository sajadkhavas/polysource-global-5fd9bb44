import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateArticleSchema } from '@/lib/structured-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding MFI (Melt Flow Index) and Its Impact on Processing',
    excerpt: 'A technical deep-dive into how MFI affects injection molding and extrusion parameters, with practical guidelines for matching material grades to your equipment.',
    category: 'Technical Guide',
    date: '2024-02-15',
    readTime: '8 min'
  },
  {
    id: '2',
    title: 'Recycled vs Virgin HDPE: When to Use Each',
    excerpt: 'Breaking down the real performance differences between recycled and virgin HDPE grades, backed by lab data and production case studies.',
    category: 'Material Science',
    date: '2024-02-10',
    readTime: '6 min'
  },
  {
    id: '3',
    title: 'New EU Recycled Content Requirements: What Manufacturers Need to Know',
    excerpt: 'Analysis of upcoming regulations requiring minimum recycled content in plastic products, and how to prepare your supply chain.',
    category: 'Regulations',
    date: '2024-02-05',
    readTime: '10 min'
  },
  {
    id: '4',
    title: 'Processing Troubleshooting: Common Issues with Recycled PE',
    excerpt: 'Practical solutions for warping, surface defects, and inconsistent cycle times when working with recycled polyethylene grades.',
    category: 'Processing Tips',
    date: '2024-01-28',
    readTime: '7 min'
  },
  {
    id: '5',
    title: 'Dubai as a Polymer Trading Hub: Infrastructure and Logistics Advantages',
    excerpt: 'Why Dubai-based suppliers can offer better lead times and reliability for MENA, Europe, and Asian markets.',
    category: 'Industry Insights',
    date: '2024-01-20',
    readTime: '5 min'
  },
  {
    id: '6',
    title: 'Material Traceability: What You Should Expect from Your Supplier',
    excerpt: 'The difference between marketing claims and actual traceability data. What documentation should you demand?',
    category: 'Quality Standards',
    date: '2024-01-15',
    readTime: '6 min'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Technical Insights & Industry Updates"
        description="Practical guides, material science deep-dives, and industry analysis on polymer processing, recycled materials, and sustainability regulations."
        keywords="polymer processing, material science, recycled polymers, technical guides, industry insights"
      />
      {/* Hero */}
      <section className="bg-muted/50 py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">Technical Insights & Industry Updates</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Practical guides, material science deep-dives, and industry analysis. Written by engineers, for engineers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">All Posts</Badge>
            <Badge variant="outline">Technical Guides</Badge>
            <Badge variant="outline">Material Science</Badge>
            <Badge variant="outline">Regulations</Badge>
            <Badge variant="outline">Processing Tips</Badge>
            <Badge variant="outline">Industry Insights</Badge>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-sm text-primary font-medium">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>
                Get monthly insights on polymer processing, material science, and industry regulations delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-center text-muted-foreground mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
