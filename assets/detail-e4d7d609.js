import{_ as v,__tla as D}from"./ContentWrap.vue_vue_type_script_setup_true_lang-80915c85.js";import{d as M,ad as E,C as T,r as m,p as x,o as A,q as P,e as t,b as r,a,h as l,t as s,__tla as q}from"./index-34f06ebd.js";import{E as B,a as L,__tla as O}from"./el-descriptions-item-a4aeefac.js";import{_ as g,__tla as j}from"./DictTag.vue_vue_type_script_lang-942df0b2.js";import{D as w,__tla as C}from"./dict-e142e39a.js";import{f as n,__tla as V}from"./formatTime-ed0a77fd.js";import{g as k,__tla as z}from"./index-63f3c6ac.js";import{__tla as F}from"./index-460c50ff.js";import"./color-f5b6e279.js";let c,G=Promise.all([(()=>{try{return D}catch{}})(),(()=>{try{return q}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return F}catch{}})()]).then(async()=>{c=M({name:"BpmOALeaveDetail",__name:"detail",props:{id:E.number.def(void 0)},setup(i,{expose:p}){const{query:f}=T(),d=i,o=m(!1),_=m({}),y=f.id,u=async()=>{o.value=!0;try{_.value=await k(d.id||y)}finally{o.value=!1}};return p({open:u}),x(()=>{u()}),(H,I)=>{const Y=g,e=B,h=L,b=v;return A(),P(b,null,{default:t(()=>[r(h,{column:1,border:""},{default:t(()=>[r(e,{label:"\u8BF7\u5047\u7C7B\u578B"},{default:t(()=>[r(Y,{type:a(w).BPM_OA_LEAVE_TYPE,value:a(_).type},null,8,["type","value"])]),_:1}),r(e,{label:"\u5F00\u59CB\u65F6\u95F4"},{default:t(()=>[l(s(a(n)(a(_).startTime,"YYYY-MM-DD")),1)]),_:1}),r(e,{label:"\u7ED3\u675F\u65F6\u95F4"},{default:t(()=>[l(s(a(n)(a(_).endTime,"YYYY-MM-DD")),1)]),_:1}),r(e,{label:"\u539F\u56E0"},{default:t(()=>[l(s(a(_).reason),1)]),_:1})]),_:1})]),_:1})}}})});export{G as __tla,c as default};