import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, Package, Info } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MobileNavProps {
  items: NavigationItem[];
  onClose: () => void;
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  const { t } = useTranslation();
  const polymerProducts = items.find(item => item.id === 'polymer-products');
  const services = items.find(item => item.id === 'services');
  const about = items.find(item => item.id === 'about');

  return (
    <div className="space-y-6">
      {/* Brand Summary */}
      <div className="px-4 py-3 bg-muted/50 rounded-lg border border-border/50">
        <p className="text-sm font-semibold text-foreground mb-1">{t('branding.name')}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{t('mobileNav.brandDescription')}</p>
        <div className="flex items-center text-xs text-muted-foreground space-x-4">
          <span><span className="font-semibold text-foreground">18+</span> {t('nav.trustBadge.countries')}</span>
          <span className="text-border">|</span>
          <span><span className="font-semibold text-foreground">12,500+</span> {t('nav.trustBadge.tonnes')}</span>
        </div>
      </div>

      {/* Browse by Product */}
      <div className="space-y-2">
        <div className="px-3">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center">
            <Package className="h-4 w-4 mr-1.5" />
            {t('mobileNav.browseByProduct')}
          </h3>
        </div>
        {polymerProducts && <MobileNavSection item={polymerProducts} onClose={onClose} />}
      </div>

      {/* More about PolySource */}
      <div className="space-y-2">
        <div className="px-3">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center">
            <Info className="h-4 w-4 mr-1.5" />
            {t('mobileNav.moreAbout')}
          </h3>
        </div>
        <div className="space-y-1">
          {services && <MobileNavSection item={services} onClose={onClose} />}
          {about && <MobileNavSection item={about} onClose={onClose} />}
          <Link to="/sustainability" onClick={onClose} className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors">
            {t('nav.sustainability')}
          </Link>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-3 pt-4 border-t border-border space-y-2">
        <Link to="/contact" onClick={onClose}>
          <Button className="w-full" size="lg">{t('nav.requestQuote')}</Button>
        </Link>
        <Link to="/products" onClick={onClose}>
          <Button variant="outline" className="w-full" size="lg">{t('mobileNav.browseAllProducts')}</Button>
        </Link>
      </div>
    </div>
  );
}

function MobileNavSection({ item, onClose }: { item: NavigationItem; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link to={item.href || '#'} onClick={onClose} className="block px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors">
        {item.label}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors">
        <span>{item.label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1 mt-1 ml-4">
        {item.children?.map((child) => (
          <MobileNavItem key={child.id} item={child} onClose={onClose} level={1} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

function MobileNavItem({ item, onClose, level }: { item: NavigationItem; onClose: () => void; level: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const paddingValue = `${level * 12}px`;

  if (!hasChildren) {
    return (
      <Link to={item.href || '#'} onClick={onClose} className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors" style={{ paddingInlineStart: paddingValue }}>
        {item.label}
      </Link>
    );
  }

  if (level >= 2) {
    return (
      <div className="space-y-1">
        <Link to={item.href || '#'} onClick={onClose} className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors" style={{ paddingInlineStart: paddingValue }}>
          {item.label}
        </Link>
        {item.children?.map((child) => (
          <Link key={child.id} to={child.href || '#'} onClick={onClose} className="block py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ paddingInlineStart: `${(level + 1) * 12}px` }}>
            {child.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-primary transition-colors" style={{ paddingInlineStart: paddingValue }}>
        <span>{item.label}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1">
        {item.children?.map((child) => (
          <MobileNavItem key={child.id} item={child} onClose={onClose} level={level + 1} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
