import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { findNavigationItem, getBreadcrumbs } from '@/data/navigation-complete';

export default function CategoryPage() {
  const { i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const isArabic = resolvedLanguage.startsWith('ar');
  const { pathname } = useLocation();

  const currentItem = findNavigationItem(pathname);
  const trail = getBreadcrumbs(pathname);

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', to: '/' },
    ...trail.map((item) => ({
      label: isArabic ? item.label.ar : item.label.en,
      to: item.href,
    })),
  ];

  if (!currentItem) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <SEO
          title={isArabic ? 'التصنيف غير موجود' : 'Category Not Found'}
          description={isArabic ? 'تعذر العثور على هذا التصنيف.' : 'Unable to find this category.'}
          noIndex
        />
        <h1 className="text-3xl font-bold mb-4">{isArabic ? 'التصنيف غير موجود' : 'Category Not Found'}</h1>
      </div>
    );
  }

  const title = isArabic ? currentItem.label.ar : currentItem.label.en;
  const description = currentItem.description
    ? isArabic
      ? currentItem.description.ar
      : currentItem.description.en
    : isArabic
      ? 'استعرض الفئات الفرعية والمنتجات ذات الصلة.'
      : 'Explore related subcategories and products.';

  return (
    <div className="min-h-screen bg-background">
      <SEO title={title} description={description} />

      <section className="bg-muted/50 pt-32 pb-10 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-bold mb-3">{title}</h1>
          <p className="text-muted-foreground max-w-3xl">{description}</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {currentItem.children && currentItem.children.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItem.children.map((child) => (
                <Card key={child.id} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{isArabic ? child.label.ar : child.label.en}</CardTitle>
                    {child.description && (
                      <CardDescription>
                        {isArabic ? child.description.ar : child.description.en}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Link to={child.href} className="text-primary hover:underline">
                      {isArabic ? 'عرض الفئة' : 'View category'}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'لا توجد فئات فرعية' : 'No subcategories'}</CardTitle>
                <CardDescription>
                  {isArabic
                    ? 'هذه صفحة نهائية ضمن هيكل التنقل.'
                    : 'This is an end-level category in the navigation hierarchy.'}
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
