<script setup lang="ts">
import { useOrderByOrderId } from '~/composables/useOrders'
import { useAddress } from '~/composables/useAddresses'
import { useUtilities } from '~/composables/useUtilities'

const route = useRoute()
const { t, locale } = useI18n()

// Get order by ID from route params
const orderId = route.params.id as string
const order = useOrderByOrderId(orderId)

// Load addresses
const shipping_address = useAddress(0)
const billing_address = useAddress(1)
const { formatDate } = useUtilities()

definePageMeta({
    layout: 'account',
})

const currencySymbol = computed(() => locale.value === 'de' ? '€' : '$')

function getTotal(str1: string, str2: string): string {
    const num1 = Number(str1)
    const num2 = Number(str2)
    return (num1 + num2).toFixed(2)
}
</script>

<template>
    <div class="account-order">
        <div class="account-user_link">
            <NuxtLink to="/account/order-history" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#order" />
                    </svg>
                    <div class="account-link_name">{{ t('order.details') }}</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div v-if="!order" class="account-order_container">
            <p>{{ t('order.notFound') }}</p>
        </div>
        <div v-else class="account-order_container">
            <div class="account-order_no">{{ t('order.orderNumber') }} #{{ route.params.id }}</div>
            <div class="account-order_status">{{ t(`order.${order.status.toLowerCase()}`) }}</div>
            <div class="account-order_details">
                <span class="account-order_details_heading">{{ t('order.orderDate') }}</span>
                <span>{{ formatDate(order.order_date) }}</span>
                <span class="account-order_details_heading">{{ t('order.shippedDate') }}</span>
                <span>{{ formatDate(order.shipping_date) }}</span>
            </div>
            <div class="account-order_send">
                <div class="account-order_send-wrapper">
                    <h4 class="account-order_send_heading">{{ t('order.deliveredTo') }}</h4>
                    <address class="account-order_send_address">
                        {{ shipping_address.firstname }} {{ shipping_address.name }}<br>
                        {{ shipping_address.street }} {{ shipping_address.house_no }}<br>
                        {{ shipping_address.zip_code }} {{ shipping_address.city }}<br>
                        {{ shipping_address.country }}
                    </address>
                </div>
                <div class="account-order_send-wrapper">
                    <h4 class="account-order_send_heading">{{ t('order.deliveryType') }}</h4>
                    <div class="account-order_send_info">
                        {{ order.delivery_type }}<br>
                        {{ t('order.deliveryWithin', { time: order.delivery_time }) }}
                    </div>
                </div>
            </div>
            <div class="account-order_buttons">
                <a href="">
                    <button class="vesta-btn account-order_btn" type="button">{{ t('order.trackOrder') }}</button>
                </a>
                <div></div>
            </div>
            <hr class="account-order_seperator">
            <div class="account-order_products">
                <ClientOnly>
                    <productItem v-for="item in order.products" :key="item.id" :item="item" :ordered="true"
                        class="account-order_products-item" />
                </ClientOnly>
            </div>
            <hr class="account-order_seperator">
            <div class="account-order_send">
                <div class="account-order_send-wrapper">
                    <h4 class="account-order_send_heading">{{ t('checkout.billingAddress') }}</h4>
                    <address class="account-order_send_address">
                        {{ billing_address.firstname }} {{ billing_address.name }}<br>
                        {{ billing_address.street }} {{ billing_address.house_no }}<br>
                        {{ billing_address.zip_code }} {{ billing_address.city }}<br>
                        {{ billing_address.country }}
                    </address>
                </div>
                <div class="account-order_send-wrapper">
                    <h4 class="account-order_send_heading">{{ t('checkout.payment') }}</h4>
                    <div class="account-order_send_info">
                        {{ order.payment_type }}<br>
                    </div>
                </div>
            </div>
            <div class="account-order_details">
                <span class="account-order_details_heading">{{ t('cart.subtotal') }}</span>
                <span>{{ order.sum }} {{ currencySymbol }}</span>
                <span class="account-order_details_heading">{{ t('cart.shipping') }}</span>
                <span>{{ order.shipping }} {{ currencySymbol }}</span>
            </div>
            <div class="account-order_total">
                <span>{{ t('cart.total') }}</span>
                <span>{{ getTotal(order.sum, order.shipping) }} {{ currencySymbol }}</span>
            </div>
            <div class="account-order_buttons">
                <a href="">
                    <button class="vesta-btn account-order_btn" type="button">{{ t('order.invoice') }}</button>
                </a>
                <a href="">
                    <button class="vesta-btn account-order_btn" type="button">{{ t('order.returnShipment') }}</button>
                </a>
            </div>
        </div>
    </div>
</template>