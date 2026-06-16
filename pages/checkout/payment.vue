<!--
  @file pages/checkout/payment.vue
  @description Checkout payment selection page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const flow = useCheckoutFlow()
// `flow` is a plain object of refs; nested access (flow.paymentIndex) is NOT unwrapped
// in the template, so destructure to a top-level ref to read/write the real state.
const { paymentIndex } = flow
// Shared source of truth for methods + fees (also used by the overview step).
const { methods: paymentMethods, selectedMethod, format } = useCheckoutPayments()

definePageMeta({
  layout: 'checkout',
})
</script>

<template>
  <div class="payment">
    <h1 class="checkout_title">{{ t('checkout.payment') }}</h1>
    <div class="payment_methods">
      <template v-for="(payment, index) in paymentMethods" :key="index">
        <div
          class="payment_methods-method"
          :class="paymentIndex === index ? 'active' : ''"
          @click="paymentIndex = index"
        >
          {{ payment.name }}
        </div>
      </template>
    </div>
    <div class="payment_fees">{{ t('checkout.fees') }}: {{ format(selectedMethod.fee) }}</div>
    <div class="payment_description">
      {{ selectedMethod.description }}
    </div>
  </div>
</template>
