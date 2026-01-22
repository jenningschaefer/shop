/**
 * @file composables/useAddresses.ts
 * @description Composables for address data access
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Address, AddressType } from '../types'
import addressesData from '../data/addresses.json'

// Type assertion for JSON import
const addresses = addressesData as Address[]

/**
 * Get an address by ID
 * @param id - Address ID
 * @returns Address or undefined if not found
 */
export function useAddress(id: number): Address | undefined {
  return addresses.find((address) => address.id === id)
}

/**
 * Get all addresses for a user
 * @param userId - User ID
 * @returns Array of addresses belonging to the user
 */
export function useAddressesByUser(userId: number): Address[] {
  return addresses.filter((address) => address.user_id === userId)
}

/**
 * Get addresses by type for a user
 * @param userId - User ID
 * @param type - Address type (delivery or billing)
 * @returns Filtered addresses
 */
export function useAddressesByType(
  userId: number,
  type: AddressType
): Address[] {
  return addresses.filter(
    (address) => address.user_id === userId && address.type === type
  )
}

/**
 * Get delivery addresses for a user
 * @param userId - User ID
 * @returns Delivery addresses
 */
export function useDeliveryAddresses(userId: number): Address[] {
  return useAddressesByType(userId, 'delivery')
}

/**
 * Get billing addresses for a user
 * @param userId - User ID
 * @returns Billing addresses
 */
export function useBillingAddresses(userId: number): Address[] {
  return useAddressesByType(userId, 'billing')
}
