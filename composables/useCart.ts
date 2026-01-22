/**
 * @file composables/useCart.ts
 * @description Composable for shopping cart functionality
 * @author Jenning Schaefer
 * @license MIT
 */

import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { CartItem, Product, CartTotals } from '../types'

const CART_STORAGE_KEY = 'cart'

/**
 * Shopping cart composable
 * Uses localStorage for persistence
 */
export function useCart() {
  // Initialize cart from localStorage
  const cart = useLocalStorage<CartItem[]>(CART_STORAGE_KEY, [])

  /**
   * Add a product to the cart
   * @param product - Product to add
   * @param quantity - Quantity to add (default: 1)
   */
  function addItem(product: Product, quantity: number = 1): void {
    const existingItem = cart.value.find((item: CartItem) => item.id === product.id)

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
   * Remove an item from the cart
   * @param productId - Product ID to remove
   */
  function removeItem(productId: number): void {
    cart.value = cart.value.filter((item: CartItem) => item.id !== productId)
  }

  /**
   * Update the quantity of an item
   * @param productId - Product ID
   * @param quantity - New quantity
   */
  function updateQuantity(productId: number, quantity: number): void {
    const item = cart.value.find((item: CartItem) => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeItem(productId)
      } else {
        item.amount = quantity
      }
    }
  }

  /**
   * Clear all items from the cart
   */
  function clearCart(): void {
    cart.value = []
  }

  /**
   * Get the total number of items in the cart
   */
  const itemCount = computed(() =>
    cart.value.reduce((sum: number, item: CartItem) => sum + item.amount, 0)
  )

  /**
   * Get the subtotal (before shipping/tax)
   */
  const subtotal = computed(() =>
    cart.value.reduce((sum: number, item: CartItem) => sum + item.price * item.amount, 0)
  )

  /**
   * Calculate cart totals
   * @param shippingCost - Shipping cost to add
   * @param taxRate - Tax rate (e.g., 0.19 for 19%)
   */
  function calculateTotals(
    shippingCost: number = 0,
    taxRate: number = 0
  ): CartTotals {
    const sub = subtotal.value
    const tax = sub * taxRate
    const total = sub + shippingCost + tax

    return {
      subtotal: sub,
      shipping: shippingCost,
      tax,
      total,
      itemCount: itemCount.value,
    }
  }

  /**
   * Check if cart is empty
   */
  const isEmpty = computed(() => cart.value.length === 0)

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    calculateTotals,
    isEmpty,
  }
}
