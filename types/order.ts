/**
 * @file types/order.ts
 * @description Type definitions for orders
 * @author Jenning Schaefer
 * @license MIT
 */

/**
 * Order status types
 */
export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'

/**
 * Payment method types
 */
export type PaymentType = 'Credit Card' | 'PayPal' | 'Apple Pay' | 'Google Pay' | 'Bank Transfer'

/**
 * Currency types
 */
export type Currency = 'euro' | 'dollar'

/**
 * Order item (product in order)
 */
export interface OrderItem {
  /** Product ID */
  id: number
  /** Price at time of order */
  price: string
  /** Quantity ordered */
  amount: number
}

/**
 * Order entity
 */
export interface Order {
  /** Unique order identifier (e.g., "000001") */
  order_id: string
  /** User who placed the order */
  user_id: number
  /** Current order status */
  status: OrderStatus
  /** Order date (YYYYMMDD format) */
  order_date: string
  /** Shipping date (YYYYMMDD format) */
  shipping_date: string
  /** Shipping address ID */
  shipping_address_id: number
  /** Billing address ID */
  billing_address_id: number
  /** Delivery method */
  delivery_type: string
  /** Estimated delivery time */
  delivery_time: string
  /** Ordered products */
  products: OrderItem[]
  /** Payment method used */
  payment_type: PaymentType
  /** Order total (string for decimal precision) */
  sum: string
  /** Shipping cost (string for decimal precision) */
  shipping: string
  /** Currency used */
  currency: Currency
  /** Invoice PDF URL (if available) */
  invoice_pdf: string
}

/**
 * Order creation payload
 */
export interface CreateOrderPayload {
  user_id: number
  shipping_address_id: number
  billing_address_id: number
  delivery_type: string
  payment_type: PaymentType
  products: OrderItem[]
  currency: Currency
}
