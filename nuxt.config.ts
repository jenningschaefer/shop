/**
 * @file nuxt.config.ts
 * @description Nuxt 3 configuration for the Shop portfolio project
 * @author Jenning Schaefer
 * @license MIT
 */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],

  css: ['~/assets/SCSS/main.scss'],

  image: {
    provider: 'ipx',
  },

  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: false, // Enable with `npm run typecheck` for CI/production builds
  },

  compatibilityDate: '2024-07-11',
})
