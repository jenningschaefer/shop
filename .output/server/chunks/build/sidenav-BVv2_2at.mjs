import { useModel, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './server.mjs';

const _sfc_main = {
  __name: "sidenav",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const active = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (active.value) {
        _push(`<div class="overlay"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="mySidenav" class="${ssrRenderClass([active.value ? "open" : "", "sidenav"])}"><div class="sidenav_title">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</div><a class="closebtn"><svg><use${ssrRenderAttr("href", _imports_0 + "#close")}></use></svg></a><div class="sidenav_content">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/sidenav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=sidenav-BVv2_2at.mjs.map
