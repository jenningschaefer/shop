/**
 * @file tests/unit/services/order.service.spec.ts
 * @description Unit tests for OrderService
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { OrderService } from '~/services/order/order.service'
import type { Order } from '~/types'

describe('OrderService', () => {
  let service: OrderService

  beforeEach(() => {
    service = OrderService.getInstance()
  })

  describe('getInstance', () => {
    it('should return singleton instance', () => {
      const instance1 = OrderService.getInstance()
      const instance2 = OrderService.getInstance()
      expect(instance1).toBe(instance2)
    })
  })

  describe('getAll', () => {
    it('should return all orders', async () => {
      const orders = await service.getAll()
      expect(orders).toBeDefined()
      expect(Array.isArray(orders)).toBe(true)
    })

    it('should return orders with required properties', async () => {
      const orders = await service.getAll()
      if (orders.length > 0) {
        const order = orders[0]
        expect(order).toHaveProperty('order_id')
        expect(order).toHaveProperty('user_id')
        expect(order).toHaveProperty('order_date')
        expect(order).toHaveProperty('status')
        expect(order).toHaveProperty('products')
      }
    })
  })

  describe('getByOrderId', () => {
    it('should return order by ID', async () => {
      const orders = await service.getAll()
      const firstOrder = orders[0]
      if (firstOrder) {
        const orderId = firstOrder.order_id
        const order = await service.getByOrderId(orderId)
        expect(order).toBeDefined()
        expect(order?.order_id).toBe(orderId)
      }
    })

    it('should return null for non-existent order', async () => {
      const order = await service.getByOrderId('nonexistent-id')
      expect(order).toBeNull()
    })
  })

  describe('getByUserId', () => {
    it('should return orders for a user', async () => {
      const orders = await service.getAll()
      const firstOrder = orders[0]
      if (firstOrder) {
        const userId = firstOrder.user_id
        const userOrders = await service.getByUserId(userId)
        expect(userOrders).toBeDefined()
        userOrders.forEach((order) => {
          expect(order.user_id).toBe(userId)
        })
      }
    })

    it('should return empty array for user with no orders', async () => {
      const orders = await service.getByUserId(99999)
      expect(orders).toEqual([])
    })
  })

  describe('getRecentOrders', () => {
    it('should limit number of orders returned', async () => {
      const orders = await service.getAll()
      const firstOrder = orders[0]
      if (firstOrder) {
        const userId = firstOrder.user_id
        const recentOrders = await service.getRecentOrders(userId, 2)
        expect(recentOrders.length).toBeLessThanOrEqual(2)
      }
    })

    it('should sort orders by date descending', async () => {
      const orders = await service.getAll()
      const firstOrder = orders[0]
      if (firstOrder) {
        const userId = firstOrder.user_id
        const recentOrders = await service.getRecentOrders(userId, 10)

        for (let i = 1; i < recentOrders.length; i++) {
          const prevOrder = recentOrders[i - 1]
          const currOrder = recentOrders[i]
          if (prevOrder && currOrder) {
            expect(prevOrder.order_date >= currOrder.order_date).toBe(true)
          }
        }
      }
    })
  })

  describe('getByStatus', () => {
    it('should filter orders by status', async () => {
      const orders = await service.getAll()
      const firstOrder = orders[0]
      if (firstOrder) {
        const userId = firstOrder.user_id
        const status = firstOrder.status
        const filteredOrders = await service.getByStatus(userId, status)

        filteredOrders.forEach((order) => {
          expect(order.status).toBe(status)
        })
      }
    })
  })

  describe('calculateTotal', () => {
    it('should calculate order total correctly', () => {
      const mockOrder: Order = {
        order_id: '1',
        user_id: 1,
        order_date: '20240101',
        shipping_date: '20240103',
        status: 'Delivered',
        sum: '100.00',
        shipping: '10.00',
        payment_type: 'Credit Card',
        delivery_type: 'Standard',
        delivery_time: '3-5 days',
        products: [],
        shipping_address_id: 1,
        billing_address_id: 1,
        currency: 'euro',
        invoice_pdf: '',
      }

      const total = service.calculateTotal(mockOrder)
      expect(total).toBe(110)
    })

    it('should handle decimal values', () => {
      const mockOrder: Order = {
        order_id: '1',
        user_id: 1,
        order_date: '20240101',
        shipping_date: '20240103',
        status: 'Delivered',
        sum: '99.99',
        shipping: '5.50',
        payment_type: 'Credit Card',
        delivery_type: 'Standard',
        delivery_time: '3-5 days',
        products: [],
        shipping_address_id: 1,
        billing_address_id: 1,
        currency: 'euro',
        invoice_pdf: '',
      }

      const total = service.calculateTotal(mockOrder)
      expect(total).toBeCloseTo(105.49, 2)
    })
  })

  describe('formatOrderDate', () => {
    it('should format date correctly', () => {
      const formatted = service.formatOrderDate('20240115')
      expect(formatted).toBe('15.01.2024')
    })

    it('should handle different dates', () => {
      const formatted = service.formatOrderDate('20231231')
      expect(formatted).toBe('31.12.2023')
    })
  })
})
