// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 },
  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],
  modules: ['@vueuse/nuxt', '@nuxt/icon', '@pinia/nuxt', '@unocss/nuxt', '@nuxt/fonts'],
})
