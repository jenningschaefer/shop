/**
 * @file types/product.ts
 * @description Type definitions for products
 * @author Jenning Schaefer
 * @license MIT
 */

/**
 * Product category types
 */
export type ProductCategory = 'chairs' | 'table' | 'lighting' | 'accessory'

/**
 * Product entity
 */
export interface Product {
  /** Unique product identifier */
  id: number
  /** Product category */
  type: ProductCategory
  /** Display name */
  name: string
  /** URL-safe name slug */
  name_url: string
  /** Designer name */
  designer: string
  /** Price in EUR (string for decimal precision) */
  price_eur: string
  /** Price in USD (string for decimal precision) */
  price_us: string
  /** Image path relative to public folder */
  img: string
  /** WebP image path (optional) */
  webp: string
  /** Product features list */
  features: string[]
  /** Product description */
  description: string
  /** Specification title */
  spec_title: string
  /** Specification text */
  spec_text: string
}

/**
 * Product filter options
 */
export interface ProductFilter {
  category?: ProductCategory
  minPrice?: number
  maxPrice?: number
  designer?: string
  searchQuery?: string
}

/**
 * Sort options for product lists
 */
export type ProductSortOption = 'name' | 'price-asc' | 'price-desc' | 'designer'

/**
 * Product list response with pagination
 */
export interface ProductListResponse {
  products: Product[]
  total: number
  page: number
  perPage: number
}
