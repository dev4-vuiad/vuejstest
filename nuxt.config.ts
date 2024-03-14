// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/device',
    'nuxt-multi-cache',
    ['@nuxtjs/robots', { configPath: "~/robots.config" }],
    'nuxt-simple-sitemap'
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
        { rel: 'icon', type: 'image/x-icon', href: 'https://image-cdn.imedia10.com/bmytv-images/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://image-cdn.imedia10.com/bmytv-images/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://image-cdn.imedia10.com/bmytv-images/android-chrome-192x192.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://image-cdn.imedia10.com/bmytv-images/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: '/css/fonts.css?dsgsh'
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
          href: '/css/style3.css?wehthwfedhw'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css?sbdhsdgw'
        },
        {
          rel: 'stylesheet',
          href: '/css/watch.css?dsgwetw'
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
      apiBaseUrl: 'https://backend.imedia10.com/api',
      apiBaseUrlSsr: 'https://backend.imedia10.com/api'
    },
    app: {
      head: {
        script: [
          {
            children: 'window.__ITGS_started = Date.now();'
          },
          {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-RBNNDYDZS1',
            async: true
          },
          {
            children: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}; gtag('js', new Date());gtag('config', 'G-RBNNDYDZS1');"
          }
        ]
      }
    }
  }
})
