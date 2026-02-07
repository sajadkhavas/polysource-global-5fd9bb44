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
        "mb-6 py-2 px-4 rounded-lg bg-muted/60 border border-border/50 inline-flex",
        isRTL ? "text-right" : "text-left",
        className
      )}
    >
      <ol className={cn("flex flex-wrap items-center gap-2 text-sm", isRTL && "flex-row-reverse")}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const text = item.label ?? (item.labelKey ? t(item.labelKey) : "");

          return (
            <li key={item.to} className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
              {!isLast ? (
                <>
                  <Link
                    to={item.to}
                    className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors font-medium"
                  >
                    {text}
                  </Link>
                  <Separator className="h-4 w-4 text-muted-foreground/50" />
                </>
              ) : (
                <span className="font-semibold text-foreground">{text}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
