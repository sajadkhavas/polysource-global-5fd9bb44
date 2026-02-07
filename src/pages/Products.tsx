import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, Package, Leaf, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LazyImage } from '@/components/LazyImage';
import { getProductImage, getProductAltText } from '@/data/product-images';
import { products, type Product } from '@/data/products';
import type { ProductCategory } from '@/data/product-taxonomy';

export default function Products() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showRecycledOnly, setShowRecycledOnly] = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const searchValue = searchQuery.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchValue) || product.grade.toLowerCase().includes(searchValue);
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesRecycled = !showRecycledOnly || product.recycled;
    const matchesStock = !showInStockOnly || product.inStock;
    return matchesSearch && matchesCategory && matchesRecycled && matchesStock;
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">{t('products.filters.category')}</h3>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger><SelectValue placeholder={t('products.filters.allCategories')} /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('products.filters.allCategories')}</SelectItem>
            <SelectItem value="recycled">{t('products.recycled')}</SelectItem>
            <SelectItem value="petrochemical">Petrochemical</SelectItem>
            <SelectItem value="compounds">Compounds</SelectItem>
            <SelectItem value="finished">Finished Parts</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="recycled" checked={showRecycledOnly} onCheckedChange={(c) => setShowRecycledOnly(c as boolean)} />
          <Label htmlFor="recycled" className="cursor-pointer">{t('products.filters.recycledOnly')}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="instock" checked={showInStockOnly} onCheckedChange={(c) => setShowInStockOnly(c as boolean)} />
          <Label htmlFor="instock" className="cursor-pointer">{t('products.filters.inStockOnly')}</Label>
        </div>
      </div>
    </div>
  );

  const breadcrumbItems = [
    { labelKey: "breadcrumb.home", to: "/" },
    { labelKey: "breadcrumb.products", to: "/products" }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: t('breadcrumb.home'), url: 'https://polysource.global' },
    { name: t('breadcrumb.products'), url: 'https://polysource.global/products' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title={t('products.heroTitle')} description={t('products.heroSubtitle')} structuredData={breadcrumbSchema} />
      <section className="bg-muted/50 pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t('products.heroTitle')}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{t('products.heroSubtitle')}</p>
        </div>
      </section>

      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder={t('products.searchPlaceholder')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden"><Filter className="h-4 w-4 mr-2" />{t('products.filters.title')}</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader><SheetTitle>{t('products.filters.title')}</SheetTitle></SheetHeader>
                <div className="mt-6"><FilterSidebar /></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                <Card>
                  <CardHeader><CardTitle className="text-lg">{t('products.filters.title')}</CardTitle></CardHeader>
                  <CardContent><FilterSidebar /></CardContent>
                </Card>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  {t('products.subtitle')} ({filteredProducts.length}/{products.length})
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                    <Card className="h-full hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                        <LazyImage
                          src={getProductImage(product.category as ProductCategory)}
                          alt={getProductAltText(product.name, product.category as ProductCategory)}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
                          {product.recycled && (
                            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-success text-success">
                              <Leaf className="h-3 w-3 mr-1" /> Recycled
                            </Badge>
                          )}
                          {product.inStock && <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">{t('products.labels.inStock')}</Badge>}
                        </div>
                      </div>
                      <CardHeader className="flex-1 pt-4">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription><span className="font-mono text-xs">{product.grade}</span></CardDescription>
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-muted-foreground">{t('products.labels.color')}:</span><span className="font-medium">{product.color}</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">{t('products.labels.mfi')}:</span><span className="font-medium">{product.mfi}</span></div>
                        </div>
                        <div className="mt-4">
                          <p className="text-xs text-muted-foreground mb-2">{t('products.labels.applications')}:</p>
                          <div className="flex flex-wrap gap-1">
                            {product.applications.map(app => <Badge key={app} variant="secondary" className="text-xs">{app}</Badge>)}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button asChild variant="outline" className="w-full" size="sm">
                          <Link to={`/products/${product.id}`}>{t('products.viewDetails')}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t('products.noResultsTitle')}</h3>
                  <p className="text-muted-foreground">{t('products.noResultsDescription')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
