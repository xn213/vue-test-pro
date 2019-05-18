<template>
  <div>
    comA
    <com-b></com-b>

    <button @click="() => changeColor()">改变color</button>

    <com-f></com-f>
  </div>
</template>

<script>
import comB from './comB'
import comF from './comF'
export default {
  name: 'comA',
  components: { comB, comF },
  provide() {
    return {
      name: 'xn213',
      theme: this // 方法一：提供祖先组件的实例
      // theme: {
      //   color: this.color //这种方式绑定的数据并不是可响应的
      // } // 即A组件的color变化后，组件D、E、F不会跟着变
    }
  },
  data() {
    return {
      color: 'blue'
    }
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color
      } else {
        this.color = this.color === 'red' ? 'blue' : 'red'
      }
    }
    // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
    // provide() {
    //   this.theme = Vue.observable({
    //     color: "blue"
    //   });
    //   return {
    //     theme: this.theme
    //   };
    // },
    // methods: {
    //   changeColor(color) {
    //     if (color) {
    //       this.theme.color = color;
    //     } else {
    //       this.theme.color = this.theme.color === "blue" ? "red" : "blue";
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
</style>
