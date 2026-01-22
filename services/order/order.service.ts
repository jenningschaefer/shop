/**
 * @file services/order/order.service.ts
 * @description Order service with business logic
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Order, OrderStatus } from '~/types'
import { OrderRepository, type IOrderRepository } from './order.repository'

/**
 * Order service handling all order-related business logic
 */
export class OrderService {
  private static instance: OrderService | null = null

  private constructor(private readonly orderRepo: IOrderRepository) {}

  /**
   * Singleton pattern
   */
  static getInstance(): OrderService {
    if (!OrderService.instance) {
      OrderService.instance = new OrderService(OrderRepository.getInstance())
    }
    return OrderService.instance
  }

  /**
   * Get all orders
   */
  async getAll(): Promise<Order[]> {
    return this.orderRepo.findAll()
  }

  /**
   * Get order by order ID
   */
  async getByOrderId(orderId: string): Promise<Order | null> {
    return this.orderRepo.findByOrderId(orderId)
  }

  /**
   * Get orders for a specific user
   */
  async getByUserId(userId: number): Promise<Order[]> {
    return this.orderRepo.findByUserId(userId)
  }

  /**
   * Get recent orders for a user
   */
  async getRecentOrders(userId: number, limit: number = 5): Promise<Order[]> {
    const orders = await this.getByUserId(userId)
    return orders
      .sort((a, b) => b.order_date.localeCompare(a.order_date))
      .slice(0, limit)
  }

  /**
   * Get orders by status
   */
  async getByStatus(userId: number, status: OrderStatus): Promise<Order[]> {
    const orders = await this.getByUserId(userId)
    return orders.filter((order) => order.status === status)
  }

  /**
   * Calculate order total including shipping
   */
  calculateTotal(order: Order): number {
    const sum = parseFloat(order.sum)
    const shipping = parseFloat(order.shipping)
    return sum + shipping
  }

  /**
   * Format order date for display
   */
  formatOrderDate(dateString: string): string {
    // Date format: YYYYMMDD
    const year = dateString.slice(0, 4)
    const month = dateString.slice(4, 6)
    const day = dateString.slice(6, 8)
    return `${day}.${month}.${year}`
  }
}
