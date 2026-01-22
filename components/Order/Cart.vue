<!--
  @file components/Order/Cart.vue
  @description Shopping cart sidebar component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { CartItem } from '~/types'

const cart = useLocalStorage<CartItem[]>('cart', [])

function deleteFromCart(id: number): void {
  cart.value = cart.value.filter((el) => el.id !== id)
}

const total = computed(() => {
  return cart.value
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2)
})
</script>

<template>
  <div class="order-cart">
    <div class="order-cart_products">
      <p v-if="cart.length === 0" class="order-cart_empty">
        Your cart is empty
      </p>
      <ClientOnly>
        <ProductItem
          v-for="item in cart"
          :key="item.id"
          :item="item"
          :is-in-cart="true"
          class="order-cart_products_product"
        >
          <template #buttons>
            <button
              type="button"
              class="vesta-btn"
              @click="deleteFromCart(item.id)"
            >
              Remove from Cart
            </button>
          </template>
        </ProductItem>
      </ClientOnly>
    </div>
    <div class="order-cart_checkout">
      <div class="order-cart_checkout_total">
        <span>Total</span>
        <span>{{ total }} $</span>
      </div>
      <NuxtLink to="/checkout/address">
        <button type="button" class="order-cart_checkout_button vesta-btn">
          Buy
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
