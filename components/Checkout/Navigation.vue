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
</script>

<template>
    <div class="navigation">
        <NuxtLink :to="next()">
            <button class="vesta-btn" type="button">{{ route.name == 'checkout-overview' ? 'BUY' : 'NEXT'}}</button>
        </NuxtLink>
        <CheckoutProgressBar />
    </div>
</template>