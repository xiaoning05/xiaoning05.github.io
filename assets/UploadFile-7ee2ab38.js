import{d as b,aW as g,r as v,n as U,o as q,q as w,e as s,f as x,aI as E,b as F,h as S,a as t,B as M,bh as j,_ as A,__tla as B}from"./index-b079f499.js";import{b as C,a as D,U as G,H,__tla as N}from"./upload-c95cfb3f.js";import{u as P,__tla as W}from"./useMessage-66b9cf03.js";import{U as i,__tla as X}from"./useUpload-b6c32b9d.js";let _,Y=Promise.all([(()=>{try{return B}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let l;l={class:"el-upload__tip",style:{"margin-left":"5px"}},_=A(b({__name:"UploadFile",props:{type:{type:String,required:!0}},emits:["uploaded"],setup(n,{emit:p}){const e=P(),d=n,c=g("accountId"),o=v([]),u=p,r=U({type:i.Image,title:"",introduction:"",accountId:c}),m=d.type===i.Image?C:D,f=a=>{if(a.code!==0)return e.alertError("\u4E0A\u4F20\u51FA\u9519\uFF1A"+a.msg),!1;o.value=[],r.title="",r.introduction="",e.notifySuccess("\u4E0A\u4F20\u6210\u529F"),u("uploaded")},y=a=>e.error("\u4E0A\u4F20\u5931\u8D25: "+a.message);return(a,Z)=>{const h=M,I=j;return q(),w(I,{action:t(G),headers:t(H),multiple:"",limit:1,"file-list":t(o),data:t(r),"on-error":y,"before-upload":t(m),"on-success":f},{tip:s(()=>[x("span",l,[E(a.$slots,"default",{},void 0,!0)])]),default:s(()=>[F(h,{type:"primary",plain:""},{default:s(()=>[S(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:3},8,["action","headers","file-list","data","before-upload"])}}}),[["__scopeId","data-v-9db5701b"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mp/material/components/UploadFile.vue"]])});export{Y as __tla,_ as default};