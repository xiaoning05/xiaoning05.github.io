import{d as w,L as b,x as l,o as t,c as r,F as f,q as I,f as e,a as g,w as s,v as _,a5 as D,C as q,D as x,k as A,J as P,_ as T,__tla as j}from"./index-f0743f71.js";import B,{__tla as E}from"./main-32ebaa00.js";import{__tla as F}from"./el-image-015376ce.js";import{__tla as G}from"./el-image-viewer-d97aa530.js";let y,J=Promise.all([(()=>{try{return j}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{let d,p;d={class:"waterfall"},p={key:0,class:"waterfall-item"},y=T(w({__name:"DraftTable",props:{list:{type:Array,required:!0},loading:{type:Boolean,required:!0}},emits:["publish","update","delete"],setup(k,{emit:h}){const u=k,c=h;return(L,M)=>{const i=q,n=x,C=A,o=b("hasPermi"),v=P;return l((t(),r("div",d,[(t(!0),r(f,null,I(u.list,a=>(t(),r(f,{key:a.articleId},[a.content&&a.content.newsItem?(t(),r("div",p,[e(g(B),{articles:a.content.newsItem},null,8,["articles"]),e(C,null,{default:s(()=>[l((t(),_(n,{type:"success",circle:"",onClick:m=>c("publish",a)},{default:s(()=>[e(i,{icon:"fa:upload"})]),_:2},1032,["onClick"])),[[o,["mp:free-publish:submit"]]]),l((t(),_(n,{type:"primary",circle:"",onClick:m=>c("update",a)},{default:s(()=>[e(i,{icon:"ep:edit"})]),_:2},1032,["onClick"])),[[o,["mp:draft:update"]]]),l((t(),_(n,{type:"danger",circle:"",onClick:m=>c("delete",a)},{default:s(()=>[e(i,{icon:"ep:delete"})]),_:2},1032,["onClick"])),[[o,["mp:draft:delete"]]])]),_:2},1024)])):D("",!0)],64))),128))])),[[v,u.loading]])}}}),[["__scopeId","data-v-eaf984a1"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/draft/components/DraftTable.vue"]])});export{J as __tla,y as default};