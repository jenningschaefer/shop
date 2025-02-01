<script setup>

const favorite = useLocalStorage("favorite", []);

const delteFromFavorites = (id) => {
    favorite.value = favorite.value.filter((el) => el.id != id);
    alert('Removed from FAvorites');
};

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
</script>

<template>
    <div class="order-cart">
        <div class="order-cart_products">
            <!-- TODO: no products in Cart message -->
            <ClientOnly>
                <productItem v-for="item in favorite" :key="item.id" :item="item" :isInCart="true"
                    class="order-cart_products_product">
                    <template #buttons>
                        <button type="button" class="vesta-btn" @click="addToCart(item.id)">Add To
                            Cart</button>
                        <button type="button" class="vesta-btn" @click="delteFromFavorites(item.id)">Remove from
                            Favorites</button>
                    </template>
                </productItem>
            </ClientOnly>
        </div>
    </div>
</template>