import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home/HomePage.vue'),
  },
]

export default routes
