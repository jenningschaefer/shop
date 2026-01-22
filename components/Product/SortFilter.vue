<!--
  @file components/Product/SortFilter.vue
  @description Product sort and filter controls
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="sort-filter">
    <UIAccordion>
      <UIAccordionItem>
        <template #accordion-trigger>
          <div class="sort-filter_heading">
            <span class="links">{{ t('productList.sort') }}</span>
          </div>
        </template>
        <template #accordion-content>
          <ul class="sort-filter_list subtitle-small">
            <li>{{ t('productList.sortByPrice') }}</li>
            <li>{{ t('categories.all') }}</li>
          </ul>
        </template>
      </UIAccordionItem>

      <UIAccordionItem>
        <template #accordion-trigger>
          <div class="sort-filter_heading">
            <span class="links">{{ t('productList.filter') }}</span>
          </div>
        </template>
        <template #accordion-content>
          <ul class="sort-filter_list subtitle-small">
            <li>
              <NuxtLink to="/products/list/chairs">{{ t('categories.chairs') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/list/table">{{ t('categories.table') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/list/lighting">{{ t('categories.lighting') }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products/list/accessory">{{ t('categories.accessory') }}</NuxtLink>
            </li>
          </ul>
        </template>
      </UIAccordionItem>
    </UIAccordion>
    <button class="vesta-btn sort-filter_btn" type="button">{{ t('common.apply') }}</button>
  </div>
</template>
