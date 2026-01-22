# 🚀 Modernization Plan

> Transforming a legacy Nuxt 3 project into a senior-level TypeScript portfolio application.

---

## 📊 Status at a Glance

| Phase | Status | Last Updated |
| ----- | ------ | ------------ |
| Phase 1: Cleanup & Foundation | ✅ Complete | 2026-01-22 |
| Phase 2: TypeScript Migration | ✅ Complete | 2026-01-22 |
| Phase 3: Service Layer | ✅ Complete | 2026-01-22 |
| Phase 4: Pinia State Management | ✅ Complete | 2026-01-22 |
| Phase 5: Internationalization (i18n) | ✅ Complete | 2026-01-22 |
| Phase 6: Testing | ⏳ Pending | - |
| Phase 7: Polish & CI/CD | ⏳ Pending | - |

**Current Phase**: 6 (Testing)  
**Started**: 2026-01-22  
**Estimated Completion**: ~25-35 hours total

---

## Overview

| Aspect | Before | After |
| -------- | -------- | ------- |
| Language | JavaScript | TypeScript (strict) |
| State | localStorage | Pinia (typed stores) |
| Architecture | Flat | Layered (Service/Repository) |
| Testing | None | Vitest + Vue Test Utils + Playwright |
| i18n | Hardcoded DE/EN | @nuxtjs/i18n |
| Linting | None | ESLint + Prettier |
| CI/CD | None | GitHub Actions |

---

## Phase 1: Cleanup & Foundation ✅

**Goal**: Remove technical debt and establish tooling foundation.

**Completed**: 2026-01-22

### 1.1 Remove Obsolete Files

- [x] Delete `nuxt.config.js` (keep `.ts` only)
- [x] Delete `package-lock-DESKTOP-5N232RQ.json`
- [x] Delete `store/README.md` (Vuex reference, obsolete)
- [x] Delete `test/NuxtLogo.spec.js` (broken, references non-existent component)
- [x] Delete `jest.config.js` (replacing with Vitest)
- [x] Delete `assets/SCSS/vendors/_index.scss` (was empty)
- [x] Delete `assets/images/` (duplicate of `public/img/`)
- [x] Delete `assets/CSS/main.css` (was empty)

### 1.2 Clean Dependencies

- [x] Removed `go` (unused)
- [x] Removed `@nuxt/image-edge` (deprecated)
- [x] Removed `@nuxt/ui` (unused, was loading Tailwind)
- [x] Removed `sass-loader` (not needed with Nuxt 3)
- [x] Fixed duplicate `sass` (now only in devDependencies)
- [x] Updated all dependencies to latest versions

### 1.3 Setup Tooling

- [x] Install & configure ESLint (`@nuxt/eslint` with flat config)
- [x] Install & configure Prettier
- [x] Add `.editorconfig`
- [ ] Add pre-commit hooks (husky + lint-staged) - *deferred*
- [x] TypeScript strict mode enabled

### 1.4 Project Files

- [x] Add `LICENSE` (MIT)
- [x] Rewrite `README.md` (modern, with badges)
- [ ] Add `.env.example` - *blocked by gitignore*
- [ ] Add `CONTRIBUTING.md` - *deferred*
- [x] Add `CHANGELOG.md`

---

## Phase 2: TypeScript Migration ✅

**Goal**: Full type safety with strict TypeScript.

**Completed**: 2026-01-22

### 2.1 Configuration

- [x] Update `tsconfig.json` for Nuxt 3
- [x] Enable strict mode
- [x] Configure path aliases (extends .nuxt/tsconfig.json)

```json
{
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### 2.2 Type Definitions

Created `/types/` directory:

- [x] `types/index.ts` - Barrel export
- [x] `types/product.ts` - Product, ProductCategory, ProductFilter
- [x] `types/order.ts` - Order, OrderStatus, OrderItem
- [x] `types/user.ts` - User, UserRole
- [x] `types/address.ts` - Address, AddressType
- [x] `types/cart.ts` - CartItem, Cart

### 2.3 Migrate Composables

Converted all `.js` → `.ts` with proper typing:

- [x] `composables/useProducts.ts`
- [x] `composables/useOrders.ts`
- [x] `composables/useUsers.ts`
- [x] `composables/useAddresses.ts`
- [x] `composables/useUtilities.ts`
- [x] `composables/useCart.ts` (new)

### 2.4 Migrate Components

Added `lang="ts"` to all Vue components:

- [x] Update all `<script setup>` → `<script setup lang="ts">`
- [x] Add prop types with `defineProps<T>()`
- [x] Add emit types with `defineEmits<T>()`
- [x] Remove console.log statements

---

## Phase 3: Architecture - Service Layer ✅

**Goal**: Clean architecture with separation of concerns.

**Completed**: 2026-01-22

### 3.1 Directory Structure

Created `/services/` directory with modular architecture:

- [x] `services/index.ts` - Barrel export
- [x] `services/base.repository.ts` - Generic interfaces & JsonRepository
- [x] `services/base.service.ts` - Abstract base service classes
- [x] `services/product/` - ProductService + ProductRepository
- [x] `services/order/` - OrderService + OrderRepository
- [x] `services/user/` - UserService + UserRepository
- [x] `services/address/` - AddressService + AddressRepository
- [x] `services/cart/` - CartService (localStorage-based)

### 3.2 Repository Pattern

Implemented generic repository pattern with TypeScript generics:

```typescript
// Base interface - can swap JSON for real API later
interface IRepository<T, ID> {
  findAll(): Promise<T[]>
  findById(id: ID): Promise<T | null>
  create(entity: Omit<T, 'id'>): Promise<T>
  update(id: ID, entity: Partial<T>): Promise<T | null>
  delete(id: ID): Promise<boolean>
}

// JSON implementation with simulated network delay
class JsonRepository<T> implements IRepository<T, number> {
  protected simulateDelay(ms: number = 50): Promise<void>
  getData(): T[]  // Sync access for composables
}
```

### 3.3 Service Layer

Implemented service classes with business logic:

- [x] ProductService - filtering, search, categories
- [x] OrderService - user orders, totals, formatting
- [x] UserService - auth mock, profile validation
- [x] AddressService - CRUD, default management
- [x] CartService - localStorage persistence

### 3.4 Composables Integration

Updated all composables to use services:

- [x] `useProducts.ts` - uses ProductService/Repository
- [x] `useOrders.ts` - uses OrderService/Repository
- [x] `useUsers.ts` - uses UserService/Repository
- [x] `useAddresses.ts` - uses AddressService/Repository
- [x] `useCart.ts` - standalone with VueUse localStorage

---

## Phase 4: State Management - Pinia ✅

**Goal**: Centralized, typed state management.

**Completed**: 2026-01-22

### 4.1 Setup

- [x] Install `@pinia/nuxt` and `pinia`
- [x] Configure in `nuxt.config.ts`

### 4.2 Stores

Created `/stores/` directory:

- [x] `stores/index.ts` - Barrel export
- [x] `stores/cart.ts` - Shopping cart with localStorage persistence
- [x] `stores/user.ts` - Current user, mock auth
- [x] `stores/favorites.ts` - Wishlist/favorites
- [x] `stores/ui.ts` - UI state (modals, sidebars, disclaimer)

### 4.3 Store Pattern

Using Composition API style (Setup Stores):

```typescript
export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref<CartItem[]>([])
  
  // Getters
  const total = computed(() => 
    items.value.reduce((sum, item) => sum + item.price * item.amount, 0)
  )
  
  // Actions
  function addItem(product: Product, quantity: number = 1) { }
  function removeItem(productId: number) { }
  function init() { /* load from localStorage */ }
  
  return { items, total, addItem, removeItem, init }
})
```

### 4.4 Components Migration

- [x] Stores created and available for future use
- [x] `app.vue` - Uses `useLocalStorage` for disclaimer (simpler approach)
- [x] `pages/products/list/[[category]].vue` - Uses `useLocalStorage` for favorites (preserves existing behavior)

**Note**: The Pinia stores are available for more complex state management needs. The current implementation uses VueUse's `useLocalStorage` for simplicity, as it provides reactivity and persistence out of the box with minimal boilerplate.

---

## Phase 5: Internationalization (i18n)

**Goal**: Full German/English support with @nuxtjs/i18n.

### 5.1 Setup

```bash
npm install @nuxtjs/i18n
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'de',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default'
  }
})
```

### 5.2 Translation Files ✅

```text
/locales/
  de.json    # German translations (default)
  en.json    # English translations
```

### 5.3 Content Translated ✅

- [x] Navigation & UI elements
- [x] Product categories
- [x] Form labels & validation messages
- [x] Error messages
- [x] Checkout flow
- [x] Account pages
- [x] Footer content
- [x] Disclaimer

### 5.4 Product Data i18n ✅

Products now have localized fields in `data/products.json`:

- `name_de` / `name_en` - Product name
- `description_de` / `description_en` - Description
- `features_de` / `features_en` - Features array
- `spec_title_de` / `spec_title_en` - Spec title
- `spec_text_de` / `spec_text_en` - Spec text
- `price_eur` / `price_usd` - Localized pricing

### 5.5 Locale Composables ✅

- `useCurrentLocale()` - Get current locale
- `localizeProduct()` - Localize single product
- `localizeProducts()` - Localize product array
- `formatPrice()` - Format price with currency

### 5.6 Component Migration ✅

```vue
<!-- Before -->
<span>Add to Cart</span>

<!-- After -->
<span>{{ $t('cart.addToCart') }}</span>
```

Language switcher in NavBar toggles between DE/EN.

---

## Phase 6: Testing

**Goal**: Comprehensive test coverage.

### 6.1 Setup

```bash
npm install -D vitest @vue/test-utils @nuxt/test-utils happy-dom
npm install -D @playwright/test
```

### 6.2 Test Structure

```text
/tests/
  /unit/
    /services/
      product.service.spec.ts
    /composables/
      useProducts.spec.ts
    /utils/
      formatters.spec.ts
  /component/
    /Product/
      Card.spec.ts
      Item.spec.ts
    /UI/
      dialog.spec.ts
  /e2e/
    checkout.spec.ts
    product-browse.spec.ts
    account.spec.ts
```

### 6.3 Coverage Goals

| Type | Target |
| ------ | -------- |
| Unit (Services) | 90%+ |
| Unit (Composables) | 80%+ |
| Component | 70%+ |
| E2E | Critical paths |

---

## Phase 7: Polish & CI/CD

**Goal**: Production-ready with automation.

### 7.1 File Headers

Add to all source files (see STANDARDS.md):

```typescript
/**
 * @file ProductService - Business logic for product operations
 * @author Jenning Schaefer
 * @license MIT
 */
```

### 7.2 GitHub Actions

```yaml
# .github/workflows/ci.yml
- Lint check
- Type check
- Unit tests
- Build
- E2E tests (on PR)
```

### 7.3 Documentation

- [ ] Component documentation (Storybook or similar)
- [ ] API documentation (TypeDoc)
- [ ] Architecture diagrams

### 7.4 Accessibility

- [ ] Audit with axe-core
- [ ] Keyboard navigation
- [ ] ARIA labels
- [ ] Color contrast

---

## Timeline Estimate

| Phase | Effort | Priority |
| ------- | -------- | ---------- |
| Phase 1: Cleanup | 2-3h | 🔴 High |
| Phase 2: TypeScript | 4-6h | 🔴 High |
| Phase 3: Service Layer | 4-6h | 🟡 Medium |
| Phase 4: Pinia | 2-3h | 🟡 Medium |
| Phase 5: i18n | 3-4h | 🟡 Medium |
| Phase 6: Testing | 6-8h | 🟡 Medium |
| Phase 7: Polish | 3-4h | 🟢 Low |

**Total**: ~25-35 hours

---

## Progress Tracking

### Phase 1 ✅

- [x] 1.1 Remove obsolete files
- [x] 1.2 Clean dependencies
- [x] 1.3 Setup tooling
- [x] 1.4 Project files

### Phase 2 ✅

- [x] 2.1 TypeScript configuration
- [x] 2.2 Type definitions
- [x] 2.3 Migrate composables
- [x] 2.4 Migrate components

### Phase 3 ✅

- [x] 3.1 Directory structure
- [x] 3.2 Repository pattern
- [x] 3.3 Service layer
- [x] 3.4 Composables integration

### Phase 4 ✅

- [x] 4.1 Pinia setup
- [x] 4.2 Create stores
- [x] 4.3 Migrate state
- [x] 4.4 Components migration

### Phase 5 ✅

- [x] 5.1 i18n setup
- [x] 5.2 Translation files (de.json, en.json)
- [x] 5.3 Product data i18n
- [x] 5.4 Migrate components
- [x] 5.5 Language switcher

### Phase 6

- [ ] 6.1 Test setup
- [ ] 6.2 Unit tests
- [ ] 6.3 Component tests
- [ ] 6.4 E2E tests

### Phase 7

- [ ] 7.1 File headers
- [ ] 7.2 CI/CD
- [ ] 7.3 Documentation
- [ ] 7.4 Accessibility
