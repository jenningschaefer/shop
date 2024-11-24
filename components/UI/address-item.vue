<script setup>
  const props = defineProps([ 'active' ]);
</script>

<template>
  <div class="address-tab" :class="(active == 'true') ? 'active' : ''" ref="address-tabs">
    <slot></slot>
  </div>
</template>