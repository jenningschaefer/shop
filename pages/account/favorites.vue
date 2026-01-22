<script setup lang="ts">
const { t } = useI18n()
const favorite = useLocalStorage("favorite", [])
const cart = useLocalStorage("cart", [])

definePageMeta({
    layout: 'account',
})

const addToCart = (id: number) => {
    if (!(cart.value.some((obj: { id: number }) => obj.id === id))) {
        cart.value.push({
            "id": id,
            "amount": 1,
        })
    }
}

const deleteFromFavs = (id: number) => {
    favorite.value = favorite.value.filter((el: { id: number }) => el.id !== id)
}
</script>

<template>
    <div class="account-favorites">
        <div class="account-user_link">
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#heart" />
                    </svg>
                    <div class="account-link_name">{{ t('account.favorites') }}</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-favorites_products">
            <p v-if="favorite.length === 0" class="order-cart_empty">
                {{ t('favorites.empty') }}
            </p>
            <ClientOnly>
                <ProductItem v-for="item in favorite" :key="item.id" :item="item" :is-favorite="true"
                    class="account-favorites_products_product">
                    <template #buttons>
                        <button type="button" class="vesta-btn" @click="addToCart(item.id)">
                            {{ t('product.addToCart') }}
                        </button>
                        <button type="button" class="vesta-btn" @click="deleteFromFavs(item.id)">
                            {{ t('product.removeFromFavorites') }}
                        </button>
                    </template>
                </ProductItem>
            </ClientOnly>
        </div>
    </div>
</template>
