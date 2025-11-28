import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { fetchBlogPosts, type BlogPost } from '@/lib/mockData';

export default function Blog() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://polysource.global' },
    { name: 'Blog', url: 'https://polysource.global/blog' }
  ]);

  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="h-full">
          <CardHeader>
            <Skeleton className="h-6 w-24 mb-3" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-4 w-28 mt-4" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const ErrorState = () => (
    <div className="text-center py-12">
      <AlertCircle className="h-12 w-12 mx-auto text-destructive mb-4" />
      <h3 className="text-lg font-semibold mb-2">Error Loading Posts</h3>
      <p className="text-muted-foreground">Please try again later</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Polymer Industry Blog - Technical Guides & Market Insights"
        description="Expert technical guides on polymer processing, MFI optimization, recycled vs virgin materials comparison, and industry regulations. Written by materials engineers for manufacturers."
        keywords="polymer processing guide, MFI melt flow index, recycled polymer processing, HDPE processing, injection molding tips, polymer industry news, plastic materials blog"
        structuredData={breadcrumbSchema}
      />
      {/* Hero */}
      <section className="bg-muted/50 pt-32 pb-12 border-b border-border">
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
          {isLoading && <LoadingSkeleton />}
          {isError && <ErrorState />}
          {posts && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: BlogPost, index: number) => (
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
                          {post.title_en}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt_en}
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
          )}
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
