import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import routes from './routes'
import { Middleware } from 'src/router/model/types'
import { middlewarePipeline } from './_middleware/pipline'

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,

  history: createWebHistory(process.env.VUE_ROUTER_BASE),
})

router.beforeEach((to, from, next) => {
  if (!to.meta?.middleware) {
    return next()
  }

  const middlewareArray = to.meta.middleware as Middleware[]
  const context = { from, to, next }

  return middlewareArray[0]({
    ...context,
    nextMiddleware: middlewarePipeline(context, middlewareArray, 1),
  })
})

export default router
