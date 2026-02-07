import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DesktopDropdownProps {
  item: NavigationItem;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isActive: (href: string) => boolean;
  isTransparent?: boolean;
}

export function DesktopDropdown({ item, isOpen, onOpenChange, isActive, isTransparent = false }: DesktopDropdownProps) {
  const isParentActive = isActive(item.href || '');
  const isAnyChildActive = item.children?.some(child => isActive(child.href || ''));
  const isItemActive = isParentActive || isAnyChildActive;

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        to={item.href || '#'}
        className={cn(
          'text-sm font-semibold transition-colors px-4 py-2 rounded-md',
          isActive(item.href || '')
            ? 'bg-primary/10 text-primary'
            : isTransparent
              ? 'text-white/90 hover:bg-white/10 hover:text-white'
              : 'text-foreground/90 hover:bg-muted hover:text-primary'
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => onOpenChange(true)} onMouseLeave={() => onOpenChange(false)}>
      <Link
        to={item.href || '#'}
        className={cn(
          'flex items-center text-sm font-semibold transition-colors px-4 py-2 rounded-md',
          isItemActive
            ? 'bg-primary/10 text-primary'
            : isTransparent
              ? 'text-white/90 hover:bg-white/10 hover:text-white'
              : 'text-foreground/90 hover:bg-muted hover:text-primary'
        )}
      >
        {item.label}
        <ChevronDown className={cn('h-3.5 w-3.5 ml-1 transition-transform', isOpen && 'rotate-180')} />
      </Link>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 min-w-[240px] bg-background border border-border shadow-xl rounded-lg z-[60] py-2">
          {item.children.map((child) => (
            <Link
              key={child.id}
              to={child.href || '#'}
              onClick={() => onOpenChange(false)}
              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
