import{d as M,k as R,r as y,n as T,G as B,o as n,c as D,b as a,e as l,a as e,w as i,q as p,h as g,F as X,y as Y,A as Z,B as j,C as J,E as K,i as W,v as H,_ as L,__tla as O}from"./index-b079f499.js";import{_ as Q,__tla as V}from"./index-749396de.js";import{_ as $,__tla as aa}from"./ContentWrap-0fab5b86.js";import{_ as ta,__tla as ea}from"./index-1e0a496d.js";import{d as la,__tla as ra}from"./formatTime-0805635f.js";import{a as ca,d as _a,s as na,__tla as sa}from"./index-3132a7e0.js";import oa,{__tla as ia}from"./TagForm-948af78b.js";import pa,{__tla as ua}from"./main-cf40de9c.js";import{u as ma,__tla as da}from"./useMessage-66b9cf03.js";import{__tla as fa}from"./index-c1a7e444.js";import{__tla as ya}from"./index-3be78f60.js";import{__tla as ga}from"./Dialog-07bcd661.js";import{__tla as ha}from"./index-8bf5f476.js";let S,wa=Promise.all([(()=>{try{return O}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return ha}catch{}})()]).then(async()=>{S=L(M({name:"MpTag",__name:"index",setup(ba){const u=ma(),{t:N}=R(),h=y(!0),w=y(0),b=y([]),t=T({pageNo:1,pageSize:10,accountId:-1}),k=y(null),z=c=>{t.accountId=c,t.pageNo=1,s()},s=async()=>{try{h.value=!0;const c=await ca(t);b.value=c.list,w.value=c.total}finally{h.value=!1}},C=(c,r)=>{var m;(m=k.value)==null||m.open(c,t.accountId,r)},F=async()=>{try{await u.confirm("\u662F\u5426\u786E\u8BA4\u540C\u6B65\u6807\u7B7E\uFF1F"),await na(t.accountId),u.success("\u540C\u6B65\u6807\u7B7E\u6210\u529F"),await s()}catch{}};return(c,r)=>{const m=ta,v=Y,I=Z,d=j,P=J,x=$,o=K,U=W,q=Q,f=B("hasPermi"),A=H;return n(),D(X,null,[a(m,{title:"\u516C\u4F17\u53F7\u6807\u7B7E",url:"https://doc.iocoder.cn/mp/tag/"}),a(x,null,{default:l(()=>[a(P,{class:"-mb-15px",model:e(t),ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:l(()=>[a(v,{label:"\u516C\u4F17\u53F7",prop:"accountId"},{default:l(()=>[a(e(pa),{onChange:z})]),_:1}),a(v,null,{default:l(()=>[i((n(),p(d,{type:"primary",plain:"",onClick:r[0]||(r[0]=_=>C("create")),disabled:e(t).accountId===0},{default:l(()=>[a(I,{icon:"ep:plus",class:"mr-5px"}),g(" \u65B0\u589E ")]),_:1},8,["disabled"])),[[f,["mp:tag:create"]]]),i((n(),p(d,{type:"success",plain:"",onClick:F,disabled:e(t).accountId===0},{default:l(()=>[a(I,{icon:"ep:refresh",class:"mr-5px"}),g(" \u540C\u6B65 ")]),_:1},8,["disabled"])),[[f,["mp:tag:sync"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(x,null,{default:l(()=>[i((n(),p(U,{data:e(b)},{default:l(()=>[a(o,{label:"\u7F16\u53F7",align:"center",prop:"id"}),a(o,{label:"\u6807\u7B7E\u540D\u79F0",align:"center",prop:"name"}),a(o,{label:"\u7C89\u4E1D\u6570",align:"center",prop:"count"}),a(o,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:e(la)},null,8,["formatter"]),a(o,{label:"\u64CD\u4F5C",align:"center"},{default:l(_=>[i((n(),p(d,{link:"",type:"primary",onClick:E=>C("update",_.row.id)},{default:l(()=>[g(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[f,["mp:tag:update"]]]),i((n(),p(d,{link:"",type:"danger",onClick:E=>(async G=>{try{await u.delConfirm(),await _a(G),u.success(N("common.delSuccess")),await s()}catch{}})(_.row.id)},{default:l(()=>[g(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["mp:tag:delete"]]])]),_:1})]),_:1},8,["data"])),[[A,e(h)]]),a(q,{total:e(w),page:e(t).pageNo,"onUpdate:page":r[1]||(r[1]=_=>e(t).pageNo=_),limit:e(t).pageSize,"onUpdate:limit":r[2]||(r[2]=_=>e(t).pageSize=_),onPagination:s},null,8,["total","page","limit"])]),_:1}),a(oa,{ref_key:"formRef",ref:k,onSuccess:s},null,512)],64)}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/tag/index.vue"]])});export{wa as __tla,S as default};