import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "account-overview" }, _attrs))}><div class="account-overview_user account-border">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/account/edit-user" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#user")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>User Data</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-right")}${_scopeId}></use></svg></div><address${_scopeId}> John Doe <br${_scopeId}> john.doe@mail.com </address></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#user" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, "User Data"),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#arrow-right" })
                  ]))
                ]),
                createVNode("address", null, [
                  createTextVNode(" John Doe "),
                  createVNode("br"),
                  createTextVNode(" john.doe@mail.com ")
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
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#home")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>Address</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-right")}${_scopeId}></use></svg></div><address${_scopeId}> Street 45 <br${_scopeId}> 12345 City <br${_scopeId}> Germany </address></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#home" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, "Address"),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#arrow-right" })
                  ]))
                ]),
                createVNode("address", null, [
                  createTextVNode(" Street 45 "),
                  createVNode("br"),
                  createTextVNode(" 12345 City "),
                  createVNode("br"),
                  createTextVNode(" Germany ")
                ])
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
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#password")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>Password</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-right")}${_scopeId}></use></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#password" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, "Password"),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#arrow-right" })
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
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#history")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>History</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-right")}${_scopeId}></use></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#history" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, "History"),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#arrow-right" })
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
            _push2(`<div class="account-overview_container"${_scopeId}><div class="account-link"${_scopeId}><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#heart")}${_scopeId}></use></svg><div class="account-link_name"${_scopeId}>Favourites</div><svg class="account-link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#arrow-right")}${_scopeId}></use></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "account-overview_container" }, [
                createVNode("div", { class: "account-link" }, [
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#heart" })
                  ])),
                  createVNode("div", { class: "account-link_name" }, "Favourites"),
                  (openBlock(), createBlock("svg", { class: "account-link_icon" }, [
                    createVNode("use", { href: _imports_0 + "#arrow-right" })
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-PYd5VU_B.mjs.map
