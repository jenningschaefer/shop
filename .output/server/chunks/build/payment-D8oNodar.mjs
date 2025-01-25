import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "payment",
  __ssrInlineRender: true,
  setup(__props) {
    const paymentMethods = [
      {
        name: "Paypal",
        fees: "2.50$",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        name: "Credit Card",
        fees: "2.50$",
        desciption: "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. Your information is securely encrypted and protected for a safe and seamless transaction experience. For any assistance or inquiries, our customer support team is available 24/7."
      },
      {
        name: "Apple/Google Pay",
        fees: "2.50$",
        desciption: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      }
    ];
    const paymentIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment" }, _attrs))}><h1 class="checkout_title">Payment</h1><div class="payment_methods"><!--[-->`);
      ssrRenderList(paymentMethods, (payment, index) => {
        _push(`<div class="${ssrRenderClass([unref(paymentIndex) == index ? "active" : "", "payment_methods-method"])}">${ssrInterpolate(payment.name)}</div>`);
      });
      _push(`<!--]--></div><div class="payment_fees">Fees: ${ssrInterpolate(paymentMethods[unref(paymentIndex)].fees)}</div><div class="payment_description">${ssrInterpolate(paymentMethods[unref(paymentIndex)].desciption)}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payment-D8oNodar.mjs.map
