# 🧪 Testing Guide

> Comprehensive testing documentation for the Shop portfolio project.

---

## Overview

This project uses a multi-layered testing strategy to ensure code quality and reliability:

| Type            | Tool                             | Purpose                                         |
| --------------- | -------------------------------- | ----------------------------------------------- |
| Unit Tests      | Vitest                           | Test services, composables, stores in isolation |
| Component Tests | Vue Test Utils + Nuxt Test Utils | Test Vue components                             |
| E2E Tests       | Playwright                       | Test complete user journeys                     |
| Bundle Size     | size-limit                       | Track and limit bundle sizes                    |

---

## Quick Start

```bash
# Run unit & component tests (watch mode)
npm run test

# Run unit & component tests once
npm run test:run

# Run with coverage report
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Check bundle sizes
npm run size:check
```

---

## Test Structure

```text
tests/
├── unit/
│   ├── services/
│   │   ├── product.service.spec.ts   # ProductService tests (18)
│   │   └── order.service.spec.ts     # OrderService tests (14)
│   ├── composables/
│   │   └── useProducts.spec.ts       # useProducts tests (7)
│   └── stores/
│       ├── cart.spec.ts              # CartStore tests (20)
│       └── ui.spec.ts                # UiStore tests (21)
├── component/
│   ├── Product/
│   │   └── Card.spec.ts              # ProductCard tests (6)
│   ├── Order/
│   │   └── Card.spec.ts              # OrderCard tests (4)
│   └── UI/
│       └── dialog.spec.ts            # Dialog tests (5)
└── e2e/
    ├── homepage.spec.ts              # Homepage tests (4)
    ├── products.spec.ts              # Product pages tests (6)
    ├── cart.spec.ts                  # Cart tests (5)
    ├── checkout.spec.ts              # Checkout flow tests (9)
    ├── account.spec.ts               # Account pages tests (10)
    └── login.spec.ts                 # Login/Register tests (10)
```

---

## Unit Tests

### Services

Services are tested in isolation with their repository dependencies:

```typescript
// Example: ProductService test
import { describe, it, expect, beforeEach } from 'vitest'
import { ProductService } from '~/services/product/product.service'

describe('ProductService', () => {
  let service: ProductService

  beforeEach(() => {
    service = ProductService.getInstance()
  })

  it('should return all products', async () => {
    const products = await service.getAll()
    expect(products.length).toBeGreaterThan(0)
  })
})
```

**Coverage:**

| Service        | Tests | Coverage                                                                                         |
| -------------- | ----- | ------------------------------------------------------------------------------------------------ |
| ProductService | 18    | getAll, getById, getByCategory, search, getFiltered, getFeatured, getCategories                  |
| OrderService   | 14    | getAll, getByOrderId, getByUserId, getRecentOrders, getByStatus, calculateTotal, formatOrderDate |

### Stores (Pinia)

Pinia stores are tested with a fresh store instance per test:

```typescript
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '~/stores/cart'

beforeEach(() => {
  setActivePinia(createPinia())
})
```

**Coverage:**

| Store     | Tests | Coverage                                                                             |
| --------- | ----- | ------------------------------------------------------------------------------------ |
| CartStore | 20    | addItem, removeItem, increment/decrement, updateQuantity, clearCart, computed values |
| UiStore   | 21    | Menu, cart, search, disclaimer, sidenav, loading state, closeAll                     |

### Composables

Composables that don't require Vue component context are tested directly:

```typescript
import { useProductsRaw, useCategories } from '~/composables/useProducts'

it('should return all raw products', () => {
  const products = useProductsRaw()
  expect(products.length).toBeGreaterThan(0)
})
```

---

## Component Tests

Component tests use `@nuxt/test-utils` with `mountSuspended` for Nuxt-specific features:

```typescript
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProductCard from '~/components/Product/Card.vue'

it('should render product name', async () => {
  const wrapper = await mountSuspended(ProductCard, {
    props: { product: mockProduct },
  })
  expect(wrapper.text()).toContain('Test Chair')
})
```

**Coverage:**

| Component   | Tests | Coverage                                     |
| ----------- | ----- | -------------------------------------------- |
| ProductCard | 6     | Render, price, favorite toggle, active class |
| OrderCard   | 4     | Structure, link, order ID, sum               |
| Dialog      | 5     | Render, slots, close button, emit            |

---

## E2E Tests

E2E tests use Playwright to test complete user journeys in a real browser:

### Critical User Journeys

| Journey          | File               | Tests                                         |
| ---------------- | ------------------ | --------------------------------------------- |
| Homepage         | `homepage.spec.ts` | Load, categories, navigation, language switch |
| Product Browsing | `products.spec.ts` | List, filter, detail, favorites               |
| Shopping Cart    | `cart.spec.ts`     | Add, view, persist, checkout navigation       |
| Checkout         | `checkout.spec.ts` | Address, payment, overview, confirmation      |
| Account          | `account.spec.ts`  | Overview, orders, favorites, edit pages       |
| Login/Register   | `login.spec.ts`    | Form fields, validation, tab switching        |

### Running E2E Tests

```bash
# Run all E2E tests headless
npm run test:e2e

# Run with Playwright UI
npm run test:e2e:ui

# Run specific test file
npx playwright test tests/e2e/checkout.spec.ts

# Run in headed mode (see browser)
npx playwright test --headed
```

### Playwright Configuration

```typescript
// playwright.config.ts
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

---

## Bundle Size Testing

Bundle sizes are tracked using `size-limit`:

```bash
npm run size:check
```

**Limits defined in `.size-limit.json`:**

| Bundle       | Limit  |
| ------------ | ------ |
| Client JS    | 500 KB |
| Client CSS   | 50 KB  |
| Total Assets | 600 KB |

---

## Coverage Reports

Generate coverage reports with:

```bash
npm run test:coverage
```

Reports are generated in `coverage/` directory:

- `coverage/index.html` - HTML report
- `coverage/coverage-final.json` - JSON data

**Coverage Goals:**

| Type        | Target |
| ----------- | ------ |
| Services    | 90%+   |
| Stores      | 80%+   |
| Composables | 80%+   |
| Components  | 70%+   |

---

## Writing New Tests

### Unit Test Template

```typescript
/**
 * @file tests/unit/services/example.spec.ts
 * @description Unit tests for ExampleService
 * @author Your Name
 * @license MIT
 */

import { describe, it, expect, beforeEach } from 'vitest'

describe('ExampleService', () => {
  beforeEach(() => {
    // Setup
  })

  describe('methodName', () => {
    it('should do something', () => {
      expect(true).toBe(true)
    })
  })
})
```

### Component Test Template

```typescript
/**
 * @file tests/component/Example.spec.ts
 */

import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ExampleComponent from '~/components/Example.vue'

describe('ExampleComponent', () => {
  it('should render', async () => {
    const wrapper = await mountSuspended(ExampleComponent)
    expect(wrapper.exists()).toBe(true)
  })
})
```

### E2E Test Template

```typescript
/**
 * @file tests/e2e/example.spec.ts
 */

import { test, expect } from '@playwright/test'

test.describe('Example Feature', () => {
  test('should work', async ({ page }) => {
    await page.goto('/example')
    await expect(page).toHaveURL(/example/)
  })
})
```

---

## CI Integration

Tests and checks are fully automated in GitHub Actions (`.github/workflows/ci.yml`):

### CI Pipeline Jobs

| Job         | Description                   | Runs                           |
| ----------- | ----------------------------- | ------------------------------ |
| `lint`      | ESLint + Prettier check       | On every push/PR               |
| `typecheck` | TypeScript validation         | On every push/PR               |
| `test`      | Unit & component tests        | On every push/PR               |
| `e2e`       | Playwright E2E tests          | After lint/typecheck/test pass |
| `build`     | Production build + size check | After lint/typecheck/test pass |

### Local Validation

Run all checks before committing:

```bash
npm run validate  # lint + format:check + typecheck + test:run
npm run ci        # validate + build
```

### Pre-commit Hooks

Husky + lint-staged automatically runs on staged files:

```bash
# Runs automatically on git commit:
# - ESLint --fix on *.js, *.ts, *.vue
# - Prettier --write on all staged files
```

### Manual CI Commands

```bash
npm run lint          # ESLint check
npm run format:check  # Prettier check
npm run typecheck     # TypeScript check
npm run test:run      # Unit tests
npm run test:e2e      # E2E tests
npm run size:check    # Build + bundle size check
```

---

## Test Statistics

| Category                 | Count   |
| ------------------------ | ------- |
| Unit Tests (Services)    | 32      |
| Unit Tests (Composables) | 7       |
| Unit Tests (Stores)      | 41      |
| Component Tests          | 15      |
| E2E Tests                | 44      |
| **Total**                | **139** |

---

## Troubleshooting

### Common Issues

**"Cannot find module" errors:**

```bash
npx nuxi prepare
```

**Pinia "no active pinia" error:**

```typescript
import { setActivePinia, createPinia } from 'pinia'
beforeEach(() => setActivePinia(createPinia()))
```

**Component not rendering in tests:**

Use `mountSuspended` instead of `mount` for Nuxt components.

**E2E tests timing out:**

Increase timeout in test or use `page.waitForSelector()`.
