import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? t('common.switchToLightTheme', { defaultValue: 'Switch to light theme' })
          : t('common.switchToDarkTheme', { defaultValue: 'Switch to dark theme' })
      }
      title={
        isDark
          ? t('common.switchToLightTheme', { defaultValue: 'Switch to light theme' })
          : t('common.switchToDarkTheme', { defaultValue: 'Switch to dark theme' })
      }
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
