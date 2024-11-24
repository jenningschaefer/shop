<script setup>
definePageMeta({
    layout: 'checkout',
});
</script>

<template>
    <div class="overview">
        <h1 class="checkout_title">Overview</h1>
        <div class="overview_accordion">
            <UIAccordion>
                <UIAccordion-item>
                    <template #accordion-trigger>
                        <div class="overview_heading">
                            <span class="links">Products</span>
                        </div>
                    </template>
                    <template #accordion-content>
                        products
                    </template>
                </UIAccordion-item>
    
                <UIAccordion-item>
                    <template #accordion-trigger>
                        <div class="overview_heading">
                            <span class="links">Address</span>
                        </div>
                    </template>
                    <template #accordion-content>
                        adresses
                    </template>
                </UIAccordion-item>
    
                <UIAccordion-item>
                    <template #accordion-trigger>
                        <div class="overview_heading">
                            <span class="links">Payment</span>
                        </div>
                    </template>
                    <template #accordion-content>
                        payment
                    </template>
                </UIAccordion-item>
            </UIAccordion>
        </div>
    </div>
</template>