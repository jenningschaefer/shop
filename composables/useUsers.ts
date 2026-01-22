/**
 * @file composables/useUsers.ts
 * @description Composables for user data access
 * @author Jenning Schaefer
 * @license MIT
 */

import type { User } from '../types'
import usersData from '../data/users.json'

// Type assertion for JSON import
const users = usersData as User[]

/**
 * Get a user by user ID
 * @param userId - User ID
 * @returns User or undefined if not found
 */
export function useUser(userId: number): User | undefined {
  return users.find((user) => user.user_id === userId)
}

/**
 * Get a user by email
 * @param email - User email
 * @returns User or undefined if not found
 */
export function useUserByEmail(email: string): User | undefined {
  return users.find((user) => user.mail.toLowerCase() === email.toLowerCase())
}

/**
 * Get all users
 * @returns All users
 */
export function useUsers(): User[] {
  return users
}

/**
 * Get the current logged-in user (mock - returns first non-admin user)
 * For demo purposes, always returns user with ID 1
 * @returns Current user
 */
export function useCurrentUser(): User {
  const user = users.find((u) => u.user_id === 1)
  if (!user) {
    throw new Error('Default user not found')
  }
  return user
}
