import{ap as a,__tla as o}from"./index-d2088aec.js";let e,c=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{e={getStockPage:async t=>await a.get({url:"/erp/stock/page",params:t}),getStock:async t=>await a.get({url:"/erp/stock/get?id="+t}),getStock2:async(t,r)=>await a.get({url:"/erp/stock/get",params:{productId:t,warehouseId:r}}),getStockCount:async t=>await a.get({url:"/erp/stock/get-count",params:{productId:t}}),exportStock:async t=>await a.download({url:"/erp/stock/export-excel",params:t})}});export{e as S,c as __tla};
