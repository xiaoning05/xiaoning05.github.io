import{d as X,r as p,u as Y,X as j,Y as D,a as t,n as K,aR as Q,p as Z,w as $,$ as B,o as J,q as W,e as r,b as e,H as ee,h as v,t as V,k as ae,a3 as k,a1 as te,a5 as re,a6 as oe,a7 as le,a8 as ne,y as se,a9 as ie,L as pe,aa as de,ab as me,C as ue,Q as ce,R as _e,f as fe,ac as ge,ad as he,_ as ye,__tla as we}from"./index-b079f499.js";import{_ as xe,__tla as be}from"./Verify-3dcd1295.js";import{_ as Fe,__tla as ve}from"./XButton-e75a6501.js";import{E as Ve,__tla as ke}from"./el-link-ed8d35b1.js";import{u as _,__tla as Le}from"./useIcon-99219a71.js";import{u as Ne,L as Me,a as Pe,__tla as Ee}from"./useLogin-24a05076.js";import{u as ze,__tla as Ie}from"./useMessage-66b9cf03.js";import{r as f,__tla as Re}from"./formRules-ddc6648c.js";import{__tla as Se}from"./index-4c44a910.js";let L,Te=Promise.all([(()=>{try{return we}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return ve}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return Le}catch{}})(),(()=>{try{return Ee}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Se}catch{}})()]).then(async()=>{let g;g=(u=>(ce("data-v-1de2631f"),u=u(),_e(),u))(()=>fe("div",{style:{color:"#747579"}}," \u7528\u6237\u767B\u5F55 ",-1)),L=ye(X({name:"LoginForm",__name:"LoginForm",setup(u){const{t:d}=ae();ze(),_({icon:"ep:house"});const N=_({icon:"ep:avatar"}),M=_({icon:"ep:lock"}),h=p(),{validForm:P}=Pe(h),{setLoginState:Ue,getLoginState:E}=Ne(),{currentRoute:z,push:y}=Y(),I=j(),m=p(""),c=p(!1),R=p(),S=p("blockPuzzle"),T=D(()=>t(E)===Me.LOGIN),U={tenantName:[f],username:[f],password:[f]},a=K({isShowPassword:!1,captchaEnable:"true",tenantEnable:"true",loginForm:{tenantName:"cmcc",username:"admin",password:"Aa123456",captchaVerification:"",rememberMe:!1}}),w=async()=>{k({accessToken:"a5e0d44b86d045c189882518a40b479e",expiresTime:1708635958255,refreshToken:"e079913cb8bb455383ebe97c977b5c83",userId:1}),y("/index")},x=p(),C=async l=>{c.value=!0;try{if(await(async()=>{if(a.tenantEnable==="true"){const n=await ge(a.loginForm.tenantName);he(n)}})(),!await P())return;a.loginForm.captchaVerification=l.captchaVerification;const o=await re(a.loginForm);if(!o)return;x.value=oe.service({lock:!0,text:"\u6B63\u5728\u52A0\u8F7D\u7CFB\u7EDF\u4E2D...",background:"rgba(0, 0, 0, 0.7)"}),a.loginForm.rememberMe?le(a.loginForm):ne(),k(o),m.value||(m.value="/"),m.value.indexOf("sso")!==-1?window.location.href=window.location.href.replace("/login?redirect=",""):y({path:m.value||I.addRouters[0].path})}finally{c.value=!1,x.value.close()}};return Q(()=>z.value,l=>{var o;m.value=(o=l==null?void 0:l.query)==null?void 0:o.redirect},{immediate:!0}),Z(()=>{(()=>{const l=te();l&&(a.loginForm={...a.loginForm,username:l.username?l.username:a.loginForm.username,password:l.password?l.password:a.loginForm.password,rememberMe:!!l.rememberMe,tenantName:l.tenantName?l.tenantName:a.loginForm.tenantName})})()}),(l,o)=>{const n=se,s=ie,b=pe,q=de,A=Ve,F=me,G=Fe,H=xe,O=ue;return $((J(),W(O,{ref_key:"formLogin",ref:h,model:t(a).loginForm,rules:U,class:"login-form","label-position":"top","label-width":"120px",size:"large"},{default:r(()=>[e(F,{style:{"margin-right":"-10px","margin-left":"-10px"}},{default:r(()=>[e(s,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:r(()=>[e(n,null,{default:r(()=>[g]),_:1})]),_:1}),e(s,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:r(()=>[e(n,{prop:"username"},{default:r(()=>[e(b,{modelValue:t(a).loginForm.username,"onUpdate:modelValue":o[0]||(o[0]=i=>t(a).loginForm.username=i),placeholder:t(d)("login.usernamePlaceholder"),"prefix-icon":t(N)},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),e(s,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:r(()=>[e(n,{prop:"password"},{default:r(()=>[e(b,{modelValue:t(a).loginForm.password,"onUpdate:modelValue":o[1]||(o[1]=i=>t(a).loginForm.password=i),placeholder:t(d)("login.passwordPlaceholder"),"prefix-icon":t(M),"show-password":"",type:"password",onKeyup:o[2]||(o[2]=ee(i=>w(),["enter"]))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),e(s,{span:24,style:{"padding-right":"10px","padding-left":"10px","margin-top":"-20px","margin-bottom":"-20px"}},{default:r(()=>[e(n,null,{default:r(()=>[e(F,{justify:"space-between",style:{width:"100%"}},{default:r(()=>[e(s,{span:6},{default:r(()=>[e(q,{modelValue:t(a).loginForm.rememberMe,"onUpdate:modelValue":o[3]||(o[3]=i=>t(a).loginForm.rememberMe=i)},{default:r(()=>[v(V(t(d)("login.remember")),1)]),_:1},8,["modelValue"])]),_:1}),e(s,{offset:6,span:12},{default:r(()=>[e(A,{style:{float:"right"},type:"primary"},{default:r(()=>[v(V(t(d)("login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{span:24,style:{"padding-right":"10px","padding-left":"10px"}},{default:r(()=>[e(n,null,{default:r(()=>[e(G,{loading:t(c),title:t(d)("login.login"),class:"w-[100%]",type:"primary",onClick:o[4]||(o[4]=i=>w())},null,8,["loading","title"])]),_:1})]),_:1}),e(H,{ref_key:"verify",ref:R,captchaType:t(S),imgSize:{width:"400px",height:"200px"},mode:"pop",onSuccess:C},null,8,["captchaType"])]),_:1})]),_:1},8,["model"])),[[B,t(T)]])}}}),[["__scopeId","data-v-1de2631f"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/Login/components/LoginForm.vue"]])});export{Te as __tla,L as default};
