<script setup lang="ts">
import { ref } from 'vue'
import { useProducts } from '~/composables/useProducts'
import { useFavoritesStore } from '~/stores'

const products = ref(useProducts())
const favoritesStore = useFavoritesStore()

definePageMeta({
    layout: 'products',
})

function handleFavorite(id: number) {
    favoritesStore.toggle(id)
}
</script>

<template>
    <div class="list-content">
        <div class="list-content_settings">
            <div class="list-content_settings_item">
                <svg class="list-content_settings_icon">
                    <use href="~/assets/svg/icons.svg#sort" />
                </svg>
                <span>Sort</span>
            </div>
            <div class="list-content_settings_item">
                <svg class="list-content_settings_icon">
                    <use href="~/assets/svg/icons.svg#filter" />
                </svg>
                <span>Filter</span>
            </div>
        </div>
        <div class="list-content_container">
            <div class="list-content_sort-filter">
                <ProductSortFilter />
            </div>
            <div class="list-content_grid">
                <ProductCard v-for="product in products" :key="product.id" :product="product"
                    @favor="handleFavorite" :favored="favoritesStore.isFavorite(product.id)" />
            </div>
        </div>
    </div>
</template>
