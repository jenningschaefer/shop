import { c as useI18n, g as useUserSession, d as __nuxt_component_0$3, e as _imports_0$1 } from './server.mjs';
import { defineComponent, computed, reactive, watchEffect, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useAddressesByUser } from './useAddresses-DqgHcpox.mjs';
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
  __name: "edit-address",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { user } = useUserSession();
    const addresses = computed(
      () => user.value?.user_id !== void 0 ? useAddressesByUser(user.value.user_id) : []
    );
    const defaultAddress = computed(
      () => addresses.value.find((a) => a.id === user.value?.address_id_default) ?? addresses.value[0]
    );
    const form = reactive({
      street: "",
      house_no: "",
      zip_code: "",
      city: "",
      country: ""
    });
    watchEffect(() => {
      if (defaultAddress.value) {
        form.street = defaultAddress.value.street;
        form.house_no = defaultAddress.value.house_no;
        form.zip_code = defaultAddress.value.zip_code;
        form.city = defaultAddress.value.city;
        form.country = defaultAddress.value.country;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-address" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#home")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.addresses"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#home" })
                ])),
                createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.addresses")), 1),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-address_form"><form action=""><div class="account-address_form-group"><input${ssrRenderAttr("value", unref(form).street)} class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.street"))}><input${ssrRenderAttr("value", unref(form).house_no)} class="" type="text"${ssrRenderAttr("placeholder", unref(t)("checkout.houseNo"))}><input${ssrRenderAttr("value", unref(form).zip_code)} class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.zip"))}><input${ssrRenderAttr("value", unref(form).city)} class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.city"))}><select><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "") : ssrLooseEqual(unref(form).country, "")) ? " selected" : ""}>${ssrInterpolate(unref(t)("address.country"))}</option><option value="Germany"${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Germany") : ssrLooseEqual(unref(form).country, "Germany")) ? " selected" : ""}>Germany</option><option value="United Kingdom"${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "United Kingdom") : ssrLooseEqual(unref(form).country, "United Kingdom")) ? " selected" : ""}>United Kingdom</option><option value="US America"${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "US America") : ssrLooseEqual(unref(form).country, "US America")) ? " selected" : ""}>US America</option><option value="Korea"${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Korea") : ssrLooseEqual(unref(form).country, "Korea")) ? " selected" : ""}>Korea</option><option value="Japan"${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Japan") : ssrLooseEqual(unref(form).country, "Japan")) ? " selected" : ""}>Japan</option></select></div><div class="account-address_form-buttons">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/edit-address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-address-CtAykNcf.mjs.map
