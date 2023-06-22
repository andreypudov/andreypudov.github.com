import i18n from 'i18next';
import Backend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

const backend = new Backend({
  loadPath: '/locales/{{lng}}/translation.json'
});

const supportedLanguages = ['en', 'ru']

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    backend: backend,
    supportedLngs: supportedLanguages,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: { en: { }, ru: { } },
  });

export default i18n;