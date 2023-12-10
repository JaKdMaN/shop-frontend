import { RouteRecordRaw } from 'vue-router'
import homeRoutes from './modules/home'
import authRoutes from './modules/auth'

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  ...homeRoutes,
  {
    path: '/',
    name: 'app',
    redirect: { name: 'home' },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/NotFoundPage.vue'),
  },
]

export default routes
