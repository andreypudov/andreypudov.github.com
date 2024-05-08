import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const backend = new Backend({
  loadPath: "/locales/{{lng}}/translation.json",
});

const options = {
  order: ["path", "navigator"],
};

const supportedLanguages = ["en"];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    detection: options,
    backend: backend,
    supportedLngs: supportedLanguages,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
