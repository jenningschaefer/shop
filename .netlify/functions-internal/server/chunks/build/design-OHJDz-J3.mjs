import { defineComponent, unref, createVNode, resolveDynamicComponent, mergeProps, withCtx, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { c as useI18n, e as _imports_0$1 } from './server.mjs';
import { u as useHashSections, _ as __nuxt_component_0$1 } from './useHashSections-BQijP-XA.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './accordion-item-DzWSSQpg.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Overview",
  __ssrInlineRender: true,
  props: {
    sections: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    function pad(index) {
      return String(index + 1).padStart(2, "0");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "design-overview" }, _attrs))}><header class="design-overview_intro"><h1 class="design-overview_title">${ssrInterpolate(unref(t)("designPage.title"))}</h1><p class="design-overview_text">${ssrInterpolate(unref(t)("designPage.intro"))}</p></header><div class="design-overview_grid"><!--[-->`);
      ssrRenderList(__props.sections, (section, index) => {
        _push(`<button type="button" class="${ssrRenderClass([`design-card--${index % 4}`, "design-card"])}"><span class="design-card_num">${ssrInterpolate(pad(index))}</span><span class="design-card_title">${ssrInterpolate(unref(t)(`designPage.overview.${section.id}Title`))}</span><span class="design-card_text">${ssrInterpolate(unref(t)(`designPage.overview.${section.id}Text`))}</span><svg class="design-card_arrow" aria-hidden="true"><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}></use></svg></button>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Design/Overview.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "DesignOverview" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Philosophy",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("designPage.philosophy.title"))}</h2><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.philosophy.p1"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.philosophy.p2"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.philosophy.p3"))}</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Design/Philosophy.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DesignPhilosophy = Object.assign(_sfc_main$5, { __name: "DesignPhilosophy" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tech",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("designPage.tech.title"))}</h2><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.tech.p1"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.tech.p2"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.tech.p3"))}</p></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Design/Tech.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DesignTech = Object.assign(_sfc_main$4, { __name: "DesignTech" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Structure",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("designPage.structure.title"))}</h2><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.structure.p1"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.structure.p2"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.structure.p3"))}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Design/Structure.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DesignStructure = Object.assign(_sfc_main$3, { __name: "DesignStructure" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Colors",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const swatches = [
      { key: "primary", hex: "#141414" },
      { key: "secondary", hex: "#f5f5f5" },
      { key: "blue", hex: "#87a3d2" },
      { key: "red", hex: "#f7c7b8" },
      { key: "grey", hex: "#bdc0c7" },
      { key: "success", hex: "#8fbf9f" },
      { key: "error", hex: "#e8907c" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("designPage.colors.title"))}</h2><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.colors.intro"))}</p><ul class="design-swatches"><!--[-->`);
      ssrRenderList(swatches, (swatch) => {
        _push(`<li class="design-swatch"><span class="${ssrRenderClass([`design-swatch_chip--${swatch.key}`, "design-swatch_chip"])}"></span><span class="design-swatch_label">${ssrInterpolate(unref(t)(`designPage.colors.${swatch.key}`))}</span><span class="design-swatch_hex">${ssrInterpolate(swatch.hex)}</span></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Design/Colors.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DesignColors = Object.assign(_sfc_main$2, { __name: "DesignColors" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Components",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAccordion = __nuxt_component_1;
      const _component_UIAccordionItem = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("designPage.components.title"))}</h2><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("designPage.components.buttonsTitle"))}</h3><div class="design-showcase_row"><button type="button" class="vesta-btn button-font">${ssrInterpolate(unref(t)("designPage.components.buttonPrimary"))}</button><button type="button" class="vesta-btn-secondary button-font">${ssrInterpolate(unref(t)("designPage.components.buttonSecondary"))}</button></div><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("designPage.components.inputsTitle"))}</h3><div class="design-showcase_row"><input type="text"${ssrRenderAttr("placeholder", unref(t)("designPage.components.inputPlaceholder"))}></div><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("designPage.components.accordionTitle"))}</h3>`);
      _push(ssrRenderComponent(_component_UIAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIAccordionItem, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="section-faq-trigger"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("designPage.components.accordionTrigger"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "section-faq-trigger" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("designPage.components.accordionTrigger")), 1)
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<li class="section-faq-answer"${_scopeId2}>${ssrInterpolate(unref(t)("designPage.components.accordionContent"))}</li>`);
                } else {
                  return [
                    createVNode("li", { class: "section-faq-answer" }, toDisplayString(unref(t)("designPage.components.accordionContent")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIAccordionItem, null, {
                "accordion-trigger": withCtx(() => [
                  createVNode("div", { class: "section-faq-trigger" }, [
                    createVNode("span", { class: "links" }, toDisplayString(unref(t)("designPage.components.accordionTrigger")), 1)
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("li", { class: "section-faq-answer" }, toDisplayString(unref(t)("designPage.components.accordionContent")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("designPage.components.linksTitle"))}</h3><p class="section-content_text">${ssrInterpolate(unref(t)("designPage.components.linksText"))}</p><a class="link-arrow" href="#">${ssrInterpolate(unref(t)("designPage.components.linkExample"))} <svg class="link-arrow_icon" aria-hidden="true"><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}></use></svg></a></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Design/Components.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DesignComponents = Object.assign(_sfc_main$1, { __name: "DesignComponents" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "design",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const sections = [
      { id: "philosophy", labelKey: "designPage.nav.philosophy", component: DesignPhilosophy },
      { id: "tech", labelKey: "designPage.nav.tech", component: DesignTech },
      { id: "structure", labelKey: "designPage.nav.structure", component: DesignStructure },
      { id: "colors", labelKey: "designPage.nav.colors", component: DesignColors },
      { id: "components", labelKey: "designPage.nav.components", component: DesignComponents }
    ];
    const { activeId, activeComponent, select } = useHashSections(sections, { fallback: null });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DesignOverview = __nuxt_component_0;
      const _component_UISectionMenu = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(activeId) === null) {
        _push(ssrRenderComponent(_component_DesignOverview, {
          sections,
          onSelect: unref(select)
        }, null, _parent));
      } else {
        _push(`<div class="section-split">`);
        _push(ssrRenderComponent(_component_UISectionMenu, {
          sections,
          active: unref(activeId),
          "aria-label": unref(t)("designPage.title"),
          "show-arrow": "",
          "overview-label-key": "designPage.nav.overview",
          onSelect: unref(select)
        }, null, _parent));
        _push(`<div class="section-split_content">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(activeComponent)), { key: unref(activeId) }, null), _parent);
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=design-OHJDz-J3.mjs.map
