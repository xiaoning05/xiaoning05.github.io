import{d as A,r as n,n as M,p as D,o as s,c as y,b as a,e as o,a as e,F as h,g as V,q as v,w as z,f as P,s as q,x as F,y as O,C as Y,E as j,i as B,v as G,_ as L,__tla as X}from"./index-b079f499.js";import{_ as Z,__tla as H}from"./index-749396de.js";import{_ as J,__tla as K}from"./DictTag-6d4c3489.js";import{_ as Q,__tla as W}from"./ContentWrap-0fab5b86.js";import{D as m,__tla as $}from"./dict-2c56908b.js";import{b as aa,d as ea,__tla as ta}from"./formatTime-0805635f.js";import{g as la,__tla as ra}from"./index-c48d4a3d.js";import{A as oa}from"./common-7bc9becf.js";import{__tla as pa}from"./index-c1a7e444.js";import"./color-f5b6e279.js";import{__tla as na}from"./index-3be78f60.js";let w,sa=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return na}catch{}})()]).then(async()=>{let d;d=P("div",{class:"pb-5 text-xl"}," \u5F85\u5BA1\u6838\u56DE\u6B3E ",-1),w=L(A({__name:"CheckReceivables",setup(_a){const _=n(!0),f=n(0),g=n([]),r=M({pageNo:1,pageSize:10,auditStatus:20}),S=n(),u=async()=>{_.value=!0;try{const i=await la(r);g.value=i.list,f.value=i.total}finally{_.value=!1}},x=()=>{r.pageNo=1,u()};return D(()=>{u()}),(i,p)=>{const T=q,U=F,C=O,I=Y,b=Q,l=j,c=J,k=B,E=Z,R=G;return s(),y(h,null,[a(b,null,{default:o(()=>[d,a(I,{class:"-mb-15px",model:e(r),ref_key:"queryFormRef",ref:S,inline:!0,"label-width":"68px"},{default:o(()=>[a(C,{label:"\u5408\u540C\u72B6\u6001",prop:"auditStatus"},{default:o(()=>[a(U,{modelValue:e(r).auditStatus,"onUpdate:modelValue":p[0]||(p[0]=t=>e(r).auditStatus=t),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:x},{default:o(()=>[(s(!0),y(h,null,V(e(oa),(t,N)=>(s(),v(T,{label:t.label,value:t.value,key:N},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),a(b,null,{default:o(()=>[z((s(),v(k,{data:e(g),stripe:!0,"show-overflow-tooltip":!0},{default:o(()=>[a(l,{label:"ID",align:"center",prop:"id"}),a(l,{label:"\u56DE\u6B3E\u7F16\u53F7",align:"center",prop:"no"}),a(l,{label:"\u5BA2\u6237",align:"center",prop:"customerId"}),a(l,{label:"\u5408\u540C",align:"center",prop:"contractId"}),a(l,{label:"\u5BA1\u6279\u72B6\u6001",align:"center",prop:"checkStatus",width:"130px"},{default:o(t=>[a(c,{type:e(m).CRM_AUDIT_STATUS,value:t.row.checkStatus},null,8,["type","value"])]),_:1}),a(l,{label:"\u56DE\u6B3E\u65E5\u671F",align:"center",prop:"returnTime",formatter:e(aa),width:"150px"},null,8,["formatter"]),a(l,{label:"\u56DE\u6B3E\u65B9\u5F0F",align:"center",prop:"returnType",width:"130px"},{default:o(t=>[a(c,{type:e(m).CRM_RECEIVABLE_RETURN_TYPE,value:t.row.returnType},null,8,["type","value"])]),_:1}),a(l,{label:"\u56DE\u6B3E\u91D1\u989D(\u5143)",align:"center",prop:"price"}),a(l,{label:"\u8D1F\u8D23\u4EBA",align:"center",prop:"ownerUserId"}),a(l,{label:"\u6279\u6B21",align:"center",prop:"batchId"}),a(l,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:o(t=>[a(c,{type:e(m).COMMON_STATUS,value:t.row.status},null,8,["type","value"])]),_:1}),a(l,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),a(l,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:e(ea),width:"180px"},null,8,["formatter"])]),_:1},8,["data"])),[[R,e(_)]]),a(E,{total:e(f),page:e(r).pageNo,"onUpdate:page":p[1]||(p[1]=t=>e(r).pageNo=t),limit:e(r).pageSize,"onUpdate:limit":p[2]||(p[2]=t=>e(r).pageSize=t),onPagination:u},null,8,["total","page","limit"])]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/backlog/tables/CheckReceivables.vue"]])});export{sa as __tla,w as default};