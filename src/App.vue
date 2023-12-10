<template>
  <q-layout>
    <AppHeader />
    <q-page-container>
      <q-page class="page">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { useMeta } from 'quasar'

  useMeta(() => {
    return {
      title: 'Магазин одежды',
      titleTemplate: (title) => `${title} - XWEAR`,
    }
  })
</script>
<style lang="scss" scoped>
.page {
  display: flex;
}
</style>
