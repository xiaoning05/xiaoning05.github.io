import{_ as E,__tla as M}from"./Dialog.vue_vue_type_style_index_0_lang-03cf6454.js";import{d as S,r as o,o as f,v as p,w as e,f as l,h as s,t as u,a,a4 as g,l as D,__tla as x}from"./index-d5b00dc9.js";import{E as A,a as I,__tla as O}from"./el-descriptions-item-2a4731b6.js";import{_ as P,__tla as V}from"./DictTag.vue_vue_type_script_lang-2a9ae33e.js";import{D as i,__tla as Y}from"./dict-29b94c3f.js";import{f as d,__tla as k}from"./formatTime-9063410f.js";let v,F=Promise.all([(()=>{try{return M}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return k}catch{}})()]).then(async()=>{v=S({name:"MyNotifyMessageDetailDetail",__name:"MyNotifyMessageDetail",setup(L,{expose:h}){const r=o(!1),m=o(!1),t=o({});return h({open:async n=>{r.value=!0,m.value=!0;try{t.value=n}finally{m.value=!1}}}),(n,c)=>{const _=A,y=P,T=I,b=E;return f(),p(b,{modelValue:a(r),"onUpdate:modelValue":c[0]||(c[0]=N=>D(r)?r.value=N:null),"max-height":500,scroll:!0,title:"\u6D88\u606F\u8BE6\u60C5"},{default:e(()=>[l(T,{column:1,border:""},{default:e(()=>[l(_,{label:"\u53D1\u9001\u4EBA"},{default:e(()=>[s(u(a(t).templateNickname),1)]),_:1}),l(_,{label:"\u53D1\u9001\u65F6\u95F4"},{default:e(()=>[s(u(a(d)(a(t).createTime)),1)]),_:1}),l(_,{label:"\u6D88\u606F\u7C7B\u578B"},{default:e(()=>[l(y,{type:a(i).SYSTEM_NOTIFY_TEMPLATE_TYPE,value:a(t).templateType},null,8,["type","value"])]),_:1}),l(_,{label:"\u662F\u5426\u5DF2\u8BFB"},{default:e(()=>[l(y,{type:a(i).INFRA_BOOLEAN_STRING,value:a(t).readStatus},null,8,["type","value"])]),_:1}),a(t).readStatus?(f(),p(_,{key:0,label:"\u9605\u8BFB\u65F6\u95F4"},{default:e(()=>[s(u(a(d)(a(t).readTime)),1)]),_:1})):g("",!0),l(_,{label:"\u5185\u5BB9"},{default:e(()=>[s(u(a(t).templateContent),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}})});export{v as _,F as __tla};
