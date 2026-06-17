<!--
  @file pages/account/edit-address.vue
  @description Edit address page
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const { user } = useUserSession()

// Resolve the user's own addresses (scoped by user_id) and prefill the default one.
const addresses = computed(() =>
  user.value?.user_id !== undefined ? useAddressesByUser(user.value.user_id) : []
)
const defaultAddress = computed(
  () => addresses.value.find((a) => a.id === user.value?.address_id_default) ?? addresses.value[0]
)

const form = reactive({
  street: '',
  house_no: '',
  zip_code: '',
  city: '',
  country: '',
})

watchEffect(() => {
  if (defaultAddress.value) {
    form.street = defaultAddress.value.street
    form.house_no = defaultAddress.value.house_no
    form.zip_code = defaultAddress.value.zip_code
    form.city = defaultAddress.value.city
    form.country = defaultAddress.value.country
  }
})

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
          <input v-model="form.street" class="" type="text" :placeholder="t('address.street')" />
          <input
            v-model="form.house_no"
            class=""
            type="text"
            :placeholder="t('checkout.houseNo')"
          />
          <input v-model="form.zip_code" class="" type="text" :placeholder="t('address.zip')" />
          <input v-model="form.city" class="" type="text" :placeholder="t('address.city')" />
          <select v-model="form.country">
            <option value="" disabled>{{ t('address.country') }}</option>
            <option value="Germany">Germany</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="US America">US America</option>
            <option value="Korea">Korea</option>
            <option value="Japan">Japan</option>
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
