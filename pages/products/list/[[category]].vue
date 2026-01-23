<!--
  @file pages/products/list/[[category]].vue
  @description Product list page with optional category filter
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { useProductsRaw } from '~/composables/useProducts'
import { localizeProducts } from '~/composables/useLocale'
import { useLocalStorage } from '@vueuse/core'
import type { Locale } from '~/types'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const rawProducts = useProductsRaw()
const products = computed(() => localizeProducts(rawProducts, locale.value as Locale))

definePageMeta({
  layout: 'products',
})

type SortKey = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'
const appliedSort = useState<SortKey>('productListSort', () => 'name-asc')

const openSortFilter = ref(false)

function extractTypes(value: unknown): string[] {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.filter((v): v is string => typeof v === 'string')
  return []
}

function isSafeTypeSlug(value: string): boolean {
  return /^[a-z0-9-]+$/.test(value)
}

const availableTypes = computed(() => {
  const set = new Set<string>()
  for (const p of rawProducts as unknown as Array<{ type?: unknown }>) {
    for (const type of extractTypes(p.type)) {
      if (isSafeTypeSlug(type)) set.add(type)
    }
  }
  return Array.from(set)
})

const appliedType = computed<string | null>(() => {
  const param = route.params.category
  const slug = typeof param === 'string' ? param : null
  if (!slug) return null
  if (!isSafeTypeSlug(slug)) return null
  return availableTypes.value.includes(slug) ? slug : null
})

watch(
  () => route.params.category,
  (param) => {
    if (typeof param === 'string' && !appliedType.value) {
      router.replace('/products/list')
    }
  },
  { immediate: true }
)

const visibleProducts = computed(() => {
  const type = appliedType.value
  const base = products.value
  const filtered =
    type === null
      ? base
      : base.filter((p) => {
          const types = extractTypes((p as unknown as { type?: unknown }).type)
          return types.includes(type)
        })

  switch (appliedSort.value) {
    case 'price-asc':
      return [...filtered].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    case 'price-desc':
      return [...filtered].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    case 'name-asc':
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return [...filtered].sort((a, b) => b.name.localeCompare(a.name))
    default:
      return filtered
  }
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
      <button type="button" class="list-content_settings_item" @click="openSortFilter = true">
        <svg class="list-content_settings_icon">
          <use href="~/assets/svg/icons.svg#sort" />
        </svg>
        <span>{{ $t('productList.sort') }}</span>
      </button>
      <button type="button" class="list-content_settings_item" @click="openSortFilter = true">
        <svg class="list-content_settings_icon">
          <use href="~/assets/svg/icons.svg#filter" />
        </svg>
        <span>{{ $t('productList.filter') }}</span>
      </button>
    </div>
    <div class="list-content_container">
      <div class="list-content_sort-filter">
        <ProductSortFilter />
      </div>
      <div class="list-content_grid">
        <ProductCard
          v-for="product in visibleProducts"
          :key="product.id"
          :product="product"
          :favored="isFavorite(product.id)"
          @favor="handleFavorite"
        />
      </div>
    </div>
  </div>

  <!-- Mobile: open sort/filter in the same sidenav UX as cart/favorites -->
  <UISidenav v-model="openSortFilter">
    <template #title>{{ $t('productList.sort') }} / {{ $t('productList.filter') }}</template>
    <template #content>
      <ProductSortFilter />
    </template>
  </UISidenav>
</template>
