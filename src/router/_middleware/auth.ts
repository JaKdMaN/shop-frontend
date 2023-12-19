import { useAuthStore } from 'src/stores/modules/auth-store'
import useNotify from 'src/utils/hooks/useNotify'

export default async function auth({ next, nextMiddleware, to }: any) {
  const authStore = useAuthStore()
  const { notifyError } = useNotify()

  if (!authStore.user) {

    await authStore.fetchUser()
      .catch(async (error) => {
        if (error.response.status === 401) {
          return next({ name: 'auth', query: { redirect: to.fullPath } })
        } else {
          notifyError(error)
        }
      })

    return nextMiddleware()
  } else {
    await authStore.fetchUser()
      .catch(async (error) => {
        if (error.response.status === 401) {
          await authStore.fetchRefreshToken()
        } else {
          notifyError(error)
        }
      })

      return nextMiddleware()
  }
}
