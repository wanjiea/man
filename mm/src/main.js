// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import index from './style/index.css'
import despoke from './style/bespoke.css'
import benims from './style/denims.css'
import store from './store'

import Vuex from 'Vuex'
Vue.use(Vuex)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  index,
  despoke,
  benims,
  store,
  components: { App },
  template: '<App/>',

})
