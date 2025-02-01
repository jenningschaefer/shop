<script setup>
const route = useRoute();
const openMenu = ref();

const prev = () => {
    switch (route.name) {
        case 'checkout-payment':
            return '/checkout/address'
            break;
        case 'checkout-overview':
            return '/checkout/payment'
            break;
        default:
            return '/products/list'
    }
};
</script>

<template>
    <div class="checkout-header">
        <NuxtLink :to="prev()" v-if="route.name != 'checkout-confirmation'">
            <svg class="checkout-header_back">
                <use href="~/assets/svg/icons.svg#arrow-left" />
            </svg>
        </NuxtLink>
        <div v-else></div>
        <svg class="checkout-header_menu" @click="openMenu = true">
            <use href="~/assets/svg/icons.svg#menu" />
        </svg>
    </div>
    <UISidenav v-model="openMenu">
        <template #title>Menu</template>
        <template #content>
            <MenuCheckout />
        </template>
    </UISidenav>
</template>