<!--
  @file pages/checkout/overview.vue
  @description Checkout order overview page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const flow = useCheckoutFlow()
const { cart, subtotal, shipping: shippingCost } = useCart()
const { selectedMethod, format } = useCheckoutPayments()

// `flow` is a plain object of refs; expose top-level refs so the template unwraps them.
const { acceptTerms } = flow
const shippingAddress = computed(() => flow.shipping.value)
const billingAddress = computed(() => flow.billing.value)

const grandTotal = computed(() => subtotal.value + shippingCost.value + selectedMethod.value.fee)

definePageMeta({
  layout: 'checkout',
})
</script>

<template>
  <div class="overview">
    <h1 class="checkout_title">{{ t('checkout.overview') }}</h1>
    <div class="overview_container">
      <div class="overview_accordion">
        <UIAccordion>
          <!-- address -->
          <UIAccordion-item>
            <template #accordion-trigger>
              <div class="overview_heading">
                <span class="links">{{ t('checkout.address') }}</span>
              </div>
            </template>
            <template #accordion-content>
              <div class="overview_accordion-address">
                <div class="overview_accordion-address-container">
                  <h3 class="overview_accordion-address-title">
                    {{ t('checkout.shippingAddress') }}
                  </h3>
                  <address>
                    {{ shippingAddress.firstName }} {{ shippingAddress.lastName }}
                    <br />
                    {{ shippingAddress.street }} {{ shippingAddress.houseNo }}
                    <br />
                    {{ shippingAddress.zip }} {{ shippingAddress.city }}
                    <br />
                    {{ shippingAddress.country }}
                  </address>
                </div>
                <div class="overview_accordion-address-container">
                  <h3 class="overview_accordion-address-title">
                    {{ t('checkout.billingAddress') }}
                  </h3>
                  <address>
                    {{ billingAddress.firstName }} {{ billingAddress.lastName }}
                    <br />
                    {{ billingAddress.email }}
                    <br />
                    {{ billingAddress.street }} {{ billingAddress.houseNo }}
                    <br />
                    {{ billingAddress.zip }} {{ billingAddress.city }}
                    <br />
                    {{ billingAddress.country }}
                  </address>
                </div>
              </div>
            </template>
          </UIAccordion-item>

          <!-- products -->
          <UIAccordion-item>
            <template #accordion-trigger>
              <div class="overview_heading">
                <span class="links">{{ t('nav.products') }}</span>
              </div>
            </template>
            <template #accordion-content>
              <div v-for="item in cart" :key="item.id" class="overview_accordion-products">
                <div class="overview_accordion-products-name">{{ item.name }}</div>
                <div class="overview_accordion-products-price">
                  <span>x{{ item.amount }}</span>
                  <span>{{ format(item.price * item.amount) }}</span>
                </div>
              </div>
            </template>
          </UIAccordion-item>

          <!-- payment -->
          <UIAccordion-item>
            <template #accordion-trigger>
              <div class="overview_heading">
                <span class="links">{{ t('checkout.payment') }}</span>
              </div>
            </template>
            <template #accordion-content>
              <div class="overview_accordion-payment">
                <div class="overview_accordion-payment-name">{{ selectedMethod.name }}</div>
                <div class="overview_accordion-payment-price">
                  <span>{{ format(selectedMethod.fee) }}</span>
                </div>
              </div>
            </template>
          </UIAccordion-item>
        </UIAccordion>
      </div>
      <div class="overview_address">
        <div class="overview_heading">
          <span class="links">{{ t('checkout.address') }}</span>
        </div>
        <div class="overview_accordion-address">
          <div class="overview_accordion-address-container">
            <h3 class="overview_accordion-address-title">{{ t('checkout.shippingAddress') }}</h3>
            <address>
              {{ shippingAddress.firstName }} {{ shippingAddress.lastName }}
              <br />
              {{ shippingAddress.street }} {{ shippingAddress.houseNo }}
              <br />
              {{ shippingAddress.zip }} {{ shippingAddress.city }}
              <br />
              {{ shippingAddress.country }}
            </address>
          </div>
          <div class="overview_accordion-address-container">
            <h3 class="overview_accordion-address-title">{{ t('checkout.billingAddress') }}</h3>
            <address>
              {{ billingAddress.firstName }} {{ billingAddress.lastName }}
              <br />
              {{ billingAddress.email }}
              <br />
              {{ billingAddress.street }} {{ billingAddress.houseNo }}
              <br />
              {{ billingAddress.zip }} {{ billingAddress.city }}
              <br />
              {{ billingAddress.country }}
            </address>
          </div>
        </div>
      </div>
      <div class="overview_product">
        <div class="overview_heading">
          <span class="links">{{ t('nav.products') }}</span>
        </div>
        <div v-for="item in cart" :key="item.id" class="overview_accordion-products">
          <div class="overview_accordion-products-name">{{ item.name }}</div>
          <div class="overview_accordion-products-price">
            <span>x{{ item.amount }}</span>
            <span>{{ format(item.price * item.amount) }}</span>
          </div>
        </div>
      </div>
      <div class="overview_payment">
        <span>{{ selectedMethod.name }}</span>
        <span>{{ format(selectedMethod.fee) }}</span>
      </div>
      <div class="overview_shipping">
        <span>{{ t('cart.shipping') }}</span>
        <span>{{ format(shippingCost) }}</span>
      </div>
      <div class="overview_total">
        <span class="overview_total-desc">{{ t('cart.total') }}</span>
        <span class="overview_total-amount">{{ format(grandTotal) }}</span>
      </div>
      <div class="overview_legal">
        <a class="overview_legal-tt">
          <svg class="overview_legal-tt_icon">
            <use href="~/assets/svg/icons.svg#download" />
          </svg>
          <div class="overview_legal-tt-text">{{ t('checkout.termsConditions') }}</div>
        </a>
        <div class="overview_legal-accept">
          <label>
            <input v-model="acceptTerms" type="checkbox" />
            <span class="space" />
            {{ t('checkout.acceptTerms') }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
