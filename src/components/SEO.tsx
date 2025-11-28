import { Helmet } from 'react-helmet-async';

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
  const siteName = 'PolySource Global';
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = 'https://testwebs.lovable.app';
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  // Handle multiple structured data schemas
  const renderStructuredData = () => {
    if (!structuredData) return null;
    
    const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
    
    return schemas.map((schema, index) => (
      <script key={index} type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    ));
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'all'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Article specific tags */}
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
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Additional SEO tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      {renderStructuredData()}
    </Helmet>
  );
}
