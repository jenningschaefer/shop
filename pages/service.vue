<!--
  @file pages/service.vue
  @description Service page - sticky side menu; the hash selects which content is shown
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import ServiceFaq from '~/components/Service/Faq.vue'
import ServiceShipping from '~/components/Service/Shipping.vue'
import ServicePayment from '~/components/Service/Payment.vue'
import ServiceImprint from '~/components/Service/Imprint.vue'
import ServicePrivacy from '~/components/Service/Privacy.vue'

const route = useRoute()

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

// Resolve a hash like "#faq" to a valid section id, falling back to the first one.
function resolveId(hash: string): string {
  const id = hash.replace('#', '')
  return sections.some((s) => s.id === id) ? id : sections[0].id
}

// Start on the default so server and initial client render match (the URL hash
// is never sent to the server). The hash is applied on the client after mount.
const activeId = ref(sections[0].id)

const activeComponent = computed(
  () => sections.find((s) => s.id === activeId.value)?.component ?? sections[0].component
)

onMounted(() => {
  activeId.value = resolveId(route.hash)
})

function select(id: string): void {
  activeId.value = id
  if (import.meta.client) {
    // Shareable URL (e.g. /service#faq) without triggering a router scroll.
    history.replaceState(history.state, '', `#${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Keep the shown content in sync with browser back/forward navigation.
watch(
  () => route.hash,
  (hash) => {
    activeId.value = resolveId(hash)
  }
)
</script>

<template>
  <div class="service">
    <ServiceMenu :sections="sections" :active="activeId" @select="select" />

    <div class="service_content-area">
      <Transition name="service-fade" mode="out-in">
        <component :is="activeComponent" :key="activeId" />
      </Transition>
    </div>
  </div>
</template>
