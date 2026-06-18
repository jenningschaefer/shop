import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createVNode, withModifiers, withDirectives, isRef, vModelText, createTextVNode, toDisplayString, openBlock, createBlock, vModelSelect, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { c as useI18n, f as useRoute, g as useUserSession, h as useToast, u as useHead, e as _imports_0$1, n as navigateTo } from './server.mjs';
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
  __name: "tabs",
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
        class: ["tabs", __props.customClass]
      }, _attrs))}><div id="tab-headers" class="tabs_headers"><ul><!--[-->`);
      ssrRenderList(unref(tabs), (tab, index) => {
        _push(`<li class="${ssrRenderClass(unref(activeTabIndex) === index ? "active" : "")}"><h5>${ssrInterpolate(tab.title)}</h5></li>`);
      });
      _push(`<!--]--></ul></div><div id="active-tab" class="tabs_active">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/tabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "UITabs" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "tab-item",
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
        class: ["tab", unref(isActive) ? "active" : ""],
        title: __props.title
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/tab-item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UITabItem" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const { fetch: refreshSession } = useUserSession();
    const toast = useToast();
    useHead({
      title: "Login - Shop"
    });
    function safeRedirect(fallback) {
      const target = route.query.redirect;
      if (typeof target === "string" && /^\/(?!\/)/.test(target)) return target;
      return fallback;
    }
    const loginMail = ref("mail@mail.de");
    const loginPassword = ref("Password1!");
    async function onLogin() {
      try {
        await $fetch("/api/auth/login", {
          method: "POST",
          body: { mail: loginMail.value, password: loginPassword.value }
        });
        await refreshSession();
        await navigateTo(safeRedirect("/account/"));
      } catch {
        toast.error(t("auth.invalidLogin"));
      }
    }
    const register = reactive({
      title: "None",
      firstname: "Max",
      lastname: "Mustermann",
      mail: "new.user@mail.de",
      password: "Password1!",
      confirmPassword: "Password1!"
    });
    async function onRegister() {
      if (register.password !== register.confirmPassword) {
        toast.error(t("auth.passwordMismatch"));
        return;
      }
      try {
        await $fetch("/api/auth/register", {
          method: "POST",
          body: {
            title: register.title,
            firstname: register.firstname,
            lastname: register.lastname,
            mail: register.mail,
            password: register.password
          }
        });
        await refreshSession();
        await navigateTo(safeRedirect("/account/"));
      } catch {
        toast.error(t("auth.registerFailed"));
      }
    }
    const guestMail = ref("mail@mail.de");
    const guestOrder = ref("000001");
    const guestZip = ref("12345");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UITabs = __nuxt_component_0;
      const _component_UITabItem = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))}><h2 class="login_title">${ssrInterpolate(unref(t)("auth.login"))}</h2><div class="login_forms"><div class="login_account">`);
      _push(ssrRenderComponent(_component_UITabs, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UITabItem, {
              active: "true",
              title: unref(t)("auth.login")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form${_scopeId2}><div class="login_forms-group"${_scopeId2}><input${ssrRenderAttr("value", unref(loginMail))} type="email"${ssrRenderAttr("placeholder", unref(t)("auth.email"))}${_scopeId2}><input${ssrRenderAttr("value", unref(loginPassword))} type="password"${ssrRenderAttr("placeholder", unref(t)("auth.password"))}${_scopeId2}><a class="login_forms-group-link" href=""${_scopeId2}>${ssrInterpolate(unref(t)("auth.forgotPassword"))} <svg class="login_forms-group-icon"${_scopeId2}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId2}></use></svg></a><button class="vesta-btn" type="submit"${_scopeId2}>${ssrInterpolate(unref(t)("auth.login"))}</button></div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(onLogin, ["prevent"])
                    }, [
                      createVNode("div", { class: "login_forms-group" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(loginMail) ? loginMail.value = $event : null,
                          type: "email",
                          placeholder: unref(t)("auth.email")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, unref(loginMail)]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => isRef(loginPassword) ? loginPassword.value = $event : null,
                          type: "password",
                          placeholder: unref(t)("auth.password")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, unref(loginPassword)]
                        ]),
                        createVNode("a", {
                          class: "login_forms-group-link",
                          href: ""
                        }, [
                          createTextVNode(toDisplayString(unref(t)("auth.forgotPassword")) + " ", 1),
                          (openBlock(), createBlock("svg", { class: "login_forms-group-icon" }, [
                            createVNode("use", { href: _imports_0$1 + "#link" })
                          ]))
                        ]),
                        createVNode("button", {
                          class: "vesta-btn",
                          type: "submit"
                        }, toDisplayString(unref(t)("auth.login")), 1)
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UITabItem, {
              title: unref(t)("auth.register")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form${_scopeId2}><div class="login_forms-group"${_scopeId2}><select${_scopeId2}><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(register).title) ? ssrLooseContain(unref(register).title, "") : ssrLooseEqual(unref(register).title, "")) ? " selected" : ""}${_scopeId2}>Title</option><option value="Mr"${ssrIncludeBooleanAttr(Array.isArray(unref(register).title) ? ssrLooseContain(unref(register).title, "Mr") : ssrLooseEqual(unref(register).title, "Mr")) ? " selected" : ""}${_scopeId2}>Mr</option><option value="Mrs"${ssrIncludeBooleanAttr(Array.isArray(unref(register).title) ? ssrLooseContain(unref(register).title, "Mrs") : ssrLooseEqual(unref(register).title, "Mrs")) ? " selected" : ""}${_scopeId2}>Mrs</option><option value="None"${ssrIncludeBooleanAttr(Array.isArray(unref(register).title) ? ssrLooseContain(unref(register).title, "None") : ssrLooseEqual(unref(register).title, "None")) ? " selected" : ""}${_scopeId2}>None</option></select><input${ssrRenderAttr("value", unref(register).firstname)} type="text"${ssrRenderAttr("placeholder", unref(t)("address.firstName"))}${_scopeId2}><input${ssrRenderAttr("value", unref(register).lastname)} type="text"${ssrRenderAttr("placeholder", unref(t)("address.lastName"))}${_scopeId2}><input${ssrRenderAttr("value", unref(register).mail)} type="email"${ssrRenderAttr("placeholder", unref(t)("auth.email"))}${_scopeId2}><input${ssrRenderAttr("value", unref(register).password)} type="password"${ssrRenderAttr("placeholder", unref(t)("auth.password"))}${_scopeId2}><p${_scopeId2}>${ssrInterpolate(unref(t)("auth.passwordRequirements"))}</p><input${ssrRenderAttr("value", unref(register).confirmPassword)} type="password"${ssrRenderAttr("placeholder", unref(t)("auth.confirmPassword"))}${_scopeId2}><label${_scopeId2}><input type="checkbox" checked${_scopeId2}> I agree to the terms and conditions of Vesta. Information on data subject rights and data protection regulations. </label><label${_scopeId2}><input type="checkbox" checked${_scopeId2}> Yes, I would like to receive the free newsletter. </label><button class="vesta-btn" type="submit"${_scopeId2}>${ssrInterpolate(unref(t)("auth.register"))}</button></div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(onRegister, ["prevent"])
                    }, [
                      createVNode("div", { class: "login_forms-group" }, [
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(register).title = $event
                        }, [
                          createVNode("option", {
                            value: "",
                            disabled: ""
                          }, "Title"),
                          createVNode("option", { value: "Mr" }, "Mr"),
                          createVNode("option", { value: "Mrs" }, "Mrs"),
                          createVNode("option", { value: "None" }, "None")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(register).title]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(register).firstname = $event,
                          type: "text",
                          placeholder: unref(t)("address.firstName")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, unref(register).firstname]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(register).lastname = $event,
                          type: "text",
                          placeholder: unref(t)("address.lastName")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, unref(register).lastname]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(register).mail = $event,
                          type: "email",
                          placeholder: unref(t)("auth.email")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, unref(register).mail]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(register).password = $event,
                          type: "password",
                          placeholder: unref(t)("auth.password")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, unref(register).password]
                        ]),
                        createVNode("p", null, toDisplayString(unref(t)("auth.passwordRequirements")), 1),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(register).confirmPassword = $event,
                          type: "password",
                          placeholder: unref(t)("auth.confirmPassword")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, unref(register).confirmPassword]
                        ]),
                        createVNode("label", null, [
                          createVNode("input", {
                            type: "checkbox",
                            checked: ""
                          }),
                          createTextVNode(" I agree to the terms and conditions of Vesta. Information on data subject rights and data protection regulations. ")
                        ]),
                        createVNode("label", null, [
                          createVNode("input", {
                            type: "checkbox",
                            checked: ""
                          }),
                          createTextVNode(" Yes, I would like to receive the free newsletter. ")
                        ]),
                        createVNode("button", {
                          class: "vesta-btn",
                          type: "submit"
                        }, toDisplayString(unref(t)("auth.register")), 1)
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UITabItem, {
                active: "true",
                title: unref(t)("auth.login")
              }, {
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(onLogin, ["prevent"])
                  }, [
                    createVNode("div", { class: "login_forms-group" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(loginMail) ? loginMail.value = $event : null,
                        type: "email",
                        placeholder: unref(t)("auth.email")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(loginMail)]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(loginPassword) ? loginPassword.value = $event : null,
                        type: "password",
                        placeholder: unref(t)("auth.password")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(loginPassword)]
                      ]),
                      createVNode("a", {
                        class: "login_forms-group-link",
                        href: ""
                      }, [
                        createTextVNode(toDisplayString(unref(t)("auth.forgotPassword")) + " ", 1),
                        (openBlock(), createBlock("svg", { class: "login_forms-group-icon" }, [
                          createVNode("use", { href: _imports_0$1 + "#link" })
                        ]))
                      ]),
                      createVNode("button", {
                        class: "vesta-btn",
                        type: "submit"
                      }, toDisplayString(unref(t)("auth.login")), 1)
                    ])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title"]),
              createVNode(_component_UITabItem, {
                title: unref(t)("auth.register")
              }, {
                default: withCtx(() => [
                  createVNode("form", {
                    onSubmit: withModifiers(onRegister, ["prevent"])
                  }, [
                    createVNode("div", { class: "login_forms-group" }, [
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(register).title = $event
                      }, [
                        createVNode("option", {
                          value: "",
                          disabled: ""
                        }, "Title"),
                        createVNode("option", { value: "Mr" }, "Mr"),
                        createVNode("option", { value: "Mrs" }, "Mrs"),
                        createVNode("option", { value: "None" }, "None")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(register).title]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(register).firstname = $event,
                        type: "text",
                        placeholder: unref(t)("address.firstName")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(register).firstname]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(register).lastname = $event,
                        type: "text",
                        placeholder: unref(t)("address.lastName")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(register).lastname]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(register).mail = $event,
                        type: "email",
                        placeholder: unref(t)("auth.email")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(register).mail]
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(register).password = $event,
                        type: "password",
                        placeholder: unref(t)("auth.password")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(register).password]
                      ]),
                      createVNode("p", null, toDisplayString(unref(t)("auth.passwordRequirements")), 1),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(register).confirmPassword = $event,
                        type: "password",
                        placeholder: unref(t)("auth.confirmPassword")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, unref(register).confirmPassword]
                      ]),
                      createVNode("label", null, [
                        createVNode("input", {
                          type: "checkbox",
                          checked: ""
                        }),
                        createTextVNode(" I agree to the terms and conditions of Vesta. Information on data subject rights and data protection regulations. ")
                      ]),
                      createVNode("label", null, [
                        createVNode("input", {
                          type: "checkbox",
                          checked: ""
                        }),
                        createTextVNode(" Yes, I would like to receive the free newsletter. ")
                      ]),
                      createVNode("button", {
                        class: "vesta-btn",
                        type: "submit"
                      }, toDisplayString(unref(t)("auth.register")), 1)
                    ])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><hr class="login_seperator"><div class="login_order"><form><div class="login_forms-group"><input${ssrRenderAttr("value", unref(guestMail))} type="email"${ssrRenderAttr("placeholder", unref(t)("auth.email"))}><input${ssrRenderAttr("value", unref(guestOrder))} type="text"${ssrRenderAttr("placeholder", unref(t)("order.orderNumber"))}><input${ssrRenderAttr("value", unref(guestZip))} type="text"${ssrRenderAttr("placeholder", unref(t)("address.zip"))}><button class="vesta-btn" type="submit">${ssrInterpolate(unref(t)("order.status"))}</button></div></form></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DKv_NysJ.mjs.map
