# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Full TypeScript type definitions in `/types/` directory
- New `useCart` composable for cart management
- File headers with license and author info to all components
- Documentation folder with modernization plan, code standards, and architecture docs
- ESLint flat config with Nuxt integration
- Prettier configuration
- EditorConfig for consistent formatting
- MIT License
- Proper README with badges and documentation
- SVG Sprites documentation in STANDARDS.md
- **Service Layer Architecture** (`/services/` directory):
  - Base repository interface with JsonRepository implementation
  - ProductService, OrderService, UserService, AddressService, CartService
  - Singleton pattern for service instances
  - Simulated async API calls with configurable delay
  - Clean separation of concerns (Repository → Service → Composable)
- **Pinia State Management** (`/stores/` directory):
  - CartStore with localStorage persistence
  - UserStore with mock authentication
  - FavoritesStore for wishlist management
  - UiStore for modals, sidebars, disclaimer state
- **Internationalization (i18n)**:
  - `@nuxtjs/i18n` module configured with DE (default) and EN locales
  - Full UI translations in `/locales/de.json` and `/locales/en.json`
  - Product data with localized fields (name, description, features, specs)
  - Localized pricing (EUR/USD)
  - `useLocale` composables for product localization
  - Language switcher in NavBar
- **Phase 8: Polish & CI/CD**:
  - Updated GitHub Actions CI workflow for Nuxt 5 compatibility
  - Added accessibility improvements (ARIA labels, keyboard navigation)
  - Changed icon-only buttons from `<a>` to `<button>` for semantics
  - Added `aria-hidden` to decorative SVG icons
  - Sidenav now closes on Escape key and prevents body scroll
  - Added `role="dialog"` and `aria-modal` to Sidenav component
- **Nuxt 4.2.2 + Nuxt 5 Compatibility**:
  - Upgraded from Nuxt 3.14 to Nuxt 4.2.2 stable
  - Enabled `compatibilityVersion: 5` for Nuxt 5 preview
  - Updated @vueuse/nuxt to v14 (Nuxt 4 compatible)
  - Fixed type errors in services, stores, and tests
  - Added `is_default` field to Address type
  - Fixed `price_us` → `price` property access in cart logic
  - Added `override` modifiers for class method overrides
  - Runtime fully functional with all 95 tests passing
- **Testing Infrastructure** (139 tests total):
  - Vitest configuration with Nuxt test environment
  - Unit tests for ProductService (18) and OrderService (14)
  - Unit tests for useProducts composable (7)
  - Unit tests for Pinia stores: CartStore (20), UiStore (21)
  - Component tests: ProductCard (6), OrderCard (4), Dialog (5)
  - E2E tests with Playwright:
    - Homepage (4), Products (6), Cart (5)
    - Checkout flow (9), Account pages (10), Login/Register (10)
  - Test coverage reporting with v8
  - Bundle size testing with size-limit
  - Comprehensive testing documentation (`docs/TESTING.md`)
- **CI/CD Pipeline**:
  - GitHub Actions workflow (`.github/workflows/ci.yml`)
  - Automated lint, format, typecheck, test, and build
  - Pre-commit hooks with husky + lint-staged
  - `npm run validate` for local pre-commit validation
  - `.npmrc` with `legacy-peer-deps=true` to avoid CI/Netlify install failures due to peer-deps conflicts
  - `.nvmrc` pinning Node.js 20 for consistent local/CI/Netlify builds
  - Faster Playwright CI via sharding + browser cache

### Fixed

- Fixed font loading: corrected font format from `woff2` to `truetype-variations` for TTF variable fonts
- Fixed font paths: moved fonts to `public/fonts/` for static serving
- Fixed image loading: corrected `@nuxt/image` directory configuration

### Changed

- **BREAKING**: All composables migrated from JavaScript to TypeScript
- All Vue components now use `<script setup lang="ts">`
- All props use typed `defineProps<T>()` syntax
- All emits use typed `defineEmits<T>()` syntax
- Updated dependencies to latest versions (Nuxt 3.14, Vue 3.5, TypeScript 5.6)
- Modernized `tsconfig.json` to extend Nuxt's generated config
- Cleaned up `nuxt.config.ts` and removed deprecated modules
- Removed console.log statements from production code

### Removed

- Removed unused `@nuxt/ui` dependency (using custom SCSS)
- Removed deprecated `@nuxt/image-edge` (replaced with `@nuxt/image`)
- Removed unused `go` package
- Removed duplicate `nuxt.config.js` file
- Removed old Jest configuration (will be replaced with Vitest)
- Removed duplicate image assets from `assets/images/`
- Removed empty vendors SCSS folder

## [1.0.0] - 2024-01-01

### Initial Release

- Initial release
- Product catalog with categories
- Shopping cart functionality
- Favorites / Wishlist
- Checkout flow (mock)
- User account pages
- Responsive design
