import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
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
  noIndex = false
}: SEOProps) {
  const { i18n } = useTranslation();
  const siteName = i18n.t('branding.name');
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = 'https://testwebs.lovable.app';
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  const renderStructuredData = () => {
    if (!structuredData) return null;
    const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
    return schemas.map((schema, index) => (
      <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
    ));
  };

  return (
    <Helmet>
      <html lang="en" dir="ltr" />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'all'} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {type === 'article' && article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={fullUrl} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {renderStructuredData()}
    </Helmet>
  );
}
