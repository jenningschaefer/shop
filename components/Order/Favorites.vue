<!--
  @file components/Order/Favorites.vue
  @description Favorites/wishlist sidebar component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { CartItem } from '~/types'

const { t } = useI18n()
const favorites = useLocalStorage<CartItem[]>('favorite', [])
const cart = useLocalStorage<CartItem[]>('cart', [])

function deleteFromFavorites(id: number): void {
  favorites.value = favorites.value.filter((el) => el.id !== id)
}

function addToCart(id: number): void {
  const item = favorites.value.find((el) => el.id === id)
  if (!item) return

  const existingCartItem = cart.value.find((obj) => obj.id === id)
  if (!existingCartItem) {
    cart.value.push({
      id: item.id,
      name: item.name,
      img: item.img,
      price: item.price,
      amount: 1,
    })
  }
}
</script>

<template>
  <div class="order-cart">
    <div class="order-cart_products">
      <p v-if="favorites.length === 0" class="order-cart_empty">
        {{ t('favorites.empty') }}
      </p>
      <ClientOnly>
        <ProductItem
          v-for="item in favorites"
          :key="item.id"
          :item="item"
          :is-in-cart="true"
          class="order-cart_products_product"
        >
          <template #buttons>
            <button type="button" class="vesta-btn" @click="addToCart(item.id)">
              {{ t('product.addToCart') }}
            </button>
            <button type="button" class="vesta-btn" @click="deleteFromFavorites(item.id)">
              {{ t('product.removeFromFavorites') }}
            </button>
          </template>
        </ProductItem>
      </ClientOnly>
    </div>
  </div>
</template>
