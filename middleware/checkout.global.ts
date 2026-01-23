/**
 * @file middleware/checkout.global.ts
 * @description Guard checkout routes so the flow can only be entered from the cart and not deep-linked.
 * @author Jenning Schaefer
 * @license MIT
 */

export default defineNuxtRouteMiddleware((to) => {
  if (!to.path.startsWith('/checkout')) return

  const flow = useCheckoutFlow()

  // Must enter checkout via cart button
  if (!flow.enteredFromCart.value) {
    return navigateTo('/products/list')
  }

  // Step gating (no deep-linking forward)
  if (to.path.startsWith('/checkout/payment') && !flow.isAddressValid.value) {
    return navigateTo('/checkout/address')
  }

  if (
    to.path.startsWith('/checkout/overview') &&
    (!flow.isAddressValid.value || !flow.isPaymentValid.value)
  ) {
    return navigateTo('/checkout/payment')
  }

  if (
    to.path.startsWith('/checkout/confirmation') &&
    (!flow.isAddressValid.value ||
      !flow.isPaymentValid.value ||
      !flow.isOverviewValid.value ||
      !flow.orderPlaced.value)
  ) {
    return navigateTo('/checkout/overview')
  }
})
