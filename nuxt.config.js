
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Контора — айдентика, сайты, приложения, реклама и контент для соцсетей',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: 'Создаём и продвигаем бренды, проектируем интерфейсы, дизайним и программируем приложения и сайты', }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico', }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0055FF', },
  /*
  ** Global CSS
  */
  css: [
    { src: '~static/style.css', }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      'gsap'
    ],
  },
}
