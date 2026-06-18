import { defineComponent, useAttrs, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { b as pictureProps, u as useImage, a as useBaseImage, g as getFileExtension, c as baseImageProps } from './_base-ho7LDtRW.mjs';
import { u as useHead, b as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NuxtPicture",
  __ssrInlineRender: true,
  props: pictureProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const { attrs: baseAttrs, options: baseOptions, modifiers: baseModifiers } = useBaseImage(props);
    const originalFormat = computed(() => getFileExtension(props.src));
    const isTransparent = computed(() => ["png", "webp", "gif", "svg"].includes(originalFormat.value));
    const legacyFormat = computed(() => {
      if (props.legacyFormat) {
        return props.legacyFormat;
      }
      return isTransparent.value ? "png" : "jpeg";
    });
    const sources = computed(() => {
      const formats = props.format?.split(",") || (originalFormat.value === "svg" ? ["svg"] : $img.options.format?.length ? [...$img.options.format] : ["webp"]);
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
          ...baseOptions.value,
          sizes: props.sizes || $img.options.screens,
          densities: props.densities,
          modifiers: { ...baseModifiers.value, format }
        });
        return { src, type: `image/${format}`, sizes, srcset };
      });
    });
    const lastSource = computed(() => sources.value[sources.value.length - 1]);
    if (props.preload) {
      useHead({ link: () => {
        const firstSource = sources.value[0];
        if (!firstSource) {
          return [];
        }
        const link = {
          rel: "preload",
          as: "image",
          imagesrcset: firstSource.srcset,
          nonce: props.nonce,
          ...typeof props.preload !== "boolean" && props.preload?.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        };
        if (sources.value?.[0]?.sizes) {
          link.imagesizes = sources.value[0].sizes;
        }
        return [link];
      } });
    }
    const imgAttrs = computed(() => {
      const result = { ...props.imgAttrs, "data-nuxt-pic": "" };
      for (const key in attrs) {
        if (key in baseImageProps && !(key in result)) {
          result[key] = attrs[key];
        }
      }
      return result;
    });
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<picture${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(sources.value.slice(0, -1), (source) => {
        _push(`<source${ssrRenderAttr("type", source.type)}${ssrRenderAttr("sizes", source.sizes)}${ssrRenderAttr("srcset", source.srcset)}>`);
      });
      _push(`<!--]-->`);
      if (lastSource.value) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl
        }, {
          ...unref(baseAttrs),
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value
        }, {
          src: lastSource.value.src,
          sizes: lastSource.value.sizes,
          srcset: lastSource.value.srcset
        }))}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</picture>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "NuxtPicture" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=NuxtPicture-DDPKDoXr.mjs.map
