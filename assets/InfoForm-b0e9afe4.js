import{d as j,ah as z,r as u,e as b,aT as N,p as A,o as n,v as h,w as o,a,G,f as r,c as C,q as M,F as O,dH as q,Q as E,A as H,c1 as Q,y as S,z as T,_ as X,__tla as Y}from"./index-f0743f71.js";import{_ as Z,__tla as B}from"./UploadImgs-e8dcbd85.js";import{_ as J,__tla as K}from"./UploadImg-aab03145.js";import{h as L,d as W}from"./tree-02f455f9.js";import{g as $,__tla as aa}from"./category-7944548c.js";import{g as ea,__tla as la}from"./brand-6cbc0976.js";import{u as ta,__tla as ra}from"./useMessage-75a00a06.js";import{r as i,__tla as oa}from"./formRules-5c05c0bb.js";import{__tla as da}from"./UploadImgs.vue_vue_type_style_index_0_scoped_9d666400_lang-24fc736b.js";import{__tla as sa}from"./el-image-viewer-d97aa530.js";import{__tla as ia}from"./useUpload-27a6f734.js";import{__tla as ma}from"./index-21698e53.js";import{__tla as _a}from"./index-4baae72c.js";let w,ca=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return _a}catch{}})()]).then(async()=>{w=X(j({name:"ProductSpuInfoForm",__name:"InfoForm",props:{propFormData:{type:Object,default:()=>{}},isDetail:z.bool.def(!1)},emits:["update:activeName"],setup(m,{expose:V,emit:U}){const p=m,I=ta(),_=u(),e=b({name:"",categoryId:void 0,keyword:"",picUrl:"",sliderPicUrls:[],introduction:"",brandId:void 0}),v=b({name:[i],categoryId:[i],keyword:[i],introduction:[i],picUrl:[i],sliderPicUrls:[i],brandId:[i]});N(()=>p.propFormData,d=>{d&&q(e,d)},{immediate:!0});const g=U;V({validate:async()=>{var d;if(_)try{await((d=a(_))==null?void 0:d.validate()),Object.assign(p.propFormData,e)}catch(t){throw I.error("\u3010\u57FA\u7840\u8BBE\u7F6E\u3011\u4E0D\u5B8C\u5584\uFF0C\u8BF7\u586B\u5199\u76F8\u5173\u4FE1\u606F"),g("update:activeName","info"),t}}});const f=u([]),y=u([]);return A(async()=>{const d=await $({});y.value=L(d,"id"),f.value=await ea()}),(d,t)=>{const c=E,s=H,x=Q,D=S,P=T,k=J,F=Z,R=G;return n(),h(R,{ref_key:"formRef",ref:_,disabled:m.isDetail,model:a(e),rules:a(v),"label-width":"120px"},{default:o(()=>[r(s,{label:"\u5546\u54C1\u540D\u79F0",prop:"name"},{default:o(()=>[r(c,{modelValue:a(e).name,"onUpdate:modelValue":t[0]||(t[0]=l=>a(e).name=l),autosize:{minRows:2,maxRows:2},clearable:!0,"show-word-limit":!0,class:"w-80!",maxlength:"64",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",type:"textarea"},null,8,["modelValue"])]),_:1}),r(s,{label:"\u5546\u54C1\u5206\u7C7B",prop:"categoryId"},{default:o(()=>[r(x,{modelValue:a(e).categoryId,"onUpdate:modelValue":t[1]||(t[1]=l=>a(e).categoryId=l),options:a(y),props:a(W),class:"w-80",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u5206\u7C7B"},null,8,["modelValue","options","props"])]),_:1}),r(s,{label:"\u5546\u54C1\u54C1\u724C",prop:"brandId"},{default:o(()=>[r(P,{modelValue:a(e).brandId,"onUpdate:modelValue":t[2]||(t[2]=l=>a(e).brandId=l),class:"w-80",placeholder:"\u8BF7\u9009\u62E9\u5546\u54C1\u54C1\u724C"},{default:o(()=>[(n(!0),C(O,null,M(a(f),l=>(n(),h(D,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{label:"\u5546\u54C1\u5173\u952E\u5B57",prop:"keyword"},{default:o(()=>[r(c,{modelValue:a(e).keyword,"onUpdate:modelValue":t[3]||(t[3]=l=>a(e).keyword=l),class:"w-80!",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u5173\u952E\u5B57"},null,8,["modelValue"])]),_:1}),r(s,{label:"\u5546\u54C1\u7B80\u4ECB",prop:"introduction"},{default:o(()=>[r(c,{modelValue:a(e).introduction,"onUpdate:modelValue":t[4]||(t[4]=l=>a(e).introduction=l),autosize:{minRows:2,maxRows:2},clearable:!0,"show-word-limit":!0,class:"w-80!",maxlength:"128",placeholder:"\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0",type:"textarea"},null,8,["modelValue"])]),_:1}),r(s,{label:"\u5546\u54C1\u5C01\u9762\u56FE",prop:"picUrl"},{default:o(()=>[r(k,{modelValue:a(e).picUrl,"onUpdate:modelValue":t[5]||(t[5]=l=>a(e).picUrl=l),disabled:m.isDetail,height:"80px"},null,8,["modelValue","disabled"])]),_:1}),r(s,{label:"\u5546\u54C1\u8F6E\u64AD\u56FE",prop:"sliderPicUrls"},{default:o(()=>[r(F,{modelValue:a(e).sliderPicUrls,"onUpdate:modelValue":t[6]||(t[6]=l=>a(e).sliderPicUrls=l),disabled:m.isDetail},null,8,["modelValue","disabled"])]),_:1})]),_:1},8,["disabled","model","rules"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/mall/product/spu/form/InfoForm.vue"]])});export{ca as __tla,w as default};
