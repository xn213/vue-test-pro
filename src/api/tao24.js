import Axios from 'axios'

export function getList({ page, rows }) {
  return Axios({
    url: 'http://tb.api.zhuamimi.cn/taobao/list/3756', // 3756: 好券直播
    method: 'get',
    params: {
      page,
      rows,
    },
  })
}
