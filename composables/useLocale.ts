/**
 * @file composables/useLocale.ts
 * @description Composable for locale-aware product and price formatting
 * @author Jenning Schaefer
 * @license MIT
 */

import { computed } from 'vue'
import type { ProductRaw, Product, Locale } from '~/types'

/**
 * Localize a single product based on locale
 */
export function localizeProduct(product: ProductRaw, locale: Locale): Product {
  const isEnglish = locale === 'en'
  
  return {
    id: product.id,
    type: product.type,
    name: isEnglish ? product.name_en : product.name_de,
    name_url: product.name_url,
    designer: product.designer,
    price: isEnglish ? product.price_usd : product.price_eur,
    currency: isEnglish ? '$' : '€',
    img: product.img,
    webp: product.webp,
    features: isEnglish ? product.features_en : product.features_de,
    description: isEnglish ? product.description_en : product.description_de,
    spec_title: isEnglish ? product.spec_title_en : product.spec_title_de,
    spec_text: isEnglish ? product.spec_text_en : product.spec_text_de,
  }
}

/**
 * Localize an array of products
 */
export function localizeProducts(products: ProductRaw[], locale: Locale): Product[] {
  return products.map((p) => localizeProduct(p, locale))
}

/**
 * Format price with currency symbol
 */
export function formatPrice(price: string | number, locale: Locale): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  
  if (locale === 'en') {
    return `$${numPrice.toFixed(2)}`
  }
  return `${numPrice.toFixed(2)} €`
}

/**
 * Composable for localized products - call in component setup
 */
export function useLocalizedProducts(rawProducts: ProductRaw[]) {
  const { locale } = useI18n()
  
  const products = computed(() => 
    localizeProducts(rawProducts, locale.value as Locale)
  )
  
  return {
    products,
    locale,
  }
}

/**
 * Composable for a single localized product - call in component setup
 */
export function useLocalizedProduct(rawProduct: ProductRaw) {
  const { locale } = useI18n()
  
  const product = computed(() => 
    localizeProduct(rawProduct, locale.value as Locale)
  )
  
  return {
    product,
    locale,
  }
}
