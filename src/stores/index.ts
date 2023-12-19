import { Router } from 'vue-router'
import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router;
  }
}

export default store(() => {
  const pinia = createPinia()

  return pinia
})
