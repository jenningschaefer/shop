<!--
  @file components/Design/Tech.vue
  @description Design page section - tech stack (Nuxt + Sass, SEO, full freedom).
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="section-content">
    <h2 class="section-content_title">{{ t('designPage.tech.title') }}</h2>
    <p class="section-content_text">{{ t('designPage.tech.p1') }}</p>
    <p class="section-content_text">{{ t('designPage.tech.p2') }}</p>
    <p class="section-content_text">{{ t('designPage.tech.p3') }}</p>
  </div>
</template>
