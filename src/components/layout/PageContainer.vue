<template>
  <div class="page-container">
    <BreadCrumbs
    class="mt-4"
      v-if="backLink && title"
      :link="backLink"
      :title="title"
    />
    <h1 v-if="title">{{ title }}</h1>
    <div class="page-container__content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ILink } from 'src/stores/types/common/other'

  interface IPageContainerProps {
    backLink?: ILink,
    title?: string,
  }

  defineProps<IPageContainerProps>()

</script>
<style lang="scss" scoped>
.page-container {
  @include display-flex(column, flex-start, flex-start);
  flex-grow: 1;
  row-gap: 46px;
  position: relative;
  max-width: 1362px;
  margin-left: auto;
  margin-right: auto;

  &__content {
    position: relative;
    width: 100%;
  }
}
</style>
