<script setup>
const route = useRoute();
const cart = useLocalStorage("cart", []);

const product = ref();
const openCart = ref();

definePageMeta({
    layout: 'products',
});

onMounted(async () => {
    product.value = await useProduct(route.params.id);
});

const addToCart = () => {
    if (!(cart.value.some((obj) => obj.id === product.value.id))) {
        cart.value.push({
            "id": product.value.id,
            "amount": 1,
            "price": product.value.price_us,
        });
    }
    openCart.value = true
};
</script>

<template>
    <div class="product" v-if="product != null">
        <div class="product_details-mobile">
            <div>by {{ product.designer }}</div>
            <div>{{ product.price_us }}$</div>
        </div>
        <div class="product_description">
            <h1 class="product_description-title">{{ product.name }}</h1>
            <NuxtPicture format="avif, webp" :src="product.img" class="product_description-img" />
            <div class="product_description-accordion">
                <UIAccordion>
                    <UIAccordion-item>
                        <template #accordion-trigger>
                            <div class="sort-filter_heading">
                                <span class="links">Description</span>
                            </div>
                        </template>
                        <template #accordion-content>
                            <p>{{ product.description }}</p>
                        </template>
                    </UIAccordion-item>
                    <UIAccordion-item>
                        <template #accordion-trigger>
                            <div class="sort-filter_heading">
                                <span class="links">Specification</span>
                            </div>
                        </template>
                        <template #accordion-content>
                            <h3>{{ product.spec_title }}</h3>
                            <p>{{ product.spec_text }}</p>
                        </template>
                    </UIAccordion-item>
                </UIAccordion>
            </div>
            <div class="product_description-add">
                <div class="product_description-add-desc">by {{ product.designer }}</div>
                <div class="product_description-add-desc">{{ product.price_us }}$</div>
                <button class="vesta-btn" type="button" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
    <UISidenav v-model="openCart">
        <template #title>Cart</template>
        <template #content>
            <OrderCart />
        </template>
    </UISidenav>
</template>