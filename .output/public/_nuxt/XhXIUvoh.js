import{_ as y}from"./BOGR0JwX.js";import{i as w,f,j as u,k as b,l as N,g as A,m as I,c as B,a as s,u as C,b as _,w as d,o as S,p as T,e as p}from"./DfeYCMvE.js";import{u as E,a as L,p as k,m as j,b as V}from"./azV3WEEw.js";import{_ as $}from"./C2lOhsCK.js";import{_ as H}from"./C_1RFqKw.js";const P={...V,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},q=w({name:"NuxtImg",props:P,emits:["load","error"],setup:(t,i)=>{const n=E(),o=L(t),c=f(!1),a=u(()=>n.getSizes(t.src,{...o.options.value,sizes:t.sizes,densities:t.densities,modifiers:{...o.modifiers.value,width:k(t.width),height:k(t.height)}})),z=u(()=>{const e={...o.attrs.value,"data-nuxt-img":""};return(!t.placeholder||c.value)&&(e.sizes=a.value.sizes,e.srcset=a.value.srcset),e}),h=u(()=>{let e=t.placeholder;if(e===""&&(e=!0),!e||c.value)return!1;if(typeof e=="string")return e;const r=Array.isArray(e)?e:typeof e=="number"?[e,e]:[10,10];return n(t.src,{...o.modifiers.value,width:r[0],height:r[1],quality:r[2]||50,blur:r[3]||3},o.options.value)}),g=u(()=>t.sizes?a.value.src:n(t.src,o.modifiers.value,o.options.value)),v=u(()=>h.value?h.value:g.value);if(t.preload){const e=Object.values(a.value).every(r=>r);b({link:[{rel:"preload",as:"image",nonce:t.nonce,...e?{href:a.value.src,imagesizes:a.value.sizes,imagesrcset:a.value.srcset}:{href:v.value}}]})}const l=f(),x=N().isHydrating;return A(()=>{if(h.value){const e=new Image;e.src=g.value,t.sizes&&(e.sizes=a.value.sizes||"",e.srcset=a.value.srcset),e.onload=r=>{c.value=!0,i.emit("load",r)},j("nuxt-image");return}l.value&&(l.value.complete&&x&&(l.value.getAttribute("data-error")?i.emit("error",new Event("error")):i.emit("load",new Event("load"))),l.value.onload=e=>{i.emit("load",e)},l.value.onerror=e=>{i.emit("error",e)})}),()=>I("img",{ref:l,src:v.value,...z.value,...i.attrs})}}),D=$+"#logo-bg",m=H+"#link",F={class:"home"},M=s("svg",{class:"home_slogan_bg"},[s("use",{href:D})],-1),O=s("div",{class:"home_slogan_text hero-font"},[p("make it simple"),s("br"),p("but significant")],-1),R=[M,O],U={class:"home_categories"},G=s("p",{class:"links"},"Chairs",-1),J=s("svg",{class:"home_categories_link_icon"},[s("use",{href:m})],-1),K=s("p",{class:"links"},"Lighting",-1),Q=s("svg",{class:"home_categories_link_icon"},[s("use",{href:m})],-1),W=s("p",{class:"links"},"Tables",-1),X=s("svg",{class:"home_categories_link_icon"},[s("use",{href:m})],-1),Y=s("p",{class:"links"},"Decoration",-1),Z=s("svg",{class:"home_categories_link_icon"},[s("use",{href:m})],-1),ee={class:"home_hero"},re={__name:"index",setup(t){return b({title:"Shop"}),(i,n)=>{const o=y,c=q;return S(),B("div",F,[s("div",{class:"home_slogan",onClick:n[0]||(n[0]=a=>("navigateTo"in i?i.navigateTo:C(T))("/products/list"))},R),s("div",U,[_(o,{to:"/products/list/chairs",class:"home_categories_link"},{default:d(()=>[G,J]),_:1}),_(o,{to:"/products/list/ligting",class:"home_categories_link"},{default:d(()=>[K,Q]),_:1}),_(o,{to:"/products/list/tables",class:"home_categories_link"},{default:d(()=>[W,X]),_:1}),_(o,{to:"/products/list/decoration",class:"home_categories_link"},{default:d(()=>[Y,Z]),_:1})]),s("div",ee,[_(c,{class:"",onClick:n[1]||(n[1]=()=>{}),src:"pexels-heyho-6077368.jpg"})])])}}};export{re as default};
