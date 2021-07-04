import Vue from 'vue'
import './plugins/meta'
import vuetify from './plugins/vuetify'
import i18n from './localization'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
