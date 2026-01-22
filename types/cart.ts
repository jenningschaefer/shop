/**
 * @file types/cart.ts
 * @description Type definitions for shopping cart
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Product } from './product'

/**
 * Cart item (product with quantity)
 */
export interface CartItem {
  /** Product ID */
  id: number
  /** Product name (for display) */
  name: string
  /** Product image path */
  img: string
  /** Unit price */
  price: number
  /** Quantity in cart */
  amount: number
}

/**
 * Cart state
 */
export interface Cart {
  /** Items in cart */
  items: CartItem[]
  /** Last updated timestamp */
  updatedAt: string
}

/**
 * Add to cart payload
 */
export interface AddToCartPayload {
  product: Product
  quantity?: number
}

/**
 * Update cart item payload
 */
export interface UpdateCartItemPayload {
  productId: number
  quantity: number
}

/**
 * Cart totals
 */
export interface CartTotals {
  /** Subtotal before shipping */
  subtotal: number
  /** Shipping cost */
  shipping: number
  /** Grand total */
  total: number
  /** Number of items */
  itemCount: number
  /** Free shipping threshold */
  freeShippingThreshold: number
  /** Amount until free shipping */
  amountUntilFreeShipping: number
}
