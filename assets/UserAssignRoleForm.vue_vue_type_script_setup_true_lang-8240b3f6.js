import{d as C,k as S,r as n,o as i,q as c,e as t,b as r,a as l,h as y,w as q,c as B,F as K,g as D,j as M,K as P,y as z,s as E,x as G,B as H,A as J,v as L,__tla as N}from"./index-34f06ebd.js";import{_ as O,__tla as Q}from"./Dialog.vue_vue_type_style_index_0_lang-08560286.js";import{c as T,d as W,__tla as X}from"./index-647c6ebb.js";import{g as Y,__tla as Z}from"./index-87f4f1d4.js";import{u as $,__tla as ee}from"./useMessage-7a5ab7ef.js";let V,ae=Promise.all([(()=>{try{return N}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return ee}catch{}})()]).then(async()=>{V=C({name:"SystemUserAssignRoleForm",__name:"UserAssignRoleForm",emits:["success"],setup(le,{expose:b,emit:k}){const{t:h}=S(),I=$(),d=n(!1),o=n(!1),e=n({id:-1,nickname:"",username:"",roleIds:[]}),m=n(),f=n([]);b({open:async u=>{d.value=!0,x(),e.value.id=u.id,e.value.username=u.username,e.value.nickname=u.nickname,o.value=!0;try{e.value.roleIds=await T(u.id)}finally{o.value=!1}f.value=await Y()}});const w=k,U=async()=>{if(m&&await m.value.validate()){o.value=!0;try{await W({userId:e.value.id,roleIds:e.value.roleIds}),I.success(h("common.updateSuccess")),d.value=!1,w("success",!0)}finally{o.value=!1}}},x=()=>{var u;e.value={id:-1,nickname:"",username:"",roleIds:[]},(u=m.value)==null||u.resetFields()};return(u,s)=>{const v=P,_=z,g=E,F=G,A=H,p=J,R=O,j=L;return i(),c(R,{modelValue:l(d),"onUpdate:modelValue":s[4]||(s[4]=a=>M(d)?d.value=a:null),title:"\u5206\u914D\u89D2\u8272"},{footer:t(()=>[r(p,{disabled:l(o),type:"primary",onClick:U},{default:t(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),r(p,{onClick:s[3]||(s[3]=a=>d.value=!1)},{default:t(()=>[y("\u53D6 \u6D88")]),_:1})]),default:t(()=>[q((i(),c(A,{ref_key:"formRef",ref:m,model:l(e),"label-width":"80px"},{default:t(()=>[r(_,{label:"\u7528\u6237\u540D\u79F0"},{default:t(()=>[r(v,{modelValue:l(e).username,"onUpdate:modelValue":s[0]||(s[0]=a=>l(e).username=a),disabled:!0},null,8,["modelValue"])]),_:1}),r(_,{label:"\u7528\u6237\u6635\u79F0"},{default:t(()=>[r(v,{modelValue:l(e).nickname,"onUpdate:modelValue":s[1]||(s[1]=a=>l(e).nickname=a),disabled:!0},null,8,["modelValue"])]),_:1}),r(_,{label:"\u89D2\u8272"},{default:t(()=>[r(F,{modelValue:l(e).roleIds,"onUpdate:modelValue":s[2]||(s[2]=a=>l(e).roleIds=a),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},{default:t(()=>[(i(!0),B(K,null,D(l(f),a=>(i(),c(g,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[j,l(o)]])]),_:1},8,["modelValue"])}}})});export{V as _,ae as __tla};