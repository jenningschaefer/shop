/**
 * @file composables/useOrders.ts
 * @description Vue composables for order data access
 * @author Jenning Schaefer
 * @license MIT
 */

import { ref } from 'vue'
import type { Order, OrderStatus } from '~/types'
import { OrderService, OrderRepository } from '~/services'

// Get service instances
const orderService = OrderService.getInstance()
const orderRepo = OrderRepository.getInstance()

/**
 * Get all orders for a specific user
 * @param userId - User ID
 * @returns Array of orders belonging to the user
 */
export function useOrdersByUser(userId: number): Order[] {
  return orderRepo.getData().filter((order) => order.user_id === userId)
}

/**
 * Get a single order by order ID
 * @param orderId - Order ID (e.g., "000001")
 * @returns Order or undefined if not found
 */
export function useOrderByOrderId(orderId: string): Order | undefined {
  return orderRepo.getData().find((order) => order.order_id === orderId)
}

/**
 * Get all orders
 * @returns All orders
 */
export function useOrders(): Order[] {
  return orderRepo.getData()
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

/**
 * Reactive orders composable with async loading
 */
export function useOrdersAsync(userId: number) {
  const orders = ref<Order[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchOrders(): Promise<void> {
    loading.value = true
    error.value = null
    try {
      orders.value = await orderService.getByUserId(userId)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  async function fetchRecentOrders(limit: number = 5): Promise<void> {
    loading.value = true
    error.value = null
    try {
      orders.value = await orderService.getRecentOrders(userId, limit)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  async function fetchByStatus(status: OrderStatus): Promise<void> {
    loading.value = true
    error.value = null
    try {
      orders.value = await orderService.getByStatus(userId, status)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  return {
    orders,
    loading,
    error,
    fetchOrders,
    fetchRecentOrders,
    fetchByStatus,
  }
}

/**
 * Calculate order total
 */
export function useOrderTotal(order: Order): number {
  return orderService.calculateTotal(order)
}

/**
 * Format order date
 */
export function useFormatOrderDate(dateString: string): string {
  return orderService.formatOrderDate(dateString)
}
