import { products } from "@/data/products";

export type SearchItemType = "product" | "resource";

export interface SearchItem {
  id: string;
  type: SearchItemType;
  title: string;
  description?: string;
  url: string;
}

// Static resources
const staticResources: SearchItem[] = [
  {
    id: "res-1",
    type: "resource",
    title: "Technical Data Sheet - rHDPE-F100",
    description: "Complete physical and mechanical properties for recycled HDPE film grade",
    url: "/products/rpe-001",
  },
  {
    id: "res-2",
    type: "resource",
    title: "Safety Data Sheet - rLDPE-I200",
    description: "Handling, storage, and emergency information",
    url: "/products/rpe-002",
  },
  {
    id: "res-3",
    type: "resource",
    title: "Processing Guidelines - Recycled PE",
    description: "Temperature profiles, cycle times, and optimization tips",
    url: "/products",
  },
];

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  products.forEach((product) => {
    items.push({
      id: `product-${product.id}`,
      type: "product",
      title: product.name,
      description: `${product.grade} - ${product.category} - ${product.applications.join(", ")}`,
      url: `/products/${product.id}`,
    });
  });

  items.push(...staticResources);

  return items;
}

export function searchItems(query: string, items: SearchItem[]): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored: { item: SearchItem; score: number }[] = [];

  for (const item of items) {
    const haystack = `${item.title} ${item.description || ""}`.toLowerCase();
    if (!haystack.includes(q)) continue;

    let score = 0;
    if (item.title.toLowerCase().includes(q)) score += 2;
    if ((item.description || "").toLowerCase().includes(q)) score += 1;

    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 10).map((s) => s.item);
}
