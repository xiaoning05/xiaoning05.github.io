import{_ as z,__tla as L}from"./Dialog-8f786edd.js";import{d as Q,i as X,r as n,e as Z,o as d,v as u,w as r,f as o,a,h as G,c as _,F as y,q as I,a5 as v,l as H,Q as J,A as O,y as W,z as $,G as ee,D as ae,_ as le,__tla as te}from"./index-f0743f71.js";import{E as se,__tla as re}from"./el-tree-select-d7a8a522.js";import{a as q,D as C,__tla as oe}from"./dict-4a9940b3.js";import{d as de,h as ue}from"./tree-02f455f9.js";import{b as pe,__tla as ne}from"./index-7b04e930.js";import{g as ie,__tla as me}from"./index-0e4ad6f7.js";import{g as ce,__tla as _e}from"./index-cb25e840.js";import{g as ye,__tla as Ie}from"./index-1d34d5e0.js";import{g as ve,__tla as fe}from"./index-5f468446.js";import{g as be,__tla as ge}from"./index-580ad37b.js";import{u as Ve,__tla as he}from"./useMessage-75a00a06.js";let S,ke=Promise.all([(()=>{try{return L}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return he}catch{}})()]).then(async()=>{S=le(Q({__name:"TaskCCDialogForm",emits:["success"],setup(we,{expose:x,emit:A}){const{t:T}=X(),D=Ve(),i=n(!1),g=n(!1),l=n({type:NaN,taskName:"",taskKey:"",processInstanceName:"",processInstanceKey:"",startUserId:"",options:[],roleIds:[],deptIds:[],postIds:[],userIds:[],userGroupIds:[],scripts:[],reason:""}),P=Z({type:[{required:!0,message:"\u89C4\u5219\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],roleIds:[{required:!0,message:"\u6307\u5B9A\u89D2\u8272\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],deptIds:[{required:!0,message:"\u6307\u5B9A\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],postIds:[{required:!0,message:"\u6307\u5B9A\u5C97\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],userIds:[{required:!0,message:"\u6307\u5B9A\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],userGroupIds:[{required:!0,message:"\u6307\u5B9A\u7528\u6237\u7EC4\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],scripts:[{required:!0,message:"\u6307\u5B9A\u811A\u672C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],reason:[{required:!0,message:"\u6284\u9001\u539F\u56E0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),b=n(),V=n([]),h=n([]),k=n(),w=n([]),U=n([]),N=n([]),E=q(C.BPM_TASK_ASSIGN_SCRIPT);x({open:async t=>{M(),t!=null&&(l.value.type=void 0,l.value.taskName=t.name,l.value.taskKey=t.id,l.value.processInstanceName=t.processInstance.name,l.value.processInstanceKey=t.processInstance.id,l.value.startUserId=t.processInstance.startUserId),i.value=!0,V.value=await ie(),h.value=await ce(),k.value=ue(h.value,"id"),w.value=await ye(),U.value=await ve(),N.value=await be()}});const F=A,R=async()=>{if(!b||!await b.value.validate())return;const t={...l.value};t.type===10?t.options=t.roleIds:t.type===20||t.type===21?t.options=t.deptIds:t.type===22?t.options=t.postIds:t.type===30||t.type===31||t.type===32?t.options=t.userIds:t.type===40?t.options=t.userGroupIds:t.type===50&&(t.options=t.scripts),t.roleIds=void 0,t.deptIds=void 0,t.postIds=void 0,t.userIds=void 0,t.userGroupIds=void 0,t.scripts=void 0,g.value=!0;try{const s=t;await pe(s),console.log(s),D.success(T("common.createSuccess")),i.value=!1,F("success")}finally{g.value=!1}},M=()=>{var t;(t=b.value)==null||t.resetFields()};return(t,s)=>{const f=J,p=O,m=W,c=$,B=se,Y=ee,K=ae,j=z;return d(),u(j,{modelValue:a(i),"onUpdate:modelValue":s[13]||(s[13]=e=>H(i)?i.value=e:null),title:"\u4FEE\u6539\u4EFB\u52A1\u89C4\u5219",width:"600"},{footer:r(()=>[o(K,{disabled:a(g),type:"primary",onClick:R},{default:r(()=>[G("\u786E \u5B9A")]),_:1},8,["disabled"]),o(K,{onClick:s[12]||(s[12]=e=>i.value=!1)},{default:r(()=>[G("\u53D6 \u6D88")]),_:1})]),default:r(()=>[o(Y,{ref_key:"formRef",ref:b,model:a(l),rules:a(P),"label-width":"80px"},{default:r(()=>[o(p,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"taskName"},{default:r(()=>[o(f,{modelValue:a(l).taskName,"onUpdate:modelValue":s[0]||(s[0]=e=>a(l).taskName=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u4EFB\u52A1\u6807\u8BC6",prop:"taskKey"},{default:r(()=>[o(f,{modelValue:a(l).taskKey,"onUpdate:modelValue":s[1]||(s[1]=e=>a(l).taskKey=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"processInstanceName"},{default:r(()=>[o(f,{modelValue:a(l).processInstanceName,"onUpdate:modelValue":s[2]||(s[2]=e=>a(l).processInstanceName=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u6D41\u7A0B\u6807\u8BC6",prop:"processInstanceKey"},{default:r(()=>[o(f,{modelValue:a(l).processInstanceKey,"onUpdate:modelValue":s[3]||(s[3]=e=>a(l).processInstanceKey=e),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u6807\u8BC6"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u89C4\u5219\u7C7B\u578B",prop:"type"},{default:r(()=>[o(c,{modelValue:a(l).type,"onUpdate:modelValue":s[4]||(s[4]=e=>a(l).type=e),clearable:"",style:{width:"100%"}},{default:r(()=>[(d(!0),_(y,null,I(a(q)(a(C).BPM_TASK_ASSIGN_RULE_TYPE),e=>(d(),u(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(l).type===10?(d(),u(p,{key:0,label:"\u6307\u5B9A\u89D2\u8272",prop:"roleIds"},{default:r(()=>[o(c,{modelValue:a(l).roleIds,"onUpdate:modelValue":s[5]||(s[5]=e=>a(l).roleIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(d(!0),_(y,null,I(a(V),e=>(d(),u(m,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===20||a(l).type===21?(d(),u(p,{key:1,label:"\u6307\u5B9A\u90E8\u95E8",prop:"deptIds",span:"24"},{default:r(()=>[o(B,{ref:"treeRef",modelValue:a(l).deptIds,"onUpdate:modelValue":s[6]||(s[6]=e=>a(l).deptIds=e),data:a(k),props:a(de),"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E",multiple:"","node-key":"id","show-checkbox":""},null,8,["modelValue","data","props"])]),_:1})):v("",!0),a(l).type===22?(d(),u(p,{key:2,label:"\u6307\u5B9A\u5C97\u4F4D",prop:"postIds",span:"24"},{default:r(()=>[o(c,{modelValue:a(l).postIds,"onUpdate:modelValue":s[7]||(s[7]=e=>a(l).postIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(d(!0),_(y,null,I(a(w),e=>(d(),u(m,{key:parseInt(e.id),label:e.name,value:parseInt(e.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===30||a(l).type===31||a(l).type===32?(d(),u(p,{key:3,label:"\u6307\u5B9A\u7528\u6237",prop:"userIds",span:"24"},{default:r(()=>[o(c,{modelValue:a(l).userIds,"onUpdate:modelValue":s[8]||(s[8]=e=>a(l).userIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(d(!0),_(y,null,I(a(U),e=>(d(),u(m,{key:parseInt(e.id),label:e.nickname,value:parseInt(e.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===40?(d(),u(p,{key:4,label:"\u6307\u5B9A\u7528\u6237\u7EC4",prop:"userGroupIds"},{default:r(()=>[o(c,{modelValue:a(l).userGroupIds,"onUpdate:modelValue":s[9]||(s[9]=e=>a(l).userGroupIds=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(d(!0),_(y,null,I(a(N),e=>(d(),u(m,{key:parseInt(e.id),label:e.name,value:parseInt(e.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),a(l).type===50?(d(),u(p,{key:5,label:"\u6307\u5B9A\u811A\u672C",prop:"scripts"},{default:r(()=>[o(c,{modelValue:a(l).scripts,"onUpdate:modelValue":s[10]||(s[10]=e=>a(l).scripts=e),clearable:"",multiple:"",style:{width:"100%"}},{default:r(()=>[(d(!0),_(y,null,I(a(E),e=>(d(),u(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):v("",!0),o(p,{label:"\u6284\u9001\u539F\u56E0",prop:"reason"},{default:r(()=>[o(f,{modelValue:a(l).reason,"onUpdate:modelValue":s[11]||(s[11]=e=>a(l).reason=e),placeholder:"\u8BF7\u8F93\u5165\u6284\u9001\u539F\u56E0",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/bpm/processInstance/detail/TaskCCDialogForm.vue"]])});export{ke as __tla,S as default};
