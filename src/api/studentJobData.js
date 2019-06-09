import Axios from 'axios'

export function getStudentJobData1({ date }) {
  // 跨域问题
  return Axios.get(
    'https://jx.1000phone.net/teacher.php/Api/studentJobData_month',
    {
      params: {
        date
      }
    }
  )
}
// 写法2 dev下代理解决跨域
export function getStudentJobData({ date }) {
  return Axios({
    url: '/api/teacher.php/Api/studentJobData_month',
    method: 'get',
    params: {
      date
    }
  })
}
