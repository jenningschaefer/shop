/**
 * @file composables/useUtilities.ts
 * @description Utility functions and composables
 * @author Jenning Schaefer
 * @license MIT
 */

/**
 * Utility functions composable
 */
export function useUtilities() {
  /**
   * Format a date string from YYYYMMDD to DD.MM.YYYY
   * @param date - Date string in YYYYMMDD format
   * @returns Formatted date string
   */
  function formatDate(date: string): string {
    if (date.length !== 8) {
      return date
    }
    return `${date.substring(6, 8)}.${date.substring(4, 6)}.${date.substring(0, 4)}`
  }

  /**
   * Format a price with currency symbol
   * @param price - Price as string or number
   * @param currency - Currency code (EUR or USD)
   * @returns Formatted price string
   */
  function formatPrice(price: string | number, currency: 'EUR' | 'USD' = 'USD'): string {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price
    const locale = currency === 'EUR' ? 'de-DE' : 'en-US'
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(numPrice)
  }

  /**
   * Generate a URL-safe slug from a string
   * @param text - Input text
   * @returns URL-safe slug
   */
  function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }

  /**
   * Truncate text to a maximum length
   * @param text - Input text
   * @param maxLength - Maximum length
   * @param suffix - Suffix to add if truncated
   * @returns Truncated text
   */
  function truncate(text: string, maxLength: number, suffix: string = '...'): string {
    if (text.length <= maxLength) {
      return text
    }
    return text.substring(0, maxLength - suffix.length) + suffix
  }

  return {
    formatDate,
    formatPrice,
    slugify,
    truncate,
  }
}
