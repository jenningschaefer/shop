<script setup>
  const props = defineProps([ 'active' ]);
</script>

<template>
  <div class="address-tab" :class="(active == 'true') ? 'active' : ''" ref="address-tabs">
    <div class="address-tab_heading">
      <slot name="heading"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>