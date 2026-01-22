<!--
  @file components/UI/address-tabs.vue
  @description Address selection tabs component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface Props {
  customClass?: string
}

defineProps<Props>()

const tabContainer = ref<HTMLElement | null>(null)
const tabHeaders = ref<HTMLElement[]>([])
const tabs = ref<HTMLElement[]>([])
const activeTabIndex = ref(0)

onMounted(() => {
  if (!tabContainer.value) return

  tabs.value = [
    ...tabContainer.value.querySelectorAll('.address-tab'),
  ] as HTMLElement[]

  for (const [index, tab] of tabs.value.entries()) {
    if (tab.classList.contains('active')) {
      activeTabIndex.value = index
    }
  }
})

function changeTab(index: number): void {
  activeTabIndex.value = index

  for (const el of [...tabs.value, ...tabHeaders.value]) {
    el.classList.remove('active')
  }

  tabs.value[activeTabIndex.value]?.classList.add('active')
  tabHeaders.value[activeTabIndex.value]?.classList.add('active')
}
</script>

<template>
  <div
    id="tabs-container"
    ref="tabContainer"
    class="address-tabs"
    :class="customClass"
  >
    <div id="tab-headers" class="address-tabs_headers">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          ref="tabHeaders"
          :class="activeTabIndex === index ? 'active' : ''"
          @click="changeTab(index)"
        >
          <h5>{{ (tab as HTMLElement).title }}</h5>
        </li>
      </ul>
    </div>
    <div id="active-tab" class="address-tabs_active">
      <slot />
    </div>
  </div>
</template>
