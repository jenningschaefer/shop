/**
 * @file nuxt.config.ts
 * @description Nuxt 3 configuration for the Shop portfolio project
 * @author Jenning Schaefer
 * @license MIT
 */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable Nuxt 5 compatibility mode for future-proofing
  // https://nuxt.com/docs/4.x/getting-started/upgrade#testing-nuxt-5
  future: {
    compatibilityVersion: 5,
  },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-auth-utils',
  ],

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

  runtimeConfig: {
    // nuxt-auth-utils seals the session cookie with session.password. Declaring
    // it here makes the NUXT_SESSION_PASSWORD env override explicit and bakes
    // the value at build time — belt-and-suspenders for serverless hosts
    // (Netlify) where the runtime env override can otherwise be missed.
    session: {
      password: process.env.NUXT_SESSION_PASSWORD || '',
    },
  },

  image: {
    // Netlify sets NETLIFY=true during its build. There, use the Netlify Image
    // CDN (edge optimization, no sharp/serverless function needed). Locally and
    // on other Node hosts, keep IPX so `nuxt dev`/`node` builds work unchanged.
    provider: process.env.NETLIFY ? 'netlify' : 'ipx',
    dir: 'public',
  },

  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: false, // Enable with `npm run typecheck` for CI/production builds
  },

  compatibilityDate: '2024-07-11',
})
