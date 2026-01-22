<!--
  @file components/UI/dialog.vue
  @description Modal dialog component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const active = defineModel<boolean>()
</script>

<template>
  <div v-if="active" class="overlay" />
  <div v-if="active" class="dialog">
    <div class="dialog_header">
      <slot name="title" />
      <a class="closebtn" @click="active = false">
        <svg>
          <use href="~/assets/svg/icons.svg#close" />
        </svg>
      </a>
    </div>
    <div class="dialog_content">
      <slot name="content" />
    </div>
    <div class="dialog_footer">
      <slot name="footer" />
    </div>
  </div>
</template>
