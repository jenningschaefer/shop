import{a as oe,_ as se}from"./Bh_XXHBl.js";import{_ as ae}from"./DFA_R2Tv.js";import{_ as ie,o as b,c as $,b as p,w as d,a as o,e as S,n as le,B as ce,t as V,g as I,x as ue,r as G,C as _e,D as fe,E as de,G as K,H as pe,I as me,h as ve,F as ge,j as Oe,k as he}from"./CpuYT-gV.js";import{_ as ye,a as we}from"./CN2bw4X6.js";import{_ as j}from"./BvDPXIPW.js";import{_ as be}from"./DrnnODDR.js";import"./o44RCU89.js";const $e={},Pe={class:"sort-filter"},Se=o("div",{class:"sort-filter_heading"},[o("span",{class:"links"},"Sort")],-1),Ie=o("ul",{class:"sort-filter_list subtitle-small"},[o("li",null,"Price"),o("li",null,"Categories")],-1),Ee=o("div",{class:"sort-filter_heading"},[o("span",{class:"links"},"Filter")],-1),Ne={class:"sort-filter_list subtitle-small"},Fe=o("button",{class:"vesta-btn sort-filter_btn",type:"button"},"Apply",-1);function Ae(e,r){const t=oe,n=ae,s=se;return b(),$("div",Pe,[p(s,null,{default:d(()=>[p(t,null,{"accordion-trigger":d(()=>[Se]),"accordion-content":d(()=>[Ie]),_:1}),p(t,null,{"accordion-trigger":d(()=>[Ee]),"accordion-content":d(()=>[o("ul",Ne,[o("li",null,[p(n,{to:"/products/list/chairs"},{default:d(()=>[S("Chair")]),_:1})]),o("li",null,[p(n,{to:"/products/list/tables"},{default:d(()=>[S("Tables")]),_:1})]),o("li",null,[p(n,{to:"/products/list/ligting"},{default:d(()=>[S("Lighting")]),_:1})]),o("li",null,[p(n,{to:"/products/list/decoration"},{default:d(()=>[S("Decoration")]),_:1})])])]),_:1})]),_:1}),Fe])}const Ce=ie($e,[["render",Ae]]),je=j+"#heart",xe={class:"product-card_img"},Te=o("use",{href:je},null,-1),De=[Te],Ve={class:"product-card_name"},Be={class:"product-card_price"},Le={__name:"Card",props:{product:Object,favored:Boolean},emits:["favor"],setup(e,{emit:r}){const t=r;return(n,s)=>{const i=ye;return b(),$("div",{class:"product-card",onClick:s[1]||(s[1]=u=>("navigateTo"in n?n.navigateTo:I(ue))(`/products/${e.product.name_url}-${e.product.id}`))},[o("div",xe,[(b(),$("svg",{class:le(["product-card_img_icon",e.favored?"active":""]),onClick:s[0]||(s[0]=ce(u=>t("favor",e.product.id),["stop"]))},De,2)),p(i,{format:"avif, webp",src:e.product.img,class:"product-card_img_image"},null,8,["src"])]),o("div",Ve,V(e.product.name),1),o("div",Be,V(e.product.price_us)+" $",1)])}}};var B;const q=typeof window<"u",Qe=e=>typeof e=="function",We=e=>typeof e=="string",ke=()=>{};q&&((B=window==null?void 0:window.navigator)!=null&&B.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function x(e){return typeof e=="function"?e():I(e)}function Re(e,r){function t(...n){return new Promise((s,i)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(s).catch(i)})}return t}const X=e=>e();function ze(e=X){const r=G(!0);function t(){r.value=!1}function n(){r.value=!0}const s=(...i)=>{r.value&&e(...i)};return{isActive:_e(r),pause:t,resume:n,eventFilter:s}}function Je(e){return e}function Ue(e){return fe()?(de(e),!0):!1}var L=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Ge=(e,r)=>{var t={};for(var n in e)He.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&L)for(var n of L(e))r.indexOf(n)<0&&Me.call(e,n)&&(t[n]=e[n]);return t};function Ke(e,r,t={}){const n=t,{eventFilter:s=X}=n,i=Ge(n,["eventFilter"]);return K(e,Re(s,r),i)}var qe=Object.defineProperty,Xe=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,Q=(e,r,t)=>r in e?qe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ze=(e,r)=>{for(var t in r||(r={}))Y.call(r,t)&&Q(e,t,r[t]);if(E)for(var t of E(r))Z.call(r,t)&&Q(e,t,r[t]);return e},et=(e,r)=>Xe(e,Ye(r)),tt=(e,r)=>{var t={};for(var n in e)Y.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&E)for(var n of E(e))r.indexOf(n)<0&&Z.call(e,n)&&(t[n]=e[n]);return t};function rt(e,r,t={}){const n=t,{eventFilter:s}=n,i=tt(n,["eventFilter"]),{eventFilter:u,pause:v,resume:g,isActive:c}=ze(s);return{stop:Ke(e,r,et(Ze({},i),{eventFilter:u})),pause:v,resume:g,isActive:c}}function nt(e){var r;const t=x(e);return(r=t==null?void 0:t.$el)!=null?r:t}const N=q?window:void 0;function W(...e){let r,t,n,s;if(We(e[0])||Array.isArray(e[0])?([t,n,s]=e,r=N):[r,t,n,s]=e,!r)return ke;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const i=[],u=()=>{i.forEach(_=>_()),i.length=0},v=(_,f,y,m)=>(_.addEventListener(f,y,m),()=>_.removeEventListener(f,y,m)),g=K(()=>[nt(r),x(s)],([_,f])=>{u(),_&&i.push(...t.flatMap(y=>n.map(m=>v(_,y,m,f))))},{immediate:!0,flush:"post"}),c=()=>{g(),u()};return Ue(c),c}const A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C="__vueuse_ssr_handlers__";A[C]=A[C]||{};const ot=A[C];function st(e,r){return ot[e]||r}function at(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var it=Object.defineProperty,k=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?it(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,z=(e,r)=>{for(var t in r||(r={}))lt.call(r,t)&&R(e,t,r[t]);if(k)for(var t of k(r))ct.call(r,t)&&R(e,t,r[t]);return e};const ut={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},J="vueuse-storage";function _t(e,r,t,n={}){var s;const{flush:i="pre",deep:u=!0,listenToStorageChanges:v=!0,writeDefaults:g=!0,mergeDefaults:c=!1,shallow:_,window:f=N,eventFilter:y,onError:m=a=>{console.error(a)}}=n,w=(_?pe:G)(r);if(!t)try{t=st("getDefaultStorage",()=>{var a;return(a=N)==null?void 0:a.localStorage})()}catch(a){m(a)}if(!t)return w;const O=x(r),T=at(O),P=(s=n.serializer)!=null?s:ut[T],{pause:ee,resume:D}=rt(w,()=>te(w.value),{flush:i,deep:u,eventFilter:y});return f&&v&&(W(f,"storage",F),W(f,J,ne)),F(),w;function te(a){try{if(a==null)t.removeItem(e);else{const l=P.write(a),h=t.getItem(e);h!==l&&(t.setItem(e,l),f&&f.dispatchEvent(new CustomEvent(J,{detail:{key:e,oldValue:h,newValue:l,storageArea:t}})))}}catch(l){m(l)}}function re(a){const l=a?a.newValue:t.getItem(e);if(l==null)return g&&O!==null&&t.setItem(e,P.write(O)),O;if(!a&&c){const h=P.read(l);return Qe(c)?c(h,O):T==="object"&&!Array.isArray(h)?z(z({},O),h):h}else return typeof l!="string"?l:P.read(l)}function ne(a){F(a.detail)}function F(a){if(!(a&&a.storageArea!==t)){if(a&&a.key==null){w.value=O;return}if(!(a&&a.key!==e)){ee();try{w.value=re(a)}catch(l){m(l)}finally{a?me(D):D()}}}}}function ft(e,r,t={}){const{window:n=N}=t;return _t(e,r,n==null?void 0:n.localStorage,t)}var U;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(U||(U={}));var dt=Object.defineProperty,H=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,M=(e,r,t)=>r in e?dt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,vt=(e,r)=>{for(var t in r||(r={}))pt.call(r,t)&&M(e,t,r[t]);if(H)for(var t of H(r))mt.call(r,t)&&M(e,t,r[t]);return e};const gt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};vt({linear:Je},gt);const Ot=j+"#sort",ht=j+"#filter",yt={class:"list-content"},wt=o("div",{class:"list-content_settings"},[o("div",{class:"list-content_settings_item"},[o("svg",{class:"list-content_settings_icon"},[o("use",{href:Ot})]),o("span",null,"Sort")]),o("div",{class:"list-content_settings_item"},[o("svg",{class:"list-content_settings_icon"},[o("use",{href:ht})]),o("span",null,"Filter")])],-1),bt={class:"list-content_container"},$t={class:"list-content_sort-filter"},Pt={class:"list-content_grid"},jt={__name:"[[category]]",setup(e){ve();const{products:r}=we(),t=ft("favorite",{}),n=s=>{s in t.value?delete t.value[s]:t.value={...t.value,[s]:!0}};return(s,i)=>{const u=Ce,v=Le,g=be;return b(),$("div",yt,[wt,o("div",bt,[o("div",$t,[p(u)]),o("div",Pt,[p(g,null,{default:d(()=>[(b(!0),$(ge,null,Oe(I(r),c=>(b(),he(v,{key:c.id,product:c,onFavor:n,favored:c.id in I(t)},null,8,["product","favored"]))),128))]),_:1})])])])}}};export{jt as default};
