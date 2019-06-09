import Axios from 'axios'

// 获取学生工作信息
export function getStudentJobData({ date }) {
  return Axios.get('/api/teacher.php/Api/studentJobData_month', {
    params: {
      date
    }
  })
}
// 写法2
export function getStudentJobData2({ date }) {
  return Axios({
    url: '/api/teacher.php/Api/studentJobData_month',
    method: 'get',
    params: {
      date
    }
  })
}

// 获取实况天气(now) | 和风天气
/**
 *
 *
 * @export
 * @param {*} { location } {
 * now	实况天气	商业/免费
 * forecast	3-10天预报	商业/免费
 * hourly	逐小时预报	商业/免费
 * lifestyle	生活指数	商业/免费
 * }
 * @returns
 */
export function getNowWeatherApi({ location }) {
  return Axios({
    url: 'https://free-api.heweather.net/s6/weather/now',
    method: 'get',
    params: {
      location,
      key: 'acc3e8d31740439f9132547841dc489a'
    }
  })
}

// joke
export function getJoke() {
  return Axios({
    url: 'https://icanhazdadjoke.com/',
    method: 'get',
    headers: {
      Accept: 'application/json'
    }
  })
}

/**
 * 开源API 获取随机用户数据
 * @export
 * @param {
 * results: 数据条数
 * inc:
 * } { results, inc }
 * @returns
 */
export function getRandomUsersApi({ results, inc }) {
  return Axios({
    url: 'https://randomuser.me/api/',
    method: 'get',
    params: {
      results,
      inc
    }
  })
}
