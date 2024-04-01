import{d as S,r as u,n as T,p as j,o,q as i,e as r,b as t,a as l,h as _,w as D,c as b,F as O,g as U,j as k,t as W,$ as L,s as Z,x as $,y as G,ae as H,af as J,B as K,A as Q,v as X,__tla as Y}from"./index-34f06ebd.js";import{_ as ee,__tla as le}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{g as ae,__tla as re}from"./index-cd2bb9f6.js";import{a as se,D as te,__tla as ue}from"./dict-e142e39a.js";import{P as oe,__tla as de}from"./index-ad2ad2c3.js";import{u as ne,__tla as ie}from"./useMessage-7a5ab7ef.js";let I,_e=Promise.all([(()=>{try{return Y}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return ie}catch{}})()]).then(async()=>{I=S({name:"CrmTransferForm",__name:"TransferForm",emits:["success"],setup(me,{expose:C,emit:F}){const x=ne(),n=u(!1),f=u(""),m=u(!1),V=u([]),v=u(!1),s=u({id:void 0,newOwnerUserId:void 0,oldOwnerPermissionLevel:void 0}),E=T({newOwnerUserId:[{required:!0,message:"\u65B0\u8D1F\u8D23\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],oldOwnerPermissionLevel:[{required:!0,message:"\u8001\u8D1F\u8D23\u4EBA\u52A0\u5165\u56E2\u961F\u540E\u7684\u6743\u9650\u7EA7\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),c=u(),h=u(()=>{});C({open:async(d,a,w)=>{n.value=!0,f.value=d,h.value=w,z(),s.value.id=a}});const R=F,q=async()=>{if(c&&await c.value.validate()){m.value=!0;try{const d=s.value;await h.value(l(d)),x.success(f.value+"\u6210\u529F"),n.value=!1,R("success")}finally{m.value=!1}}},z=()=>{var d;(d=c.value)==null||d.resetFields(),s.value={id:void 0,newOwnerUserId:void 0,oldOwnerPermissionLevel:void 0}};return j(async()=>{V.value=await ae()}),(d,a)=>{const w=Z,A=$,p=G,y=H,g=J,B=K,P=Q,M=ee,N=X;return o(),i(M,{modelValue:l(n),"onUpdate:modelValue":a[5]||(a[5]=e=>k(n)?n.value=e:null),title:l(f),width:"30%"},{footer:r(()=>[t(P,{disabled:l(m),type:"primary",onClick:q},{default:r(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),t(P,{onClick:a[4]||(a[4]=e=>n.value=!1)},{default:r(()=>[_("\u53D6 \u6D88")]),_:1})]),default:r(()=>[D((o(),i(B,{ref_key:"formRef",ref:c,model:l(s),rules:l(E),"label-width":"150px"},{default:r(()=>[t(p,{label:"\u9009\u62E9\u65B0\u8D1F\u8D23\u4EBA",prop:"newOwnerUserId"},{default:r(()=>[t(A,{modelValue:l(s).newOwnerUserId,"onUpdate:modelValue":a[0]||(a[0]=e=>l(s).newOwnerUserId=e)},{default:r(()=>[(o(!0),b(O,null,U(l(V),e=>(o(),i(w,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(p,{label:"\u8001\u8D1F\u8D23\u4EBA"},{default:r(()=>[t(g,{modelValue:l(v),"onUpdate:modelValue":a[1]||(a[1]=e=>k(v)?v.value=e:null),onChange:a[2]||(a[2]=e=>l(s).oldOwnerPermissionLevel=void 0)},{default:r(()=>[t(y,{label:!1,size:"large"},{default:r(()=>[_("\u79FB\u9664")]),_:1}),t(y,{label:!0,size:"large"},{default:r(()=>[_("\u52A0\u5165\u56E2\u961F")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(v)?(o(),i(p,{key:0,label:"\u8001\u8D1F\u8D23\u4EBA\u6743\u9650\u7EA7\u522B",prop:"oldOwnerPermissionLevel"},{default:r(()=>[t(g,{modelValue:l(s).oldOwnerPermissionLevel,"onUpdate:modelValue":a[3]||(a[3]=e=>l(s).oldOwnerPermissionLevel=e)},{default:r(()=>[(o(!0),b(O,null,U(l(se)(l(te).CRM_PERMISSION_LEVEL),e=>(o(),b(O,{key:e.value},[e.value!=l(oe).OWNER?(o(),i(y,{key:0,label:e.value},{default:r(()=>[_(W(e.label),1)]),_:2},1032,["label"])):L("",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1})):L("",!0)]),_:1},8,["model","rules"])),[[N,l(m)]])]),_:1},8,["modelValue","title"])}}})});export{I as _,_e as __tla};
