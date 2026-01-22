/**
 * @file tests/e2e/homepage.spec.ts
 * @description E2E tests for homepage
 * @author Jenning Schaefer
 * @license MIT
 */

import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Shop/)
  })

  test('should display product categories', async ({ page }) => {
    await page.goto('/')

    // Check that category links are visible
    await expect(page.getByRole('link', { name: /chairs|stühle/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /tables|tische/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /lighting|beleuchtung/i })).toBeVisible()
  })

  test('should navigate to products page', async ({ page }) => {
    await page.goto('/')

    // Click on first category link
    const categoryLink = page.getByRole('link', { name: /chairs|stühle/i }).first()
    await categoryLink.click()

    // Should be on products page
    await expect(page).toHaveURL(/products/)
  })

  test('should switch language', async ({ page }) => {
    await page.goto('/')

    // Find and click language switcher
    const langSwitcher = page.locator('.nav-bar_icons_lang, [class*="lang"]').first()
    if (await langSwitcher.isVisible()) {
      await langSwitcher.click()
      // Page should update with new language
      await page.waitForTimeout(500)
    }
  })
})
