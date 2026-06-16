<!--
  @file pages/checkout/confirmation.vue
  @description Checkout confirmation page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const flow = useCheckoutFlow()
const { clearCart } = useCart()

definePageMeta({
  layout: 'checkout',
})

// The order is complete: empty the cart and reset the checkout flow so a new
// checkout starts fresh. This runs only after the route guard has already
// allowed this page (orderPlaced === true), so resetting here is safe.
onMounted(() => {
  clearCart()
  flow.reset()
})
</script>

<template>
  <div class="confirmation">
    <div class="confirmation_logo">
      <NuxtLink to="/">
        <svg>
          <use href="~/assets/svg/logos.svg#logo" />
        </svg>
      </NuxtLink>
    </div>
    <div class="confirmation_success">
      <div class="confirmation_success_panel">
        <svg class="confirmation_success_panel-icon">
          <use href="~/assets/svg/icons.svg#check" />
        </svg>
        <div class="confirmation_success_panel-title">{{ t('checkout.orderPlaced') }}</div>
        <div class="confirmation_success_panel-text">{{ t('checkout.thankYou') }}</div>
        <NuxtLink to="/" class="confirmation_success_panel-button">
          <button class="dark-btn-socondary confirmation_success_panel-button" type="button">
            {{ t('nav.home') }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
