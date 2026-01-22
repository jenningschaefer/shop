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
 * Supported locales
 */
export type Locale = 'de' | 'en'

/**
 * Product entity (raw data with localized fields)
 */
export interface ProductRaw {
  /** Unique product identifier */
  id: number
  /** Product category */
  type: ProductCategory
  /** German display name */
  name_de: string
  /** English display name */
  name_en: string
  /** URL-safe name slug */
  name_url: string
  /** Designer name */
  designer: string
  /** Price in EUR (string for decimal precision) */
  price_eur: string
  /** Price in USD (string for decimal precision) */
  price_usd: string
  /** Image path relative to public folder */
  img: string
  /** WebP image path (optional) */
  webp: string
  /** German product features list */
  features_de: string[]
  /** English product features list */
  features_en: string[]
  /** German product description */
  description_de: string
  /** English product description */
  description_en: string
  /** German specification title */
  spec_title_de: string
  /** English specification title */
  spec_title_en: string
  /** German specification text */
  spec_text_de: string
  /** English specification text */
  spec_text_en: string
}

/**
 * Localized product entity (computed for current locale)
 */
export interface Product {
  /** Unique product identifier */
  id: number
  /** Product category */
  type: ProductCategory
  /** Display name (localized) */
  name: string
  /** URL-safe name slug */
  name_url: string
  /** Designer name */
  designer: string
  /** Price (localized - EUR or USD) */
  price: string
  /** Currency symbol */
  currency: string
  /** Image path relative to public folder */
  img: string
  /** WebP image path (optional) */
  webp: string
  /** Product features list (localized) */
  features: string[]
  /** Product description (localized) */
  description: string
  /** Specification title (localized) */
  spec_title: string
  /** Specification text (localized) */
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
  sortBy?: 'name' | 'price' | 'category'
  sortOrder?: 'asc' | 'desc'
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
