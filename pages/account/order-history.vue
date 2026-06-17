<!--
  @file pages/account/order-history.vue
  @description Order history page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { Order } from '~/types'

const { t } = useI18n()
const { user, session } = useUserSession()

// Users see their own orders; guests only the order(s) unlocked via the lookup form.
const orders = computed<Order[]>(() => {
  if (user.value?.role === 'guest') {
    const ids = session.value.guest?.allowedOrderIds ?? []
    return ids
      .map((id) => useOrderByOrderId(id))
      .filter((order): order is Order => order !== undefined)
  }
  return user.value?.user_id !== undefined ? useOrdersByUser(user.value.user_id) : []
})

definePageMeta({
  layout: 'account',
})
</script>

<template>
  <div class="account-history">
    <div class="account-user_link">
      <NuxtLink to="/account" class="">
        <div class="account-link">
          <svg class="account-link_icon">
            <use href="~/assets/svg/icons.svg#history" />
          </svg>
          <div class="account-link_name">{{ t('account.orderHistory') }}</div>
          <svg class="account-link_icon">
            <use href="~/assets/svg/icons.svg#arrow-left" />
          </svg>
        </div>
      </NuxtLink>
    </div>
    <div class="account-history_orders">
      <ClientOnly>
        <OrderCard
          v-for="order in orders"
          :key="order.order_id"
          :order="order"
          class="account-history_orders-order"
        />
      </ClientOnly>
    </div>
  </div>
</template>
