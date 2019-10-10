<template>
  <div class="detail">
    <h1>detail</h1>
    <span v-text="$route.params.id"></span>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
</style>
