import Axios from 'axios'

const URL = 'https://free-api.heweather.net/s6/weather/'
// 实况天气
export function getNowWeatherApi({ location }) {
  return Axios({
    url: `${URL}now`, // 'https://free-api.heweather.net/s6/weather/now'
    method: 'get',
    params: {
      location,
      key: 'acc3e8d31740439f9132547841dc489a'
    }
  })
}

// 3-10天预报
export function getForecastWeatherApi({ location }) {
  return Axios({
    url: `${URL}forecast`,
    method: 'get',
    params: {
      location,
      key: 'acc3e8d31740439f9132547841dc489a'
    }
  })
}

// 生活指数
export function getLifestyleWeatherApi({ location }) {
  return Axios({
    url: `${URL}lifestyle`,
    method: 'get',
    params: {
      location,
      key: 'acc3e8d31740439f9132547841dc489a'
    }
  })
}

// 逐小时预报
export function getHourlyleWeatherApi({ location }) {
  return Axios({
    url: `${URL}hourly`,
    method: 'get',
    params: {
      location,
      key: 'acc3e8d31740439f9132547841dc489a'
    }
  })
}
