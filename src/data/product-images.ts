import { ProductCategory } from './product-taxonomy';

// Category-based image mapping
export const categoryImages: Record<ProductCategory, string> = {
  petrochemical: '/images/products/petrochemical-pellets.jpg',
  recycled: '/images/products/recycled-granules.jpg',
  compounds: '/images/products/compounds-masterbatch.jpg',
  finished: '/images/products/finished-parts.jpg',
};

// Placeholder for products without images
export const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23334155"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="system-ui" font-size="16"%3EProduct Image%3C/text%3E%3C/svg%3E';

// Get image URL for a product based on its category
export function getProductImage(category: ProductCategory): string {
  return categoryImages[category] || placeholderImage;
}

// Generate alt text for a product
export function getProductAltText(productName: string, category: ProductCategory): string {
  const categoryDescriptions: Record<ProductCategory, string> = {
    petrochemical: 'virgin polymer pellets for industrial applications',
    recycled: 'recycled polymer granules for sustainable manufacturing',
    compounds: 'polymer compound and masterbatch materials',
    finished: 'finished plastic parts and products',
  };
  
  return `${productName} - ${categoryDescriptions[category]}`;
}
