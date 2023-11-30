<template>
  <q-layout>
    <AppHeader />
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
