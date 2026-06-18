<!--
  @file pages/design.vue
  @description Design page - a designed overview of boxes (no hash); selecting one opens
    that section in the same sticky side-menu split view as the service page.
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
import DesignPhilosophy from '~/components/Design/Philosophy.vue'
import DesignTech from '~/components/Design/Tech.vue'
import DesignStructure from '~/components/Design/Structure.vue'
import DesignColors from '~/components/Design/Colors.vue'
import DesignComponents from '~/components/Design/Components.vue'

const { t } = useI18n()

definePageMeta({
  layout: 'service',
})

// Single source of truth: drives the overview boxes, the side menu and the content.
const sections = [
  { id: 'philosophy', labelKey: 'designPage.nav.philosophy', component: DesignPhilosophy },
  { id: 'tech', labelKey: 'designPage.nav.tech', component: DesignTech },
  { id: 'structure', labelKey: 'designPage.nav.structure', component: DesignStructure },
  { id: 'colors', labelKey: 'designPage.nav.colors', component: DesignColors },
  { id: 'components', labelKey: 'designPage.nav.components', component: DesignComponents },
] as const

// fallback: null => no hash shows the overview instead of a default section.
const { activeId, activeComponent, select } = useHashSections(sections, { fallback: null })
</script>

<template>
  <div>
    <!-- No hash: designed overview grid of boxes -->
    <DesignOverview v-if="activeId === null" :sections="sections" @select="select" />

    <!-- A section is selected: service-style split view with the shared menu -->
    <div v-else class="section-split">
      <UISectionMenu
        :sections="sections"
        :active="activeId"
        :aria-label="t('designPage.title')"
        show-arrow
        overview-label-key="designPage.nav.overview"
        @select="select"
      />

      <div class="section-split_content">
        <Transition name="section-fade" mode="out-in">
          <component :is="activeComponent" :key="activeId" />
        </Transition>
      </div>
    </div>
  </div>
</template>
