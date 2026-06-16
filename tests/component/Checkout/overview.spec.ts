/**
 * @file tests/component/Checkout/overview.spec.ts
 * @description Component tests for the checkout overview page. Guards that the
 *   overview reflects the REAL flow state (entered address, cart contents and the
 *   payment method + fee selected on the payment step) instead of static placeholders.
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { computed } from 'vue'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import OverviewPage from '~/pages/checkout/overview.vue'
import { useCheckoutFlow } from '~/composables/useCheckoutFlow'

type Item = { id: number; name: string; img: string; price: number; amount: number }

// localStorage isn't available in the Nuxt happy-dom test env, so stub useCart with a
// controllable in-memory cart instead of relying on VueUse's storage sync.
const { cartState } = vi.hoisted(() => ({ cartState: { items: [] as Item[] } }))

mockNuxtImport('useCart', () => {
  return () => {
    const cart = computed(() => cartState.items)
    const subtotal = computed(() => cartState.items.reduce((s, i) => s + i.price * i.amount, 0))
    const shipping = computed(() => (subtotal.value >= 100 ? 0 : 9.99))
    return { cart, subtotal, shipping }
  }
})

const address = {
  firstName: 'John',
  lastName: 'Doe',
  country: 'Germany',
  street: 'Main Street',
  houseNo: '1',
  zip: '12345',
  city: 'Berlin',
}

describe('checkout/overview page', () => {
  beforeEach(() => {
    useCheckoutFlow().reset()
    cartState.items = []
  })

  it('renders the entered address, cart items and selected payment + total', async () => {
    const flow = useCheckoutFlow()
    flow.shipping.value = { ...address }
    flow.billing.value = { ...address, email: 'john@example.com' }
    flow.paymentIndex.value = 1 // Credit Card
    cartState.items = [{ id: 1, name: 'Voxel Chair', img: '/x.jpg', price: 50, amount: 2 }]

    const wrapper = await mountSuspended(OverviewPage)
    const text = wrapper.text()

    // Real address (shipping + billing email), not placeholders.
    expect(text).toContain('John Doe')
    expect(text).toContain('Main Street 1')
    expect(text).toContain('12345 Berlin')
    expect(text).toContain('john@example.com')

    // Real cart contents.
    expect(text).toContain('Voxel Chair')
    expect(text).toContain('x2')

    // Selected payment method + fee.
    expect(text).toContain('Credit Card')
    expect(text).toMatch(/2[.,]50/)

    // Total = subtotal (2 x 50 = 100) + free shipping (>=100) + 2.50 fee = 102.50
    expect(text).toMatch(/102[.,]50/)

    // No leftover static placeholders.
    expect(text).not.toContain('Hermann D. Strauss')
    expect(text).not.toContain('mail@to.me')
  })

  it('reflects a different payment method selection', async () => {
    const flow = useCheckoutFlow()
    flow.shipping.value = { ...address }
    flow.billing.value = { ...address, email: 'a@b.de' }
    flow.paymentIndex.value = 0 // Paypal
    cartState.items = [{ id: 1, name: 'Voxel Chair', img: '/x.jpg', price: 50, amount: 1 }]

    const wrapper = await mountSuspended(OverviewPage)
    expect(wrapper.text()).toContain('Paypal')
  })
})
