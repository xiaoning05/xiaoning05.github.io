import{dn as o,dp as O,aL as i,dq as P,dr as j,d as x,ad as M,cj as k,X as m,o as _,q as p,e,M as L,a as d,O as q,b as f,c as z,g as A,h as I,t as R,F as T,_ as V,__tla as $}from"./index-34f06ebd.js";import{b as v,E as F,a as N,__tla as X}from"./el-dropdown-item-56a9fd7a.js";let h,B=Promise.all([(()=>{try{return $}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let g;g=()=>({changeLocale:async l=>{const t=o.global,c=await O(Object.assign({"../../locales/en.ts":()=>i(()=>import("./en-706ee4dd.js"),[]),"../../locales/zh-CN.ts":()=>i(()=>import("./zh-CN-a618d37e.js"),[])}),`../../locales/${l}.ts`);t.setLocaleMessage(l,c.default),(a=>{const n=P();o.mode==="legacy"?o.global.locale=a:o.global.locale.value=a,n.setCurrentLocale({lang:a}),j(a)})(l)}}),h=x({name:"LocaleDropdown",__name:"LocaleDropdown",props:{color:M.string.def("")},setup(l){const{getPrefixCls:t}=q(),c=t("locale-dropdown"),a=k(),n=m(()=>a.getLocaleMap),w=m(()=>a.getCurrentLocale),b=s=>{if(s===d(w).lang)return;window.location.reload(),a.setCurrentLocale({lang:s});const{changeLocale:u}=g();u(s)};return(s,u)=>{const C=V,y=F,D=N,E=v;return _(),p(E,{class:L(d(c)),trigger:"click",onCommand:b},{dropdown:e(()=>[f(D,null,{default:e(()=>[(_(!0),z(T,null,A(d(n),r=>(_(),p(y,{key:r.lang,command:r.lang},{default:e(()=>[I(R(r.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:e(()=>[f(C,{class:L([s.$attrs.class,"cursor-pointer !p-0"]),color:l.color,size:18,icon:"ion:language-sharp"},null,8,["class","color"])]),_:1},8,["class"])}}})});export{h as _,B as __tla};