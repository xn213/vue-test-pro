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
    path: '/test',
    name: 'test',
    component: Test
  }
]

export default routes
