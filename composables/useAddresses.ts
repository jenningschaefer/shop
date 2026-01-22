/**
 * @file composables/useAddresses.ts
 * @description Vue composables for address data access
 * @author Jenning Schaefer
 * @license MIT
 */

import { ref } from 'vue'
import type { Address, AddressType } from '~/types'
import { AddressService, AddressRepository } from '~/services'

// Get service instances
const addressService = AddressService.getInstance()
const addressRepo = AddressRepository.getInstance()

/**
 * Get an address by ID
 * @param id - Address ID
 * @returns Address or undefined if not found
 */
export function useAddress(id: number): Address | undefined {
  return addressRepo.getData().find((address) => address.id === id)
}

/**
 * Get all addresses for a user
 * @param userId - User ID
 * @returns User's addresses
 */
export function useAddressesByUser(userId: number): Address[] {
  return addressRepo.getData().filter((address) => address.user_id === userId)
}

/**
 * Get addresses by type
 * @param userId - User ID
 * @param type - Address type (shipping/billing)
 * @returns Filtered addresses
 */
export function useAddressesByType(userId: number, type: AddressType): Address[] {
  return addressRepo
    .getData()
    .filter((address) => address.user_id === userId && address.type === type)
}

/**
 * Reactive addresses composable with async loading
 */
export function useAddressesAsync(userId: number) {
  const addresses = ref<Address[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchAddresses(): Promise<void> {
    loading.value = true
    error.value = null
    try {
      addresses.value = await addressService.getByUserId(userId)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  async function fetchByType(type: AddressType): Promise<void> {
    loading.value = true
    error.value = null
    try {
      addresses.value = await addressService.getByType(userId, type)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  async function getDefault(type: AddressType): Promise<Address | null> {
    return addressService.getDefault(userId, type)
  }

  async function setAsDefault(addressId: number): Promise<void> {
    await addressService.setAsDefault(addressId)
    await fetchAddresses()
  }

  async function createAddress(address: Omit<Address, 'id'>): Promise<Address> {
    const newAddress = await addressService.create(address)
    await fetchAddresses()
    return newAddress
  }

  async function updateAddress(
    addressId: number,
    updates: Partial<Address>
  ): Promise<void> {
    await addressService.update(addressId, updates)
    await fetchAddresses()
  }

  async function deleteAddress(addressId: number): Promise<void> {
    await addressService.delete(addressId)
    await fetchAddresses()
  }

  return {
    addresses,
    loading,
    error,
    fetchAddresses,
    fetchByType,
    getDefault,
    setAsDefault,
    createAddress,
    updateAddress,
    deleteAddress,
  }
}

/**
 * Format address for display
 */
export function useFormatAddress(address: Address): string {
  return addressService.formatAddress(address)
}

/**
 * Format address as single line
 */
export function useFormatAddressLine(address: Address): string {
  return addressService.formatAddressLine(address)
}
