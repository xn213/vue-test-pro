<template>
  <div class="index">
    <h1>index</h1>
    <div class="tab flex">
      <span
        v-for="tab in tabs"
        v-text="tab"
        :key="tab"
        class="tab-item flex-1"
      ></span>
    </div>
    <h3>推荐</h3>
    <div
      @click="$router.push({ name: 'list' })"
      v-for="n in 6"
      :key="n"
      class="cover-item them-bg"
    >
      {{ n }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      tabs: ['我的', '发现', '朋友', '视频']
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
