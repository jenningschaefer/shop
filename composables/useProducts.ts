/**
 * @file composables/useProducts.ts
 * @description Vue composables for product data access
 * @author Jenning Schaefer
 * @license MIT
 */

import { ref, computed } from 'vue'
import type { Product, ProductCategory, ProductFilter } from '~/types'
import productsData from '~/data/products.json'

// Direct JSON import for SSR compatibility
const products = productsData as Product[]

/**
 * Get a single product by ID
 * @param id - Product ID
 * @returns Product or undefined if not found
 */
export function useProduct(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

/**
 * Get product by URL-friendly name
 * @param name - Product name from URL
 * @returns Product or undefined
 */
export function useProductByName(name: string): Product | undefined {
  const normalizedName = name.toLowerCase().replace(/-/g, ' ')
  return products.find((product) => product.name.toLowerCase() === normalizedName)
}

/**
 * Get all products
 * @returns All products
 */
export function useProducts(): Product[] {
  return products
}

/**
 * Get products filtered by category
 * @param category - Product category
 * @returns Filtered products
 */
export function useProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.type === category)
}

/**
 * Reactive products composable with filtering and sorting
 */
export function useProductsFiltered() {
  const filteredProducts = ref<Product[]>([...products])
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const filter = ref<ProductFilter>({})

  function applyFilter(): void {
    let result = [...products]

    // Filter by category (using 'type' field from JSON)
    if (filter.value.category) {
      result = result.filter((p) => p.type === filter.value.category)
    }

    // Filter by price range
    if (filter.value.minPrice !== undefined) {
      result = result.filter((p) => parseFloat(p.price_us) >= filter.value.minPrice!)
    }
    if (filter.value.maxPrice !== undefined) {
      result = result.filter((p) => parseFloat(p.price_us) <= filter.value.maxPrice!)
    }

    // Sort products
    if (filter.value.sortBy) {
      result = sortProducts(result, filter.value.sortBy, filter.value.sortOrder)
    }

    filteredProducts.value = result
  }

  function setFilter(newFilter: ProductFilter): void {
    filter.value = { ...filter.value, ...newFilter }
    applyFilter()
  }

  function resetFilter(): void {
    filter.value = {}
    filteredProducts.value = [...products]
  }

  const isEmpty = computed(() => filteredProducts.value.length === 0)
  const count = computed(() => filteredProducts.value.length)

  return {
    products: filteredProducts,
    loading,
    error,
    filter,
    fetchProducts: applyFilter,
    setFilter,
    resetFilter,
    isEmpty,
    count,
  }
}

/**
 * Sort products by field
 */
function sortProducts(
  items: Product[],
  sortBy: 'name' | 'price' | 'category',
  order: 'asc' | 'desc' = 'asc'
): Product[] {
  return [...items].sort((a, b) => {
    let comparison = 0
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name)
        break
      case 'price':
        comparison = parseFloat(a.price_us) - parseFloat(b.price_us)
        break
      case 'category':
        comparison = a.category.localeCompare(b.category)
        break
    }
    return order === 'desc' ? -comparison : comparison
  })
}

/**
 * Get featured products
 */
export function useFeaturedProducts(limit: number = 4): Product[] {
  return products.slice(0, limit)
}

/**
 * Get available categories
 */
export function useCategories(): ProductCategory[] {
  const categories = new Set(products.map((p) => p.type))
  return Array.from(categories) as ProductCategory[]
}
