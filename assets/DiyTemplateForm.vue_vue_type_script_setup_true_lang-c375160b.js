import{d as T,k as A,r as i,n as B,o as w,q as V,e as s,b as o,a,h,w as j,j as I,K,y as R,B as z,A as E,v as G,__tla as H}from"./index-34f06ebd.js";import{_ as J,__tla as L}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{_ as M,__tla as N}from"./UploadImgs-1bb9a3a3.js";import{a as O,c as Q,b as W,__tla as X}from"./template-5e67e299.js";import{u as Y,__tla as Z}from"./useMessage-7a5ab7ef.js";let k,$=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{k=T({name:"DiyTemplateForm",__name:"DiyTemplateForm",emits:["success"],setup(ee,{expose:U,emit:b}){const{t:c}=A(),_=Y(),u=i(!1),p=i(""),m=i(!1),v=i(""),l=i({id:void 0,name:void 0,remark:void 0,previewPicUrls:[]}),P=B({name:[{required:!0,message:"\u6A21\u677F\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),d=i();U({open:async(t,e)=>{if(u.value=!0,p.value=c("action."+t),v.value=t,F(),e){m.value=!0;try{l.value=await O(e)}finally{m.value=!1}}}});const g=b,x=async()=>{if(d&&await d.value.validate()){m.value=!0;try{const t=l.value;v.value==="create"?(await Q(t),_.success(c("common.createSuccess"))):(await W(t),_.success(c("common.updateSuccess"))),u.value=!1,g("success")}finally{m.value=!1}}},F=()=>{var t;l.value={id:void 0,name:void 0,remark:void 0,previewPicUrls:[]},(t=d.value)==null||t.resetFields()};return(t,e)=>{const f=K,n=R,q=M,C=z,y=E,D=J,S=G;return w(),V(D,{modelValue:a(u),"onUpdate:modelValue":e[4]||(e[4]=r=>I(u)?u.value=r:null),title:a(p)},{footer:s(()=>[o(y,{disabled:a(m),type:"primary",onClick:x},{default:s(()=>[h("\u786E \u5B9A")]),_:1},8,["disabled"]),o(y,{onClick:e[3]||(e[3]=r=>u.value=!1)},{default:s(()=>[h("\u53D6 \u6D88")]),_:1})]),default:s(()=>[j((w(),V(C,{ref_key:"formRef",ref:d,model:a(l),rules:a(P),"label-width":"100px"},{default:s(()=>[o(n,{label:"\u6A21\u677F\u540D\u79F0",prop:"name"},{default:s(()=>[o(f,{modelValue:a(l).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(l).name=r),placeholder:"\u8BF7\u8F93\u5165\u6A21\u677F\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[o(f,{modelValue:a(l).remark,"onUpdate:modelValue":e[1]||(e[1]=r=>a(l).remark=r),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea"},null,8,["modelValue"])]),_:1}),o(n,{label:"\u9884\u89C8\u56FE",prop:"previewPicUrls"},{default:s(()=>[o(q,{modelValue:a(l).previewPicUrls,"onUpdate:modelValue":e[2]||(e[2]=r=>a(l).previewPicUrls=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[S,a(m)]])]),_:1},8,["modelValue","title"])}}})});export{k as _,$ as __tla};
