/**
 * @file eslint.config.mjs
 * @description ESLint flat config for Nuxt 3 project
 * @author Jenning Schaefer
 * @license MIT
 */

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vue specific
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    
    // TypeScript
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    
    // General
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'eqeqeq': ['error', 'always'],
  },
})
