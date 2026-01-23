# 📏 Code Standards

> Coding conventions, file structure, and style guide for the Shop project.

## Table of Contents

1. [File Headers](#file-headers)
2. [Vue Component Structure](#vue-component-structure)
3. [TypeScript Conventions](#typescript-conventions)
4. [Naming Conventions](#naming-conventions)
5. [SVG Icons & Sprites](#svg-icons--sprites)
6. [SCSS/Styling](#scssstyling)
7. [File Organization](#file-organization)
8. [Git Conventions](#git-conventions)
9. [Code Quality Checklist](#code-quality-checklist)
10. [Development Workflow](#development-workflow)

---

## File Headers

All source files should include a header comment with metadata.

### TypeScript / JavaScript Files

```typescript
/**
 * @file product.service.ts
 * @description Business logic for product-related operations including
 *              fetching, filtering, and searching products.
 *
 * @author Jenning Schaefer
 * @license MIT
 * @copyright 2024-2026 Jenning Schaefer
 *
 * @example
 * const productService = new ProductService(repository)
 * const chairs = await productService.getByCategory('chairs')
 */
```

### Vue Components

```vue
<!--
  @file ProductCard.vue
  @description Displays a product card with image, name, price, and favorite toggle.
               Used in product listings and search results.
  
  @author Jenning Schaefer
  @license MIT
  
  @props
    - product: Product - The product to display
    - favored: boolean - Whether the product is in favorites
  
  @emits
    - favor: (productId: number) => void - Emitted when favorite is toggled
-->
```

### SCSS Files

```scss
/**
 * @file _button.scss
 * @description Button component styles including primary, secondary, 
 *              and dark variants with hover states.
 * 
 * @author Jenning Schaefer
 * @license MIT
 * 
 * @dependencies
 *   - abstracts/_variables.scss
 *   - abstracts/_mixins.scss
 */
```

---

## Vue Component Structure

Components follow a strict ordering for consistency and readability.

### Script Section Order

```vue
<script setup lang="ts">
// ============================================
// 1. IMPORTS
// ============================================
import type { Product } from '~/types'
import { useProductService } from '~/composables/useProductService'

// ============================================
// 2. TYPES (component-specific)
// ============================================
interface Props {
  product: Product
  favored?: boolean
}

interface Emits {
  (e: 'favor', productId: number): void
  (e: 'addToCart', product: Product): void
}

// ============================================
// 3. PROPS & EMITS
// ============================================
const props = withDefaults(defineProps<Props>(), {
  favored: false,
})

const emit = defineEmits<Emits>()

// ============================================
// 4. COMPOSABLES & SERVICES
// ============================================
const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const productService = useProductService()

// ============================================
// 5. REACTIVE STATE (refs, reactive)
// ============================================
const isLoading = ref(false)
const quantity = ref(1)

// ============================================
// 6. COMPUTED PROPERTIES
// ============================================
const formattedPrice = computed(() =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(Number(props.product.price_eur))
)

const isInStock = computed(() => props.product.stock > 0)

// ============================================
// 7. WATCHERS
// ============================================
watch(
  () => props.product.id,
  (newId) => {
    quantity.value = 1
  }
)

// ============================================
// 8. METHODS / FUNCTIONS
// ============================================
function handleFavorite(): void {
  emit('favor', props.product.id)
}

async function handleAddToCart(): Promise<void> {
  isLoading.value = true
  try {
    await cartStore.addItem(props.product, quantity.value)
  } finally {
    isLoading.value = false
  }
}

// ============================================
// 9. LIFECYCLE HOOKS
// ============================================
onMounted(() => {
  // initialization logic
})

onUnmounted(() => {
  // cleanup logic
})

// ============================================
// 10. EXPOSE (if needed)
// ============================================
defineExpose({
  resetQuantity: () => {
    quantity.value = 1
  },
})
</script>
```

### Template Guidelines

```vue
<template>
  <!-- Single root element with semantic class name -->
  <article class="product-card">
    <!-- Use semantic HTML elements -->
    <figure class="product-card__image">
      <NuxtPicture :src="product.img" :alt="product.name" />
    </figure>

    <!-- BEM class naming -->
    <div class="product-card__content">
      <h3 class="product-card__title">{{ product.name }}</h3>
      <p class="product-card__price">{{ formattedPrice }}</p>
    </div>

    <!-- Event handlers: use @click not v-on:click -->
    <button class="product-card__button" :disabled="!isInStock" @click="handleAddToCart">
      {{ $t('cart.addToCart') }}
    </button>
  </article>
</template>
```

### Style Section (Scoped)

```vue
<style lang="scss" scoped>
@use '~/assets/SCSS/abstracts' as *;

.product-card {
  // Component styles go here (if not in global SCSS)
}
</style>
```

---

## TypeScript Conventions

### General Rules

```typescript
// ✅ Use strict equality
if (product.id === selectedId) {
}

// ❌ Avoid loose equality
if (product.id == selectedId) {
}

// ✅ Use const for values that don't change
const MAX_ITEMS = 10

// ✅ Use explicit return types for functions
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}

// ✅ Use nullish coalescing
const name = user.nickname ?? user.firstName

// ✅ Use optional chaining
const city = user.address?.city

// ❌ Avoid any - use unknown or proper types
function processData(data: any) {} // Bad
function processData(data: unknown) {} // Better
function processData(data: ApiResponse) {} // Best
```

### Type Definitions

```typescript
// ✅ Use interfaces for objects
interface Product {
  id: number
  name: string
  price: number
}

// ✅ Use type for unions and aliases
type ProductCategory = 'chairs' | 'tables' | 'lighting' | 'accessory'
type ProductId = number

// ✅ Use readonly for immutable properties
interface Config {
  readonly apiUrl: string
  readonly timeout: number
}

// ✅ Use generics for reusable types
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
```

### Async/Await

```typescript
// ✅ Always use try/catch with async
async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await productService.getAll()
    return response.data
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}

// ✅ Use Promise.all for parallel requests
const [products, categories] = await Promise.all([
  productService.getAll(),
  categoryService.getAll(),
])
```

---

## Naming Conventions

### Files & Directories

| Type           | Convention                       | Example               |
| -------------- | -------------------------------- | --------------------- |
| Vue Components | PascalCase                       | `ProductCard.vue`     |
| Composables    | camelCase with `use` prefix      | `useProducts.ts`      |
| Services       | camelCase with `.service` suffix | `product.service.ts`  |
| Types          | camelCase with `.types` suffix   | `product.types.ts`    |
| Stores         | camelCase with `.store` suffix   | `cart.store.ts`       |
| SCSS partials  | \_kebab-case                     | `_product-card.scss`  |
| Test files     | Same name with `.spec` suffix    | `ProductCard.spec.ts` |

### Variables & Functions

```typescript
// Variables: camelCase
const productList = ref<Product[]>([])
const isLoading = ref(false)
const currentUser = useCurrentUser()

// Constants: SCREAMING_SNAKE_CASE
const MAX_CART_ITEMS = 99
const API_BASE_URL = '/api/v1'

// Functions: camelCase, verb prefix
function fetchProducts() {}
function handleClick() {}
function validateForm() {}
function formatPrice() {}

// Boolean variables: is/has/can prefix
const isVisible = ref(false)
const hasError = ref(false)
const canSubmit = computed(() => form.valid)

// Event handlers: handle prefix
function handleSubmit() {}
function handleProductClick() {}
```

### Vue Specific

```typescript
// Props: camelCase in script, kebab-case in template
defineProps<{ productId: number }>()
// <MyComponent :product-id="123" />

// Emits: camelCase
const emit = defineEmits<{
  (e: 'updateCart', item: CartItem): void
  (e: 'removeItem', id: number): void
}>()

// Refs to DOM elements: suffix with Ref or El
const inputRef = ref<HTMLInputElement | null>(null)
const modalEl = ref<HTMLDivElement | null>(null)
```

### CSS/SCSS Classes

```scss
// BEM Convention: Block__Element--Modifier
.product-card {
} // Block
.product-card__title {
} // Element
.product-card__title--highlighted {
} // Modifier
.product-card--featured {
} // Block modifier

// State classes: is- or has- prefix
.product-card.is-loading {
}
.product-card.is-active {
}
.product-card.has-error {
}

// Utility classes: descriptive
.visually-hidden {
}
.text-center {
}
```

---

## SVG Icons & Sprites

### Overview

All SVG icons are managed as **SVG sprites** stored in `assets/svg/`. This approach provides:

- Single HTTP request for all icons
- Easy icon management and updates
- Consistent styling via CSS
- Small bundle size

### Sprite Files

```text
assets/svg/
├── icons.svg      # UI icons (arrows, menu, cart, etc.)
└── logos.svg      # Brand logos and wordmarks
```

### Sprite Structure

Each sprite file contains multiple symbols with unique IDs:

```xml
<!-- assets/svg/icons.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="arrow-left" viewBox="0 0 24 24">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </symbol>

  <symbol id="menu" viewBox="0 0 24 24">
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </symbol>

  <symbol id="cart" viewBox="0 0 24 24">
    <!-- cart icon paths -->
  </symbol>
</svg>
```

### Usage in Vue Components

```vue
<template>
  <!-- Reference icon by sprite file and symbol ID -->
  <svg class="icon icon--back">
    <use href="~/assets/svg/icons.svg#arrow-left" />
  </svg>

  <!-- Logo example -->
  <svg class="logo">
    <use href="~/assets/svg/logos.svg#vesta" />
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
  fill: currentColor; // Inherits text color

  &--back {
    width: 20px;
    height: 20px;
  }
}

.logo {
  width: 100px;
  height: auto;
}
</style>
```

### Adding New Icons

1. Open the appropriate sprite file (`icons.svg` or `logos.svg`)
2. Add a new `<symbol>` with a unique `id`
3. Include proper `viewBox` attribute
4. Reference using `<use href="~/assets/svg/[file].svg#[id]" />`

### Best Practices

- ✅ Use `currentColor` for fill to inherit text color
- ✅ Set `viewBox` on symbols, size via CSS
- ✅ Use descriptive, kebab-case IDs (`arrow-left`, `shopping-cart`)
- ✅ Keep icons optimized (use SVGO or similar)
- ❌ Don't use inline SVGs for repeated icons
- ❌ Don't use icon fonts

---

## SCSS/Styling

### Architecture (7-1 Pattern)

```text
assets/SCSS/
├── abstracts/         # Variables, mixins, functions
│   ├── _index.scss
│   ├── _variables.scss
│   └── _mixins.scss
├── base/              # Reset, typography, base styles
│   ├── _index.scss
│   ├── _base.scss
│   ├── _fonts.scss
│   └── _typography.scss
├── components/        # Component-specific styles
│   ├── _index.scss
│   ├── _button.scss
│   └── _productCard.scss
├── layout/            # Layout components
│   ├── _index.scss
│   ├── _header.scss
│   └── _footer.scss
├── pages/             # Page-specific styles
│   ├── _index.scss
│   └── _home.scss
├── vendors/           # Third-party styles
│   └── _index.scss
└── main.scss          # Main entry point
```

### Variables

```scss
// Colors: semantic naming
$color-primary: #141414;
$color-secondary: #f5f5f5;
$color-accent: #87a3d2;
$color-error: #dc3545;
$color-success: #28a745;

// Spacing: t-shirt sizes
$spacing-xs: 0.25rem; // 4px
$spacing-sm: 0.5rem; // 8px
$spacing-md: 1rem; // 16px
$spacing-lg: 1.5rem; // 24px
$spacing-xl: 2rem; // 32px
$spacing-xxl: 3rem; // 48px

// Breakpoints
$breakpoint-sm: 36em; // 576px
$breakpoint-md: 48em; // 768px
$breakpoint-lg: 62em; // 992px
$breakpoint-xl: 75em; // 1200px
```

### Mixins

```scss
// Responsive breakpoint mixin
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'sm' {
    @media (min-width: $breakpoint-sm) {
      @content;
    }
  } @else if $breakpoint == 'md' {
    @media (min-width: $breakpoint-md) {
      @content;
    }
  } @else if $breakpoint == 'lg' {
    @media (min-width: $breakpoint-lg) {
      @content;
    }
  } @else if $breakpoint == 'xl' {
    @media (min-width: $breakpoint-xl) {
      @content;
    }
  }
}

// Usage
.product-grid {
  display: grid;
  grid-template-columns: 1fr;

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## File Organization

### Project Structure

```text
/
├── assets/
│   ├── SCSS/              # Styles (7-1 pattern)
│   ├── fonts/             # Custom fonts
│   ├── images/            # Source images (processed)
│   └── svg/               # SVG sprites
├── components/
│   ├── UI/                # Generic, reusable components
│   ├── Product/           # Product domain components
│   ├── Order/             # Order domain components
│   └── Checkout/          # Checkout domain components
├── composables/           # Vue composables
├── data/                  # Mock JSON data
├── docs/                  # Documentation
├── layouts/               # Page layouts
├── locales/               # i18n translation files
├── pages/                 # Route pages
├── public/                # Static assets
├── services/              # Business logic layer
├── stores/                # Pinia stores
├── tests/                 # Test files
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

### Import Order

```typescript
// 1. Node built-ins (if applicable)
import { readFile } from 'fs'

// 2. External packages
import { ref, computed } from 'vue'

// 3. Nuxt auto-imports (optional, as they're auto-imported)
// import { useRoute, useRouter } from '#app'

// 4. Internal types
import type { Product, CartItem } from '~/types'

// 5. Internal modules (services, stores, composables)
import { useProductService } from '~/services'
import { useCartStore } from '~/stores'

// 6. Components (if needed)
import ProductCard from '~/components/Product/Card.vue'

// 7. Assets
import logoSvg from '~/assets/svg/logos.svg'
```

---

## Git Conventions

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

```text
feat(cart): add quantity selector to cart items

fix(checkout): correct tax calculation for EU orders

docs(readme): update installation instructions

refactor(products): migrate useProducts to TypeScript

test(cart): add unit tests for CartService

chore(deps): update dependencies to latest versions
```

### Branch Naming

```text
feature/add-cart-functionality
bugfix/fix-checkout-redirect
refactor/typescript-migration
docs/update-readme
chore/update-dependencies
```

---

## Code Quality Checklist

Before committing, ensure:

- [ ] No `console.log` statements (use proper logging)
- [ ] No `any` types (use proper TypeScript types)
- [ ] No `==` comparisons (use `===`)
- [ ] All functions have return types
- [ ] All async functions have error handling
- [ ] Components follow the structure order
- [ ] File has appropriate header comment
- [ ] No unused imports or variables
- [ ] Tests pass
- [ ] Linting passes

---

## Development Workflow

### Overview: Plan → Document → Build → Test → Commit

```text
┌─────────────────────────────────────────────────────────────┐
│  1. PLAN          What are we building? Why?                │
│     └─→ Create issue/ticket with acceptance criteria        │
├─────────────────────────────────────────────────────────────┤
│  2. DOCUMENT      How will it work?                         │
│     └─→ Update docs BEFORE coding (types, API, usage)       │
├─────────────────────────────────────────────────────────────┤
│  3. BUILD         Write the code                            │
│     └─→ Follow standards, write tests alongside code        │
├─────────────────────────────────────────────────────────────┤
│  4. TEST          Verify it works                           │
│     └─→ npm run validate (lint + format + typecheck + test) │
├─────────────────────────────────────────────────────────────┤
│  5. COMMIT        Save your work                            │
│     └─→ Conventional commit, PR review                      │
└─────────────────────────────────────────────────────────────┘
```

### Documentation-First Development

**Why document first?**

- Forces you to think through the API before coding
- Catches design issues early
- Creates documentation as a side effect
- Makes code review easier

**Before writing any code:**

1. **Define Types** - Add interfaces to `/types/`
2. **Document API** - Write JSDoc comments for public functions
3. **Update README** - Add feature to relevant docs if user-facing
4. **Write Test Stubs** - Create test file with `it.todo()` for expected behavior

```typescript
// Step 1: Define types FIRST
interface NewFeatureOptions {
  enabled: boolean
  threshold: number
}

// Step 2: Document the API with JSDoc
/**
 * Calculates the discount based on cart total
 * @param total - Cart total in cents
 * @param options - Discount configuration
 * @returns Discount amount in cents
 * @example
 * const discount = calculateDiscount(10000, { enabled: true, threshold: 5000 });
 * // Returns 500 (5% discount)
 */
function calculateDiscount(total: number, options: NewFeatureOptions): number {
  // TODO: Implement
  throw new Error('Not implemented')
}
```

```typescript
// Step 3: Write test stubs BEFORE implementation
describe('calculateDiscount', () => {
  it.todo('should return 0 when disabled')
  it.todo('should return 0 when below threshold')
  it.todo('should calculate 5% discount when above threshold')
  it.todo('should handle edge case of exactly threshold')
})
```

### Adding New Features

#### Small Feature (< 1 day)

1. Create feature branch: `git checkout -b feat/feature-name`
2. Add types to `/types/` if needed
3. Write tests first (TDD) or alongside code
4. Implement feature
5. Run `npm run validate`
6. Commit with conventional message
7. Create PR

#### Large Feature (> 1 day)

1. **Planning Phase**
   - Create issue with acceptance criteria
   - Break down into smaller tasks
   - Identify affected areas (types, services, components)

2. **Documentation Phase**
   - Add/update types in `/types/`
   - Document public API with JSDoc
   - Update ARCHITECTURE.md if architectural changes
   - Create test file with `it.todo()` stubs

3. **Implementation Phase**
   - Implement incrementally
   - Write tests for each increment
   - Commit frequently with clear messages

4. **Review Phase**
   - Run full validation: `npm run validate`
   - Self-review diff before PR
   - Request code review

### Adding New Modules/Dependencies

Before adding a new npm package:

#### Evaluation Checklist

- [ ] Is it really needed? Can we achieve this with existing code?
- [ ] Is it actively maintained? (check last commit, open issues)
- [ ] What's the bundle size impact? (use [bundlephobia.com](https://bundlephobia.com))
- [ ] Does it have TypeScript types?
- [ ] Is it compatible with our Nuxt/Vue version?
- [ ] What's the license? (MIT, Apache 2.0 preferred)

#### Installation Process

```bash
# 1. Check bundle size first
npx bundlephobia-cli <package-name>

# 2. Install with legacy-peer-deps if needed
npm install <package-name> --legacy-peer-deps

# 3. Add types if not included
npm install -D @types/<package-name>

# 4. Run validation
npm run validate
```

#### Documentation Requirements

When adding a new module:

1. **Update package.json** - Package is added automatically
2. **Update nuxt.config.ts** - If it's a Nuxt module
3. **Add to ARCHITECTURE.md** - Document why it's needed
4. **Add to README.md** - If user-facing or significant
5. **Create usage example** - In relevant docs or comments

### Pre-Commit Workflow

#### Automatic Checks (via husky)

These run automatically on `git commit`:

- ESLint with auto-fix
- Prettier formatting

#### Manual Checks (before commit)

Run the full validation suite:

```bash
npm run validate
```

This runs:

1. `npm run lint` - ESLint check
2. `npm run format:check` - Prettier check
3. `npm run typecheck` - TypeScript validation
4. `npm run test:run` - All unit/component tests

#### Pre-Commit Checklist

- [ ] Code compiles without errors
- [ ] All tests pass
- [ ] No linting errors
- [ ] Code is formatted
- [ ] New code has tests
- [ ] Documentation is updated
- [ ] Commit message follows conventional format
- [ ] No sensitive data (API keys, passwords)
- [ ] No debug code (`console.log`, `debugger`)

### Post-Build Verification

After implementing a feature:

#### 1. Local Testing

```bash
# Run all checks
npm run validate

# Build and test production
npm run build
npm run preview

# Run E2E tests against preview
npm run test:e2e
```

#### 2. Documentation Verification

- [ ] Types are documented with JSDoc
- [ ] Public functions have `@example` tags
- [ ] README updated if user-facing
- [ ] CHANGELOG updated for significant changes
- [ ] API changes documented

#### 3. Visual Verification

- [ ] Feature works as expected in browser
- [ ] No console errors
- [ ] Responsive design works
- [ ] i18n works (DE/EN)

### Test-Driven Development (TDD)

For complex logic, follow TDD:

```text
┌─────────────────┐
│   Write Test    │  ← Define expected behavior
│   (RED)         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Write Code     │  ← Minimal code to pass
│   (GREEN)       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Refactor      │  ← Improve without breaking
│   (REFACTOR)    │
└────────┬────────┘
         │
         └──────────→ Repeat
```

**Example TDD Flow:**

```typescript
// 1. RED - Write failing test
it('should calculate tax correctly', () => {
  expect(calculateTax(100, 0.19)).toBe(19)
})

// 2. GREEN - Write minimal code to pass
function calculateTax(amount: number, rate: number): number {
  return amount * rate
}

// 3. REFACTOR - Improve code
function calculateTax(amount: number, rate: number): number {
  if (amount < 0) throw new Error('Amount cannot be negative')
  return Math.round(amount * rate * 100) / 100
}
```

### Commit Message Standards

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**

| Type       | Description                  |
| ---------- | ---------------------------- |
| `feat`     | New feature                  |
| `fix`      | Bug fix                      |
| `docs`     | Documentation only           |
| `style`    | Formatting, no code change   |
| `refactor` | Code change, no feature/fix  |
| `test`     | Adding/updating tests        |
| `chore`    | Build, tooling, dependencies |
| `perf`     | Performance improvement      |
| `ci`       | CI/CD changes                |

**Examples:**

```bash
feat(cart): add quantity update functionality
fix(checkout): correct tax calculation for EU
docs(readme): add testing section
test(services): add ProductService tests
chore(deps): update nuxt to 3.14
```

> **Note:** See [Branch Naming](#branch-naming) in Git Conventions above for branch naming rules.
