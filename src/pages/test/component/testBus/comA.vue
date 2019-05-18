<template>
  <div>
    <h3>A组件: {{ name }}</h3>
    <button @click="send">将数据发送给 C 组件</button>
  </div>
</template>

<script>
export default {
  name: 'comA',
  data() {
    return {
      name: 'tom'
    }
  },
  methods: {
    send() {
      this.$root.bus.$emit('data-a', this.name)
    }
  }
}
</script>

<style lang="scss" scoped></style>
