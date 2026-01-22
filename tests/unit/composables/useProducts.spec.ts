/**
 * @file tests/unit/composables/useProducts.spec.ts
 * @description Unit tests for useProducts composable
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect } from 'vitest'
import { useProductsRaw, useProductRaw, useCategories } from '~/composables/useProducts'

describe('useProducts (Raw Data Access)', () => {
  describe('useProductsRaw', () => {
    it('should return all raw products', () => {
      const products = useProductsRaw()
      expect(products).toBeDefined()
      expect(Array.isArray(products)).toBe(true)
      expect(products.length).toBeGreaterThan(0)
    })

    it('should return products with required raw properties', () => {
      const products = useProductsRaw()
      const product = products[0]

      expect(product).toHaveProperty('id')
      expect(product).toHaveProperty('name_de')
      expect(product).toHaveProperty('name_en')
      expect(product).toHaveProperty('price_usd')
      expect(product).toHaveProperty('price_eur')
      expect(product).toHaveProperty('type')
    })
  })

  describe('useProductRaw', () => {
    it('should return product by ID', () => {
      const product = useProductRaw(1)
      expect(product).toBeDefined()
      expect(product?.id).toBe(1)
    })

    it('should return undefined for non-existent ID', () => {
      const product = useProductRaw(99999)
      expect(product).toBeUndefined()
    })
  })

  describe('useCategories', () => {
    it('should return array of categories', () => {
      const categories = useCategories()
      expect(categories).toBeDefined()
      expect(Array.isArray(categories)).toBe(true)
      expect(categories.length).toBeGreaterThan(0)
    })

    it('should return unique categories', () => {
      const categories = useCategories()
      const uniqueCategories = new Set(categories)
      expect(categories.length).toBe(uniqueCategories.size)
    })

    it('should include expected categories', () => {
      const categories = useCategories()
      // Check for expected categories based on product data
      expect(categories).toContain('chairs')
      expect(categories).toContain('table')
    })
  })
})
