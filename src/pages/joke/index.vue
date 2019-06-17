<template>
  <div class="joke">
    <button @click="getData">one more</button>
    <ol>
      <li v-for="(item, index) in jokeList" :key="index">
        <span>{{ index + 1 }}. </span>
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'
import { getJoke } from 'api/getJoke'
export default {
  name: 'joke',
  data() {
    return {
      jokeList: []
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    axios
      .get('https://free-api.heweather.net/s6/weather/now', {
        params: {
          location: 'beijing',
          key: 'acc3e8d31740439f9132547841dc489a' // 和风天气账户 key 值
        }
      })
      .then(res => {
        console.log('get数据: ', res)
      })
  },
  methods: {
    async getData() {
      let res = await getJoke()
      let joke = res.data.joke
      this.jokeList.push(joke)
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/global.scss';
.joke {
  ol {
    margin: 13px 0;
    li {
      margin-bottom: 10px;
      padding: 6px;
      border-radius: 5px;
      border: solid 1px #b45dea;
      box-shadow: 2px 2px 2px #ccc;
    }
  }
}
</style>
