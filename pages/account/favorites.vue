<script setup>
const favorite = useLocalStorage("favorite", []);
const cart = useLocalStorage("cart", []);

definePageMeta({
    layout: 'account',
});

const addToCart = (id) => {
    if (!(cart.value.some((obj) => obj.id === id))) {
        cart.value.push({
            "id": id,
            "amount": 1,
        });
        alert('Added to Cart.');
    } else {
        alert('Already in Cart.');
    }
    /* TODO: Question: Should i delete in Favs after adding? */
};

const delteFromFavs = (id) => {
    favorite.value = favorite.value.filter((el) => el.id != id);
    alert('Removed from FAvorites');
};

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
            <!-- TODO: no products in Favorites message -->
            <ClientOnly>
                <productItem v-for="item in favorite" :key="item.id" :item="item" :isFavorite="true"
                    class="account-favorites_products_product">
                    <!-- TODO: emit amount -->
                    <template #buttons>
                        <button type="button" class="vesta-btn" @click="addToCart(item.id)">Add To
                            Cart</button>
                        <button type="button" class="vesta-btn" @click="delteFromFavs(item.id)">Remove from
                            Favorites</button>
                    </template>
                </productItem>
            </ClientOnly>
        </div>
    </div>
</template>