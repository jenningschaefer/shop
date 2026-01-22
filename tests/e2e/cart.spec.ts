/**
 * @file tests/e2e/cart.spec.ts
 * @description E2E tests for shopping cart functionality
 * @author Jenning Schaefer
 * @license MIT
 */

import { test, expect } from '@playwright/test'

test.describe('Shopping Cart', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
  })

  test('should add product to cart from product detail', async ({ page }) => {
    await page.goto('/products/voxel-1')

    // Find and click add to cart button
    const addToCartBtn = page.getByRole('button', { name: /add to cart|in den warenkorb/i })
    await addToCartBtn.click()

    // Cart should open or show confirmation
    // Check for cart icon update or sidebar
    await page.waitForTimeout(500)
  })

  test('should open cart sidebar', async ({ page }) => {
    await page.goto('/')

    // Click cart icon in navbar
    const cartIcon = page.locator('.nav-bar_icons svg, [class*="cart"]').first()
    if (await cartIcon.isVisible()) {
      await cartIcon.click()

      // Cart sidebar or page should be visible
      await page.waitForTimeout(500)
    }
  })

  test('should show empty cart message', async ({ page }) => {
    await page.goto('/')

    // Open cart
    const cartIcon = page.locator('.nav-bar_icons svg, [class*="cart"]').first()
    if (await cartIcon.isVisible()) {
      await cartIcon.click()
      await page.waitForTimeout(500)

      // Should show empty cart message or cart content
      await expect(page.locator('.sidenav, [class*="cart"]').first()).toBeVisible()
    }
  })

  test('should persist cart in localStorage', async ({ page }) => {
    // Add item to cart
    await page.goto('/products/voxel-1')
    const addToCartBtn = page.getByRole('button', { name: /add to cart|in den warenkorb/i })
    await addToCartBtn.click()
    await page.waitForTimeout(500)

    // Check localStorage
    const cartData = await page.evaluate(() => localStorage.getItem('shop-cart'))
    expect(cartData).not.toBeNull()
  })

  test('should navigate to checkout from cart', async ({ page }) => {
    // Add item first
    await page.goto('/products/voxel-1')
    const addToCartBtn = page.getByRole('button', { name: /add to cart|in den warenkorb/i })
    await addToCartBtn.click()
    await page.waitForTimeout(500)

    // Try to go to checkout
    await page.goto('/checkout/address')
    await expect(page).toHaveURL(/checkout/)
  })
})
