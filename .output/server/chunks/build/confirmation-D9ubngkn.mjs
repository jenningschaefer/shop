import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logos-CBvRb9s_.mjs';
import { _ as _imports_0$1 } from './server.mjs';
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
  __name: "confirmation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "confirmation" }, _attrs))}><div class="confirmation_logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#logo")}${_scopeId}></use></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", null, [
                createVNode("use", { href: _imports_0 + "#logo" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="confirmation_success"><div class="confirmation_success_panel"><svg class="confirmation_success_panel-icon"><use${ssrRenderAttr("href", _imports_0$1 + "#check")}></use></svg><div class="confirmation_success_panel-title">Success!!</div><div class="confirmation_success_panel-text">Your Order has<br> been confirmed</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "confirmation_success_panel-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="dark-btn-socondary confirmation_success_panel-button" type="button"${_scopeId}>home</button>`);
          } else {
            return [
              createVNode("button", {
                class: "dark-btn-socondary confirmation_success_panel-button",
                type: "button"
              }, "home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/confirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=confirmation-D9ubngkn.mjs.map
