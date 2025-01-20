import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './icons-B4vhDWaA.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="footer_link-container"><div class="footer_links">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "footer_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="links"${_scopeId}>Service</p><svg class="footer_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", { class: "links" }, "Service"),
          (openBlock(), createBlock("svg", { class: "footer_links_link_icon" }, [
            createVNode("use", { href: _imports_0 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "footer_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="links"${_scopeId}>Legal</p><svg class="footer_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", { class: "links" }, "Legal"),
          (openBlock(), createBlock("svg", { class: "footer_links_link_icon" }, [
            createVNode("use", { href: _imports_0 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer_links">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "footer_links_link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="links"${_scopeId}>Payment</p><svg class="footer_links_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#link")}${_scopeId}></use></svg>`);
      } else {
        return [
          createVNode("p", { class: "links" }, "Payment"),
          (openBlock(), createBlock("svg", { class: "footer_links_link_icon" }, [
            createVNode("use", { href: _imports_0 + "#link" })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="" class="footer_links_link"><p class="links">Design</p><svg class="footer_links_link_icon"><use${ssrRenderAttr("href", _imports_0 + "#link")}></use></svg></a></div></div><div class="footer_newsletter"><div class="subtitle-big"> Join Our Newsletter </div><div class="footer_newsletter_input"><input class="input-dark input-newsletter" type="text" placeholder="E-Mail Address"><a click=""><svg class="footer_links_link_icon"><use${ssrRenderAttr("href", _imports_0 + "#link")}></use></svg></a></div><div class="footer_newsletter_disclaimer"><small> *Alle Preise inkl. Mwst., zzgl. anfallender Versand- und Lieferkosten. </small></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Footer-BDkUdOh8.mjs.map
