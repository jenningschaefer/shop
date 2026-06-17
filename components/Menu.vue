<!--
  @file components/Menu.vue
  @description Main menu component with category links
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const { loggedIn, clear } = useUserSession()

const emit = defineEmits<{ close: [] }>()

async function onLogout(): Promise<void> {
  emit('close')
  await clear()
  await navigateTo('/login')
}
</script>

<template>
  <div class="menu">
    <div class="menu_links">
      <NuxtLink to="/products/list/chairs" class="menu_links_link">
        <p>{{ t('categories.chairs') }}</p>
        <svg class="menu_links_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/table" class="menu_links_link">
        <p>{{ t('categories.table') }}</p>
        <svg class="menu_links_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/lighting" class="menu_links_link">
        <p>{{ t('categories.lighting') }}</p>
        <svg class="menu_links_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <NuxtLink to="/products/list/accessory" class="menu_links_link">
        <p>{{ t('categories.accessory') }}</p>
        <svg class="menu_links_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
    </div>
    <div class="menu_bottom">
      <div class="menu_bottom_newsletter">
        <div class="subtitle-big">{{ t('footer.newsletter') }}</div>
        <div class="menu_bottom_newsletter_input">
          <input class="input-newsletter" type="text" :placeholder="t('footer.emailPlaceholder')" />
          <a>
            <svg class="menu_bottom_newsletter_icon">
              <use href="~/assets/svg/icons.svg#link" />
            </svg>
          </a>
        </div>
      </div>
      <NuxtLink to="/products/list" class="menu_links_link">
        <p>DESIGN</p>
        <svg class="menu_links_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </NuxtLink>
      <button v-if="loggedIn" type="button" class="menu_links_link" @click="onLogout">
        <p>{{ t('auth.logout') }}</p>
        <svg class="menu_links_link_icon">
          <use href="~/assets/svg/icons.svg#link" />
        </svg>
      </button>
    </div>
  </div>
</template>
