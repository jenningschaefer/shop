<!--
  @file pages/products/[name]-[id].vue
  @description Individual product detail page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { Product, CartItem } from '~/types'

const route = useRoute()
const { t } = useI18n()
const cart = useLocalStorage<CartItem[]>('cart', [])

const product = ref<Product | undefined>(undefined)
const openCart = ref(false)

definePageMeta({
  layout: 'products',
})

onMounted(() => {
  const id = Number(route.params.id)
  product.value = useProduct(id)
})

function addToCart(): void {
  if (!product.value) return

  const existingItem = cart.value.find((obj) => obj.id === product.value!.id)

  if (!existingItem) {
    cart.value.push({
      id: product.value.id,
      name: product.value.name,
      img: product.value.img,
      price: parseFloat(product.value.price),
      amount: 1,
    })
  }

  openCart.value = true
}
</script>

<template>
  <div v-if="product" class="product">
    <div class="product_details-mobile">
      <div>{{ t('product.designer') }}: {{ product.designer }}</div>
      <div>{{ product.price }} {{ product.currency }}</div>
    </div>
    <div class="product_description">
      <h1 class="product_description-title">{{ product.name }}</h1>
      <NuxtPicture
        format="avif, webp"
        :src="product.img"
        class="product_description-img"
      />
      <div class="product_description-accordion">
        <UIAccordion>
          <UIAccordionItem>
            <template #accordion-trigger>
              <div class="sort-filter_heading">
                <span class="links">{{ t('product.description') }}</span>
              </div>
            </template>
            <template #accordion-content>
              <p>{{ product.description }}</p>
            </template>
          </UIAccordionItem>
          <UIAccordionItem>
            <template #accordion-trigger>
              <div class="sort-filter_heading">
                <span class="links">{{ t('product.specifications') }}</span>
              </div>
            </template>
            <template #accordion-content>
              <h3>{{ product.spec_title }}</h3>
              <p>{{ product.spec_text }}</p>
            </template>
          </UIAccordionItem>
        </UIAccordion>
      </div>
      <div class="product_description-add">
        <div class="product_description-add-desc">{{ t('product.designer') }}: {{ product.designer }}</div>
        <div class="product_description-add-desc">{{ product.price }} {{ product.currency }}</div>
        <button class="vesta-btn" type="button" @click="addToCart">
          {{ t('product.addToCart') }}
        </button>
      </div>
    </div>
  </div>
  <UISidenav v-model="openCart">
    <template #title>{{ t('nav.cart') }}</template>
    <template #content>
      <OrderCart />
    </template>
  </UISidenav>
</template>
