<!--
  @file app.vue
  @description Root application component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const disclaimerAccepted = useLocalStorage('shop-disclaimer', false)

const showDisclaimer = computed({
  get: () => !disclaimerAccepted.value,
  set: () => { disclaimerAccepted.value = true }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <UIDialog v-model="showDisclaimer">
    <template #title>Disclaimer</template>
    <template #content>
      <p>
        This website is a portfolio project and not a real online store. All
        products, prices, and transactions displayed are fictional and exist
        solely to showcase my front-end development skills. No actual purchases
        can be made through this site.
      </p>
      <p>If you're interested in my work, feel free to reach out!</p>
    </template>
  </UIDialog>
</template>
