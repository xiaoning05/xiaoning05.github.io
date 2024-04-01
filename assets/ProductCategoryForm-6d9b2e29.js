import{d as N,k as B,r as u,n as O,o as m,q as y,e as r,b as o,a,h as g,w as T,c as j,F as G,g as R,t as X,j as Y,y as Z,L as z,af as H,ag as J,C as K,B as Q,v as W,_ as $,__tla as ee}from"./index-b079f499.js";import{_ as ae,__tla as le}from"./Dialog-07bcd661.js";import{E as te,__tla as re}from"./el-tree-select-6f7a72c0.js";import{a as oe,D as se,__tla as ue}from"./dict-2c56908b.js";import{P as n,__tla as de}from"./index-e8086f53.js";import{d as ce,h as ie}from"./tree-02f455f9.js";import{C as me}from"./constants-99751ef9.js";import{u as ne,__tla as pe}from"./useMessage-66b9cf03.js";let w,_e=Promise.all([(()=>{try{return ee}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return pe}catch{}})()]).then(async()=>{w=$(N({name:"ProductCategoryForm",__name:"ProductCategoryForm",emits:["success"],setup(ve,{expose:I,emit:P}){const{t:p}=B(),h=ne(),d=u(!1),V=u(""),c=u(!1),b=u(""),t=u({id:void 0,parentId:void 0,name:void 0,code:void 0,sort:void 0,status:void 0}),U=O({parentId:[{required:!0,message:"\u4E0A\u7EA7\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],code:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),_=u(),v=u();I({open:async(s,e)=>{if(d.value=!0,V.value=p("action."+s),b.value=s,F(),e){c.value=!0;try{t.value=await n.getProductCategory(e)}finally{c.value=!1}}await x()}});const k=P,q=async()=>{await _.value.validate(),c.value=!0;try{const s=t.value;b.value==="create"?(await n.createProductCategory(s),h.success(p("common.createSuccess"))):(await n.updateProductCategory(s),h.success(p("common.updateSuccess"))),d.value=!1,k("success")}finally{c.value=!1}},F=()=>{var s;t.value={id:void 0,parentId:void 0,name:void 0,code:void 0,sort:void 0,status:me.ENABLE},(s=_.value)==null||s.resetFields()},x=async()=>{v.value=[];const s=await n.getProductCategoryList(),e={id:0,name:"\u9876\u7EA7\u4EA7\u54C1\u5206\u7C7B",children:[]};e.children=ie(s,"id","parentId"),v.value.push(e)};return(s,e)=>{const E=te,i=Z,f=z,M=H,S=J,A=K,C=Q,D=ae,L=W;return m(),y(D,{title:a(V),modelValue:a(d),"onUpdate:modelValue":e[6]||(e[6]=l=>Y(d)?d.value=l:null)},{footer:r(()=>[o(C,{onClick:q,type:"primary",disabled:a(c)},{default:r(()=>[g("\u786E \u5B9A")]),_:1},8,["disabled"]),o(C,{onClick:e[5]||(e[5]=l=>d.value=!1)},{default:r(()=>[g("\u53D6 \u6D88")]),_:1})]),default:r(()=>[T((m(),y(A,{ref_key:"formRef",ref:_,model:a(t),rules:a(U),"label-width":"100px"},{default:r(()=>[o(i,{label:"\u4E0A\u7EA7\u7F16\u53F7",prop:"parentId"},{default:r(()=>[o(E,{modelValue:a(t).parentId,"onUpdate:modelValue":e[0]||(e[0]=l=>a(t).parentId=l),data:a(v),props:a(ce),"check-strictly":"","default-expand-all":"",placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u7F16\u53F7"},null,8,["modelValue","data","props"])]),_:1}),o(i,{label:"\u540D\u79F0",prop:"name"},{default:r(()=>[o(f,{modelValue:a(t).name,"onUpdate:modelValue":e[1]||(e[1]=l=>a(t).name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(i,{label:"\u7F16\u7801",prop:"code"},{default:r(()=>[o(f,{modelValue:a(t).code,"onUpdate:modelValue":e[2]||(e[2]=l=>a(t).code=l),placeholder:"\u8BF7\u8F93\u5165\u7F16\u7801"},null,8,["modelValue"])]),_:1}),o(i,{label:"\u6392\u5E8F",prop:"sort"},{default:r(()=>[o(f,{modelValue:a(t).sort,"onUpdate:modelValue":e[3]||(e[3]=l=>a(t).sort=l),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),o(i,{label:"\u72B6\u6001",prop:"status"},{default:r(()=>[o(S,{modelValue:a(t).status,"onUpdate:modelValue":e[4]||(e[4]=l=>a(t).status=l)},{default:r(()=>[(m(!0),j(G,null,R(a(oe)(a(se).COMMON_STATUS),l=>(m(),y(M,{key:l.value,label:l.value},{default:r(()=>[g(X(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[L,a(c)]])]),_:1},8,["title","modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/product/category/ProductCategoryForm.vue"]])});export{_e as __tla,w as default};
