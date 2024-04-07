import{d as j,r as _,n as F,u as X,aR as Y,G as Z,o as u,c as H,b as t,e as l,h as m,a as e,w as g,q as p,a0 as v,t as J,F as K,A as W,B as Q,ab as V,E as $,i as tt,v as at,_ as et,__tla as rt}from"./index-aaa5adb3.js";import{_ as st,__tla as ot}from"./ContentWrap-04d7f6d1.js";import{_ as lt,__tla as ct}from"./index-b47c179c.js";import{E as it,__tla as _t}from"./el-link-50478468.js";import{a as nt,b as ut,__tla as mt}from"./index-dbe340e2.js";import{c as pt,d as dt,__tla as ft}from"./index-a2708e2e.js";import yt,{__tla as bt}from"./BusinessForm-f4acbd82.js";import{B as S,__tla as ht}from"./index-1f097625.js";import{f as It,__tla as gt}from"./formatter-4b6b63b7.js";import vt,{__tla as wt}from"./BusinessListModal-6b0f55e7.js";import{u as kt,__tla as Ct}from"./useMessage-873da1e2.js";import{__tla as Nt}from"./index-5b7dcbf1.js";import{__tla as zt}from"./index-c602062a.js";import{__tla as Rt}from"./Dialog-9a73a39c.js";import{__tla as St}from"./DictTag-1c1088ae.js";import"./color-f5b6e279.js";import{__tla as xt}from"./dict-f2796e71.js";import{__tla as Bt}from"./index-899b453d.js";import{__tla as Tt}from"./index-2eccb211.js";let x,Et=Promise.all([(()=>{try{return rt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return Tt}catch{}})()]).then(async()=>{x=et(j({name:"CrmBusinessList",__name:"BusinessList",props:{bizType:{type:Number,required:!0},bizId:{type:Number,required:!0},customerId:{type:Number,required:!1}},setup(B){const d=kt(),o=B,f=_(!0),w=_(0),k=_([]),a=F({pageNo:1,pageSize:10,customerId:void 0,contactId:void 0}),y=async()=>{f.value=!0;try{a.customerId=void 0,a.contactId=void 0;let r={list:[],total:0};switch(o.bizType){case S.CRM_CUSTOMER:a.customerId=o.bizId,r=await ut(a);break;case S.CRM_CONTACT:a.contactId=o.bizId,r=await nt(a);break;default:return}k.value=r.list,w.value=r.total}finally{f.value=!1}},b=()=>{a.pageNo=1,y()},C=_(),T=()=>{C.value.open("create")},{push:E}=X(),N=_(),M=()=>{N.value.open()},q=async r=>{const s={contactId:o.bizId,businessIds:r};h.value.getSelectionRows().forEach(n=>{s.businessIds.push(n.id)}),await pt(s),d.success("\u5173\u8054\u5546\u673A\u6210\u529F"),b()},h=_(),L=async()=>{const r={contactId:o.bizId,businessIds:h.value.getSelectionRows().map(s=>s.id)};if(r.businessIds.length===0)return d.error("\u672A\u9009\u62E9\u5546\u673A");await dt(r),d.success("\u53D6\u5173\u5546\u673A\u6210\u529F"),b()};return Y(()=>[o.bizId,o.bizType],()=>{b()},{immediate:!0,deep:!0}),(r,s)=>{const n=W,I=Q,U=V,c=$,A=it,P=tt,D=lt,G=st,z=Z("hasPermi"),O=at;return u(),H(K,null,[t(U,{justify:"end"},{default:l(()=>[t(I,{onClick:T},{default:l(()=>[t(n,{class:"mr-5px",icon:"ep:opportunity"}),m(" \u521B\u5EFA\u5546\u673A ")]),_:1}),e(a).contactId?g((u(),p(I,{key:0,onClick:M},{default:l(()=>[t(n,{class:"mr-5px",icon:"ep:circle-plus"}),m("\u5173\u8054 ")]),_:1})),[[z,["crm:contact:create-business"]]]):v("",!0),e(a).contactId?g((u(),p(I,{key:1,onClick:L},{default:l(()=>[t(n,{class:"mr-5px",icon:"ep:remove"}),m("\u89E3\u9664\u5173\u8054 ")]),_:1})),[[z,["crm:contact:delete-business"]]]):v("",!0)]),_:1}),t(G,{class:"mt-10px"},{default:l(()=>[g((u(),p(P,{ref_key:"businessRef",ref:h,data:e(k),stripe:!0,"show-overflow-tooltip":!0},{default:l(()=>[e(a).contactId?(u(),p(c,{key:0,type:"selection",width:"55"})):v("",!0),t(c,{label:"\u5546\u673A\u540D\u79F0",fixed:"left",align:"center",prop:"name"},{default:l(i=>[t(A,{type:"primary",underline:!1,onClick:Mt=>{return R=i.row.id,void E({name:"CrmBusinessDetail",params:{id:R}});var R}},{default:l(()=>[m(J(i.row.name),1)]),_:2},1032,["onClick"])]),_:1}),t(c,{label:"\u5546\u673A\u91D1\u989D",align:"center",prop:"price",formatter:e(It)},null,8,["formatter"]),t(c,{label:"\u5BA2\u6237\u540D\u79F0",align:"center",prop:"customerName"}),t(c,{label:"\u5546\u673A\u7EC4",align:"center",prop:"statusTypeName"}),t(c,{label:"\u5546\u673A\u9636\u6BB5",align:"center",prop:"statusName"})]),_:1},8,["data"])),[[O,e(f)]]),t(D,{total:e(w),page:e(a).pageNo,"onUpdate:page":s[0]||(s[0]=i=>e(a).pageNo=i),limit:e(a).pageSize,"onUpdate:limit":s[1]||(s[1]=i=>e(a).pageSize=i),onPagination:y},null,8,["total","page","limit"])]),_:1}),t(yt,{ref_key:"formRef",ref:C,onSuccess:y},null,512),t(vt,{ref_key:"businessModalRef",ref:N,"customer-id":o.customerId,onSuccess:q},null,8,["customer-id"])],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/business/components/BusinessList.vue"]])});export{Et as __tla,x as default};
