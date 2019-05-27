const Page1 = () => import('pages/page1')
const Page2 = () => import('pages/page2')
const Test = () => import('pages/test')

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/page1'
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('pages/keep-alive/index'),
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
