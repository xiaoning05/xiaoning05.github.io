import{_ as h,__tla as E}from"./Dialog-9a73a39c.js";import{d as N,r as o,o as I,q as M,e as t,b as a,h as r,t as s,a as e,j as S,_ as g,__tla as D}from"./index-aaa5adb3.js";import{E as P,a as Y,__tla as A}from"./el-descriptions-item-815d7c36.js";import{_ as w,__tla as x}from"./DictTag-1c1088ae.js";import{D as d,__tla as C}from"./dict-f2796e71.js";import{f as p,__tla as O}from"./formatTime-9c0e8879.js";import"./color-f5b6e279.js";let y,R=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{y=g(N({name:"SystemNotifyMessageDetail",__name:"NotifyMessageDetail",setup(U,{expose:c}){const u=o(!1),f=o(!1),l=o({});return c({open:async n=>{u.value=!0,f.value=!0;try{l.value=n}finally{f.value=!1}}}),(n,i)=>{const _=P,m=w,b=Y,v=h;return I(),M(v,{modelValue:e(u),"onUpdate:modelValue":i[0]||(i[0]=T=>S(u)?u.value=T:null),"max-height":500,scroll:!0,title:"\u8BE6\u60C5"},{default:t(()=>[a(b,{column:1,border:""},{default:t(()=>[a(_,{label:"\u7F16\u53F7","min-width":"120"},{default:t(()=>[r(s(e(l).id),1)]),_:1}),a(_,{label:"\u7528\u6237\u7C7B\u578B"},{default:t(()=>[a(m,{type:e(d).USER_TYPE,value:e(l).userType},null,8,["type","value"])]),_:1}),a(_,{label:"\u7528\u6237\u7F16\u53F7"},{default:t(()=>[r(s(e(l).userId),1)]),_:1}),a(_,{label:"\u6A21\u7248\u7F16\u53F7"},{default:t(()=>[r(s(e(l).templateId),1)]),_:1}),a(_,{label:"\u6A21\u677F\u7F16\u7801"},{default:t(()=>[r(s(e(l).templateCode),1)]),_:1}),a(_,{label:"\u53D1\u9001\u4EBA\u540D\u79F0"},{default:t(()=>[r(s(e(l).templateNickname),1)]),_:1}),a(_,{label:"\u6A21\u7248\u5185\u5BB9"},{default:t(()=>[r(s(e(l).templateContent),1)]),_:1}),a(_,{label:"\u6A21\u7248\u53C2\u6570"},{default:t(()=>[r(s(e(l).templateParams),1)]),_:1}),a(_,{label:"\u6A21\u7248\u7C7B\u578B"},{default:t(()=>[a(m,{type:e(d).SYSTEM_NOTIFY_TEMPLATE_TYPE,value:e(l).templateType},null,8,["type","value"])]),_:1}),a(_,{label:"\u662F\u5426\u5DF2\u8BFB"},{default:t(()=>[a(m,{type:e(d).INFRA_BOOLEAN_STRING,value:e(l).readStatus},null,8,["type","value"])]),_:1}),a(_,{label:"\u9605\u8BFB\u65F6\u95F4"},{default:t(()=>[r(s(e(p)(e(l).readTime)),1)]),_:1}),a(_,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:t(()=>[r(s(e(p)(e(l).createTime)),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/system/notify/message/NotifyMessageDetail.vue"]])});export{R as __tla,y as default};