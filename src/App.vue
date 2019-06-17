<template>
  <div id="app">
    <!-- 导航菜单 -->
    <nav class="nav">
      <ul>
        <li v-for="(item, index) in links" :key="index">
          <router-link :to="item.url">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
    <!-- 内容 -->
    <section>
      <keep-alive>
        <!-- 需要缓存的视图组件 -->
        <router-view
          :include="include"
          v-if="$route.meta.keepAlive"
        ></router-view>
      </keep-alive>
      <!-- 不需要缓存的视图组件 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </section>
    <footer>
      Copyright &copy; 2018-present
      <a
        href="https://xn213.github.io/fe-notes/"
        target="_blank"
        rel="noopener noreferrer"
        >@xn213</a
      >
    </footer>
  </div>
</template>

<script>
import { routerLinks } from 'utils'
export default {
  name: 'app',
  data() {
    return {
      include: [],
      isMenuShow: true,
      links: routerLinks() // 3种方式
      // links: [
      //   { url: '/index', text: 'index' },
      //   { url: '/weather', text: 'weather' },
      //   { url: '/student-job', text: 'student-job' },
      //   { url: '/RX-Counter', text: 'RX-Counter' },
      //   { url: '/joke', text: 'joke' },
      //   { url: '/test', text: 'test' }
      // ]
    }
  },
  computed: {
    // links() {
    //   return routerLinks()
    // }
  },
  watch: {
    $route(to, from) {
      // 如果to 进入的页面是需要缓存的, 就把name push 到 include 数组
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name)
      }
      // 如果要 from (离开) 的页面是 keepAlive 缓存的,
      // 再根据 deepth 来判断是前进还是后退
      // 如果是后退
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        var index = this.include.indexOf(from.name)
        index !== -1 && this.include.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss">
$xn: #b45dea;
#app {
  header {
    height: 50px;
    background: #fff;
    box-shadow: 0 0 3px $xn;
    z-index: 2113;
  }
  .nav {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: 0 0 5px $xn;
    background: white;
    ul {
      display: flex;
      li {
        flex: 1;
        &:hover {
          a {
            color: white;
            background: $xn;
          }
        }
        a {
          display: inline-block;
          height: 40px;
          padding: 0 21px;
          font-size: 14px;
          line-height: 40px;
          text-align: center;
          color: $xn;
        }
        .router-link-active {
          background: $xn;
          color: white;
        }
        .router-link-exact-active {
          background: $xn;
          color: white;
        }
      }
    }
  }
  footer {
    padding: 21px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background-image: linear-gradient(left top, #ff9191, #b45dea);
    a {
      text-decoration: underline;
      // color: #fff;
      cursor: pointer;
    }
  }
}
</style>
