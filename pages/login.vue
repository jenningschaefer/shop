<script setup></script>

<template>
    <div class="login">
        <h2 class="login_title">Welcome</h2>
        <div class="login_forms">
            <div class="login_account">
                <UITabs>
                    <UITab-item active="true" title="Login">
                        <form action="">
                            <div class="login_forms-group">
                                <input class="" type="email" placeholder="E-Mail Address">
                                <input class="" type="password" placeholder="Password">
                                <a class="login_forms-group-link" href="">Forgot Password?
                                    <svg class="login_forms-group-icon">
                                        <use href="~/assets/svg/icons.svg#link" />
                                    </svg>
                                </a>
                                <NuxtLink to="/account/">
                                    <button class="vesta-btn" type="button">Login</button>
                                </NuxtLink>
                            </div>
                        </form>
                    </UITab-item>
                    <UITab-item title="Register">
                        <form action="">
                            <div class="login_forms-group">
                                <select>
                                    <option value="" disabled selected>Title</option>
                                    <option value="1">Mr</option>
                                    <option value="2">Mrs</option>
                                    <option value="3">None</option>
                                </select>
                                <input class="" type="text" placeholder="First Name">
                                <input class="" type="text" placeholder="Name">
                                <input class="" type="text" placeholder="E-Mail Address">
                                <input class="" type="email" placeholder="Confirm E-Mail">
                                <input class="" type="password" placeholder="Password">
                                <p>
                                    Your password must have at least 8 characters with one number, one upper and one
                                    lower case letter and one special character.
                                </p>
                                <input class="" type="password" placeholder="Confirm Password">
                                <label>
                                    <input type="checkbox" checked="checked">
                                    I agree to the terms and conditions of Vesta. Information on data subject rights
                                    and data protection regulations.
                                </label>
                                <label>
                                    <input type="checkbox" checked="checked">
                                    Yes, I would like to receive the free newsletter.
                                </label>
                                <NuxtLink to="/account/">
                                    <button class="vesta-btn" type="button">Register</button>
                                </NuxtLink>
                            </div>
                        </form>
                    </UITab-item>
                </UITabs>
            </div>
            <hr class="login_seperator">
            <div class="login_order">
                <form action="">
                    <div class="login_forms-group">
                        <input class="" type="email" placeholder="E-Mail Address">
                        <input class="" type="text" placeholder="Order No.">
                        <input class="" type="text" placeholder="ZIP Code">
                        <NuxtLink to="/account/order-id">
                            <button class="vesta-btn" type="button">Order Status</button>
                        </NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>