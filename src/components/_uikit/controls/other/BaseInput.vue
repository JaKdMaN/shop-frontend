<template>
  <q-input
    v-bind="$attrs"
    v-model="innerValue"
    :label="label"
    :error-message="errorMessage"
    :error="!!errorMessage"
    no-error-icon
    hide-bottom-space
    borderless
    standout="text-accent"
    @blur="handleBlur"
    @update:model-value="updateValue"
  >
  </q-input>
</template>

<script setup lang="ts">
  //Core
  import { ref, watch } from 'vue'

  //types
  import { InputValueType, BaseInputValueUpdateType } from 'stores/types/common/other'
  import { QInput, QInputProps } from 'quasar'

  export interface IBaseInputProps extends QInputProps {
    modelValue: InputValueType,
    value?: InputValueType,
    errorMessage?: string
  }

  const props = defineProps<IBaseInputProps>()

  const $emit = defineEmits<{
    (e: 'update:modelValue', value: BaseInputValueUpdateType): void
    (e: 'input', value: BaseInputValueUpdateType): void
    (e: 'blur', value: { event: Event, value: BaseInputValueUpdateType }): void
  }>()

  let innerValue = ref(props.value || props.modelValue)

  function setInnerValue () {
    innerValue.value = props.value || props.modelValue
  }

  function updateValue (value: BaseInputValueUpdateType) {
    $emit('update:modelValue', value)
    $emit('input', value)
  }

  function handleBlur (event: Event) {
    $emit('blur', {
      event,
      value: innerValue.value as BaseInputValueUpdateType,
    })
  }

  watch(() => [props.value, props.modelValue], () => {
    setInnerValue()
  })

</script>

<style scoped>

</style>
