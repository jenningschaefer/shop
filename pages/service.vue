<!--
  @file pages/service.vue
  @description Service page - sticky side menu; the hash selects which content is shown
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import ServiceFaq from '~/components/Service/Faq.vue'
import ServiceShipping from '~/components/Service/Shipping.vue'
import ServicePayment from '~/components/Service/Payment.vue'
import ServiceImprint from '~/components/Service/Imprint.vue'
import ServicePrivacy from '~/components/Service/Privacy.vue'

const { t } = useI18n()

definePageMeta({
  layout: 'service',
})

// Single source of truth: drives both the side menu and the shown content.
const sections = [
  { id: 'faq', labelKey: 'servicePage.nav.faq', component: ServiceFaq },
  { id: 'shipping', labelKey: 'servicePage.nav.shipping', component: ServiceShipping },
  { id: 'payment', labelKey: 'servicePage.nav.payment', component: ServicePayment },
  { id: 'imprint', labelKey: 'servicePage.nav.imprint', component: ServiceImprint },
  { id: 'privacy', labelKey: 'servicePage.nav.privacy', component: ServicePrivacy },
] as const

const { activeId, activeComponent, select } = useHashSections(sections)
</script>

<template>
  <div class="section-split">
    <UISectionMenu
      :sections="sections"
      :active="activeId"
      :aria-label="t('servicePage.title')"
      @select="select"
    />

    <div class="section-split_content">
      <Transition name="section-fade" mode="out-in">
        <component :is="activeComponent" :key="activeId" />
      </Transition>
    </div>
  </div>
</template>
