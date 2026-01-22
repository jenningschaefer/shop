/**
 * @file services/user/user.service.ts
 * @description User service with business logic
 * @author Jenning Schaefer
 * @license MIT
 */

import type { User } from '~/types'
import { BaseService } from '../base.service'
import { UserRepository, type IUserRepository } from './user.repository'

/**
 * User service handling all user-related business logic
 */
export class UserService extends BaseService<User> {
  private static instance: UserService | null = null

  private constructor(private readonly userRepo: IUserRepository) {
    super(userRepo)
  }

  /**
   * Singleton pattern
   */
  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService(UserRepository.getInstance())
    }
    return UserService.instance
  }

  /**
   * Get user by email address
   */
  async getByEmail(email: string): Promise<User | null> {
    return this.userRepo.findByEmail(email)
  }

  /**
   * Validate user credentials (mock implementation)
   * In real app, would verify password hash
   */
  async validateCredentials(
    email: string,
    _password: string
  ): Promise<User | null> {
    const user = await this.getByEmail(email)
    // For portfolio: accept any password for existing users
    return user
  }

  /**
   * Get user display name
   */
  getDisplayName(user: User): string {
    return `${user.firstname} ${user.name}`
  }

  /**
   * Check if user has complete profile
   */
  hasCompleteProfile(user: User): boolean {
    return !!(
      user.firstname &&
      user.name &&
      user.email &&
      user.street &&
      user.city
    )
  }
}
