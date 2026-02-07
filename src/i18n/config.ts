import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './messages/en.json';

const resources = {
  en: { translation: en }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
