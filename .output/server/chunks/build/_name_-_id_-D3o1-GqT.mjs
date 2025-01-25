import { u as useImage, a as useBaseImage, g as getFileExtension, b as baseImageProps } from './_base-DPduGNgi.mjs';
import { a as useHead, b as useNuxtApp, u as useRoute } from './server.mjs';
import { defineComponent, computed, ref, h, unref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { _ as _sfc_main$1, a as __nuxt_component_1 } from './accordion-item-BfcVdLck.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import './icons-B4vhDWaA.mjs';

const pictureProps = {
  ...baseImageProps,
  legacyFormat: { type: String, default: null },
  imgAttrs: { type: Object, default: null }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtPicture",
  props: pictureProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    var _a, _b;
    const $img = useImage();
    const _base = useBaseImage(props);
    const originalFormat = computed(() => getFileExtension(props.src));
    const isTransparent = computed(() => ["png", "webp", "gif", "svg"].includes(originalFormat.value));
    const legacyFormat = computed(() => {
      if (props.legacyFormat) {
        return props.legacyFormat;
      }
      return isTransparent.value ? "png" : "jpeg";
    });
    const sources = computed(() => {
      var _a2, _b2;
      const formats = ((_a2 = props.format) == null ? void 0 : _a2.split(",")) || (originalFormat.value === "svg" ? ["svg"] : ((_b2 = $img.options.format) == null ? void 0 : _b2.length) ? [...$img.options.format] : ["webp"]);
      if (formats[0] === "svg") {
        return [{ src: props.src }];
      }
      if (!formats.includes(legacyFormat.value)) {
        formats.push(legacyFormat.value);
      } else {
        formats.splice(formats.indexOf(legacyFormat.value), 1);
        formats.push(legacyFormat.value);
      }
      return formats.map((format) => {
        const { srcset, sizes, src } = $img.getSizes(props.src, {
          ..._base.options.value,
          sizes: props.sizes || $img.options.screens,
          densities: props.densities,
          modifiers: { ..._base.modifiers.value, format }
        });
        return { src, type: `image/${format}`, sizes, srcset };
      });
    });
    const lastSourceIndex = computed(() => sources.value.length - 1);
    if (props.preload) {
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: sources.value[0].srcset,
        nonce: props.nonce
      };
      if ((_b = (_a = sources.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.sizes) {
        link.imagesizes = sources.value[0].sizes;
      }
      useHead({ link: [link] });
    }
    const imgAttrs = { ...props.imgAttrs, "data-nuxt-pic": "" };
    for (const key in ctx.attrs) {
      if (key in baseImageProps && !(key in imgAttrs)) {
        imgAttrs[key] = ctx.attrs[key];
      }
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("picture", null, [
      ...sources.value.slice(0, -1).map((source) => {
        return h("source", {
          type: source.type,
          sizes: source.sizes,
          srcset: source.srcset
        });
      }),
      h("img", {
        ref: imgEl,
        ..._base.attrs.value,
        ...{ onerror: "this.setAttribute('data-error', 1)" },
        ...imgAttrs,
        src: sources.value[lastSourceIndex.value].src,
        sizes: sources.value[lastSourceIndex.value].sizes,
        srcset: sources.value[lastSourceIndex.value].srcset
      })
    ]);
  }
});
const _sfc_main = {
  __name: "[name]-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const product = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPicture = __nuxt_component_0;
      const _component_UIAccordion = _sfc_main$1;
      const _component_UIAccordion_item = __nuxt_component_1;
      if (unref(product) != null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "product" }, _attrs))}><div class="product_details-mobile"><div>by ${ssrInterpolate(unref(product).designer)}</div><div>${ssrInterpolate(unref(product).price_us)}$</div></div><div class="product_description"><h1 class="product_description-title">${ssrInterpolate(unref(product).name)}</h1>`);
        _push(ssrRenderComponent(_component_NuxtPicture, {
          format: "avif, webp",
          src: unref(product).img,
          class: "product_description-img"
        }, null, _parent));
        _push(`<div class="product_description-accordion">`);
        _push(ssrRenderComponent(_component_UIAccordion, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
                "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>Description</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "sort-filter_heading" }, [
                        createVNode("span", { class: "links" }, "Description")
                      ])
                    ];
                  }
                }),
                "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}>${ssrInterpolate(unref(product).description)}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(unref(product).description), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UIAccordion_item, null, {
                "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>Specification</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "sort-filter_heading" }, [
                        createVNode("span", { class: "links" }, "Specification")
                      ])
                    ];
                  }
                }),
                "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3${_scopeId2}>${ssrInterpolate(unref(product).spec_title)}</h3><p${_scopeId2}>${ssrInterpolate(unref(product).spec_text)}</p>`);
                  } else {
                    return [
                      createVNode("h3", null, toDisplayString(unref(product).spec_title), 1),
                      createVNode("p", null, toDisplayString(unref(product).spec_text), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIAccordion_item, null, {
                  "accordion-trigger": withCtx(() => [
                    createVNode("div", { class: "sort-filter_heading" }, [
                      createVNode("span", { class: "links" }, "Description")
                    ])
                  ]),
                  "accordion-content": withCtx(() => [
                    createVNode("p", null, toDisplayString(unref(product).description), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_UIAccordion_item, null, {
                  "accordion-trigger": withCtx(() => [
                    createVNode("div", { class: "sort-filter_heading" }, [
                      createVNode("span", { class: "links" }, "Specification")
                    ])
                  ]),
                  "accordion-content": withCtx(() => [
                    createVNode("h3", null, toDisplayString(unref(product).spec_title), 1),
                    createVNode("p", null, toDisplayString(unref(product).spec_text), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="product_description-add"><div class="product_description-add-desc">by ${ssrInterpolate(unref(product).designer)}</div><div class="product_description-add-desc">${ssrInterpolate(unref(product).price_us)}$</div><button class="vesta-btn" type="button">Apply</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[name]-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_name_-_id_-D3o1-GqT.mjs.map
