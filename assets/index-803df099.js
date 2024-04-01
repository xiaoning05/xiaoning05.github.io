import{d as Z,r as P,n as z,p as B,D as F,o as S,c as J,b as i,e as u,a as e,e6 as _,as as d,f as K,w as M,q as Q,h as W,c4 as H,a8 as N,aa as U,_ as Y,A as $,__tla as ee}from"./index-34f06ebd.js";import{E as te,__tla as ae}from"./el-skeleton-item-b50e3883.js";import{_ as re,__tla as le}from"./Echart.vue_vue_type_script_setup_true_lang-70105d03.js";import{_ as oe,__tla as ce}from"./index.vue_vue_type_script_setup_true_lang-403cc5cb.js";import{c as ie,d as se,e as ne,f as ue,__tla as me}from"./trade-402c6e06.js";import{_ as g,__tla as de}from"./TradeStatisticValue.vue_vue_type_script_setup_true_lang-90e4b4ac.js";import{_ as f,__tla as pe}from"./index.vue_vue_type_script_setup_true_lang-da5e164f.js";import{d as _e}from"./download-20922b56.js";import{C as fe,__tla as ye}from"./CardTitle-b727423c.js";import{m as ve,f as Pe,__tla as xe}from"./formatTime-ed0a77fd.js";import{u as ge,__tla as he}from"./useMessage-7a5ab7ef.js";import{E as be,__tla as we}from"./index-460c50ff.js";import{_ as Ce}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ke}from"./CountTo.vue_vue_type_script_setup_true_lang-fa13acf4.js";let A,Se=Promise.all([(()=>{try{return ee}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return de}catch{}})(),(()=>{try{return pe}catch{}})(),(()=>{try{return ye}catch{}})(),(()=>{try{return xe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let w,C;w={class:"flex flex-col"},C={class:"flex flex-row items-center justify-between"},A=Ce(Z({name:"TradeStatistics",__name:"index",setup(Ae){const O=ge(),h=P(!0),b=P(!1),m=P(),s=P(),y=P(),x=z({dataset:{dimensions:["date","turnoverPrice","orderPayPrice","rechargePrice","expensePrice"],source:[]},grid:{left:20,right:20,bottom:20,top:80,containLabel:!0},legend:{top:50},series:[{name:"\u8425\u4E1A\u989D",type:"line",smooth:!0},{name:"\u5546\u54C1\u652F\u4ED8\u91D1\u989D",type:"line",smooth:!0},{name:"\u5145\u503C\u91D1\u989D",type:"line",smooth:!0},{name:"\u652F\u51FA\u91D1\u989D",type:"line",smooth:!0}],toolbox:{feature:{dataZoom:{yAxisIndex:!1},brush:{type:["lineX","clear"]},saveAsImage:{show:!0,name:"\u4EA4\u6613\u72B6\u51B5"}}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1}},yAxis:{axisTick:{show:!1}}}),R=async()=>{h.value=!0;const p=y.value.times;ve(p[0],p[1])&&(p[0]=Pe(H(p[0]).subtract(1,"d"))),await Promise.all([I(),T()]),h.value=!1},I=async()=>{const p=y.value.times;s.value=await se({times:p})},T=async()=>{const p=y.value.times,v=await ne({times:p});for(let n of v)n.turnoverPrice=d(n.turnoverPrice),n.orderPayPrice=d(n.orderPayPrice),n.rechargePrice=d(n.rechargePrice),n.expensePrice=d(n.expensePrice);x.dataset&&x.dataset.source&&(x.dataset.source=v)},j=async()=>{try{await O.exportConfirm(),b.value=!0;const p=y.value.times,v=await ue({times:p});_e.excel(v,"\u4EA4\u6613\u72B6\u51B5.xls")}catch{}finally{b.value=!1}};return B(async()=>{await(async()=>{m.value=await ie()})()}),(p,v)=>{const n=N,k=U,D=Y,E=$,G=oe,q=re,L=te,V=be,X=F("hasPermi");return S(),J("div",w,[i(k,{gutter:16,class:"summary"},{default:u(()=>[i(n,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u6628\u65E5\u8BA2\u5355\u6570\u91CF",title:"\u6628\u65E5\u8BA2\u5355\u6570\u91CF",value:((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.yesterdayOrderCount)||0,percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.yesterdayOrderCount,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.yesterdayOrderCount)},null,8,["value","percent"])]}),_:1}),i(n,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u672C\u6708\u8BA2\u5355\u6570\u91CF",title:"\u672C\u6708\u8BA2\u5355\u6570\u91CF",value:((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.monthOrderCount)||0,percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.monthOrderCount,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.monthOrderCount)},null,8,["value","percent"])]}),_:1}),i(n,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u6628\u65E5\u652F\u4ED8\u91D1\u989D",title:"\u6628\u65E5\u652F\u4ED8\u91D1\u989D",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.yesterdayPayPrice)||0),percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.yesterdayPayPrice,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.yesterdayPayPrice)},null,8,["value","percent"])]}),_:1}),i(n,{sm:6,xs:12},{default:u(()=>{var t,a,r,l,o,c;return[i(g,{tooltip:"\u672C\u6708\u652F\u4ED8\u91D1\u989D",title:"\u672C\u6708\u652F\u4ED8\u91D1\u989D",prefix:"\uFFE5",":decimals":2,value:e(d)(((a=(t=e(m))==null?void 0:t.value)==null?void 0:a.monthPayPrice)||0),percent:e(_)((l=(r=e(m))==null?void 0:r.value)==null?void 0:l.monthPayPrice,(c=(o=e(m))==null?void 0:o.reference)==null?void 0:c.monthPayPrice)},null,8,["value","percent"])]}),_:1})]),_:1}),i(V,{shadow:"never"},{header:u(()=>[K("div",C,[i(e(fe),{title:"\u4EA4\u6613\u72B6\u51B5"}),i(G,{ref_key:"shortcutDateRangePicker",ref:y,onChange:R},{default:u(()=>[M((S(),Q(E,{class:"ml-4",onClick:j,loading:e(b)},{default:u(()=>[i(D,{icon:"ep:download",class:"mr-1"}),W("\u5BFC\u51FA ")]),_:1},8,["loading"])),[[X,["statistics:trade:export"]]])]),_:1},512)])]),default:u(()=>[i(k,{gutter:16},{default:u(()=>[i(n,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(f,{title:"\u8425\u4E1A\u989D",tooltip:"\u5546\u54C1\u652F\u4ED8\u91D1\u989D\u3001\u5145\u503C\u91D1\u989D",icon:"fa-solid:yen-sign","icon-color":"bg-blue-100","icon-bg-color":"text-blue-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(s))==null?void 0:t.value)==null?void 0:a.turnoverPrice)||0),percent:e(_)((l=(r=e(s))==null?void 0:r.value)==null?void 0:l.turnoverPrice,(c=(o=e(s))==null?void 0:o.reference)==null?void 0:c.turnoverPrice)},null,8,["value","percent"])]}),_:1}),i(n,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(f,{title:"\u5546\u54C1\u652F\u4ED8\u91D1\u989D",tooltip:"\u7528\u6237\u8D2D\u4E70\u5546\u54C1\u7684\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\uFF0C\u5305\u62EC\u5FAE\u4FE1\u652F\u4ED8\u3001\u4F59\u989D\u652F\u4ED8\u3001\u652F\u4ED8\u5B9D\u652F\u4ED8\u3001\u7EBF\u4E0B\u652F\u4ED8\u91D1\u989D\uFF08\u62FC\u56E2\u5546\u54C1\u5728\u6210\u56E2\u4E4B\u540E\u8BA1\u5165\uFF0C\u7EBF\u4E0B\u652F\u4ED8\u8BA2\u5355\u5728\u540E\u53F0\u786E\u8BA4\u652F\u4ED8\u540E\u8BA1\u5165\uFF09",icon:"fa-solid:shopping-cart","icon-color":"bg-purple-100","icon-bg-color":"text-purple-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(s))==null?void 0:t.value)==null?void 0:a.orderPayPrice)||0),percent:e(_)((l=(r=e(s))==null?void 0:r.value)==null?void 0:l.orderPayPrice,(c=(o=e(s))==null?void 0:o.reference)==null?void 0:c.orderPayPrice)},null,8,["value","percent"])]}),_:1}),i(n,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(f,{title:"\u5145\u503C\u91D1\u989D",tooltip:"\u7528\u6237\u6210\u529F\u5145\u503C\u7684\u91D1\u989D",icon:"fa-solid:money-check-alt","icon-color":"bg-yellow-100","icon-bg-color":"text-yellow-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(s))==null?void 0:t.value)==null?void 0:a.rechargePrice)||0),percent:e(_)((l=(r=e(s))==null?void 0:r.value)==null?void 0:l.rechargePrice,(c=(o=e(s))==null?void 0:o.reference)==null?void 0:c.rechargePrice)},null,8,["value","percent"])]}),_:1}),i(n,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(f,{title:"\u652F\u51FA\u91D1\u989D",tooltip:"\u4F59\u989D\u652F\u4ED8\u91D1\u989D\u3001\u652F\u4ED8\u4F63\u91D1\u91D1\u989D\u3001\u5546\u54C1\u9000\u6B3E\u91D1\u989D",icon:"ep:warning-filled","icon-color":"bg-green-100","icon-bg-color":"text-green-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(s))==null?void 0:t.value)==null?void 0:a.expensePrice)||0),percent:e(_)((l=(r=e(s))==null?void 0:r.value)==null?void 0:l.expensePrice,(c=(o=e(s))==null?void 0:o.reference)==null?void 0:c.expensePrice)},null,8,["value","percent"])]}),_:1}),i(n,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(f,{title:"\u4F59\u989D\u652F\u4ED8\u91D1\u989D",tooltip:"\u7528\u6237\u4E0B\u5355\u65F6\u4F7F\u7528\u4F59\u989D\u5B9E\u9645\u652F\u4ED8\u7684\u91D1\u989D",icon:"fa-solid:wallet","icon-color":"bg-cyan-100","icon-bg-color":"text-cyan-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(s))==null?void 0:t.value)==null?void 0:a.walletPayPrice)||0),percent:e(_)((l=(r=e(s))==null?void 0:r.value)==null?void 0:l.walletPayPrice,(c=(o=e(s))==null?void 0:o.reference)==null?void 0:c.walletPayPrice)},null,8,["value","percent"])]}),_:1}),i(n,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(f,{title:"\u652F\u4ED8\u4F63\u91D1\u91D1\u989D",tooltip:"\u540E\u53F0\u7ED9\u63A8\u5E7F\u5458\u652F\u4ED8\u7684\u63A8\u5E7F\u4F63\u91D1\uFF0C\u4EE5\u5B9E\u9645\u652F\u4ED8\u4E3A\u51C6",icon:"fa-solid:award","icon-color":"bg-yellow-100","icon-bg-color":"text-yellow-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(s))==null?void 0:t.value)==null?void 0:a.brokerageSettlementPrice)||0),percent:e(_)((l=(r=e(s))==null?void 0:r.value)==null?void 0:l.brokerageSettlementPrice,(c=(o=e(s))==null?void 0:o.reference)==null?void 0:c.brokerageSettlementPrice)},null,8,["value","percent"])]}),_:1}),i(n,{md:6,sm:12,xs:24},{default:u(()=>{var t,a,r,l,o,c;return[i(f,{title:"\u5546\u54C1\u9000\u6B3E\u91D1\u989D",tooltip:"\u7528\u6237\u6210\u529F\u9000\u6B3E\u7684\u5546\u54C1\u91D1\u989D",icon:"fa-solid:times-circle","icon-color":"bg-blue-100","icon-bg-color":"text-blue-500",prefix:"\uFFE5",decimals:2,value:e(d)(((a=(t=e(s))==null?void 0:t.value)==null?void 0:a.afterSaleRefundPrice)||0),percent:e(_)((l=(r=e(s))==null?void 0:r.value)==null?void 0:l.afterSaleRefundPrice,(c=(o=e(s))==null?void 0:o.reference)==null?void 0:c.afterSaleRefundPrice)},null,8,["value","percent"])]}),_:1})]),_:1}),i(L,{loading:e(h),animated:""},{default:u(()=>[i(q,{height:500,options:e(x)},null,8,["options"])]),_:1},8,["loading"])]),_:1})])}}}),[["__scopeId","data-v-ed446fe4"]])});export{Se as __tla,A as default};
