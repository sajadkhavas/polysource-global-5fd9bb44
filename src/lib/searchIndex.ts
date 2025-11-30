import { polymerMaterials, blogPosts } from "@/lib/mockData";

export type SearchItemType = "product" | "resource" | "blog";

export interface SearchItem {
  id: string;
  type: SearchItemType;
  title_en: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  url: string;
}

// Mock resources data
const mockResources = [
  {
    id: "res-1",
    title_en: "Technical Data Sheet - rHDPE-F100",
    title_ar: "ورقة البيانات الفنية - rHDPE-F100",
    description_en: "Complete physical and mechanical properties for recycled HDPE film grade",
    description_ar: "الخصائص الفيزيائية والميكانيكية الكاملة لدرجة فيلم HDPE المعاد تدويره",
  },
  {
    id: "res-2",
    title_en: "Safety Data Sheet - rLDPE-I200",
    title_ar: "ورقة بيانات السلامة - rLDPE-I200",
    description_en: "Handling, storage, and emergency information",
    description_ar: "معلومات التعامل والتخزين والطوارئ",
  },
  {
    id: "res-3",
    title_en: "Processing Guidelines - Recycled PE",
    title_ar: "إرشادات المعالجة - PE المعاد تدويره",
    description_en: "Temperature profiles, cycle times, and optimization tips",
    description_ar: "ملفات درجات الحرارة وأوقات الدورة ونصائح التحسين",
  },
];

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // Products from polymerMaterials
  polymerMaterials.forEach((product) => {
    items.push({
      id: `product-${product.id}`,
      type: "product",
      title_en: product.name_en,
      title_ar: product.name_ar,
      description_en: `${product.grade} - ${product.category} - ${product.applications.join(", ")}`,
      description_ar: `${product.grade} - ${product.category}`,
      url: `/products/${product.id}`,
    });
  });

  // Resources
  mockResources.forEach((doc) => {
    items.push({
      id: `resource-${doc.id}`,
      type: "resource",
      title_en: doc.title_en,
      title_ar: doc.title_ar,
      description_en: doc.description_en,
      description_ar: doc.description_ar,
      url: `/resources`,
    });
  });

  // Blog posts
  blogPosts.forEach((post) => {
    items.push({
      id: `blog-${post.id}`,
      type: "blog",
      title_en: post.title_en,
      title_ar: post.title_ar,
      description_en: post.excerpt_en,
      description_ar: post.excerpt_ar,
      url: `/blog/${post.id}`,
    });
  });

  return items;
}

export function searchItems(
  query: string,
  items: SearchItem[],
  lang: "en" | "ar"
): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored: { item: SearchItem; score: number }[] = [];

  for (const item of items) {
    const title = (lang === "ar" ? item.title_ar : item.title_en) || item.title_en;
    const description = (lang === "ar" ? item.description_ar : item.description_en) || "";

    const haystack = `${title} ${description}`.toLowerCase();
    if (!haystack.includes(q)) continue;

    let score = 0;
    if (title.toLowerCase().includes(q)) score += 2;
    if (description.toLowerCase().includes(q)) score += 1;

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 10).map((s) => s.item);
}
