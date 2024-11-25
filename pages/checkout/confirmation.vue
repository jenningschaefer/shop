<script setup>
definePageMeta({
    layout: 'checkout',
});
</script>

<template>
    <div class="confirmation">
        <div class="confirmation_logo">
            <NuxtLink to="/">
                <svg>
                    <use href="~/assets/svg/logos.svg#logo" />
                </svg>
            </NuxtLink>
        </div>
        <div class="confirmation_success">
            <div class="confirmation_success_panel">
                <svg class="confirmation_success_panel-icon">
                    <use href="~/assets/svg/icons.svg#check" />
                </svg>
                <div class="confirmation_success_panel-title">Success!!</div>
                <div class="confirmation_success_panel-text">Your Order has<br> been confirmed</div>
                <NuxtLink to="/" class="confirmation_success_panel-button">
                    <button class="dark-btn-socondary confirmation_success_panel-button" type="button">home</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>