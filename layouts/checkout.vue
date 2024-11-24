<script setup>
const route = useRoute();
</script>

<template>
    <div class="checkout-layout">
      <CheckoutHeader />
      <slot />
      <CheckoutNavigation v-if="route.name != 'checkout-confirmation'"/>
      <div v-else></div>
  </div>
</template>