<template>
  <div class="weather" v-loading="loading">
    <div class="weather-newtab" title="新窗口打开">
      <a
        href="https://apip.weatherdt.com/h5.html?id=7f0tSWM9fd"
        target="_blank"
      >
        本页已缓存, 新窗口打开weather-h5
      </a>
    </div>
    <h2>
      <span
        v-if="
          weather.basic && weather.basic.admin_area !== weather.basic.location
        "
        >{{ weather.basic.admin_area }}
      </span>
      <span v-if="weather.basic">{{ weather.basic.location }}市</span>
      实时天气查询
    </h2>
    <hr />

    <!-- 搜索 -->
    <div class="weather-search">
      <label @click="isWeatherShow = !isWeatherShow" for="weather-search"
        >输入查询城市名(支持全拼):
      </label>
      <input
        id="weather-search"
        type="text"
        v-model="params.location"
        @change="change"
      />
    </div>

    <!-- 内容 -->
    <transition name="fade">
      <div class="weather-detail-wrap" v-show="isWeatherShow">
        <div class="weather-detail" v-if="weather.status === 'ok'">
          <p>天气: {{ weather.now.cond_txt }}</p>
          <p>
            <span class="weather-detail-tmp">
              温度: {{ weather.now.tmp }}<sup>。</sup>
            </span>
            <span class="weather-detail-fl">
              体感温度: {{ weather.now.fl }}<sup>。</sup>
            </span>
          </p>
          <p>相对湿度: {{ weather.now.hum }}%</p>
          <p>降水量: {{ weather.now.pcpn }}mm</p>
          <p>更新: {{ weather.update.loc }}</p>
          <p>风向: {{ weather.now.wind_dir }}</p>
          <p>风力: {{ weather.now.wind_sc }}级</p>
          <p>风速: {{ weather.now.wind_spd }}km/h</p>
          <p>能见度: {{ weather.now.vis }}公里</p>
        </div>
        <div
          class="weather-detail"
          v-if="weather.status === 'unknown location'"
        >
          查不到这个城市
        </div>
        <div class="weather-detail" v-if="weather.status === 'invalid param'">
          城市名不合法
        </div>
      </div>
    </transition>

    <!-- weather 插件 天气网 -->
    <iframe
      id="show-iframe"
      frameborder="0"
      name="showHere"
      scrolling="no"
      height="430"
      src="target.html"
    >
      <div id="weather-view-he"></div>
    </iframe>
  </div>
</template>

<script>
// import Axios from 'axios'
import { getNowWeatherApi, getForecastWeatherApi } from 'api/getWeather'
export default {
  name: 'weather',
  data() {
    return {
      params: {
        location: '杭州',
      },
      weather: {
        status: '',
        basic: {
          admin_area: '浙江',
          location: '杭州',
        },
        now: {
          tmp: '',
          fl: '',
          cond_txt: '',
          hum: '',
          pcpn: '',
          vis: '',
        },
        update: {
          loc: '',
        },
        daily_forecast: [],
      },
      loading: true,
      isWeatherShow: true,
    }
  },
  created() {
    this.getNowWeather()
    this.getForecastWeather()
  },
  mounted() {
    // 和风天气 接口
    // Axios.get('https://free-api.heweather.net/s6/weather/now', {
    //   params: {
    //     location: 'beijing',
    //     key: 'acc3e8d31740439f9132547841dc489a' // 和风天气账户 key 值
    //   }
    // }).then(res => {
    //   console.log('get数据: ', res)
    // })
  },
  methods: {
    change() {
      if (this.params.location == '') return
      this.isWeatherShow = true
      this.getNowWeather(this.params)
      console.log(this.params.location)
    },
    async getNowWeather() {
      let res = await getNowWeatherApi(this.params)
      let weatherObj = res.data.HeWeather6[0]
      this.weather.basic = weatherObj.basic
      this.weather.now = weatherObj.now
      this.weather.update = weatherObj.update
      this.weather.status = weatherObj.status
      this.loading = false
      console.log(weatherObj, this.weather)
    },
    async getForecastWeather() {
      let res = await getForecastWeatherApi(this.params)
      let wObj = res.data.HeWeather6[0]
      this.weather.daily_forecast = wObj.daily_forecast
      console.log('getForecastWeather: ', res, wObj)
    },
  },
}
</script>

<style lang="scss" scoped>
.weather {
  padding: 21px;
  min-height: 100%;
  color: white;
  background-image: linear-gradient(#b45dea, #ff9191);
  &-newtab {
    padding-bottom: 21px;
    a {
      color: white;
    }
  }
  &-search {
    margin-bottom: 8px;
    input {
      width: 96px;
      height: 21px;
      line-height: 21px;
      color: #b45dea;
      padding-left: 6px;
      border-radius: 3px;
      border: 1px solid #eee;
    }
  }
  &-detail {
    // width: 213px;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid white;
    p {
      padding: 3px 0;
    }
    &-tmp {
      font-size: 21px;
    }
    &-fl {
      font-size: 18px;
    }
    sup {
      font-size: 80%;
      top: -0.9em;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
  }
}
</style>
