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
        .replace(
          /<link href="(.*?)" rel="stylesheet">/g,
          `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="$1"></noscript>`
        )
        .replace(
          /<link rel="stylesheet" (.*?)>/g,
          `<link rel="preload" $1 as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" $1></noscript>`
        )
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
    config.optimization = {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        // minSize: 120000,
        maxSize: 500_000,
      }
    }
  },
  pluginOptions: {
    sitemap: {
      baseURL: 'https://leto.andreasnicklaus.de',
      routes,
    }
  }
})
