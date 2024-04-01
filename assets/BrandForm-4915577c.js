import{d as D,k as I,r as i,n as O,o as c,q as p,e as r,b as s,a,h as f,w as P,c as T,F as X,g as j,t as G,j as R,L as Y,y as W,bX as Z,af as z,ag as H,C as J,B as K,v as Q,_ as $,__tla as aa}from"./index-b079f499.js";import{_ as ea,__tla as la}from"./Dialog-07bcd661.js";import{_ as ta,__tla as ra}from"./UploadImg-0fb33d7e.js";import{a as sa,D as oa,__tla as ua}from"./dict-2c56908b.js";import{C as U}from"./constants-99751ef9.js";import{a as _a,c as ia,u as ma,__tla as da}from"./brand-748bcd81.js";import{u as ca,__tla as na}from"./useMessage-66b9cf03.js";import{__tla as pa}from"./index-1bcef585.js";import{__tla as fa}from"./el-image-viewer-3e8b0085.js";import{__tla as va}from"./useUpload-ca092158.js";import{__tla as ya}from"./index-4c44a910.js";let g,Va=Promise.all([(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return ya}catch{}})()]).then(async()=>{g=$(D({name:"ProductBrandForm",__name:"BrandForm",emits:["success"],setup(ba,{expose:w,emit:B}){const{t:n}=I(),v=ca(),u=i(!1),y=i(""),_=i(!1),V=i(""),t=i({id:void 0,name:"",picUrl:"",status:U.ENABLE,description:""}),C=O({name:[{required:!0,message:"\u54C1\u724C\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],picUrl:[{required:!0,message:"\u54C1\u724C\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u54C1\u724C\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),d=i();w({open:async(o,e)=>{if(u.value=!0,y.value=n("action."+o),V.value=o,k(),e){_.value=!0;try{t.value=await _a(e)}finally{_.value=!1}}}});const E=B,F=async()=>{if(d&&await d.value.validate()){_.value=!0;try{const o=t.value;V.value==="create"?(await ia(o),v.success(n("common.createSuccess"))):(await ma(o),v.success(n("common.updateSuccess"))),u.value=!1,E("success")}finally{_.value=!1}}},k=()=>{var o;t.value={id:void 0,name:"",picUrl:"",status:U.ENABLE,description:""},(o=d.value)==null||o.resetFields()};return(o,e)=>{const b=Y,m=W,q=ta,x=Z,A=z,N=H,S=J,h=K,M=ea,L=Q;return c(),p(M,{title:a(y),modelValue:a(u),"onUpdate:modelValue":e[6]||(e[6]=l=>R(u)?u.value=l:null)},{footer:r(()=>[s(h,{onClick:F,type:"primary",disabled:a(_)},{default:r(()=>[f("\u786E \u5B9A")]),_:1},8,["disabled"]),s(h,{onClick:e[5]||(e[5]=l=>u.value=!1)},{default:r(()=>[f("\u53D6 \u6D88")]),_:1})]),default:r(()=>[P((c(),p(S,{ref_key:"formRef",ref:d,model:a(t),rules:a(C),"label-width":"80px"},{default:r(()=>[s(m,{label:"\u54C1\u724C\u540D\u79F0",prop:"name"},{default:r(()=>[s(b,{modelValue:a(t).name,"onUpdate:modelValue":e[0]||(e[0]=l=>a(t).name=l),placeholder:"\u8BF7\u8F93\u5165\u54C1\u724C\u540D\u79F0"},null,8,["modelValue"])]),_:1}),s(m,{label:"\u54C1\u724C\u56FE\u7247",prop:"picUrl"},{default:r(()=>[s(q,{modelValue:a(t).picUrl,"onUpdate:modelValue":e[1]||(e[1]=l=>a(t).picUrl=l),limit:1,"is-show-tip":!1},null,8,["modelValue"])]),_:1}),s(m,{label:"\u54C1\u724C\u6392\u5E8F",prop:"sort"},{default:r(()=>[s(x,{modelValue:a(t).sort,"onUpdate:modelValue":e[2]||(e[2]=l=>a(t).sort=l),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1}),s(m,{label:"\u54C1\u724C\u72B6\u6001",prop:"status"},{default:r(()=>[s(N,{modelValue:a(t).status,"onUpdate:modelValue":e[3]||(e[3]=l=>a(t).status=l)},{default:r(()=>[(c(!0),T(X,null,j(a(sa)(a(oa).COMMON_STATUS),l=>(c(),p(A,{key:l.value,label:l.value},{default:r(()=>[f(G(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(m,{label:"\u54C1\u724C\u63CF\u8FF0"},{default:r(()=>[s(b,{modelValue:a(t).description,"onUpdate:modelValue":e[4]||(e[4]=l=>a(t).description=l),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u54C1\u724C\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[L,a(_)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/product/brand/BrandForm.vue"]])});export{Va as __tla,g as default};
