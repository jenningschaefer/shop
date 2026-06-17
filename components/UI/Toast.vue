<!--
  @file components/UI/Toast.vue
  @description Global toast stack: success / error messages sliding in from the top
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
const { t } = useI18n()
const { toasts, remove } = useToast()
</script>

<template>
  <Teleport to="body">
    <div class="toast-stack" aria-live="polite" aria-atomic="false">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="toast"
          :class="`toast--${toast.type}`"
          role="status"
        >
          <span class="toast_status" aria-hidden="true">
            <svg v-if="toast.type === 'success'" class="toast_status_icon">
              <use href="~/assets/svg/icons.svg#check" />
            </svg>
            <svg v-else class="toast_status_icon">
              <use href="~/assets/svg/icons.svg#close" />
            </svg>
          </span>
          <p class="toast_message">{{ toast.message }}</p>
          <button
            type="button"
            class="toast_close"
            :aria-label="t('common.close')"
            @click="remove(toast.id)"
          >
            <svg class="toast_close_icon" aria-hidden="true">
              <use href="~/assets/svg/icons.svg#close" />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
