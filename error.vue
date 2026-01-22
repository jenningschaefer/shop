<!--
  @file error.vue
  @description Error page component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    message: string
  }
}

defineProps<Props>()

function handleError(): void {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <div class="error-page">
    <h1>Oops!</h1>
    <p>{{ error.message }}</p>
    <button type="button" class="vesta-btn" @click="handleError">
      Go Back Home
    </button>
  </div>
</template>
