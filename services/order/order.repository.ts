/**
 * @file services/order/order.repository.ts
 * @description Order repository implementation
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Order } from '~/types'
import { JsonRepository, type IReadOnlyRepository } from '../base.repository'
import ordersData from '~/data/orders.json'

/**
 * Extended repository interface for orders
 */
export interface IOrderRepository extends IReadOnlyRepository<Order, string> {
  findByUserId(userId: number): Promise<Order[]>
  findByOrderId(orderId: string): Promise<Order | null>
}

/**
 * JSON-based order repository
 * Note: Order IDs are strings (e.g., "000001")
 */
export class OrderRepository
  extends JsonRepository<Order & { id: string }, string>
  implements IOrderRepository
{
  private static instance: OrderRepository | null = null

  private constructor() {
    // Map order_id to id for base repository compatibility
    const mappedData = (ordersData as Order[]).map((order) => ({
      ...order,
      id: order.order_id,
    }))
    super(mappedData)
  }

  /**
   * Singleton pattern
   */
  static getInstance(): OrderRepository {
    if (!OrderRepository.instance) {
      OrderRepository.instance = new OrderRepository()
    }
    return OrderRepository.instance
  }

  async findByUserId(userId: number): Promise<Order[]> {
    await this.simulateDelay()
    return this.data.filter((order) => order.user_id === userId)
  }

  async findByOrderId(orderId: string): Promise<Order | null> {
    await this.simulateDelay()
    return this.data.find((order) => order.order_id === orderId) ?? null
  }

  /**
   * Override to use string-based ID generation
   */
  protected generateId(): string {
    if (this.data.length === 0) return '000001'
    const maxId = Math.max(
      ...this.data.map((order) => parseInt(order.order_id, 10))
    )
    return String(maxId + 1).padStart(6, '0')
  }
}
