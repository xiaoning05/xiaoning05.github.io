import{d as E,i as G,r as c,e as N,o as p,v as f,w as s,f as o,a as e,h,x as I,c as O,F as T,q as j,t as J,l as R,Q as B,A as K,ai as L,aj as Q,c0 as X,G as Y,D as Z,J as z,_ as H,__tla as $}from"./index-f0743f71.js";import{_ as ee,__tla as ae}from"./Dialog-8f786edd.js";import{a as le,D as re,__tla as oe}from"./dict-4a9940b3.js";import{W as V,__tla as se}from"./index-c5ebd655.js";import{C as te}from"./constants-99751ef9.js";import{u as ue,__tla as de}from"./useMessage-75a00a06.js";let k,ie=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return de}catch{}})()]).then(async()=>{k=H(E({name:"WarehouseForm",__name:"WarehouseForm",emits:["success"],setup(ce,{expose:U,emit:P}){const{t:n}=G(),b=ue(),d=c(!1),w=c(""),i=c(!1),y=c(""),r=c({id:void 0,name:void 0,address:void 0,sort:void 0,remark:void 0,principal:void 0,warehousePrice:void 0,truckagePrice:void 0,status:void 0}),W=N({name:[{required:!0,message:"\u4ED3\u5E93\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u5F00\u542F\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),_=c();U({open:async(t,a)=>{if(d.value=!0,w.value=n("action."+t),y.value=t,q(),a){i.value=!0;try{r.value=await V.getWarehouse(a)}finally{i.value=!1}}}});const C=P,F=async()=>{await _.value.validate(),i.value=!0;try{const t=r.value;y.value==="create"?(await V.createWarehouse(t),b.success(n("common.createSuccess"))):(await V.updateWarehouse(t),b.success(n("common.updateSuccess"))),d.value=!1,C("success")}finally{i.value=!1}},q=()=>{var t;r.value={id:void 0,name:void 0,address:void 0,sort:void 0,remark:void 0,principal:void 0,warehousePrice:void 0,truckagePrice:void 0,status:te.ENABLE},(t=_.value)==null||t.resetFields()};return(t,a)=>{const m=B,u=K,x=L,A=Q,v=X,M=Y,g=Z,S=ee,D=z;return p(),f(S,{title:e(w),modelValue:e(d),"onUpdate:modelValue":a[9]||(a[9]=l=>R(d)?d.value=l:null)},{footer:s(()=>[o(g,{onClick:F,type:"primary",disabled:e(i)},{default:s(()=>[h("\u786E \u5B9A")]),_:1},8,["disabled"]),o(g,{onClick:a[8]||(a[8]=l=>d.value=!1)},{default:s(()=>[h("\u53D6 \u6D88")]),_:1})]),default:s(()=>[I((p(),f(M,{ref_key:"formRef",ref:_,model:e(r),rules:e(W),"label-width":"100px"},{default:s(()=>[o(u,{label:"\u4ED3\u5E93\u540D\u79F0",prop:"name"},{default:s(()=>[o(m,{modelValue:e(r).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(r).name=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u4ED3\u5E93\u5730\u5740",prop:"address"},{default:s(()=>[o(m,{modelValue:e(r).address,"onUpdate:modelValue":a[1]||(a[1]=l=>e(r).address=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u5730\u5740"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u4ED3\u5E93\u72B6\u6001",prop:"status"},{default:s(()=>[o(A,{modelValue:e(r).status,"onUpdate:modelValue":a[2]||(a[2]=l=>e(r).status=l)},{default:s(()=>[(p(!0),O(T,null,j(e(le)(e(re).COMMON_STATUS),l=>(p(),f(x,{key:l.value,label:l.value},{default:s(()=>[h(J(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"\u4ED3\u50A8\u8D39",prop:"warehousePrice"},{default:s(()=>[o(v,{modelValue:e(r).warehousePrice,"onUpdate:modelValue":a[3]||(a[3]=l=>e(r).warehousePrice=l),placeholder:"\u8BF7\u8F93\u5165\u4ED3\u50A8\u8D39\uFF0C\u5355\u4F4D\uFF1A\u5143/\u5929/KG",min:0,precision:2,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u642C\u8FD0\u8D39",prop:"truckagePrice"},{default:s(()=>[o(v,{modelValue:e(r).truckagePrice,"onUpdate:modelValue":a[4]||(a[4]=l=>e(r).truckagePrice=l),placeholder:"\u8BF7\u8F93\u5165\u642C\u8FD0\u8D39\uFF0C\u5355\u4F4D\uFF1A\u5143",min:0,precision:2,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u8D1F\u8D23\u4EBA",prop:"principal"},{default:s(()=>[o(m,{modelValue:e(r).principal,"onUpdate:modelValue":a[5]||(a[5]=l=>e(r).principal=l),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u6392\u5E8F",prop:"sort"},{default:s(()=>[o(v,{modelValue:e(r).sort,"onUpdate:modelValue":a[6]||(a[6]=l=>e(r).sort=l),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",precision:0,class:"!w-1/1"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[o(m,{type:"textarea",modelValue:e(r).remark,"onUpdate:modelValue":a[7]||(a[7]=l=>e(r).remark=l),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[D,e(i)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/stock/warehouse/WarehouseForm.vue"]])});export{ie as __tla,k as default};
