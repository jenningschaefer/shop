<!--
  @file pages/login.vue
  @description Login and registration page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Login - Shop',
})
</script>

<template>
  <div class="login">
    <h2 class="login_title">{{ t('auth.login') }}</h2>
    <div class="login_forms">
      <div class="login_account">
        <UITabs>
          <UITabItem active="true" :title="t('auth.login')">
            <form action="">
              <div class="login_forms-group">
                <input type="email" :placeholder="t('auth.email')" />
                <input type="password" :placeholder="t('auth.password')" />
                <a class="login_forms-group-link" href="">
                  {{ t('auth.forgotPassword') }}
                  <svg class="login_forms-group-icon">
                    <use href="~/assets/svg/icons.svg#link" />
                  </svg>
                </a>
                <NuxtLink to="/account/">
                  <button class="vesta-btn" type="button">{{ t('auth.login') }}</button>
                </NuxtLink>
              </div>
            </form>
          </UITabItem>
          <UITabItem :title="t('auth.register')">
            <form action="">
              <div class="login_forms-group">
                <select>
                  <option value="" disabled selected>Title</option>
                  <option value="1">Mr</option>
                  <option value="2">Mrs</option>
                  <option value="3">None</option>
                </select>
                <input type="text" :placeholder="t('address.firstName')" />
                <input type="text" :placeholder="t('address.lastName')" />
                <input type="text" :placeholder="t('auth.email')" />
                <input type="email" :placeholder="t('auth.confirmPassword')" />
                <input type="password" :placeholder="t('auth.password')" />
                <p>
                  Your password must have at least 8 characters with one number, one upper and one
                  lower case letter and one special character.
                </p>
                <input type="password" :placeholder="t('auth.confirmPassword')" />
                <label>
                  <input type="checkbox" checked />
                  I agree to the terms and conditions of Vesta. Information on data subject rights
                  and data protection regulations.
                </label>
                <label>
                  <input type="checkbox" checked />
                  Yes, I would like to receive the free newsletter.
                </label>
                <NuxtLink to="/account/">
                  <button class="vesta-btn" type="button">{{ t('auth.register') }}</button>
                </NuxtLink>
              </div>
            </form>
          </UITabItem>
        </UITabs>
      </div>
      <hr class="login_seperator" />
      <div class="login_order">
        <form action="">
          <div class="login_forms-group">
            <input type="email" :placeholder="t('auth.email')" />
            <input type="text" :placeholder="t('order.orderNumber')" />
            <input type="text" :placeholder="t('address.zip')" />
            <NuxtLink to="/account/order-id">
              <button class="vesta-btn" type="button">{{ t('order.status') }}</button>
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
