import Vue from 'vue'
import App from './App.vue'
import './style/index.scss'

import bus from './module/Bus'
import store from './store'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  data() {
    return {
      bus
    }
  },
  store,
  router,
  render: h => h(App)
}).$mount('#app')
