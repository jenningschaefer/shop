import { c as useI18n, g as useUserSession, d as __nuxt_component_0$3, e as _imports_0$1 } from './server.mjs';
import { defineComponent, reactive, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
  __name: "edit-user",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { user } = useUserSession();
    const form = reactive({
      title: user.value?.title ?? "None",
      firstname: user.value?.firstname ?? "",
      lastname: user.value?.lastname ?? "",
      mail: user.value?.mail ?? "",
      birthday: user.value?.birthday ?? "",
      language: user.value?.language ?? "DE"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-user" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#user")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.profile"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#user" })
                ])),
                createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.profile")), 1),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-user_form"><form action=""><div class="account-user_form-group"><select><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).title) ? ssrLooseContain(unref(form).title, "") : ssrLooseEqual(unref(form).title, "")) ? " selected" : ""}>Title</option><option value="Mr"${ssrIncludeBooleanAttr(Array.isArray(unref(form).title) ? ssrLooseContain(unref(form).title, "Mr") : ssrLooseEqual(unref(form).title, "Mr")) ? " selected" : ""}>Mr</option><option value="Mrs"${ssrIncludeBooleanAttr(Array.isArray(unref(form).title) ? ssrLooseContain(unref(form).title, "Mrs") : ssrLooseEqual(unref(form).title, "Mrs")) ? " selected" : ""}>Mrs</option><option value="None"${ssrIncludeBooleanAttr(Array.isArray(unref(form).title) ? ssrLooseContain(unref(form).title, "None") : ssrLooseEqual(unref(form).title, "None")) ? " selected" : ""}>None</option></select><input${ssrRenderAttr("value", unref(form).firstname)} class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.firstName"))}><input${ssrRenderAttr("value", unref(form).lastname)} class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.lastName"))}><input${ssrRenderAttr("value", unref(form).mail)} class="" type="email"${ssrRenderAttr("placeholder", unref(t)("auth.email"))}><input${ssrRenderAttr("value", unref(form).birthday)} class="" type="text" placeholder="Birthdate"><select><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).language) ? ssrLooseContain(unref(form).language, "") : ssrLooseEqual(unref(form).language, "")) ? " selected" : ""}>${ssrInterpolate(unref(t)("common.language"))}</option><option value="DE"${ssrIncludeBooleanAttr(Array.isArray(unref(form).language) ? ssrLooseContain(unref(form).language, "DE") : ssrLooseEqual(unref(form).language, "DE")) ? " selected" : ""}>Deutsch</option><option value="EN"${ssrIncludeBooleanAttr(Array.isArray(unref(form).language) ? ssrLooseContain(unref(form).language, "EN") : ssrLooseEqual(unref(form).language, "EN")) ? " selected" : ""}>English</option></select></div><div class="account-user_form-buttons">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/edit-user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-user-pmFshE2U.mjs.map
