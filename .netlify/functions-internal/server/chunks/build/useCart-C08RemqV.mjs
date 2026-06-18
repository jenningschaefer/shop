import { computed } from 'vue';
import { k as useLocalStorage } from './server.mjs';

const CART_STORAGE_KEY = "cart";
function useCart() {
  const cart = useLocalStorage(CART_STORAGE_KEY, []);
  function addItem(product, quantity = 1) {
    const existingItem = cart.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.amount += quantity;
    } else {
      cart.value.push({
        id: product.id,
        name: product.name,
        img: product.img,
        price: parseFloat(product.price),
        amount: quantity
      });
    }
  }
  function removeItem(productId) {
    const index = cart.value.findIndex((item) => item.id === productId);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }
  function incrementItem(productId) {
    const item = cart.value.find((i) => i.id === productId);
    if (item) {
      item.amount += 1;
    }
  }
  function decrementItem(productId) {
    const item = cart.value.find((i) => i.id === productId);
    if (item) {
      if (item.amount <= 1) {
        removeItem(productId);
      } else {
        item.amount -= 1;
      }
    }
  }
  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    const item = cart.value.find((i) => i.id === productId);
    if (item) {
      item.amount = quantity;
    }
  }
  function clearCart() {
    cart.value = [];
  }
  function isInCart(productId) {
    return cart.value.some((item) => item.id === productId);
  }
  function getQuantity(productId) {
    const item = cart.value.find((i) => i.id === productId);
    return item?.amount ?? 0;
  }
  const isEmpty = computed(() => cart.value.length === 0);
  const itemCount = computed(() => cart.value.reduce((count, item) => count + item.amount, 0));
  const subtotal = computed(
    () => cart.value.reduce((sum, item) => sum + item.price * item.amount, 0)
  );
  const shipping = computed(() => subtotal.value >= 100 ? 0 : 9.99);
  const total = computed(() => subtotal.value + shipping.value);
  const totals = computed(() => ({
    subtotal: subtotal.value,
    shipping: shipping.value,
    total: total.value,
    itemCount: itemCount.value,
    freeShippingThreshold: 100,
    amountUntilFreeShipping: Math.max(0, 100 - subtotal.value)
  }));
  const hasFreeShipping = computed(() => subtotal.value >= 100);
  return {
    // State
    cart,
    // Actions
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
    updateQuantity,
    clearCart,
    isInCart,
    getQuantity,
    // Computed
    isEmpty,
    itemCount,
    subtotal,
    shipping,
    total,
    totals,
    hasFreeShipping
  };
}

export { useCart as u };
//# sourceMappingURL=useCart-C08RemqV.mjs.map
