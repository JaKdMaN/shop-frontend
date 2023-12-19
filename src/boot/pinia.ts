import { boot } from 'quasar/wrappers'
import pinia from 'stores/index'

export default boot(({ app }) => {
  app.use(pinia)
})
