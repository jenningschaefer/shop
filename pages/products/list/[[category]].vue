<script setup lang="ts">
import { ref } from 'vue'
import { useProducts } from '~/composables/useProducts'
import { useLocalStorage } from '@vueuse/core'

const route = useRoute()
const products = ref(useProducts())

definePageMeta({
    layout: 'products',
})

interface FavoriteItem {
    id: number
    amount: number
    price: number
}

const favorite = useLocalStorage<FavoriteItem[]>("favorite", [])

const handleFavorite = (id: number) => {
    if (favorite.value.some((obj) => obj.id === id)) {
        favorite.value = favorite.value.filter((el) => el.id !== id)
    } else {
        favorite.value.push({
            id: id,
            amount: 1,
            price: 0,
        })
    }
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
                    @favor="handleFavorite" :favored="favorite.some((obj) => obj.id === product.id)" />
            </div>
        </div>
    </div>
</template>
