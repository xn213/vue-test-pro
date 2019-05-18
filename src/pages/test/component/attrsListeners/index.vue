<template>
  <div>
    <h2>attrs/listeners:</h2>
    <child-com1 :foo="foo" :faa="faa" :fbb="fbb" :fcc="fcc"></child-com1>
  </div>
</template>

<script>
import childCom1 from './childCom1'
export default {
  name: 'attrsListeners',
  components: {
    childCom1
  },
  data() {
    return {
      foo: 'Vue',
      faa: 'javascript',
      fbb: 'html5',
      fcc: 'css3',
      title: '大前端'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
