import{d as j,k as S,r as n,o as i,q as c,e as t,b as r,a as l,h as y,w as q,c as B,F as D,g as M,j as Y,L as E,y as G,s as L,x as N,C as P,B as X,v as Z,_ as z,__tla as H}from"./index-b079f499.js";import{_ as J,__tla as K}from"./Dialog-07bcd661.js";import{c as O,d as Q,__tla as T}from"./index-bf28c124.js";import{g as W,__tla as $}from"./index-9964f17d.js";import{u as ee,__tla as ae}from"./useMessage-66b9cf03.js";let V,le=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ae}catch{}})()]).then(async()=>{V=z(j({name:"SystemUserAssignRoleForm",__name:"UserAssignRoleForm",emits:["success"],setup(se,{expose:b,emit:k}){const{t:I}=S(),h=ee(),d=n(!1),o=n(!1),e=n({id:-1,nickname:"",username:"",roleIds:[]}),m=n(),f=n([]);b({open:async u=>{d.value=!0,g(),e.value.id=u.id,e.value.username=u.username,e.value.nickname=u.nickname,o.value=!0;try{e.value.roleIds=await O(u.id)}finally{o.value=!1}f.value=await W()}});const U=k,w=async()=>{if(m&&await m.value.validate()){o.value=!0;try{await Q({userId:e.value.id,roleIds:e.value.roleIds}),h.success(I("common.updateSuccess")),d.value=!1,U("success",!0)}finally{o.value=!1}}},g=()=>{var u;e.value={id:-1,nickname:"",username:"",roleIds:[]},(u=m.value)==null||u.resetFields()};return(u,s)=>{const v=E,_=G,F=L,x=N,A=P,p=X,C=J,R=Z;return i(),c(C,{modelValue:l(d),"onUpdate:modelValue":s[4]||(s[4]=a=>Y(d)?d.value=a:null),title:"\u5206\u914D\u89D2\u8272"},{footer:t(()=>[r(p,{disabled:l(o),type:"primary",onClick:w},{default:t(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),r(p,{onClick:s[3]||(s[3]=a=>d.value=!1)},{default:t(()=>[y("\u53D6 \u6D88")]),_:1})]),default:t(()=>[q((i(),c(A,{ref_key:"formRef",ref:m,model:l(e),"label-width":"80px"},{default:t(()=>[r(_,{label:"\u7528\u6237\u540D\u79F0"},{default:t(()=>[r(v,{modelValue:l(e).username,"onUpdate:modelValue":s[0]||(s[0]=a=>l(e).username=a),disabled:!0},null,8,["modelValue"])]),_:1}),r(_,{label:"\u7528\u6237\u6635\u79F0"},{default:t(()=>[r(v,{modelValue:l(e).nickname,"onUpdate:modelValue":s[1]||(s[1]=a=>l(e).nickname=a),disabled:!0},null,8,["modelValue"])]),_:1}),r(_,{label:"\u89D2\u8272"},{default:t(()=>[r(x,{modelValue:l(e).roleIds,"onUpdate:modelValue":s[2]||(s[2]=a=>l(e).roleIds=a),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},{default:t(()=>[(i(!0),B(D,null,M(l(f),a=>(i(),c(F,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[R,l(o)]])]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/user/UserAssignRoleForm.vue"]])});export{le as __tla,V as default};