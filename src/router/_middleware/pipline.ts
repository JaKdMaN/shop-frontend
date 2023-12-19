import { MiddlewarePipeline } from 'src/router/model/types.js'


const middlewarePipeline: MiddlewarePipeline = (context, middlewareArray, index) => {
  const middleware = middlewareArray[index]

  if (!middleware) {
    return context.next
  }

  return async () => {
    const nextPipeline = middlewarePipeline(context, middlewareArray, index + 1)

    await middleware({
      ...context,
      nextMiddleware: nextPipeline,
    })
  }
}

export { middlewarePipeline }
