/**
 * @file stores/favorites.ts
 * @description Pinia store for wishlist/favorites state management
 * @author Jenning Schaefer
 * @license MIT
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '~/types'

const FAVORITES_STORAGE_KEY = 'shop-favorites'

interface FavoriteItem {
  id: number
  addedAt: string
}

/**
 * Favorites store - manages wishlist state with localStorage persistence
 */
export const useFavoritesStore = defineStore('favorites', () => {
  // ============================================
  // State
  // ============================================
  const items = ref<FavoriteItem[]>([])
  const isInitialized = ref(false)

  // ============================================
  // Getters (Computed)
  // ============================================
  const isEmpty = computed(() => items.value.length === 0)

  const count = computed(() => items.value.length)

  const productIds = computed(() => items.value.map((item) => item.id))

  // ============================================
  // Actions
  // ============================================

  /**
   * Initialize favorites from localStorage
   */
  function init(): void {
    if (isInitialized.value) return
    if (typeof window === 'undefined') return

    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (stored) {
      try {
        items.value = JSON.parse(stored)
      } catch {
        items.value = []
      }
    }
    isInitialized.value = true
  }

  /**
   * Persist favorites to localStorage
   */
  function persist(): void {
    if (typeof window === 'undefined') return
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(items.value))
  }

  /**
   * Add product to favorites
   */
  function add(productId: number): void {
    if (isFavorite(productId)) return

    items.value.push({
      id: productId,
      addedAt: new Date().toISOString(),
    })
    persist()
  }

  /**
   * Add product object to favorites
   */
  function addProduct(product: Product): void {
    add(product.id)
  }

  /**
   * Remove product from favorites
   */
  function remove(productId: number): void {
    const index = items.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
      persist()
    }
  }

  /**
   * Toggle favorite status
   */
  function toggle(productId: number): boolean {
    if (isFavorite(productId)) {
      remove(productId)
      return false
    } else {
      add(productId)
      return true
    }
  }

  /**
   * Check if product is in favorites
   */
  function isFavorite(productId: number): boolean {
    return items.value.some((item) => item.id === productId)
  }

  /**
   * Clear all favorites
   */
  function clear(): void {
    items.value = []
    persist()
  }

  return {
    // State
    items,
    isInitialized,
    // Getters
    isEmpty,
    count,
    productIds,
    // Actions
    init,
    add,
    addProduct,
    remove,
    toggle,
    isFavorite,
    clear,
  }
})
