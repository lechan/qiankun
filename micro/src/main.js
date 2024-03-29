import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import appRoutes from './router'
import store from './store'
import './public-path'

Vue.config.productionTip = false

let router = null
let instance = null
function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    // mode: 'history',
    appRoutes
  })
  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap (props = {}) {
  // console.log('[vue] vue app bootstraped')
  // 将主应用的store和utils挂载到实例上
  Vue.prototype.$mainStore = props.store
  Vue.prototype.$mainUtils = props.utils
}
export async function mount (props) {
  // console.log('[vue] props from main framework', props)
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState
  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
