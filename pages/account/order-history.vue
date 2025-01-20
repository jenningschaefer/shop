<script setup>
const orders = useOrdersByUser(1);

definePageMeta({
    layout: 'account',
});
</script>

<template>
    <div class="account-history">
        <div class="account-user_link">
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#history" />
                    </svg>
                    <div class="account-link_name">History</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-history_orders">
            <ClientOnly>
                <OrderCard v-for="order in orders" :key="order.order_id" :order="order" class="account-history_orders-order"/>
            </ClientOnly>
        </div>
    </div>
</template>