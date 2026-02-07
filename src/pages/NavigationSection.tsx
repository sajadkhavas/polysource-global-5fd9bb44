import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { findNavigationItem, getBreadcrumbs } from '@/data/navigation-complete';

export default function NavigationSection() {
  const { i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const isArabic = resolvedLanguage.startsWith('ar');
  const { pathname } = useLocation();

  const section = findNavigationItem(pathname);
  const trail = getBreadcrumbs(pathname);

  if (!section) {
    return null;
  }

  const title = isArabic ? section.label.ar : section.label.en;
  const description = section.description
    ? isArabic
      ? section.description.ar
      : section.description.en
    : isArabic
      ? 'هذه الصفحة جزء من بنية التنقل الجديدة للموقع.'
      : 'This page is part of the new site navigation structure.';

  const breadcrumbs = [
    { label: isArabic ? 'الرئيسية' : 'Home', to: '/' },
    ...trail.map((item) => ({
      label: isArabic ? item.label.ar : item.label.en,
      to: item.href,
    })),
  ];

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
          {section.children && section.children.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.children.map((child) => (
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
                      {isArabic ? 'عرض التفاصيل' : 'View details'}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>{isArabic ? 'صفحة نهائية ضمن القائمة' : 'Final page in the menu tree'}</CardTitle>
                <CardDescription>
                  {isArabic
                    ? 'يمكنك استخدام هذه الصفحة كنقطة تحويل لطلب عرض سعر أو التواصل.'
                    : 'You can use this page as a conversion point for RFQ and contact actions.'}
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
