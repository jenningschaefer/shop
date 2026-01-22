<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
    layout: 'account',
})
</script>

<template>
    <div class="account-password">
        <div class="account-user_link">
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#password" />
                    </svg>
                    <div class="account-link_name">{{ t('account.changePassword') }}</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-password_form">
            <form action="">
                <div class="account-password_form-group">
                    <input class="" type="password" :placeholder="t('auth.password')">
                    <input class="" type="password" :placeholder="t('auth.confirmPassword')">
                    <p>{{ t('auth.passwordRequirements') }}</p>
                </div>
                <div class="account-password_form-buttons">
                    <NuxtLink to="/account" class="">
                        <button class="vesta-btn" type="button">{{ t('common.save') }}</button>
                    </NuxtLink>
                    <button class="vesta-btn" type="button">{{ t('common.cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
</template>
