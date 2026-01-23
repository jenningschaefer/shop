<!--
  @file pages/checkout/address.vue
  @description Checkout address selection page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const flow = useCheckoutFlow()

const fillDummy = computed({
  get: () => flow.fillDummy.value,
  set: (v: boolean) => {
    flow.fillDummy.value = v
  },
})

const touched = reactive<Record<string, boolean>>({})

function touch(key: string): void {
  touched[key] = true
}

function isNonEmpty(v: string): boolean {
  return v.trim().length > 0
}

function isDigits(v: string): boolean {
  return /^\d+$/.test(v.trim())
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

function showInvalid(key: string): boolean {
  return Boolean(flow.addressAttempted.value || touched[key])
}

const shippingInvalid = computed(() => ({
  firstName: showInvalid('s.firstName') && !isNonEmpty(flow.shipping.value.firstName),
  lastName: showInvalid('s.lastName') && !isNonEmpty(flow.shipping.value.lastName),
  country: showInvalid('s.country') && !isNonEmpty(flow.shipping.value.country),
  street: showInvalid('s.street') && !isNonEmpty(flow.shipping.value.street),
  houseNo: showInvalid('s.houseNo') && !isDigits(flow.shipping.value.houseNo),
  zip: showInvalid('s.zip') && !isDigits(flow.shipping.value.zip),
  city: showInvalid('s.city') && !isNonEmpty(flow.shipping.value.city),
}))

const billingInvalid = computed(() => {
  if (flow.billingSameAsShipping.value) {
    return {
      firstName: false,
      lastName: false,
      email: false,
      country: false,
      street: false,
      houseNo: false,
      zip: false,
      city: false,
    }
  }

  const b = flow.billing.value
  return {
    firstName: showInvalid('b.firstName') && !isNonEmpty(b.firstName),
    lastName: showInvalid('b.lastName') && !isNonEmpty(b.lastName),
    email: showInvalid('b.email') && !isEmail(b.email),
    country: showInvalid('b.country') && !isNonEmpty(b.country),
    street: showInvalid('b.street') && !isNonEmpty(b.street),
    houseNo: showInvalid('b.houseNo') && !isDigits(b.houseNo),
    zip: showInvalid('b.zip') && !isDigits(b.zip),
    city: showInvalid('b.city') && !isNonEmpty(b.city),
  }
})

function applyDummyData(): void {
  flow.shipping.value = {
    firstName: 'John',
    lastName: 'Doe',
    country: 'Germany',
    street: 'Main Street',
    houseNo: '1',
    zip: '12345',
    city: 'Berlin',
  }

  if (flow.billingSameAsShipping.value) {
    flow.billing.value = { ...flow.billing.value, ...flow.shipping.value }
  }
}

watch(fillDummy, (enabled) => {
  if (enabled) applyDummyData()
})

watch(
  () => flow.billingSameAsShipping.value,
  (same) => {
    if (same) {
      flow.billing.value = { ...flow.billing.value, ...flow.shipping.value }
    }
  },
  { immediate: true }
)

watch(
  () => flow.shipping.value,
  (shipping) => {
    if (flow.billingSameAsShipping.value) {
      flow.billing.value = { ...flow.billing.value, ...shipping }
    }
  },
  { deep: true }
)

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
                <label>
                  <input v-model="fillDummy" type="checkbox" />
                  {{ t('checkout.fillDummy') }}
                </label>
                <input
                  v-model="flow.shipping.firstName"
                  :class="{ 'input-invalid': shippingInvalid.firstName }"
                  class=""
                  type="text"
                  :placeholder="t('address.firstName')"
                  @blur="touch('s.firstName')"
                />
                <input
                  v-model="flow.shipping.lastName"
                  :class="{ 'input-invalid': shippingInvalid.lastName }"
                  class=""
                  type="text"
                  :placeholder="t('address.lastName')"
                  @blur="touch('s.lastName')"
                />
                <input
                  v-model="flow.shipping.country"
                  :class="{ 'input-invalid': shippingInvalid.country }"
                  class=""
                  type="text"
                  :placeholder="t('address.country')"
                  @blur="touch('s.country')"
                />
                <input
                  v-model="flow.shipping.street"
                  :class="{ 'input-invalid': shippingInvalid.street }"
                  class=""
                  type="text"
                  :placeholder="t('address.street')"
                  @blur="touch('s.street')"
                />
                <input
                  v-model="flow.shipping.houseNo"
                  :class="{ 'input-invalid': shippingInvalid.houseNo }"
                  class=""
                  type="text"
                  :placeholder="t('checkout.houseNo')"
                  inputmode="numeric"
                  @blur="touch('s.houseNo')"
                />
                <input
                  v-model="flow.shipping.zip"
                  :class="{ 'input-invalid': shippingInvalid.zip }"
                  class=""
                  type="text"
                  :placeholder="t('address.zip')"
                  inputmode="numeric"
                  @blur="touch('s.zip')"
                />
                <input
                  v-model="flow.shipping.city"
                  :class="{ 'input-invalid': shippingInvalid.city }"
                  class=""
                  type="text"
                  :placeholder="t('address.city')"
                  @blur="touch('s.city')"
                />
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
                  <input v-model="flow.billingSameAsShipping" type="checkbox" />
                  {{ t('checkout.sameAsShipping') }}
                </label>
                <input
                  v-model="flow.billing.firstName"
                  :class="{ 'input-invalid': billingInvalid.firstName }"
                  class=""
                  type="text"
                  :placeholder="t('address.firstName')"
                  :disabled="flow.billingSameAsShipping"
                  @blur="touch('b.firstName')"
                />
                <input
                  v-model="flow.billing.lastName"
                  :class="{ 'input-invalid': billingInvalid.lastName }"
                  class=""
                  type="text"
                  :placeholder="t('address.lastName')"
                  :disabled="flow.billingSameAsShipping"
                  @blur="touch('b.lastName')"
                />
                <input
                  v-model="flow.billing.email"
                  :class="{ 'input-invalid': billingInvalid.email }"
                  class=""
                  type="email"
                  :placeholder="t('auth.email')"
                  :disabled="flow.billingSameAsShipping"
                  @blur="touch('b.email')"
                />
                <input
                  v-model="flow.billing.country"
                  :class="{ 'input-invalid': billingInvalid.country }"
                  class=""
                  type="text"
                  :placeholder="t('address.country')"
                  :disabled="flow.billingSameAsShipping"
                  @blur="touch('b.country')"
                />
                <input
                  v-model="flow.billing.street"
                  :class="{ 'input-invalid': billingInvalid.street }"
                  class=""
                  type="text"
                  :placeholder="t('address.street')"
                  :disabled="flow.billingSameAsShipping"
                  @blur="touch('b.street')"
                />
                <input
                  v-model="flow.billing.houseNo"
                  :class="{ 'input-invalid': billingInvalid.houseNo }"
                  class=""
                  type="text"
                  :placeholder="t('checkout.houseNo')"
                  :disabled="flow.billingSameAsShipping"
                  inputmode="numeric"
                  @blur="touch('b.houseNo')"
                />
                <input
                  v-model="flow.billing.zip"
                  :class="{ 'input-invalid': billingInvalid.zip }"
                  class=""
                  type="text"
                  :placeholder="t('address.zip')"
                  :disabled="flow.billingSameAsShipping"
                  inputmode="numeric"
                  @blur="touch('b.zip')"
                />
                <input
                  v-model="flow.billing.city"
                  :class="{ 'input-invalid': billingInvalid.city }"
                  class=""
                  type="text"
                  :placeholder="t('address.city')"
                  :disabled="flow.billingSameAsShipping"
                  @blur="touch('b.city')"
                />
              </div>
            </form>
          </template>
        </UIAddress-item>
      </UIAddress-tabs>
    </div>
  </div>
</template>
