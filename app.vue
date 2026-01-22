<!--
  @file app.vue
  @description Root application component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useUiStore, useCartStore, useUserStore, useFavoritesStore } from '~/stores'

// Initialize stores
const uiStore = useUiStore()
const cartStore = useCartStore()
const userStore = useUserStore()
const favoritesStore = useFavoritesStore()

onMounted(() => {
  uiStore.init()
  cartStore.init()
  userStore.init()
  favoritesStore.init()
})

function handleDisclaimerClose() {
  uiStore.acceptDisclaimer()
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <UIDialog v-model="uiStore.isDisclaimerOpen" @update:model-value="handleDisclaimerClose">
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
