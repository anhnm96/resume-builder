// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  future: { compatibilityVersion: 4 },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/nuxt', '@nuxt/icon', '@pinia/nuxt', '@nuxt/fonts'],
  extends: ['./layers/editor'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    dirs: [
      {
        path: '~/components/ui',
        extensions: ['vue'],
        pathPrefix: false,
      },
      {
        path: '~/components',
        extensions: ['vue'],
      },
    ],
  },
})
