<!--
  @file components/Design/Colors.vue
  @description Design page section - colour palette swatches.
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()

// Hex values mirror assets/SCSS/abstracts/_variables.scss; the swatch background
// colours come from matching classes in assets/SCSS/pages/_design.scss.
const swatches = [
  { key: 'primary', hex: '#141414' },
  { key: 'secondary', hex: '#f5f5f5' },
  { key: 'blue', hex: '#87a3d2' },
  { key: 'red', hex: '#f7c7b8' },
  { key: 'grey', hex: '#bdc0c7' },
  { key: 'success', hex: '#8fbf9f' },
  { key: 'error', hex: '#e8907c' },
] as const
</script>

<template>
  <div class="section-content">
    <h2 class="section-content_title">{{ t('designPage.colors.title') }}</h2>
    <p class="section-content_text">{{ t('designPage.colors.intro') }}</p>

    <ul class="design-swatches">
      <li v-for="swatch in swatches" :key="swatch.key" class="design-swatch">
        <span class="design-swatch_chip" :class="`design-swatch_chip--${swatch.key}`" />
        <span class="design-swatch_label">{{ t(`designPage.colors.${swatch.key}`) }}</span>
        <span class="design-swatch_hex">{{ swatch.hex }}</span>
      </li>
    </ul>
  </div>
</template>
