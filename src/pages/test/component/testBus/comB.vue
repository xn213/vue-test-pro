<template>
  <div>
    <h3>A组件: {{ age }}</h3>
    <button @click="send">将数据发送给 C 组件</button>
  </div>
</template>

<script>
export default {
  name: 'comB',
  data() {
    return {
      age: 24,
    }
  },
  methods: {
    send() {
      this.$root.bus.$emit('data-b', this.age)
    },
  },
}
</script>

<style lang="scss" scoped></style>
