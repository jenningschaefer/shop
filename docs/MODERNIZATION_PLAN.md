# 🚀 Modernization Plan

> Transforming a legacy Nuxt 3 project into a senior-level TypeScript portfolio application.

---

## 📊 Status at a Glance

| Phase | Status | Last Updated |
| ----- | ------ | ------------ |
| Phase 1: Cleanup & Foundation | ✅ Complete | 2026-01-22 |
| Phase 2: TypeScript Migration | ⏳ Pending | - |
| Phase 3: Service Layer | ⏳ Pending | - |
| Phase 4: Pinia State Management | ⏳ Pending | - |
| Phase 5: i18n | ⏳ Pending | - |
| Phase 6: Testing | ⏳ Pending | - |
| Phase 7: Polish & CI/CD | ⏳ Pending | - |

**Current Phase**: 1 → 2  
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

## Phase 2: TypeScript Migration

**Goal**: Full type safety with strict TypeScript.

### 2.1 Configuration

- [ ] Update `tsconfig.json` for Nuxt 3
- [ ] Enable strict mode
- [ ] Configure path aliases

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

Create `/types/` directory:

- [ ] `types/index.ts` - Barrel export
- [ ] `types/product.ts` - Product, ProductCategory, ProductFilter
- [ ] `types/order.ts` - Order, OrderStatus, OrderItem
- [ ] `types/user.ts` - User, UserRole
- [ ] `types/address.ts` - Address, AddressType
- [ ] `types/cart.ts` - CartItem, Cart

### 2.3 Migrate Composables

Convert all `.js` → `.ts` with proper typing:

- [ ] `composables/useProducts.ts`
- [ ] `composables/useOrders.ts`
- [ ] `composables/useUsers.ts`
- [ ] `composables/useAddresses.ts`
- [ ] `composables/useUtilities.ts`
- [ ] `composables/useCart.ts` (new)

### 2.4 Migrate Components

Add `lang="ts"` to all Vue components:

- [ ] Update all `<script setup>` → `<script setup lang="ts">`
- [ ] Add prop types with `defineProps<T>()`
- [ ] Add emit types with `defineEmits<T>()`
- [ ] Remove console.log statements

---

## Phase 3: Architecture - Service Layer

**Goal**: Clean architecture with separation of concerns.

### 3.1 Directory Structure

```text
/services/
  index.ts                    # Barrel export
  base.service.ts             # Abstract base class
  /product/
    product.service.ts
    product.repository.ts
  /order/
    order.service.ts
    order.repository.ts
  /user/
    user.service.ts
    user.repository.ts
  /address/
    address.service.ts
    address.repository.ts
  /cart/
    cart.service.ts
```

### 3.2 Repository Pattern

```typescript
// Base repository interface
interface IRepository<T, ID> {
  findAll(): Promise<T[]>
  findById(id: ID): Promise<T | null>
  create(entity: Omit<T, 'id'>): Promise<T>
  update(id: ID, entity: Partial<T>): Promise<T>
  delete(id: ID): Promise<boolean>
}

// JSON implementation (for portfolio)
class JsonRepository<T> implements IRepository<T, number> {
  // Simulates async API calls with JSON data
}
```

### 3.3 Service Layer

```typescript
// Services contain business logic
class ProductService {
  constructor(private repo: IProductRepository) {}
  
  async getByCategory(category: ProductCategory): Promise<Product[]>
  async search(query: string): Promise<Product[]>
  async getFeatured(): Promise<Product[]>
}
```

---

## Phase 4: State Management - Pinia

**Goal**: Centralized, typed state management.

### 4.1 Setup

- [ ] Install Pinia (included in Nuxt 3)
- [ ] Configure in `nuxt.config.ts`

### 4.2 Stores

```text
/stores/
  index.ts
  cart.store.ts       # Shopping cart state
  user.store.ts       # Current user, auth state
  favorites.store.ts  # Wishlist
  ui.store.ts         # UI state (modals, sidebars)
```

### 4.3 Store Pattern

```typescript
// Typed store with actions and getters
export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref<CartItem[]>([])
  
  // Getters
  const total = computed(() => 
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )
  
  // Actions
  function addItem(product: Product, quantity: number = 1) { }
  function removeItem(productId: number) { }
  
  return { items, total, addItem, removeItem }
})
```

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

### 5.2 Translation Files

```text
/locales/
  de.json
  en.json
```

### 5.3 Content to Translate

- [ ] Navigation & UI elements
- [ ] Product categories
- [ ] Form labels & validation messages
- [ ] Error messages
- [ ] Checkout flow
- [ ] Account pages
- [ ] Footer content

### 5.4 Component Migration

```vue
<!-- Before -->
<span>Add to Cart</span>

<!-- After -->
<span>{{ $t('cart.addToCart') }}</span>
```

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

### Phase 1

- [ ] 1.1 Remove obsolete files
- [ ] 1.2 Clean dependencies
- [ ] 1.3 Setup tooling
- [ ] 1.4 Project files

### Phase 2

- [ ] 2.1 TypeScript configuration
- [ ] 2.2 Type definitions
- [ ] 2.3 Migrate composables
- [ ] 2.4 Migrate components

### Phase 3

- [ ] 3.1 Directory structure
- [ ] 3.2 Repository pattern
- [ ] 3.3 Service layer

### Phase 4

- [ ] 4.1 Pinia setup
- [ ] 4.2 Create stores
- [ ] 4.3 Migrate state

### Phase 5

- [ ] 5.1 i18n setup
- [ ] 5.2 Translation files
- [ ] 5.3 Migrate content
- [ ] 5.4 Migrate components

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
