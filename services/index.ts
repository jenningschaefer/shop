/**
 * @file services/index.ts
 * @description Services barrel export
 * @author Jenning Schaefer
 * @license MIT
 *
 * This module provides a clean architecture with separation of concerns:
 * - Services: Business logic layer
 * - Repositories: Data access layer (abstracts JSON/API/DB)
 *
 * Usage:
 * ```typescript
 * import { ProductService, OrderService } from '~/services'
 *
 * const products = await ProductService.getInstance().getAll()
 * const order = await OrderService.getInstance().getByOrderId('000001')
 * ```
 */

// Base classes
export { JsonRepository, type IRepository, type IReadOnlyRepository } from './base.repository'
export { BaseService, BaseCrudService } from './base.service'

// Domain services
export { ProductService, ProductRepository, type IProductRepository } from './product'
export { OrderService, OrderRepository, type IOrderRepository } from './order'
export { UserService, UserRepository, type IUserRepository } from './user'
export { AddressService, AddressRepository, type IAddressRepository } from './address'
export { CartService } from './cart'
