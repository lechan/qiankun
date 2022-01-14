import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import { registerMicroApps, start, initGlobalState } from 'qiankun'

Vue.config.productionTip = false
const initialState = {
  user: {} // 用户信息
}
const actions = initGlobalState(initialState)
Vue.prototype.$actions = actions

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
    activeRule: getActiveRule('#/app-vue'),
    props: {
      store,
      utils
    }
  }
])
start({
  sandbox: {
    strictStyleIsolation: true
  }
})
