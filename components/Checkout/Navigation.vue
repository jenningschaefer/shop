<!--
  @file components/Checkout/Navigation.vue
  @description Checkout flow navigation with prev/next buttons
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

function getNextRoute(): string {
  switch (route.name) {
    case 'checkout-payment':
      return '/checkout/overview'
    case 'checkout-overview':
      return '/checkout/confirmation'
    default:
      return '/checkout/payment'
  }
}

function getPreviousRoute(): string {
  switch (route.name) {
    case 'checkout-payment':
      return '/checkout/address'
    case 'checkout-overview':
      return '/checkout/payment'
    default:
      return '/products/list'
  }
}

const isOverviewPage = computed(() => route.name === 'checkout-overview')
</script>

<template>
  <div class="checkout-navigation">
    <div class="checkout-navigation_button">
      <NuxtLink :to="getPreviousRoute()" class="checkout-navigation_button-prev">
        <button class="vesta-btn-secondary" type="button">{{ t('common.back') }}</button>
      </NuxtLink>
      <NuxtLink :to="getNextRoute()">
        <button class="vesta-btn" type="button">
          {{ isOverviewPage ? t('checkout.placeOrder') : t('common.next') }}
        </button>
      </NuxtLink>
    </div>
    <CheckoutProgressBar />
  </div>
</template>
