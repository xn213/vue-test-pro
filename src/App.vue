<template>
  <div id="app">
    <!-- 导航菜单 -->
    <div class="menu-btn-wrap">
      <i class="menu-btn" @click="isMenuShow = !isMenuShow"></i>
    </div>
    <transition name="slide-right">
      <div class="menu" v-show="isMenuShow">
        <ul>
          <li v-for="(item, index) in links" :key="index">
            <router-link :to="item.url">{{ item.text }}</router-link>
          </li>
        </ul>
      </div>
    </transition>
    <!-- 内容 -->
    <section class="section" :class="isMenuShow ? 'section' : 'nml'">
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
$cxn: #b45dea;
#app {
  height: 100%;
  .menu-btn-wrap {
    .menu-btn {
      display: block;
      width: 21px;
      height: 15px;
      border: 3px solid #b45dea;
      border-left: none;
      border-right: none;
      cursor: pointer;
      position: fixed;
      top: 12px;
      left: 55px;
      z-index: 2113;
      &::before {
        width: 100%;
        height: 0;
        content: '';
        border-top: 3px solid #b45dea;
        position: absolute;
        top: 6px;
        left: 0;
      }
    }
  }

  .menu {
    width: 132px;
    padding-top: 50px;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 213;
    box-shadow: 0 0 5px #b45dea;
    background: white;
    ul {
      li {
        width: 100%;
        height: 39px;
        border-bottom: 1px solid #eee;
        &:hover {
          color: white;
          background: $cxn;
          a {
            color: white;
          }
        }
        a {
          text-align: center;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 35px;
          color: $cxn;
        }
        .router-link-active {
          background: #b45dea;
          color: white;
        }
      }
      li:nth-of-type(1) {
        border-top: 1px solid #eee;
      }
    }
  }
  .section {
    box-sizing: border-box;
    padding: 50px 21px 0 21px;
    min-height: 100%;
    margin-left: 132px;
  }
  .nml {
    margin-left: 0;
  }
}
</style>
