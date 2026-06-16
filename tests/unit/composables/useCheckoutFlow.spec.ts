/**
 * @file tests/unit/composables/useCheckoutFlow.spec.ts
 * @description Unit tests for the checkout flow state + validations.
 *   These tests document the expected behaviour of the checkout session and
 *   guard against the "step gate redirects back to address" class of bugs:
 *   the route middleware and the page components must observe the SAME flow
 *   state, otherwise navigating to /checkout/payment bounces back to /address.
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useCheckoutFlow } from '~/composables/useCheckoutFlow'

const validShipping = {
  firstName: 'John',
  lastName: 'Doe',
  country: 'Germany',
  street: 'Main Street',
  houseNo: '1',
  zip: '12345',
  city: 'Berlin',
}

function fillValidShipping(flow: ReturnType<typeof useCheckoutFlow>) {
  flow.shipping.value = { ...validShipping }
}

describe('useCheckoutFlow', () => {
  // Reset the shared session before each test so cases don't leak into each other.
  beforeEach(async () => {
    useCheckoutFlow().reset()
    await nextTick()
  })

  describe('shipping validation', () => {
    it('is invalid while empty', () => {
      expect(useCheckoutFlow().isShippingValid.value).toBe(false)
    })

    it('is valid once all required fields are filled', () => {
      const flow = useCheckoutFlow()
      fillValidShipping(flow)
      expect(flow.isShippingValid.value).toBe(true)
    })

    it('requires numeric house number and zip', () => {
      const flow = useCheckoutFlow()
      fillValidShipping(flow)
      flow.shipping.value = { ...flow.shipping.value, houseNo: 'abc' }
      expect(flow.isShippingValid.value).toBe(false)
    })
  })

  describe('billing validation', () => {
    it('requires an email even when "same as shipping" is checked', () => {
      const flow = useCheckoutFlow()
      fillValidShipping(flow)
      flow.billingSameAsShipping.value = true
      flow.billing.value = { ...flow.billing.value, email: '' }

      // shipping is complete, but billing email is missing -> address NOT valid
      expect(flow.isShippingValid.value).toBe(true)
      expect(flow.isBillingValid.value).toBe(false)
      expect(flow.isAddressValid.value).toBe(false)
    })

    it('is valid with "same as shipping" + a valid email', () => {
      const flow = useCheckoutFlow()
      fillValidShipping(flow)
      flow.billingSameAsShipping.value = true
      flow.billing.value = { ...flow.billing.value, email: 'john@example.com' }

      expect(flow.isBillingValid.value).toBe(true)
      expect(flow.isAddressValid.value).toBe(true)
    })

    it('rejects a malformed email', () => {
      const flow = useCheckoutFlow()
      fillValidShipping(flow)
      flow.billingSameAsShipping.value = true
      flow.billing.value = { ...flow.billing.value, email: 'not-an-email' }
      expect(flow.isBillingValid.value).toBe(false)
    })

    it('requires all billing fields when NOT same as shipping', () => {
      const flow = useCheckoutFlow()
      fillValidShipping(flow)
      flow.billingSameAsShipping.value = false
      flow.billing.value = { ...validShipping, email: 'john@example.com' }
      expect(flow.isBillingValid.value).toBe(true)

      flow.billing.value = { ...flow.billing.value, city: '' }
      expect(flow.isBillingValid.value).toBe(false)
    })
  })

  describe('shared session (component <-> route middleware)', () => {
    it('reflects mutations across separate useCheckoutFlow() instances', async () => {
      // Instance "A" stands in for the address page; instance "B" for the
      // global route middleware that runs on navigation to /checkout/payment.
      const pageInstance = useCheckoutFlow()
      pageInstance.startFromCart()
      fillValidShipping(pageInstance)
      pageInstance.billingSameAsShipping.value = true
      pageInstance.billing.value = { ...pageInstance.billing.value, email: 'john@example.com' }
      await nextTick()

      expect(pageInstance.isAddressValid.value).toBe(true)

      const middlewareInstance = useCheckoutFlow()
      expect(middlewareInstance.enteredFromCart.value).toBe(true)
      // If this fails, the middleware sees an empty flow and bounces
      // /checkout/payment back to /checkout/address.
      expect(middlewareInstance.isAddressValid.value).toBe(true)
    })
  })
})
