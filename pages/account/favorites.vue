<script setup>
const favorite = useLocalStorage("favorite", []);

definePageMeta({
    layout: 'account',
});
</script>

<template>
    <div class="account-favorites">
        <div class="account-user_link">
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#heart" />
                    </svg>
                    <div class="account-link_name">Favorites</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-favorites_products">
            <ClientOnly>
                <productItem v-for="item in favorite" :key="item.id" :item="item" :isFavorite="true"
                    class="account-favorites_products_product" />
            </ClientOnly>
        </div>
    </div>
</template>