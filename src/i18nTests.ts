import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";

const backend = new Backend({
   loadPath: '/locales/{{lng}}/translation.json'
 });

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    backend: backend,
    interpolation: {
      escapeValue: false
    },
    resources: { en: { translationsNS: {} } },
  });

export default i18n;