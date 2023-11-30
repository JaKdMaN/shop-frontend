<template>
  <div class="logo">
    <img
      :src="`src/assets/images/${imageType}-logo.svg`"
      alt="logo"
      class="logo__img default"
    >
    <img
      src="~assets/images/accent-logo.svg"
      alt="logo"
      class="logo__img accent"
    >
  </div>
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  interface Props {
    variant: 'header' | 'footer',
  }

  const props = defineProps<Props>()

  const imageType = computed(() => {
    return props.variant === 'header' ? 'default' : 'white'
  })

</script>

<style lang="scss" scoped>
  .logo {
    position: relative;

    &__img {
      display: block;
      object-fit: cover;
    }
    .accent {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
      }

    :hover {
      .default {
        opacity: 0;
        transition: $transition-default;
      }
      .accent {
        opacity: 1;
       transition: $transition-default;
      }
    }
  }

</style>
