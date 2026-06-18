import { defineComponent, computed, reactive, watch, mergeProps, unref, withCtx, createVNode, withDirectives, isRef, vModelCheckbox, createTextVNode, toDisplayString, vModelText, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { c as useI18n, m as useCheckoutFlow } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "address-tabs",
  __ssrInlineRender: true,
  props: {
    customClass: {}
  },
  setup(__props) {
    const tabContainer = ref(null);
    ref([]);
    const tabs = ref([]);
    const activeTabIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "tabs-container",
        ref_key: "tabContainer",
        ref: tabContainer,
        class: ["address-tabs", __props.customClass]
      }, _attrs))}><div id="tab-headers" class="address-tabs_headers"><ul><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<li class="${ssrRenderClass(unref(activeTabIndex) === index ? "active" : "")}"><h5>${ssrInterpolate(tab.title)}</h5></li>`);
      });
      _push(`<!--]--></ul></div><div id="active-tab" class="address-tabs_active">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/address-tabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "UIAddressTabs" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "address-item",
  __ssrInlineRender: true,
  props: {
    active: { type: [Boolean, String], default: false },
    title: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const isActive = computed(() => props.active === true || props.active === "true");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["address-tab", unref(isActive) ? "active" : ""],
        title: __props.title
      }, _attrs))}><div class="address-tab_heading">`);
      ssrRenderSlot(_ctx.$slots, "heading", {}, null, _push, _parent);
      _push(`</div><div>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/address-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UIAddressItem" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const flow = useCheckoutFlow();
    const { shipping, billing, billingSameAsShipping } = flow;
    const fillDummy = computed({
      get: () => flow.fillDummy.value,
      set: (v) => {
        flow.fillDummy.value = v;
      }
    });
    const touched = reactive({});
    function touch(key) {
      touched[key] = true;
    }
    function isNonEmpty(v) {
      return v.trim().length > 0;
    }
    function isDigits(v) {
      return /^\d+$/.test(v.trim());
    }
    function isEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
    }
    function showInvalid(key) {
      return Boolean(flow.addressAttempted.value || touched[key]);
    }
    const shippingInvalid = computed(() => ({
      firstName: showInvalid("s.firstName") && !isNonEmpty(flow.shipping.value.firstName),
      lastName: showInvalid("s.lastName") && !isNonEmpty(flow.shipping.value.lastName),
      country: showInvalid("s.country") && !isNonEmpty(flow.shipping.value.country),
      street: showInvalid("s.street") && !isNonEmpty(flow.shipping.value.street),
      houseNo: showInvalid("s.houseNo") && !isDigits(flow.shipping.value.houseNo),
      zip: showInvalid("s.zip") && !isDigits(flow.shipping.value.zip),
      city: showInvalid("s.city") && !isNonEmpty(flow.shipping.value.city)
    }));
    const billingInvalid = computed(() => {
      const b = flow.billing.value;
      const email = showInvalid("b.email") && !isEmail(b.email);
      if (flow.billingSameAsShipping.value) {
        return {
          firstName: false,
          lastName: false,
          email,
          country: false,
          street: false,
          houseNo: false,
          zip: false,
          city: false
        };
      }
      return {
        firstName: showInvalid("b.firstName") && !isNonEmpty(b.firstName),
        lastName: showInvalid("b.lastName") && !isNonEmpty(b.lastName),
        email,
        country: showInvalid("b.country") && !isNonEmpty(b.country),
        street: showInvalid("b.street") && !isNonEmpty(b.street),
        houseNo: showInvalid("b.houseNo") && !isDigits(b.houseNo),
        zip: showInvalid("b.zip") && !isDigits(b.zip),
        city: showInvalid("b.city") && !isNonEmpty(b.city)
      };
    });
    function applyDummyData() {
      flow.shipping.value = {
        firstName: "John",
        lastName: "Doe",
        country: "Germany",
        street: "Main Street",
        houseNo: "1",
        zip: "12345",
        city: "Berlin"
      };
      if (flow.billingSameAsShipping.value) {
        flow.billing.value = { ...flow.billing.value, ...flow.shipping.value };
      }
    }
    watch(fillDummy, (enabled) => {
      if (enabled) applyDummyData();
    });
    watch(
      () => flow.billingSameAsShipping.value,
      (same) => {
        if (same) {
          flow.billing.value = { ...flow.billing.value, ...flow.shipping.value };
        }
      },
      { immediate: true }
    );
    watch(
      () => flow.shipping.value,
      (shipping2) => {
        if (flow.billingSameAsShipping.value) {
          flow.billing.value = { ...flow.billing.value, ...shipping2 };
        }
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAddress_tabs = __nuxt_component_0;
      const _component_UIAddress_item = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "address" }, _attrs))}><h1 class="checkout_title">${ssrInterpolate(unref(t)("checkout.address"))}</h1><div class="address-container">`);
      _push(ssrRenderComponent(_component_UIAddress_tabs, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIAddress_item, {
              active: "true",
              title: unref(t)("checkout.shippingAddress")
            }, {
              heading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("checkout.shippingAddress"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("checkout.shippingAddress")), 1)
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form action=""${_scopeId2}><div class="login_forms-group"${_scopeId2}><label${_scopeId2}><input${ssrIncludeBooleanAttr(Array.isArray(unref(fillDummy)) ? ssrLooseContain(unref(fillDummy), null) : unref(fillDummy)) ? " checked" : ""} type="checkbox"${_scopeId2}> ${ssrInterpolate(unref(t)("checkout.fillDummy"))}</label><input${ssrRenderAttr("value", unref(shipping).firstName)} class="${ssrRenderClass([{ "input-invalid": unref(shippingInvalid).firstName }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.firstName"))}${_scopeId2}><input${ssrRenderAttr("value", unref(shipping).lastName)} class="${ssrRenderClass([{ "input-invalid": unref(shippingInvalid).lastName }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.lastName"))}${_scopeId2}><input${ssrRenderAttr("value", unref(shipping).country)} class="${ssrRenderClass([{ "input-invalid": unref(shippingInvalid).country }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.country"))}${_scopeId2}><input${ssrRenderAttr("value", unref(shipping).street)} class="${ssrRenderClass([{ "input-invalid": unref(shippingInvalid).street }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.street"))}${_scopeId2}><input${ssrRenderAttr("value", unref(shipping).houseNo)} class="${ssrRenderClass([{ "input-invalid": unref(shippingInvalid).houseNo }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("checkout.houseNo"))} inputmode="numeric"${_scopeId2}><input${ssrRenderAttr("value", unref(shipping).zip)} class="${ssrRenderClass([{ "input-invalid": unref(shippingInvalid).zip }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.zip"))} inputmode="numeric"${_scopeId2}><input${ssrRenderAttr("value", unref(shipping).city)} class="${ssrRenderClass([{ "input-invalid": unref(shippingInvalid).city }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.city"))}${_scopeId2}></div></form>`);
                } else {
                  return [
                    createVNode("form", { action: "" }, [
                      createVNode("div", { class: "login_forms-group" }, [
                        createVNode("label", null, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => isRef(fillDummy) ? fillDummy.value = $event : null,
                            type: "checkbox"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(fillDummy)]
                          ]),
                          createTextVNode(" " + toDisplayString(unref(t)("checkout.fillDummy")), 1)
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(shipping).firstName = $event,
                          class: [{ "input-invalid": unref(shippingInvalid).firstName }, ""],
                          type: "text",
                          placeholder: unref(t)("address.firstName"),
                          onBlur: ($event) => touch("s.firstName")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(shipping).firstName]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(shipping).lastName = $event,
                          class: [{ "input-invalid": unref(shippingInvalid).lastName }, ""],
                          type: "text",
                          placeholder: unref(t)("address.lastName"),
                          onBlur: ($event) => touch("s.lastName")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(shipping).lastName]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(shipping).country = $event,
                          class: [{ "input-invalid": unref(shippingInvalid).country }, ""],
                          type: "text",
                          placeholder: unref(t)("address.country"),
                          onBlur: ($event) => touch("s.country")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(shipping).country]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(shipping).street = $event,
                          class: [{ "input-invalid": unref(shippingInvalid).street }, ""],
                          type: "text",
                          placeholder: unref(t)("address.street"),
                          onBlur: ($event) => touch("s.street")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(shipping).street]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(shipping).houseNo = $event,
                          class: [{ "input-invalid": unref(shippingInvalid).houseNo }, ""],
                          type: "text",
                          placeholder: unref(t)("checkout.houseNo"),
                          inputmode: "numeric",
                          onBlur: ($event) => touch("s.houseNo")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(shipping).houseNo]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(shipping).zip = $event,
                          class: [{ "input-invalid": unref(shippingInvalid).zip }, ""],
                          type: "text",
                          placeholder: unref(t)("address.zip"),
                          inputmode: "numeric",
                          onBlur: ($event) => touch("s.zip")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(shipping).zip]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(shipping).city = $event,
                          class: [{ "input-invalid": unref(shippingInvalid).city }, ""],
                          type: "text",
                          placeholder: unref(t)("address.city"),
                          onBlur: ($event) => touch("s.city")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(shipping).city]
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIAddress_item, {
              title: unref(t)("checkout.billingAddress")
            }, {
              heading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("checkout.billingAddress"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("checkout.billingAddress")), 1)
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form action=""${_scopeId2}><div class="login_forms-group"${_scopeId2}><label${_scopeId2}><input${ssrIncludeBooleanAttr(Array.isArray(unref(billingSameAsShipping)) ? ssrLooseContain(unref(billingSameAsShipping), null) : unref(billingSameAsShipping)) ? " checked" : ""} type="checkbox"${_scopeId2}> ${ssrInterpolate(unref(t)("checkout.sameAsShipping"))}</label><input${ssrRenderAttr("value", unref(billing).firstName)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).firstName }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.firstName"))}${ssrIncludeBooleanAttr(unref(billingSameAsShipping)) ? " disabled" : ""}${_scopeId2}><input${ssrRenderAttr("value", unref(billing).lastName)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).lastName }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.lastName"))}${ssrIncludeBooleanAttr(unref(billingSameAsShipping)) ? " disabled" : ""}${_scopeId2}><input${ssrRenderAttr("value", unref(billing).email)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).email }, ""])}" class="" type="email"${ssrRenderAttr("placeholder", unref(t)("auth.email"))}${_scopeId2}><input${ssrRenderAttr("value", unref(billing).country)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).country }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.country"))}${ssrIncludeBooleanAttr(unref(billingSameAsShipping)) ? " disabled" : ""}${_scopeId2}><input${ssrRenderAttr("value", unref(billing).street)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).street }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.street"))}${ssrIncludeBooleanAttr(unref(billingSameAsShipping)) ? " disabled" : ""}${_scopeId2}><input${ssrRenderAttr("value", unref(billing).houseNo)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).houseNo }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("checkout.houseNo"))}${ssrIncludeBooleanAttr(unref(billingSameAsShipping)) ? " disabled" : ""} inputmode="numeric"${_scopeId2}><input${ssrRenderAttr("value", unref(billing).zip)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).zip }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.zip"))}${ssrIncludeBooleanAttr(unref(billingSameAsShipping)) ? " disabled" : ""} inputmode="numeric"${_scopeId2}><input${ssrRenderAttr("value", unref(billing).city)} class="${ssrRenderClass([{ "input-invalid": unref(billingInvalid).city }, ""])}" class="" type="text"${ssrRenderAttr("placeholder", unref(t)("address.city"))}${ssrIncludeBooleanAttr(unref(billingSameAsShipping)) ? " disabled" : ""}${_scopeId2}></div></form>`);
                } else {
                  return [
                    createVNode("form", { action: "" }, [
                      createVNode("div", { class: "login_forms-group" }, [
                        createVNode("label", null, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => isRef(billingSameAsShipping) ? billingSameAsShipping.value = $event : null,
                            type: "checkbox"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(billingSameAsShipping)]
                          ]),
                          createTextVNode(" " + toDisplayString(unref(t)("checkout.sameAsShipping")), 1)
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).firstName = $event,
                          class: [{ "input-invalid": unref(billingInvalid).firstName }, ""],
                          type: "text",
                          placeholder: unref(t)("address.firstName"),
                          disabled: unref(billingSameAsShipping),
                          onBlur: ($event) => touch("b.firstName")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                          [vModelText, unref(billing).firstName]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).lastName = $event,
                          class: [{ "input-invalid": unref(billingInvalid).lastName }, ""],
                          type: "text",
                          placeholder: unref(t)("address.lastName"),
                          disabled: unref(billingSameAsShipping),
                          onBlur: ($event) => touch("b.lastName")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                          [vModelText, unref(billing).lastName]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).email = $event,
                          class: [{ "input-invalid": unref(billingInvalid).email }, ""],
                          type: "email",
                          placeholder: unref(t)("auth.email"),
                          onBlur: ($event) => touch("b.email")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                          [vModelText, unref(billing).email]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).country = $event,
                          class: [{ "input-invalid": unref(billingInvalid).country }, ""],
                          type: "text",
                          placeholder: unref(t)("address.country"),
                          disabled: unref(billingSameAsShipping),
                          onBlur: ($event) => touch("b.country")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                          [vModelText, unref(billing).country]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).street = $event,
                          class: [{ "input-invalid": unref(billingInvalid).street }, ""],
                          type: "text",
                          placeholder: unref(t)("address.street"),
                          disabled: unref(billingSameAsShipping),
                          onBlur: ($event) => touch("b.street")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                          [vModelText, unref(billing).street]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).houseNo = $event,
                          class: [{ "input-invalid": unref(billingInvalid).houseNo }, ""],
                          type: "text",
                          placeholder: unref(t)("checkout.houseNo"),
                          disabled: unref(billingSameAsShipping),
                          inputmode: "numeric",
                          onBlur: ($event) => touch("b.houseNo")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                          [vModelText, unref(billing).houseNo]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).zip = $event,
                          class: [{ "input-invalid": unref(billingInvalid).zip }, ""],
                          type: "text",
                          placeholder: unref(t)("address.zip"),
                          disabled: unref(billingSameAsShipping),
                          inputmode: "numeric",
                          onBlur: ($event) => touch("b.zip")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                          [vModelText, unref(billing).zip]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(billing).city = $event,
                          class: [{ "input-invalid": unref(billingInvalid).city }, ""],
                          type: "text",
                          placeholder: unref(t)("address.city"),
                          disabled: unref(billingSameAsShipping),
                          onBlur: ($event) => touch("b.city")
                        }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                          [vModelText, unref(billing).city]
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIAddress_item, {
                active: "true",
                title: unref(t)("checkout.shippingAddress")
              }, {
                heading: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("checkout.shippingAddress")), 1)
                ]),
                content: withCtx(() => [
                  createVNode("form", { action: "" }, [
                    createVNode("div", { class: "login_forms-group" }, [
                      createVNode("label", null, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(fillDummy) ? fillDummy.value = $event : null,
                          type: "checkbox"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, unref(fillDummy)]
                        ]),
                        createTextVNode(" " + toDisplayString(unref(t)("checkout.fillDummy")), 1)
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(shipping).firstName = $event,
                        class: [{ "input-invalid": unref(shippingInvalid).firstName }, ""],
                        type: "text",
                        placeholder: unref(t)("address.firstName"),
                        onBlur: ($event) => touch("s.firstName")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(shipping).firstName]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(shipping).lastName = $event,
                        class: [{ "input-invalid": unref(shippingInvalid).lastName }, ""],
                        type: "text",
                        placeholder: unref(t)("address.lastName"),
                        onBlur: ($event) => touch("s.lastName")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(shipping).lastName]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(shipping).country = $event,
                        class: [{ "input-invalid": unref(shippingInvalid).country }, ""],
                        type: "text",
                        placeholder: unref(t)("address.country"),
                        onBlur: ($event) => touch("s.country")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(shipping).country]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(shipping).street = $event,
                        class: [{ "input-invalid": unref(shippingInvalid).street }, ""],
                        type: "text",
                        placeholder: unref(t)("address.street"),
                        onBlur: ($event) => touch("s.street")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(shipping).street]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(shipping).houseNo = $event,
                        class: [{ "input-invalid": unref(shippingInvalid).houseNo }, ""],
                        type: "text",
                        placeholder: unref(t)("checkout.houseNo"),
                        inputmode: "numeric",
                        onBlur: ($event) => touch("s.houseNo")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(shipping).houseNo]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(shipping).zip = $event,
                        class: [{ "input-invalid": unref(shippingInvalid).zip }, ""],
                        type: "text",
                        placeholder: unref(t)("address.zip"),
                        inputmode: "numeric",
                        onBlur: ($event) => touch("s.zip")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(shipping).zip]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(shipping).city = $event,
                        class: [{ "input-invalid": unref(shippingInvalid).city }, ""],
                        type: "text",
                        placeholder: unref(t)("address.city"),
                        onBlur: ($event) => touch("s.city")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(shipping).city]
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode(_component_UIAddress_item, {
                title: unref(t)("checkout.billingAddress")
              }, {
                heading: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("checkout.billingAddress")), 1)
                ]),
                content: withCtx(() => [
                  createVNode("form", { action: "" }, [
                    createVNode("div", { class: "login_forms-group" }, [
                      createVNode("label", null, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(billingSameAsShipping) ? billingSameAsShipping.value = $event : null,
                          type: "checkbox"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, unref(billingSameAsShipping)]
                        ]),
                        createTextVNode(" " + toDisplayString(unref(t)("checkout.sameAsShipping")), 1)
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).firstName = $event,
                        class: [{ "input-invalid": unref(billingInvalid).firstName }, ""],
                        type: "text",
                        placeholder: unref(t)("address.firstName"),
                        disabled: unref(billingSameAsShipping),
                        onBlur: ($event) => touch("b.firstName")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                        [vModelText, unref(billing).firstName]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).lastName = $event,
                        class: [{ "input-invalid": unref(billingInvalid).lastName }, ""],
                        type: "text",
                        placeholder: unref(t)("address.lastName"),
                        disabled: unref(billingSameAsShipping),
                        onBlur: ($event) => touch("b.lastName")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                        [vModelText, unref(billing).lastName]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).email = $event,
                        class: [{ "input-invalid": unref(billingInvalid).email }, ""],
                        type: "email",
                        placeholder: unref(t)("auth.email"),
                        onBlur: ($event) => touch("b.email")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "onBlur"]), [
                        [vModelText, unref(billing).email]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).country = $event,
                        class: [{ "input-invalid": unref(billingInvalid).country }, ""],
                        type: "text",
                        placeholder: unref(t)("address.country"),
                        disabled: unref(billingSameAsShipping),
                        onBlur: ($event) => touch("b.country")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                        [vModelText, unref(billing).country]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).street = $event,
                        class: [{ "input-invalid": unref(billingInvalid).street }, ""],
                        type: "text",
                        placeholder: unref(t)("address.street"),
                        disabled: unref(billingSameAsShipping),
                        onBlur: ($event) => touch("b.street")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                        [vModelText, unref(billing).street]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).houseNo = $event,
                        class: [{ "input-invalid": unref(billingInvalid).houseNo }, ""],
                        type: "text",
                        placeholder: unref(t)("checkout.houseNo"),
                        disabled: unref(billingSameAsShipping),
                        inputmode: "numeric",
                        onBlur: ($event) => touch("b.houseNo")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                        [vModelText, unref(billing).houseNo]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).zip = $event,
                        class: [{ "input-invalid": unref(billingInvalid).zip }, ""],
                        type: "text",
                        placeholder: unref(t)("address.zip"),
                        disabled: unref(billingSameAsShipping),
                        inputmode: "numeric",
                        onBlur: ($event) => touch("b.zip")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                        [vModelText, unref(billing).zip]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(billing).city = $event,
                        class: [{ "input-invalid": unref(billingInvalid).city }, ""],
                        type: "text",
                        placeholder: unref(t)("address.city"),
                        disabled: unref(billingSameAsShipping),
                        onBlur: ($event) => touch("b.city")
                      }, null, 42, ["onUpdate:modelValue", "placeholder", "disabled", "onBlur"]), [
                        [vModelText, unref(billing).city]
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=address-DEhqlkmd.mjs.map
