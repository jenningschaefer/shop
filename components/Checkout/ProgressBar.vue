<!--
  @file components/Checkout/ProgressBar.vue
  @description Checkout progress indicator
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const route = useRoute()

const isPaymentOrLater = computed(
  () => route.name === 'checkout-payment' || route.name === 'checkout-overview'
)

const isOverview = computed(() => route.name === 'checkout-overview')
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar_step active" />
    <div class="progress-bar_step" :class="{ active: isPaymentOrLater }" />
    <div class="progress-bar_step" :class="{ active: isOverview }" />
  </div>
</template>
