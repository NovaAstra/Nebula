
const routes = [
  {
    path: '/:type*',
    name: 'Home',
    component: ()=>import('./Test.vue')
  }
]

export default routes
