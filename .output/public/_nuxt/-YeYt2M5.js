import{_ as c}from"./nwUWE6_t.js";import{c as n,a as t,b as s,w as e,d as i,o as d,_ as a}from"./DhxrLxPv.js";const _=a+"#home",l=a+"#arrow-left",r={class:"account-address"},u={class:"account-user_link"},p=t("div",{class:"account-link"},[t("svg",{class:"account-link_icon"},[t("use",{href:_})]),t("div",{class:"account-link_name"},"Address"),t("svg",{class:"account-link_icon"},[t("use",{href:l})])],-1),h={class:"account-address_form"},m={action:""},v=i('<div class="account-address_form-group"><input class="" type="text" placeholder="Street"><input class="" type="text" placeholder="House No."><input class="" type="text" placeholder="Zip Code"><input class="" type="text" placeholder="City"><select><option value="" disabled selected>Country</option><option value="1">Germany</option><option value="2">United Kingdom</option><option value="2">US America</option><option value="3">Korea</option><option value="4">Japan</option></select></div>',1),f={class:"account-address_form-buttons"},b=t("button",{class:"vesta-btn",type:"button"},"Save",-1),x=t("button",{class:"vesta-btn",type:"button"},"Discard Changes",-1),S={__name:"edit-address",setup(y){return(k,g)=>{const o=c;return d(),n("div",r,[t("div",u,[s(o,{to:"/account",class:""},{default:e(()=>[p]),_:1})]),t("div",h,[t("form",m,[v,t("div",f,[s(o,{to:"/account",class:""},{default:e(()=>[b]),_:1}),x])])])])}}};export{S as default};
