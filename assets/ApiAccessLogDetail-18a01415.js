import{_ as I,__tla as w}from"./Dialog-8f786edd.js";import{d as T,r as o,o as d,v as U,w as t,f as r,h as _,t as l,a,c as p,a5 as C,l as E,_ as L,__tla as P}from"./index-f0743f71.js";import{E as q,a as x,__tla as M}from"./el-descriptions-item-73ac4081.js";import{_ as V,__tla as j}from"./DictTag-4f08045a.js";import{D as k,__tla as N}from"./dict-4a9940b3.js";import{f as y,__tla as Y}from"./formatTime-e6df2ea5.js";import"./color-f5b6e279.js";let b,G=Promise.all([(()=>{try{return w}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return Y}catch{}})()]).then(async()=>{let i,c;i={key:0},c={key:1},b=L(T({name:"ApiAccessLogDetail",__name:"ApiAccessLogDetail",setup(R,{expose:h}){const u=o(!1),n=o(!1),e=o({});return h({open:async m=>{u.value=!0,n.value=!0;try{e.value=m}finally{n.value=!1}}}),(m,f)=>{const s=q,v=V,A=x,g=I;return d(),U(g,{modelValue:a(u),"onUpdate:modelValue":f[0]||(f[0]=D=>E(u)?u.value=D:null),"max-height":500,scroll:!0,title:"\u8BE6\u60C5",width:"800"},{default:t(()=>[r(A,{column:1,border:""},{default:t(()=>[r(s,{label:"\u65E5\u5FD7\u4E3B\u952E","min-width":"120"},{default:t(()=>[_(l(a(e).id),1)]),_:1}),r(s,{label:"\u94FE\u8DEF\u8FFD\u8E2A"},{default:t(()=>[_(l(a(e).traceId),1)]),_:1}),r(s,{label:"\u5E94\u7528\u540D"},{default:t(()=>[_(l(a(e).applicationName),1)]),_:1}),r(s,{label:"\u7528\u6237\u4FE1\u606F"},{default:t(()=>[_(l(a(e).userId)+" ",1),r(v,{type:a(k).USER_TYPE,value:a(e).userType},null,8,["type","value"])]),_:1}),r(s,{label:"\u7528\u6237 IP"},{default:t(()=>[_(l(a(e).userIp),1)]),_:1}),r(s,{label:"\u7528\u6237 UA"},{default:t(()=>[_(l(a(e).userAgent),1)]),_:1}),r(s,{label:"\u8BF7\u6C42\u4FE1\u606F"},{default:t(()=>[_(l(a(e).requestMethod)+" "+l(a(e).requestUrl),1)]),_:1}),r(s,{label:"\u8BF7\u6C42\u53C2\u6570"},{default:t(()=>[_(l(a(e).requestParams),1)]),_:1}),r(s,{label:"\u8BF7\u6C42\u65F6\u95F4"},{default:t(()=>[_(l(a(y)(a(e).beginTime))+" ~ "+l(a(y)(a(e).endTime)),1)]),_:1}),r(s,{label:"\u8BF7\u6C42\u8017\u65F6"},{default:t(()=>[_(l(a(e).duration)+" ms",1)]),_:1}),r(s,{label:"\u64CD\u4F5C\u7ED3\u679C"},{default:t(()=>[a(e).resultCode===0?(d(),p("div",i,"\u6B63\u5E38")):a(e).resultCode>0?(d(),p("div",c," \u5931\u8D25 | "+l(a(e).resultCode)+" | "+l(a(e).resultMsg),1)):C("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),[["__file","E:/newCode/GYZX-UI-ADMIN/src/views/infra/apiAccessLog/ApiAccessLogDetail.vue"]])});export{G as __tla,b as default};