import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import fr from 'javascript-time-ago/locale/fr.json'
import nl from 'javascript-time-ago/locale/nl.json'
import pt from 'javascript-time-ago/locale/pt.json'
import ro from 'javascript-time-ago/locale/ro.json'
import zh from 'javascript-time-ago/locale/zh.json'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    supportedLngs: ['en', 'nl', 'pt', 'zh', 'ro', 'fr'],
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'i'],
    },
  })

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(nl)
TimeAgo.addLocale(pt)
TimeAgo.addLocale(zh)
TimeAgo.addLocale(ro)
TimeAgo.addLocale(fr)

export default i18n
