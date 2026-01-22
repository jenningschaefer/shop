/**
 * @file stores/user.ts
 * @description Pinia store for user/auth state management
 * @author Jenning Schaefer
 * @license MIT
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '~/types'
import { useUser } from '~/composables/useUsers'

const USER_STORAGE_KEY = 'shop-user'

/**
 * User store - manages authentication and current user state
 */
export const useUserStore = defineStore('user', () => {
  // ============================================
  // State
  // ============================================
  const currentUser = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // ============================================
  // Getters (Computed)
  // ============================================
  const isAuthenticated = computed(() => currentUser.value !== null)

  const displayName = computed(() => {
    if (!currentUser.value) return ''
    return `${currentUser.value.firstname} ${currentUser.value.lastname}`
  })

  const email = computed(() => currentUser.value?.mail ?? '')

  const userId = computed(() => currentUser.value?.user_id ?? null)

  // ============================================
  // Actions
  // ============================================

  /**
   * Initialize user from localStorage
   */
  function init(): void {
    if (typeof window === 'undefined') return

    const stored = localStorage.getItem(USER_STORAGE_KEY)
    if (stored) {
      try {
        const userId = JSON.parse(stored)
        // Load user from data
        const user = useUser(userId)
        if (user) {
          currentUser.value = user
        }
      } catch {
        currentUser.value = null
      }
    }
  }

  /**
   * Persist user to localStorage
   */
  function persist(): void {
    if (typeof window === 'undefined') return
    if (currentUser.value) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(currentUser.value.user_id))
    } else {
      localStorage.removeItem(USER_STORAGE_KEY)
    }
  }

  /**
   * Login with user ID (mock authentication)
   * In real app, would validate credentials against API
   */
  async function login(userId: number): Promise<boolean> {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 300))

      const user = useUser(userId)
      if (user) {
        currentUser.value = user
        persist()
        return true
      }

      error.value = 'User not found'
      return false
    } catch (e) {
      error.value = (e as Error).message
      return false
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Login with email (mock - finds user by email)
   */
  async function loginWithEmail(
    email: string,
    _password: string
  ): Promise<boolean> {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 300))

      // For demo: accept user ID 1 for any valid email format
      if (email.includes('@')) {
        const user = useUser(1)
        if (user) {
          currentUser.value = user
          persist()
          return true
        }
      }

      error.value = 'Invalid credentials'
      return false
    } catch (e) {
      error.value = (e as Error).message
      return false
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Logout current user
   */
  function logout(): void {
    currentUser.value = null
    error.value = null
    persist()
  }

  /**
   * Update user profile
   */
  function updateProfile(updates: Partial<User>): void {
    if (currentUser.value) {
      currentUser.value = { ...currentUser.value, ...updates }
      persist()
    }
  }

  /**
   * Clear any errors
   */
  function clearError(): void {
    error.value = null
  }

  return {
    // State
    currentUser,
    isLoading,
    error,
    // Getters
    isAuthenticated,
    displayName,
    email,
    userId,
    // Actions
    init,
    login,
    loginWithEmail,
    logout,
    updateProfile,
    clearError,
  }
})
