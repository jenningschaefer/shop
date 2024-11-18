<script setup>
const props = defineProps({
    product: Object,
    favored: Boolean,
})

const emit = defineEmits(['favor'])
</script>

<template>
    <div class="product-card" @click="navigateTo(`/products/${product.name_url}-${product.id}`)">
        <div class="product-card_img">
            <svg class="product-card_img_icon" :class="favored ? 'active' : '' " @click.stop="emit('favor', product.id)">
                <use href="~/assets/svg/icons.svg#heart" />
            </svg>
            <NuxtPicture format="avif, webp" :src="product.img" class="product-card_img_image" />
        </div>
        <div class="product-card_name">{{ product.name }}</div>
        <div class="product-card_price">{{ product.price_us }} $</div>
    </div>
</template>