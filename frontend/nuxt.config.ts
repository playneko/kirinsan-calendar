import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  nitro : {
    preset : 'github-pages',
    routeRules: {
      '/api/**': {
        cors: true,
        proxy: 'https://api.playneko.com/**'
      }
    }
  },
  app : {
    baseURL : '/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Hi+Melody&family=Kiwi+Maru:wght@300;400;500&family=Mochiy+Pop+One&family=Single+Day&display=swap' }
      ],
      meta: [
        { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
      ]
    }
  },
  ssr: false,
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'dayjs-nuxt',
    '@nuxtjs/device'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    build: {
      target: [ 'es2020', 'edge88', 'firefox78', 'chrome87', 'safari12' ]
    }
  },
  plugins: [
    {
      src: "~/plugins/v-calendar",
      mode: "client",
    }
  ],
  css: [
    "~/assets/css/common.css"
  ],
  runtimeConfig: {
    public: {
      // API URL
      apiCalendarList: "https://api.playneko.com/api/calendar/list",
      apiOptVerifyCheck: "https://api.playneko.com/api/opt/verify/check",
      apiOptVerifyAccount: "https://api.playneko.com/api/opt/verify/account",
      apiOptVerifyReSend: "https://api.playneko.com/api/opt/verify/resend",
    }
  }
})