<!--
  @file components/Design/Philosophy.vue
  @description Design page section - philosophy / Bauhaus minimalism.
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="section-content">
    <h2 class="section-content_title">{{ t('designPage.philosophy.title') }}</h2>
    <p class="section-content_text">{{ t('designPage.philosophy.p1') }}</p>
    <p class="section-content_text">{{ t('designPage.philosophy.p2') }}</p>
    <p class="section-content_text">{{ t('designPage.philosophy.p3') }}</p>
  </div>
</template>
