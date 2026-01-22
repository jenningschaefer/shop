/**
 * @file types/user.ts
 * @description Type definitions for users
 * @author Jenning Schaefer
 * @license MIT
 */

/**
 * User role types
 */
export type UserRole = 'admin' | 'user' | 'guest'

/**
 * User title/salutation
 */
export type UserTitle = 'Mr' | 'Mrs' | 'Ms' | 'Dr' | 'None'

/**
 * Supported languages
 */
export type Language = 'DE' | 'EN'

/**
 * User entity
 */
export interface User {
  /** Unique user identifier (alias for user_id for repository compatibility) */
  id: number
  /** Unique user identifier */
  user_id: number
  /** User role */
  role: UserRole
  /** Title/salutation */
  title: UserTitle
  /** First name */
  firstname: string
  /** Last name */
  lastname: string
  /** Email address */
  mail: string
  /** Birthday (YYYYMMDD format) */
  birthday: string
  /** Preferred language */
  language: Language
  /** Default address ID */
  address_id_default: number
}

/**
 * User registration payload
 */
export interface RegisterUserPayload {
  title: UserTitle
  firstname: string
  lastname: string
  mail: string
  password: string
  birthday?: string
  language: Language
}

/**
 * User login payload
 */
export interface LoginPayload {
  mail: string
  password: string
}

/**
 * User update payload
 */
export interface UpdateUserPayload {
  title?: UserTitle
  firstname?: string
  lastname?: string
  mail?: string
  birthday?: string
  language?: Language
  address_id_default?: number
}

/**
 * Password change payload
 */
export interface ChangePasswordPayload {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}
