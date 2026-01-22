/**
 * @file services/cart/cart.service.ts
 * @description Cart service with business logic
 * @author Jenning Schaefer
 * @license MIT
 *
 * Note: Cart uses localStorage, so no repository pattern needed.
 * This service will be integrated with Pinia store in Phase 4.
 */

import type { CartItem, Product, CartTotals } from '~/types'

const CART_STORAGE_KEY = 'shop-cart'

/**
 * Cart service handling shopping cart operations
 * Uses localStorage for persistence (client-side only)
 */
export class CartService {
  private static instance: CartService | null = null

  private constructor() {}

  /**
   * Singleton pattern
   */
  static getInstance(): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService()
    }
    return CartService.instance
  }

  /**
   * Get cart items from storage
   */
  getItems(): CartItem[] {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  }

  /**
   * Save cart items to storage
   */
  private saveItems(items: CartItem[]): void {
    if (typeof window === 'undefined') return
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }

  /**
   * Add product to cart
   */
  addItem(product: Product, quantity: number = 1): CartItem[] {
    const items = this.getItems()
    const existingIndex = items.findIndex((item) => item.id === product.id)

    if (existingIndex >= 0) {
      items[existingIndex].amount += quantity
    } else {
      items.push({
        id: product.id,
        name: product.name,
        img: product.img,
        price: parseFloat(product.price),
        amount: quantity,
      })
    }

    this.saveItems(items)
    return items
  }

  /**
   * Remove item from cart
   */
  removeItem(productId: number): CartItem[] {
    const items = this.getItems().filter((item) => item.id !== productId)
    this.saveItems(items)
    return items
  }

  /**
   * Update item quantity
   */
  updateQuantity(productId: number, quantity: number): CartItem[] {
    const items = this.getItems()
    const item = items.find((i) => i.id === productId)

    if (item) {
      if (quantity <= 0) {
        return this.removeItem(productId)
      }
      item.amount = quantity
      this.saveItems(items)
    }

    return items
  }

  /**
   * Increment item quantity
   */
  incrementItem(productId: number): CartItem[] {
    const items = this.getItems()
    const item = items.find((i) => i.id === productId)
    if (item) {
      item.amount += 1
      this.saveItems(items)
    }
    return items
  }

  /**
   * Decrement item quantity
   */
  decrementItem(productId: number): CartItem[] {
    const items = this.getItems()
    const item = items.find((i) => i.id === productId)

    if (item) {
      if (item.amount <= 1) {
        return this.removeItem(productId)
      }
      item.amount -= 1
      this.saveItems(items)
    }

    return items
  }

  /**
   * Clear entire cart
   */
  clearCart(): void {
    this.saveItems([])
  }

  /**
   * Calculate cart totals
   */
  calculateTotals(items?: CartItem[]): CartTotals {
    const cartItems = items ?? this.getItems()

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.amount, 0)
    const itemCount = cartItems.reduce((count, item) => count + item.amount, 0)

    // Shipping calculation (free over $100)
    const shipping = subtotal >= 100 ? 0 : 9.99
    const total = subtotal + shipping

    return {
      subtotal,
      shipping,
      total,
      itemCount,
      freeShippingThreshold: 100,
      amountUntilFreeShipping: Math.max(0, 100 - subtotal),
    }
  }

  /**
   * Check if cart is empty
   */
  isEmpty(): boolean {
    return this.getItems().length === 0
  }

  /**
   * Get item count
   */
  getItemCount(): number {
    return this.getItems().reduce((count, item) => count + item.amount, 0)
  }
}
