import { c as useI18n, g as useUserSession, d as __nuxt_component_0$3, e as _imports_0$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useAddressesByUser } from './useAddresses-DqgHcpox.mjs';
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
import './base.repository-B5mBvhdh.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { user } = useUserSession();
    const displayName = computed(
      () => user.value ? `${user.value.firstname ?? ""} ${user.value.lastname ?? ""}`.trim() : ""
    );
    const addresses = computed(
      () => user.value?.user_id !== void 0 ? useAddressesByUser(user.value.user_id) : []
    );
    const defaultAddress = computed(
      () => addresses.value.find((a) => a.id === user.value?.address_id_default) ?? addresses.value[0]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-overview" }, _attrs))}><div class="account-overview_user account-border">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/edit-user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#user")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.profile"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}${_scopeId}></use></svg></div><address${_scopeId}>${ssrInterpolate(unref(displayName))} <br${_scopeId}> ${ssrInterpolate(unref(user)?.mail)}</address></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#user" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.profile")), 1),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#arrow-right" })
                  ]))
                ]),
                createVNode("address", null, [
                  createTextVNode(toDisplayString(unref(displayName)) + " ", 1),
                  createVNode("br"),
                  createTextVNode(" " + toDisplayString(unref(user)?.mail), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-overview_address account-border">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/edit-address" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#home")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.addresses"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}${_scopeId}></use></svg></div>`);
            if (unref(defaultAddress)) {
              _push2(`<address${_scopeId}>${ssrInterpolate(unref(defaultAddress).street)} ${ssrInterpolate(unref(defaultAddress).house_no)} <br${_scopeId}> ${ssrInterpolate(unref(defaultAddress).zip_code)} ${ssrInterpolate(unref(defaultAddress).city)} <br${_scopeId}> ${ssrInterpolate(unref(defaultAddress).country)}</address>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#home" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.addresses")), 1),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#arrow-right" })
                  ]))
                ]),
                unref(defaultAddress) ? (openBlock(), createBlock("address", { key: 0 }, [
                  createTextVNode(toDisplayString(unref(defaultAddress).street) + " " + toDisplayString(unref(defaultAddress).house_no) + " ", 1),
                  createVNode("br"),
                  createTextVNode(" " + toDisplayString(unref(defaultAddress).zip_code) + " " + toDisplayString(unref(defaultAddress).city) + " ", 1),
                  createVNode("br"),
                  createTextVNode(" " + toDisplayString(unref(defaultAddress).country), 1)
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-overview_password account-border">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/edit-password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#password")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.changePassword"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}${_scopeId}></use></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#password" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.changePassword")), 1),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#arrow-right" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-overview_history account-border">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/order-history" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#history")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.orderHistory"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}${_scopeId}></use></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#history" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.orderHistory")), 1),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#arrow-right" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="account-overview_favourites account-border">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/favorites" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#heart")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>${ssrInterpolate(unref(t)("account.favorites"))}</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-right")}${_scopeId}></use></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#heart" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, toDisplayString(unref(t)("account.favorites")), 1),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0$1 + "#arrow-right" })
                  ]))
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CwurUfYr.mjs.map
