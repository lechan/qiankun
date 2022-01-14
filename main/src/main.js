import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash)
registerMicroApps([
  {
    name: 'vueApp',
    entry: 'http://localhost:5000',
    container: '#container',
    activeRule: getActiveRule('#/app-vue')
  }
])
start({
  sandbox: {
    strictStyleIsolation: true
  }
})
