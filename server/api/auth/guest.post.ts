/**
 * @file server/api/auth/guest.post.ts
 * @description Guest order lookup: verify email + order number + zip against the order,
 *   then open a guest session scoped to that single order. No account required.
 * @author Jenning Schaefer
 * @license MIT
 */

import { OrderService, UserService, AddressService } from '~/services'

export default defineEventHandler(async (event) => {
  const { mail, orderId, zip } = await readBody<{
    mail?: string
    orderId?: string
    zip?: string
  }>(event)

  if (!mail || !orderId || !zip) {
    throw createError({ statusCode: 400, statusMessage: 'Missing lookup fields' })
  }

  const order = await OrderService.getInstance().getByOrderId(orderId)
  if (!order) {
    throw createError({ statusCode: 401, statusMessage: 'orderNotFound' })
  }

  // The order must match BOTH the owner's email and the shipping zip code.
  const owner = await UserService.getInstance().findById(order.user_id)
  const shippingAddress = await AddressService.getInstance().findById(order.shipping_address_id)

  const mailOk = owner?.mail.toLowerCase() === mail.toLowerCase()
  const zipOk = shippingAddress?.zip_code === zip

  if (!mailOk || !zipOk) {
    throw createError({ statusCode: 401, statusMessage: 'orderNotFound' })
  }

  await setUserSession(event, {
    user: { mail: mail.toLowerCase(), role: 'guest' },
    guest: { allowedOrderIds: [order.order_id] },
  })

  return { ok: true }
})
