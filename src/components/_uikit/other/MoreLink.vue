<template>
  <div class="more-link">
    <RouterLink class="more-link__link" :to="to">
      {{ name }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  interface IMoreLinkProps {
    to: string,
    name: string,
  }

  defineProps<IMoreLinkProps>()

</script>

<style lang="scss" scoped>
  .more-link {
    color: #676767;
    text-decoration: underline;

    &:hover {
      color: $accent;
      transition: $transition-default;
    }
  }
</style>
