<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProductsRaw } from '~/composables/useProducts'
import { localizeProducts } from '~/composables/useLocale'
import { useLocalStorage } from '@vueuse/core'
import type { Locale } from '~/types'

const { locale } = useI18n()
const rawProducts = useProductsRaw()
const products = computed(() => localizeProducts(rawProducts, locale.value as Locale))

definePageMeta({
  layout: 'products',
})

interface FavoriteItem {
  id: number
}

const favorites = useLocalStorage<FavoriteItem[]>('favorite', [])

function handleFavorite(id: number) {
  const index = favorites.value.findIndex((f) => f.id === id)
  if (index !== -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push({ id })
  }
}

function isFavorite(id: number): boolean {
  return favorites.value.some((f) => f.id === id)
}
</script>

<template>
  <div class="list-content">
    <div class="list-content_settings">
      <div class="list-content_settings_item">
        <svg class="list-content_settings_icon">
          <use href="~/assets/svg/icons.svg#sort" />
        </svg>
        <span>{{ $t('productList.sort') }}</span>
      </div>
      <div class="list-content_settings_item">
        <svg class="list-content_settings_icon">
          <use href="~/assets/svg/icons.svg#filter" />
        </svg>
        <span>{{ $t('productList.filter') }}</span>
      </div>
    </div>
    <div class="list-content_container">
      <div class="list-content_sort-filter">
        <ProductSortFilter />
      </div>
      <div class="list-content_grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          :favored="isFavorite(product.id)"
          @favor="handleFavorite"
        />
      </div>
    </div>
  </div>
</template>
