import Vue from 'vue'
import stule from './styles/style.css';
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css' // библиотека иконок mdi - https://mervick.github.io/material-design-icons/
import router from './router'
import store from './store/index.js'
import dStore from '@/data/store.js'
import ConfirmDialog from './components/Dialog/ConfirmDialog.vue' // глобальный компонент 
import LoginDialog from './components/Dialog/LoginDialog.vue' // глобальный компонент 

Vue.config.productionTip = false
Vue.prototype.$dStore = dStore //объявление глобальной переменной

Vue.component('ConfirmDialog', ConfirmDialog);
Vue.component('LoginDialog', LoginDialog);

//console.log(store)
new Vue({
  stule,
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')