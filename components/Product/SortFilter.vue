<!--
  @file components/Product/SortFilter.vue
  @description Product sort and filter controls
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsRaw } from '~/composables/useProducts'

type SortKey = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const rawProducts = useProductsRaw()

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
  return Array.from(set).sort()
})

// Default sort: Name A–Z
const appliedSort = useState<SortKey>('productListSort', () => 'name-asc')
const pendingSort = ref<SortKey>(appliedSort.value)

const appliedType = computed<string | null>(() => {
  const param = route.params.category
  const slug = typeof param === 'string' ? param : null
  if (!slug) return null
  if (!isSafeTypeSlug(slug)) return null
  return availableTypes.value.includes(slug) ? slug : null
})

const pendingType = ref<string | null>(appliedType.value)

watch(
  () => appliedType.value,
  (v) => {
    pendingType.value = v
  },
  { immediate: true }
)

watch(
  () => appliedSort.value,
  (v) => {
    pendingSort.value = v
  },
  { immediate: true }
)

watch(
  () => route.params.category,
  (param) => {
    // Unknown/unsafe category in URL -> fallback to /products/list (All)
    if (typeof param === 'string' && !appliedType.value) {
      router.replace('/products/list')
    }
  },
  { immediate: true }
)

function typeLabel(type: string): string {
  const key = `categories.${type}`
  const translated = t(key)
  return translated === key ? type : translated
}

const sortOptions: Array<{ key: SortKey; label: string }> = [
  { key: 'price-asc', label: t('productList.sortPriceAsc') },
  { key: 'price-desc', label: t('productList.sortPriceDesc') },
  { key: 'name-asc', label: t('productList.sortNameAsc') },
  { key: 'name-desc', label: t('productList.sortNameDesc') },
]

function apply(): void {
  appliedSort.value = pendingSort.value

  const type = pendingType.value
  const safeType = type && isSafeTypeSlug(type) && availableTypes.value.includes(type) ? type : null
  if (safeType) {
    router.push(`/products/list/${encodeURIComponent(safeType)}`)
  } else {
    router.push('/products/list')
  }
}
</script>

<template>
  <div class="sort-filter">
    <UIAccordion>
      <UIAccordionItem default-open>
        <template #accordion-trigger>
          <div class="sort-filter_heading">
            <span class="links">{{ t('productList.sort') }}</span>
          </div>
        </template>
        <template #accordion-content>
          <ul
            class="sort-filter_list subtitle-small"
            role="radiogroup"
            :aria-label="t('productList.sort')"
          >
            <li v-for="opt in sortOptions" :key="opt.key">
              <button
                type="button"
                class="sort-filter_option"
                :class="{ 'sort-filter_option--selected': pendingSort === opt.key }"
                @click="pendingSort = opt.key"
              >
                <span class="sort-filter_option_label">{{ opt.label }}</span>
                <span
                  v-if="pendingSort === opt.key"
                  class="sort-filter_option_check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </button>
            </li>
          </ul>
        </template>
      </UIAccordionItem>
    </UIAccordion>

    <UIAccordion>
      <UIAccordionItem default-open>
        <template #accordion-trigger>
          <div class="sort-filter_heading">
            <span class="links">{{ t('productList.filter') }}</span>
          </div>
        </template>
        <template #accordion-content>
          <ul
            class="sort-filter_list subtitle-small"
            role="radiogroup"
            :aria-label="t('productList.filter')"
          >
            <li>
              <button
                type="button"
                class="sort-filter_option"
                :class="{ 'sort-filter_option--selected': pendingType === null }"
                @click="pendingType = null"
              >
                <span class="sort-filter_option_label">{{ t('categories.all') }}</span>
                <span
                  v-if="pendingType === null"
                  class="sort-filter_option_check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </button>
            </li>
            <li v-for="type in availableTypes" :key="type">
              <button
                type="button"
                class="sort-filter_option"
                :class="{ 'sort-filter_option--selected': pendingType === type }"
                @click="pendingType = type"
              >
                <span class="sort-filter_option_label">{{ typeLabel(type) }}</span>
                <span
                  v-if="pendingType === type"
                  class="sort-filter_option_check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </button>
            </li>
          </ul>
        </template>
      </UIAccordionItem>
    </UIAccordion>

    <button class="vesta-btn sort-filter_btn" type="button" @click="apply">
      {{ t('common.apply') }}
    </button>
  </div>
</template>
