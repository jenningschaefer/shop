import { computed } from 'vue';
import { c as useI18n, m as useCheckoutFlow } from './server.mjs';

function useCheckoutPayments() {
  const { locale } = useI18n();
  const flow = useCheckoutFlow();
  const methods = computed(() => [
    {
      name: "Paypal",
      fee: 2.5,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    },
    {
      name: "Credit Card",
      fee: 2.5,
      description: "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. Your information is securely encrypted and protected."
    },
    {
      name: "Apple/Google Pay",
      fee: 2.5,
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
    }
  ]);
  const selectedIndex = computed(() => {
    const i = flow.paymentIndex.value;
    return i >= 0 && i < methods.value.length ? i : 0;
  });
  const selectedMethod = computed(() => methods.value[selectedIndex.value]);
  const format = (amount) => locale.value === "de" ? `${amount.toFixed(2).replace(".", ",")} €` : `$${amount.toFixed(2)}`;
  return { methods, selectedIndex, selectedMethod, format };
}

export { useCheckoutPayments as u };
//# sourceMappingURL=useCheckoutPayments-aepoy5F6.mjs.map
