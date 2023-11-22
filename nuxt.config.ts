// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/device',
    'nuxt-multi-cache',
    '@sidebase/nuxt-session'
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
      redis: {
        driver: 'redis',
        db: 10,
        base: 'kokoatv_frontend_'
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
          href: '/css/fonts.css?gsderwygg'
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
          href: '/css/style3.css?fasheywtw'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css?weew'
        },
        {
          rel: 'stylesheet',
          href: '/css/watch.css?fgewtwgdshssw'
        }
      ],
      script: [
        {
          children: 'window.__ITGS_started = Date.now();'
        },
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
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-160268616-2',
          async: true
        },
        {
          src: '/js/ga.js'
        }
      ]
    }
  },
  $development: {
    appConfig: {
      apiBaseUrl: 'https://backend.kokoatv.net/api',
      apiBaseUrlSsr: 'https://backend.kokoatv.net/api'
    }
  },
  $production: {
    appConfig: {
      apiBaseUrl: 'https://backend.kokoatv.net/api',
      apiBaseUrlSsr: 'http://localhost/api'
    }
  }
})
