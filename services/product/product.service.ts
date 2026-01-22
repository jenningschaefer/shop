/**
 * @file services/product/product.service.ts
 * @description Product service with business logic
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Product, ProductCategory, ProductFilter } from '~/types'
import { BaseService } from '../base.service'
import { ProductRepository, type IProductRepository } from './product.repository'

/**
 * Product service handling all product-related business logic
 */
export class ProductService extends BaseService<Product> {
  private static instance: ProductService | null = null

  private constructor(private readonly productRepo: IProductRepository) {
    super(productRepo)
  }

  /**
   * Singleton pattern for consistent service access
   */
  static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService(ProductRepository.getInstance())
    }
    return ProductService.instance
  }

  /**
   * Get products by category
   */
  async getByCategory(category: ProductCategory): Promise<Product[]> {
    return this.productRepo.findByCategory(category)
  }

  /**
   * Get product by URL-friendly name
   */
  async getByName(name: string): Promise<Product | null> {
    return this.productRepo.findByName(name)
  }

  /**
   * Search products by query string
   */
  async search(query: string): Promise<Product[]> {
    if (!query.trim()) {
      return this.getAll()
    }
    return this.productRepo.search(query)
  }

  /**
   * Get filtered and sorted products
   */
  async getFiltered(filter: ProductFilter): Promise<Product[]> {
    let products = await this.getAll()

    // Filter by category
    if (filter.category) {
      products = products.filter((p) => p.category === filter.category)
    }

    // Filter by price range
    if (filter.minPrice !== undefined) {
      products = products.filter(
        (p) => parseFloat(p.price_us) >= filter.minPrice!
      )
    }
    if (filter.maxPrice !== undefined) {
      products = products.filter(
        (p) => parseFloat(p.price_us) <= filter.maxPrice!
      )
    }

    // Sort products
    if (filter.sortBy) {
      products = this.sortProducts(products, filter.sortBy, filter.sortOrder)
    }

    return products
  }

  /**
   * Get featured/highlighted products
   */
  async getFeatured(limit: number = 4): Promise<Product[]> {
    const products = await this.getAll()
    // Return first N products as "featured"
    // In real app, would have a featured flag
    return products.slice(0, limit)
  }

  /**
   * Get all available categories
   */
  async getCategories(): Promise<ProductCategory[]> {
    const products = await this.getAll()
    const categories = new Set(products.map((p) => p.category))
    return Array.from(categories) as ProductCategory[]
  }

  /**
   * Sort products by field
   */
  private sortProducts(
    products: Product[],
    sortBy: 'name' | 'price' | 'category',
    order: 'asc' | 'desc' = 'asc'
  ): Product[] {
    const sorted = [...products].sort((a, b) => {
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

    return sorted
  }
}
