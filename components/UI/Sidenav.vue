<!--
  @file components/UI/Sidenav.vue
  @description Slide-in side navigation panel with accessibility support
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

const active = defineModel<boolean>()

// Handle Escape key to close
function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && active.value) {
    active.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Trap focus and prevent body scroll when open
watch(active, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>

<template>
  <div v-if="active" class="overlay" @click="active = false" />
  <aside
    id="mySidenav"
    class="sidenav"
    :class="active ? 'open' : ''"
    role="dialog"
    aria-modal="true"
    :aria-hidden="!active"
  >
    <div class="sidenav_title">
      <slot name="title" />
    </div>
    <button type="button" class="closebtn" aria-label="Close" @click="active = false">
      <svg aria-hidden="true">
        <use href="~/assets/svg/icons.svg#close" />
      </svg>
    </button>
    <div class="sidenav_content">
      <slot name="content" />
    </div>
  </aside>
</template>
