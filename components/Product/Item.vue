<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    item: Object,
    ordered: Boolean,
});

const product = useProduct(props.item.id);
const amount = ref(0);

onMounted(() => {
    if(props.ordered) amount.value = props.item.amount;
});
</script>

<template>
    <div class="product-item">
        <div class="product-item_img">
            <NuxtPicture format="avif, webp" :src="product.img" class="product-item_img_image" />
            <UICounter v-model="amount" class="product-item_img_counter"></UICounter>
        </div>
        <div class="product-item_info">
            <div class="product-item_info_name">{{ product.name }}</div>
            <div class="product-item_info_price">{{ ordered ? item.price : product.price_us }} $</div>
        </div>
    </div>
</template>