<!--
  @file components/Service/Imprint.vue
  @description Imprint (Impressum) section for the service page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="section-content">
    <h2 class="section-content_title">{{ t('servicePage.imprint.title') }}</h2>
    <p class="section-content_note">{{ t('servicePage.imprint.disclaimer') }}</p>

    <h3 class="section-content_subtitle">{{ t('servicePage.imprint.providerLabel') }}</h3>
    <p class="section-content_text">
      {{ t('servicePage.imprint.company') }}
      <br />
      {{ t('servicePage.imprint.street') }}
      <br />
      {{ t('servicePage.imprint.city') }}
      <br />
      {{ t('servicePage.imprint.country') }}
    </p>

    <h3 class="section-content_subtitle">{{ t('servicePage.imprint.repLabel') }}</h3>
    <p class="section-content_text">{{ t('servicePage.imprint.rep') }}</p>

    <h3 class="section-content_subtitle">{{ t('servicePage.imprint.contactLabel') }}</h3>
    <p class="section-content_text">
      {{ t('servicePage.imprint.phone') }}
      <br />
      {{ t('servicePage.imprint.email') }}
    </p>

    <h3 class="section-content_subtitle">{{ t('servicePage.imprint.registerLabel') }}</h3>
    <p class="section-content_text">{{ t('servicePage.imprint.register') }}</p>

    <h3 class="section-content_subtitle">{{ t('servicePage.imprint.vatLabel') }}</h3>
    <p class="section-content_text">{{ t('servicePage.imprint.vat') }}</p>
  </div>
</template>
