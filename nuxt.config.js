const pkg = require('./package')

module.exports = {
  // mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'III Simposio de Energías Renovables',//pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600,800&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
    ],
    script: [
      { src: '/fb-sdk.js' }
    ],
    plugins: [
      '~/plugins/firebase.js'
    ],
  },

  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/css/main.scss'
    ]
  },

  // css: [
  //   '@/assets/css/main.scss' // use our build, as entered via app.scss
  // ],

  /*   
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
