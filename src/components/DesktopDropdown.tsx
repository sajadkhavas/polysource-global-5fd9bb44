import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface DesktopDropdownProps {
  item: NavigationItem;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isActive: (href: string) => boolean;
}

export function DesktopDropdown({ item, isOpen, onOpenChange, isActive }: DesktopDropdownProps) {
  const { i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const isRTL = resolvedLanguage.startsWith('ar');
  const getLabel = (navItem: NavigationItem) => (isRTL ? navItem.label.ar : navItem.label.en);
  const isAnyChildActive = item.children?.some(child => isActive(child.href || ''));

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        to={item.href || '#'}
        className={cn(
          'text-sm font-semibold transition-colors px-4 py-2 rounded-md',
          isActive(item.href || '')
            ? 'bg-primary/10 text-primary'
            : 'text-foreground/90 hover:bg-muted hover:text-primary'
        )}
      >
        {getLabel(item)}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        className={cn(
          'flex items-center text-sm font-semibold transition-colors px-4 py-2 rounded-md',
          isAnyChildActive
            ? 'bg-primary/10 text-primary'
            : 'text-foreground/90 hover:bg-muted hover:text-primary',
          isRTL && 'flex-row-reverse'
        )}
      >
        {getLabel(item)}
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 transition-transform',
            isOpen && 'rotate-180',
            isRTL ? 'mr-1 -scale-x-100' : 'ml-1'
          )}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-full left-0 mt-1 min-w-[240px] bg-background border border-border shadow-xl rounded-lg z-[60] py-2',
            isRTL && 'left-auto right-0 text-right'
          )}
        >
          {item.children.map((child) => (
            <Link
              key={child.id}
              to={child.href || '#'}
              onClick={() => onOpenChange(false)}
              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {getLabel(child)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
