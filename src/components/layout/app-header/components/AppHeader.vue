<template>
  <q-header class="header row">
    <div class="header__inner">
      <DefaultPageLinkLogo />
      <NavMenu />
      <AppHeaderActions />
    </div>
  </q-header>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100px;

  background: $primary !important;

  &__inner {
    @include display-flex(row, space-between, center);
    max-width: 1362px;
    width: 100%;
  }
}
</style>
