import{d as z,ck as B,X as C,r as y,n as M,o as h,c as S,b as a,e as r,a as l,q as T,$ as H,h as V,j as K,K as O,aa as P,_ as W,A as X,cr as $,a8 as D,bg as E,__tla as F}from"./index-34f06ebd.js";import{_ as G,__tla as J}from"./main.vue_vue_type_script_setup_true_lang-665168bf.js";import{W as L,__tla as N}from"./main-3214e281.js";import{u as Q,U as R,__tla as Y}from"./useUpload-a4a1e914.js";import{u as Z,__tla as tt}from"./useMessage-7a5ab7ef.js";import{_ as at}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as et}from"./index.vue_vue_type_script_setup_true_lang-68fe248c.js";import{__tla as lt}from"./index-f8693880.js";import{__tla as rt}from"./main-b9378f4a.js";import{__tla as ot}from"./el-image-a5cf0b35.js";import{__tla as ut}from"./el-image-viewer-331eba6f.js";import{__tla as _t}from"./main-1d08921a.js";import{__tla as it}from"./index-4c9ae20a.js";import{__tla as st}from"./index-de12e72e.js";import{__tla as ct}from"./formatTime-ed0a77fd.js";let v,nt=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return ct}catch{}})()]).then(async()=>{v=at(z({__name:"TabVideo",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:g}){const I=Z(),k={Authorization:"Bearer "+B()},U=b,w=g,e=C({get:()=>U.modelValue,set:t=>w("update:modelValue",t)}),_=y(!1),n=y([]),i=M({accountId:e.value.accountId,type:"video",title:"",introduction:""}),j=t=>Q(R.Video,10)(t),x=t=>{if(t.code!==0)return I.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+t.msg),!1;n.value=[],i.title="",i.introduction="",d(t.data)},d=t=>{_.value=!1,e.value.mediaId=t.mediaId,e.value.url=t.url,e.value.name=t.name,t.title&&(e.value.title=t.title||""),t.introduction&&(e.value.description=t.introduction||"")};return(t,o)=>{const m=O,s=P,p=W,f=X,A=$,c=D,q=E;return h(),S("div",null,[a(s,null,{default:r(()=>[a(m,{modelValue:l(e).title,"onUpdate:modelValue":o[0]||(o[0]=u=>l(e).title=u),class:"input-margin-bottom",placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"]),a(m,{class:"input-margin-bottom",modelValue:l(e).description,"onUpdate:modelValue":o[1]||(o[1]=u=>l(e).description=u),placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0"},null,8,["modelValue"]),a(s,{class:"ope-row",justify:"center"},{default:r(()=>[l(e).url?(h(),T(l(G),{key:0,url:l(e).url},null,8,["url"])):H("",!0)]),_:1}),a(c,null,{default:r(()=>[a(s,{style:{"text-align":"center"},align:"middle"},{default:r(()=>[a(c,{span:12},{default:r(()=>[a(f,{type:"success",onClick:o[2]||(o[2]=u=>_.value=!0)},{default:r(()=>[V(" \u7D20\u6750\u5E93\u9009\u62E9 "),a(p,{icon:"ep:circle-check"})]),_:1}),a(A,{title:"\u9009\u62E9\u89C6\u9891",modelValue:l(_),"onUpdate:modelValue":o[3]||(o[3]=u=>K(_)?_.value=u:null),width:"90%","append-to-body":"","destroy-on-close":""},{default:r(()=>[a(l(L),{type:"video","account-id":l(e).accountId,onSelectMaterial:d},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),a(c,{span:12},{default:r(()=>[a(q,{action:"/admin-api/mp/material/upload-temporary",headers:k,multiple:"",limit:1,"file-list":l(n),data:l(i),"before-upload":j,"on-success":x},{default:r(()=>[a(f,{type:"primary"},{default:r(()=>[V("\u65B0\u5EFA\u89C6\u9891 "),a(p,{icon:"ep:upload"})]),_:1})]),_:1},8,["file-list","data"])]),_:1})]),_:1})]),_:1})]),_:1})])}}}),[["__scopeId","data-v-10385e99"]])});export{nt as __tla,v as default};
