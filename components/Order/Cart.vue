<script setup>

const cart = ref(useLocalStorage("cart", []));

const delteFromCart = (id) => {
    cart.value = cart.value.filter((el) => el.id != id);
}
</script>

<template>
    <div class="order-cart">
        <div class="order-cart_products">
            <!-- TODO: no products in Cart message -->
            <ClientOnly>
                <productItem v-for="item in cart" :key="item.id" :item="item" :isInCart="true"
                    class="order-cart_products_product">
                    <template #buttons>
                        <button type="button" class="vesta-btn" @click="delteFromCart(item.id)">Remove from
                            Cart</button>
                    </template>
                </productItem>
            </ClientOnly>
        </div>
        <div class="order-cart_checkout">
            <div class="order-cart_checkout_total">
                <span>Total</span>
                <span>{{ cart.reduce((n, { price, amount }) => (+n + (+amount * +price)).toFixed(2), 0) }} $</span>
            </div>
            <NuxtLink to="/checkout/address">
                <button type="button" class="order-cart_checkout_button vesta-btn">Buy</button>
            </NuxtLink>
        </div>
    </div>
</template>