<!--
  @file layouts/checkout.vue
  @description Layout for checkout flow pages
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const route = useRoute()

const isConfirmationPage = computed(() => route.name === 'checkout-confirmation')
const pageTitle = computed(() => {
  switch (route.name) {
    case 'checkout-address':
      return 'Address'
    case 'checkout-payment':
      return 'Payment'
    case 'checkout-overview':
      return 'Overview'
    default:
      return ''
  }
})
</script>

<template>
  <div class="checkout-layout">
    <div class="checkout-layout-main">
      <CheckoutHeader />
      <slot />
      <CheckoutNavigation v-if="!isConfirmationPage" />
    </div>
    <div v-if="!isConfirmationPage" class="checkout-layout-side">
      <h1>{{ pageTitle }}</h1>
    </div>
  </div>
  <Footer v-if="isConfirmationPage" />
</template>
