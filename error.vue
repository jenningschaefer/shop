<!--
  @file error.vue
  @description Branded error page (404 and generic errors)
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()

const isNotFound = computed(() => props.error?.statusCode === 404)

const heading = computed(() => (isNotFound.value ? t('errors.notFound') : t('errors.serverError')))
const message = computed(() =>
  isNotFound.value ? t('errors.notFoundText') : t('errors.serverErrorText')
)

useHead(() => ({
  title: `${props.error?.statusCode ?? 'Error'} – ${heading.value}`,
}))

function goHome(): void {
  clearError({ redirect: '/' })
}

function goToProducts(): void {
  clearError({ redirect: '/products/list' })
}
</script>

<template>
  <div class="error-layout">
    <NavBar />
    <main class="error-page">
      <p class="error-page_code" aria-hidden="true">{{ error?.statusCode ?? 404 }}</p>
      <h1 class="error-page_title">{{ heading }}</h1>
      <p class="error-page_text">{{ message }}</p>
      <div class="error-page_actions">
        <button type="button" class="vesta-btn" @click="goHome">{{ t('errors.goHome') }}</button>
        <button type="button" class="vesta-btn-secondary" @click="goToProducts">
          {{ t('errors.browse') }}
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>
