<!--
  @file layouts/default.vue
  @description Default layout with navbar and footer
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
// Default layout - wraps pages with NavBar and Footer
</script>

<template>
  <div class="landing-layout">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
