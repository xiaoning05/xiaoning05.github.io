import{ap as m,d as j,r as _,p as b,o as k,c as E,f as t,w as s,a as l,j as H,k as I,__tla as q}from"./index-d5b00dc9.js";import{_ as u,__tla as z}from"./SummaryCard.vue_vue_type_script_setup_true_lang-d4b22c9d.js";import{_ as x,__tla as A}from"./TimeSummaryChart.vue_vue_type_script_setup_true_lang-293d8f8f.js";import{_ as B}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as C}from"./CountTo.vue_vue_type_script_setup_true_lang-53601850.js";import{__tla as D}from"./Echart.vue_vue_type_script_setup_true_lang-4e4b8bf4.js";import{__tla as F}from"./CardTitle-96324b61.js";import{__tla as G}from"./index-bd0d9e6c.js";let h,J=Promise.all([(()=>{try{return q}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{let d,o,c,v,y;d=async()=>await m.get({url:"/erp/sale-statistics/summary"}),o=async()=>await m.get({url:"/erp/sale-statistics/time-summary"}),c=async()=>await m.get({url:"/erp/purchase-statistics/summary"}),v=async()=>await m.get({url:"/erp/purchase-statistics/time-summary"}),y={class:"flex flex-col"},h=B(j({name:"ErpHome",__name:"index",setup(K){const e=_(!0),i=_(),g=_(),w=async()=>{i.value=await d(),g.value=await o()},n=_(),f=_(),P=async()=>{n.value=await c(),f.value=await v()};return b(async()=>{e.value=!0,await Promise.all([w(),P()]),e.value=!1}),(L,M)=>{const r=H,p=I;return k(),E("div",y,[t(p,{gutter:16,class:"row"},{default:s(()=>[t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u4ECA\u65E5\u9500\u552E",value:(a=l(i))==null?void 0:a.todayPrice},null,8,["value"])]}),_:1},8,["loading"]),t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u6628\u65E5\u9500\u552E",value:(a=l(i))==null?void 0:a.yesterdayPrice},null,8,["value"])]}),_:1},8,["loading"]),t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u4ECA\u65E5\u91C7\u8D2D",value:(a=l(n))==null?void 0:a.todayPrice},null,8,["value"])]}),_:1},8,["loading"]),t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u6628\u65E5\u91C7\u8D2D",value:(a=l(n))==null?void 0:a.yesterdayPrice},null,8,["value"])]}),_:1},8,["loading"]),t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u672C\u6708\u9500\u552E",value:(a=l(i))==null?void 0:a.monthPrice},null,8,["value"])]}),_:1},8,["loading"]),t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u4ECA\u5E74\u9500\u552E",value:(a=l(i))==null?void 0:a.yearPrice},null,8,["value"])]}),_:1},8,["loading"]),t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u672C\u6708\u91C7\u8D2D",value:(a=l(n))==null?void 0:a.monthPrice},null,8,["value"])]}),_:1},8,["loading"]),t(r,{md:6,sm:12,xs:24,loading:l(e)},{default:s(()=>{var a;return[t(u,{title:"\u4ECA\u5E74\u91C7\u8D2D",value:(a=l(n))==null?void 0:a.yearPrice},null,8,["value"])]}),_:1},8,["loading"])]),_:1}),t(p,{gutter:16,class:"row"},{default:s(()=>[t(r,{md:12,sm:12,xs:24,loading:l(e)},{default:s(()=>[t(x,{title:"\u9500\u552E\u7EDF\u8BA1",value:l(g)},null,8,["value"])]),_:1},8,["loading"]),t(r,{md:12,sm:12,xs:24,loading:l(e)},{default:s(()=>[t(x,{title:"\u91C7\u8D2D\u7EDF\u8BA1",value:l(f)},null,8,["value"])]),_:1},8,["loading"])]),_:1})])}}}),[["__scopeId","data-v-7eeb99c2"]])});export{J as __tla,h as default};
