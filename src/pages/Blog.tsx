import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import { fetchBlogPosts, type BlogPost } from '@/lib/mockData';
import { useTranslation } from 'react-i18next';
import { useDirection } from '@/hooks/useDirection';
import { cn } from '@/lib/utils';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const { isRTL } = useDirection();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const locale: 'en' | 'ar' = resolvedLanguage.startsWith('ar') ? 'ar' : 'en';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  const breadcrumbItems = [
    { labelKey: "breadcrumb.home", to: "/" },
    { labelKey: "breadcrumb.blog", to: "/blog" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.blog'), url: 'https://polysource.global/blog' }
  ]);

  const getTitle = (post: BlogPost) => (locale === 'ar' ? post.title_ar : post.title_en);
  const getExcerpt = (post: BlogPost) => (locale === 'ar' ? post.excerpt_ar : post.excerpt_en);
  const getCategory = (post: BlogPost) => (locale === 'ar' ? post.category_ar : post.category);
  const getReadTime = (post: BlogPost) => (locale === 'ar' ? post.readTime_ar : post.readTime);

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
      <h3 className="text-lg font-semibold mb-2">{t('blogPage.errors.loadTitle')}</h3>
      <p className="text-muted-foreground">{t('blogPage.errors.loadBody')}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('blogPage.seo.title')}
        description={t('blogPage.seo.description')}
        keywords={t('blogPage.seo.keywords')}
        structuredData={breadcrumbSchema}
      />
      {/* Hero */}
      <section className="bg-muted/50 pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={isRTL ? 'text-right' : ''}
          >
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              {t('blogPage.hero.title')}
            </h1>
            <p className={cn("text-lg text-muted-foreground max-w-3xl", isRTL && "ml-auto")}>
              {t('blogPage.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn("flex flex-wrap gap-2", isRTL && "flex-row-reverse justify-end")}>
            <Badge variant="secondary">{t('blogPage.categories.all')}</Badge>
            <Badge variant="outline">{t('blogPage.categories.technical')}</Badge>
            <Badge variant="outline">{t('blogPage.categories.materialScience')}</Badge>
            <Badge variant="outline">{t('blogPage.categories.regulations')}</Badge>
            <Badge variant="outline">{t('blogPage.categories.processing')}</Badge>
            <Badge variant="outline">{t('blogPage.categories.insights')}</Badge>
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
                    <Card className={cn("h-full hover:shadow-lg transition-shadow group", isRTL && "text-right")}>
                      <CardHeader>
                        <div className={cn("flex items-center gap-2 mb-3", isRTL && "flex-row-reverse justify-end")}>
                          <Badge variant="secondary">{getCategory(post)}</Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          {getTitle(post)}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {getExcerpt(post)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className={cn("flex items-center justify-between text-xs text-muted-foreground", isRTL && "flex-row-reverse")}>
                          <div className={cn("flex items-center", isRTL && "flex-row-reverse")}>
                            <Calendar className={cn("h-3 w-3", isRTL ? "ml-1" : "mr-1")} />
                            {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                          <div className={cn("flex items-center", isRTL && "flex-row-reverse")}>
                            <Clock className={cn("h-3 w-3", isRTL ? "ml-1" : "mr-1")} />
                            {getReadTime(post)}
                          </div>
                        </div>
                        <div className={cn("mt-4 flex items-center text-sm text-primary font-medium", isRTL && "flex-row-reverse justify-end")}>
                          {t('blogPage.readArticle')}
                          <ArrowIcon className={cn("h-4 w-4 transition-transform", isRTL ? "mr-2 group-hover:-translate-x-1" : "ml-2 group-hover:translate-x-1")} />
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
                <CardTitle>{t('blogPage.newsletter.title')}</CardTitle>
                <CardDescription>
                  {t('blogPage.newsletter.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className={cn("flex gap-2", isRTL && "flex-row-reverse")}>
                  <input
                    type="email"
                    placeholder={t('blogPage.newsletter.placeholder')}
                    className={cn("flex-1 px-4 py-2 border border-border rounded-lg bg-background", isRTL && "text-right")}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    {t('blogPage.newsletter.cta')}
                  </button>
                </form>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  {t('blogPage.newsletter.note')}
                </p>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
