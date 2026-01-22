<!--
  @file components/UI/tab-item.vue
  @description Individual tab panel component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface Props {
  active?: boolean | string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  title: '',
})

const isActive = computed(() => props.active === true || props.active === 'true')
</script>

<template>
  <div class="tab" :class="isActive ? 'active' : ''" :title="title">
    <slot />
  </div>
</template>
