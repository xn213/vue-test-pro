<template>
  <div class="tao">
    <p>
      | 防抖(debounce) | 原生懒加载(上滑加载新数据)| scroll(兼容3种写法
      Safari放中间) | ES6 ...data | filters | async..await.. | api | v-for |
      location.href | flex |
    </p>
    <h2>24淘券</h2>
    <div class="tao-con" id="taocon">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="skip(item.click_url)"
        >
          <div class="img-wrap">
            <img
              :src="item.pict_url"
              :alt="item.item_description"
              :title="item.item_description"
            />
          </div>
          <div class="desc">
            <h4 class="desc-title">
              <span>{{ item.user_type | formatUserType }}</span>
              {{ item.title }}
            </h4>
            <div class="desc-qc">
              <span class="desc-qc-q">
                <span>券</span>
                <b>{{ item.coupon_amount }}元</b>
              </span>
              <span class="desc-qc-c">已售{{ item.volume }}件</span>
            </div>
            <div class="desc-det">
              券后
              <b
                >¥{{ (item.zk_final_price - item.coupon_amount) | formatPrice }}
              </b>
              <del> ¥{{ item.zk_final_price }}</del>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getList } from 'api/tao24'
export default {
  name: 'tao',
  data() {
    return {
      list: [],
      params: {
        page: 1,
        rows: 20,
      },
    }
  },
  mounted() {
    // 存在问题, 其他页面有滚动条时, 也会执行此监听,则获取不到方法内容报错, toDo
    document
      // .body
      // .getElementById('taocon')
      // .querySelector('section')
      .addEventListener('scroll', this.debounce(this.discuzScroll, 50)) // wait=50 如果过小比方说10ms 则10ms后还有请求则挡不住,,
    this.getList()
    console.log(this.params.page)
  },
  methods: {
    discuzScroll() {
      let dom = document.getElementById('taocon')
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      let domHeight = dom.offsetHeight
      let domOffsetTop = dom.offsetTop
      // var scrollHeight = dom.scrollHeight
      const deviceHeight = document.documentElement.clientHeight
      console.log('aa', scrollTop, domOffsetTop, domHeight, deviceHeight)
      const that = this
      if (scrollTop >= domHeight - (deviceHeight - domOffsetTop)) {
        setTimeout(function() {
          // 防抖优化 Done
          that.params.page += 1
          that.getList()
        }, 500)
      }
    },
    async getList() {
      // const url = `http://tb.api.zhuamimi.cn/taobao/list/3756?page=${this.params.page}&rows=${this.params.rows}`
      // return url => {
      //   console.log(url)
      //   const img = new Image()
      //   img.url = url
      // }

      let res = await getList(this.params)
      this.list.push(...res.data)
      console.log(this.list)
    },
    skip(url) {
      location.href = url
    },
    // 防抖优化 Done
    debounce(method, delay) {
      let timer = null
      return function() {
        let self = this,
          args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function() {
          method.apply(self, args)
        }, delay)
      }
    },
  },
  filters: {
    formatUserType(val) {
      switch (val) {
        case 0:
          return (val = '淘宝')
        case 1:
          return (val = '天猫')
      }
    },
    formatPrice(val) {
      return val.toFixed(2)
    },
  },
}
</script>

<style lang="scss" scoped>
.tao {
  padding: 10px;
  background: #eee;
  &-con {
    ul {
      li {
        padding: 9px;
        margin-top: 10px;
        border-radius: 5px;
        background: #fff;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
        .img-wrap {
          flex: 1;
          img {
            width: 100%;
          }
        }
        .desc {
          flex: 3;
          margin-left: 8px;
          &-title {
            height: 40px;
            line-height: 20px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            span {
              padding: 0 2px;
              font-size: 12px;
              border-radius: 3px;
              background: #ff718b;
              color: #fff;
            }
          }
          &-qc {
            height: 21px;
            margin-top: 9px;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #777;
            &-q {
              border: 1px solid #ff718b;
              border-radius: 2px;
              span {
                padding: 0 4px;
                color: #fff;
                background: #ff718b;
              }
              b {
                padding: 0 4px;
                color: #ff718b;
              }
            }
          }
          &-det {
            margin-top: 9px;
            font-size: 12px;
            b {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
