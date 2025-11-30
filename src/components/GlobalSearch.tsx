import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useDirection } from "@/hooks/useDirection";
import { buildSearchIndex, searchItems, SearchItem } from "@/lib/searchIndex";

interface GlobalSearchProps {
  className?: string;
}

export function GlobalSearch({ className }: GlobalSearchProps) {
  const { t, i18n } = useTranslation();
  const { isRTL } = useDirection();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [index] = useState(() => buildSearchIndex());

  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || "en";
  const lang: "en" | "ar" = resolvedLanguage.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    if (!open) {
      setQuery("");
      setResults([]);
      setLoading(false);
      return;
    }

    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      const found = searchItems(query, index, lang);
      setResults(found);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, open, index, lang]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (item: SearchItem) => {
    setOpen(false);
    setQuery("");
    setResults([]);
    navigate(item.url);
  };

  return (
    <>
      {/* Desktop trigger */}
      <div
        className={cn(
          "hidden md:flex items-center gap-3 rounded-lg border bg-background/80 backdrop-blur-sm px-4 py-2.5 text-sm text-muted-foreground cursor-pointer hover:bg-background hover:border-primary/50 hover:shadow-sm transition-all duration-200",
          isRTL ? "flex-row-reverse" : "flex-row",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 opacity-70" />
        <span className="text-sm flex-1 font-medium">
          {t("search.placeholder")}
        </span>
        <kbd className="hidden lg:inline-flex h-6 select-none items-center gap-1 rounded-md border border-border/50 bg-muted/50 px-2 font-mono text-[11px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      {/* Mobile trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label={t("search.placeholderMobile")}
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={cn("sm:max-w-lg", isRTL && "text-right")}>
          <DialogHeader>
            <DialogTitle>{t("search.dialogTitle")}</DialogTitle>
          </DialogHeader>

          <div className={cn("mt-2 flex items-center gap-2", isRTL && "flex-row-reverse")}>
            <Search className="h-4 w-4 opacity-60 flex-shrink-0" />
            <Input
              autoFocus
              placeholder={t("search.inputPlaceholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={isRTL ? "text-right" : ""}
            />
          </div>

          <div className="mt-3">
            {loading && (
              <div className={cn("flex items-center gap-2 text-xs text-muted-foreground", isRTL && "flex-row-reverse")}>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("search.searching")}
              </div>
            )}

            {!loading && query.trim() && results.length === 0 && (
              <p className="text-xs text-muted-foreground">{t("search.noResults")}</p>
            )}

            {!loading && results.length > 0 && (
              <ScrollArea className="max-h-80">
                <ul className="space-y-1">
                  {results.map((item) => {
                    const title = lang === "ar" ? item.title_ar || item.title_en : item.title_en;
                    const description = lang === "ar" ? item.description_ar || item.description_en : item.description_en;

                    const typeLabel =
                      item.type === "product"
                        ? t("search.typeProduct")
                        : item.type === "resource"
                        ? t("search.typeResource")
                        : t("search.typeBlog");

                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => handleSelect(item)}
                          className={cn(
                            "w-full rounded-md px-3 py-2 text-left hover:bg-muted transition-colors",
                            isRTL && "text-right"
                          )}
                        >
                          <div className={cn("flex items-center gap-2 mb-1", isRTL && "flex-row-reverse justify-end")}>
                            <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                              {typeLabel}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-foreground line-clamp-1">
                            {title}
                          </div>
                          {description && (
                            <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                              {description}
                            </div>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
