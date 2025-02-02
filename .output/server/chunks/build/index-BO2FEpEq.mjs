import { _ as __nuxt_component_0 } from './nuxt-link-8v5xRlLo.mjs';
import { a as useHead, b as useNuxtApp, _ as _imports_0$1 } from './server.mjs';
import { defineComponent, ref, computed, h, mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useImage, a as useBaseImage, p as parseSize, b as baseImageProps } from './_base-DPduGNgi.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './logos-CBvRb9s_.mjs';
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

const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Shop"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><div class="home_slogan"><svg class="home_slogan_bg"><use${ssrRenderAttr("href", _imports_0 + "#logo-bg")}></use></svg><div class="home_slogan_text hero-font">make it simple<br>but significant</div></div><div class="home_categories">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products/list/chairs",
        class: "home_categories_link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>Chairs</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, "Chairs"),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products/list/ligting",
        class: "home_categories_link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>Lighting</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, "Lighting"),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products/list/tables",
        class: "home_categories_link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>Tables</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, "Tables"),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products/list/decoration",
        class: "home_categories_link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>Decoration</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, "Decoration"),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="home_hero">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "",
        onClick: () => {
        },
        src: "pexels-heyho-6077368.jpg"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BO2FEpEq.mjs.map
