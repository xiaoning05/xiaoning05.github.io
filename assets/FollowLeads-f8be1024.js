import{d as z,r as s,e as G,p as O,o as n,c as w,f as a,w as o,a as t,F as y,q as E,v as h,x as V,g as q,y as C,z as D,A as B,G as P,H as j,I as H,J,_ as M,__tla as X}from"./index-f0743f71.js";import{_ as Y,__tla as Z}from"./index-cf7b3541.js";import{_ as K,__tla as Q}from"./DictTag-4f08045a.js";import{_ as W,__tla as $}from"./ContentWrap-5acc4fb9.js";import{g as aa,__tla as ta}from"./index-2c81b15e.js";import{D as v,__tla as la}from"./dict-4a9940b3.js";import{d as c,__tla as ea}from"./formatTime-e6df2ea5.js";import{F as ra}from"./common-7bc9becf.js";import{__tla as oa}from"./index-8beae3df.js";import"./color-f5b6e279.js";import{__tla as pa}from"./index-a48a5540.js";let S,sa=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return pa}catch{}})()]).then(async()=>{let m;m=q("div",{class:"pb-5 text-xl"},"\u5206\u914D\u7ED9\u6211\u7684\u7EBF\u7D22",-1),S=M(z({__name:"FollowLeads",setup(na){const _=s(!0),f=s(0),d=s([]),r=G({pageNo:1,pageSize:10,followUpStatus:!1,transformStatus:!1}),N=s(),u=async()=>{_.value=!0;try{const i=await aa(r);d.value=i.list,f.value=i.total}finally{_.value=!1}},x=()=>{r.pageNo=1,u()};return O(()=>{u()}),(i,p)=>{const U=C,I=D,A=B,F=P,g=W,l=j,b=K,L=H,R=Y,T=J;return n(),w(y,null,[a(g,null,{default:o(()=>[m,a(F,{ref_key:"queryFormRef",ref:N,inline:!0,model:t(r),class:"-mb-15px","label-width":"68px"},{default:o(()=>[a(A,{label:"\u72B6\u6001",prop:"followUpStatus"},{default:o(()=>[a(I,{modelValue:t(r).followUpStatus,"onUpdate:modelValue":p[0]||(p[0]=e=>t(r).followUpStatus=e),class:"!w-240px",placeholder:"\u72B6\u6001",onChange:x},{default:o(()=>[(n(!0),w(y,null,E(t(ra),(e,k)=>(n(),h(U,{label:e.label,value:e.value,key:k},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1}),a(g,null,{default:o(()=>[V((n(),h(L,{data:t(d),stripe:!0,"show-overflow-tooltip":!0},{default:o(()=>[a(l,{label:"\u7F16\u53F7",align:"center",prop:"id"}),a(l,{label:"\u8F6C\u5316\u72B6\u6001",align:"center",prop:"transformStatus"},{default:o(e=>[a(b,{type:t(v).INFRA_BOOLEAN_STRING,value:e.row.transformStatus},null,8,["type","value"])]),_:1}),a(l,{label:"\u8DDF\u8FDB\u72B6\u6001",align:"center",prop:"followUpStatus"},{default:o(e=>[a(b,{type:t(v).INFRA_BOOLEAN_STRING,value:e.row.followUpStatus},null,8,["type","value"])]),_:1}),a(l,{label:"\u7EBF\u7D22\u540D\u79F0",align:"center",prop:"name"}),a(l,{label:"\u5BA2\u6237id",align:"center",prop:"customerId"}),a(l,{label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",align:"center",prop:"contactNextTime",formatter:t(c),width:"180px"},null,8,["formatter"]),a(l,{label:"\u7535\u8BDD",align:"center",prop:"telephone"}),a(l,{label:"\u624B\u673A\u53F7",align:"center",prop:"mobile"}),a(l,{label:"\u5730\u5740",align:"center",prop:"address"}),a(l,{label:"\u8D1F\u8D23\u4EBA",align:"center",prop:"ownerUserId"}),a(l,{label:"\u6700\u540E\u8DDF\u8FDB\u65F6\u95F4",align:"center",prop:"contactLastTime",formatter:t(c),width:"180px"},null,8,["formatter"]),a(l,{label:"\u5907\u6CE8",align:"center",prop:"remark"}),a(l,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",formatter:t(c),width:"180px"},null,8,["formatter"])]),_:1},8,["data"])),[[T,t(_)]]),a(R,{total:t(f),page:t(r).pageNo,"onUpdate:page":p[1]||(p[1]=e=>t(r).pageNo=e),limit:t(r).pageSize,"onUpdate:limit":p[2]||(p[2]=e=>t(r).pageSize=e),onPagination:u},null,8,["total","page","limit"])]),_:1})],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/backlog/tables/FollowLeads.vue"]])});export{sa as __tla,S as default};