<script setup>
definePageMeta({
    layout: 'account',
});
</script>

<template>
        <div class="account-address">
        <div>
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#home" />
                    </svg>
                    <div class="account-link_name">Address</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-address_form">
            <form action="">
                <div class="account-address_form-group">
                    <input class="" type="text" placeholder="Street">
                    <input class="" type="text" placeholder="House No.">
                    <input class="" type="text" placeholder="Zip Code">
                    <input class="" type="text" placeholder="City">
                    <select>
                        <option value="" disabled selected>Country</option>
                        <option value="1">Germany</option>
                        <option value="2">United Kingdom</option>
                        <option value="2">US America</option>
                        <option value="3">Korea</option>
                        <option value="4">Japan</option>
                    </select>
                    <!-- TODO Vorwahl + Phone -->
                </div>
                <div class="account-address_form-buttons">
                    <NuxtLink to="/account" class="">
                        <button class="vesta-btn" type="button">Save</button>
                    </NuxtLink>
                    <button class="vesta-btn" type="button">Discard Changes</button>
                </div>
            </form>
        </div>
    </div>
</template>