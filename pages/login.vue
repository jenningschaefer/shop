<!--
  @file pages/login.vue
  @description Login, registration and guest order-lookup page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { fetch: refreshSession } = useUserSession()
const toast = useToast()

useHead({
  title: 'Login - Shop',
})

// Where to go after authenticating. Falls back to the account overview.
// Only accept internal, single-slash paths to avoid open-redirects.
function safeRedirect(fallback: string): string {
  const target = route.query.redirect
  if (typeof target === 'string' && /^\/(?!\/)/.test(target)) return target
  return fallback
}

// --- Login (prefilled with the mock account) ---------------------------------
const loginMail = ref('mail@mail.de')
const loginPassword = ref('Password1!')

async function onLogin() {
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: { mail: loginMail.value, password: loginPassword.value },
    })
    await refreshSession()
    await navigateTo(safeRedirect('/account/'))
  } catch {
    toast.error(t('auth.invalidLogin'))
  }
}

// --- Registration (written to a cookie instead of the DB) --------------------
const register = reactive({
  title: 'None',
  firstname: 'Max',
  lastname: 'Mustermann',
  mail: 'new.user@mail.de',
  password: 'Password1!',
  confirmPassword: 'Password1!',
})
async function onRegister() {
  if (register.password !== register.confirmPassword) {
    toast.error(t('auth.passwordMismatch'))
    return
  }
  try {
    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        title: register.title,
        firstname: register.firstname,
        lastname: register.lastname,
        mail: register.mail,
        password: register.password,
      },
    })
    await refreshSession()
    await navigateTo(safeRedirect('/account/'))
  } catch {
    toast.error(t('auth.registerFailed'))
  }
}

// --- Guest order lookup (prefilled with a valid order) -----------------------
const guestMail = ref('mail@mail.de')
const guestOrder = ref('000001')
const guestZip = ref('12345')

async function onGuestLookup() {
  try {
    await $fetch('/api/auth/guest', {
      method: 'POST',
      body: { mail: guestMail.value, orderId: guestOrder.value, zip: guestZip.value },
    })
    await refreshSession()
    await navigateTo(safeRedirect('/account/order-history'))
  } catch {
    toast.error(t('auth.orderNotFound'))
  }
}
</script>

<template>
  <div class="login">
    <h2 class="login_title">{{ t('auth.login') }}</h2>
    <div class="login_forms">
      <div class="login_account">
        <UITabs>
          <UITabItem active="true" :title="t('auth.login')">
            <form @submit.prevent="onLogin">
              <div class="login_forms-group">
                <input v-model="loginMail" type="email" :placeholder="t('auth.email')" />
                <input v-model="loginPassword" type="password" :placeholder="t('auth.password')" />
                <a class="login_forms-group-link" href="">
                  {{ t('auth.forgotPassword') }}
                  <svg class="login_forms-group-icon">
                    <use href="~/assets/svg/icons.svg#link" />
                  </svg>
                </a>
                <button class="vesta-btn" type="submit">{{ t('auth.login') }}</button>
              </div>
            </form>
          </UITabItem>
          <UITabItem :title="t('auth.register')">
            <form @submit.prevent="onRegister">
              <div class="login_forms-group">
                <select v-model="register.title">
                  <option value="" disabled>Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="None">None</option>
                </select>
                <input
                  v-model="register.firstname"
                  type="text"
                  :placeholder="t('address.firstName')"
                />
                <input
                  v-model="register.lastname"
                  type="text"
                  :placeholder="t('address.lastName')"
                />
                <input v-model="register.mail" type="email" :placeholder="t('auth.email')" />
                <input
                  v-model="register.password"
                  type="password"
                  :placeholder="t('auth.password')"
                />
                <p>{{ t('auth.passwordRequirements') }}</p>
                <input
                  v-model="register.confirmPassword"
                  type="password"
                  :placeholder="t('auth.confirmPassword')"
                />
                <label>
                  <input type="checkbox" checked />
                  I agree to the terms and conditions of Vesta. Information on data subject rights
                  and data protection regulations.
                </label>
                <label>
                  <input type="checkbox" checked />
                  Yes, I would like to receive the free newsletter.
                </label>
                <button class="vesta-btn" type="submit">{{ t('auth.register') }}</button>
              </div>
            </form>
          </UITabItem>
        </UITabs>
      </div>
      <hr class="login_seperator" />
      <div class="login_order">
        <form @submit.prevent="onGuestLookup">
          <div class="login_forms-group">
            <input v-model="guestMail" type="email" :placeholder="t('auth.email')" />
            <input v-model="guestOrder" type="text" :placeholder="t('order.orderNumber')" />
            <input v-model="guestZip" type="text" :placeholder="t('address.zip')" />
            <button class="vesta-btn" type="submit">{{ t('order.status') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
