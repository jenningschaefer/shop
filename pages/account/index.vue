<!--
  @file pages/account/index.vue
  @description Account overview page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const { user, clear } = useUserSession()

const displayName = computed(() =>
  user.value ? `${user.value.firstname ?? ''} ${user.value.lastname ?? ''}`.trim() : ''
)

// Resolve the user's own addresses (scoped by user_id, never by a bare address id).
const addresses = computed(() =>
  user.value?.user_id !== undefined ? useAddressesByUser(user.value.user_id) : []
)
const defaultAddress = computed(
  () => addresses.value.find((a) => a.id === user.value?.address_id_default) ?? addresses.value[0]
)

async function onLogout() {
  await clear()
  await navigateTo('/login')
}

definePageMeta({
  layout: 'account',
})
</script>

<template>
  <div class="account-overview">
    <!-- User Data -->
    <div class="account-overview_user account-border">
      <NuxtLink to="/account/edit-user">
        <div class="account-overview_container">
          <div class="account-link">
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#user" />
            </svg>
            <div class="account-link_name">{{ t('account.profile') }}</div>
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#arrow-right" />
            </svg>
          </div>
          <address>
            {{ displayName }}
            <br />
            {{ user?.mail }}
          </address>
        </div>
      </NuxtLink>
    </div>

    <!-- Address -->
    <div class="account-overview_address account-border">
      <NuxtLink to="/account/edit-address">
        <div class="account-overview_container">
          <div class="account-link">
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#home" />
            </svg>
            <div class="account-link_name">{{ t('account.addresses') }}</div>
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#arrow-right" />
            </svg>
          </div>
          <address v-if="defaultAddress">
            {{ defaultAddress.street }} {{ defaultAddress.house_no }}
            <br />
            {{ defaultAddress.zip_code }} {{ defaultAddress.city }}
            <br />
            {{ defaultAddress.country }}
          </address>
        </div>
      </NuxtLink>
    </div>

    <!-- Password -->
    <div class="account-overview_password account-border">
      <NuxtLink to="/account/edit-password">
        <div class="account-overview_container">
          <div class="account-link">
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#password" />
            </svg>
            <div class="account-link_name">{{ t('account.changePassword') }}</div>
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#arrow-right" />
            </svg>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- History -->
    <div class="account-overview_history account-border">
      <NuxtLink to="/account/order-history">
        <div class="account-overview_container">
          <div class="account-link">
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#history" />
            </svg>
            <div class="account-link_name">{{ t('account.orderHistory') }}</div>
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#arrow-right" />
            </svg>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Favourites -->
    <div class="account-overview_favourites account-border">
      <NuxtLink to="/account/favorites">
        <div class="account-overview_container">
          <div class="account-link">
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#heart" />
            </svg>
            <div class="account-link_name">{{ t('account.favorites') }}</div>
            <svg class="account-link_icon">
              <use href="~/assets/svg/icons.svg#arrow-right" />
            </svg>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Logout -->
    <div class="account-overview_logout">
      <button class="vesta-btn" type="button" @click="onLogout">{{ t('auth.logout') }}</button>
    </div>
  </div>
</template>
