import{ao as d,d as I,r as _,p as b,o as E,c as j,b as l,e as s,a as t,a9 as A,ab as C,_ as D,__tla as G}from"./index-b079f499.js";import u,{__tla as H}from"./SummaryCard-ff30f2b7.js";import x,{__tla as M}from"./TimeSummaryChart-6a15062a.js";import{__tla as N}from"./CountTo-993564ef.js";import{__tla as U}from"./Echart-9111e6ab.js";import{__tla as X}from"./CardTitle-55c77ba2.js";import{__tla as Y}from"./index-3be78f60.js";let h,Z=Promise.all([(()=>{try{return G}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return M}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return U}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Y}catch{}})()]).then(async()=>{let o,m,c,v,g;o=async()=>await d.get({url:"/erp/sale-statistics/summary"}),m=async()=>await d.get({url:"/erp/sale-statistics/time-summary"}),c=async()=>await d.get({url:"/erp/purchase-statistics/summary"}),v=async()=>await d.get({url:"/erp/purchase-statistics/time-summary"}),g={class:"flex flex-col"},h=D(I({name:"ErpHome",__name:"index",setup(k){const e=_(!0),i=_(),y=_(),w=async()=>{i.value=await o(),y.value=await m()},n=_(),f=_(),P=async()=>{n.value=await c(),f.value=await v()};return b(async()=>{e.value=!0,await Promise.all([w(),P()]),e.value=!1}),(q,z)=>{const r=A,p=C;return E(),j("div",g,[l(p,{gutter:16,class:"row"},{default:s(()=>[l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u4ECA\u65E5\u9500\u552E",value:(a=t(i))==null?void 0:a.todayPrice},null,8,["value"])]}),_:1},8,["loading"]),l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u6628\u65E5\u9500\u552E",value:(a=t(i))==null?void 0:a.yesterdayPrice},null,8,["value"])]}),_:1},8,["loading"]),l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u4ECA\u65E5\u91C7\u8D2D",value:(a=t(n))==null?void 0:a.todayPrice},null,8,["value"])]}),_:1},8,["loading"]),l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u6628\u65E5\u91C7\u8D2D",value:(a=t(n))==null?void 0:a.yesterdayPrice},null,8,["value"])]}),_:1},8,["loading"]),l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u672C\u6708\u9500\u552E",value:(a=t(i))==null?void 0:a.monthPrice},null,8,["value"])]}),_:1},8,["loading"]),l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u4ECA\u5E74\u9500\u552E",value:(a=t(i))==null?void 0:a.yearPrice},null,8,["value"])]}),_:1},8,["loading"]),l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u672C\u6708\u91C7\u8D2D",value:(a=t(n))==null?void 0:a.monthPrice},null,8,["value"])]}),_:1},8,["loading"]),l(r,{md:6,sm:12,xs:24,loading:t(e)},{default:s(()=>{var a;return[l(u,{title:"\u4ECA\u5E74\u91C7\u8D2D",value:(a=t(n))==null?void 0:a.yearPrice},null,8,["value"])]}),_:1},8,["loading"])]),_:1}),l(p,{gutter:16,class:"row"},{default:s(()=>[l(r,{md:12,sm:12,xs:24,loading:t(e)},{default:s(()=>[l(x,{title:"\u9500\u552E\u7EDF\u8BA1",value:t(y)},null,8,["value"])]),_:1},8,["loading"]),l(r,{md:12,sm:12,xs:24,loading:t(e)},{default:s(()=>[l(x,{title:"\u91C7\u8D2D\u7EDF\u8BA1",value:t(f)},null,8,["value"])]),_:1},8,["loading"])]),_:1})])}}}),[["__scopeId","data-v-f8e54892"],["__file","E:/newCode/GYZX-UI-ADMIN/src/views/erp/home/index.vue"]])});export{Z as __tla,h as default};