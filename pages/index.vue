<!--
  @file pages/index.vue
  @description Home page with hero section and category links
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Shop',
})
</script>

<template>
  <div class="home">
    <!-- slogan -->
    <div class="home_slogan" @click="navigateTo('/products/list')">
      <svg class="home_slogan_bg">
        <use href="~/assets/svg/logos.svg#logo-bg" />
      </svg>
      <div class="home_slogan_text hero-font">
        make it simple<br />but significant
      </div>
    </div>
    <!-- slogan end -->

    <!-- categories -->
    <div class="home_categories">
      <NuxtLink to="/products/list/chairs" class="home_categories_link">
        <p class="links">{{ t('categories.chairs') }}</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/lighting" class="home_categories_link">
        <p class="links">{{ t('categories.lighting') }}</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/table" class="home_categories_link">
        <p class="links">{{ t('categories.table') }}</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/accessory" class="home_categories_link">
        <p class="links">{{ t('categories.accessory') }}</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
    </div>
    <!-- categories end -->

    <!-- hero -->
    <div class="home_hero">
      <NuxtImg src="img/pexels-heyho-6077368.jpg" />
    </div>
    <!-- hero end -->
  </div>
</template>
