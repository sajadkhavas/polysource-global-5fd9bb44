import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/SEO';
import { generateBreadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Filter, Package, Leaf, AlertCircle } from 'lucide-react';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { LazyImage } from '@/components/LazyImage';
import { getProductAltText } from '@/data/product-images';
import { fetchMaterials, type PolymerMaterial } from '@/lib/mockData';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showRecycledOnly, setShowRecycledOnly] = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const { addProduct } = useRFQ();
  const { toast } = useToast();

  const { data: materials, isLoading, isError } = useQuery({
    queryKey: ['materials'],
    queryFn: fetchMaterials,
  });

  const filteredProducts = (materials || []).filter((product: PolymerMaterial) => {
    const matchesSearch = product.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.grade.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesRecycled = !showRecycledOnly || product.recycled_percentage > 0;
    const matchesStock = !showInStockOnly || product.inStock;

    return matchesSearch && matchesCategory && matchesRecycled && matchesStock;
  });

  const handleAddToRFQ = (product: PolymerMaterial) => {
    addProduct({
      id: product.id,
      name: product.name_en,
      type: product.category,
      grade: product.grade
    });
    toast({
      title: "Added to RFQ",
      description: `${product.name_en} has been added to your quote request.`,
    });
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="recycled">Recycled</SelectItem>
            <SelectItem value="virgin">Virgin</SelectItem>
            <SelectItem value="pcr">PCR</SelectItem>
            <SelectItem value="masterbatch">Masterbatch</SelectItem>
            <SelectItem value="compound">Compound</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="recycled" 
            checked={showRecycledOnly}
            onCheckedChange={(checked) => setShowRecycledOnly(checked as boolean)}
          />
          <Label htmlFor="recycled" className="cursor-pointer">Recycled Only</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="instock" 
            checked={showInStockOnly}
            onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
          />
          <Label htmlFor="instock" className="cursor-pointer">In Stock Only</Label>
        </div>
      </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="h-full overflow-hidden">
          <Skeleton className="aspect-[4/3] w-full" />
          <CardHeader className="pt-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex gap-2">
              <Skeleton className="h-9 flex-1" />
              <Skeleton className="h-9 flex-1" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const ErrorState = () => (
    <div className="text-center py-12">
      <AlertCircle className="h-12 w-12 mx-auto text-destructive mb-4" />
      <h3 className="text-lg font-semibold mb-2">Error Loading Products</h3>
      <p className="text-muted-foreground">Please try again later</p>
    </div>
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://polysource.global' },
    { name: 'Products', url: 'https://polysource.global/products' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Polymer Catalog - Recycled & Virgin PE, PP, HDPE Materials"
        description="Browse PolySource Global's complete catalog of recycled and virgin polymers. rPE, rPP, rPET, HDPE, LDPE, and compounds with full technical data sheets and batch traceability. Request quotes online."
        keywords="polymer catalog, recycled polymers, virgin polymers, PE grades, PP grades, HDPE, LDPE, rPE, rPP, polymer materials catalog, plastic raw materials"
        structuredData={breadcrumbSchema}
      />
      {/* Header */}
      <section className="bg-muted/50 pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Product Catalog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse our complete range of recycled and virgin polymers. All materials come with full technical data sheets and batch traceability.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40 backdrop-blur bg-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by product name or grade..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FilterSidebar />
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              {isLoading && <LoadingSkeleton />}
              {isError && <ErrorState />}
              
              {!isLoading && !isError && (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product: PolymerMaterial, index: number) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                        {/* Product Image */}
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <LazyImage
                            src={product.image}
                            alt={`${product.name_en} - ${product.category}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
                            {product.recycled_percentage > 0 && (
                              <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-success text-success">
                                <Leaf className="h-3 w-3 mr-1" />
                                {product.recycled_percentage}% Recycled
                              </Badge>
                            )}
                            {product.inStock && (
                              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">In Stock</Badge>
                            )}
                          </div>
                        </div>
                        <CardHeader className="flex-1 pt-4">
                          <CardTitle className="text-lg">{product.name_en}</CardTitle>
                          <CardDescription>
                            <span className="font-mono text-xs">{product.grade}</span>
                          </CardDescription>
                          <div className="mt-4 space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Origin:</span>
                              <span className="font-medium">{product.origin}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Color:</span>
                              <span className="font-medium">{product.color}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">MFI:</span>
                              <span className="font-medium">{product.mfi}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Price:</span>
                              <span className="font-medium text-primary">{product.price_range}</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <p className="text-xs text-muted-foreground mb-2">Applications:</p>
                            <div className="flex flex-wrap gap-1">
                              {product.applications.map(app => (
                                <Badge key={app} variant="secondary" className="text-xs">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex gap-2">
                            <Button asChild variant="outline" className="flex-1" size="sm">
                              <Link to={`/products/${product.id}`}>View Details</Link>
                            </Button>
                            <Button 
                              onClick={() => handleAddToRFQ(product)}
                              size="sm"
                              className="flex-1"
                            >
                              Add to RFQ
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}

              {!isLoading && !isError && filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or search query</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
