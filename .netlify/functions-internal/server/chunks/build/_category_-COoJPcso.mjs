import { _ as __nuxt_component_1$1, a as __nuxt_component_2 } from './accordion-item-DzWSSQpg.mjs';
import { defineComponent, computed, ref, watch, resolveDirective, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { c as useI18n, j as useState, k as useLocalStorage, e as _imports_0$1, l as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0$2 } from './NuxtPicture-DDPKDoXr.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './_base-ho7LDtRW.mjs';

const productsData = /* @__PURE__ */ JSON.parse(`[{"id":1,"type":"chairs","name_de":"Voxel Stuhl","name_en":"Voxel Chair","name_url":"voxel","designer":"Karim Rashid","price_eur":"199.99","price_usd":"199.99","img":"img/products/chairs/voxel.jpg","webp":"","features_de":["Ergonomisch","Stapelbar"],"features_en":["Ergonomic","Stackable"],"description_de":"Der Voxel Stuhl von Karim Rashid verbindet futuristische Ästhetik mit praktischer Funktionalität. Seine organische Form und lebendige Farbgebung machen ihn zum Blickfang in jedem modernen Raum.","description_en":"The Voxel Chair by Karim Rashid combines futuristic aesthetics with practical functionality. Its organic form and vibrant colors make it a focal point in any modern space.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Polypropylen. Maße: 82 x 47 x 53 cm. Gewicht: 4,5 kg. Für den Innen- und Außenbereich geeignet.","spec_text_en":"Material: Polypropylene. Dimensions: 82 x 47 x 53 cm. Weight: 4.5 kg. Suitable for indoor and outdoor use."},{"id":2,"type":"chairs","name_de":"Sign Matt Stuhl","name_en":"Sign Matt Chair","name_url":"sign_matt","designer":"Piergiorgio Cazzaniga","price_eur":"399.99","price_usd":"399.99","img":"img/products/chairs/sign_matt.jpg","webp":"","features_de":["Massivholz","Handgefertigt"],"features_en":["Solid Wood","Handcrafted"],"description_de":"Der Sign Matt Stuhl besticht durch seine klare Linienführung und hochwertige Verarbeitung. Das matte Finish verleiht ihm eine zeitlose Eleganz, die in jeden Einrichtungsstil passt.","description_en":"The Sign Matt Chair captivates with its clean lines and premium craftsmanship. The matte finish gives it timeless elegance that complements any interior style.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Massives Eschenholz. Maße: 78 x 45 x 50 cm. Gewicht: 5,2 kg. Belastbarkeit: 120 kg.","spec_text_en":"Material: Solid ash wood. Dimensions: 78 x 45 x 50 cm. Weight: 5.2 kg. Load capacity: 120 kg."},{"id":3,"type":"chairs","name_de":"Panton Chair","name_en":"Panton Chair","name_url":"panton","designer":"Verner Panton","price_eur":"599.99","price_usd":"599.99","img":"img/products/chairs/panton.jpg","webp":"","features_de":["Polypropylen","Matte Oberfläche"],"features_en":["Polypropylene","Matte Surface"],"description_de":"Der legendäre Panton Chair war der erste aus einem Stück gefertigte Kunststoffstuhl. Er ist ein Meilenstein des Möbeldesigns und ein zeitloser Klassiker.","description_en":"The legendary Panton Chair was the first single-piece plastic chair. It represents a milestone in furniture design and remains a timeless classic.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Polypropylen. Maße: 83 x 50 x 60 cm. Gewicht: 6,8 kg. Für den Innen- und Außenbereich geeignet.","spec_text_en":"Material: Polypropylene. Dimensions: 83 x 50 x 60 cm. Weight: 6.8 kg. Suitable for indoor and outdoor use."},{"id":4,"type":"chairs","name_de":"Victoria Ghost","name_en":"Victoria Ghost","name_url":"viktoria_ghost","designer":"Philippe Starck","price_eur":"499.99","price_usd":"499.99","img":"img/products/chairs/ghost.jpg","webp":"","features_de":["Polykarbonat","Pflegeleicht"],"features_en":["Polycarbonate","Easy Care"],"description_de":"Der Victoria Ghost Stuhl von Philippe Starck vereint barocke Eleganz mit modernem Material. Das transparente Polykarbonat schafft einen schwerelosen Eindruck.","description_en":"The Victoria Ghost Chair by Philippe Starck combines baroque elegance with modern materials. The transparent polycarbonate creates an impression of weightlessness.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Polykarbonat. Maße: 89 x 54 x 55 cm. Gewicht: 4,8 kg. UV-beständig.","spec_text_en":"Material: Polycarbonate. Dimensions: 89 x 54 x 55 cm. Weight: 4.8 kg. UV resistant."},{"id":5,"type":"table","name_de":"Saarinen Esstisch","name_en":"Saarinen Dining Table","name_url":"saarinen","designer":"Eero Saarinen","price_eur":"2599.99","price_usd":"2599.99","img":"img/products/tables/oak-smoked.jpg","webp":"","features_de":["Laminat","Aluminium Fuß","Zeitlos","Pflegeleicht"],"features_en":["Laminate","Aluminum Base","Timeless","Easy Care"],"description_de":"Der Saarinen Tisch mit seinem ikonischen Tulpenfuß revolutionierte das Tischdesign. Er eliminiert das Chaos der Tischbeine und schafft eine elegante, fließende Form.","description_en":"The Saarinen Table with its iconic tulip base revolutionized table design. It eliminates the chaos of table legs, creating an elegant, flowing form.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Laminat mit Aluminiumfuß. Durchmesser: 120 cm. Höhe: 72 cm. Gewicht: 35 kg.","spec_text_en":"Material: Laminate with aluminum base. Diameter: 120 cm. Height: 72 cm. Weight: 35 kg."},{"id":6,"type":"table","name_de":"Eileen Gray Beistelltisch","name_en":"Eileen Gray Side Table","name_url":"eileen_grey","designer":"Eileen Gray","price_eur":"599.99","price_usd":"599.99","img":"img/products/tables/eileen_gray_tisch.jpg","webp":"","features_de":["Höhenverstellbar","Chromgestell"],"features_en":["Adjustable Height","Chrome Frame"],"description_de":"Der höhenverstellbare E.1027 Beistelltisch wurde von Eileen Gray ursprünglich für ihr eigenes Schlafzimmer entworfen. Er gilt als eines der wichtigsten Möbelstücke der Moderne.","description_en":"The adjustable E.1027 side table was originally designed by Eileen Gray for her own bedroom. It is considered one of the most important pieces of modern furniture.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Stahlrohr verchromt, Glas. Durchmesser: 51 cm. Höhe: 62-100 cm. Gewicht: 8 kg.","spec_text_en":"Material: Chrome-plated steel tube, glass. Diameter: 51 cm. Height: 62-100 cm. Weight: 8 kg."},{"id":7,"type":"table","name_de":"Boa Tisch","name_en":"Boa Table","name_url":"boa","designer":"Stefan Diez","price_eur":"3599.99","price_usd":"3599.99","img":"img/products/tables/boa.jpg","webp":"","features_de":["Glas","Aluminium","Von Bambus inspiriert"],"features_en":["Glass","Aluminum","Bamboo-inspired"],"description_de":"Der Boa Tisch vereint natürliche Inspiration mit modernem Material. Seine schlanken Aluminiumstützen erinnern an Bambusstängel und tragen eine elegante Glasplatte.","description_en":"The Boa Table combines natural inspiration with modern materials. Its slender aluminum supports are reminiscent of bamboo stalks, carrying an elegant glass top.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Aluminium, gehärtetes Glas. Maße: 200 x 90 x 74 cm. Gewicht: 42 kg.","spec_text_en":"Material: Aluminum, tempered glass. Dimensions: 200 x 90 x 74 cm. Weight: 42 kg."},{"id":8,"type":"table","name_de":"Baguette Tisch","name_en":"Baguette Table","name_url":"magis","designer":"Ronan & Erwan Bouroullec","price_eur":"1599.99","price_usd":"1599.99","img":"img/products/tables/baguette.jpg","webp":"","features_de":["Massivholz","Aluminium"],"features_en":["Solid Wood","Aluminum"],"description_de":"Der Baguette Tisch zeichnet sich durch seine schlanken, stabförmigen Beine aus Aluminium aus, die der Möbelkollektion ihren Namen gaben. Die massive Holzplatte bildet einen warmen Kontrast.","description_en":"The Baguette Table is characterized by its slender, rod-shaped aluminum legs that gave the furniture collection its name. The solid wood top provides a warm contrast.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Massiveiche, Aluminium. Maße: 180 x 85 x 75 cm. Gewicht: 38 kg.","spec_text_en":"Material: Solid oak, aluminum. Dimensions: 180 x 85 x 75 cm. Weight: 38 kg."},{"id":9,"type":"lighting","name_de":"Wagenfeld Tischleuchte WG 24","name_en":"Wagenfeld Table Lamp WG 24","name_url":"wagenfeld","designer":"Wilhelm Wagenfeld","price_eur":"599.99","price_usd":"599.99","img":"img/products/lighting/wagenfeld.jpg","webp":"","features_de":["Zeitlos","Langlebig","Pflegeleicht"],"features_en":["Timeless","Durable","Easy Care"],"description_de":"Die Wagenfeld-Leuchte ist ein Inbegriff des Bauhaus-Designs. Ihre klare, geometrische Form aus Glas und Metall ist bis heute ein Designklassiker geblieben.","description_en":"The Wagenfeld lamp is the epitome of Bauhaus design. Its clear, geometric form of glass and metal has remained a design classic to this day.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Glas, Metall verchromt. Höhe: 36 cm. Durchmesser: 18 cm. Fassung: E27.","spec_text_en":"Material: Glass, chrome-plated metal. Height: 36 cm. Diameter: 18 cm. Socket: E27."},{"id":10,"type":"lighting","name_de":"Vertigo Pendelleuchte","name_en":"Vertigo Pendant Lamp","name_url":"vertigo","designer":"Constance Guisset","price_eur":"599.99","price_usd":"599.99","img":"img/products/lighting/vertigo.jpg","webp":"","features_de":["Fiberglas","Leicht"],"features_en":["Fiberglass","Lightweight"],"description_de":"Die Vertigo-Pendelleuchte ist wie ein Hut, der über dem Raum schwebt. Ihr leichtes Fiberglasgestell schafft faszinierende Licht- und Schattenspiele.","description_en":"The Vertigo pendant lamp is like a hat floating above the room. Its lightweight fiberglass frame creates fascinating plays of light and shadow.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Fiberglas, Polyurethan. Durchmesser: 200 cm. Höhe: 58 cm. Gewicht: 4 kg.","spec_text_en":"Material: Fiberglass, polyurethane. Diameter: 200 cm. Height: 58 cm. Weight: 4 kg."},{"id":11,"type":"lighting","name_de":"Discoco 68 Pendelleuchte","name_en":"Discoco 68 Pendant Lamp","name_url":"discoco","designer":"Christophe Mathieu","price_eur":"599.99","price_usd":"599.99","img":"img/products/lighting/diccoco.jpg","webp":"","features_de":["35 Scheiben","Indirektes Licht"],"features_en":["35 Discs","Indirect Light"],"description_de":"Die Discoco 68 ist eine skulpturale Pendelleuchte, deren 35 lackierte Aluminiumscheiben ein faszinierendes Spiel aus direktem und indirektem Licht erzeugen.","description_en":"The Discoco 68 is a sculptural pendant lamp whose 35 lacquered aluminum discs create a fascinating play of direct and indirect light.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Lackiertes Aluminium. Durchmesser: 68 cm. Höhe: 51 cm. Fassung: E27.","spec_text_en":"Material: Lacquered aluminum. Diameter: 68 cm. Height: 51 cm. Socket: E27."},{"id":12,"type":"lighting","name_de":"Akari 1N Tischleuchte","name_en":"Akari 1N Table Lamp","name_url":"isamu_noguchi","designer":"Isamu Noguchi","price_eur":"399.99","price_usd":"399.99","img":"img/products/lighting/akari.jpg","webp":"","features_de":["Papier","In Japan hergestellt"],"features_en":["Paper","Made in Japan"],"description_de":"Die Akari-Leuchten von Isamu Noguchi verbinden traditionelle japanische Handwerkskunst mit modernem Design. Das Washi-Papier erzeugt ein sanftes, diffuses Licht.","description_en":"Isamu Noguchi's Akari lamps combine traditional Japanese craftsmanship with modern design. The washi paper creates a soft, diffused light.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Washi-Papier, Bambus. Höhe: 43 cm. Durchmesser: 25 cm. Fassung: E14.","spec_text_en":"Material: Washi paper, bamboo. Height: 43 cm. Diameter: 25 cm. Socket: E14."},{"id":13,"type":"accessory","name_de":"Eames House Bird","name_en":"Eames House Bird","name_url":"bird","designer":"Charles & Ray Eames","price_eur":"599.99","price_usd":"599.99","img":"img/products/accessories/bird.jpg","webp":"","features_de":["Holz","Wiedererkennungswert"],"features_en":["Wood","Iconic Design"],"description_de":"Der Eames House Bird war ein ständiger Begleiter im Haus der Eames'. Diese Holzfigur wurde zu einem Symbol für die designbewusste Lebensweise des legendären Designer-Paares.","description_en":"The Eames House Bird was a constant companion in the Eames' house. This wooden figure became a symbol of the design-conscious lifestyle of the legendary designer duo.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Massives Erlenholz, schwarz gebeizt. Maße: 27 x 16 x 11 cm.","spec_text_en":"Material: Solid alder wood, black stained. Dimensions: 27 x 16 x 11 cm."},{"id":14,"type":"accessory","name_de":"Eames Elephant","name_en":"Eames Elephant","name_url":"deco2","designer":"Charles & Ray Eames","price_eur":"599.99","price_usd":"599.99","img":"img/products/accessories/elephnt.jpg","webp":"","features_de":["Holz","Kindersicher"],"features_en":["Wood","Child-safe"],"description_de":"Der Eames Elephant wurde ursprünglich 1945 als Spielzeug für Kinder entworfen. Das liebevolle Design macht ihn sowohl zum beliebten Spielgefährten als auch zum Designobjekt.","description_en":"The Eames Elephant was originally designed as a toy for children in 1945. Its lovable design makes it both a beloved playmate and a design object.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Massives Ahornholz. Maße: 39 x 21 x 17 cm. Belastbarkeit: 50 kg.","spec_text_en":"Material: Solid maple wood. Dimensions: 39 x 21 x 17 cm. Load capacity: 50 kg."},{"id":15,"type":"accessory","name_de":"Coat Tree Garderobe","name_en":"Coat Tree","name_url":"coat_tree","designer":"Sidse Werner","price_eur":"599.99","price_usd":"599.99","img":"img/products/accessories/wall-tree.jpg","webp":"","features_de":["Wandmontage","Platzsparend"],"features_en":["Wall Mount","Space-saving"],"description_de":"Die Coat Tree Garderobe ist eine elegante Wandlösung für den Eingangsbereich. Ihre organische Form erinnert an einen Baum und bietet Platz für Jacken, Taschen und Accessoires.","description_en":"The Coat Tree is an elegant wall solution for the entrance area. Its organic form resembles a tree and provides space for jackets, bags, and accessories.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: Pulverbeschichteter Stahl. Maße: 176 x 60 x 30 cm. Gewicht: 8 kg.","spec_text_en":"Material: Powder-coated steel. Dimensions: 176 x 60 x 30 cm. Weight: 8 kg."},{"id":16,"type":"accessory","name_de":"Basket Korb","name_en":"Basket","name_url":"basket","designer":"Benjamin Hubert","price_eur":"599.99","price_usd":"599.99","img":"img/products/accessories/basket.jpg","webp":"","features_de":["Filz","Multifunktional"],"features_en":["Felt","Multifunctional"],"description_de":"Der Basket ist ein vielseitiger Aufbewahrungskorb aus weichem Filz. Seine flexible Form passt sich dem Inhalt an und macht ihn zum idealen Ordnungshelfer.","description_en":"The Basket is a versatile storage container made of soft felt. Its flexible form adapts to its contents, making it the ideal organizational helper.","spec_title_de":"Technische Daten","spec_title_en":"Specifications","spec_text_de":"Material: PET-Filz, recycelt. Maße: 40 x 40 x 40 cm. Maschinenwaschbar.","spec_text_en":"Material: PET felt, recycled. Dimensions: 40 x 40 x 40 cm. Machine washable."}]`);
function localizeProduct(product, locale) {
  const isEnglish = locale === "en";
  return {
    id: product.id,
    type: product.type,
    name: isEnglish ? product.name_en : product.name_de,
    name_url: product.name_url,
    designer: product.designer,
    price: isEnglish ? product.price_usd : product.price_eur,
    currency: isEnglish ? "$" : "€",
    img: product.img,
    webp: product.webp,
    features: isEnglish ? product.features_en : product.features_de,
    description: isEnglish ? product.description_en : product.description_de,
    spec_title: isEnglish ? product.spec_title_en : product.spec_title_de,
    spec_text: isEnglish ? product.spec_text_en : product.spec_text_de
  };
}
function localizeProducts(products, locale) {
  return products.map((p) => localizeProduct(p, locale));
}
const rawProducts = productsData;
function useProductsRaw() {
  return rawProducts;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SortFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const rawProducts2 = useProductsRaw();
    function extractTypes(value) {
      if (typeof value === "string") return [value];
      if (Array.isArray(value)) return value.filter((v) => typeof v === "string");
      return [];
    }
    function isSafeTypeSlug(value) {
      return /^[a-z0-9-]+$/.test(value);
    }
    const availableTypes = computed(() => {
      const set = /* @__PURE__ */ new Set();
      for (const p of rawProducts2) {
        for (const type of extractTypes(p.type)) {
          if (isSafeTypeSlug(type)) set.add(type);
        }
      }
      return Array.from(set).sort();
    });
    const appliedSort = useState("productListSort", () => "name-asc");
    const pendingSort = ref(appliedSort.value);
    const appliedType = computed(() => {
      const param = route.params.category;
      const slug = typeof param === "string" ? param : null;
      if (!slug) return null;
      if (!isSafeTypeSlug(slug)) return null;
      return availableTypes.value.includes(slug) ? slug : null;
    });
    const pendingType = ref(appliedType.value);
    watch(
      () => appliedType.value,
      (v) => {
        pendingType.value = v;
      },
      { immediate: true }
    );
    watch(
      () => appliedSort.value,
      (v) => {
        pendingSort.value = v;
      },
      { immediate: true }
    );
    watch(
      () => route.params.category,
      (param) => {
        if (typeof param === "string" && !appliedType.value) {
          router.replace("/products/list");
        }
      },
      { immediate: true }
    );
    function typeLabel(type) {
      const key = `categories.${type}`;
      const translated = t(key);
      return translated === key ? type : translated;
    }
    const sortOptions = [
      { key: "price-asc", label: t("productList.sortPriceAsc") },
      { key: "price-desc", label: t("productList.sortPriceDesc") },
      { key: "name-asc", label: t("productList.sortNameAsc") },
      { key: "name-desc", label: t("productList.sortNameDesc") }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAccordion = __nuxt_component_1$1;
      const _component_UIAccordionItem = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sort-filter" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UIAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIAccordionItem, { "default-open": "" }, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("productList.sort"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "sort-filter_heading" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("productList.sort")), 1)
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="sort-filter_list subtitle-small" role="radiogroup"${ssrRenderAttr("aria-label", unref(t)("productList.sort"))}${_scopeId2}><!--[-->`);
                  ssrRenderList(sortOptions, (opt) => {
                    _push3(`<li${_scopeId2}><button type="button" class="${ssrRenderClass([{ "sort-filter_option--selected": pendingSort.value === opt.key }, "sort-filter_option"])}"${_scopeId2}><span class="sort-filter_option_label"${_scopeId2}>${ssrInterpolate(opt.label)}</span>`);
                    if (pendingSort.value === opt.key) {
                      _push3(`<span class="sort-filter_option_check" aria-hidden="true"${_scopeId2}> ✓ </span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</button></li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", {
                      class: "sort-filter_list subtitle-small",
                      role: "radiogroup",
                      "aria-label": unref(t)("productList.sort")
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(sortOptions, (opt) => {
                        return createVNode("li", {
                          key: opt.key
                        }, [
                          createVNode("button", {
                            type: "button",
                            class: ["sort-filter_option", { "sort-filter_option--selected": pendingSort.value === opt.key }],
                            onClick: ($event) => pendingSort.value = opt.key
                          }, [
                            createVNode("span", { class: "sort-filter_option_label" }, toDisplayString(opt.label), 1),
                            pendingSort.value === opt.key ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "sort-filter_option_check",
                              "aria-hidden": "true"
                            }, " ✓ ")) : createCommentVNode("", true)
                          ], 10, ["onClick"])
                        ]);
                      }), 64))
                    ], 8, ["aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIAccordionItem, { "default-open": "" }, {
                "accordion-trigger": withCtx(() => [
                  createVNode("div", { class: "sort-filter_heading" }, [
                    createVNode("span", { class: "links" }, toDisplayString(unref(t)("productList.sort")), 1)
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("ul", {
                    class: "sort-filter_list subtitle-small",
                    role: "radiogroup",
                    "aria-label": unref(t)("productList.sort")
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(sortOptions, (opt) => {
                      return createVNode("li", {
                        key: opt.key
                      }, [
                        createVNode("button", {
                          type: "button",
                          class: ["sort-filter_option", { "sort-filter_option--selected": pendingSort.value === opt.key }],
                          onClick: ($event) => pendingSort.value = opt.key
                        }, [
                          createVNode("span", { class: "sort-filter_option_label" }, toDisplayString(opt.label), 1),
                          pendingSort.value === opt.key ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "sort-filter_option_check",
                            "aria-hidden": "true"
                          }, " ✓ ")) : createCommentVNode("", true)
                        ], 10, ["onClick"])
                      ]);
                    }), 64))
                  ], 8, ["aria-label"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIAccordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIAccordionItem, { "default-open": "" }, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="sort-filter_heading"${_scopeId2}><span class="links"${_scopeId2}>${ssrInterpolate(unref(t)("productList.filter"))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "sort-filter_heading" }, [
                      createVNode("span", { class: "links" }, toDisplayString(unref(t)("productList.filter")), 1)
                    ])
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="sort-filter_list subtitle-small" role="radiogroup"${ssrRenderAttr("aria-label", unref(t)("productList.filter"))}${_scopeId2}><li${_scopeId2}><button type="button" class="${ssrRenderClass([{ "sort-filter_option--selected": pendingType.value === null }, "sort-filter_option"])}"${_scopeId2}><span class="sort-filter_option_label"${_scopeId2}>${ssrInterpolate(unref(t)("categories.all"))}</span>`);
                  if (pendingType.value === null) {
                    _push3(`<span class="sort-filter_option_check" aria-hidden="true"${_scopeId2}> ✓ </span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</button></li><!--[-->`);
                  ssrRenderList(availableTypes.value, (type) => {
                    _push3(`<li${_scopeId2}><button type="button" class="${ssrRenderClass([{ "sort-filter_option--selected": pendingType.value === type }, "sort-filter_option"])}"${_scopeId2}><span class="sort-filter_option_label"${_scopeId2}>${ssrInterpolate(typeLabel(type))}</span>`);
                    if (pendingType.value === type) {
                      _push3(`<span class="sort-filter_option_check" aria-hidden="true"${_scopeId2}> ✓ </span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</button></li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", {
                      class: "sort-filter_list subtitle-small",
                      role: "radiogroup",
                      "aria-label": unref(t)("productList.filter")
                    }, [
                      createVNode("li", null, [
                        createVNode("button", {
                          type: "button",
                          class: ["sort-filter_option", { "sort-filter_option--selected": pendingType.value === null }],
                          onClick: ($event) => pendingType.value = null
                        }, [
                          createVNode("span", { class: "sort-filter_option_label" }, toDisplayString(unref(t)("categories.all")), 1),
                          pendingType.value === null ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "sort-filter_option_check",
                            "aria-hidden": "true"
                          }, " ✓ ")) : createCommentVNode("", true)
                        ], 10, ["onClick"])
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(availableTypes.value, (type) => {
                        return openBlock(), createBlock("li", { key: type }, [
                          createVNode("button", {
                            type: "button",
                            class: ["sort-filter_option", { "sort-filter_option--selected": pendingType.value === type }],
                            onClick: ($event) => pendingType.value = type
                          }, [
                            createVNode("span", { class: "sort-filter_option_label" }, toDisplayString(typeLabel(type)), 1),
                            pendingType.value === type ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "sort-filter_option_check",
                              "aria-hidden": "true"
                            }, " ✓ ")) : createCommentVNode("", true)
                          ], 10, ["onClick"])
                        ]);
                      }), 128))
                    ], 8, ["aria-label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UIAccordionItem, { "default-open": "" }, {
                "accordion-trigger": withCtx(() => [
                  createVNode("div", { class: "sort-filter_heading" }, [
                    createVNode("span", { class: "links" }, toDisplayString(unref(t)("productList.filter")), 1)
                  ])
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("ul", {
                    class: "sort-filter_list subtitle-small",
                    role: "radiogroup",
                    "aria-label": unref(t)("productList.filter")
                  }, [
                    createVNode("li", null, [
                      createVNode("button", {
                        type: "button",
                        class: ["sort-filter_option", { "sort-filter_option--selected": pendingType.value === null }],
                        onClick: ($event) => pendingType.value = null
                      }, [
                        createVNode("span", { class: "sort-filter_option_label" }, toDisplayString(unref(t)("categories.all")), 1),
                        pendingType.value === null ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "sort-filter_option_check",
                          "aria-hidden": "true"
                        }, " ✓ ")) : createCommentVNode("", true)
                      ], 10, ["onClick"])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(availableTypes.value, (type) => {
                      return openBlock(), createBlock("li", { key: type }, [
                        createVNode("button", {
                          type: "button",
                          class: ["sort-filter_option", { "sort-filter_option--selected": pendingType.value === type }],
                          onClick: ($event) => pendingType.value = type
                        }, [
                          createVNode("span", { class: "sort-filter_option_label" }, toDisplayString(typeLabel(type)), 1),
                          pendingType.value === type ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "sort-filter_option_check",
                            "aria-hidden": "true"
                          }, " ✓ ")) : createCommentVNode("", true)
                        ], 10, ["onClick"])
                      ]);
                    }), 128))
                  ], 8, ["aria-label"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="vesta-btn sort-filter_btn" type="button">${ssrInterpolate(unref(t)("common.apply"))}</button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Product/SortFilter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "ProductSortFilter" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    product: {},
    favored: { type: Boolean, default: false }
  },
  emits: ["favor"],
  setup(__props, { emit: __emit }) {
    const heartPop = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPicture = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-card" }, _attrs))}><div class="product-card_img"><svg class="${ssrRenderClass([{ active: __props.favored, "product-card_img_icon--pop": heartPop.value }, "product-card_img_icon"])}"><use${ssrRenderAttr("href", _imports_0$1 + "#heart")}></use></svg>`);
      _push(ssrRenderComponent(_component_NuxtPicture, {
        src: __props.product.img,
        class: "product-card_img_image"
      }, null, _parent));
      _push(`</div><div class="product-card_name">${ssrInterpolate(__props.product.name)}</div><div class="product-card_price">${ssrInterpolate(__props.product.price)} ${ssrInterpolate(__props.product.currency)}</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Product/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "ProductCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[[category]]",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const rawProducts2 = useProductsRaw();
    const products = computed(() => localizeProducts(rawProducts2, locale.value));
    const appliedSort = useState("productListSort", () => "name-asc");
    const openSortFilter = ref(false);
    function extractTypes(value) {
      if (typeof value === "string") return [value];
      if (Array.isArray(value)) return value.filter((v) => typeof v === "string");
      return [];
    }
    function isSafeTypeSlug(value) {
      return /^[a-z0-9-]+$/.test(value);
    }
    const availableTypes = computed(() => {
      const set = /* @__PURE__ */ new Set();
      for (const p of rawProducts2) {
        for (const type of extractTypes(p.type)) {
          if (isSafeTypeSlug(type)) set.add(type);
        }
      }
      return Array.from(set);
    });
    const appliedType = computed(() => {
      const param = route.params.category;
      const slug = typeof param === "string" ? param : null;
      if (!slug) return null;
      if (!isSafeTypeSlug(slug)) return null;
      return availableTypes.value.includes(slug) ? slug : null;
    });
    watch(
      () => route.params.category,
      (param) => {
        if (typeof param === "string" && !appliedType.value) {
          router.replace("/products/list");
        }
      },
      { immediate: true }
    );
    const visibleProducts = computed(() => {
      const type = appliedType.value;
      const base = products.value;
      const filtered = type === null ? base : base.filter((p) => {
        const types = extractTypes(p.type);
        return types.includes(type);
      });
      switch (appliedSort.value) {
        case "price-asc":
          return [...filtered].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        case "price-desc":
          return [...filtered].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        case "name-asc":
          return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        case "name-desc":
          return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
        default:
          return filtered;
      }
    });
    const favorites = useLocalStorage("favorite", []);
    function handleFavorite(id) {
      const index = favorites.value.findIndex((f) => f.id === id);
      if (index !== -1) {
        favorites.value.splice(index, 1);
      } else {
        favorites.value.push({ id });
      }
    }
    function isFavorite(id) {
      return favorites.value.some((f) => f.id === id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductSortFilter = __nuxt_component_0;
      const _component_ProductCard = __nuxt_component_1;
      const _component_UISidenav = __nuxt_component_0$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<!--[--><div class="list-content"><div class="list-content_settings"><button type="button" class="list-content_settings_item"><svg class="list-content_settings_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#sort")}></use></svg><span>${ssrInterpolate(_ctx.$t("productList.sort"))}</span></button><button type="button" class="list-content_settings_item"><svg class="list-content_settings_icon"><use${ssrRenderAttr("href", _imports_0$1 + "#filter")}></use></svg><span>${ssrInterpolate(_ctx.$t("productList.filter"))}</span></button></div><div class="list-content_container"><div class="list-content_sort-filter">`);
      _push(ssrRenderComponent(_component_ProductSortFilter, null, null, _parent));
      _push(`</div><div class="list-content_grid"><!--[-->`);
      ssrRenderList(visibleProducts.value, (product, index) => {
        _push(ssrRenderComponent(_component_ProductCard, mergeProps({
          key: product.id,
          product,
          favored: isFavorite(product.id),
          onFavor: handleFavorite
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, index % 8)), null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(_component_UISidenav, {
        modelValue: openSortFilter.value,
        "onUpdate:modelValue": ($event) => openSortFilter.value = $event
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("productList.sort"))} / ${ssrInterpolate(_ctx.$t("productList.filter"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("productList.sort")) + " / " + toDisplayString(_ctx.$t("productList.filter")), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ProductSortFilter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ProductSortFilter)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/list/[[category]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_category_-COoJPcso.mjs.map
