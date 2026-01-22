/**
 * @file services/address/address.service.ts
 * @description Address service with business logic
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Address, AddressType } from '~/types'
import { BaseCrudService } from '../base.service'
import { AddressRepository, type IAddressRepository } from './address.repository'

/**
 * Address service handling all address-related business logic
 */
export class AddressService extends BaseCrudService<Address> {
  private static instance: AddressService | null = null

  private constructor(private readonly addressRepo: IAddressRepository) {
    super(addressRepo)
  }

  /**
   * Singleton pattern
   */
  static getInstance(): AddressService {
    if (!AddressService.instance) {
      AddressService.instance = new AddressService(AddressRepository.getInstance())
    }
    return AddressService.instance
  }

  /**
   * Get all addresses for a user
   */
  async getByUserId(userId: number): Promise<Address[]> {
    return this.addressRepo.findByUserId(userId)
  }

  /**
   * Get addresses by type (shipping/billing)
   */
  async getByType(userId: number, type: AddressType): Promise<Address[]> {
    return this.addressRepo.findByType(userId, type)
  }

  /**
   * Get default address for a type
   */
  async getDefault(userId: number, type: AddressType): Promise<Address | null> {
    return this.addressRepo.findDefault(userId, type)
  }

  /**
   * Set an address as default (unsets other defaults of same type)
   */
  async setAsDefault(addressId: number): Promise<Address | null> {
    const address = await this.findById(addressId)
    if (!address) return null

    // Unset other defaults of same type
    const sameTypeAddresses = await this.getByType(address.user_id, address.type)
    for (const addr of sameTypeAddresses) {
      if (addr.is_default && addr.id !== addressId) {
        await this.addressRepo.update(addr.id, { is_default: false })
      }
    }

    // Set this one as default
    return this.addressRepo.update(addressId, { is_default: true })
  }

  /**
   * Format address for display
   */
  formatAddress(address: Address): string {
    const lines = [
      `${address.firstname} ${address.name}`,
      `${address.street} ${address.house_no}`,
      `${address.zip_code} ${address.city}`,
      address.country,
    ]
    return lines.join('\n')
  }

  /**
   * Format address as single line
   */
  formatAddressLine(address: Address): string {
    return `${address.street} ${address.house_no}, ${address.zip_code} ${address.city}`
  }
}
