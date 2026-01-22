/**
 * @file composables/useUsers.ts
 * @description Vue composables for user data access
 * @author Jenning Schaefer
 * @license MIT
 */

import { ref, computed } from 'vue'
import type { User } from '~/types'
import { UserService, UserRepository } from '~/services'

// Get service instances
const userService = UserService.getInstance()
const userRepo = UserRepository.getInstance()

/**
 * Get a user by ID
 * @param id - User ID
 * @returns User or undefined if not found
 */
export function useUser(id: number): User | undefined {
  return userRepo.getData().find((user) => user.user_id === id)
}

/**
 * Get all users
 * @returns All users
 */
export function useUsers(): User[] {
  return userRepo.getData()
}

/**
 * Reactive user composable with async loading
 */
export function useUserAsync(id: number) {
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchUser(): Promise<void> {
    loading.value = true
    error.value = null
    try {
      user.value = await userService.findById(id)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  const displayName = computed(() => (user.value ? userService.getDisplayName(user.value) : ''))

  const hasCompleteProfile = computed(() =>
    user.value ? userService.hasCompleteProfile(user.value) : false
  )

  return {
    user,
    loading,
    error,
    fetchUser,
    displayName,
    hasCompleteProfile,
  }
}

/**
 * Authentication composable (mock)
 */
export function useAuth() {
  const currentUser = ref<User | null>(null)
  const isAuthenticated = computed(() => currentUser.value !== null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function login(email: string, password: string): Promise<boolean> {
    loading.value = true
    error.value = null
    try {
      const user = await userService.validateCredentials(email, password)
      if (user) {
        currentUser.value = user
        return true
      }
      error.value = 'Invalid credentials'
      return false
    } catch (e) {
      error.value = (e as Error).message
      return false
    } finally {
      loading.value = false
    }
  }

  function logout(): void {
    currentUser.value = null
  }

  return {
    currentUser,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
  }
}
