import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import pt from "javascript-time-ago/locale/pt.json";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/translations.json",
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(pt);

export default i18n;
