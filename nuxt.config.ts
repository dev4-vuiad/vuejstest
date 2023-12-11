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
        { rel: 'icon', type: 'image/x-icon', href: '/images/bmytv_icon.png', sizes: '48x59' },
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
          href: '/css/style3.css?htrwrfw'
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css?fedshttwqj'
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
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-SHE23J6734'
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
      apiBaseUrlSsr: 'https://backend.bmytv.com/api'
    },
    app: {
      head: {
        script: [
          {
            children: 'window.__ITGS_started = Date.now();'
          }
        ]
      }
    }
  }
})
