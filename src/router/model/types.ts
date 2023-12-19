import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export type MiddlewarePipelineContext = {
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
}

export type MiddlewareContext = MiddlewarePipelineContext & {
  nextMiddleware: ReturnType<MiddlewarePipeline>
}

export type Middleware = (params: MiddlewareContext) => void | Promise<void>

export type MiddlewarePipeline = (
  context: MiddlewarePipelineContext,
  middlewaresArray: Middleware[],
  index: number,
) => NavigationGuardNext | (() => Promise<void>)
