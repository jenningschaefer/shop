import{o as i,c as r,a as e,r as _,n as h,f as d,g as x,F as g,h as C,u as f,t as $,b as u,w as o,e as v}from"./DfeYCMvE.js";const k={class:"address-tab_heading"},N={__name:"address-item",props:["active"],setup(n){return(s,c)=>(i(),r("div",{class:h(["address-tab",n.active=="true"?"active":""]),ref:"address-tabs"},[e("div",k,[_(s.$slots,"heading")]),e("div",null,[_(s.$slots,"content")])],2))}},S={id:"tab-headers",class:"address-tabs_headers"},A=["onClick"],B={id:"active-tab",class:"address-tabs_active"},L={__name:"address-tabs",props:["customClass"],setup(n){let s=d(null),c=d(null),t=d(null),a=d(0);x(()=>{console.log([...s.value.querySelectorAll(".address-tab")]),t.value=[...s.value.querySelectorAll(".address-tab")];for(let l of t.value)l.classList.contains("active")&&(a=t.value.indexOf(l))});const y=l=>{a=l;for(let m of[...t.value,...c.value])m.classList.remove("active");t.value[a].classList.add("active"),c.value[a].classList.add("active")};return(l,m)=>(i(),r("div",{id:"tabs-container",class:h(["address-tabs",n.customClass]),ref_key:"tabContainer",ref:s},[e("div",S,[e("ul",null,[(i(!0),r(g,null,C(f(t),(b,p)=>(i(),r("li",{key:p,class:h(f(a)==p?"active":""),onClick:T=>y(p),ref_for:!0,ref_key:"tabHeaders",ref:c},[e("h5",null,$(b.title),1)],10,A))),128))])]),e("div",B,[_(l.$slots,"default")])],2))}},F={class:"address"},H=e("h1",{class:"checkout_title"},"Address",-1),E={class:"address-container"},I=e("form",{action:""},[e("div",{class:"login_forms-group"},[e("input",{class:"",type:"text",placeholder:"First Name"}),e("input",{class:"",type:"text",placeholder:"Name"}),e("input",{class:"",type:"email",placeholder:"E-Mail Address"}),e("input",{class:"",type:"text",placeholder:"Country"}),e("input",{class:"",type:"text",placeholder:"Street"}),e("input",{class:"",type:"text",placeholder:"House No."}),e("input",{class:"",type:"text",placeholder:"Zip Code"}),e("input",{class:"",type:"text",placeholder:"City"})])],-1),M=e("form",{action:""},[e("div",{class:"login_forms-group"},[e("label",null,[e("input",{type:"checkbox"}),v(" Same as Billing ")]),e("input",{class:"",type:"text",placeholder:"First Name"}),e("input",{class:"",type:"text",placeholder:"Name"}),e("input",{class:"",type:"email",placeholder:"E-Mail Address"}),e("input",{class:"",type:"text",placeholder:"Country"}),e("input",{class:"",type:"text",placeholder:"Street"}),e("input",{class:"",type:"text",placeholder:"House No."}),e("input",{class:"",type:"text",placeholder:"Zip Code"}),e("input",{class:"",type:"text",placeholder:"City"})])],-1),q={__name:"address",setup(n){return(s,c)=>{const t=N,a=L;return i(),r("div",F,[H,e("div",E,[u(a,null,{default:o(()=>[u(t,{active:"true",title:"Shipping"},{heading:o(()=>[v("Shipping")]),content:o(()=>[I]),_:1}),u(t,{title:"Billing"},{heading:o(()=>[v("Billing")]),content:o(()=>[M]),_:1})]),_:1})])])}}};export{q as default};
