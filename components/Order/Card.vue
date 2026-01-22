<!--
  @file components/Order/Card.vue
  @description Order summary card for order history
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { Order } from '~/types'

interface Props {
  order: Order
}

defineProps<Props>()

const { t, locale } = useI18n()
const { formatDate } = useUtilities()

const currencySymbol = computed(() => (locale.value === 'de' ? '€' : '$'))
</script>

<template>
  <div class="order-card">
    <NuxtLink :to="'/account/order-' + order.order_id" class="order-card_heading">
      <h3>{{ t('order.orderNumber') }} #{{ order.order_id }}</h3>
      <svg class="account-link_icon">
        <use href="~/assets/svg/icons.svg#chevron-right" />
      </svg>
    </NuxtLink>
    <div class="order-card_status">{{ t(`order.${order.status.toLowerCase()}`) }}</div>
    <div class="order-card_info">
      <span class="order-card_info-heading">{{ t('order.orderDate') }}</span>
      <span class="order-card_info-value">{{ formatDate(order.order_date) }}</span>
      <span />
      <span />
      <span class="order-card_info-heading">{{ t('order.shippedDate') }}</span>
      <span class="order-card_info-value">{{ formatDate(order.shipping_date) }}</span>
      <span class="order-card_info-heading">{{ t('cart.total') }}</span>
      <span class="order-card_info-value">{{ order.sum }} {{ currencySymbol }}</span>
    </div>
  </div>
</template>
