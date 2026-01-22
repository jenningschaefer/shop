/**
 * @file nuxt.config.ts
 * @description Nuxt 3 configuration for the Shop portfolio project
 * @author Jenning Schaefer
 * @license MIT
 */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable Nuxt 4 compatibility mode for gradual migration
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/image', '@vueuse/nuxt', '@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'de',
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'shop-locale',
      fallbackLocale: 'de',
    },
  },

  css: ['~/assets/SCSS/main.scss'],

  image: {
    provider: 'ipx',
    dir: 'public',
  },

  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: false, // Enable with `npm run typecheck` for CI/production builds
  },

  compatibilityDate: '2024-07-11',
})
