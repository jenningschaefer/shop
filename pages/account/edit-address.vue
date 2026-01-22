<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
    layout: 'account',
})
</script>

<template>
    <div class="account-address">
        <div class="account-user_link">
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#home" />
                    </svg>
                    <div class="account-link_name">{{ t('account.addresses') }}</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-address_form">
            <form action="">
                <div class="account-address_form-group">
                    <input class="" type="text" :placeholder="t('address.street')">
                    <input class="" type="text" :placeholder="t('checkout.houseNo')">
                    <input class="" type="text" :placeholder="t('address.zip')">
                    <input class="" type="text" :placeholder="t('address.city')">
                    <select>
                        <option value="" disabled selected>{{ t('address.country') }}</option>
                        <option value="1">Germany</option>
                        <option value="2">United Kingdom</option>
                        <option value="2">US America</option>
                        <option value="3">Korea</option>
                        <option value="4">Japan</option>
                    </select>
                </div>
                <div class="account-address_form-buttons">
                    <NuxtLink to="/account" class="">
                        <button class="vesta-btn" type="button">{{ t('common.save') }}</button>
                    </NuxtLink>
                    <button class="vesta-btn" type="button">{{ t('common.cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
</template>
