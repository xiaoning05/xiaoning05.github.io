import{d as L,k as O,r as m,n as T,p as j,o,q as c,e as t,b as d,a as e,h as V,w as A,c as I,F as h,g as U,a0 as k,t as G,j as W,s as X,x as Y,y as Z,af as H,ag as J,C as K,B as Q,v as $,_ as ee,__tla as ae}from"./index-b079f499.js";import{_ as le,__tla as se}from"./Dialog-07bcd661.js";import{g as te,__tla as ue}from"./index-41e17afa.js";import{P as re,c as oe,u as de,__tla as _e}from"./index-e36b1445.js";import{a as ie,D as me,__tla as ce}from"./dict-2c56908b.js";import{u as ne,__tla as ve}from"./useMessage-66b9cf03.js";let E,pe=Promise.all([(()=>{try{return ae}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ve}catch{}})()]).then(async()=>{E=ee(L({name:"CrmPermissionForm",__name:"PermissionForm",emits:["success"],setup(fe,{expose:P,emit:R}){const{t:p}=O(),g=ne(),_=m(!1),b=m(""),f=m(!1),n=m(""),w=m([]),s=m({}),S=T({userId:[{required:!0,message:"\u4EBA\u5458\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],level:[{required:!0,message:"\u6743\u9650\u7EA7\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),y=m();P({open:async(u,l,r,i)=>{_.value=!0,b.value=p("action."+u)+"\u56E2\u961F\u6210\u5458",n.value=u,C(l,r),i&&(s.value.ids=i)},open0:async(u,l,r,i,v)=>{_.value=!0,b.value=p("action."+u)+"\u56E2\u961F\u6210\u5458",n.value=u,C(l,r),s.value.level=v,s.value.ids=[i]}});const q=R,x=async()=>{if(y&&await y.value.validate()){f.value=!0;try{const u=s.value;n.value==="create"?(await oe(e(u)),g.success(p("common.createSuccess"))):(await de(e(u)),g.success(p("common.updateSuccess"))),_.value=!1,q("success")}finally{f.value=!1}}},C=(u,l)=>{var r;(r=y.value)==null||r.resetFields(),s.value={},s.value={...s.value,bizType:u,bizId:l}};return j(async()=>{w.value=await te()}),(u,l)=>{const r=X,i=Y,v=Z,z=H,M=J,N=K,F=Q,B=le,D=$;return o(),c(B,{modelValue:e(_),"onUpdate:modelValue":l[4]||(l[4]=a=>W(_)?_.value=a:null),title:e(b),width:"30%"},{footer:t(()=>[d(F,{disabled:e(f),type:"primary",onClick:x},{default:t(()=>[V("\u786E \u5B9A")]),_:1},8,["disabled"]),d(F,{onClick:l[3]||(l[3]=a=>_.value=!1)},{default:t(()=>[V("\u53D6 \u6D88")]),_:1})]),default:t(()=>[A((o(),c(N,{ref_key:"formRef",ref:y,model:e(s),rules:e(S),"label-width":"100px"},{default:t(()=>[e(n)==="create"?(o(),c(v,{key:0,label:"\u9009\u62E9\u4EBA\u5458",prop:"userId"},{default:t(()=>[d(i,{modelValue:e(s).userId,"onUpdate:modelValue":l[0]||(l[0]=a=>e(s).userId=a)},{default:t(()=>[(o(!0),I(h,null,U(e(w),a=>(o(),c(r,{key:a.id,label:a.nickname,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):k("",!0),d(v,{label:"\u6743\u9650\u7EA7\u522B",prop:"level"},{default:t(()=>[d(M,{modelValue:e(s).level,"onUpdate:modelValue":l[1]||(l[1]=a=>e(s).level=a)},{default:t(()=>[(o(!0),I(h,null,U(e(ie)(e(me).CRM_PERMISSION_LEVEL),a=>(o(),I(h,{key:a.value},[a.value!=e(re).OWNER?(o(),c(z,{key:0,label:a.value},{default:t(()=>[V(G(a.label),1)]),_:2},1032,["label"])):k("",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1}),e(n)==="create"?(o(),c(v,{key:1,label:"\u540C\u65F6\u6DFB\u52A0\u81F3",prop:"toBizType"},{default:t(()=>[d(i,{modelValue:e(s).userId,"onUpdate:modelValue":l[2]||(l[2]=a=>e(s).userId=a)},{default:t(()=>[d(r,{value:1,label:"\u8054\u7CFB\u4EBA"}),d(r,{value:1,label:"\u5546\u673A"})]),_:1},8,["modelValue"])]),_:1})):k("",!0)]),_:1},8,["model","rules"])),[[D,e(f)]])]),_:1},8,["modelValue","title"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/crm/permission/components/PermissionForm.vue"]])});export{pe as __tla,E as default};
