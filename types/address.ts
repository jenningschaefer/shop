/**
 * @file types/address.ts
 * @description Type definitions for addresses
 * @author Jenning Schaefer
 * @license MIT
 */

/**
 * Address type
 */
export type AddressType = 'delivery' | 'billing'

/**
 * Address entity
 */
export interface Address {
  /** Unique address identifier */
  id: number
  /** Owner user ID */
  user_id: number
  /** Address type (delivery or billing) */
  type: AddressType
  /** First name */
  firstname: string
  /** Last name */
  name: string
  /** Street name */
  street: string
  /** House number */
  house_no: string
  /** ZIP/Postal code */
  zip_code: string
  /** City */
  city: string
  /** Country */
  country: string
  /** Whether this is the default address */
  is_default?: boolean
}

/**
 * Address creation payload
 */
export interface CreateAddressPayload {
  user_id: number
  type: AddressType
  firstname: string
  name: string
  street: string
  house_no: string
  zip_code: string
  city: string
  country: string
}

/**
 * Address update payload
 */
export interface UpdateAddressPayload {
  type?: AddressType
  firstname?: string
  name?: string
  street?: string
  house_no?: string
  zip_code?: string
  city?: string
  country?: string
}
