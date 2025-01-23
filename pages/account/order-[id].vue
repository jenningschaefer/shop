<script setup>
const route = useRoute();
/* TODO: load user from local storage, but from encrypted key, not id */
//const user = useUser(1);
/* TODO: allow to load only orders from current user */
const order = useOrderByOrderID(route.params.id);
/* TODO: load address from user and set billing addres if exists, else shipping address */
const shipping_address = useAddress(0);
const billing_address = useAddress(1);
const {formatDate} = useUtilities();

definePageMeta({
    layout: 'account',
});

const getTotal = (str1, str2) => {
    const num1 = Number(str1);
    const num2 = Number(str2);
    return (num1 + num2).toFixed(2);
};
</script>

<template>
    <div class="account-order">
        <div class="account-user_link">
            <NuxtLink to="/account/order-history" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#order" />
                    </svg>
                    <div class="account-link_name">Order</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-order_no">Order No. #{{ route.params.id }}</div>
        <div class="account-order_status">{{ order.status }}</div>
        <div class="account-order_details">
            <span class="account-order_details_heading">Order date</span>
            <span>{{ formatDate(order.order_date) }}</span>
            <span class="account-order_details_heading">Shipped</span>
            <span>{{ formatDate(order.shipping_date) }}</span>
        </div>
        <div class="account-order_send">
            <div>
                <h4 class="account-order_send_heading">Delivered To</h4>
                <address class="account-order_send_address">
                    {{ shipping_address.firstname }} {{ shipping_address.name }}<br>
                    {{ shipping_address.street }} {{ shipping_address.house_no }}<br>
                    {{ shipping_address.zip_code }} {{ shipping_address.city }}<br>
                    {{ shipping_address.country }}
                </address>
            </div>
            <div>
                <h4 class="account-order_send_heading">DeliveryType</h4>
                <div class="account-order_send_info">
                    {{ order.delivery_type }}<br>
                    Delivery withing {{ order.delivery_time }}
                </div>
            </div>
        </div>
        <a href="">
            <button class="vesta-btn account-order_btn" type="button">Track order</button>
        </a>
        <hr class="account-order_seperator">
        <div class="account-order_products">
            <ClientOnly>
                <productItem v-for="item in order.products" :key="item.id" :item="item" :ordered="true" class="account-order_products-item"/>
            </ClientOnly>
        </div>
        <hr class="account-order_seperator">
        <div class="account-order_send">
            <div>
                <h4 class="account-order_send_heading">Billing Address</h4>
                <address class="account-order_send_address">
                    {{ billing_address.firstname }} {{ billing_address.name }}<br>
                    {{ billing_address.street }} {{ billing_address.house_no }}<br>
                    {{ billing_address.zip_code }} {{ billing_address.city }}<br>
                    {{ billing_address.country }}
                </address>
            </div>
            <div>
                <h4 class="account-order_send_heading">Payment</h4>
                <div class="account-order_send_info">
                    {{ order.payment_type }}<br>
                </div>
            </div>
        </div>
        <div class="account-order_details">
            <span class="account-order_details_heading">Sum</span>
            <span>{{ order.sum }}$</span>
            <span class="account-order_details_heading">Shipping</span>
            <span>{{ order.shipping }}$</span>
        </div>
        <div class="account-order_total">
            <span>Sum</span>
            <span>{{ getTotal(order.sum, order.shipping) }}$</span>
        </div>
        <div class="account-order_buttons">
            <a href="">
                <button class="vesta-btn account-order_btn" type="button">Invoice (PDF)</button>
            </a>
            <a href="">
                <button class="vesta-btn account-order_btn" type="button">Return Shiment</button>
            </a>
        </div>
        {{ order }}
    </div>
</template>