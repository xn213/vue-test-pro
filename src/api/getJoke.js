import Axios from 'axios'

export function getJoke() {
  return Axios({
    url: 'https://icanhazdadjoke.com/',
    method: 'get',
    headers: {
      Accept: 'application/json',
    },
  })
}
