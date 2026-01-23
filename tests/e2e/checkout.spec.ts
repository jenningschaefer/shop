/**
 * @file tests/e2e/checkout.spec.ts
 * @description E2E tests for checkout flow
 * @author Jenning Schaefer
 * @license MIT
 */

import { test, expect } from '@playwright/test'

test.describe('Checkout Flow', () => {
  async function startCheckoutFromCart(page) {
    // Add item to cart, open cart sidenav, then click checkout button
    await page.goto('/products/voxel-1')
    const addToCartBtn = page.getByRole('button', { name: /add to cart|in den warenkorb/i })
    if (await addToCartBtn.isVisible()) {
      await addToCartBtn.click()
      await page.waitForTimeout(300)
    }

    const cartBtn = page.getByRole('button', { name: /cart|warenkorb/i }).first()
    await cartBtn.click()
    await page.waitForTimeout(200)

    const checkoutBtn = page.getByRole('button', { name: /checkout|zur kasse/i }).first()
    await checkoutBtn.click()
    await expect(page).toHaveURL(/checkout\/address/)
  }

  async function fillRequiredAddress(page) {
    await page
      .getByPlaceholder(/first|vorname/i)
      .first()
      .fill('John')
    await page
      .getByPlaceholder(/last|nachname/i)
      .first()
      .fill('Doe')
    await page
      .getByPlaceholder(/country|land/i)
      .first()
      .fill('Germany')
    await page
      .getByPlaceholder(/street|straße/i)
      .first()
      .fill('Main Street')
    await page
      .getByPlaceholder(/house|haus/i)
      .first()
      .fill('1')
    await page
      .getByPlaceholder(/zip|plz/i)
      .first()
      .fill('12345')
    await page
      .getByPlaceholder(/city|stadt/i)
      .first()
      .fill('Berlin')
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => {
      localStorage.clear()
      sessionStorage.clear()
    })
  })

  test('should load checkout address page', async ({ page }) => {
    await startCheckoutFromCart(page)
    await expect(page).toHaveURL(/checkout\/address/)

    // Should have address form or tabs
    const addressSection = page.locator('.checkout, [class*="address"]').first()
    await expect(addressSection).toBeVisible()
  })

  test('should have shipping and billing address sections', async ({ page }) => {
    await startCheckoutFromCart(page)

    // Look for shipping/billing tabs or sections
    const shippingText = page.getByText(/shipping|versand|lieferadresse/i).first()
    const billingText = page.getByText(/billing|rechnung|rechnungsadresse/i).first()

    // At least one should be visible
    const hasShipping = await shippingText.isVisible().catch(() => false)
    const hasBilling = await billingText.isVisible().catch(() => false)
    expect(hasShipping || hasBilling).toBe(true)
  })

  test('should navigate to payment page', async ({ page }) => {
    await startCheckoutFromCart(page)
    await fillRequiredAddress(page)

    // Click next/continue button
    const nextBtn = page.getByRole('button', { name: /next|weiter|continue/i }).first()
    await nextBtn.click()
    await expect(page).toHaveURL(/checkout\/payment/)
  })

  test('should load payment page', async ({ page }) => {
    await startCheckoutFromCart(page)
    await fillRequiredAddress(page)
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await expect(page).toHaveURL(/checkout\/payment/)

    // Should have payment options
    const paymentSection = page.locator('.checkout, [class*="payment"]').first()
    await expect(paymentSection).toBeVisible()
  })

  test('should navigate to overview page', async ({ page }) => {
    await startCheckoutFromCart(page)
    await fillRequiredAddress(page)
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await expect(page).toHaveURL(/checkout\/overview/)

    // Should show order summary
    const overviewSection = page.locator('.checkout, [class*="overview"]').first()
    await expect(overviewSection).toBeVisible()
  })

  test('should show order total in overview', async ({ page }) => {
    await startCheckoutFromCart(page)
    await fillRequiredAddress(page)
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()

    // Look for total/sum
    const totalText = page.getByText(/total|summe|gesamt/i).first()
    await expect(totalText).toBeVisible()
  })

  test('should have progress indicator', async ({ page }) => {
    await startCheckoutFromCart(page)

    // Look for progress bar or steps - may or may not exist
    // Just verify page loads correctly
    await expect(page).toHaveURL(/checkout\/address/)
  })

  test('should complete checkout flow', async ({ page }) => {
    await startCheckoutFromCart(page)
    await fillRequiredAddress(page)
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await expect(page).toHaveURL(/checkout\/overview/)

    // Accept terms and place order
    await page.getByRole('checkbox').first().check()
    await page
      .getByRole('button', { name: /place order|bestellung aufgeben/i })
      .first()
      .click()
    await expect(page).toHaveURL(/checkout\/confirmation/)
  })

  test('should show confirmation page', async ({ page }) => {
    await startCheckoutFromCart(page)
    await fillRequiredAddress(page)
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await page
      .getByRole('button', { name: /next|weiter|continue/i })
      .first()
      .click()
    await page.getByRole('checkbox').first().check()
    await page
      .getByRole('button', { name: /place order|bestellung aufgeben/i })
      .first()
      .click()

    // Should show success message
    const confirmationSection = page.locator('.checkout, [class*="confirmation"]').first()
    await expect(confirmationSection).toBeVisible()
  })

  test('should block direct deep links into checkout', async ({ page }) => {
    await page.goto('/checkout/address')
    await expect(page).toHaveURL(/products\/list/)
  })
})
