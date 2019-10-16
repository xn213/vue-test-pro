<template>
  <div class="xn-layout">
    <!-- 1. layout 布局 -->
    <h4>1. layout 布局</h4>
    <!-- 1.1 基础布局 -->
    <h5>1.1 基础布局</h5>
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            el-row>el-col:span=24 整行
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">:span=12</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">:span=6</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">:span=4</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-dark">:span=2</div>
        </el-col>
      </el-row>
    </div>
    <!-- 1.2 分栏间隔 -->
    <h5>1.2 分栏间隔 el-row:gutter='20' ==> el-col:padding-left:10px</h5>
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <!-- 1.3 混合布局 -->
    <h5>1.3 混合布局 el-col:span 随意</h5>
    <div>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">:span=12</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">:span=6</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">:span=4</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-dark">:span=2</div>
        </el-col>
      </el-row>
    </div>
    <!-- 1.4 分栏偏移 -->
    <h5>1.4 分栏偏移 el-col:offset='6'</h5>
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <!-- 1.5 对齐方式  -->
    <h5>1.5 对齐方式 el-row type='flex' justify='space-between'</h5>
    <div>
      <el-row type="flex" justify="center" class="row-bg">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark">center</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" class="row-bg">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark">space-around</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" class="row-bg">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark">space-between</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
    </div>
    <!-- 1.6 响应式布局 -->
    <h5>1.6 响应式布局</h5>
    <p>
      参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。
    </p>
    <div>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xnLayout',
}
</script>

<style lang="scss" scoped>
$i1: 21px;
.xn-layout {
  padding-bottom: $i1;
  .el-row {
    margin-bottom: $i1;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      color: #fff;
      text-align: center;
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content {
    border-radius: 3px;
    min-height: 32px;
  }
  .bg-purple-dark {
    background-color: #99a9bf;
  }
  .bg-purple {
    background-color: #d3dce6;
  }
  .bg-purple-light {
    background-color: #e5e9f2;
  }
}
</style>
