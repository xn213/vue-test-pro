<template>
  <div class="weather" v-loading="loading">
    <div>本页已被缓存</div>
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

    <div class="weather-search">
      <label for="weather-search">输入查询城市名(支持全拼): </label>
      <input
        id="weather-search"
        type="text"
        v-model="params.location"
        @change="change"
      />
    </div>
    <div class="weather-detail" v-if="weather.status === 'ok'">
      <p>更新时间: {{ weather.update.loc }}</p>
      <p>
        <span>温度: {{ weather.now.tmp }}<sup>。</sup></span>
      </p>
      <p>体感温度: {{ weather.now.fl }}</p>
      <p>天气: {{ weather.now.cond_txt }}</p>
      <p>相对湿度: {{ weather.now.hum }}</p>
      <p>降水量: {{ weather.now.pcpn }}</p>
      <p>能见度: {{ weather.now.vis }}公里</p>
      <p>风力: {{ weather.now.wind_sc }}</p>
      <p>风速: {{ weather.now.wind_spd }}</p>
      <p>风向: {{ weather.now.wind_dir }}</p>
    </div>
    <div class="weather-detail" v-if="weather.status === 'unknown location'">
      查不到这个城市
    </div>
    <div class="weather-detail" v-if="weather.status === 'invalid param'">
      城市名不合法
    </div>
  </div>
</template>

<script>
import { getNowWeatherApi } from 'api/getWeather'
export default {
  name: 'weather',
  data() {
    return {
      params: {
        location: '杭州'
      },
      weather: {
        status: '',
        basic: {
          admin_area: '浙江',
          location: '杭州'
        },
        now: {
          tmp: '',
          fl: '',
          cond_txt: '',
          hum: '',
          pcpn: '',
          vis: ''
        },
        update: {
          loc: ''
        }
      },
      loading: true
    }
  },
  async created() {
    this.getNowWeather(this.params)
  },
  methods: {
    change() {
      if (this.params.location == '') return
      this.getNowWeather(this.params)
      console.log(this.params.location)
    },
    async getNowWeather(p) {
      let res = await getNowWeatherApi(p)
      let weatherObj = res.data.HeWeather6[0]
      this.weather.basic = weatherObj.basic
      this.weather.now = weatherObj.now
      this.weather.update = weatherObj.update
      this.weather.status = weatherObj.status
      this.loading = false
      console.log(weatherObj, this.weather)
    }
  }
}
</script>

<style lang="scss" scoped>
.weather {
  color: white;
  padding: 21px;
  background-image: linear-gradient(#3b5bdb, #59b6e6);
  &-search {
    input {
      color: #b45dea;
      padding-left: 6px;
      border-radius: 5px;
      border: 1px solid #eee;
    }
  }
  &-detail {
    sup {
      font-size: 60%;
      top: -0.9em;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
  }
}
</style>
