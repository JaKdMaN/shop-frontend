<template>
  <div class="nav-menu">
    <RouterLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.path"
      class="nav-menu__link"
    >
      {{ link.name }}
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  const links = computed(() => {
    return [
      { name: 'Одежда', path: '/' },
      { name: 'Обувь', path: '/' },
      { name: 'Аксессуары', path: '/' },
      { name: 'Бренды', path: '/' },
      { name: 'Расчёт стоимости', path: '/' },
      { name: 'Информация', path: '/' },
    ]
  })
</script>
<style lang="scss" scoped>
  .nav-menu {
    @include display-flex(row, flex-start, center);
    gap: 48px;

    &__link:hover {
      color: $accent;
      transition: $transition-default;
    }
  }
</style>
