// Lightweight analytics simulation

export type AnalyticsEvent = {
  event: string;
  source: string;
  timestamp: number;
  data?: Record<string, unknown>;
};

export const trackEvent = (
  event: string,
  source: string,
  data?: Record<string, unknown>
): void => {
  const analyticsEvent: AnalyticsEvent = {
    event,
    source,
    timestamp: Date.now(),
    ...(data && { data })
  };
  
  console.log('[Analytics]', analyticsEvent);
};

// Pre-defined event helpers
export const trackQuoteRequest = (source: 'hero' | 'nav' | 'contact' | 'product') => {
  trackEvent('quote_requested', source);
};

export const trackFormSubmission = (formName: string, data: Record<string, unknown>) => {
  trackEvent('form_submitted', formName, data);
};

export const trackMaterialView = (materialId: string, materialName: string) => {
  trackEvent('material_viewed', 'products', { materialId, materialName });
};

export const trackBlogView = (postId: string, postTitle: string) => {
  trackEvent('blog_viewed', 'blog', { postId, postTitle });
};
