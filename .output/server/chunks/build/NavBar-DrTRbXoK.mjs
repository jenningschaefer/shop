import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { g as useRouter, b as useRoute } from './server.mjs';
import { ref, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logos-CBvRb9s_.mjs';
import { _ as _imports_0$1 } from './icons-B4vhDWaA.mjs';

const _sfc_main = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    ref([
      {
        svg: "~/assets/svg/icons.svg#lang-de",
        click: ""
      },
      {
        svg: "~/assets/svg/icons.svg#cart",
        click: ""
      },
      {
        svg: "~/assets/svg/icons.svg#heart",
        click: ""
      },
      {
        svg: "assets/svg/icons.svg#user",
        click: ""
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="navBar">`);
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
//# sourceMappingURL=NavBar-DrTRbXoK.mjs.map
