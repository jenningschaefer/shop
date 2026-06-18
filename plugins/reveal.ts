/**
 * @file plugins/reveal.ts
 * @description `v-reveal` directive — fades elements in once they scroll into
 *   view. Pass an index as the binding value to stagger a group
 *   (e.g. `v-reveal="i"`); the delay is `index * step`. Respects
 *   prefers-reduced-motion by revealing immediately.
 *   Registered universally (not `.client`) so the directive resolves during
 *   SSR; the browser-only logic lives in the client-only `mounted` hook.
 * @author Jenning Schaefer
 * @license MIT
 */
import type { DirectiveBinding } from 'vue'
import { defineNuxtPlugin } from 'nuxt/app'

const STAGGER_STEP = 80 // ms between consecutive elements

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

function reveal(el: HTMLElement): void {
  el.classList.add('is-revealed')
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    // No server-rendered props: the element stays visible in SSR/no-JS output;
    // the reveal class is only applied client-side in `mounted`.
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
      el.classList.add('reveal')

      const index = typeof binding.value === 'number' ? binding.value : 0
      if (index > 0) {
        el.style.setProperty('--reveal-delay', `${index * STAGGER_STEP}ms`)
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
        reveal(el)
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(el)
              observer.disconnect()
              observers.delete(el)
              break
            }
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
      observers.set(el, observer)
    },
    unmounted(el: HTMLElement) {
      observers.get(el)?.disconnect()
      observers.delete(el)
    },
  })
})
