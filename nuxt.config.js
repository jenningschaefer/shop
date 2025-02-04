// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    '@nuxt/ui'
  ],

  css: ['~/assets/SCSS/main.scss'],

  image: {
    provider: 'netlify',
    netlify: {
      baseURl: process.env.IMAGES_URL
    }
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-07-11"
})