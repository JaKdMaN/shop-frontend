import { boot } from 'quasar/wrappers'
import { AxiosInstance } from 'axios'
import { createApi } from 'src/utils/services/api.js'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

let api!: AxiosInstance

export default boot(() => {
  api = createApi()

})

export { api }
