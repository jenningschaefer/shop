<!--
  @file components/Checkout/Navigation.vue
  @description Checkout flow navigation with prev/next buttons
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const flow = useCheckoutFlow()
const toast = useToast()

const isOverviewPage = computed(() => route.name === 'checkout-overview')

const canGoNext = computed(() => {
  switch (route.name) {
    case 'checkout-address':
      return flow.isAddressValid.value
    case 'checkout-payment':
      return flow.isAddressValid.value && flow.isPaymentValid.value
    case 'checkout-overview':
      return flow.isAddressValid.value && flow.isPaymentValid.value && flow.isOverviewValid.value
    default:
      return false
  }
})

function goPrev(): void {
  switch (route.name) {
    case 'checkout-payment':
      router.push('/checkout/address')
      return
    case 'checkout-overview':
      router.push('/checkout/payment')
      return
    default:
      // Leaving checkout resets the gate (must re-enter from cart)
      flow.reset()
      router.push('/products/list')
  }
}

function goNext(): void {
  if (!canGoNext.value) {
    if (route.name === 'checkout-address') {
      flow.addressAttempted.value = true
      toast.error(t('checkout.fillRequired'))
    } else if (route.name === 'checkout-overview' && !flow.isOverviewValid.value) {
      // Address & payment are already gated on entry, so the only blocker here is the terms checkbox.
      toast.error(t('checkout.acceptTermsRequired'))
    }
    return
  }

  switch (route.name) {
    case 'checkout-address':
      router.push('/checkout/payment')
      return
    case 'checkout-payment':
      router.push('/checkout/overview')
      return
    case 'checkout-overview':
      flow.orderPlaced.value = true
      router.push('/checkout/confirmation')
      return
  }
}
</script>

<template>
  <div class="checkout-navigation">
    <div class="checkout-navigation_button">
      <button
        class="vesta-btn-secondary checkout-navigation_button-prev"
        type="button"
        @click="goPrev"
      >
        {{ t('common.back') }}
      </button>
      <!-- Don't hard-disable: we want click to mark fields as attempted and show validation feedback -->
      <button class="vesta-btn" type="button" :aria-disabled="!canGoNext" @click="goNext">
        {{ isOverviewPage ? t('checkout.placeOrder') : t('common.next') }}
      </button>
    </div>
    <CheckoutProgressBar />
  </div>
</template>
