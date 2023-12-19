import { request } from 'src/utils/services/client'

export interface UserWithTokenResource {
  token: string,
  user: UserResource
}

export interface UserResource {
  id: number,
  name: string,
  surname: string,
  patronymic: string,
  email: string,
  phoneNumber: string,
  role: NameValueResource,
}

export interface NameValueResource {
  name: string,
  value: string | number,
}

export interface LoginRequestBody {
  username: string,
  password: string,
  remember: boolean,
}

export interface RegisterRequestBody {
  username: string,
  password: string,
  repeatPassword: string,
}

// Зарегистрироваться
export const AuthRegisterPostRequest = (body: RegisterRequestBody, options?: any) => request<UserWithTokenResource>('/auth/register', { body, method: 'POST', ...options })

// Войти в аккаунт
export const AuthLoginPostRequest = (body: LoginRequestBody, options?: any) => request<UserWithTokenResource>('/auth/login', { body, method: 'POST', ...options })

// Выйти из аккаунта
export const AuthLogoutPostRequest = (options?: any) => request<any>('/auth/register', { method: 'POST', ...options })

// Получить данные авторизованного пользователя
export const MeGetRequest = (options?: any) => request<UserResource>('/me', { method: 'GET', ...options })
