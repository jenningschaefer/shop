import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main$2 = {
  __name: "address-tabs",
  __ssrInlineRender: true,
  props: ["customClass"],
  setup(__props) {
    let tabContainer = ref(null);
    ref(null);
    let tabs = ref(null);
    let activeTabIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "tabs-container",
        class: ["address-tabs", __props.customClass],
        ref_key: "tabContainer",
        ref: tabContainer
      }, _attrs))}><div id="tab-headers" class="address-tabs_headers"><ul><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<li class="${ssrRenderClass(unref(activeTabIndex) == index ? "active" : "")}"><h5>${ssrInterpolate(tab.title)}</h5></li>`);
      });
      _push(`<!--]--></ul></div><div id="active-tab" class="address-tabs_active">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/address-tabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "address-item",
  __ssrInlineRender: true,
  props: ["active"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["address-tab", __props.active == "true" ? "active" : ""],
        ref: "address-tabs"
      }, _attrs))}><div class="address-tab_heading">`);
      ssrRenderSlot(_ctx.$slots, "heading", {}, null, _push, _parent);
      _push(`</div><div>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/address-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAddress_tabs = _sfc_main$2;
      const _component_UIAddress_item = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "address" }, _attrs))}><h1 class="checkout_title">Address</h1><div class="address-container">`);
      _push(ssrRenderComponent(_component_UIAddress_tabs, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIAddress_item, {
              active: "true",
              title: "Shipping"
            }, {
              heading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Shipping`);
                } else {
                  return [
                    createTextVNode("Shipping")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form action=""${_scopeId2}><div class="login_forms-group"${_scopeId2}><input class="" type="text" placeholder="First Name"${_scopeId2}><input class="" type="text" placeholder="Name"${_scopeId2}><input class="" type="email" placeholder="E-Mail Address"${_scopeId2}><input class="" type="text" placeholder="Country"${_scopeId2}><input class="" type="text" placeholder="Street"${_scopeId2}><input class="" type="text" placeholder="House No."${_scopeId2}><input class="" type="text" placeholder="Zip Code"${_scopeId2}><input class="" type="text" placeholder="City"${_scopeId2}></div></form>`);
                } else {
                  return [
                    createVNode("form", { action: "" }, [
                      createVNode("div", { class: "login_forms-group" }, [
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "First Name"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Name"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "email",
                          placeholder: "E-Mail Address"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Country"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Street"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "House No."
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Zip Code"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "City"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UIAddress_item, { title: "Billing" }, {
              heading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Billing`);
                } else {
                  return [
                    createTextVNode("Billing")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form action=""${_scopeId2}><div class="login_forms-group"${_scopeId2}><label${_scopeId2}><input type="checkbox"${_scopeId2}> Same as Billing </label><input class="" type="text" placeholder="First Name"${_scopeId2}><input class="" type="text" placeholder="Name"${_scopeId2}><input class="" type="email" placeholder="E-Mail Address"${_scopeId2}><input class="" type="text" placeholder="Country"${_scopeId2}><input class="" type="text" placeholder="Street"${_scopeId2}><input class="" type="text" placeholder="House No."${_scopeId2}><input class="" type="text" placeholder="Zip Code"${_scopeId2}><input class="" type="text" placeholder="City"${_scopeId2}></div></form>`);
                } else {
                  return [
                    createVNode("form", { action: "" }, [
                      createVNode("div", { class: "login_forms-group" }, [
                        createVNode("label", null, [
                          createVNode("input", { type: "checkbox" }),
                          createTextVNode(" Same as Billing ")
                        ]),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "First Name"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Name"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "email",
                          placeholder: "E-Mail Address"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Country"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Street"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "House No."
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "Zip Code"
                        }),
                        createVNode("input", {
                          class: "",
                          type: "text",
                          placeholder: "City"
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
              createVNode(_component_UIAddress_item, {
                active: "true",
                title: "Shipping"
              }, {
                heading: withCtx(() => [
                  createTextVNode("Shipping")
                ]),
                content: withCtx(() => [
                  createVNode("form", { action: "" }, [
                    createVNode("div", { class: "login_forms-group" }, [
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "First Name"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Name"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "email",
                        placeholder: "E-Mail Address"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Country"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Street"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "House No."
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Zip Code"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "City"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_UIAddress_item, { title: "Billing" }, {
                heading: withCtx(() => [
                  createTextVNode("Billing")
                ]),
                content: withCtx(() => [
                  createVNode("form", { action: "" }, [
                    createVNode("div", { class: "login_forms-group" }, [
                      createVNode("label", null, [
                        createVNode("input", { type: "checkbox" }),
                        createTextVNode(" Same as Billing ")
                      ]),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "First Name"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Name"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "email",
                        placeholder: "E-Mail Address"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Country"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Street"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "House No."
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "Zip Code"
                      }),
                      createVNode("input", {
                        class: "",
                        type: "text",
                        placeholder: "City"
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=address-BkuV9nWg.mjs.map
