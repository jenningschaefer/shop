<script setup></script>

<template>
    <div class="login">
        <h2 class="login_title">Welcome</h2>
        <div class="login_forms">
            <div class="login_account">
                <UITabs>
                    <UITab-item active="true" title="Login">
                        <input class="" type="text" placeholder="E-Mail Address">
                        <input class="" type="text" placeholder="Password">
                        <button class="vesta-btn" type="button">Login</button>
                    </UITab-item>
                    <UITab-item title="Register">
                        <input class="" type="text" placeholder="First Name">
                        <input class="" type="text" placeholder="Name">
                        <input class="" type="text" placeholder="E-Mail Address">
                        <input class="" type="text" placeholder="Repeat E-Mail Address">
                        <input class="" type="text" placeholder="Password">
                        <input class="" type="text" placeholder="Repeat Password">
                        <button class="vesta-btn" type="button">Login</button>
                    </UITab-item>
                </UITabs>
            </div>
            <hr class="login_seperator">
            <div class="login_order">
                <input class="" type="text" placeholder="E-Mail Address">
                <input class="" type="text" placeholder="Order No.">
                <input class="" type="text" placeholder="ZIP Code">
                <button class="vesta-btn" type="button">Order Status</button>
            </div>
        </div>
    </div>
</template>