import { ref, provide, mergeProps, useSSRContext, inject, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './icons-B4vhDWaA.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  __name: "accordion",
  __ssrInlineRender: true,
  setup(__props) {
    const Accordion = ref({
      count: 0,
      active: null
    });
    provide("Accordion", Accordion);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "accordion-item",
  __ssrInlineRender: true,
  setup(__props) {
    const Accordion = inject("Accordion");
    let index = null;
    index = Accordion.value.count++;
    const visible = ref(computed(() => index == Accordion.value.active));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "accordion__item" }, _attrs))} data-v-89a8463c><div class="${ssrRenderClass([{ "accordion__trigger_active": unref(visible) }, "accordion__trigger"])}" data-v-89a8463c>`);
      ssrRenderSlot(_ctx.$slots, "accordion-trigger", {}, null, _push, _parent);
      if (!unref(visible)) {
        _push(`<svg class="accordion__trigger_icon" data-v-89a8463c><use${ssrRenderAttr("href", _imports_0 + "#plus")} data-v-89a8463c></use></svg>`);
      } else {
        _push(`<svg class="accordion__trigger_icon" data-v-89a8463c><use${ssrRenderAttr("href", _imports_0 + "#minus")} data-v-89a8463c></use></svg>`);
      }
      _push(`</div><div class="accordion__content" style="${ssrRenderStyle(unref(visible) ? null : { display: "none" })}" data-v-89a8463c><ul data-v-89a8463c>`);
      ssrRenderSlot(_ctx.$slots, "accordion-content", {}, null, _push, _parent);
      _push(`</ul></div></li>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/accordion-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-89a8463c"]]);

export { _sfc_main$1 as _, __nuxt_component_1 as a };
//# sourceMappingURL=accordion-item-BfcVdLck.mjs.map
