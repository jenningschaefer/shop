const orders = [
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
const useOrdersByUser = (user_id) => {
  console.log("useOrder");
  return orders.filter((order) => {
    return order.user_id == user_id;
  });
};
const useOrderByOrderID = (order_id) => {
  console.log("useOrder");
  return orders.find((order) => {
    return order.order_id == order_id;
  });
};

export { useOrdersByUser as a, useOrderByOrderID as u };
//# sourceMappingURL=useOrders-DlYzh88l.mjs.map
