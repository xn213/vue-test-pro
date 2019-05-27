<template>
  <div id="app">
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view
        :include="include"
        v-if="$route.meta.keepAlive"
      ></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      include: []
    }
  },
  watch: {
    $route(to, from) {
      // 如果to 进入的页面是需要缓存的, 就把name push 到 include 数组
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name)
      }
      // 如果要 from (离开) 的页面是 keepAlive 缓存的,
      // 再根据 deepth 来判断是前进还是后退
      // 如果是后退
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        var index = this.include.indexOf(from.name)
        index !== -1 && this.include.splice(index, 1)
      }
    }
  }
}
</script>

<style>
#app {
  padding: 21px;
}
</style>
