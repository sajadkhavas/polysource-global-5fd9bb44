import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'compact';
}

const languages = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'ar', label: 'العربية', shortLabel: 'AR', className: 'font-arabic' },
];

export function LanguageSwitcher({ className, variant = 'default' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLangBase = i18n.resolvedLanguage || i18n.language || 'en';
  const currentLang: 'en' | 'ar' = currentLangBase.startsWith('ar') ? 'ar' : 'en';

  const changeLanguage = (lang: 'en' | 'ar') => {
    if (lang === currentLang) return;

    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-1', className)}>
        {languages.map((lang, index) => (
          <div className="flex items-center" key={lang.code}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => changeLanguage(lang.code as 'en' | 'ar')}
              aria-pressed={currentLang === lang.code}
              className={cn(
                'px-2 text-xs font-medium',
                lang.className,
                currentLang === lang.code ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              )}
            >
              {lang.shortLabel}
            </Button>
            {index < languages.length - 1 && <span className="mx-1 text-muted-foreground/50">|</span>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={currentLang === lang.code ? 'default' : 'outline'}
          size="sm"
          onClick={() => changeLanguage(lang.code as 'en' | 'ar')}
          aria-pressed={currentLang === lang.code}
          className={cn('text-xs', lang.className, currentLang === lang.code && 'bg-primary text-primary-foreground')}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
