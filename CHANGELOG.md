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

### Added

- Initial release
- Product catalog with categories
- Shopping cart functionality
- Favorites / Wishlist
- Checkout flow (mock)
- User account pages
- Responsive design
