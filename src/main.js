import Vue from 'vue'
import App from './App.vue'
import './style/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

import bus from './module/Bus'
import store from './store'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import waves from '@/directive/waves'

Vue.directive('waves', waves)

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  data() {
    return {
      bus,
    }
  },
  store,
  router,
  render: h => h(App),
}).$mount('#app')
