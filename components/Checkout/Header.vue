<!--
  @file components/Checkout/Header.vue
  @description Checkout flow header with back navigation
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const flow = useCheckoutFlow()
const openMenu = ref(false)

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

const isConfirmationPage = computed(() => route.name === 'checkout-confirmation')

function goBack(): void {
  if (route.name === 'checkout-address') {
    flow.reset()
    router.push('/products/list')
    return
  }
  router.push(getPreviousRoute())
}
</script>

<template>
  <div class="checkout-header">
    <button v-if="!isConfirmationPage" type="button" class="checkout-header_back" @click="goBack">
      <svg class="checkout-header_back">
        <use href="~/assets/svg/icons.svg#arrow-left" />
      </svg>
    </button>
    <div v-else />
    <svg class="checkout-header_menu" @click="openMenu = true">
      <use href="~/assets/svg/icons.svg#menu" />
    </svg>
  </div>
  <UISidenav v-model="openMenu">
    <template #title>{{ $t('nav.menu') }}</template>
    <template #content>
      <MenuCheckout />
    </template>
  </UISidenav>
</template>
