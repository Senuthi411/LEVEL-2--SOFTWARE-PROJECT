import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { loadLanguage, saveLanguage } from '../services/settingsStorage';
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

function isAppLanguage(value: string | null): value is AppLanguage {
  return value === 'en' || value === 'si' || value === 'ta';
}

// Call once at app start: applies the language saved on this device.
export async function restoreLanguage(): Promise<void> {
  const saved = await loadLanguage();
  if (isAppLanguage(saved) && saved !== i18n.language) {
    await i18n.changeLanguage(saved);
  }
}

// Use this (not i18n.changeLanguage) when the user picks a language.
export async function setAppLanguage(code: AppLanguage): Promise<void> {
  await i18n.changeLanguage(code);
  await saveLanguage(code);
}

export default i18n;
