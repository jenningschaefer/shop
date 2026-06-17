/**
 * @file server/api/auth/_registered.ts
 * @description Mock "database" for newly registered users: persist the record in a
 *   cookie instead of writing to the JSON data files. Leading underscore keeps this
 *   file out of the API route table.
 * @author Jenning Schaefer
 * @license MIT
 */

import type { H3Event } from 'h3'
import type { User } from '~/types'

/** Cookie that holds the most recently registered user (mock persistence). */
export const REGISTERED_USER_COOKIE = 'shop-registered-user'

/** Map a full user record to the profile stored in the session cookie. */
export function toSessionUser(user: User) {
  return {
    user_id: user.user_id,
    title: user.title,
    firstname: user.firstname,
    lastname: user.lastname,
    mail: user.mail,
    birthday: user.birthday,
    language: user.language,
    address_id_default: user.address_id_default,
    role: user.role,
  }
}

/** Persist a registered user in an httpOnly cookie (stands in for a DB insert). */
export function writeRegisteredUser(event: H3Event, user: User): void {
  setCookie(event, REGISTERED_USER_COOKIE, JSON.stringify(user), {
    httpOnly: true,
    sameSite: 'lax',
    secure: !import.meta.dev,
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
}

/** Read the registered user back from the cookie, if present and valid. */
export function readRegisteredUser(event: H3Event): User | null {
  const raw = getCookie(event, REGISTERED_USER_COOKIE)
  if (!raw) return null
  try {
    return JSON.parse(raw) as User
  } catch {
    return null
  }
}
