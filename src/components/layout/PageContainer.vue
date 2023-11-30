<template>
  <div class="page-container">
    <div class="page-container__content">
      <slot/>
    </div>
  </div>
</template>
<script lang="ts">

</script>
<style lang="scss" scoped>

.page-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__content {
    max-width: 1362px;
    width: 100%;
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;

    :deep(> *) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
