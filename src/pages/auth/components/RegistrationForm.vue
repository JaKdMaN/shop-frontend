<template>
  <FormWrapper title="Войти">

    <div class="col mb-7">
      <BaseInput v-model="form.email" label="Email адрес:" />
    </div>

    <div class="col mb-7">
      <BaseInput v-model="form.password" label="Пароль:" />
    </div>

    <div class="col mb-7">
      <BaseInput v-model="form.repeatPassword" label="Повторите пароль:" />
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
    repeatPassword: '',
  })

</script>

<style lang="scss" scoped>
.footer {
  @include display-flex(row, center, center);
}
</style>
