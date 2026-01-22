<!--
  @file components/UI/address-item.vue
  @description Individual address tab item component
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
  <div class="address-tab" :class="isActive ? 'active' : ''" :title="title">
    <div class="address-tab_heading">
      <slot name="heading" />
    </div>
    <div>
      <slot name="content" />
    </div>
  </div>
</template>
