import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'


export default function useNotify () {
  const $q = useQuasar()

  const router = useRouter()
  const timeout = 3000
  const position = 'bottom-right'

  const notifySuccess = (message: string) => {
    $q.notify({
      type: 'positive',
      message,
      position,
      timeout,
      html: true,
    })
  }

  const notifyInfo = (message: string) => {
    $q.notify({
      type: 'info',
      message,
      position,
      timeout,
      html: true,
    })
  }

  const notifyError = (error: any) => {
    if (error !== 'late request') {
      let message =
        'Что-то пошло не так. Повторите попытку позднее или перезагрузите страницу'

      if (error.response && error.response.data) {
        message = error.response.data.message
      } else if (typeof error === 'string') {
        message = error
      } else if (typeof error === 'boolean') {
        return
      }

      $q.notify({
        type: 'negative',
        message,
        position,
        timeout,
        html: true,
      })
    }
  }

  return {
    notifySuccess,
    notifyInfo,
    notifyError,
  }
}
