import{_ as b,__tla as E}from"./Dialog-07bcd661.js";import{d as D,r as o,o as f,q as c,e as t,b as l,h as s,t as u,a,a0 as I,j as S,_ as g,__tla as A}from"./index-b079f499.js";import{E as Y,a as x,__tla as O}from"./el-descriptions-item-e73526e0.js";import{_ as P,__tla as V}from"./DictTag-6d4c3489.js";import{D as p,__tla as j}from"./dict-2c56908b.js";import{f as d,__tla as k}from"./formatTime-0805635f.js";import"./color-f5b6e279.js";let v,w=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return k}catch{}})()]).then(async()=>{v=g(D({name:"MyNotifyMessageDetailDetail",__name:"MyNotifyMessageDetail",setup(C,{expose:M}){const r=o(!1),m=o(!1),e=o({});return M({open:async n=>{r.value=!0,m.value=!0;try{e.value=n}finally{m.value=!1}}}),(n,y)=>{const _=Y,i=P,T=x,h=b;return f(),c(h,{modelValue:a(r),"onUpdate:modelValue":y[0]||(y[0]=N=>S(r)?r.value=N:null),"max-height":500,scroll:!0,title:"\u6D88\u606F\u8BE6\u60C5"},{default:t(()=>[l(T,{column:1,border:""},{default:t(()=>[l(_,{label:"\u53D1\u9001\u4EBA"},{default:t(()=>[s(u(a(e).templateNickname),1)]),_:1}),l(_,{label:"\u53D1\u9001\u65F6\u95F4"},{default:t(()=>[s(u(a(d)(a(e).createTime)),1)]),_:1}),l(_,{label:"\u6D88\u606F\u7C7B\u578B"},{default:t(()=>[l(i,{type:a(p).SYSTEM_NOTIFY_TEMPLATE_TYPE,value:a(e).templateType},null,8,["type","value"])]),_:1}),l(_,{label:"\u662F\u5426\u5DF2\u8BFB"},{default:t(()=>[l(i,{type:a(p).INFRA_BOOLEAN_STRING,value:a(e).readStatus},null,8,["type","value"])]),_:1}),a(e).readStatus?(f(),c(_,{key:0,label:"\u9605\u8BFB\u65F6\u95F4"},{default:t(()=>[s(u(a(d)(a(e).readTime)),1)]),_:1})):I("",!0),l(_,{label:"\u5185\u5BB9"},{default:t(()=>[s(u(a(e).templateContent),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/notify/my/MyNotifyMessageDetail.vue"]])});export{w as __tla,v as default};
