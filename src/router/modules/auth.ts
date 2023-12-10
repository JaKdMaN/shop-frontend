import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'auth',
    path: '/auth',
    component: () => import('pages/auth/AuthPage.vue'),
  },
]

export default routes
