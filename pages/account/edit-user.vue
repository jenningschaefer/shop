<script setup>
definePageMeta({
    layout: 'account',
});
</script>

<template>
    <div class="account-user">
        <div>
            <NuxtLink to="/account" class="">
                <div class="account-link">
                    <svg class="account-link_icon">
                        <use href="~/assets/svg/icons.svg#user" />
                    </svg>
                    <div class="account-link_name">User Data</div>
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
                    <input class="" type="text" placeholder="First Name">
                    <input class="" type="text" placeholder="Name">
                    <input class="" type="email" placeholder="E-Mail Address">
                    <input class="" type="text" placeholder="Birthdate">
                    <select>
                        <option value="" disabled selected>Language</option>
                        <option value="1">German</option>
                        <option value="2">English</option>
                        <option value="3">Korean</option>
                        <option value="4">Japanese</option>
                    </select>
                    <!-- TODO Vorwahl + Phone -->
                </div>
                <div class="account-user_form-buttons">
                    <NuxtLink to="/account" class="">
                        <button class="vesta-btn" type="button">Save</button>
                    </NuxtLink>
                    <button class="vesta-btn" type="button">Discard Changes</button>
                </div>
            </form>
        </div>
    </div>
</template>