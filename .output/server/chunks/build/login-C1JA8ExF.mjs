import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { _ as _imports_0 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$2 = {
  __name: "tabs",
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
        class: ["tabs", __props.customClass],
        ref_key: "tabContainer",
        ref: tabContainer
      }, _attrs))}><div id="tab-headers" class="tabs_headers"><ul><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<li class="${ssrRenderClass(unref(activeTabIndex) == index ? "active" : "")}"><h5>${ssrInterpolate(tab.title)}</h5></li>`);
      });
      _push(`<!--]--></ul></div><div id="active-tab" class="tabs_active">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/tabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "tab-item",
  __ssrInlineRender: true,
  props: ["active"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tab", __props.active == "true" ? "active" : ""],
        ref: "tabs"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/tab-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UITabs = _sfc_main$2;
  const _component_UITab_item = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))}><h2 class="login_title">Welcome</h2><div class="login_forms"><div class="login_account">`);
  _push(ssrRenderComponent(_component_UITabs, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_UITab_item, {
          active: "true",
          title: "Login"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form action=""${_scopeId2}><div class="login_forms-group"${_scopeId2}><input class="" type="email" placeholder="E-Mail Address"${_scopeId2}><input class="" type="password" placeholder="Password"${_scopeId2}><a class="login_forms-group-link" href=""${_scopeId2}>Forgot Password? <svg class="login_forms-group-icon"${_scopeId2}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId2}></use></svg></a>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/account/" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<button class="vesta-btn" type="button"${_scopeId3}>Login</button>`);
                  } else {
                    return [
                      createVNode("button", {
                        class: "vesta-btn",
                        type: "button"
                      }, "Login")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></form>`);
            } else {
              return [
                createVNode("form", { action: "" }, [
                  createVNode("div", { class: "login_forms-group" }, [
                    createVNode("input", {
                      class: "",
                      type: "email",
                      placeholder: "E-Mail Address"
                    }),
                    createVNode("input", {
                      class: "",
                      type: "password",
                      placeholder: "Password"
                    }),
                    createVNode("a", {
                      class: "login_forms-group-link",
                      href: ""
                    }, [
                      createTextVNode("Forgot Password? "),
                      (openBlock(), createBlock("svg", { class: "login_forms-group-icon" }, [
                        createVNode("use", { href: _imports_0 + "#link" })
                      ]))
                    ]),
                    createVNode(_component_NuxtLink, { to: "/account/" }, {
                      default: withCtx(() => [
                        createVNode("button", {
                          class: "vesta-btn",
                          type: "button"
                        }, "Login")
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
        _push2(ssrRenderComponent(_component_UITab_item, { title: "Register" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form action=""${_scopeId2}><div class="login_forms-group"${_scopeId2}><select${_scopeId2}><option value="" disabled selected${_scopeId2}>Title</option><option value="1"${_scopeId2}>Mr</option><option value="2"${_scopeId2}>Mrs</option><option value="3"${_scopeId2}>None</option></select><input class="" type="text" placeholder="First Name"${_scopeId2}><input class="" type="text" placeholder="Name"${_scopeId2}><input class="" type="text" placeholder="E-Mail Address"${_scopeId2}><input class="" type="email" placeholder="Confirm E-Mail"${_scopeId2}><input class="" type="password" placeholder="Password"${_scopeId2}><p${_scopeId2}> Your password must have at least 8 characters with one number, one upper and one lower case letter and one special character. </p><input class="" type="password" placeholder="Confirm Password"${_scopeId2}><label${_scopeId2}><input type="checkbox" checked="checked"${_scopeId2}> I agree to the terms and conditions of Vesta. Information on data subject rights and data protection regulations. </label><label${_scopeId2}><input type="checkbox" checked="checked"${_scopeId2}> Yes, I would like to receive the free newsletter. </label>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "/account/" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<button class="vesta-btn" type="button"${_scopeId3}>Register</button>`);
                  } else {
                    return [
                      createVNode("button", {
                        class: "vesta-btn",
                        type: "button"
                      }, "Register")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></form>`);
            } else {
              return [
                createVNode("form", { action: "" }, [
                  createVNode("div", { class: "login_forms-group" }, [
                    createVNode("select", null, [
                      createVNode("option", {
                        value: "",
                        disabled: "",
                        selected: ""
                      }, "Title"),
                      createVNode("option", { value: "1" }, "Mr"),
                      createVNode("option", { value: "2" }, "Mrs"),
                      createVNode("option", { value: "3" }, "None")
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
                      type: "text",
                      placeholder: "E-Mail Address"
                    }),
                    createVNode("input", {
                      class: "",
                      type: "email",
                      placeholder: "Confirm E-Mail"
                    }),
                    createVNode("input", {
                      class: "",
                      type: "password",
                      placeholder: "Password"
                    }),
                    createVNode("p", null, " Your password must have at least 8 characters with one number, one upper and one lower case letter and one special character. "),
                    createVNode("input", {
                      class: "",
                      type: "password",
                      placeholder: "Confirm Password"
                    }),
                    createVNode("label", null, [
                      createVNode("input", {
                        type: "checkbox",
                        checked: "checked"
                      }),
                      createTextVNode(" I agree to the terms and conditions of Vesta. Information on data subject rights and data protection regulations. ")
                    ]),
                    createVNode("label", null, [
                      createVNode("input", {
                        type: "checkbox",
                        checked: "checked"
                      }),
                      createTextVNode(" Yes, I would like to receive the free newsletter. ")
                    ]),
                    createVNode(_component_NuxtLink, { to: "/account/" }, {
                      default: withCtx(() => [
                        createVNode("button", {
                          class: "vesta-btn",
                          type: "button"
                        }, "Register")
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
          createVNode(_component_UITab_item, {
            active: "true",
            title: "Login"
          }, {
            default: withCtx(() => [
              createVNode("form", { action: "" }, [
                createVNode("div", { class: "login_forms-group" }, [
                  createVNode("input", {
                    class: "",
                    type: "email",
                    placeholder: "E-Mail Address"
                  }),
                  createVNode("input", {
                    class: "",
                    type: "password",
                    placeholder: "Password"
                  }),
                  createVNode("a", {
                    class: "login_forms-group-link",
                    href: ""
                  }, [
                    createTextVNode("Forgot Password? "),
                    (openBlock(), createBlock("svg", { class: "login_forms-group-icon" }, [
                      createVNode("use", { href: _imports_0 + "#link" })
                    ]))
                  ]),
                  createVNode(_component_NuxtLink, { to: "/account/" }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        class: "vesta-btn",
                        type: "button"
                      }, "Login")
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_UITab_item, { title: "Register" }, {
            default: withCtx(() => [
              createVNode("form", { action: "" }, [
                createVNode("div", { class: "login_forms-group" }, [
                  createVNode("select", null, [
                    createVNode("option", {
                      value: "",
                      disabled: "",
                      selected: ""
                    }, "Title"),
                    createVNode("option", { value: "1" }, "Mr"),
                    createVNode("option", { value: "2" }, "Mrs"),
                    createVNode("option", { value: "3" }, "None")
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
                    type: "text",
                    placeholder: "E-Mail Address"
                  }),
                  createVNode("input", {
                    class: "",
                    type: "email",
                    placeholder: "Confirm E-Mail"
                  }),
                  createVNode("input", {
                    class: "",
                    type: "password",
                    placeholder: "Password"
                  }),
                  createVNode("p", null, " Your password must have at least 8 characters with one number, one upper and one lower case letter and one special character. "),
                  createVNode("input", {
                    class: "",
                    type: "password",
                    placeholder: "Confirm Password"
                  }),
                  createVNode("label", null, [
                    createVNode("input", {
                      type: "checkbox",
                      checked: "checked"
                    }),
                    createTextVNode(" I agree to the terms and conditions of Vesta. Information on data subject rights and data protection regulations. ")
                  ]),
                  createVNode("label", null, [
                    createVNode("input", {
                      type: "checkbox",
                      checked: "checked"
                    }),
                    createTextVNode(" Yes, I would like to receive the free newsletter. ")
                  ]),
                  createVNode(_component_NuxtLink, { to: "/account/" }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        class: "vesta-btn",
                        type: "button"
                      }, "Register")
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
  _push(`</div><hr class="login_seperator"><div class="login_order"><form action=""><div class="login_forms-group"><input class="" type="email" placeholder="E-Mail Address"><input class="" type="text" placeholder="Order No."><input class="" type="text" placeholder="ZIP Code">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/order-id" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button class="vesta-btn" type="button"${_scopeId}>Order Status</button>`);
      } else {
        return [
          createVNode("button", {
            class: "vesta-btn",
            type: "button"
          }, "Order Status")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-C1JA8ExF.mjs.map
