/**
 * @file server/api/auth/register.post.ts
 * @description Register a new user. Since the database is still a mock, the new
 *   record is written to a cookie instead of the JSON data files, then the user is
 *   logged in immediately.
 * @author Jenning Schaefer
 * @license MIT
 */

import type { RegisterUserPayload, User } from '~/types'
import { writeRegisteredUser, toSessionUser } from './_registered'

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<RegisterUserPayload>>(event)

  if (!body.mail || !body.password || !body.firstname || !body.lastname) {
    throw createError({ statusCode: 400, statusMessage: 'Missing registration fields' })
  }

  // Build the new user record (mock id, not persisted to the DB).
  const user: User = {
    id: Date.now(),
    user_id: Date.now(),
    role: 'user',
    title: body.title ?? 'None',
    firstname: body.firstname,
    lastname: body.lastname,
    mail: body.mail,
    birthday: body.birthday ?? '',
    language: body.language ?? 'DE',
    address_id_default: 0,
  }

  // Persist to a cookie instead of the database.
  writeRegisteredUser(event, user)

  // Log the new user in right away.
  await setUserSession(event, { user: toSessionUser(user) })

  return { ok: true }
})
