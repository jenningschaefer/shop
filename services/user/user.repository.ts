/**
 * @file services/user/user.repository.ts
 * @description User repository implementation
 * @author Jenning Schaefer
 * @license MIT
 */

import type { User } from '~/types'
import { JsonRepository, type IReadOnlyRepository } from '../base.repository'
import usersData from '~/data/users.json'

/**
 * Extended repository interface for users
 */
export interface IUserRepository extends IReadOnlyRepository<User> {
  findByEmail(email: string): Promise<User | null>
}

/**
 * JSON-based user repository
 */
export class UserRepository
  extends JsonRepository<User>
  implements IUserRepository
{
  private static instance: UserRepository | null = null

  private constructor() {
    super(usersData as User[])
  }

  /**
   * Singleton pattern
   */
  static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }
    return UserRepository.instance
  }

  async findByEmail(email: string): Promise<User | null> {
    await this.simulateDelay()
    return (
      this.data.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      ) ?? null
    )
  }
}
