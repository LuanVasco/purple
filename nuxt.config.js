export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'purplev2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/loader',
      '~/components/banner',
      '~/components/box',
      '~/components/card',
      '~/components/carrousel',
      '~/components/menu',
      '~/components/modals',
      '~/components/produto',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'http://purple-ecommerce.herokuapp.com',
    headers: {
      "Content-Type": "application/json",
    },
  },

  webfontloader: {
    google: {
      families: ['Roboto:300,400,700,900'] //Loads Lato font with weights 400 and 700
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
