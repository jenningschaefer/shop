<!--
  @file components/Service/Faq.vue
  @description FAQ section for the service page (accordion)
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()

// Each FAQ entry maps to a translation key pair (qN / aN).
const items = ['1', '2', '3', '4'] as const
</script>

<template>
  <div class="section-content">
    <h2 class="section-content_title">{{ t('servicePage.faq.title') }}</h2>
    <UIAccordion>
      <UIAccordionItem v-for="n in items" :key="n">
        <template #accordion-trigger>
          <div class="section-faq-trigger">
            <span class="links">{{ t(`servicePage.faq.q${n}`) }}</span>
          </div>
        </template>
        <template #accordion-content>
          <li class="section-faq-answer">{{ t(`servicePage.faq.a${n}`) }}</li>
        </template>
      </UIAccordionItem>
    </UIAccordion>
  </div>
</template>
