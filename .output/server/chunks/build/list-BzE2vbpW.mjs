import { defineComponent, ref, onErrorCaptured, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { b as useNuxtApp, d as __nuxt_component_2, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const __nuxt_component_0 = defineComponent({
  emits: {
    error(_error) {
      return true;
    }
  },
  setup(_props, { slots, emit }) {
    const error = ref(null);
    useNuxtApp();
    onErrorCaptured((err, target, info) => {
    });
    function clearError() {
      error.value = null;
    }
    return () => {
      var _a, _b;
      return error.value ? (_a = slots.error) == null ? void 0 : _a.call(slots, { error, clearError }) : (_b = slots.default) == null ? void 0 : _b.call(slots);
    };
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Product/SideBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtErrorBoundary = __nuxt_component_0;
      const _component_ProductSideBar = __nuxt_component_1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "list" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtErrorBoundary, null, {
        error: withCtx(({ error }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="list_error"${_scopeId}><h1 class="list_error_heading"${_scopeId}>Sorry, something went wrong</h1><code${_scopeId}>${ssrInterpolate(error)}</code><button class="btn-primary"${_scopeId}> Go Back! </button></div>`);
          } else {
            return [
              createVNode("div", { class: "list_error" }, [
                createVNode("h1", { class: "list_error_heading" }, "Sorry, something went wrong"),
                createVNode("code", null, toDisplayString(error), 1),
                createVNode("button", {
                  class: "btn-primary",
                  onClick: ($event) => error.value = null
                }, " Go Back! ", 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ProductSideBar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ProductSideBar),
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=list-BzE2vbpW.mjs.map
