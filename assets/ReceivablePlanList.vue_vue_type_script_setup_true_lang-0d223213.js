import{d as S,r as s,n as x,u as U,aQ as D,o as y,c as L,b as a,e as o,h as g,w as M,q as A,a as t,t as B,F as j,_ as q,A as F,aa as O,E as H,i as Q,v as V,__tla as Y}from"./index-34f06ebd.js";import{_ as G,__tla as J}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{_ as K,__tla as W}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";import{_ as X,__tla as Z}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import{E as $,__tla as aa}from"./el-link-6a9ddb0c.js";import{a as ta,__tla as ea}from"./index-93eaa981.js";import{_ as ra,__tla as la}from"./ReceivablePlanForm.vue_vue_type_script_setup_true_lang-a83abe7a.js";import{B as oa,__tla as _a}from"./index-ad2ad2c3.js";import{d as ia,__tla as na}from"./formatTime-ed0a77fd.js";import{f as sa,__tla as pa}from"./formatter-20c10600.js";import{D as ca,__tla as ma}from"./dict-e142e39a.js";let b,ua=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ma}catch{}})()]).then(async()=>{b=S({name:"CrmReceivablePlanList",__name:"ReceivablePlanList",props:{bizType:{},bizId:{}},setup(h){const _=h,p=s(!0),m=s(0),u=s([]),e=x({pageNo:1,pageSize:10,customerId:void 0}),c=async()=>{p.value=!0;try{e.customerId=void 0;let i={list:[],total:0};if(_.bizType!==oa.CRM_CUSTOMER)return;e.customerId=_.bizId,i=await ta(e),u.value=i.list,m.value=i.total}finally{p.value=!1}},d=s(),v=()=>{d.value.open("create")},{push:z}=U();return D(()=>[_.bizId,_.bizType],()=>{e.pageNo=1,c()},{immediate:!0,deep:!0}),(i,n)=>{const R=q,C=F,E=O,w=$,r=H,P=X,T=Q,I=K,N=G,k=V;return y(),L(j,null,[a(E,{justify:"end"},{default:o(()=>[a(C,{onClick:v},{default:o(()=>[a(R,{class:"mr-5px",icon:"icon-park:income"}),g(" \u521B\u5EFA\u56DE\u6B3E\u8BA1\u5212 ")]),_:1})]),_:1}),a(N,{class:"mt-10px"},{default:o(()=>[M((y(),A(T,{data:t(u),stripe:!0,"show-overflow-tooltip":!0},{default:o(()=>[a(r,{label:"\u671F\u6570",fixed:"left",align:"center",prop:"no"},{default:o(l=>[a(w,{type:"primary",underline:!1,onClick:da=>{return f=l.row.id,void z({name:"CrmReceivablePlanDetail",params:{id:f}});var f}},{default:o(()=>[g(B(l.row.period),1)]),_:2},1032,["onClick"])]),_:1}),a(r,{label:"\u5BA2\u6237\u540D\u79F0",align:"center",prop:"customerName"}),a(r,{label:"\u5408\u540C\u7F16\u53F7",align:"center",prop:"contractNo"}),a(r,{label:"\u8BA1\u5212\u8FD8\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",align:"center",prop:"price",formatter:t(sa)},null,8,["formatter"]),a(r,{label:"\u8BA1\u5212\u8FD8\u6B3E\u65E5\u671F",align:"center",prop:"returnTime",formatter:t(ia),width:"180px"},null,8,["formatter"]),a(r,{align:"center",label:"\u8BA1\u5212\u8FD8\u6B3E\u65B9\u5F0F",prop:"auditStatus"},{default:o(l=>[a(P,{type:t(ca).CRM_RECEIVABLE_RETURN_TYPE,value:l.row.returnType},null,8,["type","value"])]),_:1}),a(r,{label:"\u63D0\u524D\u51E0\u65E5\u63D0\u9192",align:"center",prop:"remindDays"}),a(r,{label:"\u5907\u6CE8",align:"center",prop:"remark"})]),_:1},8,["data"])),[[k,t(p)]]),a(I,{total:t(m),page:t(e).pageNo,"onUpdate:page":n[0]||(n[0]=l=>t(e).pageNo=l),limit:t(e).pageSize,"onUpdate:limit":n[1]||(n[1]=l=>t(e).pageSize=l),onPagination:c},null,8,["total","page","limit"])]),_:1}),a(ra,{ref_key:"formRef",ref:d,onSuccess:c},null,512)],64)}}})});export{b as _,ua as __tla};
