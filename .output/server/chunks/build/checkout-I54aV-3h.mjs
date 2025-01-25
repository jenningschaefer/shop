import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { u as useRoute } from './server.mjs';
import { unref, useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, toDisplayString, computed } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './icons-B4vhDWaA.mjs';
import { _ as __nuxt_component_1 } from './Footer-BDkUdOh8.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';

const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const prev = () => {
      switch (route.name) {
        case "checkout-payment":
          return "/checkout/address";
        case "checkout-overview":
          return "/checkout/payment";
        default:
          return "/products/list";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-header" }, _attrs))}>`);
      if (unref(route).name != "checkout-confirmation") {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: prev()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="checkout-header_back"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-left")}${_scopeId}></use></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", { class: "checkout-header_back" }, [
                  createVNode("use", { href: _imports_0 + "#arrow-left" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div></div>`);
      }
      _push(`<svg class="checkout-header_menu"><use${ssrRenderAttr("href", _imports_0 + "#menu")}></use></svg></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Checkout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ProgressBar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = computed(() => useRoute());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress-bar" }, _attrs))}><div class="progress-bar_step active"></div><div class="${ssrRenderClass([unref(route).name === "checkout-payment" || unref(route).name === "checkout-overview" ? "active" : "", "progress-bar_step"])}"></div><div class="${ssrRenderClass([unref(route).name === "checkout-overview" ? "active" : "", "progress-bar_step"])}"></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Checkout/ProgressBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const next = () => {
      switch (route.name) {
        case "checkout-payment":
          return "/checkout/overview";
        case "checkout-overview":
          return "/checkout/confirmation";
        default:
          return "/checkout/payment";
      }
    };
    const prev = () => {
      switch (route.name) {
        case "checkout-payment":
          return "/checkout/address";
        case "checkout-overview":
          return "/checkout/payment";
        default:
          return "/products/list";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CheckoutProgressBar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-navigation" }, _attrs))}><div class="checkout-navigation_button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: prev(),
        class: "checkout-navigation_button-prev"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="vesta-btn-secondary" type="button"${_scopeId}>PREV</button>`);
          } else {
            return [
              createVNode("button", {
                class: "vesta-btn-secondary",
                type: "button"
              }, "PREV")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: next()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="vesta-btn" type="button"${_scopeId}>${ssrInterpolate(unref(route).name == "checkout-overview" ? "BUY" : "NEXT")}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "vesta-btn",
                type: "button"
              }, toDisplayString(unref(route).name == "checkout-overview" ? "BUY" : "NEXT"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CheckoutProgressBar, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Checkout/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CheckoutHeader = _sfc_main$3;
      const _component_CheckoutNavigation = _sfc_main$1;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[--><div class="checkout-layout"><div class="checkout-layout-main">`);
      _push(ssrRenderComponent(_component_CheckoutHeader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(route).name != "checkout-confirmation") {
        _push(ssrRenderComponent(_component_CheckoutNavigation, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(route).name != "checkout-confirmation") {
        _push(`<div class="checkout-layout-side">`);
        if (unref(route).name == "checkout-address") {
          _push(`<h1>Address</h1>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(route).name == "checkout-payment") {
          _push(`<h1>Payment</h1>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(route).name == "checkout-overview") {
          _push(`<h1>Overview</h1>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(route).name == "checkout-confirmation") {
        _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-I54aV-3h.mjs.map
