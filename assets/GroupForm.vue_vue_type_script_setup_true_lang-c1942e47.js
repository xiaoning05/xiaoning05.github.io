import{d as L,i as M,r as d,e as O,o as _,v as p,w as s,f as u,a,h as f,x as P,c as T,F as B,q as G,t as I,l as R,P as j,A as J,ah as z,ai as H,D as K,C as Q,I as W,__tla as X}from"./index-d5b00dc9.js";import{_ as Y,__tla as Z}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{a as $,D as aa,__tla as ea}from"./dict-29b94c3f.js";import{a as la,c as ta,u as sa,__tla as ra}from"./index-06d0080a.js";import{C as k}from"./constants-99751ef9.js";import{u as ua,__tla as oa}from"./useMessage-2288a5f2.js";let w,ma=Promise.all([(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return ea}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})()]).then(async()=>{w=L({__name:"GroupForm",emits:["success"],setup(da,{expose:g,emit:C}){const{t:c}=M(),v=ua(),o=d(!1),y=d(""),m=d(!1),h=d(""),t=d({id:void 0,name:void 0,remark:void 0,status:k.ENABLE}),U=O({name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=d();g({open:async(r,e)=>{if(o.value=!0,y.value=c("action."+r),h.value=r,E(),e){m.value=!0;try{t.value=await la(e)}finally{m.value=!1}}}});const x=C,A=async()=>{if(i&&await i.value.validate()){m.value=!0;try{const r=t.value;h.value==="create"?(await ta(r),v.success(c("common.createSuccess"))):(await sa(r),v.success(c("common.updateSuccess"))),o.value=!1,x("success")}finally{m.value=!1}}},E=()=>{var r;t.value={id:void 0,name:void 0,remark:void 0,status:k.ENABLE},(r=i.value)==null||r.resetFields()};return(r,e)=>{const V=j,n=J,S=z,q=H,F=K,b=Q,N=Y,D=W;return _(),p(N,{title:a(y),modelValue:a(o),"onUpdate:modelValue":e[4]||(e[4]=l=>R(o)?o.value=l:null),width:"600"},{footer:s(()=>[u(b,{onClick:A,type:"primary",disabled:a(m)},{default:s(()=>[f("\u786E \u5B9A")]),_:1},8,["disabled"]),u(b,{onClick:e[3]||(e[3]=l=>o.value=!1)},{default:s(()=>[f("\u53D6 \u6D88")]),_:1})]),default:s(()=>[P((_(),p(F,{ref_key:"formRef",ref:i,model:a(t),rules:a(U),"label-width":"100px"},{default:s(()=>[u(n,{label:"\u540D\u79F0",prop:"name"},{default:s(()=>[u(V,{modelValue:a(t).name,"onUpdate:modelValue":e[0]||(e[0]=l=>a(t).name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),u(n,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[u(q,{modelValue:a(t).status,"onUpdate:modelValue":e[1]||(e[1]=l=>a(t).status=l)},{default:s(()=>[(_(!0),T(B,null,G(a($)(a(aa).COMMON_STATUS),l=>(_(),p(S,{key:l.value,label:l.value},{default:s(()=>[f(I(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(n,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[u(V,{modelValue:a(t).remark,"onUpdate:modelValue":e[2]||(e[2]=l=>a(t).remark=l),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[D,a(m)]])]),_:1},8,["title","modelValue"])}}})});export{w as _,ma as __tla};
