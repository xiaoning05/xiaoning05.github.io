import{d as v,o as n,c as m,w as h,f as s,b as a,e as t,t as r,aH as x,a as C,h as _,F as E,aa as w,a8 as D,v as H,__tla as g}from"./index-34f06ebd.js";import{_ as L,__tla as M}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{E as j,a as R,__tla as S}from"./el-descriptions-item-a4aeefac.js";import{_ as U,__tla as B}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import{D as F,__tla as N}from"./dict-e142e39a.js";let c,O=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return N}catch{}})()]).then(async()=>{let u,o;u={class:"flex items-start justify-between"},o={class:"text-xl font-bold"},c=v({name:"CustomerDetailsHeader",__name:"CustomerDetailsHeader",props:{customer:{},loading:{type:Boolean}},setup:P=>(l,T)=>{const d=w,i=D,f=U,e=j,p=R,y=L,b=H;return n(),m(E,null,[h((n(),m("div",null,[s("div",u,[s("div",null,[a(i,null,{default:t(()=>[a(d,null,{default:t(()=>[s("span",o,r(l.customer.name),1)]),_:1})]),_:1})]),s("div",null,[x(l.$slots,"default")])])])),[[b,l.loading]]),a(y,{class:"mt-10px"},{default:t(()=>[a(p,{column:5,direction:"vertical"},{default:t(()=>[a(e,{label:"\u5BA2\u6237\u7EA7\u522B"},{default:t(()=>[a(f,{type:C(F).CRM_CUSTOMER_LEVEL,value:l.customer.level},null,8,["type","value"])]),_:1}),a(e,{label:"\u6210\u4EA4\u72B6\u6001"},{default:t(()=>[_(r(l.customer.dealStatus?"\u5DF2\u6210\u4EA4":"\u672A\u6210\u4EA4"),1)]),_:1}),a(e,{label:"\u8D1F\u8D23\u4EBA"},{default:t(()=>[_(r(l.customer.ownerUserName),1)]),_:1}),a(e,{label:"\u9996\u8981\u8054\u7CFB\u4EBA"}),a(e,{label:"\u9996\u8981\u8054\u7CFB\u4EBA\u7535\u8BDD"},{default:t(()=>[_(r(l.customer.mobile),1)]),_:1})]),_:1})]),_:1})],64)}})});export{c as _,O as __tla};