import{_ as N}from"./nwUWE6_t.js";import{o as l,c as r,a as s,b as o,w as e,_ as v,F as x,r as R,u as c,e as I,P as M,g as O,i as k,v as T,f as $,x as g}from"./DhxrLxPv.js";import{_ as U}from"./DlAUqK2U.js";import{_ as E}from"./Bhg6ctAP.js";import{_ as S}from"./DvTtJDfX.js";import{_ as D}from"./BM2tsZde.js";import{_ as G}from"./DtuhHQ3H.js";import{u as J}from"./B9I5KabQ.js";import{_ as P}from"./DgPKPOrO.js";const j={},p=v+"#link",q={class:"menu"},z={class:"menu_links"},H=s("p",null,"Chairs",-1),K=s("svg",{class:"menu_links_link_icon"},[s("use",{href:p})],-1),Q=s("p",null,"Tables",-1),W=s("svg",{class:"menu_links_link_icon"},[s("use",{href:p})],-1),X=s("p",null,"Lighting",-1),Y=s("svg",{class:"menu_links_link_icon"},[s("use",{href:p})],-1),Z=s("p",null,"Decoration",-1),ss=s("svg",{class:"menu_links_link_icon"},[s("use",{href:p})],-1),ts={class:"menu_bottom"},es=s("div",{class:"menu_bottom_newsletter"},[s("div",{class:"subtitle-big"}," Join Our Newsletter "),s("div",{class:"menu_bottom_newsletter_input"},[s("input",{class:"input-newsletter",type:"text",placeholder:"E-Mail Address"}),s("a",{click:""},[s("svg",{class:"menu_bottom_newsletter_icon"},[s("use",{href:p})])])])],-1),os=s("p",null,"DESIGN",-1),ns=s("svg",{class:"menu_links_link_icon"},[s("use",{href:p})],-1);function _s(b,d){const _=N;return l(),r("div",q,[s("div",z,[o(_,{to:"/products/list/chairs",class:"menu_links_link"},{default:e(()=>[H,K]),_:1}),o(_,{to:"/products/list/tables",class:"menu_links_link"},{default:e(()=>[Q,W]),_:1}),o(_,{to:"/products/list/ligting",class:"menu_links_link"},{default:e(()=>[X,Y]),_:1}),o(_,{to:"/products/list/decoration",class:"menu_links_link"},{default:e(()=>[Z,ss]),_:1})]),s("div",ts,[es,o(_,{to:"/products/list/chairs",class:"menu_links_link"},{default:e(()=>[os,ns]),_:1})])])}const is=U(j,[["render",_s]]),as={class:"order-cart"},ls={class:"order-cart_products"},cs=["onClick"],rs=["onClick"],us={__name:"Favorites",setup(b){const d=J("favorite",[]),_=i=>{d.value=d.value.filter(a=>a.id!=i),alert("Removed from FAvorites")},m=i=>{cart.value.some(a=>a.id===i)?alert("Already in Cart."):(cart.value.push({id:i,amount:1}),alert("Added to Cart."))};return(i,a)=>{const C=D,t=G;return l(),r("div",as,[s("div",ls,[o(t,null,{default:e(()=>[(l(!0),r(x,null,R(c(d),u=>(l(),I(C,{key:u.id,item:u,isInCart:!0,class:"order-cart_products_product"},{buttons:e(()=>[s("button",{type:"button",class:"vesta-btn",onClick:f=>m(u.id)},"Add To Cart",8,cs),s("button",{type:"button",class:"vesta-btn",onClick:f=>_(u.id)},"Remove from Favorites",8,rs)]),_:2},1032,["item"]))),128))]),_:1})])])}}},ds=P+"#logo",B=v+"#arrow-left",V=v+"#lang-de",y=v+"#cart",F=v+"#heart",w=v+"#user",ms={class:"navBar"},vs=s("svg",{class:"navBar_logo"},[s("use",{href:ds})],-1),ps={class:"navBar_icons"},fs=s("svg",{class:"subNav_icon"},[s("use",{href:B})],-1),hs=[fs],ks=s("svg",{class:"subNav_icon"},[s("use",{href:V})],-1),$s=[ks],gs=s("svg",{class:"navBar_icons_icon"},[s("use",{href:y})],-1),bs=[gs],Cs=s("svg",{class:"navBar_icons_icon"},[s("use",{href:F})],-1),Ns=[Cs],xs=s("svg",{class:"navBar_icons_icon"},[s("use",{href:w})],-1),Bs={class:"navBar_menu"},Vs={key:0,class:"subNav"},ys=s("svg",{class:"subNav_icon"},[s("use",{href:B})],-1),Fs=[ys],ws=s("svg",{class:"subNav_icon"},[s("use",{href:V})],-1),As=[ws],Ls=s("svg",{class:"subNav_icon"},[s("use",{href:y})],-1),Rs=[Ls],Is=s("svg",{class:"subNav_icon"},[s("use",{href:F})],-1),Ms=[Is],Os=s("svg",{class:"subNav_icon"},[s("use",{href:w})],-1),qs={__name:"NavBar",setup(b){const d=M(),_=O(),m=k(),i=k(),a=k();return(C,t)=>{const u=N,f=is,h=E,A=S,L=us;return l(),r(x,null,[s("div",null,[s("div",ms,[o(u,{to:"/",class:"navBar_home"},{default:e(()=>[vs]),_:1}),s("div",ps,[c(_).name==="products-name-id"?(l(),r("a",{key:0,onClick:t[0]||(t[0]=n=>c(d).back())},hs)):(l(),r("a",{key:1,onClick:t[1]||(t[1]=()=>{})},$s)),s("a",{onClick:t[2]||(t[2]=n=>i.value=!0)},bs),s("a",{onClick:t[3]||(t[3]=n=>a.value=!0)},Ns),o(u,{to:"/login"},{default:e(()=>[xs]),_:1})]),s("div",Bs,[s("a",{onClick:t[4]||(t[4]=n=>m.value=!0)},"menu")])]),c(_).name.includes("account")?T("",!0):(l(),r("div",Vs,[c(_).name==="products-name-id"?(l(),r("a",{key:0,onClick:t[5]||(t[5]=n=>c(d).back())},Fs)):(l(),r("a",{key:1,onClick:t[6]||(t[6]=()=>{})},As)),s("a",{onClick:t[7]||(t[7]=n=>i.value=!0)},Rs),s("a",{onClick:t[8]||(t[8]=n=>a.value=!0)},Ms),o(u,{to:"/login"},{default:e(()=>[Os]),_:1})]))]),o(h,{modelValue:c(m),"onUpdate:modelValue":t[9]||(t[9]=n=>g(m)?m.value=n:null)},{title:e(()=>[$("Menu")]),content:e(()=>[o(f)]),_:1},8,["modelValue"]),o(h,{modelValue:c(i),"onUpdate:modelValue":t[10]||(t[10]=n=>g(i)?i.value=n:null)},{title:e(()=>[$("Cart")]),content:e(()=>[o(A)]),_:1},8,["modelValue"]),o(h,{modelValue:c(a),"onUpdate:modelValue":t[11]||(t[11]=n=>g(a)?a.value=n:null)},{title:e(()=>[$("Favorites")]),content:e(()=>[o(L)]),_:1},8,["modelValue"])],64)}}};export{qs as _};
