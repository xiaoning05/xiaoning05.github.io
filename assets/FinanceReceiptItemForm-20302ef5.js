import{d as S,r as n,e as D,aT as O,o as b,c as j,x as G,a as _,v as I,w as t,f as e,d$ as y,h as P,a5 as M,F as B,e0 as H,H as J,Q,A as X,c0 as Y,D as Z,I as K,G as W,k as ee,J as te,_ as ae,__tla as re}from"./index-f0743f71.js";import le,{__tla as ie}from"./SaleOutReceiptEnableList-ff872adc.js";import oe,{__tla as ce}from"./SaleReturnRefundEnableList-54ff4419.js";import{E as U}from"./constants-99751ef9.js";import{u as de,__tla as se}from"./useMessage-75a00a06.js";import{__tla as ue}from"./Dialog-8f786edd.js";import{__tla as me}from"./index-cf7b3541.js";import{__tla as ne}from"./index-8beae3df.js";import{__tla as _e}from"./ContentWrap-5acc4fb9.js";import{__tla as pe}from"./index-a48a5540.js";import{__tla as fe}from"./formatTime-e6df2ea5.js";import{__tla as he}from"./index-45617213.js";import{__tla as be}from"./index-55da9403.js";import{__tla as ye}from"./index-f0ee48c6.js";let k,Pe=Promise.all([(()=>{try{return re}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ye}catch{}})()]).then(async()=>{k=ae(S({__name:"FinanceReceiptItemForm",props:{items:{type:null,required:!0},customerId:{type:null,required:!0},disabled:{type:Boolean,required:!0}},setup(g,{expose:E}){const p=g,V=de(),R=n(!1),s=n([]),z=D({receiptPrice:[{required:!0,message:"\u672C\u6B21\u6536\u6B3E\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),w=n([]);n([]),O(()=>p.items,async l=>{s.value=l},{immediate:!0});const N=l=>{const{columns:a,data:o}=l,c=[];return a.forEach((d,u)=>{if(u!==0)if(["totalPrice","receiptedPrice","receiptPrice"].includes(d.property)){const f=H(o.map(h=>Number(h[d.property])));c[u]=y(f)}else c[u]="";else c[u]="\u5408\u8BA1"}),c},x=n(),$=()=>{p.customerId?x.value.open(p.customerId):V.error("\u8BF7\u9009\u62E9\u5BA2\u6237")},C=l=>{l.forEach(a=>{s.value.push({bizId:a.id,bizType:U.SALE_OUT,bizNo:a.no,totalPrice:a.totalPrice,receiptedPrice:a.receiptPrice,receiptPrice:a.totalPrice-a.receiptPrice})})},v=n(),F=()=>{p.customerId?v.value.open(p.customerId):V.error("\u8BF7\u9009\u62E9\u5BA2\u6237")},T=l=>{l.forEach(a=>{s.value.push({bizId:a.id,bizType:U.SALE_RETURN,bizNo:a.no,totalPrice:-a.totalPrice,receiptedPrice:-a.refundPrice,receiptPrice:-a.totalPrice+a.refundPrice})})};return E({validate:()=>w.value.validate()}),(l,a)=>{const o=J,c=Q,d=X,u=Y,f=Z,h=K,q=W,A=ee,L=te;return b(),j(B,null,[G((b(),I(q,{ref_key:"formRef",ref:w,model:_(s),rules:_(z),"label-width":"0px","inline-message":!0,disabled:l.disabled},{default:t(()=>[e(h,{data:_(s),"show-summary":"","summary-method":N,class:"-mt-10px"},{default:t(()=>[e(o,{label:"\u5E8F\u53F7",type:"index",align:"center",width:"60"}),e(o,{label:"\u9500\u552E\u5355\u636E\u7F16\u53F7","min-width":"200"},{default:t(({row:r})=>[e(d,{class:"mb-0px!"},{default:t(()=>[e(c,{disabled:"",modelValue:r.bizNo,"onUpdate:modelValue":i=>r.bizNo=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1}),e(o,{label:"\u5E94\u4ED8\u91D1\u989D",prop:"totalPrice",fixed:"right","min-width":"100"},{default:t(({row:r})=>[e(d,{class:"mb-0px!"},{default:t(()=>[e(c,{disabled:"",modelValue:r.totalPrice,"onUpdate:modelValue":i=>r.totalPrice=i,formatter:_(y)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(o,{label:"\u5DF2\u4ED8\u91D1\u989D",prop:"receiptedPrice",fixed:"right","min-width":"100"},{default:t(({row:r})=>[e(d,{class:"mb-0px!"},{default:t(()=>[e(c,{disabled:"",modelValue:r.receiptedPrice,"onUpdate:modelValue":i=>r.receiptedPrice=i,formatter:_(y)},null,8,["modelValue","onUpdate:modelValue","formatter"])]),_:2},1024)]),_:1}),e(o,{label:"\u672C\u6B21\u6536\u6B3E",prop:"receiptPrice",fixed:"right","min-width":"115"},{default:t(({row:r,$index:i})=>[e(d,{prop:`${i}.receiptPrice`,class:"mb-0px!"},{default:t(()=>[e(u,{modelValue:r.receiptPrice,"onUpdate:modelValue":m=>r.receiptPrice=m,"controls-position":"right",precision:2,class:"!w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(o,{label:"\u5907\u6CE8","min-width":"150"},{default:t(({row:r,$index:i})=>[e(d,{prop:`${i}.remark`,class:"mb-0px!"},{default:t(()=>[e(c,{modelValue:r.remark,"onUpdate:modelValue":m=>r.remark=m,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:1}),e(o,{align:"center",fixed:"right",label:"\u64CD\u4F5C",width:"60"},{default:t(({$index:r})=>[e(f,{onClick:i=>{return m=r,void s.value.splice(m,1);var m},link:""},{default:t(()=>[P("\u2014")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["model","rules","disabled"])),[[L,_(R)]]),l.disabled?M("",!0):(b(),I(A,{key:0,justify:"center",class:"mt-3"},{default:t(()=>[e(f,{onClick:$,round:""},{default:t(()=>[P("+ \u6DFB\u52A0\u9500\u552E\u51FA\u5E93\u5355")]),_:1}),e(f,{onClick:F,round:""},{default:t(()=>[P("+ \u6DFB\u52A0\u9500\u552E\u9000\u8D27\u5355")]),_:1})]),_:1})),e(le,{ref_key:"saleOutReceiptEnableListRef",ref:x,onSuccess:C},null,512),e(oe,{ref_key:"saleReturnRefundEnableListRef",ref:v,onSuccess:T},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/finance/receipt/components/FinanceReceiptItemForm.vue"]])});export{Pe as __tla,k as default};
