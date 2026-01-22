/**
 * @file composables/useProducts.ts
 * @description Composables for product data access
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Product, ProductCategory, ProductFilter } from '../types'
import productsData from '../data/products.json'

// Type assertion for JSON import
const products = productsData as Product[]

/**
 * Get all products
 */
export function useProducts() {
  return {
    products,
  }
}

/**
 * Get a single product by ID
 * @param id - Product ID
 * @returns Product or undefined if not found
 */
export function useProduct(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

/**
 * Get products by category
 * @param category - Product category
 * @returns Filtered products array
 */
export function useProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.type === category)
}

/**
 * Search products by name or designer
 * @param query - Search query
 * @returns Matching products
 */
export function useProductSearch(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.designer.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Get filtered and sorted products
 * @param filter - Filter options
 * @returns Filtered products
 */
export function useFilteredProducts(filter: ProductFilter): Product[] {
  let result = [...products]

  if (filter.category) {
    result = result.filter((p) => p.type === filter.category)
  }

  if (filter.minPrice !== undefined) {
    result = result.filter((p) => parseFloat(p.price_us) >= filter.minPrice!)
  }

  if (filter.maxPrice !== undefined) {
    result = result.filter((p) => parseFloat(p.price_us) <= filter.maxPrice!)
  }

  if (filter.designer) {
    result = result.filter((p) =>
      p.designer.toLowerCase().includes(filter.designer!.toLowerCase())
    )
  }

  if (filter.searchQuery) {
    const query = filter.searchQuery.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.designer.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    )
  }

  return result
}
