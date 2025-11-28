import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Filter, Package, Leaf } from 'lucide-react';
import { useRFQ } from '@/contexts/RFQContext';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { products, type Product } from '@/data/products';
import { productCategories, polymerTypes } from '@/data/product-taxonomy';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showRecycledOnly, setShowRecycledOnly] = useState(false);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const { addProduct } = useRFQ();
  const { toast } = useToast();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.grade.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesRecycled = !showRecycledOnly || product.recycled;
    const matchesStock = !showInStockOnly || product.inStock;

    return matchesSearch && matchesCategory && matchesType && matchesRecycled && matchesStock;
  });

  const handleAddToRFQ = (product: Product) => {
    addProduct({
      id: product.id,
      name: product.name,
      type: product.type,
      grade: product.grade
    });
    toast({
      title: "Added to RFQ",
      description: `${product.name} has been added to your quote request.`,
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
            {Object.entries(productCategories).map(([key, cat]) => (
              <SelectItem key={key} value={key}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Polymer Type</h3>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            <SelectItem value="all">All Types</SelectItem>
            {Object.entries(polymerTypes).map(([key, type]) => (
              <SelectItem key={key} value={key}>
                {type.label}
              </SelectItem>
            ))}
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

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://polysource.global' },
    { name: 'Products', url: 'https://polysource.global/products' }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Product Catalog"
        description="Browse our complete range of recycled and virgin polymers including rPE, rPP, rPET. All materials come with full technical data sheets and batch traceability."
        keywords="polymer catalog, recycled polymers, virgin polymers, PE grades, PP grades, polymer materials"
        structuredData={breadcrumbSchema}
      />
      {/* Header */}
      <section className="bg-muted/50 py-12 border-b border-border">
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

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                      <CardHeader className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex gap-2">
                            {product.recycled && (
                              <Badge variant="outline" className="border-success text-success">
                                <Leaf className="h-3 w-3 mr-1" />
                                Recycled
                              </Badge>
                            )}
                            {product.inStock && (
                              <Badge variant="secondary">In Stock</Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>
                          <span className="font-mono text-xs">{product.grade}</span>
                        </CardDescription>
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type:</span>
                            <span className="font-medium">{product.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Color:</span>
                            <span className="font-medium">{product.color}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">MFI:</span>
                            <span className="font-medium">{product.mfi}</span>
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

              {filteredProducts.length === 0 && (
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
