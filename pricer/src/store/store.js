import Vue from 'vue'
import Vuex from 'vuex'
import drawer from './modules/drawer'
import news from './modules/news'
import services from './modules/servises'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    drawer,
    news,
    services
  }
})
