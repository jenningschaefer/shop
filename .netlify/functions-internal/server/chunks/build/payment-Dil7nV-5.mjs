import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { c as useI18n, m as useCheckoutFlow } from './server.mjs';
import { u as useCheckoutPayments } from './useCheckoutPayments-aepoy5F6.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue-router';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "payment",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const flow = useCheckoutFlow();
    const { paymentIndex } = flow;
    const { methods: paymentMethods, selectedMethod, format } = useCheckoutPayments();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment" }, _attrs))}><h1 class="checkout_title">${ssrInterpolate(unref(t)("checkout.payment"))}</h1><div class="payment_methods"><!--[-->`);
      ssrRenderList(unref(paymentMethods), (payment, index) => {
        _push(`<div class="${ssrRenderClass([unref(paymentIndex) === index ? "active" : "", "payment_methods-method"])}">${ssrInterpolate(payment.name)}</div>`);
      });
      _push(`<!--]--></div><div class="payment_fees">${ssrInterpolate(unref(t)("checkout.fees"))}: ${ssrInterpolate(unref(format)(unref(selectedMethod).fee))}</div><div class="payment_description">${ssrInterpolate(unref(selectedMethod).description)}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=payment-Dil7nV-5.mjs.map
