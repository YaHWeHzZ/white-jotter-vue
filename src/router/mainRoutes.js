import home from '@/components/home/index'
export const mainRoutes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () =>
      import('@/components/HelloWorld'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: home

      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import('@/components/home/index')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () =>
      import('@/components/Login')
  }
]

export default mainRoutes
