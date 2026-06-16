/**
 * @file composables/useCheckoutPayments.ts
 * @description Single source of truth for checkout payment methods (name, numeric fee,
 *   description) plus locale-aware price formatting. Shared by the payment step and the
 *   order overview so the selected method and its fee stay in sync.
 * @author Jenning Schaefer
 * @license MIT
 */

import { computed } from 'vue'

export interface PaymentMethod {
  /** Display name */
  name: string
  /** Fee in currency units (numeric, used for totals) */
  fee: number
  /** Marketing description */
  description: string
}

export function useCheckoutPayments() {
  const { locale } = useI18n()
  const flow = useCheckoutFlow()

  const methods = computed<PaymentMethod[]>(() => [
    {
      name: 'Paypal',
      fee: 2.5,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      name: 'Credit Card',
      fee: 2.5,
      description:
        'We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. Your information is securely encrypted and protected.',
    },
    {
      name: 'Apple/Google Pay',
      fee: 2.5,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ])

  /** Index of the currently selected method, clamped to a valid range. */
  const selectedIndex = computed(() => {
    const i = flow.paymentIndex.value
    return i >= 0 && i < methods.value.length ? i : 0
  })

  const selectedMethod = computed<PaymentMethod>(() => methods.value[selectedIndex.value])

  /** Format an amount with the active locale's currency (de: "2,50 €", en: "$2.50"). */
  const format = (amount: number): string =>
    locale.value === 'de' ? `${amount.toFixed(2).replace('.', ',')} €` : `$${amount.toFixed(2)}`

  return { methods, selectedIndex, selectedMethod, format }
}
