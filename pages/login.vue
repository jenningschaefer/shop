<!--
  @file pages/login.vue
  @description Login and registration page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
useHead({
  title: 'Login - Shop',
})
</script>

<template>
  <div class="login">
    <h2 class="login_title">Welcome</h2>
    <div class="login_forms">
      <div class="login_account">
        <UITabs>
          <UITabItem active="true" title="Login">
            <form action="">
              <div class="login_forms-group">
                <input type="email" placeholder="E-Mail Address" />
                <input type="password" placeholder="Password" />
                <a class="login_forms-group-link" href="">
                  Forgot Password?
                  <svg class="login_forms-group-icon">
                    <use href="~/assets/svg/icons.svg#link" />
                  </svg>
                </a>
                <NuxtLink to="/account/">
                  <button class="vesta-btn" type="button">Login</button>
                </NuxtLink>
              </div>
            </form>
          </UITabItem>
          <UITabItem title="Register">
            <form action="">
              <div class="login_forms-group">
                <select>
                  <option value="" disabled selected>Title</option>
                  <option value="1">Mr</option>
                  <option value="2">Mrs</option>
                  <option value="3">None</option>
                </select>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="E-Mail Address" />
                <input type="email" placeholder="Confirm E-Mail" />
                <input type="password" placeholder="Password" />
                <p>
                  Your password must have at least 8 characters with one
                  number, one upper and one lower case letter and one special
                  character.
                </p>
                <input type="password" placeholder="Confirm Password" />
                <label>
                  <input type="checkbox" checked />
                  I agree to the terms and conditions of Vesta. Information on
                  data subject rights and data protection regulations.
                </label>
                <label>
                  <input type="checkbox" checked />
                  Yes, I would like to receive the free newsletter.
                </label>
                <NuxtLink to="/account/">
                  <button class="vesta-btn" type="button">Register</button>
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
            <input type="email" placeholder="E-Mail Address" />
            <input type="text" placeholder="Order No." />
            <input type="text" placeholder="ZIP Code" />
            <NuxtLink to="/account/order-id">
              <button class="vesta-btn" type="button">Order Status</button>
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
