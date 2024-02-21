// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ["en", "bg"],
    defaultLocale: "bg",
    localeDetection: false, // Disable automatic locale detection if it's causing issues
  },
  react: {
    useSuspense: false, // Disable Suspense for now
  },
}
