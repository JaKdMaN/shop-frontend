<template>
  <PageSection :title="title" outlined class="form-wrapper">
    <div class="column">
      <div class="form-wrapper__content">
        <slot />
      </div>
      <div class="form-wrapper__footer">
        <slot name="footer" />
      </div>
    </div>
  </PageSection>
</template>
<script setup lang="ts">

  interface IFormWrapperProps {
    title: string
  }

  defineProps<IFormWrapperProps>()

</script>

<style lang="scss" scoped>
  .form-wrapper {
    position: relative;
    height: 500px;

    &__footer {
      @include display-flex(row, center, center);
    }
  }

</style>
