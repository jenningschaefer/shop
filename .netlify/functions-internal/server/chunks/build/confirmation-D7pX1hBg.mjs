import { c as useI18n, m as useCheckoutFlow, d as __nuxt_component_0$3, _ as _imports_0, e as _imports_0$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useCart } from './useCart-C08RemqV.mjs';
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
  __name: "confirmation",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useCheckoutFlow();
    useCart();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "confirmation" }, _attrs))}><div class="confirmation_logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#logo")}${_scopeId}></use></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", null, [
                createVNode("use", { href: _imports_0 + "#logo" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="confirmation_success"><div class="confirmation_success_panel"><svg class="confirmation_success_panel-icon"><use${ssrRenderAttr("href", _imports_0$1 + "#check")}></use></svg><div class="confirmation_success_panel-title">${ssrInterpolate(unref(t)("checkout.orderPlaced"))}</div><div class="confirmation_success_panel-text">${ssrInterpolate(unref(t)("checkout.thankYou"))}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "confirmation_success_panel-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="dark-btn-socondary confirmation_success_panel-button" type="button"${_scopeId}>${ssrInterpolate(unref(t)("nav.home"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "dark-btn-socondary confirmation_success_panel-button",
                type: "button"
              }, toDisplayString(unref(t)("nav.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/confirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=confirmation-D7pX1hBg.mjs.map
