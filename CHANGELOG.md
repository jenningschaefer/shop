# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Documentation folder with modernization plan, code standards, and architecture docs
- ESLint flat config with Nuxt integration
- Prettier configuration
- EditorConfig for consistent formatting
- MIT License
- Proper README with badges and documentation

### Changed

- Updated dependencies to latest versions (Nuxt 3.14, Vue 3.5, TypeScript 5.6)
- Modernized `tsconfig.json` to extend Nuxt's generated config
- Cleaned up `nuxt.config.ts` and removed deprecated modules

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
