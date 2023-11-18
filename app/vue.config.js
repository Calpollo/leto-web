const { defineConfig } = require('@vue/cli-service')
const routes = require('./src/router/routes');
const PrerenderSpaPlugin = require('@dreysolano/prerender-spa-plugin');
const path = require('path');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: routes.filter(r => r.meta?.prerender).map(r => r.path),
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      inject: {},
      renderAfterElementExists: '[data-view]',
    }),
    postProcess: (renderedRoute) => {
      renderedRoute.html = renderedRoute.html
        .replace(/<script (.*?)>/g, '<script $1 defer>')
        .replace('id="app"', 'id="app" data-server-rendered="true"');

      return renderedRoute;
    }
  })
];

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
    }
  },
  pluginOptions: {
    sitemap: {
      baseURL: 'https://leto.andreasnicklaus.de',
      routes,
    }
  }
})
