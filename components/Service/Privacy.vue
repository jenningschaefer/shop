<!--
  @file components/Service/Privacy.vue
  @description Privacy policy (Datenschutz) section for the service page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()

const sections = ['1', '2', '3', '4'] as const
</script>

<template>
  <div class="section-content">
    <h2 class="section-content_title">{{ t('servicePage.privacy.title') }}</h2>
    <p class="section-content_note">{{ t('servicePage.privacy.disclaimer') }}</p>

    <template v-for="n in sections" :key="n">
      <h3 class="section-content_subtitle">{{ t(`servicePage.privacy.h${n}`) }}</h3>
      <p class="section-content_text">{{ t(`servicePage.privacy.p${n}`) }}</p>
    </template>
  </div>
</template>
