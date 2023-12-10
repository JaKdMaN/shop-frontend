<template>
  <q-btn
    v-bind="$attrs"
    class="base-button"
    :class="[
        {'base-button--small-size': smallSize},
        {'base-button--disable': disable},
        `base-button--${theme}`,
    ]"
    :label="label"
    :disable="disable"
  ></q-btn>
</template>

<script lang="ts" setup>
  //Core
  import { QBtn } from 'quasar'

  type QBtnType = InstanceType<typeof QBtn>['$props']

  interface Props extends /* @vue-ignore */ QBtnType {
    label: QBtnType['label'],
    color?: QBtnType['color'],
    theme?: 'dark' | 'light',
    smallSize?: boolean,
    disable?: boolean
  }

  withDefaults(defineProps<Props>(), {
    iconToRight: false,
    color: 'primary',
    theme: 'dark',
  })

</script>

<style lang="scss" scoped>
  .base-button {
    width: $base-button-width;
    height: $base-button-height;
    white-space: nowrap;

    &--small-size {
      width: 200px;
      min-width: 200px;
    }

    &:before {
      box-shadow: none;
    }

    &--dark {
      background: $primary;
      color: white;
    }

    &--light {
      background: transparent;
      color: $primary;
      border: 1px solid #8C8F96;
    }

    &--small-size {
      width: 200px;
      min-width: 200px;
    }

    &--disable {
      opacity: 1 !important;
      background: rgba(0, 0, 0, 0.10) !important;
      color: #00000033 !important;
    }
  }
</style>
