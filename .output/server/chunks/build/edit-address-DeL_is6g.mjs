import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './icons-B4vhDWaA.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';

const _sfc_main = {
  __name: "edit-address",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-address" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#home")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>Address</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0 + "#home" })
                ])),
                createVNode("div", { class: "account-link_name" }, "Address"),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-address_form"><form action=""><div class="account-address_form-group"><input class="" type="text" placeholder="Street"><input class="" type="text" placeholder="House No."><input class="" type="text" placeholder="Zip Code"><input class="" type="text" placeholder="City"><select><option value="" disabled selected>Country</option><option value="1">Germany</option><option value="2">United Kingdom</option><option value="2">US America</option><option value="3">Korea</option><option value="4">Japan</option></select></div><div class="account-address_form-buttons">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="vesta-btn" type="button"${_scopeId}>Save</button>`);
          } else {
            return [
              createVNode("button", {
                class: "vesta-btn",
                type: "button"
              }, "Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="vesta-btn" type="button">Discard Changes</button></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/edit-address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-address-DeL_is6g.mjs.map
