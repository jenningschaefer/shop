<script setup>
/* const route = useRoute(); */
const { products } = useProducts(); 

definePageMeta({
    layout: 'products',
})

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id) => {
    if (id in favorite.value) {
        delete favorite.value[id];
    } else {
        favorite.value = {
            ...favorite.value,
            [id]: true,
        }
    }
}
</script>

<template>
    <div class="list-content">
        <div class="list-content_settings">
            <div class="list-content_settings_item">
                <svg class="list-content_settings_icon">
                    <use href="~/assets/svg/icons.svg#sort"/>
                </svg>
                <span>Sort</span>
            </div>
            <div class="list-content_settings_item">
                <svg class="list-content_settings_icon">
                    <use href="~/assets/svg/icons.svg#filter"/>
                </svg>
                <span>Filter</span>
            </div>
        </div>
        <div class="list-content_grid">
            <ClientOnly>
                <ProductCard v-for="product in products" :key="product.id" :product="product" @favor="handleFavorite" :favored="product.id in favorite"/>
            </ClientOnly>
        </div>
    </div>
</template>