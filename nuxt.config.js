module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '技術書典04新刊「Nuxt tech book」 2018/04/22 (か27) にて頒布！',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'og:locale', content: 'ja_JP' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: '技術書典04新刊「Nuxt tech book」 2018/04/22 (か27) にて頒布！' },
      { name: 'og:image', content: `https://potato4d.github.io/tbf04/ogp.png` },
      { name: 'og:image:secure_url', content: `https://potato4d.github.io/tbf04/ogp.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: '技術書典04新刊「Nuxt tech book」 2018/04/22 (か27) にて頒布！' },
      { name: 'twitter:image', content: `https://potato4d.github.io/tbf04/ogp.png`},
      { name: 'twitter:creator', content: '@potato4d' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'normalize.css/normalize.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-63818166-22'
    }]
  ],
  router: {
    base: '/tbf04/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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
