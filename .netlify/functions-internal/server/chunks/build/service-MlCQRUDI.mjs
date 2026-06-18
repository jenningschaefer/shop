import { u as useHashSections, _ as __nuxt_component_0 } from './useHashSections-BQijP-XA.mjs';
import { defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './accordion-item-DzWSSQpg.mjs';
import { c as useI18n } from './server.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const items = ["1", "2", "3", "4"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAccordion = __nuxt_component_1;
      const _component_UIAccordionItem = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("servicePage.faq.title"))}</h2>`);
      _push(ssrRenderComponent(_component_UIAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (n) => {
              _push2(ssrRenderComponent(_component_UIAccordionItem, { key: n }, {
                "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="section-faq-trigger"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)(`servicePage.faq.q${n}`))}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "section-faq-trigger" }, [
                        createVNode("span", { class: "links" }, toDisplayString(unref(t)(`servicePage.faq.q${n}`)), 1)
                      ])
                    ];
                  }
                }),
                "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="section-faq-answer"${_scopeId2}>${ssrInterpolate(unref(t)(`servicePage.faq.a${n}`))}</li>`);
                  } else {
                    return [
                      createVNode("li", { class: "section-faq-answer" }, toDisplayString(unref(t)(`servicePage.faq.a${n}`)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (n) => {
                return createVNode(_component_UIAccordionItem, { key: n }, {
                  "accordion-trigger": withCtx(() => [
                    createVNode("div", { class: "section-faq-trigger" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)(`servicePage.faq.q${n}`)), 1)
                    ])
                  ]),
                  "accordion-content": withCtx(() => [
                    createVNode("li", { class: "section-faq-answer" }, toDisplayString(unref(t)(`servicePage.faq.a${n}`)), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service/Faq.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ServiceFaq = Object.assign(_sfc_main$5, { __name: "ServiceFaq" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Shipping",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("servicePage.shipping.title"))}</h2><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.shipping.p1"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.shipping.p2"))}</p><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.shipping.p3"))}</p></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service/Shipping.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ServiceShipping = Object.assign(_sfc_main$4, { __name: "ServiceShipping" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Payment",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const methods = ["1", "2", "3", "4"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("servicePage.payment.title"))}</h2><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.payment.intro"))}</p><ul class="section-content_list"><!--[-->`);
      ssrRenderList(methods, (n) => {
        _push(`<li>${ssrInterpolate(unref(t)(`servicePage.payment.m${n}`))}</li>`);
      });
      _push(`<!--]--></ul><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.payment.note"))}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service/Payment.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ServicePayment = Object.assign(_sfc_main$3, { __name: "ServicePayment" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Imprint",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("servicePage.imprint.title"))}</h2><p class="section-content_note">${ssrInterpolate(unref(t)("servicePage.imprint.disclaimer"))}</p><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("servicePage.imprint.providerLabel"))}</h3><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.imprint.company"))} <br> ${ssrInterpolate(unref(t)("servicePage.imprint.street"))} <br> ${ssrInterpolate(unref(t)("servicePage.imprint.city"))} <br> ${ssrInterpolate(unref(t)("servicePage.imprint.country"))}</p><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("servicePage.imprint.repLabel"))}</h3><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.imprint.rep"))}</p><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("servicePage.imprint.contactLabel"))}</h3><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.imprint.phone"))} <br> ${ssrInterpolate(unref(t)("servicePage.imprint.email"))}</p><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("servicePage.imprint.registerLabel"))}</h3><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.imprint.register"))}</p><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)("servicePage.imprint.vatLabel"))}</h3><p class="section-content_text">${ssrInterpolate(unref(t)("servicePage.imprint.vat"))}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service/Imprint.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ServiceImprint = Object.assign(_sfc_main$2, { __name: "ServiceImprint" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const sections = ["1", "2", "3", "4"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-content" }, _attrs))}><h2 class="section-content_title">${ssrInterpolate(unref(t)("servicePage.privacy.title"))}</h2><p class="section-content_note">${ssrInterpolate(unref(t)("servicePage.privacy.disclaimer"))}</p><!--[-->`);
      ssrRenderList(sections, (n) => {
        _push(`<!--[--><h3 class="section-content_subtitle">${ssrInterpolate(unref(t)(`servicePage.privacy.h${n}`))}</h3><p class="section-content_text">${ssrInterpolate(unref(t)(`servicePage.privacy.p${n}`))}</p><!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service/Privacy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServicePrivacy = Object.assign(_sfc_main$1, { __name: "ServicePrivacy" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "service",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const sections = [
      { id: "faq", labelKey: "servicePage.nav.faq", component: ServiceFaq },
      { id: "shipping", labelKey: "servicePage.nav.shipping", component: ServiceShipping },
      { id: "payment", labelKey: "servicePage.nav.payment", component: ServicePayment },
      { id: "imprint", labelKey: "servicePage.nav.imprint", component: ServiceImprint },
      { id: "privacy", labelKey: "servicePage.nav.privacy", component: ServicePrivacy }
    ];
    const { activeId, activeComponent, select } = useHashSections(sections);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UISectionMenu = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-split" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UISectionMenu, {
        sections,
        active: unref(activeId),
        "aria-label": unref(t)("servicePage.title"),
        onSelect: unref(select)
      }, null, _parent));
      _push(`<div class="section-split_content">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(activeComponent)), { key: unref(activeId) }, null), _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=service-MlCQRUDI.mjs.map
