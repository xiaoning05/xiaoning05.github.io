import{ao as e,__tla as l}from"./index-aaa5adb3.js";let r,s=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{r={getSaleOrderPage:async a=>await e.get({url:"/erp/sale-order/page",params:a}),getSaleOrder:async a=>await e.get({url:"/erp/sale-order/get?id="+a}),createSaleOrder:async a=>await e.post({url:"/erp/sale-order/create",data:a}),updateSaleOrder:async a=>await e.put({url:"/erp/sale-order/update",data:a}),updateSaleOrderStatus:async(a,t)=>await e.put({url:"/erp/sale-order/update-status",params:{id:a,status:t}}),deleteSaleOrder:async a=>await e.delete({url:"/erp/sale-order/delete",params:{ids:a.join(",")}}),exportSaleOrder:async a=>await e.download({url:"/erp/sale-order/export-excel",params:a})}});export{r as S,s as __tla};
