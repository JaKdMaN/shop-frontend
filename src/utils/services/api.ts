import camelcaseKeys from 'camelcase-keys'
import axios from 'axios'
import qs from 'qs'
import { baseURL } from './config.js'

const requestSearchFieldBuffer: { [key: string]: string } = {}

const createApi = () => {
  const api = axios.create({
    paramsSerializer(params) {
      return qs.stringify(params, {
        arrayFormat: 'indices',
        encode: true,
      })
    },
  })

  api.interceptors.request.use((config) => {
    const { url, params } = config
    const search = (params && params.search) || ''

    config.withCredentials = true

    if (window.io) {
      config.headers['X-Socket-Id'] = window.io.SocketId()
    }

    config.baseURL = config.baseURL || baseURL

    return config
  })

  api.interceptors.response.use((response) => {
    const { url } = response.config,
      { params } = response.config
    const search = (params && params.search) || ''

    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true })
    }

    return response
  })

  return api
}

export { createApi }
