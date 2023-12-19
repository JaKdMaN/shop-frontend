import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { baseURL } from 'src/utils/services/config'
import { ref } from 'vue'
import {
  AuthLoginPostRequest,
  AuthLogoutPostRequest,
  AuthRegisterPostRequest,
  LoginRequestBody,
  MeGetRequest,
  RegisterRequestBody,
  UserResource,
} from 'stores/types/schema'

export const useAuthStore = defineStore('authStore', () => {

  const token = ref<string| null>(null)

  const fetchRefreshToken = async (): Promise<void> => {
    const { data } = await api<string>(`${baseURL}/refresh`, {
      withCredentials: true,
    })

    token.value = data
    sessionStorage.setItem('token', token.value)
  }

  // ----------------------- User ----------------------- >>

  const user = ref<UserResource | null>(null)

  const fetchUser = async () => {
    if (!user.value) {
      const { data } = await MeGetRequest()

      user.value = data
    }
  }


   // ------------------- Registration ------------------- >>

   const register = async (payload: RegisterRequestBody) => {
      const { data } = await AuthRegisterPostRequest(payload)

      user.value = data.user
      token.value = data.token
      sessionStorage.setItem('token', data.token)
   }


   // ---------------------- Login ----------------------- >>

   const login = async (payload: LoginRequestBody) => {
      const { data } = await AuthLoginPostRequest(payload)

      user.value = data.user
      token.value = data.token
      sessionStorage.setItem('token', token.value)
   }

    // ---------------------- Logout ---------------------- >>

    const logout = async () => {
      await AuthLogoutPostRequest()

      user.value = null
      token.value = null
      sessionStorage.removeItem('token')
    }


  return {
    fetchRefreshToken,
    user,
    fetchUser,
    register,
    login,
    logout,
  }
})
