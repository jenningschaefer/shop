<!--
  @file app.vue
  @description Root application component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const disclaimerAccepted = useLocalStorage('shop-disclaimer', false)

const showDisclaimer = computed({
  get: () => !disclaimerAccepted.value,
  set: () => {
    disclaimerAccepted.value = true
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <UIDialog v-model="showDisclaimer">
    <template #title>{{ t('disclaimer.title') }}</template>
    <template #content>
      <p>{{ t('disclaimer.text1') }}</p>
      <p>{{ t('disclaimer.text2') }}</p>
    </template>
  </UIDialog>
</template>
