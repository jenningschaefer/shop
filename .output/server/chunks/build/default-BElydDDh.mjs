import { _ as _sfc_main$1 } from './NavBar-DqJoXSPk.mjs';
import { _ as __nuxt_component_1 } from './Footer-DKes_5ur.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-8v5xRlLo.mjs';
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
import './sidenav-BVv2_2at.mjs';
import './Cart-GSrLnc31.mjs';
import './client-only-Cibwl3dk.mjs';
import './index-BY-DsOmN.mjs';
import './logos-CBvRb9s_.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavBar = _sfc_main$1;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-layout" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BElydDDh.mjs.map
