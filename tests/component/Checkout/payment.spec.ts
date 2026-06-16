/**
 * @file tests/component/Checkout/payment.spec.ts
 * @description Component tests for the checkout payment page.
 *   Regression guard: the page indexed `paymentMethods[flow.paymentIndex]` where
 *   flow.paymentIndex is a ref that is NOT unwrapped in the template, so it
 *   resolved to `undefined` and threw while rendering — which left the previous
 *   (address) page on screen even though the URL had already changed to /payment.
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PaymentPage from '~/pages/checkout/payment.vue'
import { useCheckoutFlow } from '~/composables/useCheckoutFlow'

describe('checkout/payment page', () => {
  beforeEach(() => {
    useCheckoutFlow().reset()
  })

  it('renders the selected method fees + description without crashing', async () => {
    const wrapper = await mountSuspended(PaymentPage)

    const fees = wrapper.find('.payment_fees')
    expect(fees.exists()).toBe(true)
    // A real fee value must show — not "[object Object]" and not a render crash.
    expect(fees.text()).toMatch(/\d/)
    expect(fees.text()).not.toContain('[object Object]')
    expect(wrapper.find('.payment_description').text().length).toBeGreaterThan(0)
  })

  it('selects a payment method on click and reflects it in the flow state', async () => {
    const wrapper = await mountSuspended(PaymentPage)
    const methods = wrapper.findAll('.payment_methods-method')
    expect(methods.length).toBeGreaterThan(1)

    await methods[1].trigger('click')

    expect(methods[1].classes()).toContain('active')
    expect(useCheckoutFlow().paymentIndex.value).toBe(1)
  })
})
