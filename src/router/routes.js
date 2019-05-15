const page1 = () => import('pages/page1')
const page2 = () => import('pages/page2')

const routes = [
  {
    path: '/page1',
    name: 'page1',
    component: page1
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  }
]

export default routes