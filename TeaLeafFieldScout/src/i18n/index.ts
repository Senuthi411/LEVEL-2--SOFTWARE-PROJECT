import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { si } from './locales/si';
import { ta } from './locales/ta';

export type AppLanguage = 'en' | 'si' | 'ta';

// Language names are always shown in their own script.
export const languages: Array<{ code: AppLanguage; nativeName: string }> = [
  { code: 'si', nativeName: 'සිංහල' },
  { code: 'en', nativeName: 'English' },
  { code: 'ta', nativeName: 'தமிழ்' },
];

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    si: { translation: si },
    ta: { translation: ta },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
