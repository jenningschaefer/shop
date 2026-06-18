import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './accordion-item-DzWSSQpg.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { c as useI18n, m as useCheckoutFlow, e as _imports_0$1 } from './server.mjs';
import { u as useCart } from './useCart-C08RemqV.mjs';
import { u as useCheckoutPayments } from './useCheckoutPayments-aepoy5F6.mjs';
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
  __name: "overview",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const flow = useCheckoutFlow();
    const { cart, subtotal, shipping: shippingCost } = useCart();
    const { selectedMethod, format } = useCheckoutPayments();
    const { acceptTerms } = flow;
    const shippingAddress = computed(() => flow.shipping.value);
    const billingAddress = computed(() => flow.billing.value);
    const termsPdf = computed(() => locale.value === "en" ? "/terms-en.pdf" : "/terms-de.pdf");
    const grandTotal = computed(() => subtotal.value + shippingCost.value + selectedMethod.value.fee);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAccordion = __nuxt_component_1;
      const _component_UIAccordion_item = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overview" }, _attrs))}><h1 class="checkout_title">${ssrInterpolate(unref(t)("checkout.overview"))}</h1><div class="overview_container"><div class="overview_accordion">`);
      _push(ssrRenderComponent(_component_UIAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_heading"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("checkout.address"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_heading" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("checkout.address")), 1)
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_accordion-address"${_scopeId2}><div class="overview_accordion-address-container"${_scopeId2}><h3 class="overview_accordion-address-title"${_scopeId2}>${ssrInterpolate(unref(t)("checkout.shippingAddress"))}</h3><address${_scopeId2}>${ssrInterpolate(unref(shippingAddress).firstName)} ${ssrInterpolate(unref(shippingAddress).lastName)} <br${_scopeId2}> ${ssrInterpolate(unref(shippingAddress).street)} ${ssrInterpolate(unref(shippingAddress).houseNo)} <br${_scopeId2}> ${ssrInterpolate(unref(shippingAddress).zip)} ${ssrInterpolate(unref(shippingAddress).city)} <br${_scopeId2}> ${ssrInterpolate(unref(shippingAddress).country)}</address></div><div class="overview_accordion-address-container"${_scopeId2}><h3 class="overview_accordion-address-title"${_scopeId2}>${ssrInterpolate(unref(t)("checkout.billingAddress"))}</h3><address${_scopeId2}>${ssrInterpolate(unref(billingAddress).firstName)} ${ssrInterpolate(unref(billingAddress).lastName)} <br${_scopeId2}> ${ssrInterpolate(unref(billingAddress).email)} <br${_scopeId2}> ${ssrInterpolate(unref(billingAddress).street)} ${ssrInterpolate(unref(billingAddress).houseNo)} <br${_scopeId2}> ${ssrInterpolate(unref(billingAddress).zip)} ${ssrInterpolate(unref(billingAddress).city)} <br${_scopeId2}> ${ssrInterpolate(unref(billingAddress).country)}</address></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_accordion-address" }, [
                      createVNode("div", { class: "overview_accordion-address-container" }, [
                        createVNode("h3", { class: "overview_accordion-address-title" }, toDisplayString(unref(t)("checkout.shippingAddress")), 1),
                        createVNode("address", null, [
                          createTextVNode(toDisplayString(unref(shippingAddress).firstName) + " " + toDisplayString(unref(shippingAddress).lastName) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(shippingAddress).street) + " " + toDisplayString(unref(shippingAddress).houseNo) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(shippingAddress).zip) + " " + toDisplayString(unref(shippingAddress).city) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(shippingAddress).country), 1)
                        ])
                      ]),
                      createVNode("div", { class: "overview_accordion-address-container" }, [
                        createVNode("h3", { class: "overview_accordion-address-title" }, toDisplayString(unref(t)("checkout.billingAddress")), 1),
                        createVNode("address", null, [
                          createTextVNode(toDisplayString(unref(billingAddress).firstName) + " " + toDisplayString(unref(billingAddress).lastName) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(billingAddress).email) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(billingAddress).street) + " " + toDisplayString(unref(billingAddress).houseNo) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(billingAddress).zip) + " " + toDisplayString(unref(billingAddress).city) + " ", 1),
                          createVNode("br"),
                          createTextVNode(" " + toDisplayString(unref(billingAddress).country), 1)
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
                  _push3(`<div class="overview_heading"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("nav.products"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_heading" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("nav.products")), 1)
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(cart), (item) => {
                    _push3(`<div class="overview_accordion-products"${_scopeId2}><div class="overview_accordion-products-name"${_scopeId2}>${ssrInterpolate(item.name)}</div><div class="overview_accordion-products-price"${_scopeId2}><span${_scopeId2}>x${ssrInterpolate(item.amount)}</span><span${_scopeId2}>${ssrInterpolate(unref(format)(item.price * item.amount))}</span></div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(cart), (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.id,
                        class: "overview_accordion-products"
                      }, [
                        createVNode("div", { class: "overview_accordion-products-name" }, toDisplayString(item.name), 1),
                        createVNode("div", { class: "overview_accordion-products-price" }, [
                          createVNode("span", null, "x" + toDisplayString(item.amount), 1),
                          createVNode("span", null, toDisplayString(unref(format)(item.price * item.amount)), 1)
                        ])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_heading"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("checkout.payment"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_heading" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("checkout.payment")), 1)
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="overview_accordion-payment"${_scopeId2}><div class="overview_accordion-payment-name"${_scopeId2}>${ssrInterpolate(unref(selectedMethod).name)}</div><div class="overview_accordion-payment-price"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref(format)(unref(selectedMethod).fee))}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "overview_accordion-payment" }, [
                      createVNode("div", { class: "overview_accordion-payment-name" }, toDisplayString(unref(selectedMethod).name), 1),
                      createVNode("div", { class: "overview_accordion-payment-price" }, [
                        createVNode("span", null, toDisplayString(unref(format)(unref(selectedMethod).fee)), 1)
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
                    createVNode("span", { class: "links" }, toDisplayString(unref(t)("checkout.address")), 1)
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("div", { class: "overview_accordion-address" }, [
                    createVNode("div", { class: "overview_accordion-address-container" }, [
                      createVNode("h3", { class: "overview_accordion-address-title" }, toDisplayString(unref(t)("checkout.shippingAddress")), 1),
                      createVNode("address", null, [
                        createTextVNode(toDisplayString(unref(shippingAddress).firstName) + " " + toDisplayString(unref(shippingAddress).lastName) + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(shippingAddress).street) + " " + toDisplayString(unref(shippingAddress).houseNo) + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(shippingAddress).zip) + " " + toDisplayString(unref(shippingAddress).city) + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(shippingAddress).country), 1)
                      ])
                    ]),
                    createVNode("div", { class: "overview_accordion-address-container" }, [
                      createVNode("h3", { class: "overview_accordion-address-title" }, toDisplayString(unref(t)("checkout.billingAddress")), 1),
                      createVNode("address", null, [
                        createTextVNode(toDisplayString(unref(billingAddress).firstName) + " " + toDisplayString(unref(billingAddress).lastName) + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(billingAddress).email) + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(billingAddress).street) + " " + toDisplayString(unref(billingAddress).houseNo) + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(billingAddress).zip) + " " + toDisplayString(unref(billingAddress).city) + " ", 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(billingAddress).country), 1)
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UIAccordion_item, null, {
                "accordion-trigger": withCtx(() => [
                  createVNode("div", { class: "overview_heading" }, [
                    createVNode("span", { class: "links" }, toDisplayString(unref(t)("nav.products")), 1)
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cart), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "overview_accordion-products"
                    }, [
                      createVNode("div", { class: "overview_accordion-products-name" }, toDisplayString(item.name), 1),
                      createVNode("div", { class: "overview_accordion-products-price" }, [
                        createVNode("span", null, "x" + toDisplayString(item.amount), 1),
                        createVNode("span", null, toDisplayString(unref(format)(item.price * item.amount)), 1)
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_UIAccordion_item, null, {
                "accordion-trigger": withCtx(() => [
                  createVNode("div", { class: "overview_heading" }, [
                    createVNode("span", { class: "links" }, toDisplayString(unref(t)("checkout.payment")), 1)
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("div", { class: "overview_accordion-payment" }, [
                    createVNode("div", { class: "overview_accordion-payment-name" }, toDisplayString(unref(selectedMethod).name), 1),
                    createVNode("div", { class: "overview_accordion-payment-price" }, [
                      createVNode("span", null, toDisplayString(unref(format)(unref(selectedMethod).fee)), 1)
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
      _push(`</div><div class="overview_address"><div class="overview_heading"><span class="links">${ssrInterpolate(unref(t)("checkout.address"))}</span></div><div class="overview_accordion-address"><div class="overview_accordion-address-container"><h3 class="overview_accordion-address-title">${ssrInterpolate(unref(t)("checkout.shippingAddress"))}</h3><address>${ssrInterpolate(unref(shippingAddress).firstName)} ${ssrInterpolate(unref(shippingAddress).lastName)} <br> ${ssrInterpolate(unref(shippingAddress).street)} ${ssrInterpolate(unref(shippingAddress).houseNo)} <br> ${ssrInterpolate(unref(shippingAddress).zip)} ${ssrInterpolate(unref(shippingAddress).city)} <br> ${ssrInterpolate(unref(shippingAddress).country)}</address></div><div class="overview_accordion-address-container"><h3 class="overview_accordion-address-title">${ssrInterpolate(unref(t)("checkout.billingAddress"))}</h3><address>${ssrInterpolate(unref(billingAddress).firstName)} ${ssrInterpolate(unref(billingAddress).lastName)} <br> ${ssrInterpolate(unref(billingAddress).email)} <br> ${ssrInterpolate(unref(billingAddress).street)} ${ssrInterpolate(unref(billingAddress).houseNo)} <br> ${ssrInterpolate(unref(billingAddress).zip)} ${ssrInterpolate(unref(billingAddress).city)} <br> ${ssrInterpolate(unref(billingAddress).country)}</address></div></div></div><div class="overview_product"><div class="overview_heading"><span class="links">${ssrInterpolate(unref(t)("nav.products"))}</span></div><!--[-->`);
      ssrRenderList(unref(cart), (item) => {
        _push(`<div class="overview_accordion-products"><div class="overview_accordion-products-name">${ssrInterpolate(item.name)}</div><div class="overview_accordion-products-price"><span>x${ssrInterpolate(item.amount)}</span><span>${ssrInterpolate(unref(format)(item.price * item.amount))}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="overview_payment"><span>${ssrInterpolate(unref(selectedMethod).name)}</span><span>${ssrInterpolate(unref(format)(unref(selectedMethod).fee))}</span></div><div class="overview_shipping"><span>${ssrInterpolate(unref(t)("cart.shipping"))}</span><span>${ssrInterpolate(unref(format)(unref(shippingCost)))}</span></div><div class="overview_total"><span class="overview_total-desc">${ssrInterpolate(unref(t)("cart.total"))}</span><span class="overview_total-amount">${ssrInterpolate(unref(format)(unref(grandTotal)))}</span></div><div class="overview_legal"><a class="overview_legal-tt"${ssrRenderAttr("href", unref(termsPdf))} target="_blank" rel="noopener" download><svg class="overview_legal-tt_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#download")}></use></svg><div class="overview_legal-tt-text">${ssrInterpolate(unref(t)("checkout.termsConditions"))}</div></a><div class="overview_legal-accept"><label><input${ssrIncludeBooleanAttr(Array.isArray(unref(acceptTerms)) ? ssrLooseContain(unref(acceptTerms), null) : unref(acceptTerms)) ? " checked" : ""} type="checkbox"><span class="space"></span> ${ssrInterpolate(unref(t)("checkout.acceptTerms"))}</label></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=overview-uAXgzCMu.mjs.map
