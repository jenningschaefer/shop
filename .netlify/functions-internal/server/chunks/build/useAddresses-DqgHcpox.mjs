import { J as JsonRepository } from './base.repository-B5mBvhdh.mjs';

class BaseService {
  constructor(repository) {
    this.repository = repository;
  }
  /**
   * Get all entities
   */
  async getAll() {
    return this.repository.findAll();
  }
  /**
   * Get entity by ID
   * @throws Error if entity not found
   */
  async getById(id) {
    const entity = await this.repository.findById(id);
    if (!entity) {
      throw new Error(`Entity with id ${id} not found`);
    }
    return entity;
  }
  /**
   * Get entity by ID or null
   */
  async findById(id) {
    return this.repository.findById(id);
  }
}
class BaseCrudService extends BaseService {
  constructor(repository) {
    super(repository);
    this.repository = repository;
  }
  /**
   * Create a new entity
   */
  async create(entity) {
    return this.repository.create(entity);
  }
  /**
   * Update an entity
   * @throws Error if entity not found
   */
  async update(id, entity) {
    const updated = await this.repository.update(id, entity);
    if (!updated) {
      throw new Error(`Entity with id ${id} not found`);
    }
    return updated;
  }
  /**
   * Delete an entity
   * @throws Error if entity not found
   */
  async delete(id) {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new Error(`Entity with id ${id} not found`);
    }
  }
}
const addressesData = [
  {
    id: 0,
    user_id: 1,
    type: "delivery",
    firstname: "Jenning",
    name: "Schaefer",
    street: "Street",
    house_no: "5",
    zip_code: "12345",
    city: "Mainheim",
    country: "Germany"
  },
  {
    id: 1,
    user_id: 1,
    type: "billing",
    firstname: "Jenning",
    name: "Schaefer",
    street: "Street",
    house_no: "5",
    zip_code: "12345",
    city: "Mainheim",
    country: "Germany"
  }
];
class AddressRepository extends JsonRepository {
  static instance = null;
  constructor() {
    super(addressesData);
  }
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!AddressRepository.instance) {
      AddressRepository.instance = new AddressRepository();
    }
    return AddressRepository.instance;
  }
  async findByUserId(userId) {
    await this.simulateDelay();
    return this.data.filter((address) => address.user_id === userId);
  }
  async findByType(userId, type) {
    await this.simulateDelay();
    return this.data.filter((address) => address.user_id === userId && address.type === type);
  }
  async findDefault(userId, type) {
    await this.simulateDelay();
    return this.data.find(
      (address) => address.user_id === userId && address.type === type && address.is_default
    ) ?? null;
  }
}
class AddressService extends BaseCrudService {
  constructor(addressRepo2) {
    super(addressRepo2);
    this.addressRepo = addressRepo2;
  }
  static instance = null;
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!AddressService.instance) {
      AddressService.instance = new AddressService(AddressRepository.getInstance());
    }
    return AddressService.instance;
  }
  /**
   * Get all addresses for a user
   */
  async getByUserId(userId) {
    return this.addressRepo.findByUserId(userId);
  }
  /**
   * Get addresses by type (shipping/billing)
   */
  async getByType(userId, type) {
    return this.addressRepo.findByType(userId, type);
  }
  /**
   * Get default address for a type
   */
  async getDefault(userId, type) {
    return this.addressRepo.findDefault(userId, type);
  }
  /**
   * Set an address as default (unsets other defaults of same type)
   */
  async setAsDefault(addressId) {
    const address = await this.findById(addressId);
    if (!address) return null;
    const sameTypeAddresses = await this.getByType(address.user_id, address.type);
    for (const addr of sameTypeAddresses) {
      if (addr.is_default && addr.id !== addressId) {
        await this.addressRepo.update(addr.id, { is_default: false });
      }
    }
    return this.addressRepo.update(addressId, { is_default: true });
  }
  /**
   * Format address for display
   */
  formatAddress(address) {
    const lines = [
      `${address.firstname} ${address.name}`,
      `${address.street} ${address.house_no}`,
      `${address.zip_code} ${address.city}`,
      address.country
    ];
    return lines.join("\n");
  }
  /**
   * Format address as single line
   */
  formatAddressLine(address) {
    return `${address.street} ${address.house_no}, ${address.zip_code} ${address.city}`;
  }
}
AddressService.getInstance();
const addressRepo = AddressRepository.getInstance();
function useAddress(id) {
  return addressRepo.getData().find((address) => address.id === id);
}
function useAddressesByUser(userId) {
  return addressRepo.getData().filter((address) => address.user_id === userId);
}

export { useAddress as a, useAddressesByUser as u };
//# sourceMappingURL=useAddresses-DqgHcpox.mjs.map
