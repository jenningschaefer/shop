<script setup>
const route = useRoute();
</script>

<template>
    <div class="checkout-layout">
      <div class="checkout-layout-main">
        <CheckoutHeader />
        <slot />
        <CheckoutNavigation v-if="route.name != 'checkout-confirmation'"/>
      </div>
      <div class="checkout-layout-side" v-if="route.name != 'checkout-confirmation'">
        <h1 v-if="route.name == 'checkout-address'" >Address</h1>
        <h1 v-if="route.name == 'checkout-payment'" >Payment</h1>
        <h1 v-if="route.name == 'checkout-overview'" >Overview</h1>
      </div>
    </div>
    <Footer v-if="route.name == 'checkout-confirmation'" />
</template>