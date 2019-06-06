<template>
  <div>
    <h2>componentA</h2>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'componentA',
  data() {
    return {
      title: 'vue.js'
    }
  },
  methods: {
    sayHello() {
      // window.alert('Hello')
      console.log('hello')
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
</style>
