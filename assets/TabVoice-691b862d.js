import{d as z,cm as D,Y as E,r as b,n as G,o as n,c as V,a as r,f as w,t as N,b as a,e as l,q as X,h as k,j as H,ab as O,A as P,B as Q,ct as R,a9 as S,bh as W,Q as Z,R as F,_ as J,__tla as K}from"./index-b079f499.js";import{W as L,__tla as $}from"./main-fd37f957.js";import aa,{__tla as ta}from"./main-0becf7e3.js";import{u as ea,U as la,__tla as ra}from"./useUpload-b6c32b9d.js";import{u as sa,__tla as _a}from"./useMessage-66b9cf03.js";import{__tla as oa}from"./index-749396de.js";import{__tla as ca}from"./index-c1a7e444.js";import{__tla as ua}from"./main-8f863b62.js";import{__tla as ia}from"./el-image-8a70494f.js";import{__tla as na}from"./el-image-viewer-3e8b0085.js";import{__tla as ma}from"./main-ab85a8da.js";import{__tla as da}from"./index-2fb65578.js";import{__tla as pa}from"./index-256935a4.js";import{__tla as fa}from"./formatTime-0805635f.js";let g,ya=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return fa}catch{}})()]).then(async()=>{let m,d,p;m={key:0,class:"select-item2"},d={class:"item-name"},p=(s=>(Z("data-v-17bdaa79"),s=s(),F(),s))(()=>w("div",{class:"el-upload__tip"}," \u683C\u5F0F\u652F\u6301 mp3/wma/wav/amr\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 2M\uFF0C\u64AD\u653E\u957F\u5EA6\u4E0D\u8D85\u8FC7 60s ",-1)),g=J(z({__name:"TabVoice",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(s,{emit:j}){const x=sa(),A={Authorization:"Bearer "+D()},C=s,M=j,e=E({get:()=>C.modelValue,set:t=>M("update:modelValue",t)}),_=b(!1),f=b([]),c=G({accountId:e.value.accountId,type:"voice",title:"",introduction:""}),U=t=>ea(la.Voice,10)(t),Y=t=>{if(t.code!==0)return x.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+t.msg),!1;f.value=[],c.title="",c.introduction="",y(t.data)},q=()=>{e.value.mediaId=null,e.value.url=null,e.value.name=null},y=t=>{_.value=!1,e.value.mediaId=t.mediaId,e.value.url=t.url,e.value.name=t.name};return(t,o)=>{const u=O,v=P,i=Q,B=R,h=S,T=W;return n(),V("div",null,[r(e).url?(n(),V("div",m,[w("p",d,N(r(e).name),1),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(r(aa),{url:r(e).url},null,8,["url"])]),_:1}),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(i,{type:"danger",circle:"",onClick:q},{default:l(()=>[a(v,{icon:"ep:delete"})]),_:1})]),_:1})])):(n(),X(u,{key:1,style:{"text-align":"center"}},{default:l(()=>[a(h,{span:12,class:"col-select"},{default:l(()=>[a(i,{type:"success",onClick:o[0]||(o[0]=I=>_.value=!0)},{default:l(()=>[k(" \u7D20\u6750\u5E93\u9009\u62E9"),a(v,{icon:"ep:circle-check"})]),_:1}),a(B,{title:"\u9009\u62E9\u8BED\u97F3",modelValue:r(_),"onUpdate:modelValue":o[1]||(o[1]=I=>H(_)?_.value=I:null),width:"90%","append-to-body":"","destroy-on-close":""},{default:l(()=>[a(r(L),{type:"voice","account-id":r(e).accountId,onSelectMaterial:y},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),a(h,{span:12,class:"col-add"},{default:l(()=>[a(T,{action:"/dev-api/admin-api/mp/material/upload-temporary",headers:A,multiple:"",limit:1,"file-list":r(f),data:r(c),"before-upload":U,"on-success":Y},{tip:l(()=>[p]),default:l(()=>[a(i,{type:"primary"},{default:l(()=>[k("\u70B9\u51FB\u4E0A\u4F20")]),_:1})]),_:1},8,["file-list","data"])]),_:1})]),_:1}))])}}}),[["__scopeId","data-v-17bdaa79"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/components/wx-reply/components/TabVoice.vue"]])});export{ya as __tla,g as default};
