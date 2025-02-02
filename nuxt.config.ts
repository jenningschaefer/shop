// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image-edge", "@vueuse/nuxt", '@nuxt/ui', "@nuxt/image"],

  css: ['~/assets/SCSS/main.scss'],

  devtools: { enabled: true },
  compatibilityDate: "2024-07-11"
})