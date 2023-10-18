// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/device',
    'nuxt-multi-cache',
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    meta: {
      title: 'BMYTV.COM APP',
      ogSiteName: 'BMYTV.COM APP',
      mobileAppIOS: true,
      mobileApp: true,
      appleStatusBarStyle: 'black-translucent'
    }
  },
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
      htmlAttrs: {
        translate: 'no'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-36x36.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-300x300.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-300x300.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800%7cOpen+Sans:400,600,700&#038;subset=latin%2Clatin-ext'
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
          href: '/css/style3.css?hhhh'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css?hrhyee'
        },
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
      apiBaseUrl: 'https://backend.bmytv.com/api',
      apiBaseUrlSsr: 'https://backend.bmytv.com/api'
    }
  },
  $production: {
    appConfig: {
      apiBaseUrl: 'https://backend.bmytv.com/api',
      apiBaseUrlSsr: 'http://localhost/api'
    },
    app: {
      head: {
        script: [
          {
            children: 'window.__ITGS_started = Date.now();'
          },
          {
            src: '//scripts.kiosked.com/loader/kiosked-loader.js?site=17622',
            async: true
          }
        ]
      }
    }
  }
})
