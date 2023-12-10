<template>
  <div
    class="page-section-container"
    :class="{ outlined: 'outlined' }"
  >
    <h2>Войти</h2>
    <div class="page-section-container__content">
      <slot/>
    </div>
  </div>
</template>
<script setup lang="ts">

  interface IPageSectionProps {
    title: string,
    outlined: boolean,
  }

  defineProps<IPageSectionProps>()

</script>
<style lang="scss" scoped>
  .page-section-container {
    @include display-flex(column, flex-start, start);
    row-gap: 26px;

    &__content {
      position: relative;
      width: 100%;
    }
  }

  .outlined {
    border-radius: $border-radius-xs;
    border: 1px solid #E9EAEE;
    padding: 35px 40px;
  }
</style>
