/**
 * @file tests/unit/middleware/checkout.spec.ts
 * @description Integration tests for the global checkout route guard.
 *   This is where the "I press next, the URL/title shows payment but I still
 *   see the address page" bug lives: if the middleware decides the address is
 *   not yet valid, it redirects /checkout/payment back to /checkout/address.
 *   These tests run the REAL middleware against the REAL flow state (Nuxt env)
 *   and assert exactly when it redirects.
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import type { RouteLocationNormalized } from 'vue-router'
import checkoutMiddleware from '~/middleware/checkout.global'
import { useCheckoutFlow } from '~/composables/useCheckoutFlow'

// Capture navigateTo() calls instead of actually navigating.
const { navigateToMock } = vi.hoisted(() => ({ navigateToMock: vi.fn((to: string) => to) }))
mockNuxtImport('navigateTo', () => navigateToMock)

const validShipping = {
  firstName: 'John',
  lastName: 'Doe',
  country: 'Germany',
  street: 'Main Street',
  houseNo: '1',
  zip: '12345',
  city: 'Berlin',
}

/** Build the minimal route object the middleware reads (`to.path`). */
function routeTo(path: string): RouteLocationNormalized {
  return { path, fullPath: path, name: undefined } as unknown as RouteLocationNormalized
}

/** Run the global middleware; returns the navigateTo redirect target, or undefined. */
function runGuard(path: string): string | undefined {
  const from = routeTo('/')
  const result = checkoutMiddleware(routeTo(path), from)
  return result as string | undefined
}

/** Put the flow into a fully-valid, ready-for-payment state (as the page would). */
async function makeReadyForPayment() {
  const flow = useCheckoutFlow()
  flow.startFromCart()
  flow.shipping.value = { ...validShipping }
  flow.billingSameAsShipping.value = true
  flow.billing.value = { ...flow.billing.value, email: 'john@example.com' }
  await nextTick()
  return flow
}

describe('checkout.global middleware', () => {
  beforeEach(async () => {
    useCheckoutFlow().reset()
    navigateToMock.mockClear()
    await nextTick()
  })

  it('ignores non-checkout routes', () => {
    runGuard('/products/list')
    expect(navigateToMock).not.toHaveBeenCalled()
  })

  it('kicks you out of checkout if you did not enter from the cart', () => {
    runGuard('/checkout/address')
    expect(navigateToMock).toHaveBeenCalledWith('/products/list')
  })

  it('allows the address step once entered from cart', () => {
    useCheckoutFlow().startFromCart()
    runGuard('/checkout/address')
    expect(navigateToMock).not.toHaveBeenCalled()
  })

  it('redirects payment -> address while the address is incomplete', () => {
    const flow = useCheckoutFlow()
    flow.startFromCart()
    flow.shipping.value = { ...validShipping } // shipping ok, but billing email missing
    runGuard('/checkout/payment')
    expect(navigateToMock).toHaveBeenCalledWith('/checkout/address')
  })

  it('redirects payment -> address when billing email is missing (same-as-shipping)', async () => {
    const flow = await makeReadyForPayment()
    flow.billing.value = { ...flow.billing.value, email: '' }
    await nextTick()
    runGuard('/checkout/payment')
    expect(navigateToMock).toHaveBeenCalledWith('/checkout/address')
  })

  it('ALLOWS payment once shipping + billing email are valid (core repro)', async () => {
    await makeReadyForPayment()
    runGuard('/checkout/payment')
    // If this fails, pressing "next" on a fully-filled address bounces back.
    expect(navigateToMock).not.toHaveBeenCalled()
  })

  it('redirects overview -> payment until payment step is valid', async () => {
    await makeReadyForPayment()
    // paymentIndex defaults to 0 which is "valid", so overview should be reachable
    runGuard('/checkout/overview')
    expect(navigateToMock).not.toHaveBeenCalled()
  })

  it('redirects confirmation -> overview until the order is placed', async () => {
    const flow = await makeReadyForPayment()
    flow.acceptTerms.value = true
    await nextTick()
    runGuard('/checkout/confirmation')
    expect(navigateToMock).toHaveBeenCalledWith('/checkout/overview')
  })
})
