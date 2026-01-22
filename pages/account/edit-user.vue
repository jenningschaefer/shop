<!--
  @file pages/account/edit-user.vue
  @description Edit user profile page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  layout: 'account',
})
</script>

<template>
  <div class="account-user">
    <div class="account-user_link">
      <NuxtLink to="/account" class="">
        <div class="account-link">
          <svg class="account-link_icon">
            <use href="~/assets/svg/icons.svg#user" />
          </svg>
          <div class="account-link_name">{{ t('account.profile') }}</div>
          <svg class="account-link_icon">
            <use href="~/assets/svg/icons.svg#arrow-left" />
          </svg>
        </div>
      </NuxtLink>
    </div>
    <div class="account-user_form">
      <form action="">
        <div class="account-user_form-group">
          <select>
            <option value="" disabled selected>Title</option>
            <option value="1">Mr</option>
            <option value="2">Mrs</option>
            <option value="3">None</option>
          </select>
          <input class="" type="text" :placeholder="t('address.firstName')" />
          <input class="" type="text" :placeholder="t('address.lastName')" />
          <input class="" type="email" :placeholder="t('auth.email')" />
          <input class="" type="text" placeholder="Birthdate" />
          <select>
            <option value="" disabled selected>{{ t('common.language') }}</option>
            <option value="1">Deutsch</option>
            <option value="2">English</option>
          </select>
        </div>
        <div class="account-user_form-buttons">
          <NuxtLink to="/account" class="">
            <button class="vesta-btn" type="button">{{ t('common.save') }}</button>
          </NuxtLink>
          <button class="vesta-btn" type="button">{{ t('common.cancel') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>
