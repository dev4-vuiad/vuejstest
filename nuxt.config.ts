// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0'
  },
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/device',
    'nuxt-multi-cache'
  ],
  multiCache: {
    route: {
      enabled: true
    },
    api: {
      enabled: true,
      prefix: '/__nuxt_multi_cache',
      authorization: 'O5ilxqx5k1ZzFMjEVr'
    }
  },
  lazyLoad: {
    images: true,
    appendClass: 'lazyload',
    loadedClass: 'lazyloaded'
  },
  nitro: {
    storage: {
      fs: {
        driver: 'fs',
        base: './.data/cache'
      }
    },
    publicAssets: [
      {
        maxAge: 60 * 60 * 24 * 365
      }
    ],
    prerender: {
      failOnError: false, 
    }
  },
  app: {
    head: {
      meta: [
        { name: 'google', content: 'notranslate' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-36x36.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-300x300.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-300x300.png' },
        {
          rel: 'stylesheet',
          href: '/css/fonts.css?dsklhg'
        },
        {
          rel: 'stylesheet',
          href: '/css/style1.css?hhhh'
        },
        {
          rel: 'stylesheet',
          href: '/css/style2.css'
        },
        {
          rel: 'stylesheet',
          href: '/css/style3.css?jjjjjjjjjjjj'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css?vasgvdsgd'
        },
        {
          rel: 'stylesheet',
          href: '/css/watch.css?fgewtwgdshssw'
        }
      ],
      script: [
        {
          src: "/js/jquery-3.7.0.min.js"
        },
        {
          src: "/js/embla-carousel.umd.js"
        },
        {
          src: "/js/slick.min.js?ver=1.2.7"
        },
        {
          src: '/js/scrollup.min.js?ver=1.2.7'
        },
        {
          src: '/js/jquery.easing.min.js'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-160268616-2'
        }
      ]
    }
  },
  $development: {
    appConfig: {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiBaseUrlSsr: 'http://127.0.0.1:8000/api'
    }
  },
  $production: {
    appConfig: {
      apiBaseUrl: 'https://backend.kokoatv.net/api',
      apiBaseUrlSsr: 'https://backend.kokoatv.net/api'
    },
    app: {
      head: {
        script: [
          {
            children: 'window.__ITGS_started = Date.now();'
          }
          // {
          //   src: 'https://cdn.jsdelivr.net/npm/disable-devtool/disable-devtool.min.js',
          //   "disable-devtool-auto": true
          // }
        ],
      }
    }
  }
})
