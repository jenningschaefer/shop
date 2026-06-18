<!--
  @file components/Service/Payment.vue
  @description Payment methods section for the service page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()

const methods = ['1', '2', '3', '4'] as const
</script>

<template>
  <div class="service_content">
    <h2 class="service_content_title">{{ t('servicePage.payment.title') }}</h2>
    <p class="service_content_text">{{ t('servicePage.payment.intro') }}</p>
    <ul class="service_content_list">
      <li v-for="n in methods" :key="n">{{ t(`servicePage.payment.m${n}`) }}</li>
    </ul>
    <p class="service_content_text">{{ t('servicePage.payment.note') }}</p>
  </div>
</template>
