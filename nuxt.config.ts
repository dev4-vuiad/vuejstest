// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-lazy-load',
    '@nuxtjs/device'
  ],
  lazyLoad: {
    images: true,
    appendClass: 'lazyload',
    loadedClass: 'lazyloaded'
  },
  nitro: {
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
          href: '/_nuxt/assets/css/style1.css'
        },
        {
          rel: 'stylesheet',
          href: '/_nuxt/assets/css/style2.css'
        },
        {
          rel: 'stylesheet',
          href: '/_nuxt/assets/css/style3.css'
        },
        {
          rel: 'stylesheet',
          href: '/_nuxt/assets/css/style.css'
        },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.7.0.min.js"
        },
        {
          src: "https://image002.modooup.com/wp-content/themes/vodi/assets/js/embla-carousel.umd.js?ver=1692290764"
        },
        {
          src: "https://image002.modooup.com/wp-content/themes/vodi/assets/js/slick.min.js?ver=1.2.7"
        },
        {
          src: 'https://image002.modooup.com/wp-content/themes/vodi/assets/js/scrollup.min.js?ver=1.2.7'
        },
        {
          src: 'https://image002.modooup.com/wp-content/themes/vodi/assets/js/jquery.easing.min.js?ver=1.2.7'
        },
        {
          children: 'window.__ITGS_started = Date.now();'
        },
        // {
        //   src: "https://scripts.kiosked.com/loader/kiosked-loader.js?site=17622",
        //   async: true
        // },
        // {
        //   children: '!function(t,e){t.setAttribute("async","async"),t.setAttribute("type","text/javascript"),t.setAttribute("src","//scripts.kiosked.com/loader/kiosked-loader.js?site=17622"),e.document.body.appendChild(t)}(window.top.document.createElement("script"),window.top);',
        // }
      ]
    }
  }
})
