import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { pageSEO } from '@/data/pageSeo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: object | object[];
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  image = 'https://placehold.co/1200x630/059669/ffffff.png?text=PolySource+Global',
  url,
  type = 'website',
  article,
  structuredData,
  noIndex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || i18n.language;
  const isArabic = currentLang?.startsWith('ar');

  const siteName = i18n.t('branding.name');
  const siteUrl = 'https://testwebs.lovable.app';
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  const matchedSEO = pageSEO.find((item) => item.path === pathname) ?? pageSEO.find((item) => item.path === '*');
  const resolvedTitle =
    title || (matchedSEO ? (isArabic ? matchedSEO.title.ar : matchedSEO.title.en) : siteName);
  const resolvedDescription =
    description ||
    (matchedSEO
      ? isArabic
        ? matchedSEO.metaDescription.ar
        : matchedSEO.metaDescription.en
      : i18n.t('home.seo.description', { defaultValue: 'PolySource Global polymer supplier.' }));
  const resolvedKeywords =
    keywords ||
    (matchedSEO ? (isArabic ? matchedSEO.keywords.ar : matchedSEO.keywords.en) : undefined);

  const fullTitle = resolvedTitle.includes(siteName) ? resolvedTitle : `${resolvedTitle} | ${siteName}`;

  const renderStructuredData = () => {
    const resolvedStructuredData =
      structuredData || (matchedSEO ? (isArabic ? matchedSEO.structuredData.ar : matchedSEO.structuredData.en) : undefined);

    if (!resolvedStructuredData) return null;

    const schemas = Array.isArray(resolvedStructuredData)
      ? resolvedStructuredData
      : [resolvedStructuredData];

    return schemas.map((schema, index) => (
      <script key={index} type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    ));
  };

  return (
    <Helmet>
      <html lang={currentLang} dir={isArabic ? 'rtl' : 'ltr'} />

      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={resolvedDescription} />
      {resolvedKeywords && <meta name="keywords" content={resolvedKeywords} />}

      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'all'} />

      <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={isArabic ? 'ar_AE' : 'en_US'} />

      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={fullUrl} />

      <meta name="language" content={isArabic ? 'Arabic' : 'English'} />
      <meta name="revisit-after" content="7 days" />

      {renderStructuredData()}
    </Helmet>
  );
}
