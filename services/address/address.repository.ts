/**
 * @file services/address/address.repository.ts
 * @description Address repository implementation
 * @author Jenning Schaefer
 * @license MIT
 */

import type { Address, AddressType } from '~/types'
import { JsonRepository, type IRepository } from '../base.repository'
import addressesData from '~/data/addresses.json'

/**
 * Extended repository interface for addresses
 */
export interface IAddressRepository extends IRepository<Address> {
  findByUserId(userId: number): Promise<Address[]>
  findByType(userId: number, type: AddressType): Promise<Address[]>
  findDefault(userId: number, type: AddressType): Promise<Address | null>
}

/**
 * JSON-based address repository
 */
export class AddressRepository extends JsonRepository<Address> implements IAddressRepository {
  private static instance: AddressRepository | null = null

  private constructor() {
    super(addressesData as Address[])
  }

  /**
   * Singleton pattern
   */
  static getInstance(): AddressRepository {
    if (!AddressRepository.instance) {
      AddressRepository.instance = new AddressRepository()
    }
    return AddressRepository.instance
  }

  async findByUserId(userId: number): Promise<Address[]> {
    await this.simulateDelay()
    return this.data.filter((address) => address.user_id === userId)
  }

  async findByType(userId: number, type: AddressType): Promise<Address[]> {
    await this.simulateDelay()
    return this.data.filter((address) => address.user_id === userId && address.type === type)
  }

  async findDefault(userId: number, type: AddressType): Promise<Address | null> {
    await this.simulateDelay()
    return (
      this.data.find(
        (address) => address.user_id === userId && address.type === type && address.is_default
      ) ?? null
    )
  }
}
