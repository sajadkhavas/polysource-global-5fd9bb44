import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Download, FileText, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Resource {
  id: string;
  title_en: string;
  title_ar: string;
  type: 'TDS' | 'SDS' | 'COA';
  product_en: string;
  product_ar: string;
  grade: string;
  lastUpdated: string;
}

const mockResources: Resource[] = [
  {
    id: '1',
    title_en: 'Technical Data Sheet - rHDPE-F100',
    title_ar: 'ورقة البيانات الفنية - rHDPE-F100',
    type: 'TDS',
    product_en: 'Recycled HDPE Film Grade',
    product_ar: 'درجة فيلم HDPE معاد تدويرها',
    grade: 'rHDPE-F100',
    lastUpdated: '2024-01-15'
  },
  {
    id: '2',
    title_en: 'Safety Data Sheet - rHDPE-F100',
    title_ar: 'ورقة بيانات السلامة - rHDPE-F100',
    type: 'SDS',
    product_en: 'Recycled HDPE Film Grade',
    product_ar: 'درجة فيلم HDPE معاد تدويرها',
    grade: 'rHDPE-F100',
    lastUpdated: '2024-01-15'
  },
  {
    id: '3',
    title_en: 'Technical Data Sheet - rLDPE-I200',
    title_ar: 'ورقة البيانات الفنية - rLDPE-I200',
    type: 'TDS',
    product_en: 'Recycled LDPE Injection Grade',
    product_ar: 'درجة حقن LDPE معاد تدويرها',
    grade: 'rLDPE-I200',
    lastUpdated: '2024-02-01'
  },
  {
    id: '4',
    title_en: 'Safety Data Sheet - rLDPE-I200',
    title_ar: 'ورقة بيانات السلامة - rLDPE-I200',
    type: 'SDS',
    product_en: 'Recycled LDPE Injection Grade',
    product_ar: 'درجة حقن LDPE معاد تدويرها',
    grade: 'rLDPE-I200',
    lastUpdated: '2024-02-01'
  },
  {
    id: '5',
    title_en: 'Technical Data Sheet - LLDPE-218W',
    title_ar: 'ورقة البيانات الفنية - LLDPE-218W',
    type: 'TDS',
    product_en: 'Virgin LLDPE Film Grade',
    product_ar: 'درجة فيلم LLDPE بكر',
    grade: 'LLDPE-218W',
    lastUpdated: '2024-01-20'
  },
  {
    id: '6',
    title_en: 'Certificate of Analysis - rPP-H500',
    title_ar: 'شهادة التحليل - rPP-H500',
    type: 'COA',
    product_en: 'Recycled PP Injection Grade',
    product_ar: 'درجة حقن PP معاد تدويرها',
    grade: 'rPP-H500',
    lastUpdated: '2024-02-10'
  }
];

export default function Resources() {
  const { t, i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const locale: 'en' | 'ar' = resolvedLanguage.startsWith('ar') ? 'ar' : 'en';
  const isRTL = resolvedLanguage.startsWith('ar');
  const dateLocale = locale === 'ar' ? 'ar-EG' : 'en-US';
  const [searchQuery, setSearchQuery] = useState('');

  const getLocalizedTitle = (resource: Resource) => (locale === 'ar' ? resource.title_ar : resource.title_en);
  const getLocalizedProduct = (resource: Resource) => (locale === 'ar' ? resource.product_ar : resource.product_en);

  const filteredResources = mockResources.filter(resource =>
    getLocalizedTitle(resource).toLowerCase().includes(searchQuery.toLowerCase()) ||
    getLocalizedProduct(resource).toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'TDS':
        return <FileText className="h-4 w-4" />;
      case 'SDS':
        return <Shield className="h-4 w-4" />;
      case 'COA':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'TDS':
        return 'default';
      case 'SDS':
        return 'destructive';
      case 'COA':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const breadcrumbItems = [
    { labelKey: "breadcrumb.home", to: "/" },
    { labelKey: "breadcrumb.resources", to: "/resources" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.resources'), url: 'https://polysource.global/resources' }
  ]);

  const typeLabels: Record<Resource['type'], string> = {
    TDS: t('resourcesPage.types.labels.tds'),
    SDS: t('resourcesPage.types.labels.sds'),
    COA: t('resourcesPage.types.labels.coa')
  };

  const helpItems = t('resourcesPage.help.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t('resourcesPage.seo.title')}
        description={t('resourcesPage.seo.description')}
        keywords={t('resourcesPage.seo.keywords')}
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
            <h1 className="text-4xl font-bold mb-4 text-foreground">{t('resourcesPage.hero.title')}</h1>
            <p className={`text-lg text-muted-foreground max-w-3xl ${isRTL ? 'ml-auto' : ''}`}>
              {t('resourcesPage.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto">
            <Search
              className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground`}
            />
            <Input
              placeholder={t('resourcesPage.search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={isRTL ? 'pr-10 text-right' : 'pl-10'}
            />
          </div>
        </div>
      </section>

      {/* Resource Types Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className={isRTL ? 'text-right' : ''}>
              <CardHeader>
                <FileText className={`h-8 w-8 text-primary mb-3 ${isRTL ? 'mr-auto' : ''}`} />
                <CardTitle className="text-lg">{t('resourcesPage.types.tds')}</CardTitle>
                <CardDescription>
                  {t('resourcesPage.types.descriptions.tds')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className={isRTL ? 'text-right' : ''}>
              <CardHeader>
                <Shield className={`h-8 w-8 text-destructive mb-3 ${isRTL ? 'mr-auto' : ''}`} />
                <CardTitle className="text-lg">{t('resourcesPage.types.sds')}</CardTitle>
                <CardDescription>
                  {t('resourcesPage.types.descriptions.sds')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className={isRTL ? 'text-right' : ''}>
              <CardHeader>
                <FileText className={`h-8 w-8 text-secondary mb-3 ${isRTL ? 'mr-auto' : ''}`} />
                <CardTitle className="text-lg">{t('resourcesPage.types.coa')}</CardTitle>
                <CardDescription>
                  {t('resourcesPage.types.descriptions.coa')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-6 ${isRTL ? 'text-right' : ''}`}>
            <p className="text-sm text-muted-foreground">
              {t('resourcesPage.list.count', { count: filteredResources.length })}
            </p>
          </div>

          <div className="space-y-4">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`flex items-start justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                        <div className={`flex items-center gap-2 mb-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                          <Badge variant={getTypeBadgeVariant(resource.type)}>
                            {getTypeIcon(resource.type)}
                            <span className={isRTL ? 'mr-1' : 'ml-1'}>{typeLabels[resource.type]}</span>
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                          {t('resourcesPage.list.updated', { date: new Date(resource.lastUpdated).toLocaleDateString(dateLocale) })}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{getLocalizedTitle(resource)}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{getLocalizedProduct(resource)}</p>
                        <p className="text-xs font-mono text-muted-foreground">{resource.grade}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className={isRTL ? 'h-4 w-4 ml-2' : 'h-4 w-4 mr-2'} />
                        {t('resourcesPage.list.download')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t('resourcesPage.empty.title')}</h3>
              <p className="text-muted-foreground">{t('resourcesPage.empty.subtitle')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <CardHeader>
              <CardTitle>{t('resourcesPage.help.title')}</CardTitle>
              <CardDescription>
                {t('resourcesPage.help.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className={`space-y-2 text-sm text-muted-foreground mb-6 ${isRTL ? 'text-right' : ''}`}>
                {helpItems.map((item) => (
                  <li key={item}>{isRTL ? `${item} •` : `• ${item}`}</li>
                ))}
              </ul>
              <Button>{t('resourcesPage.help.cta')}</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
