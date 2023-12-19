<template>
  <FormWrapper title="Регистрация">

    <div class="col mb-7">
      <BaseInput v-model="form.username" label="Email адрес:" />
    </div>

    <div class="col mb-7">
      <BaseInput v-model="form.password" label="Пароль:" />
    </div>

    <div class="col mb-7">
      <BaseInput v-model="form.repeatPassword" label="Повторите пароль:" />
    </div>

    <template #footer>
      <BaseButton label="Зарегистрироваться" @click="register"/>
    </template>
  </FormWrapper>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import useNotify from 'src/utils/hooks/useNotify'

  //Types
  import { AuthRegisterPostRequest, RegisterRequestBody } from 'src/stores/types/schema'

  const $router = useRouter()
  const { notifyError } = useNotify()

  const form = ref<RegisterRequestBody>({
    username: '',
    password: '',
    repeatPassword: '',
  })

  const register = async () => {
    try {
      await AuthRegisterPostRequest(form.value)
      $router.push('/')
    } catch (error) {
      notifyError(error)
    }
  }

</script>

<style lang="scss" scoped>
.footer {
  @include display-flex(row, center, center);
}
</style>
