/**
 * @file middleware/account.global.ts
 * @description Guard the /account area. Mirrors the pattern of checkout.global.ts.
 *   - No session            → redirect to /login
 *   - Full user (user/admin) → full access
 *   - Guest                  → only order-history and order detail pages they own
 * @author Jenning Schaefer
 * @license MIT
 */

export default defineNuxtRouteMiddleware((to) => {
  if (!to.path.startsWith('/account')) return

  const { loggedIn, user, session } = useUserSession()

  // Not authenticated at all → send to login, remembering where they wanted to go.
  if (!loggedIn.value) {
    return navigateTo({ path: '/login', query: { redirect: to.fullPath } })
  }

  // Full account users may access everything under /account.
  if (user.value?.role !== 'guest') return

  // Guests are limited to the order history and individual order pages.
  const isHistory = to.path.startsWith('/account/order-history')
  const orderId = to.params.id as string | undefined
  const isOrderDetail = !!orderId

  if (!isHistory && !isOrderDetail) {
    return navigateTo('/account/order-history')
  }

  // ...and only the orders explicitly unlocked via the lookup form (no IDOR).
  if (isOrderDetail && !session.value.guest?.allowedOrderIds.includes(orderId)) {
    return navigateTo('/account/order-history')
  }
})
