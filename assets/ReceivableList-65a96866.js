import{d as k,r as n,n as D,u as A,aR as E,o as y,c as M,b as t,e as l,h as b,w as q,q as L,a,t as B,F as P,A as j,B as F,ab as G,E as X,i as O,v as Y,_ as Z,__tla as H}from"./index-aaa5adb3.js";import{_ as J,__tla as K}from"./ContentWrap-04d7f6d1.js";import{_ as Q,__tla as V}from"./index-b47c179c.js";import{_ as W,__tla as $}from"./DictTag-1c1088ae.js";import{E as tt,__tla as at}from"./el-link-50478468.js";import{a as rt,__tla as et}from"./index-54cd6515.js";import lt,{__tla as _t}from"./ReceivableForm-860155e9.js";import{B as ot,__tla as it}from"./index-1f097625.js";import{d as st,__tla as nt}from"./formatTime-9c0e8879.js";import{f as ct,__tla as pt}from"./formatter-4b6b63b7.js";import{D as mt,__tla as ut}from"./dict-f2796e71.js";import{__tla as ft}from"./index-5b7dcbf1.js";import{__tla as dt}from"./index-c602062a.js";import"./color-f5b6e279.js";import{__tla as yt}from"./Dialog-9a73a39c.js";import{__tla as bt}from"./index-c1a6a53a.js";import{__tla as ht}from"./useMessage-873da1e2.js";let h,vt=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return ht}catch{}})()]).then(async()=>{h=Z(k({name:"CrmReceivableList",__name:"ReceivableList",props:{bizType:{type:Number,required:!0},bizId:{type:Number,required:!0}},setup(v){const o=v,c=n(!0),m=n(0),u=n([]),r=D({pageNo:1,pageSize:10,customerId:void 0}),p=async()=>{c.value=!0;try{r.customerId=void 0;let i={list:[],total:0};if(o.bizType!==ot.CRM_CUSTOMER)return;r.customerId=o.bizId,i=await rt(r),u.value=i.list,m.value=i.total}finally{c.value=!1}},f=n(),g=()=>{f.value.open("create")},{push:w}=A();return E(()=>[o.bizId,o.bizType],()=>{r.pageNo=1,p()},{immediate:!0,deep:!0}),(i,s)=>{const N=j,z=F,C=G,I=tt,_=X,R=W,S=O,T=Q,x=J,U=Y;return y(),M(P,null,[t(C,{justify:"end"},{default:l(()=>[t(z,{onClick:g},{default:l(()=>[t(N,{class:"mr-5px",icon:"icon-park:income-one"}),b(" \u521B\u5EFA\u56DE\u6B3E ")]),_:1})]),_:1}),t(x,{class:"mt-10px"},{default:l(()=>[q((y(),L(S,{data:a(u),stripe:!0,"show-overflow-tooltip":!0},{default:l(()=>[t(_,{label:"\u56DE\u6B3E\u7F16\u53F7",fixed:"left",align:"center",prop:"no"},{default:l(e=>[t(I,{type:"primary",underline:!1,onClick:gt=>{return d=e.row.id,void w({name:"CrmReceivableDetail",params:{id:d}});var d}},{default:l(()=>[b(B(e.row.no),1)]),_:2},1032,["onClick"])]),_:1}),t(_,{label:"\u5408\u540C\u7F16\u53F7",align:"center",prop:"contractNo"}),t(_,{label:"\u56DE\u6B3E\u91D1\u989D\uFF08\u5143\uFF09",align:"center",prop:"price",formatter:a(ct)},null,8,["formatter"]),t(_,{label:"\u8D1F\u8D23\u4EBA",align:"center",prop:"ownerUserName"}),t(_,{align:"center",label:"\u72B6\u6001",prop:"auditStatus"},{default:l(e=>[t(R,{type:a(mt).CRM_AUDIT_STATUS,value:e.row.auditStatus},null,8,["type","value"])]),_:1}),t(_,{label:"\u56DE\u6B3E\u65E5\u671F",align:"center",prop:"returnTime",formatter:a(st),width:"180px"},null,8,["formatter"])]),_:1},8,["data"])),[[U,a(c)]]),t(T,{total:a(m),page:a(r).pageNo,"onUpdate:page":s[0]||(s[0]=e=>a(r).pageNo=e),limit:a(r).pageSize,"onUpdate:limit":s[1]||(s[1]=e=>a(r).pageSize=e),onPagination:p},null,8,["total","page","limit"])]),_:1}),t(lt,{ref_key:"formRef",ref:f,onSuccess:p},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/receivable/components/ReceivableList.vue"]])});export{vt as __tla,h as default};
