/**
 * @file vitest.config.ts - Vitest configuration for unit and component tests
 * @author Jenning Schaefer
 * @license MIT
 */

import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom',
      },
    },
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    exclude: ['tests/e2e/**/*', 'node_modules/**/*'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['composables/**/*.ts', 'services/**/*.ts', 'stores/**/*.ts'],
      exclude: ['node_modules/**', 'tests/**', '.nuxt/**'],
    },
    globals: true,
  },
})
