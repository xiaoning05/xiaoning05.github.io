import{_ as k,__tla as R}from"./ContentWrap-5acc4fb9.js";import{d as j,r as y,p as E,L as H,o as h,c as M,g as l,f as t,w as a,t as o,x as T,v as A,h as n,a as i,av as F,F as N,k as q,j as G,D as L,_ as O,__tla as S}from"./index-f0743f71.js";import{E as X,a as Y,__tla as Z}from"./el-descriptions-item-73ac4081.js";import{_ as z,__tla as B}from"./DictTag-4f08045a.js";import J,{__tla as K}from"./ProductForm-5a2a88b2.js";import{D as Q,__tla as V}from"./dict-4a9940b3.js";import{g as W,__tla as $}from"./index-e4d79a09.js";import{__tla as tt}from"./index-a48a5540.js";import"./color-f5b6e279.js";import{__tla as at}from"./Dialog-8f786edd.js";import{__tla as rt}from"./index-71d2ef9b.js";import"./tree-02f455f9.js";import{__tla as et}from"./index-5f468446.js";import{__tla as lt}from"./useMessage-75a00a06.js";let v,_t=Promise.all([(()=>{try{return R}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})()]).then(async()=>{let d,m;d={class:"flex items-start justify-between"},m={class:"text-xl font-bold"},v=O(j({__name:"ProductDetailsHeader",props:{product:{type:null,required:!0}},emits:["refresh"],setup(st,{emit:D}){const p=y(),b=D,f=y([]);return E(async()=>{f.value=await W({})}),(r,_)=>{const x=q,w=G,P=L,s=X,C=z,I=Y,U=k,g=H("hasPermi");return h(),M(N,null,[l("div",null,[l("div",d,[l("div",null,[t(w,null,{default:a(()=>[t(x,null,{default:a(()=>[l("span",m,o(r.product.name),1)]),_:1})]),_:1})]),l("div",null,[T((h(),A(P,{onClick:_[0]||(_[0]=u=>{return e="update",c=r.product.id,void p.value.open(e,c);var e,c})},{default:a(()=>[n(" \u7F16\u8F91 ")]),_:1})),[[g,["crm:product:update"]]])])])]),t(U,{class:"mt-10px"},{default:a(()=>[t(I,{column:5,direction:"vertical"},{default:a(()=>[t(s,{label:"\u4EA7\u54C1\u7C7B\u522B"},{default:a(()=>{var u,e;return[n(o((e=(u=i(f))==null?void 0:u.find(c=>c.id===r.product.categoryId))==null?void 0:e.name),1)]}),_:1}),t(s,{label:"\u4EA7\u54C1\u5355\u4F4D"},{default:a(()=>[t(C,{type:i(Q).CRM_PRODUCT_UNIT,value:r.product.unit},null,8,["type","value"])]),_:1}),t(s,{label:"\u4EA7\u54C1\u4EF7\u683C"},{default:a(()=>[n(o(i(F)(r.product.price))+"\u5143",1)]),_:1}),t(s,{label:"\u4EA7\u54C1\u7F16\u7801"},{default:a(()=>[n(o(r.product.no),1)]),_:1})]),_:1})]),_:1}),t(J,{ref_key:"formRef",ref:p,onSuccess:_[1]||(_[1]=u=>b("refresh"))},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/product/detail/ProductDetailsHeader.vue"]])});export{_t as __tla,v as default};