<script setup>
const route = useRoute();

const next = () => {
    switch (route.name) {
        case 'checkout-payment':
            return '/checkout/overview'
            break;
        case 'checkout-overview':
            return '/checkout/confirmation'
            break;
        default:
            return '/checkout/payment'
    }
};

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
    <div class="checkout-navigation">
        <div class="checkout-navigation_button">
            <NuxtLink :to="prev()" class="checkout-navigation_button-prev">
                <button class="vesta-btn-secondary" type="button">PREV</button>
            </NuxtLink>
            <NuxtLink :to="next()">
                <button class="vesta-btn" type="button">{{ route.name == 'checkout-overview' ? 'BUY' : 'NEXT' }}</button>
            </NuxtLink>
        </div>
        <CheckoutProgressBar />
    </div>
</template>