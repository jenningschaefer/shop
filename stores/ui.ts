/**
 * @file stores/ui.ts
 * @description Pinia store for UI state management (modals, sidebars, etc.)
 * @author Jenning Schaefer
 * @license MIT
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const DISCLAIMER_STORAGE_KEY = 'shop-disclaimer-accepted'

/**
 * UI store - manages global UI state
 */
export const useUiStore = defineStore('ui', () => {
  // ============================================
  // State
  // ============================================

  // Modals
  const isMenuOpen = ref(false)
  const isCartOpen = ref(false)
  const isSearchOpen = ref(false)
  const isDisclaimerOpen = ref(true)

  // Sidebars
  const isSidenavOpen = ref(false)
  const isFilterSidebarOpen = ref(false)

  // Loading states
  const isGlobalLoading = ref(false)
  const loadingMessage = ref('')

  // ============================================
  // Getters (Computed)
  // ============================================
  const hasOpenModal = computed(
    () => isMenuOpen.value || isCartOpen.value || isSearchOpen.value || isDisclaimerOpen.value
  )

  const hasOpenSidebar = computed(
    () => isSidenavOpen.value || isFilterSidebarOpen.value
  )

  // ============================================
  // Actions
  // ============================================

  /**
   * Initialize UI state from localStorage
   */
  function init(): void {
    if (typeof window === 'undefined') return

    // Check if disclaimer was already accepted
    const disclaimerAccepted = localStorage.getItem(DISCLAIMER_STORAGE_KEY)
    if (disclaimerAccepted === 'true') {
      isDisclaimerOpen.value = false
    }
  }

  // Menu
  function openMenu(): void {
    closeAll()
    isMenuOpen.value = true
  }

  function closeMenu(): void {
    isMenuOpen.value = false
  }

  function toggleMenu(): void {
    if (isMenuOpen.value) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  // Cart
  function openCart(): void {
    closeAll()
    isCartOpen.value = true
  }

  function closeCart(): void {
    isCartOpen.value = false
  }

  function toggleCart(): void {
    if (isCartOpen.value) {
      closeCart()
    } else {
      openCart()
    }
  }

  // Search
  function openSearch(): void {
    closeAll()
    isSearchOpen.value = true
  }

  function closeSearch(): void {
    isSearchOpen.value = false
  }

  function toggleSearch(): void {
    if (isSearchOpen.value) {
      closeSearch()
    } else {
      openSearch()
    }
  }

  // Disclaimer
  function acceptDisclaimer(): void {
    isDisclaimerOpen.value = false
    if (typeof window !== 'undefined') {
      localStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true')
    }
  }

  function showDisclaimer(): void {
    isDisclaimerOpen.value = true
  }

  // Sidenav
  function openSidenav(): void {
    isSidenavOpen.value = true
  }

  function closeSidenav(): void {
    isSidenavOpen.value = false
  }

  function toggleSidenav(): void {
    isSidenavOpen.value = !isSidenavOpen.value
  }

  // Filter Sidebar
  function openFilterSidebar(): void {
    isFilterSidebarOpen.value = true
  }

  function closeFilterSidebar(): void {
    isFilterSidebarOpen.value = false
  }

  function toggleFilterSidebar(): void {
    isFilterSidebarOpen.value = !isFilterSidebarOpen.value
  }

  // Loading
  function startLoading(message: string = ''): void {
    isGlobalLoading.value = true
    loadingMessage.value = message
  }

  function stopLoading(): void {
    isGlobalLoading.value = false
    loadingMessage.value = ''
  }

  // Close all modals/sidebars
  function closeAll(): void {
    isMenuOpen.value = false
    isCartOpen.value = false
    isSearchOpen.value = false
    isSidenavOpen.value = false
    isFilterSidebarOpen.value = false
  }

  return {
    // State
    isMenuOpen,
    isCartOpen,
    isSearchOpen,
    isDisclaimerOpen,
    isSidenavOpen,
    isFilterSidebarOpen,
    isGlobalLoading,
    loadingMessage,
    // Getters
    hasOpenModal,
    hasOpenSidebar,
    // Actions
    init,
    openMenu,
    closeMenu,
    toggleMenu,
    openCart,
    closeCart,
    toggleCart,
    openSearch,
    closeSearch,
    toggleSearch,
    acceptDisclaimer,
    showDisclaimer,
    openSidenav,
    closeSidenav,
    toggleSidenav,
    openFilterSidebar,
    closeFilterSidebar,
    toggleFilterSidebar,
    startLoading,
    stopLoading,
    closeAll,
  }
})
