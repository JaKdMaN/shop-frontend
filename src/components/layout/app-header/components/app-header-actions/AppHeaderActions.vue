<template>
  <div class="app-header-actions">

    <AppHeaderActionSearch/>

    <RouterLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.path"
      class="app-header-actions__item"
    >
      <q-icon
        :name="link.icon"
        size="sm"
      />
    </RouterLink>

    <AppHeaderActionCart/>
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  const links = computed(() => {
    return [
      { icon: 'mdi-star-outline', path: '/favorite' },
      { icon: 'mdi-account', path: '/' },
    ]
  })
</script>

<style lang="scss" scoped>
  .app-header-actions {
    @include display-flex(row, flex-start, center);

    &__item {
      margin-left: 32px;

      :deep(.q-icon):hover {
        color: $accent;
        transition: $transition-default;
      }

      &.router-link-active {
        :deep(.q-icon) {
          color: $accent !important;
        }
    }
  }
}
</style>
