<!--
  @file components/UI/counter.vue
  @description Quantity counter component with plus/minus buttons
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface Props {
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  min: 1,
  max: 99,
})

const model = defineModel<number>({ default: 1 })

function plus(): void {
  if (model.value < props.max) {
    model.value++
  }
}

function minus(): void {
  if (model.value > props.min) {
    model.value--
  }
}
</script>

<template>
  <div class="counter">
    <button
      class="counter_btn"
      type="button"
      :disabled="model <= min"
      @click="minus"
    >
      -
    </button>
    <div>{{ model }}</div>
    <button
      class="counter_btn"
      type="button"
      :disabled="model >= max"
      @click="plus"
    >
      +
    </button>
  </div>
</template>
