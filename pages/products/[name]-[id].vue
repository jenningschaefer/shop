<script setup>
const route = useRoute();
const product = ref();

definePageMeta({
    layout: 'products',
});

onMounted(async () =>  {
    product.value = await useProduct(route.params.id);
    console.log(route.params.id)
});
</script>

<template>
    <div class="product" v-if="product != null">
        <div class="product_details-mobile">
            <div>by {{ product.designer }}</div>
            <div>{{ product.price_us }}$</div>
        </div>
        <div class="product_description">
            <div class="product_description-title"></div>
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
                <button class="vesta-btn" type="button">Apply</button>
            </div>
        </div>
    </div>
</template>