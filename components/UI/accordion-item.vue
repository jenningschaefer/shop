<!--
  @file components/UI/accordion-item.vue
  @description Individual accordion item component
  @author Jenning Schaefer
  @license MIT
-->
<script setup lang="ts">
interface AccordionState {
  count: number
  active: number | null
}

interface Props {
  /**
   * If true, this item will open by default (within its accordion instance).
   * Note: A single accordion only supports one open item at a time.
   */
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
})

const accordion = inject<Ref<AccordionState>>('Accordion')

if (!accordion) {
  throw new Error('AccordionItem must be used within an Accordion')
}

const index = accordion.value.count++

const visible = computed(() => index === accordion.value.active)

onMounted(() => {
  if (props.defaultOpen && accordion.value.active === null) {
    accordion.value.active = index
  }
})

function open(): void {
  if (visible.value) {
    accordion.value.active = null
  } else {
    accordion.value.active = index
  }
}

function start(el: Element): void {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = htmlEl.scrollHeight + 'px'
}

function end(el: Element): void {
  const htmlEl = el as HTMLElement
  htmlEl.style.height = ''
}
</script>

<template>
  <li class="accordion__item">
    <div class="accordion__trigger" :class="{ accordion__trigger_active: visible }" @click="open">
      <slot name="accordion-trigger" />
      <svg v-if="!visible" class="accordion__trigger_icon">
        <use href="~/assets/svg/icons.svg#plus" />
      </svg>
      <svg v-else class="accordion__trigger_icon">
        <use href="~/assets/svg/icons.svg#minus" />
      </svg>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible" class="accordion__content">
        <ul>
          <slot name="accordion-content" />
        </ul>
      </div>
    </transition>
  </li>
</template>

<style lang="scss" scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
  opacity: 0;
}
</style>
