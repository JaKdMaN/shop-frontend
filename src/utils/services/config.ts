export const devApiUrl = 'http://localhost:48151/api/v1'

export const baseURL =
  process.env.VUE_APP_BACKEND_HOST && process.env.VUE_APP_BACKEND_API_PATH
    ? process.env.VUE_APP_BACKEND_HOST + process.env.VUE_APP_BACKEND_API_PATH
    : devApiUrl