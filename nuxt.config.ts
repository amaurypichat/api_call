import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
const path = require('path');
export default defineNuxtConfig({
  //...
  // extends: ["./xapi"], // Add this line,
  build: {
    transpile: ['vuetify'],
  },
  // nitro: {
  //   output: {
  //     publicDir: path.join(__dirname, 'kaka')
  //   }
  // },
  // target: 'static',
  // css: ['~/assets/css/main.css'],
  modules: [
    // '@nuxtjs/apollo',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  
  },
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: 'https://api.spacex.land/graphql'
  //     }
  //   },
  // },
  // apollo: {
  //   autoImports: true,
  //   authType: 'Bearer',
  //   authHeader: 'Authorization',
  //   tokenStorage: 'cookie',
  //   proxyCookies: true,
  //   clients: {}
  // }
  ssr:true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

