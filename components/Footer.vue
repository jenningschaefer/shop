<!--
  @file components/Footer.vue
  @description Site footer with links and newsletter signup
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="footer">
    <div class="footer_link-container">
      <div class="footer_links">
        <NuxtLink to="/service" class="footer_links_link">
          <p class="links">{{ t('footer.service') }}</p>
          <svg class="footer_links_link_icon">
            <use href="~/assets/svg/icons.svg#link" />
          </svg>
        </NuxtLink>
        <NuxtLink to="/service#privacy" class="footer_links_link">
          <p class="links">{{ t('footer.legal') }}</p>
          <svg class="footer_links_link_icon">
            <use href="~/assets/svg/icons.svg#link" />
          </svg>
        </NuxtLink>
      </div>
      <div class="footer_links">
        <NuxtLink to="/service#payment" class="footer_links_link">
          <p class="links">{{ t('footer.payment') }}</p>
          <svg class="footer_links_link_icon">
            <use href="~/assets/svg/icons.svg#link" />
          </svg>
        </NuxtLink>
        <NuxtLink to="/design" class="footer_links_link">
          <p class="links">Design</p>
          <svg class="footer_links_link_icon">
            <use href="~/assets/svg/icons.svg#link" />
          </svg>
        </NuxtLink>
      </div>
    </div>
    <div class="footer_newsletter">
      <div class="subtitle-big">{{ t('footer.newsletter') }}</div>
      <div class="footer_newsletter_input">
        <input
          class="input-dark input-newsletter"
          type="text"
          :placeholder="t('footer.emailPlaceholder')"
        />
        <a>
          <svg class="footer_links_link_icon">
            <use href="~/assets/svg/icons.svg#link" />
          </svg>
        </a>
      </div>
      <div class="footer_newsletter_disclaimer">
        <small>{{ t('footer.disclaimer') }}</small>
      </div>
    </div>
  </div>
</template>
