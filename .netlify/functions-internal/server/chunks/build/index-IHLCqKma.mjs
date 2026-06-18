import { c as useI18n, u as useHead, _ as _imports_0, d as __nuxt_component_0$3, e as _imports_0$1, b as useNuxtApp } from './server.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, useAttrs, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { i as imgProps, u as useImage, a as useBaseImage, p as parseSize } from './_base-ho7LDtRW.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
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
    const imgAttrs = computed(() => {
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
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value && !placeholderLoaded.value ? _ctx.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "NuxtImg" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Shop"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_NuxtImg = __nuxt_component_1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><div class="home_slogan"><svg class="home_slogan_bg"><use${ssrRenderAttr("href", _imports_0 + "#logo-bg")}></use></svg><div class="home_slogan_text hero-font"> make it simple <br> but significant </div></div><div class="home_categories">`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/products/list/chairs",
        class: "home_categories_link"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 0)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>${ssrInterpolate(unref(t)("categories.chairs"))}</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, toDisplayString(unref(t)("categories.chairs")), 1),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/products/list/lighting",
        class: "home_categories_link"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 1)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>${ssrInterpolate(unref(t)("categories.lighting"))}</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, toDisplayString(unref(t)("categories.lighting")), 1),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/products/list/table",
        class: "home_categories_link"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 2)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>${ssrInterpolate(unref(t)("categories.table"))}</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, toDisplayString(unref(t)("categories.table")), 1),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/products/list/accessory",
        class: "home_categories_link"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 3)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="links"${_scopeId}>${ssrInterpolate(unref(t)("categories.accessory"))}</p><svg class="home_categories_link_icon"${_scopeId}><use${ssrRenderAttr("href", _imports_0$1 + "#link")}${_scopeId}></use></svg>`);
          } else {
            return [
              createVNode("p", { class: "links" }, toDisplayString(unref(t)("categories.accessory")), 1),
              (openBlock(), createBlock("svg", { class: "home_categories_link_icon" }, [
                createVNode("use", { href: _imports_0$1 + "#link" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="home_hero">`);
      _push(ssrRenderComponent(_component_NuxtImg, { src: "img/pexels-heyho-6077368.jpg" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-IHLCqKma.mjs.map
