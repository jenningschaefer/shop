import { c as useI18n, g as useUserSession, d as __nuxt_component_0$3, e as _imports_0$1, o as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useOrderByOrderId, a as useOrdersByUser } from './useOrders-CmKzvm9n.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order-history",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { user, session } = useUserSession();
    computed(() => {
      if (user.value?.role === "guest") {
        const ids = session.value.guest?.allowedOrderIds ?? [];
        return ids.map((id) => useOrderByOrderId(id)).filter((order) => order !== void 0);
      }
      return user.value?.user_id !== void 0 ? useOrdersByUser(user.value.user_id) : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-history" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#history")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.orderHistory"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#history" })
                ])),
                createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.orderHistory")), 1),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-history_orders">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/order-history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=order-history-DVHoXvIl.mjs.map
