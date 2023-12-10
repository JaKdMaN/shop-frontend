<template>
  <div class="breadcrumbs">
    <RouterLink
      :to="link.path"
      class="breadcrumbs__link color--grey"
    >
      {{ link.name }}
    </RouterLink>
    <div class="slash color--grey">/</div>
    <span class="color--black">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ILink } from 'src/stores/types/common/other'

  interface IBreadCrumbsProps {
    link: ILink,
    title: string,
  }

  withDefaults(defineProps<IBreadCrumbsProps>(), {})

</script>
<style lang="scss" scoped>
  .breadcrumbs {
    @include display-flex(row, flex-start, center);
    gap: 15px;

    &__link:hover {
      color: $accent;
      transition: $transition-default;
    }
  }

</style>
