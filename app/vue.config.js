const { defineConfig } = require('@vue/cli-service')
const routes = require('./src/router/routes');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    sitemap: {
      baseURL: 'https://leto.andreasnicklaus.de',
      routes,
    }
  }
})
