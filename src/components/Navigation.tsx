import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navigationData } from '@/data/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { DesktopDropdown } from './DesktopDropdown';
import { GlobalSearch } from './GlobalSearch';

export function Navigation() {
  const location = useLocation();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const polymerProductsItem = navigationData.find(item => item.id === 'polymer-products');
  const servicesItem = navigationData.find(item => item.id === 'services');
  const aboutItem = navigationData.find(item => item.id === 'about');
  const brandName = t('branding.name');
  const shortBrand = t('branding.shortName');
  const brandTagline = t('branding.tagline');

  const isActive = (href: string) => {
    if (!href || href === '#') return false;
    const basePath = href.split('?')[0];
    return location.pathname === basePath || location.pathname.startsWith(basePath + '/');
  };

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isHomePage && !scrolled
        ? "bg-transparent border-transparent"
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    )}>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Two-layer header */}
        <div className="hidden lg:block">
          {/* Top layer: Brand + Trust signals */}
          <div className={cn(
            "flex items-center justify-between py-3 border-b",
            isHomePage && !scrolled ? "border-white/20" : "border-border/50"
          )}>
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2.5">
                <div className={cn(
                  "h-9 w-9 rounded-lg",
                  isHomePage && !scrolled ? "bg-white" : "bg-primary"
                )} aria-hidden="true" />
                <div>
                  <span className={cn(
                    "text-xl font-bold block leading-none",
                    isHomePage && !scrolled ? "text-white" : "text-foreground"
                  )}>{brandName}</span>
                  <span className={cn(
                    "text-xs block mt-0.5",
                    isHomePage && !scrolled ? "text-white/70" : "text-muted-foreground"
                  )}>{brandTagline}</span>
                </div>
              </Link>
            </div>

            {/* Center: Global Search */}
            <div className="flex-1 max-w-md mx-8">
              <GlobalSearch className={cn(
                "w-full",
                isHomePage && !scrolled && "bg-white/10 border-white/30 text-white placeholder:text-white/60 hover:bg-white/15 hover:border-white/50"
              )} />
            </div>
            
            <div className={cn(
              "flex items-center text-xs space-x-6",
              isHomePage && !scrolled ? "text-white/70" : "text-muted-foreground"
            )}>
              <div className="flex items-center space-x-1.5">
                <span className={cn("font-semibold", isHomePage && !scrolled ? "text-white" : "text-foreground")}>18+</span>
                <span>{t('nav.trustBadge.countries')}</span>
              </div>
              <div className={cn("h-3 w-px", isHomePage && !scrolled ? "bg-white/30" : "bg-border")} />
              <div className="flex items-center space-x-1.5">
                <span className={cn("font-semibold", isHomePage && !scrolled ? "text-white" : "text-foreground")}>12,500+</span>
                <span>{t('nav.trustBadge.tonnes')}</span>
              </div>
            </div>
          </div>

          {/* Bottom layer: Navigation + Actions */}
          <div className="relative flex items-center justify-between h-14">
            <div className="flex items-center space-x-1">
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
                        : isHomePage && !scrolled
                          ? 'text-white/90 hover:bg-white/10 hover:text-white'
                          : 'text-foreground/90 hover:bg-muted hover:text-primary'
                    )}
                  >
                    {polymerProductsItem.label}
                  </Link>
                </div>
              )}
              
              {megaMenuOpen === 'polymer-products' && polymerProductsItem && (
                <div
                  onMouseEnter={() => setMegaMenuOpen('polymer-products')}
                  onMouseLeave={() => setMegaMenuOpen(null)}
                >
                  <MegaMenu item={polymerProductsItem} onClose={() => setMegaMenuOpen(null)} />
                </div>
              )}

              {servicesItem && (
                <DesktopDropdown
                  item={servicesItem}
                  isOpen={dropdownOpen === 'services'}
                  onOpenChange={(open) => setDropdownOpen(open ? 'services' : null)}
                  isActive={isActive}
                  isTransparent={isHomePage && !scrolled}
                />
              )}
              {aboutItem && (
                <DesktopDropdown
                  item={aboutItem}
                  isOpen={dropdownOpen === 'about'}
                  onOpenChange={(open) => setDropdownOpen(open ? 'about' : null)}
                  isActive={isActive}
                  isTransparent={isHomePage && !scrolled}
                />
              )}
              <Link 
                to="/sustainability" 
                className={cn(
                  'text-sm font-semibold transition-colors px-4 py-2 rounded-md',
                  isActive('/sustainability')
                    ? 'bg-primary/10 text-primary'
                    : isHomePage && !scrolled
                      ? 'text-white/90 hover:bg-white/10 hover:text-white'
                      : 'text-foreground/90 hover:bg-muted hover:text-primary'
                )}
              >
                {t('nav.sustainability')}
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button asChild>
                <Link to="/contact">{t('nav.requestQuote')}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile: Single row header */}
        <div className="flex lg:hidden h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary" aria-hidden="true" />
            <span className="text-lg font-bold text-foreground">{shortBrand}</span>
          </Link>

          <div className="flex items-center space-x-2">
            <GlobalSearch />
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
