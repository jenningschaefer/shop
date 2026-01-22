/**
 * @file tests/e2e/products.spec.ts
 * @description E2E tests for product pages
 * @author Jenning Schaefer
 * @license MIT
 */

import { test, expect } from '@playwright/test'

test.describe('Product List', () => {
  test('should display products on list page', async ({ page }) => {
    await page.goto('/products/list')

    // Wait for products to load
    await page.waitForSelector('.product-card', { timeout: 10000 })

    // Check that product cards are displayed
    const productCards = page.locator('.product-card')
    await expect(productCards.first()).toBeVisible()
    expect(await productCards.count()).toBeGreaterThan(0)
  })

  test('should filter products by category', async ({ page }) => {
    await page.goto('/products/list/chairs')

    // Wait for products to load
    await page.waitForSelector('.product-card', { timeout: 10000 })

    // Should have products
    const productCards = page.locator('.product-card')
    expect(await productCards.count()).toBeGreaterThan(0)
  })

  test('should navigate to product detail page', async ({ page }) => {
    await page.goto('/products/list')

    // Wait for and click first product
    await page.waitForSelector('.product-card', { timeout: 10000 })
    const firstProduct = page.locator('.product-card').first()
    await firstProduct.click()

    // Should be on product detail page
    await expect(page).toHaveURL(/products\/.*-\d+/)
  })
})

test.describe('Product Detail', () => {
  test('should display product information', async ({ page }) => {
    // Go to a specific product
    await page.goto('/products/voxel-1')

    // Check that product details are visible
    await expect(page.locator('.product_name, h1, h2').first()).toBeVisible()
  })

  test('should have add to cart button', async ({ page }) => {
    await page.goto('/products/voxel-1')

    // Look for add to cart button
    const addToCartBtn = page.getByRole('button', { name: /add to cart|in den warenkorb/i })
    await expect(addToCartBtn).toBeVisible()
  })

  test('should add product to favorites', async ({ page }) => {
    await page.goto('/products/list')

    // Wait for products
    await page.waitForSelector('.product-card', { timeout: 10000 })

    // Find and click heart icon on first product
    const heartIcon = page.locator('.product-card_img_icon').first()
    if (await heartIcon.isVisible()) {
      await heartIcon.click()
      // Icon should become active
      await expect(heartIcon).toHaveClass(/active/)
    }
  })
})
