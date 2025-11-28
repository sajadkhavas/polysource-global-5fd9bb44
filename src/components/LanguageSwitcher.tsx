import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export function LanguageSwitcher({ className, variant = 'default' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    
    // Update document direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update URL for SEO (optional - change path)
    const newPath = lang === 'ar' ? '/ar' : '/';
    if (window.location.pathname !== newPath && window.location.pathname !== '/ar' + window.location.pathname) {
      // Don't navigate, just update the state
    }
  };

  // Set initial direction on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng') || 'en';
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang;
  }, []);

  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center gap-1", className)}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => changeLanguage('en')}
          className={cn(
            "px-2 text-xs font-medium",
            currentLang === 'en' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
          )}
        >
          EN
        </Button>
        <span className="text-muted-foreground/50">|</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => changeLanguage('ar')}
          className={cn(
            "px-2 text-xs font-medium font-arabic",
            currentLang === 'ar' ? 'text-primary bg-primary/10' : 'text-muted-foreground'
          )}
        >
          العربية
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant={currentLang === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className={cn(
          "text-xs",
          currentLang === 'en' && 'bg-primary text-primary-foreground'
        )}
      >
        English
      </Button>
      <Button
        variant={currentLang === 'ar' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('ar')}
        className={cn(
          "text-xs font-arabic",
          currentLang === 'ar' && 'bg-primary text-primary-foreground'
        )}
      >
        العربية
      </Button>
    </div>
  );
}
