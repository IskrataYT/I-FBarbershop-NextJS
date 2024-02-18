import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Import your translation files
import common_en from "./public/locales/en/common.json"
import common_bg from "./public/locales/bg/common.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: common_en,
      },
      bg: {
        common: common_bg,
      },
    },
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: "en", // use 'en' if detected language is not available
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
