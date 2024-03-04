import{_ as x,__tla as I}from"./Form-12d0097a.js";import{_ as V,__tla as F}from"./XButton-3f4aabb5.js";import{d as L,i as U,a1 as q,a as r,e as B,r as C,x as E,a3 as S,o as j,v as z,w as c,f as s,g as n,P as G,__tla as T}from"./index-d5b00dc9.js";import{u as A,__tla as D}from"./useForm-5fd37651.js";import{u as H,__tla as J}from"./useValidator-86e5cbc3.js";import{_ as K,__tla as M}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-5f4686a3.js";import{u as N,L as O,__tla as Q}from"./useLogin-76d05d03.js";import{__tla as W}from"./Form.vue_vue_type_style_index_0_scoped_09f6ff61_lang-b9f82e9e.js";import{__tla as X}from"./el-virtual-list-16e0348f.js";import{__tla as Y}from"./el-tree-select-8e562b9e.js";import{__tla as Z}from"./el-time-select-6ab5bc53.js";import{__tla as $}from"./InputPassword-c9f9bc34.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as tt}from"./style.css_vue_type_style_index_0_src_true_lang-bcdcdb45.js";import{__tla as rt}from"./UploadImg-b64c8ba7.js";import{__tla as at}from"./index-2383b77d.js";import{__tla as et}from"./el-image-viewer-96313bcd.js";import{__tla as lt}from"./useUpload-1b812415.js";import{__tla as ot}from"./index-91a13e3d.js";import{__tla as st}from"./useMessage-2288a5f2.js";import{__tla as _t}from"./UploadImgs-75fdd3de.js";import{__tla as ct}from"./UploadImgs.vue_vue_type_style_index_0_scoped_78c552d7_lang-e3e35d92.js";import{__tla as nt}from"./UploadFile-2e6f3e58.js";import{__tla as it}from"./UploadFile.vue_vue_type_style_index_0_scoped_3311e906_lang-064855f0.js";let u,mt=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return it}catch{}})()]).then(async()=>{let i,m,p;i={class:"w-[100%] flex"},m={class:"w-[100%]"},p={class:"mt-15px w-[100%]"},u=L({name:"RegisterForm",__name:"RegisterForm",setup(pt){const{t}=U(),{required:e}=H(),{register:h,elFormRef:f}=A(),{handleBackLogin:y,getLoginState:g}=N(),w=q(()=>r(g)===O.REGISTER),P=B([{field:"title",colProps:{span:24}},{field:"username",label:t("login.username"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:t("login.usernamePlaceholder")}},{field:"password",label:t("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:t("login.passwordPlaceholder")}},{field:"check_password",label:t("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:t("login.passwordPlaceholder")}},{field:"code",label:t("login.code"),colProps:{span:24}},{field:"register",colProps:{span:24}}]),v={username:[e()],password:[e()],check_password:[e()],code:[e()]},_=C(!1);return(dt,l)=>{const b=G,d=V,k=x;return E((j(),z(k,{rules:v,schema:r(P),class:"dark:(border-1 border-[var(--el-border-color)] border-solid)","hide-required-asterisk":"","label-position":"top",size:"large",onRegister:r(h)},{title:c(()=>[s(K,{style:{width:"100%"}})]),code:c(o=>[n("div",i,[s(b,{modelValue:o.code,"onUpdate:modelValue":a=>o.code=a,placeholder:r(t)("login.codePlaceholder")},null,8,["modelValue","onUpdate:modelValue","placeholder"])])]),register:c(()=>[n("div",m,[s(d,{loading:r(_),title:r(t)("login.register"),class:"w-[100%]",type:"primary",onClick:l[0]||(l[0]=o=>(async()=>{const a=r(f);a==null||a.validate(async R=>{if(R)try{_.value=!0}finally{_.value=!1}})})())},null,8,["loading","title"])]),n("div",p,[s(d,{title:r(t)("login.hasUser"),class:"w-[100%]",onClick:l[1]||(l[1]=o=>r(y)())},null,8,["title"])])]),_:1},8,["schema","onRegister"])),[[S,r(w)]])}}})});export{mt as __tla,u as default};
