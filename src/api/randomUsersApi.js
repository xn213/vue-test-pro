import Axios from 'axios'

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
