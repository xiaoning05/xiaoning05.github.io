import{d as T,i as $,r as o,e as q,o as C,v as V,w as l,f as t,a as u,h as i,x as z,t as b,l as y,ak as B,A as G,$ as P,dT as J,D as L,C as O,I as Q,__tla as W}from"./index-d2088aec.js";import{_ as X,__tla as Y}from"./Dialog.vue_vue_type_style_index_0_lang-4d2024bd.js";import{d as Z,h as ee}from"./tree-82bb3b99.js";import{g as ae,__tla as le}from"./index-49f80adb.js";import{g as te,a as se,__tla as ue}from"./index-1725378f.js";import{u as de,__tla as oe}from"./useMessage-c5990e2c.js";import{E as re,__tla as ne}from"./index-82efac34.js";import{_ as me}from"./_plugin-vue_export-helper-1b428a4d.js";let g,ce=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ne}catch{}})()]).then(async()=>{g=me(T({name:"SystemRoleAssignMenuForm",__name:"RoleAssignMenuForm",emits:["success"],setup(ie,{expose:I,emit:w}){const{t:R}=$(),M=de(),r=o(!1),n=o(!1),s=q({id:0,name:"",code:"",menuIds:[]}),v=o(),p=o([]),m=o(!1),d=o(),_=o(!1);I({open:async a=>{r.value=!0,U(),p.value=ee(await ae()),s.id=a.id,s.name=a.name,s.code=a.code,n.value=!0;try{s.value.menuIds=await te(a.id),s.value.menuIds.forEach(e=>{d.value.setChecked(e,!0,!1)})}finally{n.value=!1}}});const A=w,F=async()=>{if(v&&await v.value.validate()){n.value=!0;try{const a={roleId:s.id,menuIds:[...d.value.getCheckedKeys(!1),...d.value.getHalfCheckedKeys()]};await se(a),M.success(R("common.updateSuccess")),r.value=!1,A("success")}finally{n.value=!1}}},U=()=>{var a,e;_.value=!1,m.value=!1,s.value={id:0,name:"",code:"",menuIds:[]},(a=d.value)==null||a.setCheckedNodes([]),(e=v.value)==null||e.resetFields()},E=()=>{d.value.setCheckedNodes(_.value?p.value:[])},H=()=>{var e;const a=(e=d.value)==null?void 0:e.store.nodesMap;for(let f in a)a[f].expanded!==m.value&&(a[f].expanded=m.value)};return(a,e)=>{const f=B,h=G,k=P,K=J,N=re,S=L,x=O,j=X,D=Q;return C(),V(j,{modelValue:u(r),"onUpdate:modelValue":e[3]||(e[3]=c=>y(r)?r.value=c:null),title:"\u83DC\u5355\u6743\u9650"},{footer:l(()=>[t(x,{disabled:u(n),type:"primary",onClick:F},{default:l(()=>[i("\u786E \u5B9A")]),_:1},8,["disabled"]),t(x,{onClick:e[2]||(e[2]=c=>r.value=!1)},{default:l(()=>[i("\u53D6 \u6D88")]),_:1})]),default:l(()=>[z((C(),V(S,{ref_key:"formRef",ref:v,model:u(s),"label-width":"80px"},{default:l(()=>[t(h,{label:"\u89D2\u8272\u540D\u79F0"},{default:l(()=>[t(f,null,{default:l(()=>[i(b(u(s).name),1)]),_:1})]),_:1}),t(h,{label:"\u89D2\u8272\u6807\u8BC6"},{default:l(()=>[t(f,null,{default:l(()=>[i(b(u(s).code),1)]),_:1})]),_:1}),t(h,{label:"\u83DC\u5355\u6743\u9650"},{default:l(()=>[t(N,{class:"cardHeight"},{header:l(()=>[i(" \u5168\u9009/\u5168\u4E0D\u9009: "),t(k,{modelValue:u(_),"onUpdate:modelValue":e[0]||(e[0]=c=>y(_)?_.value=c:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":"",onChange:E},null,8,["modelValue"]),i(" \u5168\u90E8\u5C55\u5F00/\u6298\u53E0: "),t(k,{modelValue:u(m),"onUpdate:modelValue":e[1]||(e[1]=c=>y(m)?m.value=c:null),"active-text":"\u5C55\u5F00","inactive-text":"\u6298\u53E0","inline-prompt":"",onChange:H},null,8,["modelValue"])]),default:l(()=>[t(K,{ref_key:"treeRef",ref:d,data:u(p),props:u(Z),"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019","node-key":"id","show-checkbox":""},null,8,["data","props"])]),_:1})]),_:1})]),_:1},8,["model"])),[[D,u(n)]])]),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-16ab792e"]])});export{ce as __tla,g as default};
