<template>
  <div>
    <h1>emitOn:</h1>
    <h2 @click="changeTitle">{{ child }}</h2>
  </div>
</template>

<script>
export default {
  name: 'emitOn',
  data() {
    return {
      child: '我是子组件传递的内容',
    }
  },
  methods: {
    changeTitle() {
      this.$emit('titleChanged', this.child)
    },
  },
}
</script>

<style lang="scss" scoped></style>
