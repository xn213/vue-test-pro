<template>
  <div id="home">
    <p>{{ message }}</p>
    <p v-html="main"></p>
  </div>
</template>
<script>
export default {
  name: 'TestVuelife',
  data() {
    return {
      message: 'vue生命周期',
      main: `总结：<br/>
                beforecreated：el 和 data 并未初始化<br/>
                created:完成了 data 数据的初始化，el没有<br/>
                beforeMount：完成了 data 数据的初始化，el没有<br/>
                mounted ：完成挂载，完成了 el 和 data 初始化<br/>
                beforecreate : 可以在这加个loading事件<br/>
                created ：在这结束loading，还做一些初始化，实现函数自执行<br/>
                mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情<br/>
                beforeDestory： 你确认删除XX吗？ destoryed ：当前组件已被删除，清空相关内容<br/>`,
    }
  },
  beforeCreate() {
    console.log('beforeCreate创建前状态')
    console.log('el:' + this.$el) //undefined
    console.log('data:' + this.$data) //undefined
    console.log('message:' + this.message) //undefined
  },
  created() {
    console.log('created创建完毕状态')
    console.log('el:' + this.$el) //undefined
    console.log('data:' + this.$data) //[object Object]
    console.log('message:' + this.message) //vuex is very hard
  },
  beforeMount() {
    console.log('beforeMount挂载前状态')
    console.log('el:' + this.$el) //undefined
    console.log('data:' + this.$data) //[object Object]
    console.log('message:' + this.message) //vuex is very hard
  },
  mounted() {
    console.log('mounted挂载结束状态')
    console.log('el:' + this.$el) //[object HTMLDivElement]
    console.log('data:' + this.$data) //[object Object]
    console.log('message:' + this.message) //vuex is very hard
  },
  beforeUpdate() {
    console.log('beforeUpdate更新前状态')
    console.log('el:' + this.$el)
    console.log('data:' + this.$data)
    console.log('message:' + this.message)
  },
  updated() {
    console.log('updated更新完成状态')
    console.log('el:' + this.$el)
    console.log('data:' + this.$data)
    console.log('message:' + this.message)
  },
  beforeDestroy() {
    console.log('beforeDestroy摧毁前状态')
    console.log('el:' + this.$el)
    console.log('data:' + this.$data)
    console.log('message:' + this.message)
  },
  destroyed() {
    console.log('destroyed')
    console.log('el:' + this.$el)
    console.log('data:' + this.$data)
    console.log('message:' + this.message)
  },
}
</script>
