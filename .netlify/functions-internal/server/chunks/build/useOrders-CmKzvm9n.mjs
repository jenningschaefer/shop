import { J as JsonRepository } from './base.repository-B5mBvhdh.mjs';

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
class OrderRepository extends JsonRepository {
  static instance = null;
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
    if (!OrderRepository.instance) {
      OrderRepository.instance = new OrderRepository();
    }
    return OrderRepository.instance;
  }
  async findByUserId(userId) {
    await this.simulateDelay();
    return this.data.filter((order) => order.user_id === userId);
  }
  async findByOrderId(orderId) {
    await this.simulateDelay();
    return this.data.find((order) => order.order_id === orderId) ?? null;
  }
  /**
   * Override to use string-based ID generation
   */
  generateId() {
    if (this.data.length === 0) return "000001";
    const maxId = Math.max(...this.data.map((order) => parseInt(order.order_id, 10)));
    return String(maxId + 1).padStart(6, "0");
  }
}
class OrderService {
  constructor(orderRepo2) {
    this.orderRepo = orderRepo2;
  }
  static instance = null;
  /**
   * Singleton pattern
   */
  static getInstance() {
    if (!OrderService.instance) {
      OrderService.instance = new OrderService(OrderRepository.getInstance());
    }
    return OrderService.instance;
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
}
OrderService.getInstance();
const orderRepo = OrderRepository.getInstance();
function useOrdersByUser(userId) {
  return orderRepo.getData().filter((order) => order.user_id === userId);
}
function useOrderByOrderId(orderId) {
  return orderRepo.getData().find((order) => order.order_id === orderId);
}

export { useOrdersByUser as a, useOrderByOrderId as u };
//# sourceMappingURL=useOrders-CmKzvm9n.mjs.map
