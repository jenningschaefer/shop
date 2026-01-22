<!--
  @file components/Checkout/Header.vue
  @description Checkout flow header with back navigation
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
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
</script>

<template>
  <div class="checkout-header">
    <NuxtLink v-if="!isConfirmationPage" :to="getPreviousRoute()">
      <svg class="checkout-header_back">
        <use href="~/assets/svg/icons.svg#arrow-left" />
      </svg>
    </NuxtLink>
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
