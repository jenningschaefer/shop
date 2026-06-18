import { defineComponent, ref, provide, mergeProps, useSSRContext, inject, computed, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { e as _imports_0$1 } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "accordion",
  __ssrInlineRender: true,
  setup(__props) {
    const accordion = ref({
      count: 0,
      active: null
    });
    provide("Accordion", accordion);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UIAccordion" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accordion-item",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, default: false }
  },
  setup(__props) {
    const accordion = inject("Accordion");
    if (!accordion) {
      throw new Error("AccordionItem must be used within an Accordion");
    }
    const index = accordion.value.count++;
    const visible = computed(() => index === accordion.value.active);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "accordion__item" }, _attrs))} data-v-4820a6d9><div class="${ssrRenderClass([{ accordion__trigger_active: unref(visible) }, "accordion__trigger"])}" data-v-4820a6d9>`);
      ssrRenderSlot(_ctx.$slots, "accordion-trigger", {}, null, _push, _parent);
      if (!unref(visible)) {
        _push(`<svg class="accordion__trigger_icon" data-v-4820a6d9><use${ssrRenderAttr("href", _imports_0$1 + "#plus")} data-v-4820a6d9></use></svg>`);
      } else {
        _push(`<svg class="accordion__trigger_icon" data-v-4820a6d9><use${ssrRenderAttr("href", _imports_0$1 + "#minus")} data-v-4820a6d9></use></svg>`);
      }
      _push(`</div><div class="accordion__content" style="${ssrRenderStyle(unref(visible) ? null : { display: "none" })}" data-v-4820a6d9><ul data-v-4820a6d9>`);
      ssrRenderSlot(_ctx.$slots, "accordion-content", {}, null, _push, _parent);
      _push(`</ul></div></li>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/accordion-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-4820a6d9"]]), { __name: "UIAccordionItem" });

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=accordion-item-DzWSSQpg.mjs.map
