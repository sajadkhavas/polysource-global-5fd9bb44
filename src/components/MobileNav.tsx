import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, Package, Info } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  items: NavigationItem[];
  onClose: () => void;
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  const { t, i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const isRTL = resolvedLanguage.startsWith('ar');
  const polymerProducts = items.find(item => item.id === 'polymer-products');
  const services = items.find(item => item.id === 'services');
  const news = items.find(item => item.id === 'insights');
  const about = items.find(item => item.id === 'about');

  const getLabel = (item: NavigationItem) => (isRTL ? item.label.ar : item.label.en);

  return (
    <div className="space-y-6">
      {/* Brand Summary with Trust Signals */}
      <div className="px-4 py-3 bg-muted/50 rounded-lg border border-border/50">
        <p className={cn("text-sm font-semibold text-foreground mb-1", isRTL && "text-right")}
        >
          {t('branding.name')}
        </p>
        <p className={cn("text-xs text-muted-foreground leading-relaxed mb-2", isRTL && "text-right")}>
          {t('mobileNav.brandDescription')}
        </p>
        <div
          className={cn(
            "flex items-center text-xs text-muted-foreground",
            isRTL ? "justify-end space-x-reverse space-x-4" : "space-x-4"
          )}
        >
          <span>
            <span className="font-semibold text-foreground">18+</span> {t('nav.trustBadge.countries')}
          </span>
          <span className="text-border">|</span>
          <span>
            <span className="font-semibold text-foreground">12,500+</span> {t('nav.trustBadge.tonnes')}
          </span>
        </div>
      </div>

      {/* Section 1: Browse by Product */}
      <div className="space-y-2">
        <div className={cn("px-3", isRTL && "text-right")}>
          <h3
            className={cn(
              "text-xs font-bold text-foreground uppercase tracking-wider flex items-center",
              isRTL && "flex-row-reverse"
            )}
          >
            <Package className={cn("h-4 w-4", isRTL ? "ml-1.5" : "mr-1.5")} />
            {t('mobileNav.browseByProduct')}
          </h3>
        </div>
        {polymerProducts && (
          <MobileNavSection item={polymerProducts} onClose={onClose} isRTL={isRTL} getLabel={getLabel} />
        )}
      </div>

      {/* Section 2: More about PolySource */}
      <div className="space-y-2">
        <div className={cn("px-3", isRTL && "text-right")}>
          <h3
            className={cn(
              "text-xs font-bold text-foreground uppercase tracking-wider flex items-center",
              isRTL && "flex-row-reverse"
            )}
          >
            <Info className={cn("h-4 w-4", isRTL ? "ml-1.5" : "mr-1.5")} />
            {t('mobileNav.moreAbout')}
          </h3>
        </div>
        <div className="space-y-1">
          {services && <MobileNavSection item={services} onClose={onClose} isRTL={isRTL} getLabel={getLabel} />}
          {news && <MobileNavSection item={news} onClose={onClose} isRTL={isRTL} getLabel={getLabel} />}
          {about && <MobileNavSection item={about} onClose={onClose} isRTL={isRTL} getLabel={getLabel} />}
          
          <Link
            to="/sustainability"
            onClick={onClose}
            className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
          >
            {t('nav.sustainability')}
          </Link>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="px-3 pt-4 border-t border-border space-y-2">
        <Link to="/contact" onClick={onClose}>
          <Button className="w-full" size="lg">
            {t('nav.requestQuote')}
          </Button>
        </Link>
        <Link to="/products" onClick={onClose}>
          <Button variant="outline" className="w-full" size="lg">
            {t('mobileNav.browseAllProducts')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface MobileNavSectionProps {
  item: NavigationItem;
  onClose: () => void;
  isRTL: boolean;
  getLabel: (item: NavigationItem) => string;
}

function MobileNavSection({ item, onClose, isRTL, getLabel }: MobileNavSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={item.href || '#'}
        onClick={onClose}
        className="block px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
      >
        {getLabel(item)}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn(
          "flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors",
          isRTL && "flex-row-reverse"
        )}
      >
        <span>{getLabel(item)}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180",
            isRTL && "-scale-x-100"
          )}
        />
      </CollapsibleTrigger>

      <CollapsibleContent className={cn("space-y-1 mt-1", isRTL ? "mr-4" : "ml-4")}> 
        {item.children?.map((child) => (
          <MobileNavItem
            key={child.id}
            item={child}
            onClose={onClose}
            level={1}
            isRTL={isRTL}
            getLabel={getLabel}
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
  isRTL: boolean;
  getLabel: (item: NavigationItem) => string;
}

function MobileNavItem({ item, onClose, level, isRTL, getLabel }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const paddingValue = `${level * 12}px`;

  if (!hasChildren) {
    return (
      <Link
        to={item.href || '#'}
        onClick={onClose}
        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        style={{ paddingInlineStart: paddingValue }}
      >
        {getLabel(item)}
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
          style={{ paddingInlineStart: paddingValue }}
        >
          {getLabel(item)}
        </Link>
        {item.children?.map((child) => (
          <Link
            key={child.id}
            to={child.href || '#'}
            onClick={onClose}
            className="block py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            style={{ paddingInlineStart: `${(level + 1) * 12}px` }}
          >
            {getLabel(child)}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn(
          "flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-primary transition-colors",
          isRTL && "flex-row-reverse"
        )}
        style={{ paddingInlineStart: paddingValue }}
      >
        <span>{getLabel(item)}</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform",
            isOpen && "rotate-180",
            isRTL && "-scale-x-100"
          )}
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-1">
        {item.children?.map((child) => (
          <MobileNavItem
            key={child.id}
            item={child}
            onClose={onClose}
            level={level + 1}
            isRTL={isRTL}
            getLabel={getLabel}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
