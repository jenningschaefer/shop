/**
 * @file services/base.service.ts
 * @description Abstract base service with common functionality
 * @author Jenning Schaefer
 * @license MIT
 */

import type { IRepository, IReadOnlyRepository } from './base.repository'

/**
 * Base service class providing common patterns
 * Services contain business logic and orchestrate repositories
 */
export abstract class BaseService<T, ID = number> {
  constructor(protected readonly repository: IRepository<T, ID> | IReadOnlyRepository<T, ID>) {}

  /**
   * Get all entities
   */
  async getAll(): Promise<T[]> {
    return this.repository.findAll()
  }

  /**
   * Get entity by ID
   * @throws Error if entity not found
   */
  async getById(id: ID): Promise<T> {
    const entity = await this.repository.findById(id)
    if (!entity) {
      throw new Error(`Entity with id ${id} not found`)
    }
    return entity
  }

  /**
   * Get entity by ID or null
   */
  async findById(id: ID): Promise<T | null> {
    return this.repository.findById(id)
  }
}

/**
 * Base service for entities with full CRUD support
 */
export abstract class BaseCrudService<T, ID = number> extends BaseService<T, ID> {
  constructor(protected readonly repository: IRepository<T, ID>) {
    super(repository)
  }

  /**
   * Create a new entity
   */
  async create(entity: Omit<T, 'id'>): Promise<T> {
    return this.repository.create(entity)
  }

  /**
   * Update an entity
   * @throws Error if entity not found
   */
  async update(id: ID, entity: Partial<T>): Promise<T> {
    const updated = await this.repository.update(id, entity)
    if (!updated) {
      throw new Error(`Entity with id ${id} not found`)
    }
    return updated
  }

  /**
   * Delete an entity
   * @throws Error if entity not found
   */
  async delete(id: ID): Promise<void> {
    const deleted = await this.repository.delete(id)
    if (!deleted) {
      throw new Error(`Entity with id ${id} not found`)
    }
  }
}
