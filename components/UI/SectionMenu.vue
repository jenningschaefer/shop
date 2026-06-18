<!--
  @file components/UI/SectionMenu.vue
  @description Generic section navigation - sticky sidebar (desktop) and dropdown (mobile).
    Shared by the service and design pages. Optionally shows a trailing arrow on links and a
    leading "overview" entry (used by the design page to return to its overview).
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface MenuSection {
  id: string
  labelKey: string
}

withDefaults(
  defineProps<{
    sections: readonly MenuSection[]
    active: string | null
    ariaLabel?: string
    showArrow?: boolean
    overviewLabelKey?: string
  }>(),
  {
    ariaLabel: undefined,
    showArrow: false,
    overviewLabelKey: undefined,
  }
)

const emit = defineEmits<{
  select: [id: string]
}>()

const { t } = useI18n()

function onDropdownChange(event: Event): void {
  emit('select', (event.target as HTMLSelectElement).value)
}
</script>

<template>
  <div class="section-menu">
    <!-- Mobile: dropdown sticky under the navbar -->
    <select
      class="section-menu_dropdown"
      :value="active ?? ''"
      :aria-label="ariaLabel"
      @change="onDropdownChange"
    >
      <option v-if="overviewLabelKey" value="">{{ t(overviewLabelKey) }}</option>
      <option v-for="section in sections" :key="section.id" :value="section.id">
        {{ t(section.labelKey) }}
      </option>
    </select>

    <!-- Desktop: sticky sidebar list -->
    <nav class="section-menu_list" :aria-label="ariaLabel">
      <a
        v-if="overviewLabelKey"
        href="#"
        class="section-menu_link"
        :class="{ 'section-menu_link--active': active === null }"
        @click.prevent="emit('select', '')"
      >
        {{ t(overviewLabelKey) }}
        <svg v-if="showArrow" class="section-menu_arrow" aria-hidden="true">
          <use href="~/assets/svg/icons.svg#arrow-right" />
        </svg>
      </a>
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        class="section-menu_link"
        :class="{ 'section-menu_link--active': section.id === active }"
        @click.prevent="emit('select', section.id)"
      >
        {{ t(section.labelKey) }}
        <svg v-if="showArrow" class="section-menu_arrow" aria-hidden="true">
          <use href="~/assets/svg/icons.svg#arrow-right" />
        </svg>
      </a>
    </nav>
  </div>
</template>
