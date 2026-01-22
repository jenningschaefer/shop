/**
 * @file composables/useCart.ts
 * @description Vue composable for shopping cart management
 * @author Jenning Schaefer
 * @license MIT
 */

import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { CartItem, Product, CartTotals } from '~/types'

const CART_STORAGE_KEY = 'cart'

/**
 * Main cart composable
 * Provides reactive cart state with localStorage persistence
 */
export function useCart() {
  // Reactive cart state with localStorage sync
  const cart = useLocalStorage<CartItem[]>(CART_STORAGE_KEY, [])

  /**
   * Add item to cart
   */
  function addItem(product: Product, quantity: number = 1): void {
    const existingItem = cart.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.amount += quantity
    } else {
      cart.value.push({
        id: product.id,
        name: product.name,
        img: product.img,
        price: parseFloat(product.price_us),
        amount: quantity,
      })
    }
  }

  /**
   * Remove item from cart
   */
  function removeItem(productId: number): void {
    const index = cart.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  }

  /**
   * Increment item quantity
   */
  function incrementItem(productId: number): void {
    const item = cart.value.find((i) => i.id === productId)
    if (item) {
      item.amount += 1
    }
  }

  /**
   * Decrement item quantity
   */
  function decrementItem(productId: number): void {
    const item = cart.value.find((i) => i.id === productId)
    if (item) {
      if (item.amount <= 1) {
        removeItem(productId)
      } else {
        item.amount -= 1
      }
    }
  }

  /**
   * Update item quantity
   */
  function updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    const item = cart.value.find((i) => i.id === productId)
    if (item) {
      item.amount = quantity
    }
  }

  /**
   * Clear entire cart
   */
  function clearCart(): void {
    cart.value = []
  }

  /**
   * Check if product is in cart
   */
  function isInCart(productId: number): boolean {
    return cart.value.some((item) => item.id === productId)
  }

  /**
   * Get quantity of specific product in cart
   */
  function getQuantity(productId: number): number {
    const item = cart.value.find((i) => i.id === productId)
    return item?.amount ?? 0
  }

  // Computed properties
  const isEmpty = computed(() => cart.value.length === 0)

  const itemCount = computed(() =>
    cart.value.reduce((count, item) => count + item.amount, 0)
  )

  const subtotal = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.amount, 0)
  )

  const shipping = computed(() => (subtotal.value >= 100 ? 0 : 9.99))

  const total = computed(() => subtotal.value + shipping.value)

  const totals = computed<CartTotals>(() => ({
    subtotal: subtotal.value,
    shipping: shipping.value,
    total: total.value,
    itemCount: itemCount.value,
    freeShippingThreshold: 100,
    amountUntilFreeShipping: Math.max(0, 100 - subtotal.value),
  }))

  const hasFreeShipping = computed(() => subtotal.value >= 100)

  return {
    // State
    cart,
    // Actions
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    updateQuantity,
    clearCart,
    isInCart,
    getQuantity,
    // Computed
    isEmpty,
    itemCount,
    subtotal,
    shipping,
    total,
    totals,
    hasFreeShipping,
  }
}

/**
 * Lightweight cart badge composable
 * Only returns item count for nav badge
 */
export function useCartBadge() {
  const cart = useLocalStorage<CartItem[]>(CART_STORAGE_KEY, [])

  const count = computed(() =>
    cart.value.reduce((sum, item) => sum + item.amount, 0)
  )

  const hasItems = computed(() => count.value > 0)

  return { count, hasItems }
}
