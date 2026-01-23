<!--
  @file components/Product/Card.vue
  @description Product card component for product listings
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { Product } from '~/types'

interface Props {
  product: Product
  favored?: boolean
}

interface Emits {
  (e: 'favor', productId: number): void
}

const props = withDefaults(defineProps<Props>(), {
  favored: false,
})

const emit = defineEmits<Emits>()

function handleFavorite(): void {
  emit('favor', props.product.id)
}
</script>

<template>
  <div class="product-card" @click="navigateTo(`/products/${product.name_url}-${product.id}`)">
    <div class="product-card_img">
      <svg
        class="product-card_img_icon"
        :class="favored ? 'active' : ''"
        @click.stop="handleFavorite"
      >
        <use href="~/assets/svg/icons.svg#heart" />
      </svg>
      <NuxtPicture :src="product.img" class="product-card_img_image" />
    </div>
    <div class="product-card_name">{{ product.name }}</div>
    <div class="product-card_price">{{ product.price }} {{ product.currency }}</div>
  </div>
</template>
