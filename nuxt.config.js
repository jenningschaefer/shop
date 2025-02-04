// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    '@nuxt/image',
    "@vueuse/nuxt",
    '@nuxt/ui'
  ],

  css: ['~/assets/SCSS/main.scss'],

  image: {
    dir: 'public/img',
    provider: 'netlify',
    netlify: {
      baseURl: 'https://amazing-kringle-c4b6cd.netlify.app/img/'
    }
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-07-11"
})