<!--
  @file components/Design/Overview.vue
  @description Designed overview grid - one box per design-page section.
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface OverviewSection {
  id: string
  labelKey: string
}

defineProps<{
  sections: readonly OverviewSection[]
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const { t } = useI18n()

function pad(index: number): string {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <section class="design-overview">
    <header class="design-overview_intro">
      <h1 class="design-overview_title">{{ t('designPage.title') }}</h1>
      <p class="design-overview_text">{{ t('designPage.intro') }}</p>
    </header>

    <div class="design-overview_grid">
      <button
        v-for="(section, index) in sections"
        :key="section.id"
        type="button"
        class="design-card"
        :class="`design-card--${index % 4}`"
        @click="emit('select', section.id)"
      >
        <span class="design-card_num">{{ pad(index) }}</span>
        <span class="design-card_title">{{ t(`designPage.overview.${section.id}Title`) }}</span>
        <span class="design-card_text">{{ t(`designPage.overview.${section.id}Text`) }}</span>
        <svg class="design-card_arrow" aria-hidden="true">
          <use href="~/assets/svg/icons.svg#arrow-right" />
        </svg>
      </button>
    </div>
  </section>
</template>
