<template>
  <div class="border">
    childCom1
    <p>foo: {{ foo }}</p>
    <p>childCom1的$attrs: {{ $attrs }}</p>
    <child-com2 v-bind="$attrs"></child-com2>
  </div>
</template>

<script>
import childCom2 from './childCom2'
export default {
  name: 'childCom1',
  components: { childCom2 },
  props: {
    foo: String
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
  background-color: #ccc;
  text-align: center;
}
</style>
