import{_ as D,__tla as I}from"./ContentWrap.vue_vue_type_script_setup_true_lang-3fd6aef1.js";import{d as T,r as y,p as U,K as E,o as h,c as F,g as l,f as a,w as t,t as o,x as H,v as S,h as n,a as d,au as G,F as K,k as M,j as N,C as O,__tla as q}from"./index-d2088aec.js";import{E as z,a as A,__tla as B}from"./el-descriptions-item-6a175b15.js";import{_ as J,__tla as L}from"./DictTag.vue_vue_type_script_lang-754cee6f.js";import{_ as Q,__tla as V}from"./ProductForm.vue_vue_type_script_setup_true_lang-abb4adea.js";import{D as W,__tla as X}from"./dict-999fbee6.js";import{g as Y,__tla as Z}from"./index-0750a816.js";let v,$=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return q}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{let i,p;i={class:"flex items-start justify-between"},p={class:"text-xl font-bold"},v=T({__name:"ProductDetailsHeader",props:{product:{}},emits:["refresh"],setup(aa,{emit:b}){const f=y(),x=b,m=y([]);return U(async()=>{m.value=await Y({})}),(r,s)=>{const P=M,w=N,C=O,_=z,g=J,k=A,R=D,j=E("hasPermi");return h(),F(K,null,[l("div",null,[l("div",i,[l("div",null,[a(w,null,{default:t(()=>[a(P,null,{default:t(()=>[l("span",p,o(r.product.name),1)]),_:1})]),_:1})]),l("div",null,[H((h(),S(C,{onClick:s[0]||(s[0]=u=>{return e="update",c=r.product.id,void f.value.open(e,c);var e,c})},{default:t(()=>[n(" \u7F16\u8F91 ")]),_:1})),[[j,["crm:product:update"]]])])])]),a(R,{class:"mt-10px"},{default:t(()=>[a(k,{column:5,direction:"vertical"},{default:t(()=>[a(_,{label:"\u4EA7\u54C1\u7C7B\u522B"},{default:t(()=>{var u,e;return[n(o((e=(u=d(m))==null?void 0:u.find(c=>c.id===r.product.categoryId))==null?void 0:e.name),1)]}),_:1}),a(_,{label:"\u4EA7\u54C1\u5355\u4F4D"},{default:t(()=>[a(g,{type:d(W).CRM_PRODUCT_UNIT,value:r.product.unit},null,8,["type","value"])]),_:1}),a(_,{label:"\u4EA7\u54C1\u4EF7\u683C"},{default:t(()=>[n(o(d(G)(r.product.price))+"\u5143",1)]),_:1}),a(_,{label:"\u4EA7\u54C1\u7F16\u7801"},{default:t(()=>[n(o(r.product.no),1)]),_:1})]),_:1})]),_:1}),a(Q,{ref_key:"formRef",ref:f,onSuccess:s[1]||(s[1]=u=>x("refresh"))},null,512)],64)}}})});export{v as _,$ as __tla};