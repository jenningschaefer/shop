# 🛋️ Shop

> Modern e-commerce portfolio project built with Nuxt 3 and TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Nuxt](https://img.shields.io/badge/Nuxt-3.14-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## 🌐 Demo

**Live Demo**: [shop.jenningschaefer.com](https://shop.jenningschaefer.com/)

> ⚠️ **Disclaimer**: This is a portfolio project. All products, prices, and transactions are fictional. No actual purchases can be made.

## ✨ Features

- 🛒 Product catalog with categories (Chairs, Tables, Lighting, Accessories)
- ❤️ Favorites / Wishlist functionality
- 🛍️ Shopping cart with quantity management
- 📱 Responsive design for all devices
- 🎨 Custom SCSS styling with 7-1 architecture
- 🖼️ Optimized images with `@nuxt/image`

## 🛠️ Tech Stack

| Category | Technology |
| -------- | ---------- |
| Framework | [Nuxt 3](https://nuxt.com/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | SCSS with 7-1 Architecture |
| State | [VueUse](https://vueuse.org/) + LocalStorage |
| Images | [@nuxt/image](https://image.nuxt.com/) |
| Linting | ESLint + Prettier |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/jenningschaefer/shop.git
cd shop

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## 📁 Project Structure

```text
shop/
├── assets/
│   ├── SCSS/              # Styles (7-1 pattern)
│   ├── fonts/             # Custom fonts (Open Sans)
│   └── svg/               # SVG sprites (icons, logos)
├── components/
│   ├── UI/                # Generic UI components
│   ├── Product/           # Product-related components
│   ├── Order/             # Cart, favorites
│   └── Checkout/          # Checkout flow
├── composables/           # Vue composables
├── data/                  # Mock JSON data
├── docs/                  # Documentation
├── layouts/               # Page layouts
├── pages/                 # Route pages
├── public/                # Static assets
└── types/                 # TypeScript definitions
```

## 📖 Documentation

Detailed documentation is available in the [`docs/`](./docs/) folder:

- [Modernization Plan](./docs/MODERNIZATION_PLAN.md) - Roadmap for improvements
- [Code Standards](./docs/STANDARDS.md) - Coding conventions and style guide
- [Architecture](./docs/ARCHITECTURE.md) - System design and patterns

## 🧪 Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run generate` | Generate static site |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run typecheck` | Run TypeScript type checking |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Jenning Schaefer**

- Website: [jenningschaefer.com](https://jenningschaefer.com/)
- GitHub: [@jenningschaefer](https://github.com/jenningschaefer)
