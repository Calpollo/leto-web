import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import 'aos/dist/aos.css';
import Aos from 'aos'
import VueMatomo from 'vue-matomo'


Vue.use(VueMatomo, {
  host: 'https://matomo.andreasnicklaus.de/',
  siteId: 2,
  router,
});


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  mounted() {
    Aos.init()
  },
  render: h => h(App)
}).$mount('#app')

window._paq.push(['trackPageView']);