import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const backend = new Backend({
  loadPath: '/locales/{{lng}}/translation.json'
});

const options = {
  order: ['path', 'navigator'],
};

const supportedLanguages = ['en', 'ru']

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    backend: backend,
    supportedLngs: supportedLanguages,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;