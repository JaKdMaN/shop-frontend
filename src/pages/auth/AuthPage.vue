<template>
  <PageContainer
    :backLink="backLink"
    title="Аккаунт"
    class="auth-page"
  >
    <div class="row q-col-gutter-x-xl">
      <div class="col-6">
        <LoginForm/>
      </div>
      <div class="col-6">
        <RegistrationForm/>
      </div>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
  //Core
  import { ref } from 'vue'

  //Types
  import { ILink } from 'src/stores/types/common/other'

  const backLink = ref<ILink>({ name: 'Главная', path: '/' })
</script>
