
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
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDGWzKfQ5D1fUu0IwPNGCfNEKn2HNl4tw4',
          authDomain: 'kontora-acd10.firebaseapp.com',
          databaseURL: 'https://kontora-acd10-default-rtdb.europe-west1.firebasedatabase.app',
          projectId: 'kontora-acd10',
          storageBucket: 'kontora-acd10.appspot.com',
          messagingSenderId: '772230532670',
          appId: '1:772230532670:web:6982593bded3afeb2d8b6f',
        },
        services: {
          firestore: true,
          auth: true,
        },
      }
    ]
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
};
