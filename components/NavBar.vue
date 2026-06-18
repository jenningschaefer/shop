<!--
  @file components/NavBar.vue
  @description Main navigation bar with cart, favorites, and menu sidebars
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { t, locale, setLocale } = useI18n()
const { loggedIn, user, clear } = useUserSession()

// User icon: logged-out → login, guest → their order history, user → account overview.
const accountTarget = computed(() => {
  if (!loggedIn.value) return '/login'
  return user.value?.role === 'guest' ? '/account/order-history' : '/account/'
})

async function onLogout(): Promise<void> {
  await clear()
  await navigateTo('/login')
}

const openMenu = ref(false)
const openCart = ref(false)
const openFavorites = ref(false)

type StoredCartItem = { amount: number }
const cart = useLocalStorage<StoredCartItem[]>('cart', [])
const favorites = useLocalStorage<unknown[]>('favorite', [])

const cartCount = computed(() =>
  cart.value.reduce((sum, item) => sum + (Number(item.amount) || 0), 0)
)
const favoritesCount = computed(() => favorites.value.length)

const cartPulse = ref(false)
const favoritesPulse = ref(false)

function triggerPulse(pulse: Ref<boolean>): void {
  pulse.value = false
  requestAnimationFrame(() => {
    pulse.value = true
    window.setTimeout(() => {
      pulse.value = false
    }, 350)
  })
}

watch(cartCount, (next, prev) => {
  if (next !== prev) triggerPulse(cartPulse)
})

watch(favoritesCount, (next, prev) => {
  if (next !== prev) triggerPulse(favoritesPulse)
})

const isProductPage = computed(() => route.name === 'products-name-id')
const isAccountPage = computed(() => String(route.name ?? '').includes('account'))

function toggleLocale(): void {
  setLocale(locale.value === 'de' ? 'en' : 'de')
}
</script>

<template>
  <div class="navBar-wrapper">
    <div class="navBar">
      <NuxtLink to="/" class="navBar_home" :aria-label="t('nav.home')">
        <svg class="navBar_logo" aria-hidden="true">
          <use href="~/assets/svg/logos.svg#logo" />
        </svg>
      </NuxtLink>
      <div class="navBar_icons">
        <template v-if="isProductPage">
          <button type="button" :aria-label="t('nav.back')" @click="router.back()">
            <svg class="subNav_icon" aria-hidden="true">
              <use href="~/assets/svg/icons.svg#arrow-left" />
            </svg>
          </button>
        </template>
        <template v-else>
          <button
            type="button"
            :aria-label="locale === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'"
            :title="locale === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'"
            @click="toggleLocale"
          >
            <svg v-if="locale === 'de'" class="subNav_icon subNav_icon--lang" aria-hidden="true">
              <use href="~/assets/svg/icons.svg#lang-de" />
            </svg>
            <svg v-else class="subNav_icon subNav_icon--lang" aria-hidden="true">
              <use href="~/assets/svg/icons.svg#lang-en" />
            </svg>
          </button>
        </template>
        <button
          type="button"
          class="navIconButton"
          :aria-label="t('nav.cart')"
          @click="openCart = true"
        >
          <svg class="navBar_icons_icon" aria-hidden="true">
            <use href="~/assets/svg/icons.svg#cart" />
          </svg>
          <span
            v-if="cartCount > 0"
            class="navBadge"
            :class="{ 'navBadge--pulse': cartPulse }"
            aria-hidden="true"
          >
            {{ cartCount }}
          </span>
        </button>
        <button
          type="button"
          class="navIconButton"
          :aria-label="t('nav.favorites')"
          @click="openFavorites = true"
        >
          <svg class="navBar_icons_icon" aria-hidden="true">
            <use href="~/assets/svg/icons.svg#heart" />
          </svg>
          <span
            v-if="favoritesCount > 0"
            class="navBadge"
            :class="{ 'navBadge--pulse': favoritesPulse }"
            aria-hidden="true"
          >
            {{ favoritesCount }}
          </span>
        </button>
        <div class="navUser">
          <NuxtLink :to="accountTarget" :aria-label="t('nav.login')">
            <svg class="navBar_icons_icon" aria-hidden="true">
              <use href="~/assets/svg/icons.svg#user" />
            </svg>
          </NuxtLink>
          <div v-if="loggedIn" class="navUser_menu">
            <NuxtLink :to="accountTarget" class="navUser_item">{{ t('nav.account') }}</NuxtLink>
            <button type="button" class="navUser_item" @click="onLogout">
              {{ t('auth.logout') }}
            </button>
          </div>
        </div>
      </div>
      <div class="navBar_menu">
        <a @click="openMenu = true">{{ t('nav.menu') }}</a>
      </div>
    </div>
    <nav v-if="!isAccountPage" class="subNav" aria-label="Quick actions">
      <template v-if="isProductPage">
        <button type="button" :aria-label="t('nav.back')" @click="router.back()">
          <svg class="subNav_icon" aria-hidden="true">
            <use href="~/assets/svg/icons.svg#arrow-left" />
          </svg>
        </button>
      </template>
      <template v-else>
        <button
          type="button"
          :aria-label="locale === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'"
          :title="locale === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'"
          @click="toggleLocale"
        >
          <svg v-if="locale === 'de'" class="subNav_icon subNav_icon--lang" aria-hidden="true">
            <use href="~/assets/svg/icons.svg#lang-de" />
          </svg>
          <svg v-else class="subNav_icon subNav_icon--lang" aria-hidden="true">
            <use href="~/assets/svg/icons.svg#lang-en" />
          </svg>
        </button>
      </template>
      <button
        type="button"
        class="navIconButton"
        :aria-label="t('nav.cart')"
        @click="openCart = true"
      >
        <svg class="subNav_icon" aria-hidden="true">
          <use href="~/assets/svg/icons.svg#cart" />
        </svg>
        <span
          v-if="cartCount > 0"
          class="navBadge"
          :class="{ 'navBadge--pulse': cartPulse }"
          aria-hidden="true"
        >
          {{ cartCount }}
        </span>
      </button>
      <button
        type="button"
        class="navIconButton"
        :aria-label="t('nav.favorites')"
        @click="openFavorites = true"
      >
        <svg class="subNav_icon" aria-hidden="true">
          <use href="~/assets/svg/icons.svg#heart" />
        </svg>
        <span
          v-if="favoritesCount > 0"
          class="navBadge"
          :class="{ 'navBadge--pulse': favoritesPulse }"
          aria-hidden="true"
        >
          {{ favoritesCount }}
        </span>
      </button>
      <div class="navUser">
        <NuxtLink :to="accountTarget" :aria-label="t('nav.login')">
          <svg class="subNav_icon" aria-hidden="true">
            <use href="~/assets/svg/icons.svg#user" />
          </svg>
        </NuxtLink>
        <div v-if="loggedIn" class="navUser_menu">
          <NuxtLink :to="accountTarget" class="navUser_item">{{ t('nav.account') }}</NuxtLink>
          <button type="button" class="navUser_item" @click="onLogout">
            {{ t('auth.logout') }}
          </button>
        </div>
      </div>
    </nav>
  </div>
  <UISidenav v-model="openMenu">
    <template #title>{{ t('nav.menu') }}</template>
    <template #content>
      <Menu @close="openMenu = false" />
    </template>
  </UISidenav>
  <UISidenav v-model="openCart">
    <template #title>{{ t('nav.cart') }}</template>
    <template #content>
      <OrderCart />
    </template>
  </UISidenav>
  <UISidenav v-model="openFavorites">
    <template #title>{{ t('nav.favorites') }}</template>
    <template #content>
      <OrderFavorites />
    </template>
  </UISidenav>
</template>
