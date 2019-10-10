<template>
  <div>
    <com-a></com-a>
  </div>
</template>

<script>
const comA = () => import('./comA')
export default {
  name: '',
  components: { comA },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
