import{d as b,aV as I,r as v,n as U,o as x,q as H,e as r,f as q,aH as A,b as E,h as F,a as t,A as S,bg as j,__tla as P}from"./index-34f06ebd.js";import{b as V,a as $,U as k,H as w,__tla as z}from"./upload-74299b0e.js";import{u as B,__tla as C}from"./useMessage-7a5ab7ef.js";import{U as i,__tla as D}from"./useUpload-a4a1e914.js";import{_ as G}from"./_plugin-vue_export-helper-1b428a4d.js";let _,J=Promise.all([(()=>{try{return P}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return D}catch{}})()]).then(async()=>{let l;l={class:"el-upload__tip",style:{"margin-left":"5px"}},_=G(b({__name:"UploadFile",props:{type:{}},emits:["uploaded"],setup(c,{emit:n}){const e=B(),p=c,u=I("accountId"),o=v([]),d=n,s=U({type:i.Image,title:"",introduction:"",accountId:u}),m=p.type===i.Image?V:$,f=a=>{if(a.code!==0)return e.alertError("\u4E0A\u4F20\u51FA\u9519\uFF1A"+a.msg),!1;o.value=[],s.title="",s.introduction="",e.notifySuccess("\u4E0A\u4F20\u6210\u529F"),d("uploaded")},y=a=>e.error("\u4E0A\u4F20\u5931\u8D25: "+a.message);return(a,K)=>{const h=S,g=j;return x(),H(g,{action:t(k),headers:t(w),multiple:"",limit:1,"file-list":t(o),data:t(s),"on-error":y,"before-upload":t(m),"on-success":f},{tip:r(()=>[q("span",l,[A(a.$slots,"default",{},void 0,!0)])]),default:r(()=>[E(h,{type:"primary",plain:""},{default:r(()=>[F(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:3},8,["action","headers","file-list","data","before-upload"])}}}),[["__scopeId","data-v-c21a7348"]])});export{J as __tla,_ as default};