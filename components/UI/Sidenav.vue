<!--
  @file components/UI/Sidenav.vue
  @description Slide-in side navigation panel
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const active = defineModel<boolean>()
</script>

<template>
  <div v-if="active" class="overlay" />
  <div id="mySidenav" class="sidenav" :class="active ? 'open' : ''">
    <div class="sidenav_title">
      <slot name="title" />
    </div>
    <a class="closebtn" @click="active = false">
      <svg>
        <use href="~/assets/svg/icons.svg#close" />
      </svg>
    </a>
    <div class="sidenav_content">
      <slot name="content" />
    </div>
  </div>
</template>
