import{d as R,i as Y,r as o,e as $,o as h,v as V,w as s,f as u,a,h as f,x as j,l as g,dY as z,c as G,F as J,q as Q,t as W,P as X,A as Z,$ as ee,ah as ae,ai as le,D as te,C as se,I as ue,__tla as re}from"./index-d5b00dc9.js";import{_ as oe,__tla as de}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{a as ne,D as me,__tla as ce}from"./dict-29b94c3f.js";import{C as U}from"./constants-99751ef9.js";import{d as ie,h as _e}from"./tree-82bb3b99.js";import{a as pe,c as fe,u as ve,__tla as he}from"./index-20f50e99.js";import{g as ye,__tla as ke}from"./index-db1339ed.js";import{u as Ve,__tla as ge}from"./useMessage-2288a5f2.js";import{E as be,__tla as xe}from"./index-bd0d9e6c.js";import{_ as Ce}from"./_plugin-vue_export-helper-1b428a4d.js";let E,we=Promise.all([(()=>{try{return re}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return xe}catch{}})()]).then(async()=>{E=Ce(R({name:"SystemTenantPackageForm",__name:"TenantPackageForm",emits:["success"],setup(Ie,{expose:N,emit:S}){const{t:y}=Y(),b=Ve(),m=o(!1),x=o(""),c=o(!1),C=o(""),r=o({id:null,name:null,remark:null,menuIds:[],status:U.ENABLE}),q=$({name:[{required:!0,message:"\u5957\u9910\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],menuIds:[{required:!0,message:"\u5173\u8054\u7684\u83DC\u5355\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),v=o(),k=o([]),i=o(!1),n=o(),p=o(!1);N({open:async(t,e)=>{if(m.value=!0,x.value=y("action."+t),C.value=t,M(),k.value=_e(await ye()),e){c.value=!0;try{const d=await pe(e);r.value=d,d.menuIds.forEach(_=>{n.value.setChecked(_,!0,!1)})}finally{c.value=!1}}}});const A=S,F=async()=>{if(v&&await v.value.validate()){c.value=!0;try{const t=r.value;t.menuIds=[...n.value.getCheckedKeys(!1),...n.value.getHalfCheckedKeys()],C.value==="create"?(await fe(t),b.success(y("common.createSuccess"))):(await ve(t),b.success(y("common.updateSuccess"))),m.value=!1,A("success")}finally{c.value=!1}}},M=()=>{var t,e;p.value=!1,i.value=!1,r.value={id:null,name:null,remark:null,menuIds:[],status:U.ENABLE},(t=n.value)==null||t.setCheckedNodes([]),(e=v.value)==null||e.resetFields()},P=()=>{n.value.setCheckedNodes(p.value?k.value:[])},T=()=>{var e;const t=(e=n.value)==null?void 0:e.store.nodesMap;for(let d in t)t[d].expanded!==i.value&&(t[d].expanded=i.value)};return(t,e)=>{const d=X,_=Z,w=ee,B=be,D=ae,H=le,K=te,I=se,L=oe,O=ue;return h(),V(L,{modelValue:a(m),"onUpdate:modelValue":e[6]||(e[6]=l=>g(m)?m.value=l:null),title:a(x)},{footer:s(()=>[u(I,{disabled:a(c),type:"primary",onClick:F},{default:s(()=>[f("\u786E \u5B9A")]),_:1},8,["disabled"]),u(I,{onClick:e[5]||(e[5]=l=>m.value=!1)},{default:s(()=>[f("\u53D6 \u6D88")]),_:1})]),default:s(()=>[j((h(),V(K,{ref_key:"formRef",ref:v,model:a(r),rules:a(q),"label-width":"80px"},{default:s(()=>[u(_,{label:"\u5957\u9910\u540D",prop:"name"},{default:s(()=>[u(d,{modelValue:a(r).name,"onUpdate:modelValue":e[0]||(e[0]=l=>a(r).name=l),placeholder:"\u8BF7\u8F93\u5165\u5957\u9910\u540D"},null,8,["modelValue"])]),_:1}),u(_,{label:"\u83DC\u5355\u6743\u9650"},{default:s(()=>[u(B,{class:"cardHeight"},{header:s(()=>[f(" \u5168\u9009/\u5168\u4E0D\u9009: "),u(w,{modelValue:a(p),"onUpdate:modelValue":e[1]||(e[1]=l=>g(p)?p.value=l:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":"",onChange:P},null,8,["modelValue"]),f(" \u5168\u90E8\u5C55\u5F00/\u6298\u53E0: "),u(w,{modelValue:a(i),"onUpdate:modelValue":e[2]||(e[2]=l=>g(i)?i.value=l:null),"active-text":"\u5C55\u5F00","inactive-text":"\u6298\u53E0","inline-prompt":"",onChange:T},null,8,["modelValue"])]),default:s(()=>[u(a(z),{ref_key:"treeRef",ref:n,data:a(k),props:a(ie),"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019","node-key":"id","show-checkbox":""},null,8,["data","props"])]),_:1})]),_:1}),u(_,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[u(H,{modelValue:a(r).status,"onUpdate:modelValue":e[3]||(e[3]=l=>a(r).status=l)},{default:s(()=>[(h(!0),G(J,null,Q(a(ne)(a(me).COMMON_STATUS),l=>(h(),V(D,{key:l.value,label:l.value},{default:s(()=>[f(W(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(_,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[u(d,{modelValue:a(r).remark,"onUpdate:modelValue":e[4]||(e[4]=l=>a(r).remark=l),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[O,a(c)]])]),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-f377ba27"]])});export{we as __tla,E as default};
