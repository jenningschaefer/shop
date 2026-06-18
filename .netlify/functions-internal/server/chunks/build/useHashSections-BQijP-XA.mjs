import { ref, computed, watch, defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { f as useRoute, c as useI18n, e as _imports_0$1 } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionMenu",
  __ssrInlineRender: true,
  props: {
    sections: {},
    active: {},
    ariaLabel: { default: void 0 },
    showArrow: { type: Boolean, default: false },
    overviewLabelKey: { default: void 0 }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-menu" }, _attrs))}><select class="section-menu_dropdown"${ssrRenderAttr("value", __props.active ?? "")}${ssrRenderAttr("aria-label", __props.ariaLabel)}>`);
      if (__props.overviewLabelKey) {
        _push(`<option value="">${ssrInterpolate(unref(t)(__props.overviewLabelKey))}</option>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<option${ssrRenderAttr("value", section.id)}>${ssrInterpolate(unref(t)(section.labelKey))}</option>`);
      });
      _push(`<!--]--></select><nav class="section-menu_list"${ssrRenderAttr("aria-label", __props.ariaLabel)}>`);
      if (__props.overviewLabelKey) {
        _push(`<a href="#" class="${ssrRenderClass([{ "section-menu_link--active": __props.active === null }, "section-menu_link"])}">${ssrInterpolate(unref(t)(__props.overviewLabelKey))} `);
        if (__props.showArrow) {
          _push(`<svg class="section-menu_arrow" aria-hidden="true"><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}></use></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.sections, (section) => {
        _push(`<a${ssrRenderAttr("href", `#${section.id}`)} class="${ssrRenderClass([{ "section-menu_link--active": section.id === __props.active }, "section-menu_link"])}">${ssrInterpolate(unref(t)(section.labelKey))} `);
        if (__props.showArrow) {
          _push(`<svg class="section-menu_arrow" aria-hidden="true"><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}></use></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      });
      _push(`<!--]--></nav></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/SectionMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "UISectionMenu" });
function useHashSections(sections, options = {}) {
  const route = useRoute();
  const fallback = options.fallback === void 0 ? sections[0].id : options.fallback;
  function resolveId(hash) {
    const id = hash.replace("#", "");
    return sections.some((s) => s.id === id) ? id : fallback;
  }
  const activeId = ref(fallback);
  const activeComponent = computed(
    () => sections.find((s) => s.id === activeId.value)?.component ?? null
  );
  function select(id) {
    activeId.value = id === "" ? null : id;
  }
  watch(
    () => route.hash,
    (hash) => {
      activeId.value = resolveId(hash);
    }
  );
  return { activeId, activeComponent, select };
}

export { __nuxt_component_0 as _, useHashSections as u };
//# sourceMappingURL=useHashSections-BQijP-XA.mjs.map
