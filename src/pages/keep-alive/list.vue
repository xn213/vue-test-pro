<template>
  <div class="list">
    <h1>list</h1>
    <ul>
      <li
        v-for="(item, index) in lists"
        :key="index"
        @click="$router.push({ name: 'detail', params: { id: item } })"
        class="list-item flex"
      >
        <div class="flex justify-ct">{{ item }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data: () => ({
    lists: []
  }),
  methods: {},
  mounted() {
    setTimeout(() => {
      this.lists = ['😨', '🤡', '👻', '👩', '💖']
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
</style>
