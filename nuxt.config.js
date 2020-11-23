const pkg = require('./package')
module.exports = {
  mode: 'universal',
  router: {
    base: '/marsel/'
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet',  href: 'font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap'},
      { rel: 'stylesheet',  href: 'css/datapicker.min.css'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css'}
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-2.0.2.min.js",        
        type: "text/javascript"
      },
      {
        src: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js",
        type: "text/javascript"
      },
      {
        src: "js/datapicker.js",
        type: "text/javascript"
      },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js", type: "text/javascript"},
    ]
  },
  meta: {
    description: 'Марсель - ресторан национальной, французской, итальянской и тайской кухни',
    author: 'Yulia Gavryshkova',
    name: 'Марсель',
    lang: 'ru',
    title: 'Марсель'  
  },

  loading: { color: '#000000' },

  css: [
    {
      src: '~/assets/main.scss',
      lang: 'scss'
    }
  ],

  plugins: [
  ],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage    
    // 'nuxt-vuex-localstorage',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

