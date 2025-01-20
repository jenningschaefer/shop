import orders from '@/data/orders.json';

export const useOrdersByUser = (user_id) => {
    console.log('useOrder')
    return orders.filter((order) => {
        return order.user_id == user_id;
    });
}

export const useOrderByOrderID = (order_id) => {
    console.log('useOrder')
    return orders.find((order) => {
        return order.order_id == order_id;
    });
}