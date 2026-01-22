/**
 * @file composables/useProducts.ts
 * @description Vue composables for product data access with i18n support
 * @author Jenning Schaefer
 * @license MIT
 */

import { ref, computed } from 'vue'
import type { Product, ProductRaw, ProductCategory, ProductFilter, Locale } from '~/types'
import { localizeProduct, localizeProducts } from './useLocale'
import productsData from '~/data/products.json'

// Raw product data from JSON
const rawProducts = productsData as ProductRaw[]

/**
 * Get a single raw product by ID
 */
export function useProductRaw(id: number): ProductRaw | undefined {
  return rawProducts.find((product) => product.id === id)
}

/**
 * Get all raw products
 */
export function useProductsRaw(): ProductRaw[] {
  return rawProducts
}

/**
 * Get a single product by ID (localized) - use in component setup
 * @param id - Product ID
 * @returns Localized Product or undefined if not found
 */
export function useProduct(id: number): Product | undefined {
  const { locale } = useI18n()
  const raw = rawProducts.find((product) => product.id === id)
  if (!raw) return undefined
  return localizeProduct(raw, locale.value as Locale)
}

/**
 * Get product by URL-friendly name (localized) - use in component setup
 * @param name - Product name from URL
 * @returns Localized Product or undefined
 */
export function useProductByName(name: string): Product | undefined {
  const { locale } = useI18n()
  const raw = rawProducts.find((product) => product.name_url === name)
  if (!raw) return undefined
  return localizeProduct(raw, locale.value as Locale)
}

/**
 * Get all products (localized) - use in component setup
 * @returns All localized products
 */
export function useProducts(): Product[] {
  const { locale } = useI18n()
  return localizeProducts(rawProducts, locale.value as Locale)
}

/**
 * Get products filtered by category (localized) - use in component setup
 * @param category - Product category
 * @returns Filtered and localized products
 */
export function useProductsByCategory(category: ProductCategory): Product[] {
  const { locale } = useI18n()
  const filtered = rawProducts.filter((product) => product.type === category)
  return localizeProducts(filtered, locale.value as Locale)
}

/**
 * Reactive products composable with filtering and sorting - use in component setup
 */
export function useProductsFiltered() {
  const { locale } = useI18n()
  const currentLocale = computed(() => locale.value as Locale)
  
  const filteredProducts = ref<Product[]>(localizeProducts(rawProducts, currentLocale.value))
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const filter = ref<ProductFilter>({})

  function applyFilter(): void {
    let result = [...rawProducts]

    // Filter by category
    if (filter.value.category) {
      result = result.filter((p) => p.type === filter.value.category)
    }

    // Filter by price range (use EUR for filtering)
    if (filter.value.minPrice !== undefined) {
      result = result.filter((p) => parseFloat(p.price_eur) >= filter.value.minPrice!)
    }
    if (filter.value.maxPrice !== undefined) {
      result = result.filter((p) => parseFloat(p.price_eur) <= filter.value.maxPrice!)
    }

    // Localize and sort
    let localized = localizeProducts(result, currentLocale.value)

    // Sort products
    if (filter.value.sortBy) {
      localized = sortProducts(localized, filter.value.sortBy, filter.value.sortOrder)
    }

    filteredProducts.value = localized
  }

  function setFilter(newFilter: ProductFilter): void {
    filter.value = { ...filter.value, ...newFilter }
    applyFilter()
  }

  function resetFilter(): void {
    filter.value = {}
    filteredProducts.value = localizeProducts(rawProducts, currentLocale.value)
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
        comparison = parseFloat(a.price) - parseFloat(b.price)
        break
      case 'category':
        comparison = a.type.localeCompare(b.type)
        break
    }
    return order === 'desc' ? -comparison : comparison
  })
}

/**
 * Get featured products (localized) - use in component setup
 */
export function useFeaturedProducts(limit: number = 4): Product[] {
  const { locale } = useI18n()
  const featured = rawProducts.slice(0, limit)
  return localizeProducts(featured, locale.value as Locale)
}

/**
 * Get available categories
 */
export function useCategories(): ProductCategory[] {
  const categories = new Set(rawProducts.map((p) => p.type))
  return Array.from(categories) as ProductCategory[]
}
