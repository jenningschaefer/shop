<!--
  @file components/UI/LanguageSwitcher.vue
  @description Language switcher component for i18n
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name: string }>).filter(
    (l) => l.code !== locale.value
  )
})

function switchLocale(code: string): void {
  setLocale(code)
}
</script>

<template>
  <div class="language-switcher">
    <button
      v-for="loc in availableLocales"
      :key="loc.code"
      class="language-switcher_btn"
      :title="loc.name"
      @click="switchLocale(loc.code)"
    >
      {{ loc.code.toUpperCase() }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;

  &_btn {
    background: transparent;
    border: 1px solid currentColor;
    color: inherit;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:hover {
      background: var(--color-primary, #000);
      color: var(--color-bg, #fff);
    }
  }
}
</style>
