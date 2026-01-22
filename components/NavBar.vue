<!--
  @file components/NavBar.vue
  @description Main navigation bar with cart, favorites, and menu sidebars
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const openMenu = ref(false)
const openCart = ref(false)
const openFavorites = ref(false)

const isProductPage = computed(() => route.name === 'products-name-id')
const isAccountPage = computed(() =>
  String(route.name ?? '').includes('account')
)
</script>

<template>
  <div>
    <div class="navBar">
      <NuxtLink to="/" class="navBar_home">
        <svg class="navBar_logo">
          <use href="~/assets/svg/logos.svg#logo" />
        </svg>
      </NuxtLink>
      <div class="navBar_icons">
        <template v-if="isProductPage">
          <a @click="router.back()">
            <svg class="subNav_icon">
              <use href="~/assets/svg/icons.svg#arrow-left" />
            </svg>
          </a>
        </template>
        <template v-else>
          <a>
            <svg class="subNav_icon">
              <use href="~/assets/svg/icons.svg#lang-de" />
            </svg>
          </a>
        </template>
        <a @click="openCart = true">
          <svg class="navBar_icons_icon">
            <use href="~/assets/svg/icons.svg#cart" />
          </svg>
        </a>
        <a @click="openFavorites = true">
          <svg class="navBar_icons_icon">
            <use href="~/assets/svg/icons.svg#heart" />
          </svg>
        </a>
        <NuxtLink to="/login">
          <svg class="navBar_icons_icon">
            <use href="~/assets/svg/icons.svg#user" />
          </svg>
        </NuxtLink>
      </div>
      <div class="navBar_menu">
        <a @click="openMenu = true">menu</a>
      </div>
    </div>
    <div v-if="!isAccountPage" class="subNav">
      <template v-if="isProductPage">
        <a @click="router.back()">
          <svg class="subNav_icon">
            <use href="~/assets/svg/icons.svg#arrow-left" />
          </svg>
        </a>
      </template>
      <template v-else>
        <a>
          <svg class="subNav_icon">
            <use href="~/assets/svg/icons.svg#lang-de" />
          </svg>
        </a>
      </template>
      <a @click="openCart = true">
        <svg class="subNav_icon">
          <use href="~/assets/svg/icons.svg#cart" />
        </svg>
      </a>
      <a @click="openFavorites = true">
        <svg class="subNav_icon">
          <use href="~/assets/svg/icons.svg#heart" />
        </svg>
      </a>
      <NuxtLink to="/login">
        <svg class="subNav_icon">
          <use href="~/assets/svg/icons.svg#user" />
        </svg>
      </NuxtLink>
    </div>
  </div>
  <UISidenav v-model="openMenu">
    <template #title>Menu</template>
    <template #content>
      <Menu />
    </template>
  </UISidenav>
  <UISidenav v-model="openCart">
    <template #title>Cart</template>
    <template #content>
      <OrderCart />
    </template>
  </UISidenav>
  <UISidenav v-model="openFavorites">
    <template #title>Favorites</template>
    <template #content>
      <OrderFavorites />
    </template>
  </UISidenav>
</template>
