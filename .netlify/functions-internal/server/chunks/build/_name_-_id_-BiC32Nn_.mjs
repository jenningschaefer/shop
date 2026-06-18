import { _ as __nuxt_component_0 } from './NuxtPicture-DDPKDoXr.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './accordion-item-DzWSSQpg.mjs';
import { f as useRoute, c as useI18n, k as useLocalStorage, l as __nuxt_component_0$1, p as __nuxt_component_4$1 } from './server.mjs';
import { defineComponent, ref, unref, withCtx, createVNode, toDisplayString, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './_base-ho7LDtRW.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[name]-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const { t } = useI18n();
    useLocalStorage("cart", []);
    const product = ref(void 0);
    const openCart = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPicture = __nuxt_component_0;
      const _component_UIAccordion = __nuxt_component_1;
      const _component_UIAccordionItem = __nuxt_component_2;
      const _component_UISidenav = __nuxt_component_0$1;
      const _component_OrderCart = __nuxt_component_4$1;
      _push(`<!--[-->`);
      if (unref(product)) {
        _push(`<div class="product"><div class="product_details-mobile"><div>${ssrInterpolate(unref(t)("product.designer"))}: ${ssrInterpolate(unref(product).designer)}</div><div>${ssrInterpolate(unref(product).price)} ${ssrInterpolate(unref(product).currency)}</div></div><div class="product_description"><h1 class="product_description-title">${ssrInterpolate(unref(product).name)}</h1>`);
        _push(ssrRenderComponent(_component_NuxtPicture, {
          src: unref(product).img,
          class: "product_description-img"
        }, null, _parent));
        _push(`<div class="product_description-accordion">`);
        _push(ssrRenderComponent(_component_UIAccordion, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIAccordionItem, null, {
                "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("product.description"))}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "sort-filter_heading" }, [
                        createVNode("span", { class: "links" }, toDisplayString(unref(t)("product.description")), 1)
                      ])
                    ];
                  }
                }),
                "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}>${ssrInterpolate(unref(product).description)}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(unref(product).description), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UIAccordionItem, null, {
                "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("product.specifications"))}</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "sort-filter_heading" }, [
                        createVNode("span", { class: "links" }, toDisplayString(unref(t)("product.specifications")), 1)
                      ])
                    ];
                  }
                }),
                "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3${_scopeId2}>${ssrInterpolate(unref(product).spec_title)}</h3><p${_scopeId2}>${ssrInterpolate(unref(product).spec_text)}</p>`);
                  } else {
                    return [
                      createVNode("h3", null, toDisplayString(unref(product).spec_title), 1),
                      createVNode("p", null, toDisplayString(unref(product).spec_text), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIAccordionItem, null, {
                  "accordion-trigger": withCtx(() => [
                    createVNode("div", { class: "sort-filter_heading" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("product.description")), 1)
                    ])
                  ]),
                  "accordion-content": withCtx(() => [
                    createVNode("p", null, toDisplayString(unref(product).description), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_UIAccordionItem, null, {
                  "accordion-trigger": withCtx(() => [
                    createVNode("div", { class: "sort-filter_heading" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("product.specifications")), 1)
                    ])
                  ]),
                  "accordion-content": withCtx(() => [
                    createVNode("h3", null, toDisplayString(unref(product).spec_title), 1),
                    createVNode("p", null, toDisplayString(unref(product).spec_text), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="product_description-add"><div class="product_description-add-desc">${ssrInterpolate(unref(t)("product.designer"))}: ${ssrInterpolate(unref(product).designer)}</div><div class="product_description-add-desc">${ssrInterpolate(unref(product).price)} ${ssrInterpolate(unref(product).currency)}</div><button class="vesta-btn" type="button">${ssrInterpolate(unref(t)("product.addToCart"))}</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UISidenav, {
        modelValue: unref(openCart),
        "onUpdate:modelValue": ($event) => isRef(openCart) ? openCart.value = $event : null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("nav.cart"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("nav.cart")), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OrderCart, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OrderCart)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[name]-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-_id_-BiC32Nn_.mjs.map
