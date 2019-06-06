<template>
  <div class="joke">
    <button @click="getData">再来一个</button>
    <ol>
      <li v-for="(item, index) in jokeList" :key="index">{{ item }}</li>
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
      jokeList: [],
      tq: '1111'
    }
  },
  created() {
    this.getData()
    console.log(this.tq)
  },
  mounted() {
    axios
      .get('https://free-api.heweather.net/s6/weather/now', {
        params: {
          location: 'beijing',
          key: 'acc3e8d31740439f9132547841dc489a'
        }
      })
      .then(res => {
        console.log(this.tq, res)
        // this.tq = res.data
      })
  },
  methods: {
    async getData() {
      let res = await getJoke()
      console.log(res.data)
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
