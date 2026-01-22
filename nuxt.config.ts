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
    dir: 'public/img',
  },

  devtools: { enabled: true },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: '2024-07-11',
})
