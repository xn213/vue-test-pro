<template>
  <div>
    <h1>{{ title }}</h1>
    <emit-on v-on:titleChanged="updateTitle"></emit-on>
    <hr />

    <test-bus></test-bus>
    <hr />

    <h2>vuex store:</h2>
    <h3 @click="getCity">{{ city }}</h3>
    <hr />

    <attrs-listeners></attrs-listeners>
    <hr />

    <provide-inject ref="aaa"></provide-inject>
    <hr />

    <componentA ref="componentAA"></componentA>
  </div>
</template>

<script>
// vue组件间六种 通信方式
// props  $emit/$on  vuex  $parent/$children  $attrs/$listeners  provide/inject

const emitOn = () => import('./component/emitOn.vue')
const testBus = () => import('./component/testBus')

/**
 * 如上图所示$attrs表示没有继承数据的对象，格式为{属性名：属性值}。
 * Vue2.4提供了$attrs , $listeners 来传递数据与事件，跨级组件之间的通讯变得更简单。
 * 简单来说：$attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners里存放的是父组件中绑定的非原生事件。
 */
const attrsListeners = () => import('./component/attrsListeners')
const provideInject = () => import('./component/provideInject')

/**
 * 缺陷: 无法跨级和在兄弟组件间通信
 * // parent.vue
 * <component-a></component-a>
 * <component-b></component-b>
 * <component-b></component-b>
 */
// const  = () => import('./component/provideInject/componentA')
import componentA from './component/provideInject/componentA'

import { getRandomUsersApi } from 'api/randomUsersApi'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Test',
  components: { emitOn, testBus, attrsListeners, provideInject, componentA },
  data() {
    return {
      title: '父组件的值,点击子组件将会改变',
      randomUserParams: {
        results: 21,
        inc: 'gender,email,phone,cell,nat'
      }
    }
  },
  created() {
    this.changeCity('上海'), this.getRandomUsers()
  },
  mounted() {
    const componentAA = this.$refs.componentAA
    // eslint-disable-next-line no-console
    console.log(this.$children[0].title, componentAA.title)
    componentAA.sayHello() // 弹窗
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    // 方法二: $eimt/$on or eventBus
    updateTitle(e) {
      this.title = e
    },
    // 方法三: vuex
    ...mapMutations(['changeCity']),
    getCity() {
      this.changeCity('杭州')
    },
    // test api of randomUsersApi
    async getRandomUsers() {
      let randomUsers = await getRandomUsersApi(this.randomUserParams)
      console.log('randomUsers: ', randomUsers)
    }
  }
}
</script>

<style lang="scss" scoped></style>
