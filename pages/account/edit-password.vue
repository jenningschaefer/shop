<script setup>
definePageMeta({
    layout: 'account',
});
</script>

<template>
    <div class="account-password">
        <div class="account-user_link">
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#password" />
                    </svg>
                    <div class="account-link_name">Password</div>
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#arrow-left" />
                    </svg>
                </div>
            </NuxtLink>
        </div>
        <div class="account-password_form">
            <form action="">
                <div class="account-password_form-group">
                    <input class="" type="password" placeholder="Password">
                    <input class="" type="password" placeholder="Confirm Password">
                    <p>
                        Your password must have at least 8 characters with one number, one upper and one
                        lower case letter and one special character.
                    </p>
                </div>
                <div class="account-password_form-buttons">
                    <NuxtLink to="/account" class="">
                        <button class="vesta-btn" type="button">Save</button>
                    </NuxtLink>
                    <button class="vesta-btn" type="button">Discard Changes</button>
                </div>
            </form>
        </div>
    </div>
</template>