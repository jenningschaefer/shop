<script setup>
  const props = defineProps([ 'active' ]);
</script>

<template>
  <div class="tab" :class="(active == 'true') ? 'active' : ''" ref="tabs">
    <slot></slot>
  </div>
</template>