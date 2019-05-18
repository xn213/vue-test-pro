import Axios from 'axios'

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
