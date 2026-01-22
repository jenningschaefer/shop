/**
 * @file tests/unit/stores/ui.spec.ts
 * @description Unit tests for UI Pinia store
 * @author Jenning Schaefer
 * @license MIT
 */

import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUiStore } from '~/stores/ui'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    removeItem: vi.fn((key: string) => {
      store[key] = undefined as unknown as string
    }),
    clear: vi.fn(() => {
      store = {}
    }),
  }
})()

Object.defineProperty(global, 'localStorage', { value: localStorageMock })

describe('useUiStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  describe('initial state', () => {
    it('should start with all modals closed except disclaimer', () => {
      const store = useUiStore()
      expect(store.isMenuOpen).toBe(false)
      expect(store.isCartOpen).toBe(false)
      expect(store.isSearchOpen).toBe(false)
      expect(store.isDisclaimerOpen).toBe(true)
    })

    it('should start with sidebars closed', () => {
      const store = useUiStore()
      expect(store.isSidenavOpen).toBe(false)
      expect(store.isFilterSidebarOpen).toBe(false)
    })

    it('should start with no loading state', () => {
      const store = useUiStore()
      expect(store.isGlobalLoading).toBe(false)
      expect(store.loadingMessage).toBe('')
    })
  })

  describe('menu actions', () => {
    it('should open menu', () => {
      const store = useUiStore()
      store.openMenu()
      expect(store.isMenuOpen).toBe(true)
    })

    it('should close menu', () => {
      const store = useUiStore()
      store.openMenu()
      store.closeMenu()
      expect(store.isMenuOpen).toBe(false)
    })

    it('should toggle menu', () => {
      const store = useUiStore()
      store.toggleMenu()
      expect(store.isMenuOpen).toBe(true)
      store.toggleMenu()
      expect(store.isMenuOpen).toBe(false)
    })

    it('should close other modals when opening menu', () => {
      const store = useUiStore()
      store.isCartOpen = true
      store.openMenu()
      expect(store.isCartOpen).toBe(false)
      expect(store.isMenuOpen).toBe(true)
    })
  })

  describe('cart actions', () => {
    it('should open cart', () => {
      const store = useUiStore()
      store.openCart()
      expect(store.isCartOpen).toBe(true)
    })

    it('should toggle cart', () => {
      const store = useUiStore()
      store.toggleCart()
      expect(store.isCartOpen).toBe(true)
      store.toggleCart()
      expect(store.isCartOpen).toBe(false)
    })
  })

  describe('search actions', () => {
    it('should open search', () => {
      const store = useUiStore()
      store.openSearch()
      expect(store.isSearchOpen).toBe(true)
    })

    it('should toggle search', () => {
      const store = useUiStore()
      store.toggleSearch()
      expect(store.isSearchOpen).toBe(true)
      store.toggleSearch()
      expect(store.isSearchOpen).toBe(false)
    })
  })

  describe('disclaimer actions', () => {
    it('should accept disclaimer and persist', () => {
      const store = useUiStore()
      store.acceptDisclaimer()

      expect(store.isDisclaimerOpen).toBe(false)
      expect(localStorageMock.setItem).toHaveBeenCalledWith('shop-disclaimer-accepted', 'true')
    })

    it('should show disclaimer', () => {
      const store = useUiStore()
      store.acceptDisclaimer()
      store.showDisclaimer()
      expect(store.isDisclaimerOpen).toBe(true)
    })

    it('should init with disclaimer closed if already accepted', () => {
      localStorageMock.getItem.mockReturnValue('true')
      const store = useUiStore()
      store.init()
      expect(store.isDisclaimerOpen).toBe(false)
    })
  })

  describe('sidenav actions', () => {
    it('should toggle sidenav', () => {
      const store = useUiStore()
      store.toggleSidenav()
      expect(store.isSidenavOpen).toBe(true)
      store.toggleSidenav()
      expect(store.isSidenavOpen).toBe(false)
    })
  })

  describe('filter sidebar actions', () => {
    it('should toggle filter sidebar', () => {
      const store = useUiStore()
      store.toggleFilterSidebar()
      expect(store.isFilterSidebarOpen).toBe(true)
      store.toggleFilterSidebar()
      expect(store.isFilterSidebarOpen).toBe(false)
    })
  })

  describe('loading actions', () => {
    it('should start loading with message', () => {
      const store = useUiStore()
      store.startLoading('Loading products...')
      expect(store.isGlobalLoading).toBe(true)
      expect(store.loadingMessage).toBe('Loading products...')
    })

    it('should stop loading', () => {
      const store = useUiStore()
      store.startLoading('Loading...')
      store.stopLoading()
      expect(store.isGlobalLoading).toBe(false)
      expect(store.loadingMessage).toBe('')
    })
  })

  describe('closeAll', () => {
    it('should close all modals and sidebars', () => {
      const store = useUiStore()
      store.isMenuOpen = true
      store.isCartOpen = true
      store.isSidenavOpen = true

      store.closeAll()

      expect(store.isMenuOpen).toBe(false)
      expect(store.isCartOpen).toBe(false)
      expect(store.isSidenavOpen).toBe(false)
    })
  })

  describe('computed values', () => {
    it('should detect open modal', () => {
      const store = useUiStore()
      store.isDisclaimerOpen = false
      expect(store.hasOpenModal).toBe(false)

      store.openMenu()
      expect(store.hasOpenModal).toBe(true)
    })

    it('should detect open sidebar', () => {
      const store = useUiStore()
      expect(store.hasOpenSidebar).toBe(false)

      store.openSidenav()
      expect(store.hasOpenSidebar).toBe(true)
    })
  })
})
