<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({
  layout: 'checkout',
})

function formatPrice(price: number): string {
  if (locale.value === 'de') {
    return `${price.toFixed(2).replace('.', ',')} €`
  }
  return `$${price.toFixed(2)}`
}
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
                    Mr John Doe
                    <br />
                    mail@to.me
                    <br />
                    Street 45
                    <br />
                    12345 City
                    <br />
                    Germany
                  </address>
                </div>
                <div class="overview_accordion-address-container">
                  <h3 class="overview_accordion-address-title">
                    {{ t('checkout.billingAddress') }}
                  </h3>
                  <address>
                    Mr John Doe
                    <br />
                    mail@to.me
                    <br />
                    Street 45
                    <br />
                    12345 City
                    <br />
                    Germany
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
              <div class="overview_accordion-products">
                <div class="overview_accordion-products-name">Hermann D. Strauss Chair</div>
                <div class="overview_accordion-products-price">
                  <span>x2</span>
                  <span>{{ formatPrice(75.0) }}</span>
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
                <div class="overview_accordion-payment-name">Credit Card</div>
                <div class="overview_accordion-payment-price">
                  <span>{{ formatPrice(5.0) }}</span>
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
              Mr John Doe
              <br />
              mail@to.me
              <br />
              Street 45
              <br />
              12345 City
              <br />
              Germany
            </address>
          </div>
          <div class="overview_accordion-address-container">
            <h3 class="overview_accordion-address-title">{{ t('checkout.billingAddress') }}</h3>
            <address>
              Mr John Doe
              <br />
              mail@to.me
              <br />
              Street 45
              <br />
              12345 City
              <br />
              Germany
            </address>
          </div>
        </div>
      </div>
      <div class="overview_product">
        <div class="overview_heading">
          <span class="links">{{ t('nav.products') }}</span>
        </div>
        <div class="overview_accordion-products">
          <div class="overview_accordion-products-name">Hermann D. Strauss Chair</div>
          <div class="overview_accordion-products-price">
            <span>x2</span>
            <span>{{ formatPrice(75.0) }}</span>
          </div>
        </div>
      </div>
      <div class="overview_payment">
        <span>Credit Card</span>
        <span>{{ formatPrice(5.0) }}</span>
      </div>
      <div class="overview_shipping">
        <span>{{ t('cart.shipping') }}</span>
        <span>{{ formatPrice(5.0) }}</span>
      </div>
      <div class="overview_total">
        <span class="overview_total-desc">{{ t('cart.total') }}</span>
        <span class="overview_total-amount">{{ formatPrice(150.0) }}</span>
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
            <input type="checkbox" />
            <span class="space" />
            {{ t('checkout.acceptTerms') }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
