import { AxiosHeaders, AxiosResponse, Method } from 'axios'

type QueryParams = Record<string, any>

import { api } from 'src/boot/axios'

export interface RequestArgs extends RequestInit {
  loading?: boolean,
  params: QueryParams | null,
}

export async function request<T> (url: string, rest: RequestArgs): Promise<AxiosResponse<T>> {
  return api(url, {
    data: rest.body,
    headers: rest.headers as AxiosHeaders,
    method: (rest.method as Method),
    params: {
      ...rest.params,
      loading: rest.loading,
    },
  })
}
