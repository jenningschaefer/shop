<!--
  @file components/UI/accordion.vue
  @description Accordion container component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface AccordionState {
  count: number
  active: number | null
}

const accordion = ref<AccordionState>({
  count: 0,
  active: null,
})

provide('Accordion', accordion)
</script>

<template>
  <ul class="accordion">
    <slot />
  </ul>
</template>
