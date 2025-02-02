import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { _ as _sfc_main$5 } from './sidenav-BVv2_2at.mjs';
import { unref, useSSRContext, ref, withCtx, openBlock, createBlock, createVNode, isRef, createTextVNode, mergeProps, toDisplayString, computed } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderAttrs, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useRoute, _ as _imports_0 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_1 } from './Footer-DKes_5ur.mjs';
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

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))}><div class="menu_links">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list/chairs",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Home</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "Home"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Products</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "Products"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/account",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Account</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "Account"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="menu_bottom"><div class="menu_bottom_newsletter"><div class="subtitle-big"> Join Our Newsletter </div><div class="menu_bottom_newsletter_input"><input class="input-newsletter" type="text" placeholder="E-Mail Address"><a click=""><svg class="menu_bottom_newsletter_icon"><use${ssrRenderAttr("href", _imports_0 + "#link")}></use></svg></a></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list/chairs",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>DESIGN</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "DESIGN"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuCheckout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const openMenu = ref();
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
      const _component_UISidenav = _sfc_main$5;
      const _component_MenuCheckout = __nuxt_component_2;
      _push(`<!--[--><div class="checkout-header">`);
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
      _push(ssrRenderComponent(_component_UISidenav, {
        modelValue: unref(openMenu),
        "onUpdate:modelValue": ($event) => isRef(openMenu) ? openMenu.value = $event : null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Menu`);
          } else {
            return [
              createTextVNode("Menu")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MenuCheckout, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MenuCheckout)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
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
//# sourceMappingURL=checkout-CA0NWFbC.mjs.map
