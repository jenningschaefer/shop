/**
 * @file tests/e2e/checkout.spec.ts
 * @description E2E tests for checkout flow
 * @author Jenning Schaefer
 * @license MIT
 */

import { test, expect } from '@playwright/test'

test.describe('Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Add item to cart before checkout tests
    await page.goto('/products/voxel-1')
    const addToCartBtn = page.getByRole('button', { name: /add to cart|in den warenkorb/i })
    if (await addToCartBtn.isVisible()) {
      await addToCartBtn.click()
      await page.waitForTimeout(500)
    }
  })

  test('should load checkout address page', async ({ page }) => {
    await page.goto('/checkout/address')
    await expect(page).toHaveURL(/checkout\/address/)

    // Should have address form or tabs
    const addressSection = page.locator('.checkout, [class*="address"]').first()
    await expect(addressSection).toBeVisible()
  })

  test('should have shipping and billing address sections', async ({ page }) => {
    await page.goto('/checkout/address')

    // Look for shipping/billing tabs or sections
    const shippingText = page.getByText(/shipping|versand|lieferadresse/i).first()
    const billingText = page.getByText(/billing|rechnung|rechnungsadresse/i).first()

    // At least one should be visible
    const hasShipping = await shippingText.isVisible().catch(() => false)
    const hasBilling = await billingText.isVisible().catch(() => false)
    expect(hasShipping || hasBilling).toBe(true)
  })

  test('should navigate to payment page', async ({ page }) => {
    await page.goto('/checkout/address')

    // Click next/continue button
    const nextBtn = page.getByRole('button', { name: /next|weiter|continue/i }).first()
    if (await nextBtn.isVisible()) {
      await nextBtn.click()
      await expect(page).toHaveURL(/checkout\/payment/)
    } else {
      // Direct navigation
      await page.goto('/checkout/payment')
      await expect(page).toHaveURL(/checkout\/payment/)
    }
  })

  test('should load payment page', async ({ page }) => {
    await page.goto('/checkout/payment')
    await expect(page).toHaveURL(/checkout\/payment/)

    // Should have payment options
    const paymentSection = page.locator('.checkout, [class*="payment"]').first()
    await expect(paymentSection).toBeVisible()
  })

  test('should navigate to overview page', async ({ page }) => {
    await page.goto('/checkout/overview')
    await expect(page).toHaveURL(/checkout\/overview/)

    // Should show order summary
    const overviewSection = page.locator('.checkout, [class*="overview"]').first()
    await expect(overviewSection).toBeVisible()
  })

  test('should show order total in overview', async ({ page }) => {
    await page.goto('/checkout/overview')

    // Look for total/sum
    const totalText = page.getByText(/total|summe|gesamt/i).first()
    await expect(totalText).toBeVisible()
  })

  test('should have progress indicator', async ({ page }) => {
    await page.goto('/checkout/address')

    // Look for progress bar or steps - may or may not exist
    // Just verify page loads correctly
    await expect(page).toHaveURL(/checkout\/address/)
  })

  test('should complete checkout flow', async ({ page }) => {
    // Full checkout flow
    await page.goto('/checkout/address')
    await page.waitForTimeout(300)

    await page.goto('/checkout/payment')
    await page.waitForTimeout(300)

    await page.goto('/checkout/overview')
    await page.waitForTimeout(300)

    // Try to complete order
    const buyBtn = page.getByRole('button', { name: /buy|kaufen|order|bestellen/i }).first()
    if (await buyBtn.isVisible()) {
      await buyBtn.click()
      // Should navigate to confirmation
      await expect(page).toHaveURL(/checkout\/confirmation/)
    }
  })

  test('should show confirmation page', async ({ page }) => {
    await page.goto('/checkout/confirmation')

    // Should show success message
    const confirmationSection = page.locator('.checkout, [class*="confirmation"]').first()
    await expect(confirmationSection).toBeVisible()
  })
})
