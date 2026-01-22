<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  layout: 'checkout',
})
</script>

<template>
  <div class="address">
    <h1 class="checkout_title">{{ t('checkout.address') }}</h1>
    <div class="address-container">
      <UIAddress-tabs>
        <UIAddress-item active="true" :title="t('checkout.shippingAddress')">
          <template #heading>{{ t('checkout.shippingAddress') }}</template>
          <template #content>
            <form action="">
              <div class="login_forms-group">
                <input class="" type="text" :placeholder="t('address.firstName')" />
                <input class="" type="text" :placeholder="t('address.lastName')" />
                <input class="" type="email" :placeholder="t('auth.email')" />
                <input class="" type="text" :placeholder="t('address.country')" />
                <input class="" type="text" :placeholder="t('address.street')" />
                <input class="" type="text" placeholder="House No." />
                <input class="" type="text" :placeholder="t('address.zip')" />
                <input class="" type="text" :placeholder="t('address.city')" />
              </div>
            </form>
          </template>
        </UIAddress-item>
        <UIAddress-item :title="t('checkout.billingAddress')">
          <template #heading>{{ t('checkout.billingAddress') }}</template>
          <template #content>
            <form action="">
              <div class="login_forms-group">
                <label>
                  <input type="checkbox" />
                  {{ t('checkout.sameAsShipping') }}
                </label>
                <input class="" type="text" :placeholder="t('address.firstName')" />
                <input class="" type="text" :placeholder="t('address.lastName')" />
                <input class="" type="email" :placeholder="t('auth.email')" />
                <input class="" type="text" :placeholder="t('address.country')" />
                <input class="" type="text" :placeholder="t('address.street')" />
                <input class="" type="text" :placeholder="t('checkout.houseNo')" />
                <input class="" type="text" :placeholder="t('address.zip')" />
                <input class="" type="text" :placeholder="t('address.city')" />
              </div>
            </form>
          </template>
        </UIAddress-item>
      </UIAddress-tabs>
    </div>
  </div>
</template>
