import { f as useRoute, c as useI18n, s as __nuxt_component_1$2, m as useCheckoutFlow, e as _imports_0$1, l as __nuxt_component_0$1$1, t as useRouter$1, h as useToast, d as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, computed, unref, ref, withCtx, createVNode, createTextVNode, toDisplayString, mergeProps, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { useRoute as useRoute$1, useRouter } from 'vue-router';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MenuCheckout",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))}><div class="menu_links">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "menu_links_link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(t)("nav.home"))}</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(t)("nav.home")), 1),
              (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
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
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(t)("nav.products"))}</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(t)("nav.products")), 1),
              (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
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
            _push2(`<p${_scopeId}>${ssrInterpolate(unref(t)("nav.account"))}</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(unref(t)("nav.account")), 1),
              (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="menu_bottom"><div class="menu_bottom_newsletter"><div class="subtitle-big">${ssrInterpolate(unref(t)("footer.newsletter"))}</div><div class="menu_bottom_newsletter_input"><input class="input-newsletter" type="text"${ssrRenderAttr("placeholder", unref(t)("footer.emailPlaceholder"))}><a><svg class="menu_bottom_newsletter_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#link")}></use></svg></a></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products/list",
        class: "menu_links_link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>DESIGN</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", null, "DESIGN"),
              (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuCheckout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$4, { __name: "MenuCheckout" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    useRouter();
    useCheckoutFlow();
    const openMenu = ref(false);
    const isConfirmationPage = computed(() => route.name === "checkout-confirmation");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UISidenav = __nuxt_component_0$1$1;
      const _component_MenuCheckout = __nuxt_component_1$1;
      _push(`<!--[--><div class="checkout-header">`);
      if (!isConfirmationPage.value) {
        _push(`<button type="button" class="checkout-header_back"><svg class="checkout-header_back"><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}></use></svg></button>`);
      } else {
        _push(`<div></div>`);
      }
      _push(`<svg class="checkout-header_menu"><use${ssrRenderAttr("href", _imports_0$1 + "#menu")}></use></svg></div>`);
      _push(ssrRenderComponent(_component_UISidenav, {
        modelValue: openMenu.value,
        "onUpdate:modelValue": ($event) => openMenu.value = $event
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.menu"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.menu")), 1)
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
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Checkout/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$3, { __name: "CheckoutHeader" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProgressBar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isPaymentOrLater = computed(
      () => route.name === "checkout-payment" || route.name === "checkout-overview"
    );
    const isOverview = computed(() => route.name === "checkout-overview");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress-bar" }, _attrs))}><div class="progress-bar_step active"></div><div class="${ssrRenderClass([{ active: unref(isPaymentOrLater) }, "progress-bar_step"])}"></div><div class="${ssrRenderClass([{ active: unref(isOverview) }, "progress-bar_step"])}"></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Checkout/ProgressBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "CheckoutProgressBar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter$1();
    const { t } = useI18n();
    const flow = useCheckoutFlow();
    useToast();
    const isOverviewPage = computed(() => route.name === "checkout-overview");
    const canGoNext = computed(() => {
      switch (route.name) {
        case "checkout-address":
          return flow.isAddressValid.value;
        case "checkout-payment":
          return flow.isAddressValid.value && flow.isPaymentValid.value;
        case "checkout-overview":
          return flow.isAddressValid.value && flow.isPaymentValid.value && flow.isOverviewValid.value;
        default:
          return false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CheckoutProgressBar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-navigation" }, _attrs))}><div class="checkout-navigation_button"><button class="vesta-btn-secondary checkout-navigation_button-prev" type="button">${ssrInterpolate(unref(t)("common.back"))}</button><button class="vesta-btn" type="button"${ssrRenderAttr("aria-disabled", !unref(canGoNext))}>${ssrInterpolate(unref(isOverviewPage) ? unref(t)("checkout.placeOrder") : unref(t)("common.next"))}</button></div>`);
      _push(ssrRenderComponent(_component_CheckoutProgressBar, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Checkout/Navigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "CheckoutNavigation" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const isConfirmationPage = computed(() => route.name === "checkout-confirmation");
    const pageTitle = computed(() => {
      switch (route.name) {
        case "checkout-address":
          return t("checkout.address");
        case "checkout-payment":
          return t("checkout.payment");
        case "checkout-overview":
          return t("checkout.overview");
        default:
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CheckoutHeader = __nuxt_component_0$1;
      const _component_CheckoutNavigation = __nuxt_component_1;
      const _component_Footer = __nuxt_component_1$2;
      _push(`<!--[--><div class="checkout-layout"><div class="checkout-layout-main">`);
      _push(ssrRenderComponent(_component_CheckoutHeader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (!unref(isConfirmationPage)) {
        _push(ssrRenderComponent(_component_CheckoutNavigation, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(isConfirmationPage)) {
        _push(`<div class="checkout-layout-side"><h1>${ssrInterpolate(unref(pageTitle))}</h1></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(isConfirmationPage)) {
        _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-CPCxgv5Y.mjs.map
