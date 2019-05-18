<template>
  <div>
    <h3>C组件: {{ name }} {{ age }}</h3>
  </div>
</template>

<script>
export default {
  name: 'comC',
  data() {
    return {
      name: '',
      age: ''
    }
  },
  mounted() {
    this.$root.bus.$on('data-a', name => {
      this.name = name
    })
    this.$root.bus.$on('data-b', age => {
      this.age = age
    })
  }
}
</script>

<style lang="scss" scoped></style>
