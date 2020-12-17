import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' 
//import './plugins/axios'


//para cambiar la direccion de la API solo falta 
//modificar el BASEURL con la direccion de la API nueva

const base = axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.prototype.$http = base;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
