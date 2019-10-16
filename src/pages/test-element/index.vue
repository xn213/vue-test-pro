<template>
  <div class="test-element-ui">
    <xn-transition />
    <!-- 组件 -->
    <div class="component p21">
      <h3>二、组件</h3>
    </div>

    <xn-layout />
    <xn-container />
  </div>
</template>

<script>
import xnTransition from './components/transition'
import xnLayout from './components/layout'
import xnContainer from './components/container'
export default {
  name: 'el-ui',
  data: () => ({}),
  components: {
    xnTransition,
    xnLayout,
    xnContainer,
  },
}
</script>

<style lang="scss" scoped>
$i1: 21px;
.p21 {
  padding: $i1 0;
}
.pt {
  padding-top: $i1;
}
.pb {
  padding-bottom: $i1;
}
.test-element-ui {
  padding: $i1;
  h4,
  h5 {
    margin-top: $i1;
  }
  .wrapper {
    padding-bottom: $i1;
    border-bottom: 1px solid #ebebeb;
  }
}
</style>
