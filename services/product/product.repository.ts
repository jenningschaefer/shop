/**
 * @file services/product/product.repository.ts
 * @description Product repository implementation
 * @author Jenning Schaefer
 * @license MIT
 */

import type { ProductRaw, ProductCategory } from '~/types'
import { JsonRepository, type IReadOnlyRepository } from '../base.repository'
import productsData from '~/data/products.json'

/**
 * Extended repository interface for products
 */
export interface IProductRepository extends IReadOnlyRepository<ProductRaw> {
  findByCategory(category: ProductCategory): Promise<ProductRaw[]>
  findByName(name: string): Promise<ProductRaw | null>
  search(query: string): Promise<ProductRaw[]>
}

/**
 * JSON-based product repository
 * Products are read-only in this portfolio app
 */
export class ProductRepository extends JsonRepository<ProductRaw> implements IProductRepository {
  private static instance: ProductRepository | null = null

  private constructor() {
    super(productsData as ProductRaw[])
  }

  /**
   * Singleton pattern - ensures consistent data across app
   */
  static getInstance(): ProductRepository {
    if (!ProductRepository.instance) {
      ProductRepository.instance = new ProductRepository()
    }
    return ProductRepository.instance
  }

  async findByCategory(category: ProductCategory): Promise<ProductRaw[]> {
    await this.simulateDelay()
    return this.data.filter((product) => product.type === category)
  }

  async findByName(name: string): Promise<ProductRaw | null> {
    await this.simulateDelay()
    const normalizedName = name.toLowerCase().replace(/-/g, ' ')
    return this.data.find((product) => product.name_url.toLowerCase() === normalizedName) ?? null
  }

  async search(query: string): Promise<ProductRaw[]> {
    await this.simulateDelay()
    const normalizedQuery = query.toLowerCase()
    return this.data.filter(
      (product) =>
        product.name_en.toLowerCase().includes(normalizedQuery) ||
        product.name_de.toLowerCase().includes(normalizedQuery) ||
        product.description_en?.toLowerCase().includes(normalizedQuery) ||
        product.description_de?.toLowerCase().includes(normalizedQuery) ||
        product.type.toLowerCase().includes(normalizedQuery)
    )
  }
}
