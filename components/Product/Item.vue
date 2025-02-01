<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    item: Object,
    ordered: {
        type: Boolean,
        default: false,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    isInCart: {
        type: Boolean,
        default: false,
    },
});


const favorite = useLocalStorage("favorite", []);
const cart = useLocalStorage("cart", []);

const product = useProduct(props.item.id);
const amount = ref(0);

onMounted(() => {
    amount.value = props.item.amount;
});

</script>

<template>
    <div>
        <div class="product-item">
            <div class="product-item_img">
                <NuxtPicture format="avif, webp" :src="product.img" class="product-item_img_image" />
                <UICounter v-model="amount" class="product-item_img_counter"/>
            </div>
            <div class="product-item_info">
                <div class="product-item_info_name">{{ product.name }}</div>
                <div class="product-item_info_price">{{ ordered ? item.price : product.price_us }} $</div>
            </div>
        </div>
        <div class="product-item_buttons">
            <slot name="buttons"></slot>    
        </div>
    </div>
</template>