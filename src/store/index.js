import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defaultCity = '北京'
try {
  // 如果用户关闭了本地存储功能, 此时在外层加个 try...catch
  if (!defaultCity) {
    defaultCity = JSON.parse(window.localStorage.getItem('defaultCity'))
  }
  // eslint-disable-next-line no-empty
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity,
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        window.localStorage.setItem('defaultCity', JSON.stringify(state.city))
        // 数据改变的时候把数据拷贝一份保存到localStorage里面
        // eslint-disable-next-line no-empty
      } catch (e) {}
    },
  },
})
