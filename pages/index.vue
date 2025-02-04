<script setup>
useHead({
  title: 'Shop',
});
</script>

<template>
  <div class="home">
    <!-- slogan -->
    <div class="home_slogan" @click="navigateTo('/products/list')">
      <svg class="home_slogan_bg">
        <use href="~/assets/svg/logos.svg#logo-bg" />
      </svg>
      <div class="home_slogan_text hero-font">make it simple<br>but significant</div>
    </div>
    <!-- slogan end -->

    <!-- categories -->
    <div class="home_categories">
      <NuxtLink to="/products/list/chairs" class="home_categories_link">
        <p class="links">Chairs</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/ligting" class="home_categories_link">
        <p class="links">Lighting</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/tables" class="home_categories_link">
        <p class="links">Tables</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/decoration" class="home_categories_link">
        <p class="links">Decoration</p>
        <svg class="home_categories_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
    </div>
    <!-- categories end -->

    <!-- hero -->
    <div class="home_hero">
      <NuxtImg class="" @click="" src="pexels-heyho-6077368.jpg" />
    </div>
    <!-- hero end -->
  </div>
</template>