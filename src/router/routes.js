const ElementUI = () => import('pages/test-element')
const weather = () => import('pages/weather')
const weatherH5 = () => import('pages/weather/weather-h5.vue')
const tao24 = () => import('pages/tao24')
const studentJob = () => import('pages/student-job')
const exportExcel = () => import('pages/export-excel')
const RXCounter = () => import('pages/RX-Counter')
const randomUser = () => import('pages/random-user')
const changan12hours = () => import('pages/changan12hours')
const Joke = () => import('pages/joke')
const Test = () => import('pages/test')
const Login = () => import('components/login')

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/el-ui',
  },
  {
    path: '/el-ui',
    name: 'ElementUI',
    component: ElementUI,
  },
  {
    path: '/export-excel',
    name: 'exportExcel',
    component: exportExcel,
    meta: {
      deepth: 1,
      keepAlive: true, // 需要被缓存
    },
  },
  {
    path: '/weather',
    name: 'weather',
    component: weather,
    meta: {
      deepth: 1,
      keepAlive: true, // 需要被缓存
    },
  },
  {
    path: '/weather-h5',
    name: 'weather-h5',
    component: weatherH5,
    meta: {
      deepth: 1,
      keepAlive: true, // 需要被缓存
    },
  },
  {
    path: '/joke',
    name: 'joke',
    component: Joke,
    meta: {
      deepth: 1,
      keepAlive: true,
    },
  },
  {
    path: '/wlcx',
    name: 'wlcx',
    component: changan12hours,
  },
  {
    path: '/tao24',
    name: 'tao24',
    component: tao24,
  },
  {
    path: '/student-job',
    name: 'student-job',
    component: studentJob,
    meta: {
      deepth: 1,
      keepAlive: true,
    },
  },
  {
    path: '/RX-Counter',
    name: 'RX-Counter',
    component: RXCounter,
    meta: {
      deepth: 1,
      keepAlive: true,
    },
  },
  {
    path: '/random-user',
    name: 'random-user',
    component: randomUser,
    meta: {
      deepth: 1,
      keepAlive: true,
    },
  },
  {
    path: '/keep-alive',
    name: 'keep-alive',
    component: () => import('pages/keep-alive'),
    meta: {
      deepth: 0.5,
    },
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('pages/keep-alive/list'),
    meta: {
      deepth: 1,
      keepAlive: true, // 需要被缓存
    },
  },
  {
    path: 'detail',
    name: 'detail',
    component: () => import('pages/keep-alive/detail'),
    meta: {
      deepth: 2,
    },
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

export default routes
