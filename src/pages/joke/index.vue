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
  padding: 21px;
  ol {
    // width: auto;
    // display: inline-block;
    // min-width: 113px;
    margin: 13px 0;
    li {
      // width: auto;
      // white-space: nowrap;
      margin-bottom: 10px;
      padding: 6px;
      border-radius: 5px;
      border: solid 1px #b45dea;
      color: #fff;
      // box-shadow: 2px 2px 2px #ccc;
      background-image: linear-gradient(to right, #fe9191, #b45dea);
    }
  }
}
</style>
