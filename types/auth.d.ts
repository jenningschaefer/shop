/**
 * @file types/auth.d.ts
 * @description Session type augmentation for nuxt-auth-utils.
 * @author Jenning Schaefer
 * @license MIT
 *
 * Two session tiers share one cookie, discriminated by `user.role`:
 * - 'user' / 'admin' → full account access (overview, profile, addresses, …)
 * - 'guest'          → no account; scoped to the order IDs in `guest.allowedOrderIds`
 */

import type { UserRole, UserTitle, Language } from '~/types'

declare module '#auth-utils' {
  /** The signed-in principal stored in the session cookie. */
  interface User {
    /** Account id (absent for guest sessions). */
    user_id?: number
    title?: UserTitle
    firstname?: string
    lastname?: string
    mail: string
    /** Birthday (YYYYMMDD). */
    birthday?: string
    language?: Language
    /** Default address id (used to resolve the user's address). */
    address_id_default?: number
    role: UserRole
  }

  /** Extra (non-secret) session data alongside `user`. */
  interface UserSession {
    /** Present only for guest sessions: the orders this guest may view. */
    guest?: {
      allowedOrderIds: string[]
    }
  }
}

export {}
