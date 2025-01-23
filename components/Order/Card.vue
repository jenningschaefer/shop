<script setup>
const {formatDate} = useUtilities();

const props = defineProps({
    order: Object,
});

</script>

<template>
    <div class="order-card">
        <NuxtLink :to="'/account/order-' + order.order_id" class="order-card_heading">
            <h3>Order No. #{{ order.order_id }}</h3>
            <svg class="account-link_icon">
                <use href="~/assets/svg/icons.svg#chevron-right" />
            </svg>
        </NuxtLink>
        <div class="order-card_status">{{ order.status }}</div>
        <div class="order-card_info">
            <span class="order-card_info-heading">Order date</span>
            <span class="order-card_info-value">{{ formatDate(order.order_date) }}</span>
            <span></span>
            <span></span>
            <span class="order-card_info-heading">Shipped</span>
            <span class="order-card_info-value">{{ formatDate(order.shipping_date) }}</span>
            <span class="order-card_info-heading">Total</span>
            <span class="order-card_info-value">{{ order.sum }} $</span>
        </div>
    </div>
</template>