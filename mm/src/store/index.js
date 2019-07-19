import Vue from 'Vue'
import Vuex from 'Vuex'
import shopList from './moduls/shopList.js'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    shopList
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})