# 🏗️ Architecture

> System architecture and design decisions for the Shop portfolio project.

## Overview

This project demonstrates a modern, layered architecture for a Vue 3 / Nuxt 3 e-commerce application.

```text
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │    Pages    │  │  Layouts    │  │   Components    │  │
│  └──────┬──────┘  └──────┬──────┘  └────────┬────────┘  │
└─────────┼────────────────┼──────────────────┼───────────┘
          │                │                  │
          ▼                ▼                  ▼
┌─────────────────────────────────────────────────────────┐
│                   Composition Layer                      │
│  ┌─────────────────┐  ┌─────────────────────────────┐   │
│  │   Composables   │  │       Pinia Stores          │   │
│  │  (useProducts)  │  │  (cart, user, favorites)    │   │
│  └────────┬────────┘  └──────────────┬──────────────┘   │
└───────────┼──────────────────────────┼──────────────────┘
            │                          │
            ▼                          ▼
┌─────────────────────────────────────────────────────────┐
│                    Service Layer                         │
│  ┌─────────────────┐  ┌─────────────────────────────┐   │
│  │ ProductService  │  │  OrderService, CartService  │   │
│  └────────┬────────┘  └──────────────┬──────────────┘   │
└───────────┼──────────────────────────┼──────────────────┘
            │                          │
            ▼                          ▼
┌─────────────────────────────────────────────────────────┐
│                  Repository Layer                        │
│  ┌─────────────────┐  ┌─────────────────────────────┐   │
│  │ IRepository<T>  │──│   JsonProductRepository     │   │
│  │   (interface)   │  │   (implementation)          │   │
│  └─────────────────┘  └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────┐
│                     Data Layer                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │            JSON Files (Mock Data)               │    │
│  │   products.json, orders.json, users.json        │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

## Layer Responsibilities

### 1. Presentation Layer

**Components**: Reusable UI elements with no business logic.

```typescript
// components/Product/Card.vue
// - Displays product information
// - Emits events for user interactions
// - No direct data fetching
```

**Pages**: Route-specific views that compose components.

```typescript
// pages/products/list.vue
// - Fetches data via composables
// - Coordinates child components
// - Handles route parameters
```

**Layouts**: Shared layout wrappers.

```typescript
// layouts/default.vue
// - NavBar, Footer
// - Slot for page content
```

### 2. Composition Layer

**Composables**: Encapsulate reactive logic for components.

```typescript
// composables/useProducts.ts
export function useProducts() {
  const productService = useProductService()
  const products = ref<Product[]>([])
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchProducts() {
    isLoading.value = true
    try {
      products.value = await productService.getAll()
    } catch (e) {
      error.value = e as Error
    } finally {
      isLoading.value = false
    }
  }

  return { products, isLoading, error, fetchProducts }
}
```

**Pinia Stores**: Global state management.

```typescript
// stores/cart.store.ts
export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  
  const total = computed(() => /* ... */)
  
  function addItem(product: Product) { /* ... */ }
  function removeItem(id: number) { /* ... */ }
  
  return { items, total, addItem, removeItem }
})
```

### 3. Service Layer

Business logic and orchestration.

```typescript
// services/product/product.service.ts
export class ProductService {
  constructor(private repository: IProductRepository) {}

  async getAll(): Promise<Product[]> {
    return this.repository.findAll()
  }

  async getByCategory(category: ProductCategory): Promise<Product[]> {
    const products = await this.repository.findAll()
    return products.filter(p => p.type === category)
  }

  async search(query: string): Promise<Product[]> {
    const products = await this.repository.findAll()
    const lowerQuery = query.toLowerCase()
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.designer.toLowerCase().includes(lowerQuery)
    )
  }
}
```

### 4. Repository Layer

Data access abstraction.

```typescript
// services/base.repository.ts
export interface IRepository<T, ID = number> {
  findAll(): Promise<T[]>
  findById(id: ID): Promise<T | null>
  create(entity: Omit<T, 'id'>): Promise<T>
  update(id: ID, entity: Partial<T>): Promise<T>
  delete(id: ID): Promise<boolean>
}

// services/product/product.repository.ts
export class JsonProductRepository implements IRepository<Product> {
  private data: Product[]

  constructor() {
    this.data = productData as Product[]
  }

  async findAll(): Promise<Product[]> {
    // Simulate network latency
    await this.delay(50)
    return [...this.data]
  }

  async findById(id: number): Promise<Product | null> {
    await this.delay(25)
    return this.data.find(p => p.id === id) ?? null
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
```

---

## Design Patterns

### Repository Pattern

**Why**: Abstracts data access, making it easy to swap implementations.

```typescript
// Interface
interface IProductRepository {
  findAll(): Promise<Product[]>
  findById(id: number): Promise<Product | null>
}

// JSON Implementation (current)
class JsonProductRepository implements IProductRepository { }

// API Implementation (future)
class ApiProductRepository implements IProductRepository { }
```

### Dependency Injection

**Why**: Loose coupling, testability.

```typescript
// In composable
export function useProductService() {
  // Could be injected via provide/inject for testing
  const repository = new JsonProductRepository()
  return new ProductService(repository)
}

// In tests
const mockRepository = {
  findAll: vi.fn().mockResolvedValue([mockProduct])
}
const service = new ProductService(mockRepository)
```

### Composition over Inheritance

**Why**: Flexible, maintainable code.

```typescript
// ❌ Avoid deep inheritance
class BaseComponent extends Vue { }
class ProductComponent extends BaseComponent { }
class ProductCard extends ProductComponent { }

// ✅ Use composition
function useProduct(id: number) { }
function useFavorites() { }
function useCart() { }

// Compose in component
const product = useProduct(props.id)
const { isFavorite, toggle } = useFavorites()
const { addToCart } = useCart()
```

---

## State Management Strategy

### Local State (Component)

Use for UI state that doesn't need to be shared.

```typescript
const isDropdownOpen = ref(false)
const selectedTab = ref(0)
```

### Shared State (Composable)

Use for data shared between a few related components.

```typescript
// composables/useProductFilters.ts
const filters = ref<ProductFilter>({})
const sortBy = ref<SortOption>('name')
```

### Global State (Pinia)

Use for app-wide state.

```typescript
// Cart, User session, Favorites, UI state (modals)
const cartStore = useCartStore()
const userStore = useUserStore()
```

### Server State (Future: TanStack Query)

For caching and synchronizing server data.

```typescript
// Could add @tanstack/vue-query for advanced caching
const { data: products, isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: () => productService.getAll()
})
```

---

## Component Architecture

### Smart vs Dumb Components

**Container (Smart) Components**:

- Pages and some parent components
- Handle data fetching
- Manage state
- Connect to stores

**Presentational (Dumb) Components**:

- Pure UI rendering
- Receive data via props
- Emit events for interactions
- Highly reusable

```text
pages/products/list.vue (Smart)
└── components/Product/Grid.vue (Dumb)
    └── components/Product/Card.vue (Dumb)
        └── components/UI/Button.vue (Dumb)
```

### Component Communication

```text
Props Down, Events Up

┌─────────────┐
│   Parent    │
│  (Page)     │
└──────┬──────┘
       │ :product="product"
       │ @add-to-cart="handleAdd"
       ▼
┌─────────────┐
│   Child     │
│ (Card.vue)  │
└─────────────┘
```

---

## Data Flow

### Reading Data

```text
User Action → Component → Composable → Service → Repository → JSON
     ↓           ↓           ↓           ↓           ↓
  Click      useProducts  fetchAll   getAll()   findAll()
     ↓           ↓           ↓           ↓           ↓
              products.value = data ← ← ← ← ← ← [...]
```

### Writing Data (Cart Example)

```text
User Action → Component → Store → LocalStorage
     ↓           ↓         ↓          ↓
  Click      addToCart  addItem   persist()
     ↓           ↓         ↓          ↓
            UI Updates ← items.value updated
```

---

## Error Handling Strategy

### Layers

1. **Repository**: Throw specific errors
2. **Service**: Catch, transform, re-throw
3. **Composable**: Catch, set error state
4. **Component**: Display error UI

```typescript
// Repository
async findById(id: number): Promise<Product | null> {
  const product = this.data.find(p => p.id === id)
  if (!product) return null
  return product
}

// Service
async getById(id: number): Promise<Product> {
  const product = await this.repository.findById(id)
  if (!product) {
    throw new ProductNotFoundError(id)
  }
  return product
}

// Composable
async function fetchProduct(id: number) {
  try {
    product.value = await productService.getById(id)
  } catch (e) {
    if (e instanceof ProductNotFoundError) {
      error.value = 'Product not found'
    } else {
      error.value = 'Something went wrong'
    }
  }
}

// Component
<template>
  <ErrorMessage v-if="error" :message="error" />
  <ProductDetails v-else :product="product" />
</template>
```

---

## Testing Strategy

### Unit Tests

```typescript
// services/product.service.spec.ts
describe('ProductService', () => {
  it('should filter products by category', async () => {
    const mockRepo = {
      findAll: vi.fn().mockResolvedValue([
        { id: 1, type: 'chairs' },
        { id: 2, type: 'tables' }
      ])
    }
    const service = new ProductService(mockRepo)
    
    const chairs = await service.getByCategory('chairs')
    
    expect(chairs).toHaveLength(1)
    expect(chairs[0].type).toBe('chairs')
  })
})
```

### Component Tests

```typescript
// components/Product/Card.spec.ts
describe('ProductCard', () => {
  it('emits favor event when heart is clicked', async () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockProduct, favored: false }
    })
    
    await wrapper.find('.product-card__favorite').trigger('click')
    
    expect(wrapper.emitted('favor')).toBeTruthy()
    expect(wrapper.emitted('favor')[0]).toEqual([mockProduct.id])
  })
})
```

### E2E Tests

```typescript
// tests/e2e/checkout.spec.ts
test('user can complete checkout', async ({ page }) => {
  await page.goto('/products/list')
  await page.click('[data-testid="product-card"]:first-child')
  await page.click('[data-testid="add-to-cart"]')
  await page.click('[data-testid="checkout-button"]')
  
  // Fill address, payment, etc.
  
  await expect(page.locator('.confirmation-message')).toBeVisible()
})
```

---

## Future Considerations

### API Migration Path

The repository pattern makes it easy to switch to a real API:

```typescript
// 1. Create new repository
class ApiProductRepository implements IProductRepository {
  private api = useNuxtApp().$api
  
  async findAll(): Promise<Product[]> {
    return this.api.get('/products')
  }
}

// 2. Swap in service factory
export function useProductService() {
  const repository = import.meta.env.DEV
    ? new JsonProductRepository()
    : new ApiProductRepository()
  
  return new ProductService(repository)
}
```

### SSR Considerations

- Services should be stateless
- Repositories handle data isolation per request
- Stores use `useState` for SSR-safe state
