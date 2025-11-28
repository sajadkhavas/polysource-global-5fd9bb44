import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, Package, Info } from 'lucide-react';
import { useState } from 'react';

interface MobileNavProps {
  items: NavigationItem[];
  onClose: () => void;
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  const polymerProducts = items.find(item => item.id === 'polymer-products');
  const services = items.find(item => item.id === 'services');
  const news = items.find(item => item.id === 'insights');
  const about = items.find(item => item.id === 'about');

  return (
    <div className="space-y-6">
      {/* Brand Summary with Trust Signals */}
      <div className="px-4 py-3 bg-muted/50 rounded-lg border border-border/50">
        <p className="text-sm font-semibold text-foreground mb-1">
          PolySource Global
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">
          Recycled-first polymer &amp; raw material supply from Dubai
        </p>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <span><span className="font-semibold text-foreground">18+</span> countries</span>
          <span className="text-border">|</span>
          <span><span className="font-semibold text-foreground">12,500+</span> tonnes/year</span>
        </div>
      </div>

      {/* Section 1: Browse by Product */}
      <div className="space-y-2">
        <div className="px-3">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center">
            <Package className="h-4 w-4 mr-1.5" />
            Browse by Product
          </h3>
        </div>
        {polymerProducts && (
          <MobileNavSection item={polymerProducts} onClose={onClose} />
        )}
      </div>

      {/* Section 2: More about PolySource */}
      <div className="space-y-2">
        <div className="px-3">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center">
            <Info className="h-4 w-4 mr-1.5" />
            More about PolySource
          </h3>
        </div>
        <div className="space-y-1">
          {services && <MobileNavSection item={services} onClose={onClose} />}
          {news && <MobileNavSection item={news} onClose={onClose} />}
          {about && <MobileNavSection item={about} onClose={onClose} />}
          
          <Link
            to="/sustainability"
            onClick={onClose}
            className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
          >
            Sustainability
          </Link>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-3 pt-4 border-t border-border space-y-2">
        <Link to="/contact" onClick={onClose}>
          <Button className="w-full" size="lg">
            Request Quote
          </Button>
        </Link>
        <Link to="/products" onClick={onClose}>
          <Button variant="outline" className="w-full" size="lg">
            Browse All Products
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface MobileNavSectionProps {
  item: NavigationItem;
  onClose: () => void;
}

function MobileNavSection({ item, onClose }: MobileNavSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={item.href || '#'}
        onClick={onClose}
        className="block px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
      >
        {item.label.en}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
      >
        <span>{item.label.en}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-1 mt-1 ml-4">
        {item.children?.map((child) => (
          <MobileNavItem
            key={child.id}
            item={child}
            onClose={onClose}
            level={1}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

interface MobileNavItemProps {
  item: NavigationItem;
  onClose: () => void;
  level: number;
}

function MobileNavItem({ item, onClose, level }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = level * 12;

  if (!hasChildren) {
    return (
      <Link
        to={item.href || '#'}
        onClick={onClose}
        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        {item.label.en}
      </Link>
    );
  }

  // For items with children, show as collapsible only if level is reasonable
  if (level >= 2) {
    // Flatten deeper levels - just show as links
    return (
      <div className="space-y-1">
        <Link
          to={item.href || '#'}
          onClick={onClose}
          className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          {item.label.en}
        </Link>
        {item.children?.map((child) => (
          <Link
            key={child.id}
            to={child.href || '#'}
            onClick={onClose}
            className="block py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            style={{ paddingLeft: `${paddingLeft + 12}px` }}
          >
            {child.label.en}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        <span>{item.label.en}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-1">
        {item.children?.map((child) => (
          <MobileNavItem
            key={child.id}
            item={child}
            onClose={onClose}
            level={level + 1}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
