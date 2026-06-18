<!--
  @file components/Service/Shipping.vue
  @description Shipping & delivery section for the service page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="service_content">
    <h2 class="service_content_title">{{ t('servicePage.shipping.title') }}</h2>
    <p class="service_content_text">{{ t('servicePage.shipping.p1') }}</p>
    <p class="service_content_text">{{ t('servicePage.shipping.p2') }}</p>
    <p class="service_content_text">{{ t('servicePage.shipping.p3') }}</p>
  </div>
</template>
