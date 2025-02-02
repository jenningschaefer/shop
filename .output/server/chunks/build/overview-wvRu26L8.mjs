import { _ as _sfc_main$1, a as __nuxt_component_1 } from './accordion-item-C2fGNNOD.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './server.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "overview",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAccordion = _sfc_main$1;
      const _component_UIAccordion_item = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overview" }, _attrs))}><h1 class="checkout_title">Overview</h1><div class="overview_container"><div class="overview_accordion">`);
      _push(ssrRenderComponent(_component_UIAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_heading"${_scopeId2}><span class="links"${_scopeId2}>Address</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_heading" }, [
                      createVNode("span", { class: "links" }, "Address")
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_accordion-address"${_scopeId2}><div class="overview_accordion-address-container"${_scopeId2}><h3 class="overview_accordion-address-title"${_scopeId2}>Shipping Address</h3><address${_scopeId2}> Mr John Doe <br${_scopeId2}> mail@to.me <br${_scopeId2}> Stree 45 <br${_scopeId2}> 12345 City <br${_scopeId2}> Germany </address></div><div class="overview_accordion-address-container"${_scopeId2}><h3 class="overview_accordion-address-title"${_scopeId2}>Billing Address</h3><address${_scopeId2}> Mr John Doe <br${_scopeId2}> mail@to.me <br${_scopeId2}> Stree 45 <br${_scopeId2}> 12345 City <br${_scopeId2}> Germany </address></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_accordion-address" }, [
                      createVNode("div", { class: "overview_accordion-address-container" }, [
                        createVNode("h3", { class: "overview_accordion-address-title" }, "Shipping Address"),
                        createVNode("address", null, [
                          createTextVNode(" Mr John Doe "),
                          createVNode("br"),
                          createTextVNode(" mail@to.me "),
                          createVNode("br"),
                          createTextVNode(" Stree 45 "),
                          createVNode("br"),
                          createTextVNode(" 12345 City "),
                          createVNode("br"),
                          createTextVNode(" Germany ")
                        ])
                      ]),
                      createVNode("div", { class: "overview_accordion-address-container" }, [
                        createVNode("h3", { class: "overview_accordion-address-title" }, "Billing Address"),
                        createVNode("address", null, [
                          createTextVNode(" Mr John Doe "),
                          createVNode("br"),
                          createTextVNode(" mail@to.me "),
                          createVNode("br"),
                          createTextVNode(" Stree 45 "),
                          createVNode("br"),
                          createTextVNode(" 12345 City "),
                          createVNode("br"),
                          createTextVNode(" Germany ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_heading"${_scopeId2}><span class="links"${_scopeId2}>Products</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_heading" }, [
                      createVNode("span", { class: "links" }, "Products")
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_accordion-products"${_scopeId2}><div class="overview_accordion-products-name"${_scopeId2}> Hermann D. Strauss Chair </div><div class="overview_accordion-products-price"${_scopeId2}><span${_scopeId2}>x2</span><span${_scopeId2}>75.00$</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_accordion-products" }, [
                      createVNode("div", { class: "overview_accordion-products-name" }, " Hermann D. Strauss Chair "),
                      createVNode("div", { class: "overview_accordion-products-price" }, [
                        createVNode("span", null, "x2"),
                        createVNode("span", null, "75.00$")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_heading"${_scopeId2}><span class="links"${_scopeId2}>Payment</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_heading" }, [
                      createVNode("span", { class: "links" }, "Payment")
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_accordion-payment"${_scopeId2}><div class="overview_accordion-payment-name"${_scopeId2}> Credit Card </div><div class="overview_accordion-payment-price"${_scopeId2}><span${_scopeId2}>5.00$</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_accordion-payment" }, [
                      createVNode("div", { class: "overview_accordion-payment-name" }, " Credit Card "),
                      createVNode("div", { class: "overview_accordion-payment-price" }, [
                        createVNode("span", null, "5.00$")
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
                  createVNode("div", { class: "overview_heading" }, [
                    createVNode("span", { class: "links" }, "Address")
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("div", { class: "overview_accordion-address" }, [
                    createVNode("div", { class: "overview_accordion-address-container" }, [
                      createVNode("h3", { class: "overview_accordion-address-title" }, "Shipping Address"),
                      createVNode("address", null, [
                        createTextVNode(" Mr John Doe "),
                        createVNode("br"),
                        createTextVNode(" mail@to.me "),
                        createVNode("br"),
                        createTextVNode(" Stree 45 "),
                        createVNode("br"),
                        createTextVNode(" 12345 City "),
                        createVNode("br"),
                        createTextVNode(" Germany ")
                      ])
                    ]),
                    createVNode("div", { class: "overview_accordion-address-container" }, [
                      createVNode("h3", { class: "overview_accordion-address-title" }, "Billing Address"),
                      createVNode("address", null, [
                        createTextVNode(" Mr John Doe "),
                        createVNode("br"),
                        createTextVNode(" mail@to.me "),
                        createVNode("br"),
                        createTextVNode(" Stree 45 "),
                        createVNode("br"),
                        createTextVNode(" 12345 City "),
                        createVNode("br"),
                        createTextVNode(" Germany ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UIAccordion_item, null, {
                "accordion-trigger": withCtx(() => [
                  createVNode("div", { class: "overview_heading" }, [
                    createVNode("span", { class: "links" }, "Products")
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("div", { class: "overview_accordion-products" }, [
                    createVNode("div", { class: "overview_accordion-products-name" }, " Hermann D. Strauss Chair "),
                    createVNode("div", { class: "overview_accordion-products-price" }, [
                      createVNode("span", null, "x2"),
                      createVNode("span", null, "75.00$")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UIAccordion_item, null, {
                "accordion-trigger": withCtx(() => [
                  createVNode("div", { class: "overview_heading" }, [
                    createVNode("span", { class: "links" }, "Payment")
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("div", { class: "overview_accordion-payment" }, [
                    createVNode("div", { class: "overview_accordion-payment-name" }, " Credit Card "),
                    createVNode("div", { class: "overview_accordion-payment-price" }, [
                      createVNode("span", null, "5.00$")
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
      _push(`</div><div class="overview_address"><div class="overview_heading"><span class="links">Address</span></div><div class="overview_accordion-address"><div class="overview_accordion-address-container"><h3 class="overview_accordion-address-title">Shipping Address</h3><address> Mr John Doe <br> mail@to.me <br> Stree 45 <br> 12345 City <br> Germany </address></div><div class="overview_accordion-address-container"><h3 class="overview_accordion-address-title">Billing Address</h3><address> Mr John Doe <br> mail@to.me <br> Stree 45 <br> 12345 City <br> Germany </address></div></div></div><div class="overview_product"><div class="overview_heading"><span class="links">Products</span></div><div class="overview_accordion-products"><div class="overview_accordion-products-name"> Hermann D. Strauss Chair </div><div class="overview_accordion-products-price"><span>x2</span><span>75.00$</span></div></div></div><div class="overview_payment"><span>Credit Card</span><span>5.00$</span></div><div class="overview_shipping"><span>Shipping</span><span>5.00$</span></div><div class="overview_total"><span class="overview_total-desc">Total</span><span class="overview_total-amount">150.00$</span></div><div class="overview_legal"><a class="overview_legal-tt"><svg class="overview_legal-tt_icon"><use${ssrRenderAttr("href", _imports_0 + "#download")}></use></svg><div class="overview_legal-tt-text">Terms &amp; conditions</div></a><div class="overview_legal-accept"><label><input type="checkbox"><span class="space"></span>I accept all Terms and Conditions </label></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=overview-wvRu26L8.mjs.map
