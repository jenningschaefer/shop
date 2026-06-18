<!--
  @file components/Service/Menu.vue
  @description Service page navigation - sticky sidebar (desktop) and dropdown (mobile)
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface ServiceSection {
  id: string
  labelKey: string
}

defineProps<{
  sections: ServiceSection[]
  active: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const { t } = useI18n()

function onDropdownChange(event: Event): void {
  emit('select', (event.target as HTMLSelectElement).value)
}
</script>

<template>
  <div class="service_menu">
    <!-- Mobile: dropdown sticky under the navbar -->
    <select
      class="service_menu_dropdown input-dark"
      :value="active"
      :aria-label="t('servicePage.title')"
      @change="onDropdownChange"
    >
      <option v-for="section in sections" :key="section.id" :value="section.id">
        {{ t(section.labelKey) }}
      </option>
    </select>

    <!-- Desktop: sticky sidebar list -->
    <nav class="service_menu_list" :aria-label="t('servicePage.title')">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        class="service_menu_link"
        :class="{ 'service_menu_link--active': section.id === active }"
        @click.prevent="emit('select', section.id)"
      >
        {{ t(section.labelKey) }}
      </a>
    </nav>
  </div>
</template>
