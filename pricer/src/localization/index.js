import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import all the language we have been define
import en from './lang/en'
import ru from './lang/ru'
import kg from './lang/kg'
import ja from './lang/ja'

Vue.use(VueI18n)
export default new VueI18n({
  locale: navigator.language.split('-')[0].toString() || process.env.VUE_APP_I18N_LOCALE.toString() || 'en', // set automatically change its language based on the browser�fs default language
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE.toString() || 'en',
  messages: {
      en,
      ru,
      kg,
      ja
  } // feed all the messages with the tall language
})
