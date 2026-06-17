/**
 * @file composables/useToast.ts
 * @description Global toast notifications (success / error) that slide in from the top
 * @author Jenning Schaefer
 * @license MIT
 */

export type ToastType = 'success' | 'error'

export interface Toast {
  id: number
  type: ToastType
  message: string
}

export interface ToastOptions {
  /** Auto-dismiss delay in ms; pass 0 to keep it until dismissed. Defaults to 4000. */
  duration?: number
}

// Module-level counter so ids stay unique across every useToast() call.
let nextId = 0

export function useToast() {
  // useState keeps a single shared toast queue across all components (same pattern as the checkout flow).
  const toasts = useState<Toast[]>('toasts', () => [])

  function remove(id: number): void {
    const index = toasts.value.findIndex((toast) => toast.id === id)
    if (index !== -1) toasts.value.splice(index, 1)
  }

  function show(type: ToastType, message: string, options: ToastOptions = {}): number {
    const id = nextId++
    toasts.value.push({ id, type, message })

    const duration = options.duration ?? 4000
    // Timers only make sense on the client; SSR just renders the initial (usually empty) queue.
    if (duration > 0 && import.meta.client) {
      window.setTimeout(() => remove(id), duration)
    }
    return id
  }

  const success = (message: string, options?: ToastOptions): number =>
    show('success', message, options)
  const error = (message: string, options?: ToastOptions): number => show('error', message, options)

  return { toasts, show, success, error, remove }
}
