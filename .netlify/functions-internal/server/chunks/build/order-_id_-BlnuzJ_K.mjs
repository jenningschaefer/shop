import { f as useRoute, c as useI18n, g as useUserSession, d as __nuxt_component_0$3, e as _imports_0$1, o as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useOrderByOrderId } from './useOrders-CmKzvm9n.mjs';
import { a as useAddress } from './useAddresses-DqgHcpox.mjs';
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
import './base.repository-B5mBvhdh.mjs';

function useUtilities() {
  function formatDate(date) {
    if (date.length !== 8) {
      return date;
    }
    return `${date.substring(6, 8)}.${date.substring(4, 6)}.${date.substring(0, 4)}`;
  }
  function formatPrice(price, currency = "USD") {
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    const locale = currency === "EUR" ? "de-DE" : "en-US";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency
    }).format(numPrice);
  }
  function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  }
  function truncate(text, maxLength, suffix = "...") {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - suffix.length) + suffix;
  }
  return {
    formatDate,
    formatPrice,
    slugify,
    truncate
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t, locale } = useI18n();
    const { user, session } = useUserSession();
    const orderId = route.params.id;
    const rawOrder = useOrderByOrderId(orderId);
    const authorized = computed(() => {
      if (!rawOrder) return false;
      if (user.value?.role === "guest") {
        return session.value.guest?.allowedOrderIds.includes(rawOrder.order_id) ?? false;
      }
      return rawOrder.user_id === user.value?.user_id;
    });
    const order = computed(() => authorized.value ? rawOrder : void 0);
    const shipping_address = computed(
      () => order.value ? useAddress(order.value.shipping_address_id) : void 0
    );
    const billing_address = computed(
      () => order.value ? useAddress(order.value.billing_address_id) : void 0
    );
    const { formatDate } = useUtilities();
    const currencySymbol = computed(() => locale.value === "de" ? "€" : "$");
    function getTotal(str1, str2) {
      const num1 = Number(str1);
      const num2 = Number(str2);
      return (num1 + num2).toFixed(2);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-order" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/order-history",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#order")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("order.details"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#order" })
                ])),
                createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("order.details")), 1),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!unref(order)) {
        _push(`<div class="account-order_container"><p>${ssrInterpolate(unref(t)("order.notFound"))}</p></div>`);
      } else {
        _push(`<div class="account-order_container"><div class="account-order_no">${ssrInterpolate(unref(t)("order.orderNumber"))} #${ssrInterpolate(unref(route).params.id)}</div><div class="account-order_status">${ssrInterpolate(unref(t)(`order.${unref(order).status.toLowerCase()}`))}</div><div class="account-order_details"><span class="account-order_details_heading">${ssrInterpolate(unref(t)("order.orderDate"))}</span><span>${ssrInterpolate(unref(formatDate)(unref(order).order_date))}</span><span class="account-order_details_heading">${ssrInterpolate(unref(t)("order.shippedDate"))}</span><span>${ssrInterpolate(unref(formatDate)(unref(order).shipping_date))}</span></div><div class="account-order_send"><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">${ssrInterpolate(unref(t)("order.deliveredTo"))}</h4><address class="account-order_send_address">${ssrInterpolate(unref(shipping_address).firstname)} ${ssrInterpolate(unref(shipping_address).name)} <br> ${ssrInterpolate(unref(shipping_address).street)} ${ssrInterpolate(unref(shipping_address).house_no)} <br> ${ssrInterpolate(unref(shipping_address).zip_code)} ${ssrInterpolate(unref(shipping_address).city)} <br> ${ssrInterpolate(unref(shipping_address).country)}</address></div><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">${ssrInterpolate(unref(t)("order.deliveryType"))}</h4><div class="account-order_send_info">${ssrInterpolate(unref(order).delivery_type)} <br> ${ssrInterpolate(unref(t)("order.deliveryWithin", { time: unref(order).delivery_time }))}</div></div></div><div class="account-order_buttons"><a href=""><button class="vesta-btn account-order_btn" type="button">${ssrInterpolate(unref(t)("order.trackOrder"))}</button></a><div></div></div><hr class="account-order_seperator"><div class="account-order_products">`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div><hr class="account-order_seperator"><div class="account-order_send"><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">${ssrInterpolate(unref(t)("checkout.billingAddress"))}</h4><address class="account-order_send_address">${ssrInterpolate(unref(billing_address).firstname)} ${ssrInterpolate(unref(billing_address).name)} <br> ${ssrInterpolate(unref(billing_address).street)} ${ssrInterpolate(unref(billing_address).house_no)} <br> ${ssrInterpolate(unref(billing_address).zip_code)} ${ssrInterpolate(unref(billing_address).city)} <br> ${ssrInterpolate(unref(billing_address).country)}</address></div><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">${ssrInterpolate(unref(t)("checkout.payment"))}</h4><div class="account-order_send_info">${ssrInterpolate(unref(order).payment_type)} <br></div></div></div><div class="account-order_details"><span class="account-order_details_heading">${ssrInterpolate(unref(t)("cart.subtotal"))}</span><span>${ssrInterpolate(unref(order).sum)} ${ssrInterpolate(unref(currencySymbol))}</span><span class="account-order_details_heading">${ssrInterpolate(unref(t)("cart.shipping"))}</span><span>${ssrInterpolate(unref(order).shipping)} ${ssrInterpolate(unref(currencySymbol))}</span></div><div class="account-order_total"><span>${ssrInterpolate(unref(t)("cart.total"))}</span><span>${ssrInterpolate(getTotal(unref(order).sum, unref(order).shipping))} ${ssrInterpolate(unref(currencySymbol))}</span></div><div class="account-order_buttons"><a href=""><button class="vesta-btn account-order_btn" type="button">${ssrInterpolate(unref(t)("order.invoice"))}</button></a><a href=""><button class="vesta-btn account-order_btn" type="button">${ssrInterpolate(unref(t)("order.returnShipment"))}</button></a></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/order-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=order-_id_-BlnuzJ_K.mjs.map
