<template>
  <FormWrapper title="Войти">

    <div class="col mb-7">
      <BaseInput v-model="form.email" label="Email адрес:" />
    </div>

    <div class="col mb-7">
      <BaseInput v-model="form.password" label="Пароль:" />
    </div>

    <div class="row justify-between items-center mb-7">
      <BaseCheckbox v-model="form.rememberMe" icon="mdi-check" label="Запомнить меня" />
      <MoreLink to="/" name="Забыли пароль?" />
    </div>

    <template #footer>
      <BaseButton small-size label="Войти" />
    </template>
  </FormWrapper>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const form = ref({
    email: '',
    password: '',
    rememberMe: false,
  })

</script>
