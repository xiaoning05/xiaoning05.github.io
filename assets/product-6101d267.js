import{an as a,__tla as r}from"./index-34f06ebd.js";let s,c=Promise.all([(()=>{try{return r}catch{}})()]).then(async()=>{s={getProductStatisticsAnalyse:t=>a.get({url:"/statistics/product/analyse",params:t}),getProductStatisticsList:t=>a.get({url:"/statistics/product/list",params:t}),exportProductStatisticsExcel:t=>a.download({url:"/statistics/product/export-excel",params:t}),getProductStatisticsRankPage:async t=>await a.get({url:"/statistics/product/rank-page",params:t})}});export{s as P,c as __tla};
