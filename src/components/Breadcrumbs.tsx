import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useDirection } from "@/hooks/useDirection";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  labelKey?: string;
  label?: string;
  to: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  if (!items || items.length === 0) return null;

  const Separator = isRTL ? ChevronLeft : ChevronRight;

  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        "mb-4 text-sm text-muted-foreground",
        isRTL ? "text-right" : "text-left",
        className
      )}
    >
      <ol className={cn("flex flex-wrap items-center gap-1", isRTL && "flex-row-reverse")}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const text = item.label ?? (item.labelKey ? t(item.labelKey) : "");

          return (
            <li key={item.to} className={cn("flex items-center gap-1", isRTL && "flex-row-reverse")}>
              {!isLast ? (
                <>
                  <Link
                    to={item.to}
                    className="hover:text-foreground underline-offset-2 hover:underline transition-colors"
                  >
                    {text}
                  </Link>
                  <Separator className="h-3 w-3 opacity-50" />
                </>
              ) : (
                <span className="font-medium text-foreground">{text}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
