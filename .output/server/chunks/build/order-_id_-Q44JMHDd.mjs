import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-Cibwl3dk.mjs';
import { u as useRoute, _ as _imports_0 } from './server.mjs';
import { u as useOrderByOrderID } from './useOrders-DlYzh88l.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const addresses = [
  {
    id: 0,
    user_id: 1,
    type: "delivery",
    firstname: "Jenning",
    name: "Schaefer",
    street: "Street",
    house_no: "5",
    zip_code: "12345",
    city: "Mainheim",
    country: "Germany"
  },
  {
    id: 1,
    user_id: 1,
    type: "billing",
    firstname: "Jenning",
    name: "Schaefer",
    street: "Street",
    house_no: "5",
    zip_code: "12345",
    city: "Mainheim",
    country: "Germany"
  }
];
const useAddress = (id) => {
  console.log("useAddress");
  return addresses.find((address) => {
    return address.id == id;
  });
};
const useUtilities = () => {
  const formatDate = (date) => {
    return `${date.substring(6, 8)}.${date.substring(4, 6)}.${date.substring(0, 4)}`;
  };
  return {
    formatDate
  };
};
const _sfc_main = {
  __name: "order-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const order = useOrderByOrderID(route.params.id);
    const shipping_address = useAddress(0);
    const billing_address = useAddress(1);
    const { formatDate } = useUtilities();
    const getTotal = (str1, str2) => {
      const num1 = Number(str1);
      const num2 = Number(str2);
      return (num1 + num2).toFixed(2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-order" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account/order-history",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#order")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>Order</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0 + "#order" })
                ])),
                createVNode("div", { class: "account-link_name" }, "Order"),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-order_container"><div class="account-order_no">Order No. #${ssrInterpolate(unref(route).params.id)}</div><div class="account-order_status">${ssrInterpolate(unref(order).status)}</div><div class="account-order_details"><span class="account-order_details_heading">Order date</span><span>${ssrInterpolate(unref(formatDate)(unref(order).order_date))}</span><span class="account-order_details_heading">Shipped</span><span>${ssrInterpolate(unref(formatDate)(unref(order).shipping_date))}</span></div><div class="account-order_send"><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">Delivered To</h4><address class="account-order_send_address">${ssrInterpolate(unref(shipping_address).firstname)} ${ssrInterpolate(unref(shipping_address).name)}<br> ${ssrInterpolate(unref(shipping_address).street)} ${ssrInterpolate(unref(shipping_address).house_no)}<br> ${ssrInterpolate(unref(shipping_address).zip_code)} ${ssrInterpolate(unref(shipping_address).city)}<br> ${ssrInterpolate(unref(shipping_address).country)}</address></div><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">DeliveryType</h4><div class="account-order_send_info">${ssrInterpolate(unref(order).delivery_type)}<br> Delivery withing ${ssrInterpolate(unref(order).delivery_time)}</div></div></div><div class="account-order_buttons"><a href=""><button class="vesta-btn account-order_btn" type="button">Track order</button></a><div></div></div><hr class="account-order_seperator"><div class="account-order_products">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><hr class="account-order_seperator"><div class="account-order_send"><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">Billing Address</h4><address class="account-order_send_address">${ssrInterpolate(unref(billing_address).firstname)} ${ssrInterpolate(unref(billing_address).name)}<br> ${ssrInterpolate(unref(billing_address).street)} ${ssrInterpolate(unref(billing_address).house_no)}<br> ${ssrInterpolate(unref(billing_address).zip_code)} ${ssrInterpolate(unref(billing_address).city)}<br> ${ssrInterpolate(unref(billing_address).country)}</address></div><div class="account-order_send-wrapper"><h4 class="account-order_send_heading">Payment</h4><div class="account-order_send_info">${ssrInterpolate(unref(order).payment_type)}<br></div></div></div><div class="account-order_details"><span class="account-order_details_heading">Sum</span><span>${ssrInterpolate(unref(order).sum)}$</span><span class="account-order_details_heading">Shipping</span><span>${ssrInterpolate(unref(order).shipping)}$</span></div><div class="account-order_total"><span>Sum</span><span>${ssrInterpolate(getTotal(unref(order).sum, unref(order).shipping))}$</span></div><div class="account-order_buttons"><a href=""><button class="vesta-btn account-order_btn" type="button">Invoice (PDF)</button></a><a href=""><button class="vesta-btn account-order_btn" type="button">Return Shiment</button></a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/order-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=order-_id_-Q44JMHDd.mjs.map
