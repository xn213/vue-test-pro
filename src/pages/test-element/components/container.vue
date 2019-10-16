<template>
  <div class="xn-container">
    <!-- 2. Container 布局容器 -->
    <h4>2. Container 布局容器</h4>
    <p>el-container el-header el-aside el-main el-footer</p>
    <p>
      以上组件采用了 flex
      布局，使用前请确定目标浏览器是否兼容。此外，&lt;el-container&gt;
      的子元素只能是后四者，后四者的父元素也只能是 &lt;el-container&gt;。
    </p>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'xn-container',
}
</script>

<style lang="scss" scoped>
$i1: 21px;
.xn-container {
  .el-header,
  .el-footer {
    text-align: center;
    line-height: 60px;
    color: #333;
    background-color: #b3c0d1;
  }
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    background-color: #d3dce6;
  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
    background-color: #e9eef3;
  }
}
</style>
