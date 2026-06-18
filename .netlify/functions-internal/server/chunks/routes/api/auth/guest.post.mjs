import { d as defineEventHandler, r as readBody, c as createError, s as setUserSession } from '../../../nitro/nitro.mjs';
import { J as JsonRepository, U as UserRepository } from '../../../_/user.repository.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';

/**
 * @file services/base.service.ts
 * @description Abstract base service with common functionality
 * @author Jenning Schaefer
 * @license MIT
 */
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

const ordersData = [
	{
		order_id: "000001",
		user_id: 1,
		status: "Delivered",
		order_date: "20250112",
		shipping_date: "20250112",
		shipping_address_id: 0,
		billing_address_id: 0,
		delivery_type: "Standard DE",
		delivery_time: "1-3 days",
		products: [
			{
				id: 2,
				price: "75.00",
				amount: 1
			},
			{
				id: 5,
				price: "75.00",
				amount: 1
			}
		],
		payment_type: "Credit Card",
		sum: "150.11",
		shipping: "4.21",
		currency: "dollar",
		invoice_pdf: ""
	},
	{
		order_id: "000002",
		user_id: 1,
		status: "Delivered",
		order_date: "20250112",
		shipping_date: "20250112",
		shipping_address_id: 0,
		billing_address_id: 0,
		delivery_type: "Standard DE",
		delivery_time: "1-3 days",
		products: [
			{
				id: 1,
				price: "75.00",
				amount: 1
			},
			{
				id: 5,
				price: "75.00",
				amount: 2
			}
		],
		payment_type: "Apple Pay",
		sum: "150.00",
		shipping: "4.00",
		currency: "dollar",
		invoice_pdf: ""
	}
];

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, key + "" , value);
const _OrderRepository = class _OrderRepository extends JsonRepository {
  constructor() {
    const mappedData = ordersData.map((order) => ({
      ...order,
      id: order.order_id
    }));
    super(mappedData);
  }
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!_OrderRepository.instance) {
      _OrderRepository.instance = new _OrderRepository();
    }
    return _OrderRepository.instance;
  }
  async findByUserId(userId) {
    await this.simulateDelay();
    return this.data.filter((order) => order.user_id === userId);
  }
  async findByOrderId(orderId) {
    var _a;
    await this.simulateDelay();
    return (_a = this.data.find((order) => order.order_id === orderId)) != null ? _a : null;
  }
  /**
   * Override to use string-based ID generation
   */
  generateId() {
    if (this.data.length === 0) return "000001";
    const maxId = Math.max(...this.data.map((order) => parseInt(order.order_id, 10)));
    return String(maxId + 1).padStart(6, "0");
  }
};
__publicField$4(_OrderRepository, "instance", null);
let OrderRepository = _OrderRepository;

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, key + "" , value);
const _OrderService = class _OrderService {
  constructor(orderRepo) {
    this.orderRepo = orderRepo;
  }
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!_OrderService.instance) {
      _OrderService.instance = new _OrderService(OrderRepository.getInstance());
    }
    return _OrderService.instance;
  }
  /**
   * Get all orders
   */
  async getAll() {
    return this.orderRepo.findAll();
  }
  /**
   * Get order by order ID
   */
  async getByOrderId(orderId) {
    return this.orderRepo.findByOrderId(orderId);
  }
  /**
   * Get orders for a specific user
   */
  async getByUserId(userId) {
    return this.orderRepo.findByUserId(userId);
  }
  /**
   * Get recent orders for a user
   */
  async getRecentOrders(userId, limit = 5) {
    const orders = await this.getByUserId(userId);
    return orders.sort((a, b) => b.order_date.localeCompare(a.order_date)).slice(0, limit);
  }
  /**
   * Get orders by status
   */
  async getByStatus(userId, status) {
    const orders = await this.getByUserId(userId);
    return orders.filter((order) => order.status === status);
  }
  /**
   * Calculate order total including shipping
   */
  calculateTotal(order) {
    const sum = parseFloat(order.sum);
    const shipping = parseFloat(order.shipping);
    return sum + shipping;
  }
  /**
   * Format order date for display
   */
  formatOrderDate(dateString) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${day}.${month}.${year}`;
  }
};
__publicField$3(_OrderService, "instance", null);
let OrderService = _OrderService;

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, key + "" , value);
const _UserService = class _UserService extends BaseService {
  constructor(userRepo) {
    super(userRepo);
    this.userRepo = userRepo;
  }
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!_UserService.instance) {
      _UserService.instance = new _UserService(UserRepository.getInstance());
    }
    return _UserService.instance;
  }
  /**
   * Get user by email address
   */
  async getByEmail(email) {
    return this.userRepo.findByEmail(email);
  }
  /**
   * Validate user credentials (mock implementation)
   * In real app, would verify password hash
   */
  async validateCredentials(email, _password) {
    const user = await this.getByEmail(email);
    return user;
  }
  /**
   * Get user display name
   */
  getDisplayName(user) {
    return `${user.firstname} ${user.lastname}`;
  }
  /**
   * Check if user has complete profile
   * Note: Address fields are checked separately via AddressService
   */
  hasCompleteProfile(user) {
    return !!(user.firstname && user.lastname && user.mail && user.birthday);
  }
};
__publicField$2(_UserService, "instance", null);
let UserService = _UserService;

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

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, key + "" , value);
const _AddressRepository = class _AddressRepository extends JsonRepository {
  constructor() {
    super(addressesData);
  }
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!_AddressRepository.instance) {
      _AddressRepository.instance = new _AddressRepository();
    }
    return _AddressRepository.instance;
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
    var _a;
    await this.simulateDelay();
    return (_a = this.data.find(
      (address) => address.user_id === userId && address.type === type && address.is_default
    )) != null ? _a : null;
  }
};
__publicField$1(_AddressRepository, "instance", null);
let AddressRepository = _AddressRepository;

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const _AddressService = class _AddressService extends BaseCrudService {
  constructor(addressRepo) {
    super(addressRepo);
    this.addressRepo = addressRepo;
  }
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!_AddressService.instance) {
      _AddressService.instance = new _AddressService(AddressRepository.getInstance());
    }
    return _AddressService.instance;
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
};
__publicField(_AddressService, "instance", null);
let AddressService = _AddressService;

const guest_post = defineEventHandler(async (event) => {
  const { mail, orderId, zip } = await readBody(event);
  if (!mail || !orderId || !zip) {
    throw createError({ statusCode: 400, statusMessage: "Missing lookup fields" });
  }
  const order = await OrderService.getInstance().getByOrderId(orderId);
  if (!order) {
    throw createError({ statusCode: 401, statusMessage: "orderNotFound" });
  }
  const owner = await UserService.getInstance().findById(order.user_id);
  const shippingAddress = await AddressService.getInstance().findById(order.shipping_address_id);
  const mailOk = (owner == null ? void 0 : owner.mail.toLowerCase()) === mail.toLowerCase();
  const zipOk = (shippingAddress == null ? void 0 : shippingAddress.zip_code) === zip;
  if (!mailOk || !zipOk) {
    throw createError({ statusCode: 401, statusMessage: "orderNotFound" });
  }
  await setUserSession(event, {
    user: { mail: mail.toLowerCase(), role: "guest" },
    guest: { allowedOrderIds: [order.order_id] }
  });
  return { ok: true };
});

export { guest_post as default };
//# sourceMappingURL=guest.post.mjs.map
