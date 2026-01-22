/**
 * @file stores/cart.ts
 * @description Pinia store for shopping cart state management
 * @author Jenning Schaefer
 * @license MIT
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem, Product, CartTotals } from '~/types'

const CART_STORAGE_KEY = 'shop-cart'

/**
 * Cart store - manages shopping cart state with localStorage persistence
 */
export const useCartStore = defineStore('cart', () => {
  // ============================================
  // State
  // ============================================
  const items = ref<CartItem[]>([])
  const isInitialized = ref(false)

  // ============================================
  // Getters (Computed)
  // ============================================
  const isEmpty = computed(() => items.value.length === 0)

  const itemCount = computed(() => items.value.reduce((count, item) => count + item.amount, 0))

  const subtotal = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.amount, 0)
  )

  const shipping = computed(() => (subtotal.value >= 100 ? 0 : 9.99))

  const total = computed(() => subtotal.value + shipping.value)

  const hasFreeShipping = computed(() => subtotal.value >= 100)

  const amountUntilFreeShipping = computed(() => Math.max(0, 100 - subtotal.value))

  const totals = computed<CartTotals>(() => ({
    subtotal: subtotal.value,
    shipping: shipping.value,
    total: total.value,
    itemCount: itemCount.value,
    freeShippingThreshold: 100,
    amountUntilFreeShipping: amountUntilFreeShipping.value,
  }))

  // ============================================
  // Actions
  // ============================================

  /**
   * Initialize cart from localStorage
   */
  function init(): void {
    if (isInitialized.value) return
    if (typeof window === 'undefined') return

    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) {
      try {
        items.value = JSON.parse(stored)
      } catch {
        items.value = []
      }
    }
    isInitialized.value = true
  }

  /**
   * Persist cart to localStorage
   */
  function persist(): void {
    if (typeof window === 'undefined') return
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items.value))
  }

  /**
   * Add product to cart
   */
  function addItem(product: Product, quantity: number = 1): void {
    const existing = items.value.find((item) => item.id === product.id)

    if (existing) {
      existing.amount += quantity
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        img: product.img,
        price: parseFloat(product.price),
        amount: quantity,
      })
    }
    persist()
  }

  /**
   * Remove item from cart
   */
  function removeItem(productId: number): void {
    const index = items.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
      persist()
    }
  }

  /**
   * Increment item quantity
   */
  function incrementItem(productId: number): void {
    const item = items.value.find((i) => i.id === productId)
    if (item) {
      item.amount += 1
      persist()
    }
  }

  /**
   * Decrement item quantity
   */
  function decrementItem(productId: number): void {
    const item = items.value.find((i) => i.id === productId)
    if (item) {
      if (item.amount <= 1) {
        removeItem(productId)
      } else {
        item.amount -= 1
        persist()
      }
    }
  }

  /**
   * Update item quantity directly
   */
  function updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    const item = items.value.find((i) => i.id === productId)
    if (item) {
      item.amount = quantity
      persist()
    }
  }

  /**
   * Clear entire cart
   */
  function clearCart(): void {
    items.value = []
    persist()
  }

  /**
   * Check if product is in cart
   */
  function isInCart(productId: number): boolean {
    return items.value.some((item) => item.id === productId)
  }

  /**
   * Get quantity of specific product
   */
  function getQuantity(productId: number): number {
    const item = items.value.find((i) => i.id === productId)
    return item?.amount ?? 0
  }

  return {
    // State
    items,
    isInitialized,
    // Getters
    isEmpty,
    itemCount,
    subtotal,
    shipping,
    total,
    hasFreeShipping,
    amountUntilFreeShipping,
    totals,
    // Actions
    init,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    updateQuantity,
    clearCart,
    isInCart,
    getQuantity,
  }
})
