import{_ as L,__tla as Y}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{d as H,i as J,r as n,e as O,o,v as u,w as r,f as d,a,h as q,c as _,F as y,q as I,a4 as v,l as Q,P as W,A as X,y as Z,z as $,D as ee,C as ae,__tla as le}from"./index-d5b00dc9.js";import{E as te,__tla as se}from"./el-tree-select-8e562b9e.js";import{a as G,D as S,__tla as re}from"./dict-29b94c3f.js";import{d as de,h as oe}from"./tree-82bb3b99.js";import{b as ue,__tla as pe}from"./index-529489f0.js";import{g as ne,__tla as me}from"./index-3812663c.js";import{g as ie,__tla as ce}from"./index-18bbc7a0.js";import{g as _e,__tla as ye}from"./index-0e14a87b.js";import{g as Ie,__tla as ve}from"./index-d569b7ba.js";import{g as fe,__tla as be}from"./index-1b2da19a.js";import{u as Ve,__tla as ge}from"./useMessage-2288a5f2.js";let x,he=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ge}catch{}})()]).then(async()=>{x=H({__name:"TaskCCDialogForm",emits:["success"],setup(ke,{expose:C,emit:A}){const{t:P}=J(),T=Ve(),m=n(!1),V=n(!1),l=n({type:NaN,taskName:"",taskKey:"",processInstanceName:"",processInstanceKey:"",startUserId:"",options:[],roleIds:[],deptIds:[],postIds:[],userIds:[],userGroupIds:[],scripts:[],reason:""}),R=O({type:[{required:!0,message:"\u89C4\u5219\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],roleIds:[{required:!0,message:"\u6307\u5B9A\u89D2\u8272\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],deptIds:[{required:!0,message:"\u6307\u5B9A\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],postIds:[{required:!0,message:"\u6307\u5B9A\u5C97\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],userIds:[{required:!0,message:"\u6307\u5B9A\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],userGroupIds:[{required:!0,message:"\u6307\u5B9A\u7528\u6237\u7EC4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],scripts:[{required:!0,message:"\u6307\u5B9A\u811A\u672C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],reason:[{required:!0,message:"\u6284\u9001\u539F\u56E0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),b=n(),g=n([]),h=n([]),k=n(),w=n([]),U=n([]),N=n([]),D=G(S.BPM_TASK_ASSIGN_SCRIPT);C({open:async t=>{B(),t!=null&&(l.value.type=void 0,l.value.taskName=t.name,l.value.taskKey=t.id,l.value.processInstanceName=t.processInstance.name,l.value.processInstanceKey=t.processInstance.id,l.value.startUserId=t.processInstance.startUserId),m.value=!0,g.value=await ne(),h.value=await ie(),k.value=oe(h.value,"id"),w.value=await _e(),U.value=await Ie(),N.value=await fe()}});const E=A,F=async()=>{if(!b||!await b.value.validate())return;const t={...l.value};t.type===10?t.options=t.roleIds:t.type===20||t.type===21?t.options=t.deptIds:t.type===22?t.options=t.postIds:t.type===30||t.type===31||t.type===32?t.options=t.userIds:t.type===40?t.options=t.userGroupIds:t.type===50&&(t.options=t.scripts),t.roleIds=void 0,t.deptIds=void 0,t.postIds=void 0,t.userIds=void 0,t.userGroupIds=void 0,t.scripts=void 0,V.value=!0;try{await ue(t),T.success(P("common.createSuccess")),m.value=!1,E("success")}finally{V.value=!1}},B=()=>{var t;(t=b.value)==null||t.resetFields()};return(t,s)=>{const f=W,p=X,i=Z,c=$,M=te,j=ee,K=ae,z=L;return o(),u(z,{modelValue:a(m),"onUpdate:modelValue":s[13]||(s[13]=e=>Q(m)?m.value=e:null),title:"\u4FEE\u6539\u4EFB\u52A1\u89C4\u5219",width:"600"},{footer:r(()=>[d(K,{disabled:a(V),type:"primary",onClick:F},{default:r(()=>[q("\u786E \u5B9A")]),_:1},8,["disabled"]),d(K,{onClick:s[12]||(s[12]=e=>m.value=!1)},{default:r(()=>[q("\u53D6 \u6D88")]),_:1})]),default:r(()=>[d(j,{ref_key:"formRef",ref:b,model:a(l),rules:a(R),"label-width":"80px"},{default:r(()=>[d(p,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"taskName"},{default:r(()=>[d(f,{modelValue:a(l).taskName,"onUpdate:modelValue":s[0]||(s[0]=e=>a(l).taskName=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),d(p,{label:"\u4EFB\u52A1\u6807\u8BC6",prop:"taskKey"},{default:r(()=>[d(f,{modelValue:a(l).taskKey,"onUpdate:modelValue":s[1]||(s[1]=e=>a(l).taskKey=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),d(p,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"processInstanceName"},{default:r(()=>[d(f,{modelValue:a(l).processInstanceName,"onUpdate:modelValue":s[2]||(s[2]=e=>a(l).processInstanceName=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0"},null,8,["modelValue"])]),_:1}),d(p,{label:"\u6D41\u7A0B\u6807\u8BC6",prop:"processInstanceKey"},{default:r(()=>[d(f,{modelValue:a(l).processInstanceKey,"onUpdate:modelValue":s[3]||(s[3]=e=>a(l).processInstanceKey=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),d(p,{label:"\u89C4\u5219\u7C7B\u578B",prop:"type"},{default:r(()=>[d(c,{modelValue:a(l).type,"onUpdate:modelValue":s[4]||(s[4]=e=>a(l).type=e),clearable:"",style:{width:"100%"}},{default:r(()=>[(o(!0),_(y,null,I(a(G)(a(S).BPM_TASK_ASSIGN_RULE_TYPE),e=>(o(),u(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(l).type===10?(o(),u(p,{key:0,label:"\u6307\u5B9A\u89D2\u8272",prop:"roleIds"},{default:r(()=>[d(c,{modelValue:a(l).roleIds,"onUpdate:modelValue":s[5]||(s[5]=e=>a(l).roleIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(o(!0),_(y,null,I(a(g),e=>(o(),u(i,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===20||a(l).type===21?(o(),u(p,{key:1,label:"\u6307\u5B9A\u90E8\u95E8",prop:"deptIds",span:"24"},{default:r(()=>[d(M,{ref:"treeRef",modelValue:a(l).deptIds,"onUpdate:modelValue":s[6]||(s[6]=e=>a(l).deptIds=e),data:a(k),props:a(de),"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E",multiple:"","node-key":"id","show-checkbox":""},null,8,["modelValue","data","props"])]),_:1})):v("",!0),a(l).type===22?(o(),u(p,{key:2,label:"\u6307\u5B9A\u5C97\u4F4D",prop:"postIds",span:"24"},{default:r(()=>[d(c,{modelValue:a(l).postIds,"onUpdate:modelValue":s[7]||(s[7]=e=>a(l).postIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(o(!0),_(y,null,I(a(w),e=>(o(),u(i,{key:parseInt(e.id),label:e.name,value:parseInt(e.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===30||a(l).type===31||a(l).type===32?(o(),u(p,{key:3,label:"\u6307\u5B9A\u7528\u6237",prop:"userIds",span:"24"},{default:r(()=>[d(c,{modelValue:a(l).userIds,"onUpdate:modelValue":s[8]||(s[8]=e=>a(l).userIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(o(!0),_(y,null,I(a(U),e=>(o(),u(i,{key:parseInt(e.id),label:e.nickname,value:parseInt(e.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===40?(o(),u(p,{key:4,label:"\u6307\u5B9A\u7528\u6237\u7EC4",prop:"userGroupIds"},{default:r(()=>[d(c,{modelValue:a(l).userGroupIds,"onUpdate:modelValue":s[9]||(s[9]=e=>a(l).userGroupIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(o(!0),_(y,null,I(a(N),e=>(o(),u(i,{key:parseInt(e.id),label:e.name,value:parseInt(e.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===50?(o(),u(p,{key:5,label:"\u6307\u5B9A\u811A\u672C",prop:"scripts"},{default:r(()=>[d(c,{modelValue:a(l).scripts,"onUpdate:modelValue":s[10]||(s[10]=e=>a(l).scripts=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(o(!0),_(y,null,I(a(D),e=>(o(),u(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),d(p,{label:"\u6284\u9001\u539F\u56E0",prop:"reason"},{default:r(()=>[d(f,{modelValue:a(l).reason,"onUpdate:modelValue":s[11]||(s[11]=e=>a(l).reason=e),placeholder:"\u8BF7\u8F93\u5165\u6284\u9001\u539F\u56E0",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}})});export{x as _,he as __tla};
