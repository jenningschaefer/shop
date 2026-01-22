/**
 * @file composables/useOrders.ts
 * @description Composables for order data access
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Order } from '../types'
import ordersData from '../data/orders.json'

// Type assertion for JSON import
const orders = ordersData as Order[]

/**
 * Get all orders for a specific user
 * @param userId - User ID
 * @returns Array of orders belonging to the user
 */
export function useOrdersByUser(userId: number): Order[] {
  return orders.filter((order) => order.user_id === userId)
}

/**
 * Get a single order by order ID
 * @param orderId - Order ID (e.g., "000001")
 * @returns Order or undefined if not found
 */
export function useOrderByOrderId(orderId: string): Order | undefined {
  return orders.find((order) => order.order_id === orderId)
}

/**
 * Get all orders
 * @returns All orders
 */
export function useOrders(): Order[] {
  return orders
}

/**
 * Get recent orders for a user
 * @param userId - User ID
 * @param limit - Maximum number of orders to return
 * @returns Recent orders
 */
export function useRecentOrders(userId: number, limit: number = 5): Order[] {
  return useOrdersByUser(userId)
    .sort((a, b) => b.order_date.localeCompare(a.order_date))
    .slice(0, limit)
}
