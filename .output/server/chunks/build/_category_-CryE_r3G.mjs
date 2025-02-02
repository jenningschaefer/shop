import { _ as _sfc_main$1$1, a as __nuxt_component_1 } from './accordion-item-C2fGNNOD.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-8v5xRlLo.mjs';
import { mergeProps, useSSRContext, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-Cibwl3dk.mjs';
import { u as useRoute, _ as _imports_0 } from './server.mjs';
import { u as useLocalStorage } from './index-BY-DsOmN.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UIAccordion = _sfc_main$1$1;
  const _component_UIAccordion_item = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sort-filter" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_UIAccordion, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
          "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>Sort</span></div>`);
            } else {
              return [
                createVNode("div", { class: "sort-filter_heading" }, [
                  createVNode("span", { class: "links" }, "Sort")
                ])
              ];
            }
          }),
          "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<ul class="sort-filter_list subtitle-small"${_scopeId2}><li${_scopeId2}>Price</li><li${_scopeId2}>Categories</li></ul>`);
            } else {
              return [
                createVNode("ul", { class: "sort-filter_list subtitle-small" }, [
                  createVNode("li", null, "Price"),
                  createVNode("li", null, "Categories")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
          "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>Filter</span></div>`);
            } else {
              return [
                createVNode("div", { class: "sort-filter_heading" }, [
                  createVNode("span", { class: "links" }, "Filter")
                ])
              ];
            }
          }),
          "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<ul class="sort-filter_list subtitle-small"${_scopeId2}><li${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/products/list/chairs" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Chair`);
                  } else {
                    return [
                      createTextVNode("Chair")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</li><li${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/products/list/tables" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Tables`);
                  } else {
                    return [
                      createTextVNode("Tables")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</li><li${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/products/list/ligting" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Lighting`);
                  } else {
                    return [
                      createTextVNode("Lighting")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</li><li${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/products/list/decoration" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Decoration`);
                  } else {
                    return [
                      createTextVNode("Decoration")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</li></ul>`);
            } else {
              return [
                createVNode("ul", { class: "sort-filter_list subtitle-small" }, [
                  createVNode("li", null, [
                    createVNode(_component_NuxtLink, { to: "/products/list/chairs" }, {
                      default: withCtx(() => [
                        createTextVNode("Chair")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_component_NuxtLink, { to: "/products/list/tables" }, {
                      default: withCtx(() => [
                        createTextVNode("Tables")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_component_NuxtLink, { to: "/products/list/ligting" }, {
                      default: withCtx(() => [
                        createTextVNode("Lighting")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", null, [
                    createVNode(_component_NuxtLink, { to: "/products/list/decoration" }, {
                      default: withCtx(() => [
                        createTextVNode("Decoration")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_UIAccordion_item, null, {
            "accordion-trigger": withCtx(() => [
              createVNode("div", { class: "sort-filter_heading" }, [
                createVNode("span", { class: "links" }, "Sort")
              ])
            ]),
            "accordion-content": withCtx(() => [
              createVNode("ul", { class: "sort-filter_list subtitle-small" }, [
                createVNode("li", null, "Price"),
                createVNode("li", null, "Categories")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UIAccordion_item, null, {
            "accordion-trigger": withCtx(() => [
              createVNode("div", { class: "sort-filter_heading" }, [
                createVNode("span", { class: "links" }, "Filter")
              ])
            ]),
            "accordion-content": withCtx(() => [
              createVNode("ul", { class: "sort-filter_list subtitle-small" }, [
                createVNode("li", null, [
                  createVNode(_component_NuxtLink, { to: "/products/list/chairs" }, {
                    default: withCtx(() => [
                      createTextVNode("Chair")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(_component_NuxtLink, { to: "/products/list/tables" }, {
                    default: withCtx(() => [
                      createTextVNode("Tables")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(_component_NuxtLink, { to: "/products/list/ligting" }, {
                    default: withCtx(() => [
                      createTextVNode("Lighting")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("li", null, [
                  createVNode(_component_NuxtLink, { to: "/products/list/decoration" }, {
                    default: withCtx(() => [
                      createTextVNode("Decoration")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="vesta-btn sort-filter_btn" type="button">Apply</button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Product/SortFilter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "[[category]]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useLocalStorage("favorite", []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductSortFilter = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "list-content" }, _attrs))}><div class="list-content_settings"><div class="list-content_settings_item"><svg class="list-content_settings_icon"><use${ssrRenderAttr("href", _imports_0 + "#sort")}></use></svg><span>Sort</span></div><div class="list-content_settings_item"><svg class="list-content_settings_icon"><use${ssrRenderAttr("href", _imports_0 + "#filter")}></use></svg><span>Filter</span></div></div><div class="list-content_container"><div class="list-content_sort-filter">`);
      _push(ssrRenderComponent(_component_ProductSortFilter, null, null, _parent));
      _push(`</div><div class="list-content_grid">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/list/[[category]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_category_-CryE_r3G.mjs.map
