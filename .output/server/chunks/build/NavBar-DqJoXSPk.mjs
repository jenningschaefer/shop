import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { _ as _sfc_main$3 } from './sidenav-BVv2_2at.mjs';
import { ref, withCtx, openBlock, createBlock, createVNode, unref, isRef, createTextVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { g as useRouter, u as useRoute, _ as _imports_0$1 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$4 } from './Cart-GSrLnc31.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-Cibwl3dk.mjs';
import { u as useLocalStorage } from './index-BY-DsOmN.mjs';
import { _ as _imports_0 } from './logos-CBvRb9s_.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))}><div class="menu_links">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list/chairs",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Chairs</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "Chairs"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0$1 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list/tables",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Tables</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "Tables"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0$1 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list/ligting",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Lighting</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "Lighting"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0$1 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list/decoration",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Decoration</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "Decoration"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0$1 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="menu_bottom"><div class="menu_bottom_newsletter"><div class="subtitle-big"> Join Our Newsletter </div><div class="menu_bottom_newsletter_input"><input class="input-newsletter" type="text" placeholder="E-Mail Address"><a click=""><svg class="menu_bottom_newsletter_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#link")}></use></svg></a></div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/products/list/chairs",
    class: "menu_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>DESIGN</p><svg class="menu_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", null, "DESIGN"),
          (openBlock(), createBlock("svg", { class: "menu_links_link_icon" }, [
            createVNode("use", { href: _imports_0$1 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Favorites",
  __ssrInlineRender: true,
  setup(__props) {
    useLocalStorage("favorite", []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-cart" }, _attrs))}><div class="order-cart_products">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/Favorites.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    const openMenu = ref();
    const openCart = ref();
    const openFavorites = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UISidenav = _sfc_main$3;
      const _component_Menu = __nuxt_component_2;
      const _component_OrderCart = _sfc_main$4;
      const _component_OrderFavorites = _sfc_main$1;
      _push(`<!--[--><div><div class="navBar">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navBar_home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="navBar_logo"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#logo")}${_scopeId}></use></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", { class: "navBar_logo" }, [
                createVNode("use", { href: _imports_0 + "#logo" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="navBar_icons">`);
      if (unref(route).name === "products-name-id") {
        _push(`<a><svg class="subNav_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}></use></svg></a>`);
      } else {
        _push(`<a><svg class="subNav_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#lang-de")}></use></svg></a>`);
      }
      _push(`<a><svg class="navBar_icons_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#cart")}></use></svg></a><a><svg class="navBar_icons_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#heart")}></use></svg></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="navBar_icons_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#user")}${_scopeId}></use></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", { class: "navBar_icons_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#user" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navBar_menu"><a>menu</a></div></div>`);
      if (!unref(route).name.includes("account")) {
        _push(`<div class="subNav">`);
        if (unref(route).name === "products-name-id") {
          _push(`<a><svg class="subNav_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#arrow-left")}></use></svg></a>`);
        } else {
          _push(`<a><svg class="subNav_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#lang-de")}></use></svg></a>`);
        }
        _push(`<a><svg class="subNav_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#cart")}></use></svg></a><a><svg class="subNav_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#heart")}></use></svg></a>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="subNav_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#user")}${_scopeId}></use></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", { class: "subNav_icon" }, [
                  createVNode("use", { href: _imports_0$1 + "#user" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UISidenav, {
        modelValue: unref(openMenu),
        "onUpdate:modelValue": ($event) => isRef(openMenu) ? openMenu.value = $event : null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Menu`);
          } else {
            return [
              createTextVNode("Menu")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Menu, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Menu)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UISidenav, {
        modelValue: unref(openCart),
        "onUpdate:modelValue": ($event) => isRef(openCart) ? openCart.value = $event : null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cart`);
          } else {
            return [
              createTextVNode("Cart")
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
      _push(ssrRenderComponent(_component_UISidenav, {
        modelValue: unref(openFavorites),
        "onUpdate:modelValue": ($event) => isRef(openFavorites) ? openFavorites.value = $event : null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Favorites`);
          } else {
            return [
              createTextVNode("Favorites")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OrderFavorites, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OrderFavorites)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=NavBar-DqJoXSPk.mjs.map
