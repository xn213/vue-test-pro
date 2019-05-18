<template>
  <div class="border">
    childCom2
    <p>faa: {{ faa }}</p>
    <p>childCom2的$attrs: {{ $attrs }}</p>
    <child-com3 v-bind="$attrs"></child-com3>
  </div>
</template>

<script>
import childCom3 from './childCom3'
export default {
  name: 'childCom2',
  components: { childCom3 },
  props: {
    faa: String
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  created() {
    // eslint-disable-next-line no-console
    console.log('this.$attrs: ', this.$attrs)
  }
}
</script>

<style lang="scss" scoped>
.border {
  background-color: rgba($color: red, $alpha: 0.1);
}
</style>
