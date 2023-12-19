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
  import { useRoute, useRouter } from 'vue-router'
  import useNotify from 'src/utils/hooks/useNotify'

  //Store
  import { useAuthStore } from 'src/stores/modules/auth-store'

  //Types
  import { ILink } from 'src/stores/types/common/other'

  const $route = useRoute()
  const $router = useRouter()
  const { notifyError } = useNotify()
  const authStore = useAuthStore()

  const backLink = ref<ILink>({ name: 'Главная', path: '/' })

  authStore.fetchUser()
    .then(() => {
      if ($route.query.redirect) {
        $router.push($route.query.redirect.toString())
      } else {
        $router.replace('/')
      }
    })
    .catch((error) => {
      notifyError(error)
    })

</script>
