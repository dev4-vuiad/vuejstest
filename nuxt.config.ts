// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/style1.css',
    '~/assets/css/style2.css',
    '~/assets/css/style3.css',
    '~/assets/css/style.css'
  ],
  nitro: {
    prerender: {
      failOnError: false, 
    },
  },
  app: {
    head: {
      title: '코코아티비 :: KOKOA.TV &#8211; 최신영화,드라마,예능 무료 다시보기사이트 :: 코코아티비',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-36x36.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-300x300.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https://image002.modooup.com/wp-content/uploads/2023/03/ms-icon-310x310-1-300x300.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800%7cOpen+Sans:400,600,700&#038;subset=latin%2Clatin-ext'
        }
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.7.0.min.js"
        },
        {
          src: "https://image002.modooup.com/wp-content/themes/vodi/assets/js/embla-carousel.umd.js?ver=1692290764"
        },
        {
          src: "_nuxt/assets/js/ads.js"
        },
        {
          src: "_nuxt/assets/js/header_ads.js",
          async: true
        },
        {
          src: "_nuxt/assets/js/footer_ads.js",
          body: true
        }
      ]
    }
  }
})
