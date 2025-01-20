import{_ as y}from"./BOGR0JwX.js";import{o as i,c as r,r as v,n as p,f as d,g as k,a as t,F as x,h as w,u as m,t as C,_ as L,b as l,w as n,e as h}from"./DfeYCMvE.js";import{_ as N}from"./C_1RFqKw.js";const $={__name:"tab-item",props:["active"],setup(_){return(c,s)=>(i(),r("div",{class:p(["tab",_.active=="true"?"active":""]),ref:"tabs"},[v(c.$slots,"default")],2))}},I={id:"tab-headers",class:"tabs_headers"},M=["onClick"],T={id:"active-tab",class:"tabs_active"},E={__name:"tabs",props:["customClass"],setup(_){let c=d(null),s=d(null),e=d(null),o=d(0);k(()=>{e.value=[...c.value.querySelectorAll(".tab")];for(let a of e.value)a.classList.contains("active")&&(o=e.value.indexOf(a))});const b=a=>{o=a;for(let f of[...e.value,...s.value])f.classList.remove("active");e.value[o].classList.add("active"),s.value[o].classList.add("active")};return(a,f)=>(i(),r("div",{id:"tabs-container",class:p(["tabs",_.customClass]),ref_key:"tabContainer",ref:c},[t("div",I,[t("ul",null,[(i(!0),r(x,null,w(m(e),(g,u)=>(i(),r("li",{key:u,class:p(m(o)==u?"active":""),onClick:ut=>b(u),ref_for:!0,ref_key:"tabHeaders",ref:s},[t("h5",null,C(g.title),1)],10,M))),128))])]),t("div",T,[v(a.$slots,"default")])],2))}},P={},A=N+"#link",F={class:"login"},S=t("h2",{class:"login_title"},"Welcome",-1),V={class:"login_forms"},B={class:"login_account"},O={action:""},H={class:"login_forms-group"},R=t("input",{class:"",type:"email",placeholder:"E-Mail Address"},null,-1),U=t("input",{class:"",type:"password",placeholder:"Password"},null,-1),Y=t("a",{class:"login_forms-group-link",href:""},[h("Forgot Password? "),t("svg",{class:"login_forms-group-icon"},[t("use",{href:A})])],-1),j=t("button",{class:"vesta-btn",type:"button"},"Login",-1),q={action:""},z={class:"login_forms-group"},D=t("select",null,[t("option",{value:"",disabled:"",selected:""},"Title"),t("option",{value:"1"},"Mr"),t("option",{value:"2"},"Mrs"),t("option",{value:"3"},"None")],-1),W=t("input",{class:"",type:"text",placeholder:"First Name"},null,-1),Z=t("input",{class:"",type:"text",placeholder:"Name"},null,-1),G=t("input",{class:"",type:"text",placeholder:"E-Mail Address"},null,-1),J=t("input",{class:"",type:"email",placeholder:"Confirm E-Mail"},null,-1),K=t("input",{class:"",type:"password",placeholder:"Password"},null,-1),Q=t("p",null," Your password must have at least 8 characters with one number, one upper and one lower case letter and one special character. ",-1),X=t("input",{class:"",type:"password",placeholder:"Confirm Password"},null,-1),tt=t("label",null,[t("input",{type:"checkbox",checked:"checked"}),h(" I agree to the terms and conditions of Vesta. Information on data subject rights and data protection regulations. ")],-1),et=t("label",null,[t("input",{type:"checkbox",checked:"checked"}),h(" Yes, I would like to receive the free newsletter. ")],-1),st=t("button",{class:"vesta-btn",type:"button"},"Register",-1),ot=t("hr",{class:"login_seperator"},null,-1),at={class:"login_order"},lt={action:""},nt={class:"login_forms-group"},ct=t("input",{class:"",type:"email",placeholder:"E-Mail Address"},null,-1),it=t("input",{class:"",type:"text",placeholder:"Order No."},null,-1),rt=t("input",{class:"",type:"text",placeholder:"ZIP Code"},null,-1),_t=t("button",{class:"vesta-btn",type:"button"},"Order Status",-1);function dt(_,c){const s=y,e=$,o=E;return i(),r("div",F,[S,t("div",V,[t("div",B,[l(o,null,{default:n(()=>[l(e,{active:"true",title:"Login"},{default:n(()=>[t("form",O,[t("div",H,[R,U,Y,l(s,{to:"/account/"},{default:n(()=>[j]),_:1})])])]),_:1}),l(e,{title:"Register"},{default:n(()=>[t("form",q,[t("div",z,[D,W,Z,G,J,K,Q,X,tt,et,l(s,{to:"/account/"},{default:n(()=>[st]),_:1})])])]),_:1})]),_:1})]),ot,t("div",at,[t("form",lt,[t("div",nt,[ct,it,rt,l(s,{to:"/account/order-id"},{default:n(()=>[_t]),_:1})])])])])])}const mt=L(P,[["render",dt]]);export{mt as default};
