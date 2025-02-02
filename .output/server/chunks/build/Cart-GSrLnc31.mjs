import { _ as __nuxt_component_0 } from './client-only-Cibwl3dk.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-8v5xRlLo.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useLocalStorage } from './index-BY-DsOmN.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = ref(useLocalStorage("cart", []));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-cart" }, _attrs))}><div class="order-cart_products">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="order-cart_checkout"><div class="order-cart_checkout_total"><span>Total</span><span>${ssrInterpolate(unref(cart).reduce((n, { price, amount }) => (+n + +amount * +price).toFixed(2), 0))} $</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/checkout/address" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="order-cart_checkout_button vesta-btn"${_scopeId}>Buy</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "order-cart_checkout_button vesta-btn"
              }, "Buy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Cart-GSrLnc31.mjs.map
