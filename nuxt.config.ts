// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/style1.css', '~/assets/css/style2.css', '~/assets/css/style3.css'],
  nitro: {
    prerender: {
      failOnError: false, 
    },
  },
})
