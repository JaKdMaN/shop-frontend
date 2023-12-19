<template>
  <FormWrapper title="Войти">

    <div class="col mb-7">
      <BaseInput v-model="form.username" label="Email адрес:" />
    </div>

    <div class="col mb-7">
      <BaseInput v-model="form.password" label="Пароль:" />
    </div>

    <div class="row justify-between items-center mb-7">
      <BaseCheckbox v-model="form.remember" icon="mdi-check" label="Запомнить меня" />
      <MoreLink to="/" name="Забыли пароль?" />
    </div>

    <template #footer>
      <BaseButton small-size label="Войти" @click="submit"/>
    </template>
  </FormWrapper>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'
  import useNotify from 'src/utils/hooks/useNotify'
  import { useRouter } from 'vue-router'

  //Store
  import { useAuthStore } from 'src/stores/modules/auth-store'

  //Types
  import { LoginRequestBody } from 'src/stores/types/schema'


  const { notifyError } = useNotify()
  const authStore = useAuthStore()
  const $router = useRouter()

  const form = ref<LoginRequestBody>({
    username: '',
    password: '',
    remember: false,
  })

  const submit = async () => {
    try {
      await authStore.login(form.value)
      $router.push('/')
    } catch (error) {
      notifyError(error)
    }
  }

</script>
