import{d as k,L as w,x as c,o as a,c as t,F as C,q as b,g as l,t as q,f as m,w as o,v as x,C as j,D as A,k as D,J as P,_ as T,__tla as B}from"./index-f0743f71.js";let _,E=Promise.all([(()=>{try{return B}catch{}})()]).then(async()=>{let s,r,i,n;s={class:"waterfall"},r=["href"],i=["src"],n={class:"item-name"},_=T(k({__name:"ImageTable",props:{list:{type:Array,required:!0},loading:{type:Boolean,required:!0}},emits:["delete"],setup(u,{emit:p}){const d=u,f=p;return(F,G)=>{const g=j,y=A,v=D,I=w("hasPermi"),h=P;return c((a(),t("div",s,[(a(!0),t(C,null,b(d.list,e=>(a(),t("div",{class:"waterfall-item",key:e.id},[l("a",{target:"_blank",href:e.url},[l("img",{class:"material-img",src:e.url},null,8,i),l("div",n,q(e.name),1)],8,r),m(v,{justify:"center"},{default:o(()=>[c((a(),x(y,{type:"danger",circle:"",onClick:J=>f("delete",e.id)},{default:o(()=>[m(g,{icon:"ep:delete"})]),_:2},1032,["onClick"])),[[I,["mp:material:delete"]]])]),_:2},1024)]))),128))])),[[h,d.loading]])}}}),[["__scopeId","data-v-909ef7d4"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/material/components/ImageTable.vue"]])});export{E as __tla,_ as default};