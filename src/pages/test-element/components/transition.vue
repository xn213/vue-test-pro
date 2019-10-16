<template>
  <div class="xn-transition">
    <!-- 内置 transition -->
    <div class="wrapper transition-wrapper">
      <h3 class="pb">一、内置过渡动画</h3>

      <!-- fade 淡入淡出 -->
      <h5>1. transition: fade 淡入淡出 .el-fade-in-linear & .el-fade-in</h5>
      <el-button @click="fadeShow = !fadeShow">fade show</el-button>
      <div class="transition-content">
        <transition name="el-fade-in-linear">
          <div class="transition-box" v-show="fadeShow">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div class="transition-box" v-show="fadeShow">.el-fade-in</div>
        </transition>
      </div>

      <!-- zoom 缩放 -->
      <h5>
        2. transition: zoom 缩放 .el-zoom-in-center & .el-zoom-in-top &
        .el-zoom-in-bottom
      </h5>
      <el-button @click="zoomShow = !zoomShow">zoom show</el-button>
      <div class="transition-content">
        <transition name="el-zoom-in-center">
          <div class="transition-box" v-show="zoomShow">.el-zoom-in-center</div>
        </transition>
        <transition name="el-zoom-in-top">
          <div class="transition-box" v-show="zoomShow">.el-zoom-in-top</div>
        </transition>
        <transition name="el-zoom-in-bottom">
          <div class="transition-box" v-show="zoomShow">.el-zoom-in-bottom</div>
        </transition>
      </div>

      <!-- collapse 展开折叠 -->
      <h5>
        3. transition: collapse 展开折叠 &lt;el-collapse-transition&gt;标签
      </h5>
      <el-button @click="collapseShow = !collapseShow">collapse show</el-button>
      <div style="display: flex; margin-top: 21px; height: 220px;">
        <el-collapse-transition>
          <div v-show="collapseShow">
            <div class="transition-box">.el-collapse-transition</div>
            <div class="transition-box">.el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xnTransition',
  data: () => ({
    fadeShow: true,
    zoomShow: true,
    collapseShow: true,
  }),
}
</script>

<style lang="scss" scoped>
$i1: 21px;
.xn-transition {
  padding-bottom: $i1;
  .transition-content {
    display: flex;
    height: 100px;
    margin: 21px 0;
  }
  .transition-box {
    margin-right: $i1;
    margin-bottom: $i1;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #409eff;
    background-color: #409eff;
    color: #fff;
    box-sizing: border-box;
  }
}
</style>
