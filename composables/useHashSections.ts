/**
 * @file composables/useHashSections.ts
 * @description Hash-driven single-section navigation shared by the service and design pages.
 *   The URL hash (e.g. #faq) selects which section component is shown. The hash is never
 *   sent to the server, so SSR and the initial client render use `fallback`; the hash is
 *   applied on the client in onMounted to avoid a hydration mismatch.
 * @author Jenning Schaefer
 * @license MIT
 */
import { type Component, ref, computed, watch, onMounted } from 'vue'

export interface HashSection {
  id: string
  labelKey: string
  component: Component
}

interface UseHashSectionsOptions {
  /**
   * Initial/SSR value and the value used when the hash is empty or unknown.
   * Defaults to the first section's id. Pass `null` to allow a "no selection"
   * state (used by the design page to show its overview).
   */
  fallback?: string | null
}

export function useHashSections(
  sections: readonly HashSection[],
  options: UseHashSectionsOptions = {}
) {
  const route = useRoute()
  const fallback = options.fallback === undefined ? sections[0].id : options.fallback

  // Map a hash like "#faq" to a valid section id, otherwise fall back.
  function resolveId(hash: string): string | null {
    const id = hash.replace('#', '')
    return sections.some((s) => s.id === id) ? id : fallback
  }

  const activeId = ref<string | null>(fallback)

  const activeComponent = computed(
    () => sections.find((s) => s.id === activeId.value)?.component ?? null
  )

  onMounted(() => {
    activeId.value = resolveId(route.hash)
  })

  function select(id: string): void {
    // Empty id => clear selection (e.g. back to the design overview).
    activeId.value = id === '' ? null : id
    if (import.meta.client) {
      const url = id === '' ? window.location.pathname : `#${id}`
      history.replaceState(history.state, '', url)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Keep the shown content in sync with browser back/forward navigation.
  watch(
    () => route.hash,
    (hash) => {
      activeId.value = resolveId(hash)
    }
  )

  return { activeId, activeComponent, select }
}
