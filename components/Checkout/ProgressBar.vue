<script setup>
const route = computed(() => useRoute());


</script>

<template>
    <div class="progress-bar">
        <div class="progress-bar_step active"></div>
        <div class="progress-bar_step" :class="route.name === 'checkout-payment' || route.name === 'checkout-overview' ? 'active' : ''"></div>
        <div class="progress-bar_step" :class="route.name === 'checkout-overview' ? 'active' : ''"></div>
    </div>
</template>