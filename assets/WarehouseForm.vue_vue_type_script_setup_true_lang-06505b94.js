import{d as K,k as M,r as c,n as N,o as p,q as f,e as s,b as o,a as e,h as V,w as O,c as T,F as j,g as D,t as G,j as L,K as R,y as z,ae as H,af as I,bU as J,B as Q,A as X,v as Y,__tla as Z}from"./index-34f06ebd.js";import{_ as $,__tla as ee}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{a as ae,D as le,__tla as re}from"./dict-e142e39a.js";import{W as h,__tla as oe}from"./index-384def1a.js";import{C as se}from"./constants-99751ef9.js";import{u as te,__tla as ue}from"./useMessage-7a5ab7ef.js";let w,de=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ue}catch{}})()]).then(async()=>{w=K({name:"WarehouseForm",__name:"WarehouseForm",emits:["success"],setup(ie,{expose:P,emit:U}){const{t:n}=M(),b=te(),d=c(!1),y=c(""),i=c(!1),g=c(""),r=c({id:void 0,name:void 0,address:void 0,sort:void 0,remark:void 0,principal:void 0,warehousePrice:void 0,truckagePrice:void 0,status:void 0}),W=N({name:[{required:!0,message:"\u4ED3\u5E93\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u5F00\u542F\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),_=c();P({open:async(t,a)=>{if(d.value=!0,y.value=n("action."+t),g.value=t,C(),a){i.value=!0;try{r.value=await h.getWarehouse(a)}finally{i.value=!1}}}});const q=U,x=async()=>{await _.value.validate(),i.value=!0;try{const t=r.value;g.value==="create"?(await h.createWarehouse(t),b.success(n("common.createSuccess"))):(await h.updateWarehouse(t),b.success(n("common.updateSuccess"))),d.value=!1,q("success")}finally{i.value=!1}},C=()=>{var t;r.value={id:void 0,name:void 0,address:void 0,sort:void 0,remark:void 0,principal:void 0,warehousePrice:void 0,truckagePrice:void 0,status:se.ENABLE},(t=_.value)==null||t.resetFields()};return(t,a)=>{const m=R,u=z,S=H,A=I,v=J,F=Q,k=X,B=$,E=Y;return p(),f(B,{title:e(y),modelValue:e(d),"onUpdate:modelValue":a[9]||(a[9]=l=>L(d)?d.value=l:null)},{footer:s(()=>[o(k,{onClick:x,type:"primary",disabled:e(i)},{default:s(()=>[V("\u786E \u5B9A")]),_:1},8,["disabled"]),o(k,{onClick:a[8]||(a[8]=l=>d.value=!1)},{default:s(()=>[V("\u53D6 \u6D88")]),_:1})]),default:s(()=>[O((p(),f(F,{ref_key:"formRef",ref:_,model:e(r),rules:e(W),"label-width":"100px"},{default:s(()=>[o(u,{label:"\u4ED3\u5E93\u540D\u79F0",prop:"name"},{default:s(()=>[o(m,{modelValue:e(r).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(r).name=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u4ED3\u5E93\u5730\u5740",prop:"address"},{default:s(()=>[o(m,{modelValue:e(r).address,"onUpdate:modelValue":a[1]||(a[1]=l=>e(r).address=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u5730\u5740"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u4ED3\u5E93\u72B6\u6001",prop:"status"},{default:s(()=>[o(A,{modelValue:e(r).status,"onUpdate:modelValue":a[2]||(a[2]=l=>e(r).status=l)},{default:s(()=>[(p(!0),T(j,null,D(e(ae)(e(le).COMMON_STATUS),l=>(p(),f(S,{key:l.value,label:l.value},{default:s(()=>[V(G(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u4ED3\u50A8\u8D39",prop:"warehousePrice"},{default:s(()=>[o(v,{modelValue:e(r).warehousePrice,"onUpdate:modelValue":a[3]||(a[3]=l=>e(r).warehousePrice=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u50A8\u8D39\uFF0C\u5355\u4F4D\uFF1A\u5143/\u5929/KG",min:0,precision:2,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u642C\u8FD0\u8D39",prop:"truckagePrice"},{default:s(()=>[o(v,{modelValue:e(r).truckagePrice,"onUpdate:modelValue":a[4]||(a[4]=l=>e(r).truckagePrice=l),placeholder:"\u8BF7\u8F93\u5165\u642C\u8FD0\u8D39\uFF0C\u5355\u4F4D\uFF1A\u5143",min:0,precision:2,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u8D1F\u8D23\u4EBA",prop:"principal"},{default:s(()=>[o(m,{modelValue:e(r).principal,"onUpdate:modelValue":a[5]||(a[5]=l=>e(r).principal=l),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u6392\u5E8F",prop:"sort"},{default:s(()=>[o(v,{modelValue:e(r).sort,"onUpdate:modelValue":a[6]||(a[6]=l=>e(r).sort=l),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",precision:0,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[o(m,{type:"textarea",modelValue:e(r).remark,"onUpdate:modelValue":a[7]||(a[7]=l=>e(r).remark=l),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[E,e(i)]])]),_:1},8,["title","modelValue"])}}})});export{w as _,de as __tla};