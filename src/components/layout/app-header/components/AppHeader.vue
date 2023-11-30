<template>
  <q-header class="header row">
    <PageContainer>
      <div class="flex justify-between items-center">
        <DefaultPageLinkLogo/>
        <NavMenu/>
        <AppHeaderActions/>
      </div>
    </PageContainer>
  </q-header>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  align-items: center;
  height: 100px;

  background: #121214 !important;
}
</style>
