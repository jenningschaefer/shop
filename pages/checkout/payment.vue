<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({
  layout: 'checkout',
})

const paymentMethods = computed(() => [
  {
    name: 'Paypal',
    fees: locale.value === 'de' ? '2,50 €' : '$2.50',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
  {
    name: 'Credit Card',
    fees: locale.value === 'de' ? '2,50 €' : '$2.50',
    description:
      'We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. Your information is securely encrypted and protected.',
  },
  {
    name: 'Apple/Google Pay',
    fees: locale.value === 'de' ? '2,50 €' : '$2.50',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
  },
])

const paymentIndex = ref(0)
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
    <div class="payment_fees">
      {{ t('checkout.fees') }}: {{ paymentMethods[paymentIndex].fees }}
    </div>
    <div class="payment_description">
      {{ paymentMethods[paymentIndex].description }}
    </div>
  </div>
</template>
