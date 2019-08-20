<template>
  <div class="p-4 wlcx">
    <h3>《长安十二时辰》 - 望楼传信系统 (二进制版)</h3>
    <div class="pt-4 chars">
      <span v-for="(char, i) in chars" :key="i">{{ char }} {{ i }}</span>
    </div>
    <div class="pt-3 d-flex justify-content-center">
      <div
        class="box"
        v-for="(n, i) in lights"
        :key="i"
        :class="{active: n}"
        @click="$set(lights, i, 1 - n )"
      >{{ n }}</div>
    </div>
    <div class="pt-3">{{ num }}: {{ char }}</div>
  </div>
</template>

<script>
const chars = '靖安司 张都尉 狼卫 位于 已入 平康 怀远 永宁 皇城'.split(' ')
export default {
  name: 'changan-12hours',
  data () {
    return {
      chars,
      lights: Array(6).fill(0)
    }
  },
  computed: {
    num () {
      return parseInt(this.lights.join(''), 2)
    },
    char(){
      return this.chars[this.num]
    }
  }
}
</script>
<style scoped>
.wlcx {
  text-align: center;
  background: #ccc;
}
.box {
  width: 4rem;
  height: 4rem;
  border-radius: 5px;
  color: #999;
  background: #333;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.box.active {
  color: #333;
  background: #b45dea;
}
.chars span {
  display: inline-block;
  width: 1rem;
  margin: 1rem;
}
</style>