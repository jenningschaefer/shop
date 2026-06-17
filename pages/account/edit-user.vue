<!--
  @file pages/account/edit-user.vue
  @description Edit user profile page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const { user } = useUserSession()

// Prefill the form with the signed-in user's current profile.
const form = reactive({
  title: user.value?.title ?? 'None',
  firstname: user.value?.firstname ?? '',
  lastname: user.value?.lastname ?? '',
  mail: user.value?.mail ?? '',
  birthday: user.value?.birthday ?? '',
  language: user.value?.language ?? 'DE',
})

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
          <select v-model="form.title">
            <option value="" disabled>Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="None">None</option>
          </select>
          <input
            v-model="form.firstname"
            class=""
            type="text"
            :placeholder="t('address.firstName')"
          />
          <input
            v-model="form.lastname"
            class=""
            type="text"
            :placeholder="t('address.lastName')"
          />
          <input v-model="form.mail" class="" type="email" :placeholder="t('auth.email')" />
          <input v-model="form.birthday" class="" type="text" placeholder="Birthdate" />
          <select v-model="form.language">
            <option value="" disabled>{{ t('common.language') }}</option>
            <option value="DE">Deutsch</option>
            <option value="EN">English</option>
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
