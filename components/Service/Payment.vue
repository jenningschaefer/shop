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
  <div class="section-content">
    <h2 class="section-content_title">{{ t('servicePage.payment.title') }}</h2>
    <p class="section-content_text">{{ t('servicePage.payment.intro') }}</p>
    <ul class="section-content_list">
      <li v-for="n in methods" :key="n">{{ t(`servicePage.payment.m${n}`) }}</li>
    </ul>
    <p class="section-content_text">{{ t('servicePage.payment.note') }}</p>
  </div>
</template>
