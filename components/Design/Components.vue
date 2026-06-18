<!--
  @file components/Design/Components.vue
  @description Design page section - UI element showcase (buttons, inputs, accordion, links).
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="section-content">
    <h2 class="section-content_title">{{ t('designPage.components.title') }}</h2>

    <h3 class="section-content_subtitle">{{ t('designPage.components.buttonsTitle') }}</h3>
    <div class="design-showcase_row">
      <button type="button" class="vesta-btn button-font">
        {{ t('designPage.components.buttonPrimary') }}
      </button>
      <button type="button" class="vesta-btn-secondary button-font">
        {{ t('designPage.components.buttonSecondary') }}
      </button>
    </div>

    <h3 class="section-content_subtitle">{{ t('designPage.components.inputsTitle') }}</h3>
    <div class="design-showcase_row">
      <input type="text" :placeholder="t('designPage.components.inputPlaceholder')" />
    </div>

    <h3 class="section-content_subtitle">{{ t('designPage.components.accordionTitle') }}</h3>
    <UIAccordion>
      <UIAccordionItem>
        <template #accordion-trigger>
          <div class="section-faq-trigger">
            <span class="links">{{ t('designPage.components.accordionTrigger') }}</span>
          </div>
        </template>
        <template #accordion-content>
          <li class="section-faq-answer">{{ t('designPage.components.accordionContent') }}</li>
        </template>
      </UIAccordionItem>
    </UIAccordion>

    <h3 class="section-content_subtitle">{{ t('designPage.components.linksTitle') }}</h3>
    <p class="section-content_text">{{ t('designPage.components.linksText') }}</p>
    <a class="link-arrow" href="#">
      {{ t('designPage.components.linkExample') }}
      <svg class="link-arrow_icon" aria-hidden="true">
        <use href="~/assets/svg/icons.svg#arrow-right" />
      </svg>
    </a>
  </div>
</template>
