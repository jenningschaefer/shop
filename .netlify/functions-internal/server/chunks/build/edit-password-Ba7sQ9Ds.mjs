import { c as useI18n, d as __nuxt_component_0$3, e as _imports_0$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "edit-password",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-password" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#password")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.changePassword"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#password" })
                ])),
                createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.changePassword")), 1),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-password_form"><form action=""><div class="account-password_form-group"><input class="" type="password"${ssrRenderAttr("placeholder", unref(t)("auth.password"))}><input class="" type="password"${ssrRenderAttr("placeholder", unref(t)("auth.confirmPassword"))}><p>${ssrInterpolate(unref(t)("auth.passwordRequirements"))}</p></div><div class="account-password_form-buttons">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="vesta-btn" type="button"${_scopeId}>${ssrInterpolate(unref(t)("common.save"))}</button>`);
          } else {
            return [
              createVNode("button", {
                class: "vesta-btn",
                type: "button"
              }, toDisplayString(unref(t)("common.save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="vesta-btn" type="button">${ssrInterpolate(unref(t)("common.cancel"))}</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/edit-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-password-Ba7sQ9Ds.mjs.map
