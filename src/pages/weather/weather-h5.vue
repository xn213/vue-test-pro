<template>
  <div class="weather-h5">
    <iframe
      id="show-iframe"
      width="300"
      height="300"
      frameborder="0"
      src="https://apip.weatherdt.com/h5.html?id=7f0tSWM9fd"
    >
      <div class="weather"></div
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'weather-h5',
  data() {
    return {}
  },
  mounted() {
    const oIframe = document.getElementById('show-iframe')
    const deviceWidth = document.documentElement.clientWidth
    const deviceHeight = document.documentElement.clientHeight
    oIframe.style.width = deviceWidth - 175 + 'px'
    oIframe.style.height = deviceHeight - 49 + 'px'
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.weather-h5 {
  width: 100%;
  min-height: 100%;
}
</style>
