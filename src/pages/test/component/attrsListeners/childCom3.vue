<template>
  <div class="border">
    <p>childCom3: {{ $attrs }}</p>
  </div>
</template>

<script>
export default {
  name: 'childCom3',
  props: {
    fbb: String,
    title: String,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.border {
  border-top: 1px solid #b45dea;
  background-color: rgba($color: blue, $alpha: 0.2);
}
</style>
