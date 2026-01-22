/**
 * @file services/base.repository.ts
 * @description Base repository interfaces and abstract implementations
 * @author Jenning Schaefer
 * @license MIT
 */

/**
 * Generic repository interface for CRUD operations
 * Provides a consistent API regardless of data source (JSON, API, DB)
 */
export interface IRepository<T, ID = number> {
  /**
   * Retrieve all entities
   */
  findAll(): Promise<T[]>

  /**
   * Find entity by ID
   * @param id - Entity identifier
   */
  findById(id: ID): Promise<T | null>

  /**
   * Create a new entity
   * @param entity - Entity data without ID
   */
  create(entity: Omit<T, 'id'>): Promise<T>

  /**
   * Update an existing entity
   * @param id - Entity identifier
   * @param entity - Partial entity data to update
   */
  update(id: ID, entity: Partial<T>): Promise<T | null>

  /**
   * Delete an entity
   * @param id - Entity identifier
   */
  delete(id: ID): Promise<boolean>
}

/**
 * Read-only repository interface for entities that don't support mutations
 */
export interface IReadOnlyRepository<T, ID = number> {
  findAll(): Promise<T[]>
  findById(id: ID): Promise<T | null>
}

/**
 * Abstract JSON repository implementation
 * Simulates async API calls with local JSON data
 * Perfect for portfolio projects without backend
 */
export abstract class JsonRepository<T extends { id: ID }, ID = number> implements IRepository<
  T,
  ID
> {
  protected readonly data: T[]

  constructor(initialData: T[]) {
    // Deep clone to prevent mutations
    this.data = JSON.parse(JSON.stringify(initialData))
  }

  /**
   * Synchronous data access for backwards compatibility
   * Use async methods for proper API simulation
   */
  getData(): T[] {
    return this.data
  }

  /**
   * Simulate network latency for realistic API behavior
   */
  protected async simulateDelay(ms: number = 50): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async findAll(): Promise<T[]> {
    await this.simulateDelay()
    return [...this.data]
  }

  async findById(id: ID): Promise<T | null> {
    await this.simulateDelay()
    return this.data.find((item) => item.id === id) ?? null
  }

  async create(entity: Omit<T, 'id'>): Promise<T> {
    await this.simulateDelay()
    const newId = this.generateId()
    const newEntity = { ...entity, id: newId } as T
    this.data.push(newEntity)
    return newEntity
  }

  async update(id: ID, entity: Partial<T>): Promise<T | null> {
    await this.simulateDelay()
    const index = this.data.findIndex((item) => item.id === id)
    if (index === -1) return null

    this.data[index] = { ...this.data[index], ...entity }
    return this.data[index]
  }

  async delete(id: ID): Promise<boolean> {
    await this.simulateDelay()
    const index = this.data.findIndex((item) => item.id === id)
    if (index === -1) return false

    this.data.splice(index, 1)
    return true
  }

  /**
   * Generate next ID - override for custom ID strategies
   */
  protected generateId(): ID {
    if (this.data.length === 0) return 1 as ID
    const maxId = Math.max(...this.data.map((item) => item.id as number))
    return (maxId + 1) as ID
  }
}
