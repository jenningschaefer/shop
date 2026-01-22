/**
 * @file tests/unit/stores/cart.spec.ts
 * @description Unit tests for cart Pinia store
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '~/stores/cart'
import type { Product } from '~/types'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    removeItem: vi.fn((key: string) => {
      store[key] = undefined as unknown as string
    }),
    clear: vi.fn(() => {
      store = {}
    }),
  }
})()

Object.defineProperty(global, 'localStorage', { value: localStorageMock })

const mockProduct: Product = {
  id: 1,
  name: 'Test Chair',
  name_url: 'test-chair',
  description: 'A test chair',
  type: 'chairs',
  price: '199.99',
  price_us: '199.99',
  currency: '$',
  img: '/img/test.jpg',
  webp: '',
  features: [],
  spec_title: '',
  spec_text: '',
  designer: 'Test Designer',
}

describe('useCartStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  describe('initial state', () => {
    it('should start with empty cart', () => {
      const store = useCartStore()
      expect(store.items).toEqual([])
      expect(store.isEmpty).toBe(true)
    })

    it('should have correct initial computed values', () => {
      const store = useCartStore()
      expect(store.itemCount).toBe(0)
      expect(store.subtotal).toBe(0)
      expect(store.total).toBe(9.99) // shipping for empty cart
    })
  })

  describe('addItem', () => {
    it('should add item to cart', () => {
      const store = useCartStore()
      store.addItem(mockProduct)

      expect(store.items).toHaveLength(1)
      expect(store.items[0].id).toBe(1)
      expect(store.items[0].amount).toBe(1)
    })

    it('should increment quantity if item already exists', () => {
      const store = useCartStore()
      store.addItem(mockProduct)
      store.addItem(mockProduct)

      expect(store.items).toHaveLength(1)
      expect(store.items[0].amount).toBe(2)
    })

    it('should add with custom quantity', () => {
      const store = useCartStore()
      store.addItem(mockProduct, 3)

      expect(store.items[0].amount).toBe(3)
    })

    it('should persist to localStorage', () => {
      const store = useCartStore()
      store.addItem(mockProduct)

      expect(localStorageMock.setItem).toHaveBeenCalled()
    })
  })

  describe('removeItem', () => {
    it('should remove item from cart', () => {
      const store = useCartStore()
      store.addItem(mockProduct)
      store.removeItem(1)

      expect(store.items).toHaveLength(0)
      expect(store.isEmpty).toBe(true)
    })

    it('should not throw for non-existent item', () => {
      const store = useCartStore()
      expect(() => store.removeItem(999)).not.toThrow()
    })
  })

  describe('incrementItem / decrementItem', () => {
    it('should increment item quantity', () => {
      const store = useCartStore()
      store.addItem(mockProduct)
      store.incrementItem(1)

      expect(store.items[0].amount).toBe(2)
    })

    it('should decrement item quantity', () => {
      const store = useCartStore()
      store.addItem(mockProduct, 3)
      store.decrementItem(1)

      expect(store.items[0].amount).toBe(2)
    })

    it('should remove item when decrementing to zero', () => {
      const store = useCartStore()
      store.addItem(mockProduct)
      store.decrementItem(1)

      expect(store.items).toHaveLength(0)
    })
  })

  describe('updateQuantity', () => {
    it('should update item quantity', () => {
      const store = useCartStore()
      store.addItem(mockProduct)
      store.updateQuantity(1, 5)

      expect(store.items[0].amount).toBe(5)
    })

    it('should remove item when setting quantity to zero', () => {
      const store = useCartStore()
      store.addItem(mockProduct)
      store.updateQuantity(1, 0)

      expect(store.items).toHaveLength(0)
    })
  })

  describe('clearCart', () => {
    it('should remove all items', () => {
      const store = useCartStore()
      store.addItem(mockProduct)
      store.addItem({ ...mockProduct, id: 2 })
      store.clearCart()

      expect(store.items).toHaveLength(0)
      expect(store.isEmpty).toBe(true)
    })
  })

  describe('computed values', () => {
    it('should calculate subtotal correctly', () => {
      const store = useCartStore()
      store.addItem(mockProduct, 2) // 2 x 199.99 = 399.98

      expect(store.subtotal).toBeCloseTo(399.98, 2)
    })

    it('should calculate shipping correctly', () => {
      const store = useCartStore()

      // Under 100 = 9.99 shipping
      store.addItem({ ...mockProduct, price_us: '50' })
      expect(store.shipping).toBe(9.99)

      // Over 100 = free shipping
      store.updateQuantity(1, 3) // 3 x 50 = 150
      expect(store.shipping).toBe(0)
    })

    it('should calculate total correctly', () => {
      const store = useCartStore()
      store.addItem({ ...mockProduct, price_us: '50' })

      expect(store.total).toBeCloseTo(59.99, 2) // 50 + 9.99 shipping
    })

    it('should track free shipping status', () => {
      const store = useCartStore()
      store.addItem({ ...mockProduct, price_us: '50' })
      expect(store.hasFreeShipping).toBe(false)
      expect(store.amountUntilFreeShipping).toBe(50)

      store.updateQuantity(1, 3) // 150
      expect(store.hasFreeShipping).toBe(true)
      expect(store.amountUntilFreeShipping).toBe(0)
    })
  })

  describe('isInCart / getQuantity', () => {
    it('should check if product is in cart', () => {
      const store = useCartStore()
      expect(store.isInCart(1)).toBe(false)

      store.addItem(mockProduct)
      expect(store.isInCart(1)).toBe(true)
    })

    it('should return quantity of product', () => {
      const store = useCartStore()
      expect(store.getQuantity(1)).toBe(0)

      store.addItem(mockProduct, 3)
      expect(store.getQuantity(1)).toBe(3)
    })
  })
})
