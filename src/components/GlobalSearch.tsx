import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { buildSearchIndex, searchItems, SearchItem } from "@/lib/searchIndex";

interface GlobalSearchProps {
  className?: string;
}

export function GlobalSearch({ className }: GlobalSearchProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [index] = useState(() => buildSearchIndex());

  useEffect(() => {
    if (!open) { setQuery(""); setResults([]); setLoading(false); return; }
    if (!query.trim()) { setResults([]); setLoading(false); return; }

    setLoading(true);
    const timer = setTimeout(() => {
      const found = searchItems(query, index);
      setResults(found);
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [query, open, index]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(true); }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (item: SearchItem) => {
    setOpen(false); setQuery(""); setResults([]);
    navigate(item.url);
  };

  return (
    <>
      <div
        className={cn(
          "hidden md:flex items-center gap-3 rounded-lg border bg-background/80 backdrop-blur-sm px-4 py-2.5 text-sm text-muted-foreground cursor-pointer hover:bg-background hover:border-primary/50 hover:shadow-sm transition-all duration-200",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 opacity-70" />
        <span className="text-sm flex-1 font-medium">{t("search.placeholder")}</span>
        <kbd className="hidden lg:inline-flex h-6 select-none items-center gap-1 rounded-md border border-border/50 bg-muted/50 px-2 font-mono text-[11px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden" aria-label={t("search.placeholderMobile")} onClick={() => setOpen(true)}>
        <Search className="h-5 w-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>{t("search.dialogTitle")}</DialogTitle>
          </DialogHeader>
          <div className="mt-2 flex items-center gap-2">
            <Search className="h-4 w-4 opacity-60 flex-shrink-0" />
            <Input autoFocus placeholder={t("search.inputPlaceholder")} value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="mt-3">
            {loading && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> {t("search.searching")}
              </div>
            )}
            {!loading && query.trim() && results.length === 0 && (
              <p className="text-xs text-muted-foreground">{t("search.noResults")}</p>
            )}
            {!loading && results.length > 0 && (
              <ScrollArea className="max-h-80">
                <ul className="space-y-1">
                  {results.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleSelect(item)}
                        className="w-full rounded-md px-3 py-2 text-left hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                            {item.type === "product" ? t("search.typeProduct") : t("search.typeResource")}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-foreground line-clamp-1">{item.title}</div>
                        {item.description && (
                          <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{item.description}</div>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
