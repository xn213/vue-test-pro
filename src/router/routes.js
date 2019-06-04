const studentJob = () => import('pages/student-job')
const randomUser = () => import('pages/random-user')
const Test = () => import('pages/test')

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/student-job'
  },
  {
    path: '/student-job',
    name: 'student-job',
    component: studentJob
  },
  {
    path: '/random-user',
    name: 'random-user',
    component: randomUser
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('pages/keep-alive'),
    meta: {
      deepth: 0.5
    }
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('pages/keep-alive/list'),
    meta: {
      deepth: 1,
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: 'detail',
    name: 'detail',
    component: () => import('pages/keep-alive/detail'),
    meta: {
      deepth: 2
    }
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

export default routes
