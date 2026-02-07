import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from '@/data/navigation';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface MegaMenuProps {
  item: NavigationItem;
  onClose: () => void;
}

export function MegaMenu({ item, onClose }: MegaMenuProps) {
  const { t } = useTranslation();
  const [activeGroupId, setActiveGroupId] = useState<string | null>(
    item.children?.[0]?.id || null
  );

  if (item.id !== 'polymer-products' || !item.children) return null;

  const activeGroup = item.children.find(group => group.id === activeGroupId);

  return (
    <div className="hidden lg:block absolute left-0 right-0 top-full bg-background border-t border-border shadow-2xl z-[100]">
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 max-w-[1400px] mx-auto">
          {/* Column 1: Product Families */}
          <div className="col-span-3 space-y-1">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 px-3">
              {t('megaMenu.productFamilies')}
            </h4>
            {item.children.map((group) => (
              <button
                key={group.id}
                onMouseEnter={() => setActiveGroupId(group.id)}
                className={cn(
                  'w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-all duration-200',
                  activeGroupId === group.id
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-foreground/70 hover:bg-primary/5 hover:text-primary'
                )}
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* Column 2: Key Materials */}
          <div className="col-span-7 border-l border-border/40 pl-8">
            {activeGroup && (
              <>
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  {activeGroup.label}
                </h4>
                {activeGroup.children && activeGroup.children.length > 0 && (
                  <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                    {activeGroup.children.map((category) => (
                      <div key={category.id} className="pb-3 border-b border-border/60">
                        <Link
                          to={category.href || '#'}
                          onClick={onClose}
                          className="group inline-flex items-center justify-between text-sm font-bold text-primary hover:bg-primary/5 transition-all w-full px-2 py-1.5 rounded-md -mx-2"
                        >
                          <span>{category.label}</span>
                          <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        {category.children && category.children.length > 0 && (
                          <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1">
                            {category.children.map((subItem) => (
                              <li key={subItem.id}>
                                <Link
                                  to={subItem.href || '#'}
                                  onClick={onClose}
                                  className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all py-1 px-2 rounded-md -mx-2"
                                >
                                  <ChevronRight className="h-3 w-3 text-border group-hover:text-primary transition-colors" />
                                  <span>{subItem.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Column 3: Help Block */}
          <div className="col-span-2 border-l border-border/40 pl-6">
            <div className="bg-muted/30 rounded-lg p-5 border border-border/60 space-y-4 h-fit sticky top-4">
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-foreground">{t('megaMenu.help.title')}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{t('megaMenu.help.description')}</p>
              </div>
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-all group px-3 py-2 rounded-md -mx-3"
              >
                {t('megaMenu.help.cta')}
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <div className="pt-3 border-t border-border/40">
                <Link
                  to="/products"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-all group px-3 py-1.5 rounded-md -mx-3"
                >
                  {t('mobileNav.browseAllProducts')}
                  <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
