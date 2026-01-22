<!--
  @file components/Product/Item.vue
  @description Product item component for cart and order displays
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { CartItem } from '~/types'

interface Props {
  item: CartItem
  ordered?: boolean
  isFavorite?: boolean
  isInCart?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  ordered: false,
  isFavorite: false,
  isInCart: false,
})

const product = useProduct(props.item.id)
// Only used for interactive contexts (cart/favorites). Past orders should be read-only.
const amount = ref(props.item.amount)
</script>

<template>
  <div>
    <div class="product-item">
      <div class="product-item_img">
        <NuxtPicture
          v-if="product"
          format="avif, webp"
          :src="product.img"
          class="product-item_img_image"
        />
        <div v-if="ordered" class="product-item_img_qty">×{{ item.amount }}</div>
        <UICounter v-else v-model="amount" class="product-item_img_counter" />
      </div>
      <div class="product-item_info">
        <div class="product-item_info_name">{{ product?.name }}</div>
        <div class="product-item_info_price">{{ ordered ? item.price : product?.price_us }} $</div>
      </div>
    </div>
    <div class="product-item_buttons">
      <slot name="buttons" />
    </div>
  </div>
</template>
