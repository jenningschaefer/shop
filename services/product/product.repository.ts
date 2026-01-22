/**
 * @file services/product/product.repository.ts
 * @description Product repository implementation
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Product, ProductCategory } from '~/types'
import { JsonRepository, type IReadOnlyRepository } from '../base.repository'
import productsData from '~/data/products.json'

/**
 * Extended repository interface for products
 */
export interface IProductRepository extends IReadOnlyRepository<Product> {
  findByCategory(category: ProductCategory): Promise<Product[]>
  findByName(name: string): Promise<Product | null>
  search(query: string): Promise<Product[]>
}

/**
 * JSON-based product repository
 * Products are read-only in this portfolio app
 */
export class ProductRepository
  extends JsonRepository<Product>
  implements IProductRepository
{
  private static instance: ProductRepository | null = null

  private constructor() {
    super(productsData as Product[])
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

  async findByCategory(category: ProductCategory): Promise<Product[]> {
    await this.simulateDelay()
    return this.data.filter((product) => product.category === category)
  }

  async findByName(name: string): Promise<Product | null> {
    await this.simulateDelay()
    const normalizedName = name.toLowerCase().replace(/-/g, ' ')
    return (
      this.data.find(
        (product) => product.name.toLowerCase() === normalizedName
      ) ?? null
    )
  }

  async search(query: string): Promise<Product[]> {
    await this.simulateDelay()
    const normalizedQuery = query.toLowerCase()
    return this.data.filter(
      (product) =>
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description?.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery)
    )
  }
}
