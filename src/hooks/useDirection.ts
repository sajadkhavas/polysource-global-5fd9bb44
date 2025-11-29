import { useTranslation } from 'react-i18next';

export function useDirection() {
  const { i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const isRTL = resolvedLanguage.startsWith('ar');
  const dir = isRTL ? 'rtl' : 'ltr';

  return { isRTL, dir };
}
