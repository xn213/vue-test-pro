// F 组件
<template functional>
  <div class="border2">
    <h3 :style="{ color: injections.theme.color }">F 组件</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
</style>
