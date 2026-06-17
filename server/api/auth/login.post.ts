/**
 * @file server/api/auth/login.post.ts
 * @description Authenticate an existing (mock) user and open a full-account session.
 * @author Jenning Schaefer
 * @license MIT
 */

import { UserRepository } from '~/services'
import type { User } from '~/types'
import { readRegisteredUser, toSessionUser } from './_registered'

export default defineEventHandler(async (event) => {
  const { mail, password } = await readBody<{ mail?: string; password?: string }>(event)

  if (!mail || !password) {
    throw createError({ statusCode: 400, statusMessage: 'Missing credentials' })
  }

  const email = mail.toLowerCase()

  // Mock auth: match by email only (any password is accepted for existing users).
  const users = UserRepository.getInstance().getData()
  const matches = users.filter((u) => u.mail.toLowerCase() === email)
  // Prefer a non-admin record so the demo logs in as the user that owns the seeded orders.
  let user: User | undefined = matches.find((u) => u.role !== 'admin') ?? matches[0]

  // Fall back to a previously registered user persisted in a cookie (mock DB).
  if (!user) {
    const registered = readRegisteredUser(event)
    if (registered && registered.mail.toLowerCase() === email) user = registered
  }

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'invalidLogin' })
  }

  await setUserSession(event, { user: toSessionUser(user) })

  return { ok: true }
})
