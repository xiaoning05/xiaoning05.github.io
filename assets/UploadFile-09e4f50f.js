import{d as I,aY as b,r as v,e as U,o as w,v as x,w as r,g as D,aK as E,f as F,h as j,a as t,D as A,bm as M,_ as S,__tla as Y}from"./index-f0743f71.js";import{b as q,a as C,U as G,H,__tla as K}from"./upload-fd64910a.js";import{u as N,__tla as P}from"./useMessage-75a00a06.js";import{U as i,__tla as X}from"./useUpload-8303eb6e.js";let _,Z=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let l;l={class:"el-upload__tip",style:{"margin-left":"5px"}},_=S(I({__name:"UploadFile",props:{type:{type:String,required:!0}},emits:["uploaded"],setup(n,{emit:p}){const e=N(),d=n,c=b("accountId"),o=v([]),u=p,s=U({type:i.Image,title:"",introduction:"",accountId:c}),m=d.type===i.Image?q:C,f=a=>{if(a.code!==0)return e.alertError("\u4E0A\u4F20\u51FA\u9519\uFF1A"+a.msg),!1;o.value=[],s.title="",s.introduction="",e.notifySuccess("\u4E0A\u4F20\u6210\u529F"),u("uploaded")},y=a=>e.error("\u4E0A\u4F20\u5931\u8D25: "+a.message);return(a,$)=>{const h=A,g=M;return w(),x(g,{action:t(G),headers:t(H),multiple:"",limit:1,"file-list":t(o),data:t(s),"on-error":y,"before-upload":t(m),"on-success":f},{tip:r(()=>[D("span",l,[E(a.$slots,"default",{},void 0,!0)])]),default:r(()=>[F(h,{type:"primary",plain:""},{default:r(()=>[j(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:3},8,["action","headers","file-list","data","before-upload"])}}}),[["__scopeId","data-v-9db5701b"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/material/components/UploadFile.vue"]])});export{Z as __tla,_ as default};
