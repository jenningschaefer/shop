/**
 * @file composables/useCheckoutFlow.ts
 * @description Session-backed checkout flow state + validations (guards /checkout routes)
 * @author Jenning Schaefer
 * @license MIT
 */

import { computed } from 'vue'

export interface CheckoutAddress {
  firstName: string
  lastName: string
  country: string
  street: string
  houseNo: string
  zip: string
  city: string
}

function emptyAddress(): CheckoutAddress {
  return {
    firstName: '',
    lastName: '',
    country: '',
    street: '',
    houseNo: '',
    zip: '',
    city: '',
  }
}

function isNonEmpty(value: string): boolean {
  return value.trim().length > 0
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function useCheckoutFlow() {
  // NOTE: We use Nuxt's useState (not a cookie or sessionStorage) so the flow is a SINGLE shared,
  // synchronously-consistent reactive source. It is available in route middleware without a component
  // instance, and—unlike multiple useCookie() refs that only reconcile asynchronously—the route guard
  // sees page mutations immediately. A full page reload clears it, which also enforces the
  // "no deep-linking into checkout" guard below.
  type CheckoutFlowState = {
    enteredFromCart: boolean
    shipping: CheckoutAddress
    billingSameAsShipping: boolean
    billing: CheckoutAddress & { email: string }
    paymentIndex: number
    acceptTerms: boolean
    addressAttempted: boolean
    orderPlaced: boolean
    fillDummy: boolean
  }

  const state = useState<CheckoutFlowState>(
    'shop-checkout-flow',
    (): CheckoutFlowState => ({
      enteredFromCart: false,
      shipping: emptyAddress(),
      billingSameAsShipping: true,
      billing: { ...emptyAddress(), email: '' },
      paymentIndex: 0,
      acceptTerms: false,
      addressAttempted: false,
      orderPlaced: false,
      fillDummy: false,
    })
  )

  const enteredFromCart = computed({
    get: () => state.value.enteredFromCart,
    set: (v: boolean) => {
      state.value.enteredFromCart = v
    },
  })

  const shipping = computed({
    get: () => state.value.shipping,
    set: (v: CheckoutAddress) => {
      state.value.shipping = v
    },
  })

  const billingSameAsShipping = computed({
    get: () => state.value.billingSameAsShipping,
    set: (v: boolean) => {
      state.value.billingSameAsShipping = v
    },
  })

  const billing = computed({
    get: () => state.value.billing,
    set: (v: CheckoutAddress & { email: string }) => {
      state.value.billing = v
    },
  })

  const paymentIndex = computed({
    get: () => state.value.paymentIndex,
    set: (v: number) => {
      state.value.paymentIndex = v
    },
  })

  const acceptTerms = computed({
    get: () => state.value.acceptTerms,
    set: (v: boolean) => {
      state.value.acceptTerms = v
    },
  })

  const addressAttempted = computed({
    get: () => state.value.addressAttempted,
    set: (v: boolean) => {
      state.value.addressAttempted = v
    },
  })

  const orderPlaced = computed({
    get: () => state.value.orderPlaced,
    set: (v: boolean) => {
      state.value.orderPlaced = v
    },
  })

  const fillDummy = computed({
    get: () => state.value.fillDummy,
    set: (v: boolean) => {
      state.value.fillDummy = v
    },
  })

  const isShippingValid = computed(() => {
    const a = shipping.value
    return (
      isNonEmpty(a.firstName) &&
      isNonEmpty(a.lastName) &&
      isNonEmpty(a.country) &&
      isNonEmpty(a.street) &&
      /^\d+$/.test(a.houseNo.trim()) &&
      /^\d+$/.test(a.zip.trim()) &&
      isNonEmpty(a.city)
    )
  })

  const isBillingValid = computed(() => {
    const a = billing.value
    // Email is always required for the billing address, even when the rest is
    // copied from the shipping address (shipping has no email field).
    if (billingSameAsShipping.value) return isEmail(a.email)
    return (
      isNonEmpty(a.firstName) &&
      isNonEmpty(a.lastName) &&
      isEmail(a.email) &&
      isNonEmpty(a.country) &&
      isNonEmpty(a.street) &&
      /^\d+$/.test(a.houseNo.trim()) &&
      /^\d+$/.test(a.zip.trim()) &&
      isNonEmpty(a.city)
    )
  })

  const isAddressValid = computed(() => isShippingValid.value && isBillingValid.value)
  const isPaymentValid = computed(() => Number.isFinite(paymentIndex.value))
  const isOverviewValid = computed(() => acceptTerms.value === true)

  function startFromCart(): void {
    enteredFromCart.value = true
    orderPlaced.value = false
    addressAttempted.value = false
  }

  function reset(): void {
    enteredFromCart.value = false
    shipping.value = emptyAddress()
    billingSameAsShipping.value = true
    billing.value = { ...emptyAddress(), email: '' }
    paymentIndex.value = 0
    acceptTerms.value = false
    addressAttempted.value = false
    orderPlaced.value = false
    fillDummy.value = false
  }

  return {
    state,
    enteredFromCart,
    shipping,
    billingSameAsShipping,
    billing,
    paymentIndex,
    acceptTerms,
    addressAttempted,
    orderPlaced,
    fillDummy,
    isShippingValid,
    isBillingValid,
    isAddressValid,
    isPaymentValid,
    isOverviewValid,
    startFromCart,
    reset,
  }
}
