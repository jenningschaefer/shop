/**
 * @file tests/component/Checkout/confirmation.spec.ts
 * @description Component test for the checkout confirmation page. Once the order is
 *   placed and the success page is shown, the cart and the checkout flow must be reset
 *   so a fresh checkout can start.
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import ConfirmationPage from '~/pages/checkout/confirmation.vue'
import { useCheckoutFlow } from '~/composables/useCheckoutFlow'

type Item = { id: number; name: string; img: string; price: number; amount: number }

// localStorage isn't available in the Nuxt happy-dom env, so stub useCart with an
// in-memory cart whose clearCart() we can observe.
const { cartState, clearCart } = vi.hoisted(() => ({
  cartState: { items: [] as Item[] },
  clearCart: vi.fn(),
}))

mockNuxtImport('useCart', () => {
  return () => ({
    cart: { value: cartState.items },
    clearCart: () => {
      clearCart()
      cartState.items = []
    },
  })
})

describe('checkout/confirmation page', () => {
  beforeEach(() => {
    useCheckoutFlow().reset()
    cartState.items = [{ id: 1, name: 'Voxel Chair', img: '/x.jpg', price: 50, amount: 2 }]
    clearCart.mockClear()
  })

  it('clears the cart and resets the flow on mount', async () => {
    const flow = useCheckoutFlow()
    flow.startFromCart()
    flow.shipping.value = {
      firstName: 'John',
      lastName: 'Doe',
      country: 'Germany',
      street: 'Main Street',
      houseNo: '1',
      zip: '12345',
      city: 'Berlin',
    }
    flow.orderPlaced.value = true

    await mountSuspended(ConfirmationPage)

    // Cart emptied
    expect(clearCart).toHaveBeenCalledTimes(1)
    expect(cartState.items).toHaveLength(0)

    // Flow reset back to defaults
    const after = useCheckoutFlow()
    expect(after.enteredFromCart.value).toBe(false)
    expect(after.orderPlaced.value).toBe(false)
    expect(after.shipping.value.firstName).toBe('')
  })
})
