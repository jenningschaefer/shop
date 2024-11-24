<script setup>
const route = useRoute();
</script>

<template>
    <div class="checkout-layout">
      <CheckoutHeader />
      <slot />
      <CheckoutNavigation v-if="route.name != 'checkout-confirmation'"/>
      <Footer v-else />
  </div>
</template>