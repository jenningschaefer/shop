/**
 * @file tests/e2e/account.spec.ts
 * @description E2E tests for account pages
 * @author Jenning Schaefer
 * @license MIT
 */

import { test, expect } from '@playwright/test'

test.describe('Account Pages', () => {
  test('should load account overview', async ({ page }) => {
    await page.goto('/account')
    await expect(page).toHaveURL(/account/)

    // Should show account menu/links
    const accountSection = page.locator('.account, [class*="account"]').first()
    await expect(accountSection).toBeVisible()
  })

  test('should have navigation links', async ({ page }) => {
    await page.goto('/account')

    // Check for common account links
    const orderHistoryLink = page.getByRole('link', { name: /order|bestellung/i }).first()
    const favoritesLink = page
      .getByRole('link', { name: /favorite|favorit|wishlist|wunschliste/i })
      .first()
    const settingsLink = page
      .getByRole('link', { name: /setting|einstellung|profile|profil/i })
      .first()

    // At least one should be visible
    const hasOrderHistory = await orderHistoryLink.isVisible().catch(() => false)
    const hasFavorites = await favoritesLink.isVisible().catch(() => false)
    const hasSettings = await settingsLink.isVisible().catch(() => false)

    expect(hasOrderHistory || hasFavorites || hasSettings).toBe(true)
  })

  test('should load order history page', async ({ page }) => {
    await page.goto('/account/order-history')
    await expect(page).toHaveURL(/account\/order-history/)

    // Should show orders or empty state
    const historySection = page.locator('.account, [class*="order"]').first()
    await expect(historySection).toBeVisible()
  })

  test('should load order detail page', async ({ page }) => {
    await page.goto('/account/order-000001')

    // Should show order details or not found
    const orderSection = page.locator('.account, [class*="order"]').first()
    await expect(orderSection).toBeVisible()
  })

  test('should load favorites page', async ({ page }) => {
    await page.goto('/account/favorites')
    await expect(page).toHaveURL(/account\/favorites/)

    // Should show favorites or empty state
    const favoritesSection = page.locator('.account, [class*="favorite"]').first()
    await expect(favoritesSection).toBeVisible()
  })

  test('should load edit user page', async ({ page }) => {
    await page.goto('/account/edit-user')
    await expect(page).toHaveURL(/account\/edit-user/)

    // Should have form fields
    const form = page.locator('form, .account').first()
    await expect(form).toBeVisible()
  })

  test('should have user form fields', async ({ page }) => {
    await page.goto('/account/edit-user')

    // Check for common form fields
    const emailField = page.locator('input[type="email"], input[name*="email"]').first()
    const nameField = page.locator('input[name*="name"], input[placeholder*="name"]').first()

    const hasEmail = await emailField.isVisible().catch(() => false)
    const hasName = await nameField.isVisible().catch(() => false)

    expect(hasEmail || hasName).toBe(true)
  })

  test('should load edit address page', async ({ page }) => {
    await page.goto('/account/edit-address')
    await expect(page).toHaveURL(/account\/edit-address/)

    // Should have address form
    const form = page.locator('form, .account').first()
    await expect(form).toBeVisible()
  })

  test('should load edit password page', async ({ page }) => {
    await page.goto('/account/edit-password')
    await expect(page).toHaveURL(/account\/edit-password/)

    // Should have password form
    const form = page.locator('form, .account').first()
    await expect(form).toBeVisible()
  })

  test('should have password fields', async ({ page }) => {
    await page.goto('/account/edit-password')

    // Check for password fields
    const passwordFields = page.locator('input[type="password"]')
    expect(await passwordFields.count()).toBeGreaterThan(0)
  })
})
