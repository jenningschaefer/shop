import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './server.mjs';
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

const _sfc_main = {
  __name: "edit-user",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-user" }, _attrs))}><div class="account-user_link">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/account",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#user")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>User Data</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-left")}${_scopeId}></use></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "account-link" }, [
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0 + "#user" })
                ])),
                createVNode("div", { class: "account-link_name" }, "User Data"),
                (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                  createVNode("use", { href: _imports_0 + "#arrow-left" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-user_form"><form action=""><div class="account-user_form-group"><select><option value="" disabled selected>Title</option><option value="1">Mr</option><option value="2">Mrs</option><option value="3">None</option></select><input class="" type="text" placeholder="First Name"><input class="" type="text" placeholder="Name"><input class="" type="email" placeholder="E-Mail Address"><input class="" type="text" placeholder="Birthdate"><select><option value="" disabled selected>Language</option><option value="1">German</option><option value="2">English</option><option value="3">Korean</option><option value="4">Japanese</option></select></div><div class="account-user_form-buttons">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/edit-user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-user-DCtJHSkj.mjs.map
