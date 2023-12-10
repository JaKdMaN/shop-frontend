<template>
  <q-checkbox
    class="base-checkbox"
    :class="{ 'with-label': label}"
    :model-value="_value"
    :label="label"
    :disable="disable"
    @update:model-value="updateValue"
  />
</template>

<script setup lang="ts">
  //Core
  import { computed } from 'vue'

  //Types
  import { BaseInputValueUpdateType, CheckboxInputValueType } from 'stores/types/common/other'

  interface IBaseCheckbox {
    modelValue: CheckboxInputValueType,
    value?: CheckboxInputValueType,
    label: string,
    icon: string,
    placeholder?: string,
    disable?: boolean,
  }

  const props = defineProps<IBaseCheckbox>()

  const $emit = defineEmits<{
    (e: 'update:modelValue', value: BaseInputValueUpdateType): void
    (e: 'input', value: BaseInputValueUpdateType): void
  }>()

  const _value = computed(() => props.modelValue || props.value || false)

  function updateValue (value: BaseInputValueUpdateType) {
    $emit('update:modelValue', value)
    $emit('input', value)
  }

</script>

<style lang="scss" scoped>

</style>
