<template>
  <div>comB 中使用 inject 接收父组件 provide 的 name 值: {{ name }}</div>
</template>

<script>
export default {
  name: 'comB',
  inject: ['name'],
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.name)
  },
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
</style>
