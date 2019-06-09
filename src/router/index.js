import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history', // 使用 history 模式, 部署有路径问题
  routes
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})
router.afterEach(() => {
  console.log('afterEach')
})

export default router
