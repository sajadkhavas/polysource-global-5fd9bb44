import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useRFQ } from '@/contexts/RFQContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { navigationData } from '@/data/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { DesktopDropdown } from './DesktopDropdown';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { products } = useRFQ();

  const polymerProductsItem = navigationData.find(item => item.id === 'polymer-products');
  const servicesItem = navigationData.find(item => item.id === 'services');
  const newsItem = navigationData.find(item => item.id === 'insights');
  const aboutItem = navigationData.find(item => item.id === 'about');

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Two-layer header */}
        <div className="hidden lg:block">
          {/* Top layer: Brand + Trust signals */}
          <div className="flex items-center justify-between py-3 border-b border-border/50">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2.5">
                <div className="h-9 w-9 rounded-lg bg-primary" aria-hidden="true" />
                <div>
                  <span className="text-xl font-bold text-foreground block leading-none">PolySource Global</span>
                  <span className="text-xs text-muted-foreground block mt-0.5">Recycled-first polymer supply from Dubai</span>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-foreground">18+</span>
                <span>countries</span>
              </div>
              <div className="h-3 w-px bg-border" />
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-foreground">12,500+</span>
                <span>tonnes delivered annually</span>
              </div>
            </div>
          </div>

          {/* Bottom layer: Navigation + Actions */}
          <div className="relative flex items-center justify-between h-14">
            {/* Center: Main Navigation */}
            <div className="flex items-center space-x-1">
              {/* Polymer Products with Mega Menu */}
              {polymerProductsItem && (
                <div
                  onMouseEnter={() => setMegaMenuOpen('polymer-products')}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  <Link
                    to={polymerProductsItem.href || '/products'}
                    className={cn(
                      'text-sm font-semibold transition-colors px-4 py-2 rounded-md',
                      isActive('/products')
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground/90 hover:bg-muted hover:text-primary'
                    )}
                  >
                    {polymerProductsItem.label.en}
                  </Link>
                </div>
              )}
              
              {/* MegaMenu positioned relative to entire nav container */}
              {megaMenuOpen === 'polymer-products' && polymerProductsItem && (
                <div
                  onMouseEnter={() => setMegaMenuOpen('polymer-products')}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  <MegaMenu item={polymerProductsItem} onClose={() => setMegaMenuOpen(null)} />
                </div>
              )}

              {/* Other Nav Items with Dropdowns */}
              {servicesItem && (
                <DesktopDropdown
                  item={servicesItem}
                  isOpen={dropdownOpen === 'services'}
                  onOpenChange={(open) => setDropdownOpen(open ? 'services' : null)}
                  isActive={isActive}
                />
              )}
              {newsItem && (
                <DesktopDropdown
                  item={newsItem}
                  isOpen={dropdownOpen === 'news'}
                  onOpenChange={(open) => setDropdownOpen(open ? 'news' : null)}
                  isActive={isActive}
                />
              )}
              {aboutItem && (
                <DesktopDropdown
                  item={aboutItem}
                  isOpen={dropdownOpen === 'about'}
                  onOpenChange={(open) => setDropdownOpen(open ? 'about' : null)}
                  isActive={isActive}
                />
              )}
              <Link 
                to="/sustainability" 
                className={cn(
                  'text-sm font-semibold transition-colors px-4 py-2 rounded-md',
                  isActive('/sustainability')
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/90 hover:bg-muted hover:text-primary'
                )}
              >
                Sustainability
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-3">

              {/* Browse Products Link */}
              <Button variant="outline" size="sm" asChild>
                <Link to="/products">Browse Products</Link>
              </Button>

              {/* Language Switcher */}
              <Button variant="ghost" size="sm" className="gap-1">
                <Globe className="h-4 w-4" />
                <span className="text-xs">EN</span>
              </Button>

              {/* RFQ Basket */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <ShoppingCart className="h-4 w-4" />
                    {products.length > 0 && (
                      <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent">
                        {products.length}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>RFQ Basket</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4 space-y-4">
                    {products.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No products added yet</p>
                    ) : (
                      <>
                        {products.map((product) => (
                          <div key={product.id} className="flex items-start justify-between p-3 border border-border rounded-lg">
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.type}</p>
                            </div>
                          </div>
                        ))}
                        <Button asChild className="w-full">
                          <Link to="/contact">Request Quote</Link>
                        </Button>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Request Quote CTA */}
              <Button asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile: Single row header */}
        <div className="flex lg:hidden h-16 items-center justify-between">
          {/* Left: Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary" aria-hidden="true" />
            <span className="text-lg font-bold text-foreground">PolySource</span>
          </Link>

          {/* Right: Controls */}
          <div className="flex items-center space-x-2">
            {/* Language */}
            <Button variant="ghost" size="sm">
              <Globe className="h-4 w-4" />
            </Button>

            {/* RFQ Basket */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {products.length > 0 && (
                    <Badge className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-accent">
                      {products.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>RFQ Basket</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {products.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No products added yet</p>
                  ) : (
                    <>
                      {products.map((product) => (
                        <div key={product.id} className="flex items-start justify-between p-3 border border-border rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.type}</p>
                          </div>
                        </div>
                      ))}
                      <Button asChild className="w-full">
                        <Link to="/contact">Request Quote</Link>
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            <MobileNav items={navigationData} onClose={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
}
