import{d as b,r as y,n as u,o as h,q as V,e as w,b as l,a as e,k as v,y as R,C as q,_ as k,__tla as C}from"./index-b079f499.js";import{_ as M,__tla as U}from"./XButton-e75a6501.js";import{I as i,__tla as x}from"./InputPassword-4d2cd0ef.js";import{a as I,__tla as E}from"./profile-05729178.js";import{u as A,__tla as D}from"./useMessage-66b9cf03.js";let p,F=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return U}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return D}catch{}})()]).then(async()=>{p=k(b({name:"ResetPwd",__name:"ResetPwd",setup(G){const{t:r}=v(),_=A(),n=y(),s=u({oldPassword:"",newPassword:"",confirmPassword:""}),f=u({oldPassword:[{required:!0,message:r("profile.password.oldPwdMsg"),trigger:"blur"},{min:6,max:20,message:r("profile.password.pwdRules"),trigger:"blur"}],newPassword:[{required:!0,message:r("profile.password.newPwdMsg"),trigger:"blur"},{min:6,max:20,message:r("profile.password.pwdRules"),trigger:"blur"}],confirmPassword:[{required:!0,message:r("profile.password.cfPwdMsg"),trigger:"blur"},{required:!0,validator:(c,a,o)=>{s.newPassword!==a?o(new Error(r("profile.password.diffPwd"))):o()},trigger:"blur"}]});return(c,a)=>{const o=R,m=M,P=q;return h(),V(P,{ref_key:"formRef",ref:n,model:e(s),rules:e(f),"label-width":200},{default:w(()=>[l(o,{label:e(r)("profile.password.oldPassword"),prop:"oldPassword"},{default:w(()=>[l(e(i),{modelValue:e(s).oldPassword,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).oldPassword=t)},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{label:e(r)("profile.password.newPassword"),prop:"newPassword"},{default:w(()=>[l(e(i),{modelValue:e(s).newPassword,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).newPassword=t),strength:""},null,8,["modelValue"])]),_:1},8,["label"]),l(o,{label:e(r)("profile.password.confirmPassword"),prop:"confirmPassword"},{default:w(()=>[l(e(i),{modelValue:e(s).confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).confirmPassword=t),strength:""},null,8,["modelValue"])]),_:1},8,["label"]),l(o,null,{default:w(()=>[l(m,{title:e(r)("common.save"),type:"primary",onClick:a[3]||(a[3]=t=>{var d;(d=e(n))&&d.validate(async g=>{g&&(await I(s.oldPassword,s.newPassword),_.success(r("common.updateSuccess")))})})},null,8,["title"]),l(m,{title:e(r)("common.reset"),type:"danger",onClick:a[4]||(a[4]=t=>{var d;(d=e(n))&&d.resetFields()})},null,8,["title"])]),_:1})]),_:1},8,["model","rules"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/Profile/components/ResetPwd.vue"]])});export{F as __tla,p as default};
